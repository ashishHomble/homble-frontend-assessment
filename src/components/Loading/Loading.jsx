import React from "react";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import "./loading.css";

const PlaceholderCard = () => {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src="https://placehold.co/600x400?text=Humble" />
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
        </Placeholder>
      </Card.Body>
    </Card>
  );
};

function Loading() {
  return (
    <div className="grid-container">
      {Array.from({ length: 6 }).map((_, index) => (
        <PlaceholderCard key={index} />
      ))}
    </div>
  );
}

export default Loading;
