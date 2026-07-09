document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const chatFab = document.getElementById("chatFab");
  const chatWidget = document.getElementById("chatWidget");
  const chatMessages = document.getElementById("chatMessages");
  const chatInput = document.getElementById("chatInput");
  const chatSendBtn = document.getElementById("chatSendBtn");
  const ttsToggle = document.getElementById("ttsToggle");
  const audioWaves = document.getElementById("audioWaves");
  const chatChips = document.querySelectorAll(".chat-chip");

  // State
  let isTtsEnabled = true;
  let activeUtterance = null;
  let selectedVoice = null;
  let activeAudio = null;

  // Toggle Chat
  chatFab.addEventListener("click", () => {
    chatWidget.classList.toggle("active");
    chatFab.classList.toggle("active");
    if (chatWidget.classList.contains("active")) {
      chatInput.focus();
      // Add welcome message if empty
      if (chatMessages.children.length === 0) {
        addBotMessage("Hi there! I am Saif's AI Clone. Ask me anything about my B.Tech at Jamia Millia Islamia, my R&D training at Denso, or my hydrogen energy research!");
      }
    } else {
      stopSpeaking();
    }
  });

  // Toggle Mute / Speech Synthesis
  ttsToggle.addEventListener("click", () => {
    isTtsEnabled = !isTtsEnabled;
    if (isTtsEnabled) {
      ttsToggle.innerHTML = '<i data-lucide="volume-2" width="16" height="16"></i>';
      ttsToggle.style.color = "var(--accent)";
    } else {
      ttsToggle.innerHTML = '<i data-lucide="volume-x" width="16" height="16"></i>';
      ttsToggle.style.color = "var(--text-secondary)";
      stopSpeaking();
    }
    if (window.lucide) lucide.createIcons();
  });

  // Voice setup for Speech Synthesis
  function loadVoices() {
    if (!window.speechSynthesis) return;
    const voices = window.speechSynthesis.getVoices();
    // Try to find a premium/natural English voice, fallback to default
    selectedVoice = voices.find(v => v.name.includes("Google US English") || v.name.includes("Google UK English Male") || v.name.includes("Microsoft David") || (v.lang.startsWith("en") && !v.name.includes("Zira")));
    if (!selectedVoice) {
      selectedVoice = voices.find(v => v.lang.startsWith("en"));
    }
  }

  if (window.speechSynthesis) {
    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  }

  // Handle Speech Synthesis
  function speak(text) {
    if (!isTtsEnabled || !window.speechSynthesis) return;
    stopSpeaking();

    // Clean text of formatting characters that sound weird when spoken
    const cleanText = text.replace(/[🏆#*\[\]\-\(\)]/g, " ");

    activeUtterance = new SpeechSynthesisUtterance(cleanText);
    if (selectedVoice) activeUtterance.voice = selectedVoice;
    activeUtterance.rate = 1.05; // slightly faster rate
    activeUtterance.pitch = 1.0;

    activeUtterance.onstart = () => {
      audioWaves.style.display = "flex";
    };

    activeUtterance.onend = () => {
      audioWaves.style.display = "none";
    };

    activeUtterance.onerror = () => {
      audioWaves.style.display = "none";
    };

    window.speechSynthesis.speak(activeUtterance);
  }

  function stopSpeaking() {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (activeAudio) {
      activeAudio.pause();
      activeAudio = null;
    }
    audioWaves.style.display = "none";
  }

  function playElevenLabsAudio(url) {
    stopSpeaking();
    activeAudio = new Audio(url);
    activeAudio.onplay = () => {
      audioWaves.style.display = "flex";
    };
    activeAudio.onended = () => {
      audioWaves.style.display = "none";
    };
    activeAudio.onerror = () => {
      audioWaves.style.display = "none";
    };
    activeAudio.play().catch(err => {
      console.error("Audio playback error:", err);
      audioWaves.style.display = "none";
    });
  }

  // Add Message to DOM
  function addUserMessage(text) {
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble chat-bubble--user";
    bubble.textContent = text;
    chatMessages.appendChild(bubble);
    scrollToBottom();
  }

  function addBotMessage(text, audioUrl) {
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble chat-bubble--bot";
    chatMessages.appendChild(bubble);
    scrollToBottom();

    // Typewriter effect
    let i = 0;
    const speed = 10; // ms per character
    function type() {
      if (i < text.length) {
        bubble.textContent += text.charAt(i);
        i++;
        scrollToBottom();
        setTimeout(type, speed);
      } else {
        // Trigger voice after text is done typing
        if (audioUrl) {
          playElevenLabsAudio(audioUrl);
        } else {
          speak(text);
        }
      }
    }
    type();
  }

  // Show Typing Indicator
  let typingIndicator = null;
  function showTypingIndicator() {
    typingIndicator = document.createElement("div");
    typingIndicator.className = "chat-bubble chat-bubble--bot";
    typingIndicator.innerHTML = `
      <div class="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    `;
    chatMessages.appendChild(typingIndicator);
    scrollToBottom();
  }

  function removeTypingIndicator() {
    if (typingIndicator) {
      typingIndicator.remove();
      typingIndicator = null;
    }
  }

  function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // API Call to Backend
  async function sendMessage(text) {
    if (!text.trim()) return;
    
    stopSpeaking();
    addUserMessage(text);
    showTypingIndicator();

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: text, ttsEnabled: isTtsEnabled })
      });

      const data = await response.json();
      removeTypingIndicator();
      if (!response.ok) {
        addBotMessage(data.error || "Sorry, I received an error from the server. Please verify your environment variables.");
      } else {
        addBotMessage(data.text || "Sorry, I received an empty response. Try again shortly!", data.audio);
      }
    } catch (err) {
      console.error(err);
      removeTypingIndicator();
      addBotMessage("Oops, I encountered a connection issue. Let's try again in a bit!");
    }
  }

  // Listeners
  chatSendBtn.addEventListener("click", () => {
    const text = chatInput.value;
    if (text) {
      sendMessage(text);
      chatInput.value = "";
    }
  });

  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const text = chatInput.value;
      if (text) {
        sendMessage(text);
        chatInput.value = "";
      }
    }
  });

  // Quick Chips Actions
  chatChips.forEach(chip => {
    chip.addEventListener("click", () => {
      const question = chip.getAttribute("data-question");
      sendMessage(question);
    });
  });
});
