function RoomCard({ room, onBook }) {
  return (
    <div
      style={{
        width: "320px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        backgroundColor: "#fff",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
        alt="Hotel Room"
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "15px" }}>
        <h2>Room {room.room_number}</h2>

        <p>
          <strong>Type:</strong> {room.room_type}
        </p>

        <p>
          <strong>Price:</strong> ₹{room.price} / Night
        </p>

        <p>
          <strong>Status:</strong>{" "}
          <span
            style={{
              color: room.status === "Available" ? "green" : "red",
              fontWeight: "bold",
            }}
          >
            {room.status}
          </span>
        </p>

        <button
          onClick={() => onBook(room.id)}
          disabled={room.status !== "Available"}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            border: "none",
            borderRadius: "5px",
            backgroundColor:
              room.status === "Available" ? "#2563eb" : "#888",
            color: "white",
            cursor:
              room.status === "Available" ? "pointer" : "not-allowed",
            fontSize: "16px",
          }}
        >
          {room.status === "Available"
            ? "Book Room"
            : "Not Available"}
        </button>
      </div>
    </div>
  );
}

export default RoomCard;