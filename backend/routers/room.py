from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from schemas.room import RoomCreate
from services.room_service import create_room, get_rooms

router = APIRouter(prefix="/rooms", tags=["Rooms"])


@router.post("/")
def add_room(room: RoomCreate, db: Session = Depends(get_db)):
    return create_room(db, room)


@router.get("/")
def read_rooms(db: Session = Depends(get_db)):
    return get_rooms(db)