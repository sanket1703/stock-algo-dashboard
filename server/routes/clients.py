from flask import Blueprint, jsonify
from models.clients import Clients

clients = Blueprint('clients', __name__)

@clients.route('/clients', methods=['GET'])
def get_stock_slots():
    try:
        clientsList = Clients.fetch_all()
        return jsonify(clientsList)
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@clients.route('/clients/<client_id>', methods=['GET'])
def get_client_by_id(client_id):
    try:
        client = Clients.fetch_by_client_id(client_id)
        if client:
            return jsonify(client), 200
        else:
            return jsonify({"message": "Client not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500