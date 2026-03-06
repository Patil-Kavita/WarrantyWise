@echo off
color 0A
echo ===========================================
echo       Starting WarrantyWise Application
echo ===========================================
echo.

echo [1/3] Starting Flask Backend...
:: Open a new command window, change to the backend directory, activate the venv, and run the server.
start "WarrantyWise - Backend" cmd /k "cd backend && call .\backend-vev\Scripts\activate.bat && python run.py"

echo [2/3] Starting React Frontend...
:: Open a new command window, change to the frontend directory, and run the dev server.
start "WarrantyWise - Frontend" cmd /k "cd frontend\warranty-ui && npm run dev"

echo.
echo Waiting 5 seconds for servers to initialize...
timeout /t 5 /nobreak > nul

echo [3/3] Opening Frontend in Chrome...
:: Use the start command to launch Chrome specifically and point it to the Vite dev server URL.
start chrome "http://localhost:3000"

echo.
echo ===========================================
echo   Application successfully launched!
echo   Close the newly opened command windows 
echo   to stop the servers later.
echo ===========================================
pause
