from pydantic import BaseModel


class RoomCreate(BaseModel):
    room_number: str
    room_type: str
    price: int