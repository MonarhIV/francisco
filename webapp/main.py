import asyncio
asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

from fastapi import FastAPI
from request import PostRequest
from db import Select

app = FastAPI(
    title="tt"
)


@app.post('/api/search')
async def f(request: PostRequest):
    data = await Select(request.search)
    print(data)
    return {data}
