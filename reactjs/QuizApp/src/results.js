import React from 'react'
import { Card, Col, ListGroup, Row } from "react-bootstrap";



function Results({ score, user, correct, allQuestions }) {
  let index = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (



    <>

      {
        score == 5 ? (<h2 className='text-center'>Hmm barely made it,Your score is {score}, wanna <a href='/' className='text-decoration-none  '>try again</a>?</h2>) : score > 5 ?
          (<h2 className='text-center'>Hooray,Your score is {score}!</h2>) : (<h2 className='text-center '>Your score is {score}.
            Don´t give up <a href='/' className='text-decoration-none  '>try again.</a></h2>)}
      {console.log(allQuestions)}
<br/>
      {/* <Card as={Row}  >
      <Card.Header>Questions</Card.Header>
      <ListGroup as={Col} md={4} >
        {allQuestions.map((question)=>(<ListGroup.Item className='p-4' >{question}</ListGroup.Item>))}
        </ListGroup>
        <ListGroup as={Col} md={4} >
        {correct.map((cor)=>(<ListGroup.Item className='p-5'>{cor}</ListGroup.Item>))}</ListGroup>
        <ListGroup as={Col} md={4}>
        {user.map((user)=>(<ListGroup.Item className='p-5'>{user}</ListGroup.Item>))}
             </ListGroup>
          </Card> */}
      {/* <Card as={Col} md={4} >
      <Card.Header>Correct Answer</Card.Header>
      <ListGroup variant="flush">
        {correct.map((cor)=>(<ListGroup.Item className='p-5'>{cor}</ListGroup.Item>))}
             </ListGroup>
          </Card>
          <Card as={Col} md={4} >
      <Card.Header>Your Answer</Card.Header>
      <ListGroup variant="flush">
        {user.map((user)=>(<ListGroup.Item className='p-5'>{user}</ListGroup.Item>))}
             </ListGroup>
          </Card> */}

      <Row>
        <Card as={Col} md={4}>
          <h5 className='text-center'>Questions</h5>
          {allQuestions.map((question, index) => (<><Card.Header className='m-0 p-0 d-flex justify-content-center align-items-center text-center result'><strong>{index}/</strong>{question} </Card.Header></>))}
        </Card>
        <Card as={Col} md={4}>
          <h5 className='text-center'>Correct Answers</h5>
          {correct.map((cor, index) => (<><Card.Body className=' justify-content-center align-items-center text-center'> <Card.Text ><strong>{index}/</strong> {cor} </Card.Text></Card.Body>
          </>))}</Card>
        <Card as={Col} md={4}>
          <h5 className='text-center'>Your Answers</h5>

          {user.map((user, index) => (<> <Card.Body className=' justify-content-center align-items-center text-center'><Card.Text>
          <strong>{index}/</strong> {user}
          </Card.Text></Card.Body>
          </>))}</Card>
      </Row>




    </>
  )
}

export default Results