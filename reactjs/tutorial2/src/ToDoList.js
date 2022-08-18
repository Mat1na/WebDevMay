import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todo, setTodo] = useState(""); // store single todo
  const [todos, setTodos] = useState(["javascript", "java"]);

  const handleInput = (e) => {
    // handle input value attribute
    console.log("handle input", e.target.value, e.target);
    setTodo(e.target.value);
  };

  const handleClick = (e) => {
    console.log("click click testing => ", todo);
    // solution 2
    // let temp = todos;
    // temp.push(todo)
    // setTodos(temp)
    // solution 1
    setTodos([...todos, todo]);
  };
  return (
    <Row className="justify-content-center">
      <Col md={6}>
        <InputGroup className="mb-3">
          <Form.Control
            onChange={handleInput}
            placeholder="todo"
            aria-label="todo"
            aria-describedby="basic-addon1"
          />
          <Button onClick={handleClick}>Add</Button>
          {console.log(todos)}
        </InputGroup>
        <hr />
        <ul>
          {todos.map((todo) => (
            <li key={uuidv4()}>{todo}</li>
          ))}
        </ul>
      </Col>
    </Row>
  );
}
