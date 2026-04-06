import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Correct imports

import Auth from "./components/Auth.js";
import Profile from "./components/Profile.js";
import Tasks from "./components/Tasks.js";
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './components/NotFound.js';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import "./style.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogin = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <Router>
      <div>
      <Navbar token={token} onLogout={handleLogout} />
      <div className="content">
        <Routes>
        <Route path="/" element={<Home token={token}/>} />
          <Route path="/login" element={token ? <Navigate to="/profile" /> : <Auth onLogin={handleLogin} />} />
          <Route path="/profile" element={token ? <Profile token={token} onLogout={handleLogout} /> : <Navigate to="/login" />} />
          <Route path="/tasks" element={token ? <Tasks token={token} /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;


