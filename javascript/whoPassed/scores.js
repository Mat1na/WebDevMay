const filter = document.getElementById('filter') 
const FindBtn = document.getElementById('find') 
const result = document.getElementById('result') 
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




// successfull=_students.filter(value=>{
//     return value.score>=50

// })

console.log(successfull)



function whoPassedTheExam(value){

    FindStudentByName=name=>{
        return _student.filter(value=>value.name==name)
    } 

    if(_students.filter(value=>value.score>=50)){
        result.innerHTML=`${value.name} your score is ${value.score} you have passed`

    }

  else{
    result.innerHTML=`${value.name} your score is ${value.score} you have not passed`
   return "not found"
  
  }

  
}






function ClickHandler(){
    

  console.log(filter.value)
  _students= whoPassedTheExam(filter.value)
  

  
}



FindBtn.addEventListener("click", ClickHandler)

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