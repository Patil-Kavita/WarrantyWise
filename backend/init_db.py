import os
from app import create_app, db

def init_database():
    app = create_app()
    
    # Ensure the database directory exists
    db_dir = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'app', 'database')
    if not os.path.exists(db_dir):
        os.makedirs(db_dir)
        print(f"Created directory at: {db_dir}")

    with app.app_context():
        # Create all tables declared in models.py
        db.create_all()
        print("Database tables created successfully!")
        print(f"Database located at: {app.config['SQLALCHEMY_DATABASE_URI']}")

if __name__ == '__main__':
    init_database()
