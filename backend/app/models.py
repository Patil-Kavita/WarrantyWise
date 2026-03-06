from app import db
from datetime import datetime, timezone
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password_hash = db.Column(db.String(256), nullable=False)
    items = db.relationship('Item', backref='user', lazy=True)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username
        }

    def __repr__(self):
        return f'<User {self.username}>'

class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    item_name = db.Column(db.String(100), nullable=False)
    expiry_date = db.Column(db.String(50), nullable=False) # Storing as string for simplicity (e.g. 'YYYY-MM-DD')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'item_name': self.item_name,
            'expiry_date': self.expiry_date
        }

    def __repr__(self):
        return f'<Item {self.item_name}>'
