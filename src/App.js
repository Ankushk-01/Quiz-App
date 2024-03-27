import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ReviewAnswer from "./pages/Review/ReviewAnswer";
import { Routes, Route, useLocation } from 'react-router-dom';
import QuizState from "./context/QuizState";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/profile/Profile";
import Dashboard from "./components/profile/Dashboard";
import Edit from "./components/profile/Edit";
import React, { useState } from 'react';
import Login from "./Login/Login";
import Signup from "./Login/Signup";
import Contact from "./pages/Contect/Contect";
import Admindashboard from './Admin/Admindashboard'
import Feedback from './Admin/Feedback';
import AdminBar from "./Admin/AdminBar";
import Users from './Admin/Users'
import About2 from './Admin/About2';
export default function App() {
  // const [number,setNumber] = useState("");
  // const [category,setCategory] = useState("");
  // const [difficulty,setDifficulty] = useState("");
  // const [type,setType] = useState("");
  const location = useLocation();

  // Function to check if NavBar should be rendered
  const shouldRenderNavBar = () => {
    return !(location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/admindashboard' || location.pathname === '/admindashboard/feedback' || location.pathname === '/admindashboard/Users' || location.pathname === '/admindashboard/about');
  };
  const shouldRenderAdminBar = () => {
    return (location.pathname === '/admindashboard' || location.pathname === '/admindashboard/feedback' || location.pathname === '/admindashboard/Users' || location.pathname === '/admindashboard/about');
  };

  return (
    <>
      <div className="App">
        <QuizState>
          {shouldRenderNavBar() && <NavBar />} {/* Render NavBar conditionally */}
          {shouldRenderAdminBar() && <AdminBar />} {/* Render NavBar conditionally */}

          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/admindashboard" element={<Admindashboard />} />
            <Route exact path="/admindashboard/feedback" element={<Feedback />} />
            <Route exact path="/admindashboard/Users" element={<Users />} />
            <Route exact path="/admindashboard/about" element={<About2 />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/review" element={<ReviewAnswer />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/edit" element={<Edit />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/contect" element={<Contact />} />
          </Routes>
        </QuizState>
      </div>
    </>
  )
}
