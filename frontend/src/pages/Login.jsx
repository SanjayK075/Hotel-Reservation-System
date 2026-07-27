import { useState } from "react";
import api from "../services/api";

function Login() {
  const [email, setEmail] = useState("");

  const login = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/users/login", {
        email,
      });

      alert(response.data.message);

      // Save only the user object
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      setEmail("");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Backend Not Reachable");
      }
    }
  };

  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={login}
        style={{
          width: "350px",
          padding: "30px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>User Login</h2>

        <br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;