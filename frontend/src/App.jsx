import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Rooms from "./pages/Rooms";
import Bookings from "./pages/Bookings";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div
        style={{
          minHeight: "80vh",
          padding: "20px",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />

          <Route path="/rooms" element={<Rooms />} />

          <Route path="/bookings" element={<Bookings />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;