from flask import Flask, request, jsonify
import json

app = Flask(__name__)

direction = "stop"

@app.route('/',methods = ['POST', 'GET'])
def result():
    global direction

    if request.method == 'POST':
        content = request.get_json(force=True)
        direction = content["Button"]
        return jsonify(content)

        # direction = request.args.get("Button")
        # return jsonify(request.args)

    if request.method == 'GET':
        output = {}
        output["Direction"] = direction
        direction = "stop"
        return jsonify(output)

if __name__ == "_main_":
    app.run(debug=True)
