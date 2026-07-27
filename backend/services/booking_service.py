from sqlalchemy.orm import Session
from models import Booking, Room, User
from schemas.booking import BookingCreate


def create_booking(db: Session, booking: BookingCreate):

    user = db.query(User).filter(User.id == booking.user_id).first()

    if not user:
        return {"message": "User not found"}

    room = db.query(Room).filter(Room.id == booking.room_id).first()

    if not room:
        return {"message": "Room not found"}

    if room.status == "Booked":
        return {"message": "Room already booked"}

    room.status = "Booked"

    new_booking = Booking(
        user_id=booking.user_id,
        room_id=booking.room_id
    )

    db.add(new_booking)
    db.commit()
    db.refresh(new_booking)

    return new_booking


def get_bookings(db: Session):

    bookings = db.query(Booking).all()

    result = []

    for booking in bookings:

        user = db.query(User).filter(User.id == booking.user_id).first()
        room = db.query(Room).filter(Room.id == booking.room_id).first()

        result.append({
            "booking_id": booking.id,
            "customer": user.name,
            "email": user.email,
            "room_number": room.room_number,
            "room_type": room.room_type,
            "price": room.price,
            "status": room.status
        })

    return result


def cancel_booking(db: Session, booking_id: int):

    booking = db.query(Booking).filter(Booking.id == booking_id).first()

    if not booking:
        return {"message": "Booking not found"}

    room = db.query(Room).filter(Room.id == booking.room_id).first()

    room.status = "Available"

    db.delete(booking)
    db.commit()

    return {"message": "Booking cancelled successfully"}