from utils.dynamodb import get_dynamodb_resource

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
                return stock_list
            else:
                return []
        except Exception as e:
            raise Exception(f"Error fetching data from DynamoDB: {e}")
