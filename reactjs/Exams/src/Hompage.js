import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { BsTrash} from 'react-icons/bs';

function Hompage({todos, setTodos}) {
  const [todo, setTodo] = useState("");
  

  const handleInput = (e) => {
    console.log("Your input is", e.target.value);
  
    setTodo(e.target.value);
  };

  const handleAddBtn = (e) => {
    console.log("You clicked ", todo);
    e.preventDefault()
    setTodo("")
    setTodos([...todos, todo]);
  };

  const handleDeleteBtn = () => {
    setTodos([])
  };
  const doneBtn = (selectedTodo) => {
   
    const newTodos = todos.filter((todo) => todo!== selectedTodo);
    // const newTodos=todos.splice(todos.indexOf(todo), 1);
    setTodos(newTodos);
   
  };

  return (
    <>
    <Row className="p-5 m-5 justify-content-center align-items-center ">
      <Col md={12}><h1 className="text-center p-3 m-3">Add your Todo´s</h1></Col>
      <Col md={12}className="p-5 m-5 list text-align-center">
             
          <InputGroup className="mb-3">
            <Form.Control
              onChange={handleInput}
              placeholder="todo"
              aria-label="todo"
              aria-describedby="basic-addon1"
              value={todo}
            />
            <Button onClick={handleAddBtn}>Add ToDo</Button>
            {console.log(todos)}
          </InputGroup>
          <hr />
          <ul>
            {todos.map((todo,index) => (
              <>
                <div className="d-flex flex-row">
                  <div className="todo-container">
                    <li key={index}>{todo}</li>
                    </div>
                  <Button  onClick={() => doneBtn(todo)} className="deleteTodoBtn">
                <BsTrash/>
                </Button>
                  </div>
                <hr/>
              </>
              
            ))}
             <Button onClick={ handleDeleteBtn} className="delete-all btn btn-danger">
                 Clear List{console.log("after delete", todos)}
                </Button>
          </ul>
        
      </Col>
      </Row>
      </>
  );
}

export default Hompage;
