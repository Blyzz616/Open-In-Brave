@echo off
setlocal

REM Set variables
set "EXT_NAME=open-in-brave"
set "REG_PATH=HKCU\Software\Microsoft\Edge\NativeMessagingHosts\com.openinbrave"
set "INSTALL_DIR=%~dp0"
set "JSON_PATH=%INSTALL_DIR%\open-in-brave.json"

REM Ensure file paths are escaped for registry
set "JSON_PATH_ESC=%JSON_PATH:\=\\%"

echo Registering native messaging host for Microsoft Edge...
reg add "%REG_PATH%" /ve /t REG_SZ /d "%JSON_PATH_ESC%" /f

echo Done.
echo Ensure Python 3 is installed and accessible in PATH.
pause
