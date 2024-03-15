from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from fastapi.responses import RedirectResponse
from app import crud, database, models, schema

from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://127.0.0.1:3000",  # 또는 "http://localhost:5173"
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.on_event("startup")
def startup_event():
    database.create_tables()


@app.get("/")
async def root():
    return RedirectResponse(url="/hello/")


@app.get("/hello")
async def hello(db: Session = Depends(get_db)):
    # item = schema.UserCreate(user_id='user_id', name='name', description='description')
    # print(item)
    # db_item = crud.create_item(db, item)
    return [
        {
            "id": 1,
            "author": "작성자1",
            "authorImage":
                "https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg",
            "postImage":
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq75DiUEnXV_lTKsYK7oLxdoj0cyTeSp6329bGs93wHQ&s",
            "postContent": "리액트 너무 어려워",
            "time": "1h ago",
            "commentAuthor": "댓글 작성자1",
            "comment": "인정!",
        },
        {
            "id": 2,
            "author": "작성자2",
            "authorImage":
                "https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg",
            "postImage":
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq75DiUEnXV_lTKsYK7oLxdoj0cyTeSp6329bGs93wHQ&s",
            "postContent": "리액트 진짜 재밌어",
            "time": "2h ago",
            "commentAuthor": "댓글 작성자2",
            "comment": "재밌다고?",
        },
    ];

@app.get("/posts/")
async def get_posts(db: Session = Depends(get_db)):
    items = crud.get_posts(db)
    return items

@app.post("/posts/")
async def create_item(post: schema.PostCreate, db: Session = Depends(get_db)):
    db_item = crud.create_post(db, post)
    return db_item

#
# @app.get("/items/{item_id}")
# async def get_item(item_id: int, db: Session = Depends(get_db)):
#     item = crud.get_item(db, item_id)
#     if item is None:
#         raise HTTPException(status_code=404, detail="Item not found")
#     return item
#
# @app.post("/items/")
# async def create_item(item: schema.ItemCreate, db: Session = Depends(get_db)):
#     db_item = crud.create_item(db, item)
#     return db_item
#
# @app.put("/items/{item_id}")
# async def update_item(item_id: int, updated_item: schema.ItemCreate, db: Session = Depends(get_db)):
#     db_item = crud.get_item(db, item_id)
#     if db_item is None:
#         raise HTTPException(status_code=404, detail="Item not found")
#     updated_item = crud.update_item(db, db_item, updated_item)
#     return updated_item
#
# @app.delete("/items/{item_id}")
# async def delete_item(item_id: int, db: Session = Depends(get_db)):
#     db_item = crud.get_item(db, item_id)
#     if db_item is None:
#         raise HTTPException(status_code=404, detail="Item not found")
#     crud.delete_item(db, db_item)
#     return {"message": "Item deleted successfully"}
