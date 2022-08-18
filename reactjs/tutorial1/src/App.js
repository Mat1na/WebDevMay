// rfce create functional component

import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);
  const IncreaseNumber = (e) => {
    console.log("+");
    setCount(count + 1); // update state value
  };
  const DecreaseNumber = (e) => {
    console.log("-");
    if (count != 0) {
      setCount(count - 1);
    }else{
      alert("not allowed")
    }
  };
  return (
    <Container fluid={false}>
      <Row className="justify-content-center align-items-center text-center">
        <Col md={5} className="p-5 bg-dark text-light">
          <Button size="lg" variant="success" onClick={IncreaseNumber}>
            Increase Number +
          </Button>
        </Col>
        <Col md={5} className="p-5 bg-primary text-light">
          <Button size="lg" variant="danger" onClick={DecreaseNumber}>
            Decrease Number -
          </Button>
        </Col>

        <Col md={10} className="p-5 bg-warning text-dark">
          <h1>{count}</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
