import requests
from flask import Flask, render_template, request, jsonify
from db import Select
import json
app = Flask(__name__)


@app.route("/")
def main():
    return render_template('foryou.html')


@app.route("/search", methods=['POST', 'GET'])
async def search():
    if request.method == 'POST':
        data = request.get_json()
        print(data)
        data_db = await Select(data.get('search'))
        rez = [
            {
                'id': i[0],
                'name': i[1],
                'price': i[2],
                'color': i[3],
                'specification': i[4]
            } for i in data_db
        ]
        print(rez)
        return jsonify(rez)
    return render_template('search.html')


@app.route("/devise", methods=['POST', 'GET'])
async def devise():
    return render_template('devise.html')


@app.route("/delivery", methods=['POST', 'GET'])
async def delivery():
    return render_template('delivery.html')


@app.route("/trade-in", methods=['POST', 'GET'])
async def trade_in():
    return render_template('trade-in.html')


if __name__ == "__main__":
    app.run(debug=True)

