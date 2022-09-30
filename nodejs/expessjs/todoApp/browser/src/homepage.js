import React, { useEffect, useState, useRef } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { useParams } from "react-router";

function Hompage({ todos, setTodos }) {
  const [todo, setTodo] = useState({});
  const [user, setUser] = useState("mike");
  const [id, setId] = useState(1);
  const [_id, set_Id] = useState("");
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const params = useParams();
  const inputRef = useRef();

  const fetchTodos = async () => {
    let res = await fetch("http://localhost:8080/todos");
    let data = await res.json();
    if (res.ok) {
      setTodos(data.todos);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  //Handle input
  const handleInput = (e) => {
    setTodo(e.target.value);
    setTitle(e.target.value);
  };

// Add button
  const handleAddBtn = (e) => {
    e.preventDefault();
    
    const todo = { title, completed, user, id, _id };
   
   fetch("http://localhost:8080/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }).catch((error) => {
      window.alert(error);
      return;
    }) 
    
    setId(id+1)
    setTodos([...todos, todo]);
    console.log("You added ", todo);
    inputRef.current.value = "";
  };

  // Delete all button
  const handleDeleteBtn = (e) => {
    e.preventDefault();
    
  
todos.map(todo=>fetch("http://localhost:8080/todo/" + todo._id,{
      method: "DELETE",
      headers: {
          'Content-type': 'application/json'
      }
  }).catch((error) => {
    window.alert(error);
    return;
  }) 
  )
    setTodos([]);
  
    console.log("after delete all", todos);
    setCompleted(true);
  };


  // Delete one button
  const doneBtn = (selectedTodo) => {
    console.log("deleted:", selectedTodo);
    console.log(selectedTodo._id)
        const todo = { title, completed, user, id, _id };
   
    fetch(`http://localhost:8080/todo/` + selectedTodo._id,{
      method: "DELETE",
      headers: {
          'Content-type': 'application/json'
      }
  }).catch((error) => {
    window.alert(error);
    return;
  }) 
  
    const newTodos = todos.filter((todo) => todo._id !== selectedTodo._id);
    setTodos(newTodos);
    setCompleted(true);
  };
  

  return (
    <>
      <Row className="p-5 m-5 justify-content-center align-items-center ">
        <Col md={12}>
          <h1 className="text-center p-3 m-3">Add your Todos</h1>
        </Col>
        
        <Col md={12} className="p-5 m-5 list text-align-center ">
        <Row className="justify-content-center ">
          <Col xs={8}>
          <InputGroup className="mb-3">
            <Form.Control
              onChange={handleInput}
              placeholder="todo"
              aria-label="todo"
              aria-describedby="basic-addon1"
              ref={inputRef}
            />
          
          </InputGroup>
          </Col >
          <Col xs={4}>
         <Button onClick={handleAddBtn} className="m-2">Add ToDo</Button>
        
         
            {console.log(todos)
            }
            </Col>
         
          <hr />
          </Row>
          <ul>
            {todos &&
              todos.map((todo) => (
                <>
                  <div className="d-flex flex-row">
                    <div className="todo-container">
                      <li key={todo._id} className="">
                        {todo.title}
                      </li>
                    </div>
                    <Button
                      onClick={() => doneBtn(todo)}
                      className="deleteTodoBtn"
                    >
                      <BsTrash />
                    </Button>
                  </div>
                  <hr />
                </>
              ))}
            <Button
              onClick={handleDeleteBtn}
              className="delete-all btn btn-danger"
            >
              Clear List
            </Button>
          </ul>
        </Col>
      </Row>
    </>
  );
}

export default Hompage;
