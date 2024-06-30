import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate= useNavigate()
  return (
    <div style={{ padding: 20 }}>
      <h3> Welcome to Homble Frontend Assessment</h3>
      <p>Pages overview:</p>
      <ul>
        <li>Page 1 - Product list page and create button</li>
        <li>Page 2 - Product detail page</li>
        <li>Page 3 - Product dashboard</li>
        <Button mt={2} variant="contained" color="primary" onClick={()=>navigate("/products")}>
				Products
				</Button>
      </ul>
    </div>
  );
};

export default Home;
