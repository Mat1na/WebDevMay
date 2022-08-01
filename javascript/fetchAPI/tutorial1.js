// fetch API
// http://testphp.vulnweb.com/userinfo.php
// https://insomnia.rest/download
// 

// fetch("http://localhost:5000/api")
// .then(response=>{
//     setTimeout(()=>{
//         console.log("hello"),2000
//     })
//     return response.json()
// })

// //promose chain method
// .then(data=>{
//     //iterate through the data
//     data.forEach(user=> {
//       console.log(user)  
//     });
// })

// .catch(err=>console.log(err))

// fetch("http://localhost:5000/api")
// .then(res=>res.json())
// .then(data=>data)
// .then(data=>{
//    data.map(user=>{
//         user.username=user.username.toUpperCase()
//     })
//     return data
// })
// .then(data=>console.log(data))


const TbodyResult=document.getElementById("result")


// async function getUsers(){
//     let response=await fetch("http://localhost:5000/api")
//     return response.json()
// }
// getUsers()
// .then(data=>{
//     console.log(data)
// })



// // let getUsers= new Promise((resolve,reject)=>{
// //     fetch("http://localhost:5000/api")
// //     .then(res=>res.json())
// //     .then(data=>{
// //         resolve(data)
// //     })
// //     .catch(err=>reject(err))
// // })

// getUsers()//we call it with () when we use async without when we call the variable from promise
// .then(data=>{
//     data.forEach(user=>{

//         //iterate through the data

//         TbodyResult.innerHTML+=`<tr>
//         <td>${user.id}</td>
//         <td>${user.username}</td>
//         <td>${user.password}</td>
//     </tr> `
//     })
// })


//https://jsonplaceholder.typicode.com/users



async function getAllUsersData(){
    let usersData= await fetch("https://jsonplaceholder.typicode.com/users")
    return usersData.json()
}



let newUsers= []
getAllUsersData()
.then(data=>{
    data.forEach(user=>{
       /// console.log(user)
        const spesificData = {
            fullname:user.name,
            username:user.username,
            email:user.email

        }
        console.log(spesificData)
        newUsers.push(spesificData)

        return newUsers
    })
})

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