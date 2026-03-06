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

5. **Initialize Database:**
   ```bash
   python init_db.py
   ```

6. **Run the Flask application:**
   You can run the app using the `run.py` script:
   ```bash
   python run.py
   ```
   The API will be available at `http://127.0.0.1:5000/` (and on your local network IP for mobile connections).

## API Documentation

All endpoints expect/return JSON.

### Authentication

#### 1. Register a New User
- **URL**: `/register`
- **Method**: `POST`
- **What it does**: Creates a new user account with hashed passwords.
- **Request Body (JSON)**:
  ```json
  {
    "username": "testuser",
    "password": "mypassword123"
  }
  ```
- **Success Response (201 Created)**:
  ```json
  {
    "message": "User registered successfully", 
    "user": {
      "id": 1, 
      "username": "testuser"
    }
  }
  ```

#### 2. Log in User
- **URL**: `/login`
- **Method**: `POST`
- **What it does**: Validates credentials and returns the user's ID to be saved by the frontend.
- **Request Body (JSON)**:
  ```json
  {
    "username": "testuser",
    "password": "mypassword123"
  }
  ```
- **Success Response (200 OK)**:
  ```json
  {
    "message": "Login successful", 
    "user": {
      "id": 1, 
      "username": "testuser"
    }
  }
  ```

### Items (Core Functionality)

#### 3. Add a New Warranty Item
- **URL**: `/add-item`
- **Method**: `POST`
- **What it does**: Saves a new warranty item linked to the logged-in user.
- **Request Body (JSON)**:
  ```json
  {
    "user_id": 1,
    "item_name": "Macbook Pro",
    "expiry_date": "2027-05-15"
  }
  ```
- **Success Response (201 Created)**:
  ```json
  {
    "message": "Item added successfully", 
    "item": {
      "id": 1, 
      "user_id": 1, 
      "item_name": "Macbook Pro", 
      "expiry_date": "2027-05-15"
    }
  }
  ```

#### 4. Get User's Items
- **URL**: `/items/<user_id>`
- **Method**: `GET`
- **What it does**: Retrieves all tracked items for a specific user ID.
- **Request URL Example**: `/items/1`
- **Success Response (200 OK)**: Returns a JSON array of item objects.
  ```json
  [
    {
      "id": 1, 
      "user_id": 1, 
      "item_name": "Macbook Pro", 
      "expiry_date": "2027-05-15"
    },
    {
      "id": 2, 
      "user_id": 1, 
      "item_name": "AirPods", 
      "expiry_date": "2026-08-10"
    }
  ]
  ```
