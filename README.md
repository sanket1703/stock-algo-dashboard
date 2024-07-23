# Flask STOCK-ALGO-DASHBOARD API

## Overview

This Flask application provides an API endpoint to fetch data from DynamoDB. It features a well-organized file structure to support scalability and maintainability.

## File Structure

-   `app.py`: The main entry point for the Flask application. Initializes the app and registers routes.
-   `config.py`: Contains configuration settings.
-   `models/model_name.py`: Defines the `model_name` class responsible for interacting with the DynamoDB table.
-   `routes/app_routes.py`: Defines routes related to application.
-   `utils/dynamodb.py`: Provides utility functions for creating a DynamoDB resource.
