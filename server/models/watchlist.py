from utils.dynamodb import get_dynamodb_resource

class Watchlist:   
    @classmethod
    def fetch_all(cls):
        dynamodb = get_dynamodb_resource()
        table = dynamodb.Table('watchlist')
        try:
            response = table.scan()
            items = response.get('Items', [])
            if items:
                watchlist = items[0]['watchlist']
                return watchlist
            else:
                return []
        except Exception as e:
            raise Exception(f"Error fetching data from DynamoDB: {e}")