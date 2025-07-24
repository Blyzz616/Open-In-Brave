# Set-ExecutionPolicy Bypass -Scope Process -Force
# Run as user, no elevation required (writes to HKCU)

$extensionName = "open-in-brave"
$regPath = "HKCU:\Software\Microsoft\Edge\NativeMessagingHosts\com.openinbrave"
$jsonFile = Join-Path $PSScriptRoot "open-in-brave.json"

if (-not (Test-Path $jsonFile)) {
    Write-Error "Cannot find open-in-brave.json at $jsonFile"
    exit 1
}

try {
    New-Item -Path $regPath -Force | Out-Null
    Set-ItemProperty -Path $regPath -Name "(default)" -Value $jsonFile
    Write-Host "✅ Native messaging host registered successfully."
    Write-Host "📌 Path: $jsonFile"
}
catch {
    Write-Error "❌ Failed to register the native messaging host: $_"
    exit 1
}

Write-Host "✔️ Done. Make sure Python 3 is installed and in your PATH."
