import React, { useEffect, useState,useRef } from "react";
import { Form, Col, Button, Row,Container } from "react-bootstrap";


function Quiz() {
  const [allData, setAllData] = useState([]);
  const [allAswers, setAllAnswers] = useState([]);
  const [nextQuestion, setNextQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const formRef=useRef()

  useEffect(() => {
    async function fetchAllData() {
      let res = await fetch("https://opentdb.com/api.php?amount=10");
      let data = await res.json();
      setAllData(data.results);
      let correctAnswer = data.results[nextQuestion].correct_answer;
      let incorrectAnswers = data.results[nextQuestion].incorrect_answers;
      setAllAnswers([correctAnswer, ...incorrectAnswers]);
    }
    fetchAllData();
  }, [nextQuestion]);


  function nextBtn(e) {
    console.log(formRef.current.elements['user_answer'].value)
    if(formRef.current.elements['user_answer'].value !==""){
        if (allData[nextQuestion].correct_answer === formRef.current.elements['user_answer'].value) {
            setScore(score + 1)
        }
        setNextQuestion(nextQuestion + 1)
    }else{
        alert('You need to pick an option')
    }
  };


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
    <div className="bg  d-flex justify-content-center align-items-center">
      <Container className="d-flex justify-content-center align-items-center ">
        <Row className=" form m-5 p-3 d-flex  align-items-center">
          {console.log(allData)}

          {allData.length > 0 && allData != undefined ? (
            <>
              <>
                <h3 className=" m-3 p-3">{allData[nextQuestion].question}</h3>
                <Form ref={formRef}>
                  <div className="mb-3">
                    {shuffle(allAswers).map((option) => (
                      <Form.Check
                        
                        label={option}
                        name="user_answer"
                        type={"radio"}
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
                    value={allData[nextQuestion].correct_answer}
                  >
                    Next
                    {console.log(allAswers)}
                    {console.log(`Your score is ${score}`)}
                  </Button>
                </Col>
              </>
            </>
          ) : (
            "Loading..."
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Quiz;
