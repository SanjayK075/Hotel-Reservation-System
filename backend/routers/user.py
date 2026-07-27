from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from schemas.user import UserCreate, UserLogin
from services.user_service import create_user, get_users, login_user

router = APIRouter(prefix="/users", tags=["Users"])


@router.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):
    return create_user(db, user)


@router.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):
    return login_user(db, user)


@router.get("/")
def read_users(db: Session = Depends(get_db)):
    return get_users(db)