import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile"
import UpdateProfile from "./pages/UpdateProfile";
import Event from "./pages/Event";

export default function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/update/profile" element={<UpdateProfile/>} />
              <Route path="/event" element={<Event/>} />
          </Routes>
    </Router>
  );
}