from flask import Blueprint, jsonify
from models.watchlist import Watchlist

watchlist = Blueprint('watchlist', __name__)

@watchlist.route('/watchlist', methods=['GET'])
def get_stock_slots():
    try:
        watchlist = Watchlist.fetch_all()
        return jsonify(watchlist)
    except Exception as e:
        return jsonify({'error': str(e)}), 500