import { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import { postRequest } from "../axios";

function AddProduct({ show, setShow }) {
  const [formData, setFormData] = useState({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [warning, setWarning] = useState(false);

  const handleClose = () => setShow(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  const handlePost = async () => {
    if (isEmpty(formData)) {
      setWarning(true);
      return;
    }
    const res = await postRequest("/products", formData);
    if (res.status === 201) {
      setSuccess(true);
      setTimeout(() => {
        handleClose();
        setSuccess(false);
      }, 1000);
    } else {
      setError(true);
      setTimeout(() => {
        handleClose();
        setError(false);
      }, 1000);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control name="name" type="text" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Allergic info</Form.Label>
              <Form.Control
                type="text"
                name="allergen_info"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
          {success && <Alert variant="success">Added sucessfully</Alert>}
          {error && <Alert variant="danger">Something went wrong</Alert>}
          {warning && (
            <Alert variant="warning">Please fill required fields</Alert>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePost}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProduct;
