from sqlalchemy.orm import Session
from models import Room
from schemas.room import RoomCreate


def create_room(db: Session, room: RoomCreate):

    existing_room = db.query(Room).filter(
        Room.room_number == room.room_number
    ).first()

    if existing_room:
        return {"message": "Room already exists"}

    new_room = Room(
        room_number=room.room_number,
        room_type=room.room_type,
        price=room.price,
        status="Available"
    )

    db.add(new_room)
    db.commit()
    db.refresh(new_room)

    return new_room


def get_rooms(db: Session):
    return db.query(Room).all()