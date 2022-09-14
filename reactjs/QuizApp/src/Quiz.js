import React, { useEffect, useState, useRef } from "react";
import { Form, Col, Button, Row, Card } from "react-bootstrap";
import Results from "./results";

// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&encode=base64

// https://opentdb.com/api_category.php

function Quiz({ difficulty, selectedCat }) {
  const [fetchedData, setFetchedData] = useState([]);
  const [allAswers, setAllAnswers] = useState([]);
  const [nextQuestion, setNextQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correct, setcorrect] = useState([]);
  const [user, setUser] = useState([]);
  const [allQuestions, setAllQuestions] = useState([]);

  const formRef = useRef();
  // decode function
  function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)));
  }

  //Shuffle function
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

  useEffect(() => {
    async function fetchAllData() {
      let res = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${selectedCat}&difficulty=${difficulty}&encode=base64`
      );

      let data = await res.json();
      setFetchedData(data.results);
      let correctAnswer = data.results[nextQuestion].correct_answer;
      let incorrectAnswers = data.results[nextQuestion].incorrect_answers;
      setAllAnswers([correctAnswer, ...incorrectAnswers]);
    }
    fetchAllData();

  }, [nextQuestion]);






  function nextBtn() {
    setUser(user => [...user, formRef.current.elements["user_answer"].value])
    setcorrect(correct => [...correct, b64_to_utf8(fetchedData[nextQuestion].correct_answer)])
    setAllQuestions(allQuestions => [...allQuestions, b64_to_utf8(fetchedData[nextQuestion].question)])
    ///console.log(fetchedData.length-1 !== nextQuestion)
    if (fetchedData.length - 1 !== nextQuestion) {
      setNextQuestion(nextQuestion + 1);

    } else {
      setNextQuestion(nextQuestion);

    }
    //  console.log(formRef.current.elements["user_answer"].value);
    if (formRef.current.elements["user_answer"].value !== "") {
      if (
        b64_to_utf8(fetchedData[nextQuestion].correct_answer) ===
        formRef.current.elements["user_answer"].value
      ) {

        setScore(score + 1);
      }

      setNextQuestion(nextQuestion + 1);
    } else {
      alert("You need to pick an option");
    }


  }



  return (
    <div className="bg m-5  d-flex justify-content-center align-items-center">
      <Row className=" form m-5 d-flex justify-content-center  align-items-center ">
        <Card style={{ backgroundColor: "white", width: "auto" }}>
          <Card.Body>
            {fetchedData.length > 0 ? (
              <>
                {fetchedData[nextQuestion] !== undefined &&
                  fetchedData.length > 0 ? (
                  <>
                    <h3>{b64_to_utf8(fetchedData[nextQuestion].question)}</h3>
                    <Form ref={formRef}>

                      <div className="mb-3">
                        {shuffle(allAswers).map((option) => (
                          <Form.Check
                            label={b64_to_utf8(option)}
                            name="user_answer"
                            type="radio"
                            value={b64_to_utf8(option)}
                            id="question"
                            className="form"
                          // className={b64_to_utf8(fetchedData[nextQuestion].correct_answer) ===
                          //   formRef.current.elements["user_answer"].value?"right":}
                          />
                        ))}
                      </div>
                    </Form>
                    <Col md={12}>
                      <Button
                        type="submit"
                        className="w-100 mb-3 btnQuiz btn-light btn-outline-light"

                        onClick={nextBtn}
                        value={b64_to_utf8(fetchedData[nextQuestion].correct_answer)}
                      >
                        Next
                        {/* {console.log(typeof(allQuestions))}
                        
                        {console.log(`Your score is ${score}`)} */}
                      </Button>
                    </Col>

                  </>
                ) : (
                  <Results score={score} user={user} correct={correct} allQuestions={allQuestions} />

                )}

              </>
            ) : (
              "Loading..."
            )}
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}

export default Quiz;
