import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Quiz from "./Quiz";
import Header from "./components/header";
import Footer from "./components//footer";
import "./style/style.css";

function App() {
  const [selectedCat, setSelectedCat] = useState([]);
  const [difficulty, setDifficulty] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);
  const [nextQuestion, setNextQuestion] = useState(0);
  const [allAnswers, setAllAnswers] = useState([]);

  async function fetchAllData() {
    let res = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${selectedCat}&difficulty=${difficulty}&encode=base64`
    );

    let data = await res.json();

    setFetchedData(data.results);
    let correctAnswer = fetchedData[0].correct_answer;
    let incorrectAnswers = fetchedData[0].incorrect_answers;
    setAllAnswers([correctAnswer, ...incorrectAnswers]);
  }
  fetchAllData();

  return (
    <BrowserRouter>
      <div className="app ">
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <HomePage
                setDifficulty={setDifficulty}
                setSelectedCat={setSelectedCat}
                selectedCat={selectedCat}
                difficulty={difficulty}
                fetchedData={fetchedData}
                fetchAllData={fetchAllData}
              />
            }
          />
          <Route
            path="/quiz"
            element={
              <Quiz
                difficulty={difficulty}
                selectedCat={selectedCat}
                fetchedData={fetchedData}
                nextQuestion={nextQuestion}
                setNextQuestion={setNextQuestion}
                allAnswers={allAnswers}
              />
            }
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
