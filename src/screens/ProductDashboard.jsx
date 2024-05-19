import {
  Container,
  Table,
  Button,
  Form,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";

import useFetchProducts from "../Hooks/useFetchProducts";
import LoadingSpinner from "../components/Loading/LoadingSpinner";
import InputGroup from "react-bootstrap/InputGroup";
import Error from "./Error";

function ProductDashboard() {
  const {
    data,
    isLoading,
    isError,
    deleteItem,
    sortByCP,
    sortBySP,
    sortByName,
    searchData,
  } = useFetchProducts("/dashboard");

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <Error />;

  const handleChange = (e) => {
    deleteItem(e);
  };

  const handleSearch = (query) => {
    searchData(query);
  };

  return (
    <Container>
      <Row className="mx-auto w-75 my-3">
        <Col>
          <InputGroup>
            <InputGroup.Text>Search</InputGroup.Text>
            <Form.Control
              aria-label="search"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col className="">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Sort By
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => sortByCP()}>
                Cost Price
              </Dropdown.Item>
              <Dropdown.Item onClick={() => sortBySP()}>
                Selling Price
              </Dropdown.Item>
              <Dropdown.Item onClick={() => sortByName()}>Name</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Table striped bordered hover className="w-75 mx-auto ">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Cost Price</th>
            <th>Selling Price</th>
            <th>Check</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, id) => {
            return (
              <tr key={id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.cost_price}</td>
                <td>{item.selling_price}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => handleChange(item.id)}
                  >
                    check
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default ProductDashboard;
