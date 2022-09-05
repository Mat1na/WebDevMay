import React, { useEffect, useState } from 'react'
import { Form, Col, Button, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

function Quiz() {

  const [questions, setQuestions]= useState ([])

  const getQusetions=async ()=>{
  let res= await fetch("https://opentdb.com/api.php?amount=10&category=18")
 
  let data= await res.json()
  setQuestions(data.results)
 
}


useEffect(()=>{
  getQusetions ()
  
}, [])



  return (
    <>
    questions.map((question, index)=>(
    <div className='bg m-5 d-flex justify-content-center align-items-center'>
    <Container className="d-flex justify-content-center align-items-center p-5 m-5 ">
    <Row className=" form m-5 p-3">

      <h1>{questions.question}</h1>
      {console.log(questions)}
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Col md={12}>
            <Form.Check
              type="radio"
              label={questions.correct_answer}
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label={questions.incorrect_answers[0]}
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label={questions.incorrect_answers[1]}
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
             <Form.Check
              type="radio"
              label={questions.incorrect_answers[2]}
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
    
    ))
    </>
  )
}

export default Quiz