from sqlalchemy import Column, Integer, String, ForeignKey
from app.database import Base

# class User(Base):
#     __tablename__ = "users"
#     id = Column(Integer, primary_key=True, autoincrement=True)
#     user_id = Column(String(30))
#     name = Column(String(30))
#     description = Column(String(30))
#
# class Post(Base):
#     __tablename__ = "posts"
#     id = Column(Integer, primary_key=True, autoincrement=True)
#     img = Column(String(30))
#     description = Column(String(30))
#     writer = Column(String(10), ForeignKey("user.id"), nullable=True)
