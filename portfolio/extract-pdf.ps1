$pdfPath = "c:\Users\saif khan\Documents\CVs,resume\Portfolio\Saif_Rahman_CVF_6_May_2026_MS.docx.pdf"
$bytes = [System.IO.File]::ReadAllBytes($pdfPath)
$raw = [System.Text.Encoding]::GetEncoding("ISO-8859-1").GetString($bytes)

# Extract text between stream/endstream markers and decode
$textParts = @()
$pattern = 'stream\r?\n([\s\S]*?)\r?\nendstream'
$streamMatches = [regex]::Matches($raw, $pattern)

foreach ($sm in $streamMatches) {
    $streamData = $sm.Groups[1].Value
    # Try to find readable text patterns
    $tjMatches = [regex]::Matches($streamData, '\(([^)]+)\)')
    foreach ($tj in $tjMatches) {
        $text = $tj.Groups[1].Value
        # Filter out binary garbage - keep only printable ASCII
        $clean = $text -replace '[^\x20-\x7E]', ''
        if ($clean.Length -gt 2) {
            $textParts += $clean
        }
    }
}

$result = $textParts -join "`n"
$result | Out-File -FilePath "c:\Users\saif khan\Documents\CVs,resume\Portfolio\portfolio\cv-text.txt" -Encoding UTF8
Write-Host "Extracted $($textParts.Count) text segments"
Write-Host $result.Substring(0, [Math]::Min(5000, $result.Length))
