from pydantic import BaseModel


class PostRequest(BaseModel):
    message: str
