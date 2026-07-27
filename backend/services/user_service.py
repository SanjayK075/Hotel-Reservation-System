from sqlalchemy.orm import Session
from models import User
from schemas.user import UserCreate, UserLogin


def create_user(db: Session, user: UserCreate):

    existing_user = db.query(User).filter(User.email == user.email).first()

    if existing_user:
        return {"message": "Email already exists"}

    new_user = User(
        name=user.name,
        email=user.email
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


def get_users(db: Session):
    return db.query(User).all()


def login_user(db: Session, user: UserLogin):

    existing_user = db.query(User).filter(User.email == user.email).first()

    if existing_user:
        return {
            "message": "Login Successful",
            "user": existing_user
        }

    return {"message": "User not found"}