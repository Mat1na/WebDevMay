import React,{ useEffect } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import APIFetch from "./Actions/fetchActions"

function App() {


    useEffect(() => {
        
        APIFetch.getAllData()
        .then(data=>{
            console.log(data)
        })

        
    }, [])
    
  return (
    <Container className="container d-flex justify-content-center align-items-center">
      <Row className="form  justify-content-center align-items-center">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Choose difficulty </Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Choose category</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        <h1>Here is queston</h1>
        <fieldset>
          <Form.Group as={Row} className="mb-3">
            <Col sm={12}>
              <Form.Check
                type="radio"
                label="first radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="second radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="third radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
            </Col>
          </Form.Group>
        </fieldset>

        <Col sm={12}>
          <Button type="submit" className="w-100 mb-3">Submit answer</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
