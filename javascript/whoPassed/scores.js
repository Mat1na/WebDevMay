

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

var myInput = document.getElementById("myInput")
var myButton=document.getElementById("myButton")
var myResult=document.getElementById("myResult")



// function whoPassedExam (){
//     let InputName = myInput.value.toLowerCase()
//     let Student =_students.filter(person=>person.name==InputName)
//     if(Student.length==0)
//     {myResult.innerHTML="Your name is not on the list."}
//      else if (Student.map(person=>person.score)>=50)
//      {myResult.innerHTML= Student.map(person=>person.name+" you pass with "+ person.score)}
//      else
//      {myResult.innerHTML=Student.map(person=>person.name+" you fail with "+ person.score) }
//     }
//     myButton.addEventListener("click", whoPassedExam) 

 
    function whoPassed(){
        let myInputName=myInput.value.toLowerCase()
        let Student =_students.filter(person=>person.name==myInputName)

    if(Student.length==0){
        myResult.innerHTML="Not in the list"
    }else if(Student.map(person=>person.score)>=50){
        myResult.innerHTML=Student.map(person=>person.name +" you passed with "+person.score)
    }else{
        myResult.innerHTML=Student.map(person=>person.name +" you failed with "+person.score)
    }
}
myButton.addEventListener("click",whoPassed)