import boto3
from config import Config

def get_dynamodb_resource():
    return boto3.resource(
        'dynamodb',
        region_name=Config.AWS_REGION_NAME,
        aws_access_key_id=Config.AWS_ACCESS_KEY_ID,
        aws_secret_access_key=Config.AWS_SECRET_ACCESS_KEY
    )