import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#1f2937",
        color: "white",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>🏨 Hotel Reservation System</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Home
        </Link>

        <Link
          to="/register"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Register
        </Link>

        <Link
          to="/login"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Login
        </Link>

        <Link
          to="/rooms"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Rooms
        </Link>

        <Link
          to="/bookings"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          My Bookings
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;