from flask import Flask
from flask import request
from flask import jsonify
from flask import g
import json

app = Flask(__name__)

# def get_color():
#     if 'color' not in g:
#         g.color = "black"
#     return g.color
direction = "null"

@app.route('/',methods = ['POST', 'GET'])
def result():
    global direction
    print("Entered result()")

    if request.method == 'POST':
        content = request.get_json(force=True)
        # with app.app_context(): 
        direction = content["Button"]
        # g['color'] = content["Button"]
        print("content[Button] = " + content["Button"], "\n\tg.direction = ", direction)

        return jsonify(content)

    if request.method == 'GET':
        # with app.app_context(): 
        c = direction
        direction = "null"
        # c = g.color
        print("got direction: " + c)
        return c



if __name__ == "_main_":
    app.run(debug=True)