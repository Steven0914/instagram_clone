from pydantic import BaseModel
from datetime import datetime


class PostBase(BaseModel):
    img: str
    content: str
    writer_id: int

class PostCreate(PostBase):
    pass

class Post(PostBase):
    id: int
    create_date: datetime

    class Config:
        orm_mode = True


class UserBase(BaseModel):
    user_id: str
    name: str
    description: str

class UserCreate(UserBase):
    pass

class User(UserBase):
    id: int
    posts: list[Post] = []

    class Config:
        orm_mode = True