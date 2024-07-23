from flask import Blueprint, jsonify
from models.stock_slot import StockSlot

stock_slots = Blueprint('stock_slots', __name__)

@stock_slots.route('/stock_slots', methods=['GET'])
def get_stock_slots():
    try:
        stock_slots = StockSlot.fetch_all()
        return jsonify(stock_slots)
    except Exception as e:
        return jsonify({'error': str(e)}), 500