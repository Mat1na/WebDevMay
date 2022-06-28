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