from flask import Flask
app = Flask(__name__)

@app.route('/petmas')
def hello_world():
    return 'Hello, World!'
