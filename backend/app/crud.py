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