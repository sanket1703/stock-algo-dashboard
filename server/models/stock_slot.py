from utils.dynamodb import get_dynamodb_resource
import yfinance as yf

class StockSlot:   
    @classmethod
    def fetch_all(cls):
        dynamodb = get_dynamodb_resource()
        table = dynamodb.Table('stock_slots')
        try:
            response = table.scan()
            items = response.get('Items', [])
            if items:
                stock_list = items[0]['stock_slots']
                stock_prices = cls.fetch_stock_prices(stock_list)
                return stock_prices
            else:
                return []
        except Exception as e:
            raise Exception(f"Error fetching data from DynamoDB: {e}")

    @classmethod
    def fetch_stock_prices(cls, stock_list):
        stock_prices = {}
        for stock in stock_list:
            try:
                stock_info = yf.Ticker(stock)
                price = stock_info.history(period="1d")['Close'].iloc[-1]
                stock_prices[stock] = price
            except Exception as e:
                stock_prices[stock] = None
                print(f"Error fetching price for {stock}: {e}")
        return stock_prices