from app import create_app

app = create_app()

@app.route('/test')
def test_route():
    from flask import jsonify
    return jsonify({"status": "alive"}), 200

if __name__ == '__main__':
    # Starts server on port 5000 and listens on all interfaces (0.0.0.0)
    # This allows mobile devices on the same local network to connect!
    app.run(host='0.0.0.0', port=5000, debug=True)
