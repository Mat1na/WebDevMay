import React from 'react'
import { Card, Col, ListGroup, Row } from "react-bootstrap";



function Results({ score, user, correct, allQuestions }) {
  let index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (



    <>

      {
        score == 5 ? (<h2 className='text-center'>Hmm barely made it,Your score is {score}, wanna <a href='/' className='text-decoration-none  '>try again</a>?</h2>) : score > 5 ?
          (<h2 className='text-center'>Hooray,Your score is {score}!</h2>) : (<h2 className='text-center '>Your score is {score}.
            Don´t give up <a href='/' className='text-decoration-none  '>try again.</a></h2>)}
      {console.log(allQuestions)}
     
  <Card as={Row}  >
      <Card.Header>Questions</Card.Header>
      <ListGroup as={Col} md={4} >
        {allQuestions.map((question)=>(<ListGroup.Item className='p-4' >{question}</ListGroup.Item>))}
        </ListGroup>
        <ListGroup as={Col} md={4} >
        {correct.map((cor)=>(<ListGroup.Item className='p-5'>{cor}</ListGroup.Item>))}</ListGroup>
        <ListGroup as={Col} md={4}>
        {user.map((user)=>(<ListGroup.Item className='p-5'>{user}</ListGroup.Item>))}
             </ListGroup>
          </Card>
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
  
      {/* <Card>
        {allQuestions.map((question) => (<><Card.Header>{question} </Card.Header></>))}


        {correct.map((cor) => (<> <Card.Body><Card.Title> {cor} </Card.Title></Card.Body>
        </>))}
        {user.map((user) => (<> <Card.Body><Card.Text>
          {user}
        </Card.Text></Card.Body>
        </>))}
      </Card> */}



    </>
  )
}

export default Results