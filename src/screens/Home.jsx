import React from "react";
import { Link } from "react-router-dom";
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h3 className="home-title">Welcome to Homble</h3>
      <ul className="home-list">
        <li className="home-list-item">
          <Link className="home-link" to="/products">Food Menu</Link>
        </li>
        <li className="home-list-item">
          <Link className="home-link" to="/Dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
