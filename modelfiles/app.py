from flask import Flask, request, jsonify
import mysql.connector
import pandas as pd
from sklearn.externals import joblib

app = Flask(__name__)

# Load the pre-trained machine learning model
model = joblib.load('model.pk1')

# MySQL database configuration (same as before)
db_config = {
    'host': 'NULL',
    'user': 'root@localhost',
    'password': '123456',
    'database': 'EIA'
}

# Helper function to establish MySQL connection (same as before)
def get_mysql_connection():
    return mysql.connector.connect(**db_config)

# Endpoint for making predictions using the loaded model
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get data from the request (assuming JSON format)
        data = request.json

        # Establish connection to MySQL database
        connection = get_mysql_connection()

        # Fetch data from MySQL table
        query = "SELECT * FROM your_table_name"
        df = pd.read_sql(query, con=connection)

        # Close database connection
        connection.close()

        # Process input data (example: convert to DataFrame)
        input_data = pd.DataFrame([data['features']])

        # Use the model for predictions
        prediction = model.predict(input_data)

        return jsonify({'prediction': prediction.tolist()}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)
