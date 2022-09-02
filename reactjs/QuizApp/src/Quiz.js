import React from 'react'
import { Form, Col, Button, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

function Quiz() {
  return (
    <div className='bg m-5'>
    <Container className="d-flex justify-content-center align-items-center p-5 m-5 ">
    <Row className=" form m-5 p-3">

      <h1>Here is a question</h1>
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Col md={12}>
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

      <Col md={12}>
        <Button type="submit" className="w-100 mb-3">Submit answer</Button>
      </Col>
    </Row>
  </Container>
  </div>
  )
}

export default Quiz