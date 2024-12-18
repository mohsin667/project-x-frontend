import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login"; 
import Register from "./components/Register";
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};


export default App;
