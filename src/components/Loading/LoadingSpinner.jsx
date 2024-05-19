import React from "react";
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

function LoadingSpinner() {
  return (
    <Container className="flex-box">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
}

export default LoadingSpinner;
