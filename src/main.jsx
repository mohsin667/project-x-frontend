import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Link } from "react-router-dom";
import App from "./App";
import './index.css'

const root = document.getElementById("root");
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "10px 0",
  },
  navLink: {
    textDecoration: "none",
    fontSize: "18px",
    color: "black",
  },
};
ReactDOM.createRoot(root).render(
  <BrowserRouter>
   <nav style={styles.navbar}>
        <Link to="/login" style={styles.navLink}>Login</Link>
        <Link to="/register" style={styles.navLink}>Register</Link>
      </nav>
    <App />
  </BrowserRouter>
);