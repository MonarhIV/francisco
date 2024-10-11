from fastapi import FastAPI, Body
import db
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
    data = await db.select_products_with_similar_name(name, DB_INFO)
    return data


@app.get('/')
async def root():
    return {"message": "Hello World"}


@app.get('/get_all')
async def get_all():
    data = await db.Select_all_device(DB_INFO)
    return data


@app.get('/color_translator')
async def get_col_name(hex_code):
    name = await db.get_color_name(hex_code, DB_INFO)
    return name


@app.get('/categories')
async def get_kind(kind: str):
    data = await db.select_category(kind, DB_INFO)
    return data


@app.post('/update_price')
async def update_pr(data=Body()):
    res = await db.update_price(data["product_id"], data["new_price"], DB_INFO)
    return json.dumps(res)
