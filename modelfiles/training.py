import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from keras.models import Sequential
from keras.layers import Dense
from keras.optimizers import Adam
from sklearn.metrics import mean_squared_error
from sklearn.impute import SimpleImputer

# Load the dataset
dataset = pd.read_csv('environmental_impact_assessment_dataset.csv')

# Split features and target variable
X = dataset.drop(columns=['Impact_Score'])  # Features
y = dataset['Impact_Score']  # Target variable

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train.drop(['Project_ID'], axis=1))
X_test_scaled = scaler.transform(X_test.drop(['Project_ID'], axis=1))
# Scale numerical features
print(X_train['Energy'].unique())
print(X_test['Energy'].unique())


# X_train_scaled = scaler.fit_transform(X_train)
# X_test_scaled = scaler.transform(X_test)

# # Build the neural network model
# model = Sequential([
#     Dense(64, activation='relu', input_shape=(X_train_scaled.shape[1],)),
#     Dense(32, activation='relu'),
#     Dense(1)  # Output layer (single neuron for regression)
# ])

# # Compile the model
# model.compile(optimizer=Adam(), loss='mean_squared_error')

# # Train the model
# history = model.fit(X_train_scaled, y_train, batch_size=32, epochs=50, validation_split=0.2, verbose=1)

# # Predict on the testing set
# y_pred = model.predict(X_test_scaled).flatten()

# # Evaluate the model
# mse = mean_squared_error(y_test, y_pred)
# print("Mean Squared Error:", mse)