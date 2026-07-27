import { useState } from "react";
import api from "../services/api";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      await api.post("/users/register", form);

      alert("Registration Successful!");

      setForm({
        name: "",
        email: "",
      });
    } catch (error) {
      if (error.response) {
        alert(JSON.stringify(error.response.data));
      } else {
        alert("Backend Not Reachable");
      }
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>User Registration</h1>

      <form onSubmit={register}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;