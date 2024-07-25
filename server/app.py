from flask import Flask
from dotenv import load_dotenv
import os
from flask_cors import CORS
from routes.stock_slots import stock_slots
from routes.watchlist import watchlist
from routes.clients import clients

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

CORS(app, supports_credentials=True, resources={r"/*": {"origins": "http://localhost:5173"}})

# Access environment variables
app.config['ENV'] = os.getenv('FLASK_ENV', 'production')
app.config['FLASK_PORT'] = int(os.getenv('FLASK_PORT', 5000))

# Register routes
app.register_blueprint(stock_slots)
app.register_blueprint(watchlist)
app.register_blueprint(clients)

@app.route('/')
def index():
    return f"Environment: {app.config['ENV']}, Port Number: {app.config['FLASK_PORT']}"

if __name__ == '__main__':
    app.run(port=app.config['FLASK_PORT'], debug=True if app.config['ENV'] == 'development' else False)
