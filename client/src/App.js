import React from 'react';
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SpecificGame from "./pages/SpecificGame";
import SpecificUser from "./pages/SpecificUser";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/game/:id" element={<SpecificGame />} />
        <Route path="/user/:id" element={<SpecificUser />} />
      </Routes>
    </Router>
  )
}

export default App;
