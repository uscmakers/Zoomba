from flask import Flask
app = Flask(__name__)

@app.route('/')
def Zoomba():
    return 'Zoomba server is running!'

