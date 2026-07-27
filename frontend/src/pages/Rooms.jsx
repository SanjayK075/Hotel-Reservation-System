import { useEffect, useState } from "react";
import api from "../services/api";
import RoomCard from "../components/RoomCard";

function Rooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    loadRooms();
  }, []);

  const loadRooms = async () => {
    try {
      const response = await api.get("/rooms/");
      setRooms(response.data);
    } catch (error) {
      alert("Unable to Load Rooms");
    }
  };

  const bookRoom = async (roomId) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !user.id) {
      alert("Please Login First");
      return;
    }

    try {
      await api.post("/bookings/", {
        user_id: user.id,
        room_id: roomId,
      });

      alert("Room Booked Successfully!");

      loadRooms();
    } catch (error) {
      if (error.response) {
        alert(JSON.stringify(error.response.data));
      } else {
        alert("Booking Failed");
      }
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Rooms</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {rooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
            onBook={bookRoom}
          />
        ))}
      </div>
    </div>
  );
}

export default Rooms;