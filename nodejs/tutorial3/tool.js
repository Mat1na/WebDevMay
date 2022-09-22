// process object
let commands = process.argv
//console.log(typeof parseInt(commands[2]),commands[3])
// function GetSumOfTwoNumbers(a,b){
//     return a+b
// }
// console.log(GetSumOfTwoNumbers(parseInt(commands[2]),parseInt(commands[3])))

// let users = ['jane','john','joe','jim','jessica']

// function GetUser(name){
//     return users.filter(user=>user===name)
// }

// let result = GetUser(commands[2])
// console.log(result)

// require('dotenv').config()
// console.log(process.env.TOKEN)

const link = commands[3] // youtube link
// const fileFormat = commands[5] // file format
const fileName = commands[5]

// console.log(`--link ${link} --convert ${fileFormat}`)

// const fs = require('fs');
// const ytdl = require('ytdl-core');
// fs.readFile(commands[2],'utf8',(err,data)=>{
//     let links = data.split('\n')
//    // console.log(links)
//     links.forEach((link,index)=>{
//         console.log(link,' is downloading...')
//         ytdl(link).pipe(fs.createWriteStream(`video-${index+1}.mp4`))
//     })
// })
// ytdl(link)
//   .pipe(fs.createWriteStream(fileName));

var {asyncsleep, sleep} = require('s1eep');

// while(true){
//     console.log('hello')
//     sleep(3000)
//  }