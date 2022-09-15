// import fs module
const fs= require('fs');

//read file
fs.readFile('./test.text',(err,data)=>{ //pass also character set 'utf8'
    // console.log(data.toString()) //or use toString to decode the buffer
    // console.log(typeof data)
    // console.log(data.toString().split(",")[0])
    // data.toString().split(",").forEach(name => {
    //     console.log(name)
        
    // });
})

// //read directory
// fs.readdir("./",(err,data)=>{
//     console.log(data)
//    let dirList= data.filter(filename=>filename.includes(".jpg"))
//    console.log(dirList)
// })


// //read two files
// fs.readdir("./",(err,data)=>{
//     console.log(data)
//    let textFiles= data.filter(file=>file.includes(".txt"))
//    console.log(textFiles)
//    fs.readFile(textFiles[0,"utut")
// })

// //write file
// fs.writeFile("readme.txt", " hello node.js No 2", (err)=>{
//     console.log("file is created")
// })

// fs.writeFile("./public/readme.txt", "readme file",(err=>{
//     console.log("file created")
// }))


// //append file
// fs.appendFile("readme.txt"," ..something to append", (err=>{
//     console.log("file is appended")
// }))

// fs.appendFile("users.json","5", (err=>{
//         console.log("file is appended")
//     }))

fs.readFile("users.json","utf8",(err,data)=>{
    let users=JSON.parse(data)
    console.log(users,"before")
    users.push(5)
    console.log(users,"after")
    fs.writeFile("users.json",JSON.stringify(users), (err)=>{
        console.log("file is updates")
    })
})
