from fastapi import FastAPI
from request import PostRequest


app = FastAPI(
    title="tt"
)


@app.get('/api')
async def f(request: PostRequest):
    return {'приивет'}
