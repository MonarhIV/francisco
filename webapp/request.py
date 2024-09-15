from pydantic import BaseModel


class PostRequest(BaseModel):
    search: str
