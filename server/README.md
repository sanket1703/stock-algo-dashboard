# Flask STOCK-ALGO-DASHBOARD API

## Overview

This project is a Flask-based API that fetches data from DynamoDB. The application is designed with scalability and maintainability in mind, featuring a well-organized file structure and a `requirements.txt` file for easy dependency management.

## Features

-   Fetch data from DynamoDB via API endpoints.
-   Structured to allow for easy addition of new routes and functionality.
-   Uses Flask, a lightweight and flexible Python web framework.

## Prerequisites

Before running the application, make sure you have the following installed on your system:

-   Python 3.7 or higher
-   pip (Python package installer)
-   Virtualenv (recommended)

## Setup

### 1. Change the working directory

```bash
cd server
```

### 2. Set Up a Virtual Environment

It is recommended to use a virtual environment to manage your project's dependencies.

```bash
# Create a virtual environment
python3 -m venv venv

# Activate the virtual environment
source venv/bin/activate  # On Windows use `.\venv\Scripts\activate`
```

### 3. Install Dependencies

Use the `requirements.txt` file to install the necessary Python packages.

```bash
pip install -r server/requirements.txt
```

### 4. Run the Server

Once everything is set up, you can run the Flask application.

```bash
python app.py
```

This command will start the Flask development server. By default, it runs on `http://127.0.0.1:5000/`.
