import React from "react";
import { useParams } from "react-router-dom";
import useFetchProducts from "../Hooks/useFetchProducts";

import LoadingSpinner from "../components/Loading/LoadingSpinner";
import { Container, Image } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

import Col from "react-bootstrap/Col";

function ProductDetails() {
  const productID = useParams().id;

  const { data, isLoading, isError } = useFetchProducts(
    `/products/${productID}`
  );

  if (isError) {
    return <div>Something went wrong</div>;
  }
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Container className="detail-container">
        <Col>
          <Image src={data.productImage} />
        </Col>
        <Col>
          <h1>{data.name}</h1>
          <h4>&#8377; {data.selling_price}</h4>
          <Accordion defaultActiveKey="0" alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h6>Description</h6>
              </Accordion.Header>
              <Accordion.Body>{data.description}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h6>Allergic Info</h6>
              </Accordion.Header>
              <Accordion.Body>{data.allergen_info}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h6>Cooking Instruction</h6>
              </Accordion.Header>
              <Accordion.Body>{data.cooking_instruction}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Container>
    </>
  );
}

export default ProductDetails;
