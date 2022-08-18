import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
function App() {
  const [users, setUsers] = useState([]); //to save an array list
  // fetching data in react.js
  const fetchingData = async () => {
    console.log("retrieving data...");
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    setUsers(data);
  };
  // end of fetching data
  return (
    <Container className="bg-dark text-light p-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <h1>Fetch data</h1>
          <Button onClick={fetchingData}>Get Users Data</Button>
        </Col>
        {console.log(users)}
        {users.map((user, index) => (
          <div key={index}>
            <p>{user.name}</p>
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default App;
