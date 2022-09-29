import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { BsTrash } from 'react-icons/bs';
import { useTodoContext } from './context/TodoContext'


function Hompage({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  const [user, setUser]=useState("mike")
  const [id, setId]=useState(1)
  const [_id, set_Id]=useState("")
  const [title, setTitle] = useState("")
  const [completed, setCompleted] = useState(false)

  const fetchTodos = async () => {
    let res = await fetch(
      'http://localhost:8080/todos'
    );
    let data = await res.json();
    if (res.ok) {

      setTodos(data.todos);
    }

  };



  useEffect(() => {
    fetchTodos();

  }, []);


  const handleInput = (e) => {
    setTodo(e.target.value);
    setTitle(e.target.value)

  };

  const handleAddBtn = (e) => {
    
    e.preventDefault()
    setTodo("")

    const todo = { title, completed ,user, id,_id}
    const res = async () => {
      await fetch('http://localhost:8080/todo', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
          'content-type': 'aplication/json'
        }
      })
      .catch(error => {
        window.alert(error);
        return;
      });
      // const data = await res.json()
      // setTodos([...todos, todo]);
      
      
    }
    setTodos([...todos, todo]);
    console.log("You added ", todo);
  }

  const handleDeleteBtn = () => {
    setTodos([])
    console.log("after delete all", todos)
  };
  const doneBtn = (selectedTodo) => {
    console.log('deleted:', selectedTodo)
    const newTodos = todos.filter((todo) => todo._id !== selectedTodo._id);
    // const newTodos=todos.splice(todos.indexOf(todo), 1);
    setTodos(newTodos);
    setCompleted(true)
  };

  return (
    <>
      <Row className="p-5 m-5 justify-content-center align-items-center ">
        <Col md={12}><h1 className="text-center p-3 m-3">Add your Todos</h1></Col>
        <Col md={12} className="p-5 m-5 list text-align-center">

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
            {todos && todos.map((todo) => (
              <>
                <div className="d-flex flex-row">
                  <div className="todo-container">
                    <li key={todo._id} className="">{todo.title}</li>
                  </div>
                  <Button onClick={() => doneBtn(todo)} className="deleteTodoBtn">
                    <BsTrash />
                  </Button>
                </div>
                <hr />
              </>

            ))}
            <Button onClick={handleDeleteBtn} className="delete-all btn btn-danger">
              Clear List
            </Button>
          </ul>

        </Col>
      </Row>
    </>
  );
}

export default Hompage;