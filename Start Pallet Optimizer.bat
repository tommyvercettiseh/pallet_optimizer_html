@echo off
setlocal
cd /d "%~dp0"
title Pallet Optimizer HTML
set "PORT=8080"
if not exist "logs" mkdir "logs"
where py >nul 2>nul && set "PY=py"
if not defined PY where python >nul 2>nul && set "PY=python"
if not defined PY (
  echo Python is alleen nodig voor de lokale testserver.
  echo Open index.html rechtstreeks of installeer Python.
  pause
  exit /b 1
)
start "Pallet Optimizer server" /min cmd /c "%PY% -m http.server %PORT% > logs\server.log 2>&1"
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:%PORT%/"
echo Pallet Optimizer draait op http://127.0.0.1:%PORT%/
echo Sluit het servervenster om te stoppen.
pause
