import datetime

from sqlalchemy.orm import Session
from app.models import User, Post
from app.schema import UserCreate, PostCreate

def get_users(db: Session):
    return db.query(User).all()

def get_user(db: Session, id: int):
    return db.query(User).filter(User.id == id).first()

def create_user(db: Session, user: UserCreate):
    db_user = User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def update_user(db: Session, user: User, updated_user: UserCreate):
    for key, value in updated_user.dict().items():
        setattr(user, key, value)
    db.commit()
    db.refresh(user)
    return user

def delete_user(db: Session, user: User):
    db.delete(user)
    db.commit()

# post

def get_posts(db: Session):
    return db.query(Post.id, Post.img, Post.content, Post.create_date, User).outerjoin(User, Post.writer_id == User.id).all()

# fastapi query 문 조회시 컬럼에 별칭을 붙일수 없는가?
# fastapi query 문 조회시 User model에 접근하는 경우 객체로 분리되는데 원하는 것만 뽑으려면 subquery를 사용해야만 하는가?
# fastapi 데이터 get post시 spring처럼 dto를 만들어 사용할 수 있는가?

def get_post(db: Session, id: int):
    return db.query(Post).filter(Post.id == id).first()


def create_post(db: Session, post: PostCreate):
    db_post = Post(**post.dict(),create_date=datetime.datetime.now())
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post

def update_item(db: Session, post: Post, updated_post: PostCreate):
    for key, value in updated_post.dict().items():
        setattr(post, key, value)
    db.commit()
    db.refresh(post)
    return post

def delete_item(db: Session, post: Post):
    db.delete(post)
    db.commit()