import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function DisplayCard({ product }) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={product.productImage} />
      <Card.Body>
        <Link to={`products/${product.id}`} className="custom-link">
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text className="bold">&#8377; {product.selling_price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DisplayCard;
