# WarrantyWise Backend

This is the Flask backend for WarrantyWise. It provides a RESTful API for managing warranty items using Flask and SQLAlchemy.

## Project Structure
- `app/__init__.py`: The Flask app factory.
- `app/models.py`: SQLAlchemy database models.
- `app/routes.py`: API routes for the application.
- `config.py`: Configuration settings.
- `requirements.txt`: Python dependencies.

## Setup Instructions

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Create a virtual environment:**
   ```bash
   python -m venv venv
   ```

3. **Activate the virtual environment:**
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

5. **Run the Flask application:**
   You can run the app using the `run.py` script:
   ```bash
   python run.py
   ```
   The API will be available at `http://127.0.0.1:5000/api/`
