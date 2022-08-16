// import logo from "./logo.svg";
import "./App.css";
import ChildComponent from "./ChildComponent";
import {useState} from "react"

function App() {
  // let number=1
  const [number,setNumber]=useState(1)
  function handleClick() {
    //event callback
    // number++
    setNumber(number+1)
    console.log("click event",number);
  }
  return (
    <div className="App">
      {/* <ChildComponent name="coffee"/> */}
      <h1>Hello world</h1>
      {/* {event click in react} */}
      <button onClick={handleClick}>Do not click</button>
      <h1>{number}</h1>
    </div>
  );
}

export default App;
