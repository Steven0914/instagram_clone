from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from app.database import Base
from sqlalchemy.orm import relationship

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(String(30))
    name = Column(String(30))
    description = Column(String(30))

class Post(Base):
    __tablename__ = "posts"
    id = Column(Integer, primary_key=True, autoincrement=True)
    img = Column(String(30))
    content = Column(String(30))
    create_date = Column(DateTime, nullable=False)
    writer_id = Column(Integer, ForeignKey("users.id"))
    user = relationship("User", backref="posts")
