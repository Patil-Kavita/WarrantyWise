from flask import Blueprint, jsonify, request
from app.models import User, Item
from app import db

bp = Blueprint('api', __name__, url_prefix='/api')

@bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    if not data or 'username' not in data or 'password' not in data:
        return jsonify({'error': 'Missing required fields'}), 400
    
    if User.query.filter_by(username=data['username']).first():
        return jsonify({'error': 'Username already exists'}), 400
    
    new_user = User(username=data['username'])
    new_user.set_password(data['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully', 'user': new_user.to_dict()}), 201

@bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data or 'username' not in data or 'password' not in data:
        return jsonify({'error': 'Missing required fields'}), 400
    
    user = User.query.filter_by(username=data['username']).first()
    if not user or not user.check_password(data['password']):
        return jsonify({'error': 'Invalid username or password'}), 401
    
    return jsonify({'message': 'Login successful', 'user': user.to_dict()}), 200

@bp.route('/add-item', methods=['POST'])
def add_item():
    data = request.get_json()
    if not data or 'user_id' not in data or 'item_name' not in data or 'expiry_date' not in data:
        return jsonify({'error': 'Missing required fields'}), 400
    
    user = User.query.get(data['user_id'])
    if not user:
        return jsonify({'error': 'User not found'}), 404
        
    new_item = Item(
        user_id=data['user_id'],
        item_name=data['item_name'],
        expiry_date=data['expiry_date']
    )
    db.session.add(new_item)
    db.session.commit()
    return jsonify({'message': 'Item added successfully', 'item': new_item.to_dict()}), 201

@bp.route('/items/<int:user_id>', methods=['GET'])
def get_items(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404
        
    items = Item.query.filter_by(user_id=user_id).all()
    return jsonify([item.to_dict() for item in items]), 200
