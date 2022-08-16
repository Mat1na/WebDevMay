// function ChildComponent(){
//     return (
//         <div>
//             <h1>Test Test 123</h1>
//         </div>
//     )
// }

// export default ChildComponent

import ABC from "./components/socialIcons";
//import Users from './components/Users'
import {company,doMath,students} from './components/users'
export default function ChildComponent({name}){
    // define a variable
    const companyName= "Google";
    const getSumResult = 4+7;
    function getSumOfNumbers(a,b){
        return a+b
    }
    const PrintStudentName = name=>{
        return name.toUpperCase();
    }
    const Numbers = [1,2,3,4,5,6,7,8,9,10];
    const [a,b,c,d] = ['Joe,', 'Jane,', 'John,', 'Jim'];
    const myComponentStyle = {
        'color':'red',
        'fontSize':'20px',
        'fontWeight':'bold'
    }
    return(
        <div>
            {/* <h1>Hello friend!</h1>
           {alert('hello')}
           {5+5} */}
           <h1>{companyName}</h1>
           <h1>{getSumResult}</h1>
           <h2>
            {getSumOfNumbers(3,2)}
            {PrintStudentName('John')}
            {'Mike'.toUpperCase()}
            {console.log(companyName)}
            {Numbers}
           </h2>
           {/* {
            Numbers.map(number=><h1>{number}</h1>)
           } */}
           <h3>
            {a}
            {b}
            
            {c}
            {d}
           </h3>
           <h1>{ABC}</h1>
           {/* {console.log(Users)} */}
           {
            // iterate through the array
           students.map(user=>{
            return <h1>{user}</h1>
           }) 
           }
           <h1 style={myComponentStyle}>{company}</h1>
           {
            true?<h1>This is true</h1>:<h1>This is false</h1>
           }
           {
            [...[1,2,3,4]]
           }
        </div>
    )
}