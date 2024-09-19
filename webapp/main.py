from fastapi import FastAPI
from request import PostRequest
from db import Select

app = FastAPI(
    title="tt"
)


@app.post('/api')
async def f(request: PostRequest):
    return {'приивет'}
