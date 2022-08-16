// function ChildComponent(){
//     return (
//         <div>
//             <h1>Test Test 123</h1>
//         </div>
//     )
// }

// export default ChildComponent

import ABC from "./components/socialIcons"
import users from "./components/users"

export default function ChildComonent() {

  // define a variable
  const companyName="Google"
  const getSumResult=4+7
  function getSumOfNumbers(a,b){
    return a+b
  }
  const PrinStudentName=name=>{
    return name.toUpperCase()
  }
const numbers=[1,2,3,4,5,6,7,8,9]
const[a,b,c,d]=["john","jane","joe","jim"]
const myStyle={
    "color":"red",
    "fontSize":"50px",
    "fontWeight":"bold"
}

  return (
    <div>
      <h1>Test Test</h1>
      {/* {alert ("hello")} */}
      {5 + 5}
      <h1>{companyName}</h1>
      <h2>{getSumResult}</h2>
      <h3>{getSumOfNumbers(3,2)}</h3>
      <h1>{PrinStudentName("John")}
      {"Mike".toUpperCase()}</h1>
      {numbers}
     {numbers.map(number=>{
            return <h2>{number}</h2>
        })}
        <h2>{a}</h2>
        <h1>{ABC}</h1>
        {console.log(users)}
        {users.map(user=>{
            return (
            <>
            {user==="joe"?<h1>Hello joe</h1>:<h1>Hello visitor</h1>}
            </>
            )
        })}
        {/* <h1 style={{"color":"red","fontSize":50}}>{companyName}</h1> */}
        <h1 style={myStyle}>{companyName}</h1>
        {
            true? <h1>true</h1>:<h1>false</h1>
        }
    </div>
  );
}
