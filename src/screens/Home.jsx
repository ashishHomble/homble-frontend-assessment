import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ padding: 20 }}>
      <div
        className="links"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Link className="link" to="/">
          home
        </Link>
        <Link className="link" to="/products">
          products
        </Link>
        <Link className="link" to="/details/1">
          details
        </Link>

        {/* here we should do smth to fetch id and search along with for individuality*/}
        <Link className="link" to="/dashboard">
          dashboard
        </Link>
      </div>
      <h3> Welcome to Homble Frontend Assessment</h3>
      <p>Pages overview:</p>
      <ul>
        <li>Page 1 - Product list page and create button</li>
        <li>Page 2 - Product detail page</li>
        <li>Page 3 - Product dashboard</li>
      </ul>
    </div>
  );
};

export default Home;
