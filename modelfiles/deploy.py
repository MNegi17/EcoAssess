from flask import Flask, request, jsonify
import numpy as np
import joblib

# Create Flask application
app = Flask(__name__)

# Load the trained machine learning model
model = joblib.load('model.pk1')  # Replace 'model.pkl' with your trained model file

# Define a route for model prediction
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the JSON data sent in the POST request
        data = request.get_json(force=True)
        
        # Extract features from the JSON data
        features = np.array(data['features'])  # 'features' should be a list/array of input features

        # Reshape features into a 2D array (required for model prediction)
        features = np.array(features).reshape(1, -1)

        # Make prediction using the loaded model
        prediction = model.predict(features)

        # Prepare response as JSON
        response = {'prediction': prediction.tolist()}  # Convert prediction to list for JSON serialization
        
        return jsonify(response), 200  # Return response as JSON with HTTP status code 200 (OK)
    
    except Exception as e:
        # Return error message if prediction fails
        error_message = {'error': str(e)}
        return jsonify(error_message), 500  # Return error message with HTTP status code 500 (Internal Server Error)

# Run the Flask application
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)  # Run the Flask app on host 0.0.0.0 (accessible from external IP) and port 5000
