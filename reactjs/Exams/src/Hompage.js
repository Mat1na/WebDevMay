import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

function Hompage() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    console.log("Your input is", e.target.value);
    setTodo(e.target.value);
  };

  const handleAddBtn = () => {
    console.log("You clicked ", todo);
    setTodos([...todos, todo]);
  };

  const handleDeleteBtn = (key) => {
    console.log(key);
    const newTodos = todos.filter((todo) => todo.key !== key);
    setTodos(newTodos);
    console.log("after delete in handler", todos, todo.key);
  };

  return (
    <>
    <Row className="p-5 m-5 ">
      <Col md={12}><h1 className="text-center p-3 m-3">Add your Todo´s</h1></Col>
      <Col md={12}className="p-5 m-5 list text-align-center">

 
      
        
          <InputGroup className="mb-3">
            <Form.Control
              onChange={handleInput}
              placeholder="todo"
              aria-label="todo"
              aria-describedby="basic-addon1"
            />
            <Button onClick={handleAddBtn}>Add ToDo</Button>
            {console.log(todos)}
          </InputGroup>
          <hr />
          <ul>
            {todos.map((todo, index) => (
              <>
                <div className="d-flex flex-row">
                  <div className="todo-container"><li key={index}>{todo}</li></div>
                  <Button onClick={() => handleDeleteBtn(todo.key)} className="">
                 Done{console.log("after delete", todos)}
                </Button>
                 
                </div>
                <hr/>
              </>
              
            ))}
             <Button onClick={() => handleDeleteBtn(todo.key)} className="delete-all btn btn-fd">
                 Clear List{console.log("after delete", todos)}
                </Button>
          </ul>
        
      </Col>
      </Row>
      </>
  );
}

export default Hompage;
