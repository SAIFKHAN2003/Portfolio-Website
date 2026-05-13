Add-Type -AssemblyName System.IO.Compression.FileSystem

$docxPath = "c:\Users\saif khan\Documents\CVs,resume\Portfolio\Saif_Rahman_CVF_6_May_2026_MS.docx"
$zip = [System.IO.Compression.ZipFile]::OpenRead($docxPath)
$entry = $zip.GetEntry("word/document.xml")
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$xmlContent = $reader.ReadToEnd()
$reader.Close()
$zip.Dispose()

$xml = [xml]$xmlContent
$allText = ""

foreach ($para in $xml.GetElementsByTagName("w:p")) {
    $pText = ""
    foreach ($t in $para.GetElementsByTagName("w:t")) {
        $pText += $t.InnerText
    }
    if ($pText.Trim()) {
        $allText += $pText + "`n"
    }
}

$outPath = "c:\Users\saif khan\Documents\CVs,resume\Portfolio\portfolio\cv-content.txt"
$allText | Out-File $outPath -Encoding UTF8
Write-Host "Extracted CV text to cv-content.txt"
Write-Host "---"
Write-Host $allText
