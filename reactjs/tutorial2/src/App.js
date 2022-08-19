import React, { useState } from "react";
import ToDoList from "./ToDoList"
import { Button, Col, Container, Row, Badge } from "react-bootstrap";
function App() {



  const [users, setUsers] = useState([]); //to save an array list
  const [curentuser, setCurrentUser]= useState({})
  // fetching data in react.js
  const fetchingData = async () => {
    console.log("retrieving data...");
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    setUsers(data);
  };
  // end of fetching data

  const getDetailOfAUser=(param)=>{
    console.log("testing...detail",param)
    setCurrentUser(param)
  }
  return (
    <Container className="bg-dark text-light  p-4" fluid={true}>
        {/* <ToDoList/> */}
      <Row className="justify-content-center">
        <Col md={3}>
          <h1>Fetch data</h1>
          <Button onClick={fetchingData}>Get Users Data</Button>
        </Col>
        <Col md={9} className="bg-secondary text-dark">
          <h1>User details</h1>
          <p><Badge>Phone:</Badge>{curentuser.phone}</p>
          <p><Badge>Email:</Badge>{curentuser.email}</p>
          <p><Badge>Username:</Badge>{curentuser.username}</p>
          
        </Col>
        {console.log(users)}
        {users.map((user, index) => (
          <div key={index} onClick={()=>getDetailOfAUser(user)}>
            <p>{user.name}</p>
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default App;
