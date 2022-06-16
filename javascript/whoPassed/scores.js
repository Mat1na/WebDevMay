const input = document.getElementById('input')
const FindBtn = document.getElementById('find') 
const demo = document.getElementById('demo') 
var passed;
var successfull;
var FindStudentByName;

var _students = [
    {
        id:1,
        name:'avarel',
        course:'javascript',
        score:45
    },
    {
        id:1,
        name:'mike',
        course:'java',
        score:55
    },
    {
        id:1,
        name:'george',
        course:'javascript',
        score:66
    },
    {
        id:1,
        name:'joe',
        course:'python',
        score:70
    }
 
]

// whoPassedExam?


function whoPassedExam(value){
   successfull=value.filter((value)=>value.score>=50)
   return demo.innerHTML=`${value.name} your score is ${value.score} you have passed`
}

var result=whoPassedExam(_students)
console.log(result)




// successfull=_students.filter(value=>{
//     return value.score>=50

// })

// console.log(successfull)



// function whoPassedTheExam(value){

//     // FindStudentByName=name=>{
//     //     return value.filter(value=>value.name==name)
//     // } 

//     successfull= value.filter(value=>{value.score>=50})
       

//    result.innerHTML=`${value.name} your score is ${value.score} you have passed`

//    return value 

  
// }






// function ClickHandler(){
    

//   console.log(filter.value)
//   _students= whoPassedTheExam(filter.value)
  

  
// }



// FindBtn.addEventListener("click", ClickHandler)

// function whoPassedExam(value){
//     if (_students .filter(value => value.score >50)) {
//        return _students .filter(value => value.score >50)
       
// }else {
//     return  [{ score: 'Not successfull' }]
// }}


// function ClickHandler() {
//     console.log(filter.value)
//     let _students = whoPassedExam(filter.value)[0]

//     result.innerText =`${_students.name} your score is ${_students.score}`

// }

// console.log(whoPassedExam(_students))