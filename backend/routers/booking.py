from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from schemas.booking import BookingCreate
from services.booking_service import (
    create_booking,
    get_bookings,
    cancel_booking,
)

router = APIRouter(prefix="/bookings", tags=["Bookings"])


@router.post("/")
def add_booking(
    booking: BookingCreate,
    db: Session = Depends(get_db)
):
    return create_booking(db, booking)


@router.get("/")
def read_bookings(db: Session = Depends(get_db)):
    return get_bookings(db)


@router.delete("/{booking_id}")
def delete_booking(
    booking_id: int,
    db: Session = Depends(get_db)
):
    return cancel_booking(db, booking_id)