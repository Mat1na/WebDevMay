function bmiCalc(weight, height){
    var bmi=weight/Math.pow(height,2);
    console.log("Your BMI is",bmi);
    return bmi
}

bmiCalc(65,1.75)
console.log(bmiCalc(65,1.75))


// // arrow function
// const VerifyStudent2 = studentParam => {
//     //  console.log(studentParam) // function scope
//     let isStudent = studentParam.isStudent
//     // console.log(isStudent)
//     console.log("Arrow function")
//     return isStudent ? `NAME:${studentParam.name}\nAGE:${studentParam.age}\nSCORES:${studentParam.scores.toString()}` : "He/she is not a student"
// }


const bmiCalcArrow=(weight,height)=>{
     var bmi=weight/Math.pow(height,2);
console.log("Your BMI from ArrowFunction is",bmi);
return bmi
}