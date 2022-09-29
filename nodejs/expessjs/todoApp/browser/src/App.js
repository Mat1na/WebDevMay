import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./homepage";
import "./styles/style.css";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <BrowserRouter>
      <div className="app justify-content-center align-items-center">
        <Routes>
          <Route
            path="/"
            element={<HomePage todos={todos} setTodos={setTodos} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
