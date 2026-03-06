import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    # Ensure database is stored in app/database/ folder
    db_path = os.path.join(basedir, 'app', 'database', 'database.db')
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or f'sqlite:///{db_path}'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'dev-secret-key-123'
