import React, { useEffect, useState, useRef } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage({ setDifficulty, setSelectedCat,selectedCat,difficulty }) {
  const [allCategories, setAllCategories] = useState([]);
  const formRef = useRef();
  
 
  useEffect(() => {
    async function fetchAllCategories() {
      let res = await fetch("https://opentdb.com/api_category.php");
      let data = await res.json();
      setAllCategories(data.trivia_categories);
      // let cat=fetchedData.map((cat)=>cat.category)
              
    }
    
    fetchAllCategories();
  }, []);

 

  return (
    <div className="d-flex justify-content-center align-items-center m-5">
      <Row className="w-50 d-flex justify-content-center m-5">
        <h1 className="text-center titleHome">Wanna Play?</h1>
        <Form ref={formRef}>
          <Form.Group as={Col} md={12} controlId="formGridState">
            <Form.Label>Choose Category </Form.Label>
            <Form.Select
              defaultValue={"default"}
              onChange={(e) => setSelectedCat(e.target.value)}
            >
              <option value={"default"} disabled>
                Choose an option
              </option>
              {console.log(allCategories)}
              {console.log(selectedCat)}
              {allCategories.map((cat) => (
                <option key={cat.id} value={cat.id} >
                  {cat.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} md={12} controlId="formGridState">
            <Form.Label>Choose Difficulty</Form.Label>
            <Form.Select
              defaultValue={"default"} 
              onChange={(e) => setDifficulty(e.target.value)}>
              <option value={"default"} disabled>
                Choose an option
                {console.log(difficulty)}
              </option>
              <option value="easy" >Easy</option>
              <option value="medium" >Medium</option>
              <option value="hard" >Hard</option>
            </Form.Select>
          </Form.Group>
        </Form>

       {/* <Link md={12} to="/Quiz" className="p-2 m-3 btnHome btn btn-primary">Start Quiz</Link> */}
       {
        (typeof selectedCat) !=='string' || (typeof difficulty) !=='string'?
        <p className='text-center p-4 '>Choose your options first !!!</p>
        :
        <Link md={12} to="/Quiz" className="p-2 m-3 btnHome btn btn-light btn-outline-light" >Start Quiz</Link>
       }
      </Row>
    </div>
  );
}

export default HomePage;
