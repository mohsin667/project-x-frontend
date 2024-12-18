import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login"; 
import Register from "./components/Register";
import './App.css'

const App = () => {
  return (
    <Routes>
      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/login" />} />
      
      {/* Login route */}
      <Route path="/login" element={<Login />} />
      
      {/* Register route */}
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};


export default App;
