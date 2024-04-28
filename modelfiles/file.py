import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_squared_error
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor

dataset = pd.read_csv('environmental_impact_assessment_dataset.csv')
dataset.drop('Project_ID', axis=1, inplace=True)
dataset.drop('Location', axis=1, inplace=True)
dataset.drop('Project_Type', axis=1, inplace=True)
dataset.drop('Budget', axis=1, inplace=True)
dataset.drop('Duration', axis=1, inplace=True)
dataset.drop('Public_Acceptance', axis=1, inplace=True)
dataset.drop('Sustainability_Practices', axis=1, inplace=True)
# print(dataset)
dataset = pd.get_dummies(dataset, columns=['Mitigation_Plan'])
dataset = pd.get_dummies(dataset, columns=['Stakeholders'])

X = dataset.drop(columns=['Impact_Score'])  # Features
y = dataset['Impact_Score']  # Target variable
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=1, random_state=42)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

model = RandomForestRegressor(n_estimators=200, random_state=42)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)

mse = mean_squared_error(y_test, y_pred)
print("Mean Squared Error:", mse)

joblib.dump(model,'model.pk1')
