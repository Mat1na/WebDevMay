import React, { useEffect, useState, useRef } from "react";
import { Form, Col, Button, Row, Card } from "react-bootstrap";
import Results from "./results";

// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&encode=base64

// https://opentdb.com/api_category.php

function Quiz() {
  const [fetchedData, setFetchedData] = useState([]);
  const [allAswers, setAllAnswers] = useState([]);
  const [nextQuestion, setNextQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const formRef = useRef();

  useEffect(() => {
    async function fetchAllData() {
      let res = await fetch(`https://opentdb.com/api.php?amount=10`);
      let data = await res.json();
      setFetchedData(data.results);
      let correctAnswer = data.results[nextQuestion].correct_answer;
      let incorrectAnswers = data.results[nextQuestion].incorrect_answers;
      setAllAnswers([correctAnswer, ...incorrectAnswers]);
    }
    fetchAllData();
  }, [nextQuestion]);

  function nextBtn(e) {
   // console.log(nextQuestion)
    
    ///console.log(fetchedData.length-1 !== nextQuestion)
    if((fetchedData.length-1 !== nextQuestion)){
      setNextQuestion(nextQuestion+1)
      console.log(nextQuestion)
    }else{
      setNextQuestion(nextQuestion)
      console.log(nextQuestion)
    }
  //  console.log(formRef.current.elements["user_answer"].value);
    if (formRef.current.elements["user_answer"].value !== "") {
      if (
        fetchedData[nextQuestion].correct_answer ===
        formRef.current.elements["user_answer"].value
      ) {
        setScore(score + 1);
      }
      setNextQuestion(nextQuestion + 1);
    } else {
      alert("You need to pick an option");
    }
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  return (
    <div className="bg m-5  d-flex justify-content-center align-items-center">
    
        <Row className=" form m-5 d-flex justify-content-center  align-items-center ">
        <Card style={{ backgroundColor:"white", width: "20rem" }}>
      <Card.Body >
      {
              fetchedData.length > 0 ?  (
                  <>
        {
            fetchedData[nextQuestion] !== undefined && fetchedData.length > 0 ? (
              <>
                <h3 >{fetchedData[nextQuestion].question}</h3>
                <Form ref={formRef}>
                  <div className="mb-3">
                    {shuffle(allAswers).map((option) => (
                      <Form.Check
                        label={option}
                        name="user_answer"
                        type="radio"
                        value={option}
                        id="question"
                      />
                    ))}
                  </div>
                </Form>
                <Col md={12}>
                  <Button
                    type="submit"
                    className="w-100 mb-3"
                    onClick={nextBtn}
                    value={fetchedData[nextQuestion].correct_answer}
                  >
                    Next
                   
                    {console.log(`Your score is ${score}`)}
                  </Button>
                </Col>
              </>
            ) : (
              <Results score={score}/>
            )
          }</>):( 'Loading...')
        }
           </Card.Body>
    </Card>
        </Row>
      
    </div>
  );
}

export default Quiz;
