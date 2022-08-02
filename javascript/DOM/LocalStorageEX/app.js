// find elements
const userInput = document.querySelector('.userinput')
const saveBtn = document.querySelector('.savebtn')
const getBtn = document.querySelector('.getbtn')

saveBtn.addEventListener('click', () => {
    if(JSON.parse(localStorage.getItem('students')) !==null){
        let getStorageData = JSON.parse(localStorage.getItem('students')) // temp localstorage data
        getStorageData.push(userInput.value) // add new data to temp array
        localStorage.setItem('students',JSON.stringify(getStorageData)) // re-write array data into localstorage
    }else{
        let students = [] // create new array
        students.push(userInput.value) // add new data to array
        localStorage.setItem('students',JSON.stringify(students)) // re-write array data into localstorage
    }
    
   
})

getBtn.addEventListener('click',()=>{
    // let username = localStorage.getItem('username')
    // console.log(`Username is ${username}`)
    let studentNames = JSON.parse(localStorage.getItem('students'))
    console.log(studentNames)
})

// document.addEventListener('keyup',(e)=>{
//     // let logs = localStorage.getItem('logs')
//     // logs += `${e.key} `
//     // localStorage.setItem('logs',logs)
//     // console.log(localStorage.getItem('logs'))
// })