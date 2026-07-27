from pydantic import BaseModel


class BookingCreate(BaseModel):
    user_id: int
    room_id: int