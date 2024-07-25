from utils.dynamodb import get_dynamodb_resource

class Clients:   
    @classmethod
    def fetch_all(cls):
        dynamodb = get_dynamodb_resource()
        table = dynamodb.Table('clients')
        try:
            response = table.scan()
            items = response.get('Items', [])
            return items
        except Exception as e:
            raise Exception(f"Error fetching data from DynamoDB: {e}")
        
    @classmethod
    def fetch_by_client_id(cls, client_id):
        dynamodb = get_dynamodb_resource()
        table = dynamodb.Table('clients')

        try:
            response = table.get_item(
                Key={
                    'clients_id': client_id
                }
            )
            item = response.get('Item', {})
            return item
        except Exception as e:
            raise Exception(f"Error fetching data from DynamoDB: {e}")