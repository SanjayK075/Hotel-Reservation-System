function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px 20px",
      }}
    >
      <h1>🏨 Hotel Reservation System</h1>

      <p
        style={{
          fontSize: "20px",
          marginTop: "20px",
        }}
      >
        Welcome to our Hotel Reservation System built using
        <br />
        React, FastAPI and PostgreSQL.
      </p>

      <img
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200"
        alt="Hotel"
        style={{
          width: "80%",
          maxWidth: "900px",
          marginTop: "40px",
          borderRadius: "10px",
        }}
      />
    </div>
  );
}

export default Home;