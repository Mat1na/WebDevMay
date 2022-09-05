import React, { useEffect, useState } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

function Quiz() {
  const [allData, setAllData] = useState([]);

  const getQusetions = async () => {
    let res = await fetch("https://opentdb.com/api.php?amount=10");

    let data = await res.json();
    setAllData(data.results);
  };

  useEffect(() => {
    getQusetions();
  }, []);

  return (
    <div className="bg m-5 d-flex justify-content-center align-items-center">
      <Container className="d-flex justify-content-center align-items-center p-5 m-5 ">
        <Row className=" form m-5 p-3">
          {console.log(allData)}

          {
          getNextQuestion=()=>{
           
          Object.keys(allData.length) !== 0 ? (
            <>
              {allData.map((question, index) => {
                return (
                  
                  <>
                  
                    <p key={index}>{allData[index].question}</p>
                    <Form>
                      <div className="mb-3">
                        <Form.Check
                          type="radio"
                          id="1"
                          label={allData[index].correct_answer}
                          value="correctanswer"
                          name="question"
                        />
                        <Form.Check
                          type="radio"
                          id="2"
                          label={allData[index].incorrect_answers[0]}
                          value="incorrectanswer"
                          name="question"
                        />
                        {allData[index].incorrect_answers.length > 2 ? (
                          <Form.Check
                            type="radio"
                            id="3"
                            label={allData[index].incorrect_answers[1]}
                            value="incorrectanswer"
                            name="question"
                          />
                        ) : (
                          ""
                        )}
                        {allData[index].incorrect_answers.length > 2 ? (
                          <Form.Check
                            type="radio"
                            id="4"
                            label={allData[index].incorrect_answers[2]}
                            value="incorrectanswer"
                            name="question"
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </Form>
                  </>
                );
              })}
            </>
          ) : (
            ""
          )}}

          <Col md={12}>
            <Button type="submit" className="w-100 mb-3" onClick={getNextQuestion()}>
              Next
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Quiz;
