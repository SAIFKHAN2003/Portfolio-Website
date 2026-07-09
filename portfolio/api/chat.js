export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, ttsEnabled } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Gemini API key is not configured in environment variables.' });
  }

  const systemPrompt = `You are the AI Clone of Saif Ur Rahman Khan. Speak directly to visitors of your portfolio website.
Answer in first person ("I", "my", "me").
Keep your responses short, concise, and highly professional yet friendly, similar to Saif's communication style (under 3 sentences).
Do not generate markdown formatting like bold (**), bullet points, or list numbers in your responses, as this text will be read aloud by browser Speech Synthesis. Speak in natural conversational text.

Use the following background details to answer:
- Full Name: Saif Ur Rahman Khan
- Email: khansaif989341@gmail.com, Phone: +91-7389426580
- Current Job: R&D Trainee at Denso International India, Manesar (July 2025 - Present). Benchmarking combo boxes, V2X charger switching stress, Maruti Suzuki/Toyota field testing.
- B.Tech: Electrical Engineering from Jamia Millia Islamia, New Delhi (2021-2025), GPA 8.51/10.
- Masters Plan: Pursuing Masters in Europe, Fall 2027.
- Key Projects:
  1. Hydrogen PEMFC Hybrid E-Bike: Extends range to 100-120 km. Received ₹20,000 funding from JMI Alumni.
  2. IoT Solar Pump & Manuring System: Arduino controlled. Won DTU-IIF IdeaThon 2024 (₹10,000 prize).
  3. Green Hydrogen Production (>50 TPD): Smart India Hackathon (SIH 2024) Hardware Edition Finalist.
  4. Remote Village Hydrogen Microgrid: Modelled in HOMER Pro.
- Internships: JMI Control Lab (Fuzzy Eddy Current brakes), Tata Power DDL (ML Rooftop PV predictions), Tesla Transformers (Inverter Duty Transformers).
- Academic References & Supervisors:
  1. Prof. Majid Jamil: Professor at Jamia Millia Islamia. My undergraduate thesis supervisor and research supervisor (for the Hybrid E-Bike project, village hydrogen microgrid study, and SIH green hydrogen facility).
  2. Prof. Shakeb Ahmad Khan: Professor at Jamia Millia Islamia. Co-author on battery SoC deep learning papers & academic referee.
  3. Prof. Arunesh Kumar Singh: Associate Professor at Jamia Millia Islamia. My internship supervisor in JMI Control Lab (for AI Fuzzy Eddy Current energy absorption project).`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: message }]
            }
          ],
          systemInstruction: {
            parts: [{ text: systemPrompt }]
          },
          generationConfig: {
            maxOutputTokens: 150,
            temperature: 0.7,
            thinkingConfig: {
              thinkingBudget: 0
            }
          }
        }),
      }
    );

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't process that. Let's chat about my engineering projects!";
    const trimmedReply = reply.trim();

    let audioBase64 = null;
    const elApiKey = process.env.ELEVENLABS_API_KEY;
    const elVoiceId = process.env.ELEVENLABS_VOICE_ID;

    if (ttsEnabled && elApiKey && elVoiceId) {
      try {
        const cleanText = trimmedReply.replace(/[🏆#*\[\]\-\(\)]/g, " ");
        const elResponse = await fetch(
          `https://api.elevenlabs.io/v1/text-to-speech/${elVoiceId}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'xi-api-key': elApiKey
            },
            body: JSON.stringify({
              text: cleanText,
              model_id: 'eleven_flash_v2_5',
              voice_settings: {
                stability: 0.5,
                similarity_boost: 0.75
              }
            })
          }
        );

        if (elResponse.ok) {
          const arrayBuffer = await elResponse.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);
          audioBase64 = `data:audio/mpeg;base64,${buffer.toString('base64')}`;
        }
      } catch (elError) {
        console.error("ElevenLabs Error:", elError);
      }
    }
    
    return res.status(200).json({ text: trimmedReply, audio: audioBase64 });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to generate response' });
  }
}
