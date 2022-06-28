async function getAllUsersData(){
    let usersData= await fetch("https://jsonplaceholder.typicode.com/users")
   let data= usersData.json()
  
   return data
}





// let newUsers= []
// getAllUsersData()
// .then(data=>{
//     data.forEach(user=>{
//        /// console.log(user)
//         const spesificData = {
//             fullname:user.name,
//             username:user.username,
//             email:user.email

//         }
//         console.log(spesificData)
//         newUsers.push(spesificData)

//         return newUsers
//     })
// })

getAllUsersData()
.then(data=>{
    return data.map(({name,username,email})=>({name,username,email}))
})

.then(data=>{
    console.log(data)
})

const TbodyResult=document.getElementById("result")

getAllUsersData()
.then(data=>{
    data.forEach(user=>{

        //iterate through the data

        TbodyResult.innerHTML+=`<tr>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
    </tr> `
    })
})



// const TestData = ['a','b','c','d','e']
// const [x,y,z,d,e,f,g] = TestData
// console.log(x,y,z,g) 

const obj={
    id:1,
    name:'atilla',
    username:'root',
}

const {id,name,username} = obj
console.log(username)

fetch("read.txt")
.then(res=>res.text())
.then(data=>console.log(data))



const number1=document.getElementById("number1")
const number2=document.getElementById("number2")
const SumBtn=document.getElementById("btn")

SumBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    const num1=Number.number1.value
    const num2=Number.number2.value
    let result=eval(num1+num2)
    console.log(result)

})