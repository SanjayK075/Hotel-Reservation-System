import axios from "axios";

const api = axios.create({
  baseURL: "https://hotel-reservation-system0795.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;