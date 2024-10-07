from fastapi import FastAPI, Body
from db import select_products_with_similar_name, Select_all_device, get_color_name, update_price
import json
import os




# DATABASE_URL = os.environ['DATABASE_URL']

# async def convert_to_json(columns, data):
#     for i in range(len(data)):
#         data_dict = {}
#         for j in range(len(columns)):
#             data_dict[columns[j]] = data[i][j]
#         data[i] = data_dict
#     data = list(data)
#     return json.dumps(data)

app = FastAPI(
    title="tt"
)
DB_INFO = "dbname=Francisco_test user=postgres password=1234"


@app.get('/search')
async def f(name: str):
    data = await select_products_with_similar_name(name, DB_INFO)
    return json.dumps(data)


@app.get('/')
async def root():
    return {"message": "Hello World"}


@app.get('/get_all')
async def get_all():
    data = await Select_all_device(DB_INFO)
    return json.dumps(data)


@app.get('/color_translator')
async def get_col_name(hex_code):
    name = await get_color_name(hex_code, DB_INFO)
    return json.dumps(name)


@app.post('/update_price')
async def update_pr(data=Body()):
    res = await update_price(data["product_id"], data["new_price"], DB_INFO)
    return json.dumps(res)
