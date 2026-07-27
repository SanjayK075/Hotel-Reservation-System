import { useEffect, useState } from "react";
import api from "../services/api";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      const response = await api.get("/bookings/");
      setBookings(response.data);
    } catch (error) {
      alert("Unable to load bookings.");
    }
  };

  const cancelBooking = async (bookingId) => {
    try {
      await api.delete(`/bookings/${bookingId}`);

      alert("Booking Cancelled Successfully!");

      loadBookings();
    } catch (error) {
      alert("Unable to cancel booking.");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>My Bookings</h1>

      {bookings.length === 0 ? (
        <h2>No Bookings Found</h2>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Room No.</th>
              <th>Room Type</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.booking_id}>
                <td>{booking.booking_id}</td>
                <td>{booking.customer}</td>
                <td>{booking.email}</td>
                <td>{booking.room_number}</td>
                <td>{booking.room_type}</td>
                <td>₹{booking.price}</td>
                <td>{booking.status}</td>
                <td>
                  <button
                    onClick={() => cancelBooking(booking.booking_id)}
                    style={{
                      background: "red",
                      color: "white",
                      border: "none",
                      padding: "8px 15px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Bookings;