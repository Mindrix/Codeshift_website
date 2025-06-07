import requests

url = "http://localhost:8000/accounts/signup/"
data = {
    "name": "Test User",
    "username": "testuser",
    "email": "testuser@example.com",
    "password": "password123"
}

response = requests.post(url, json=data)
print("Status Code:", response.status_code)
print("Response JSON:", response.json())

# Test with duplicate data
duplicate_data = {
    "username": "testuser",
    "email": "testuser@example.com",
    "password": "password123"
}
response = requests.post(url, json=duplicate_data)
print("Duplicate data response:", response.status_code, response.json())
