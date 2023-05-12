import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile"
import Team from "./pages/Team"
import ManageProfile from "./pages/ManageProfile";
import ManageEvent from "./pages/ManageEvent";
import EventForm from "./pages/EventForm";

export default function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/team/:teamId" element={<Team/>} />
              <Route path="/manage/profile" element={<ManageProfile/>} />
              <Route path="/manage/event" element={<ManageEvent/>} />
              <Route path="/event/form" element={<EventForm/>} />
              <Route path="/event/form/:eventId" element={<EventForm/>} />
          </Routes>
    </Router>
  );
}