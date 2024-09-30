from fastapi import FastAPI
from db import select_products_with_similar_name, Select_all_device
import json


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