from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import Config

db = SQLAlchemy()

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Enable CORS for all domains on all routes
    CORS(app)

    db.init_app(app)

    with app.app_context():
        # Import parts of our application
        from app import models
        from app import routes

        app.register_blueprint(routes.bp)

        # Note: We now use init_db.py to create tables manually instead of doing it on every run
        # db.create_all()

    return app
