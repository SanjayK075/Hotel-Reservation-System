from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import engine
from models import Base

from routers.user import router as user_router
from routers.room import router as room_router
from routers.booking import router as booking_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Hotel Reservation System",
    version="1.0.0",
    description="Backend API"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(user_router)
app.include_router(room_router)
app.include_router(booking_router)


@app.get("/")
def home():
    return {
        "message": "Hotel Reservation API is Running 🚀"
    }