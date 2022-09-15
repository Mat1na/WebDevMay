// import fs module 
const fs = require('fs'); // fs is a core module

// read file
fs.readFile('./test.txt','utf8',(err,data)=>{
    // console.log(typeof data) // convert buffer to string
    // console.log(data.split(",")[0]) // convert text into array
    // data.split(",").forEach(name=>console.log(name))
    // let binaryData = ""
    // for(let i=0; i<data.length;i++){
    //     let newData = data[i].charCodeAt(0).toString(2)
    //     binaryData+=newData
    // }
    // console.log(binaryData)
})

// read a directory
// fs.readdir('./',(err,data)=>{
//     // console.log(data)
//     let dirList = data.filter(filename=>filename.includes('.jpg'))
//     console.log(dirList)
// })

// read two files 
// fs.readdir('./',(err,data)=>{
//     // console.log(data) // list of all files in dir
//     let TxtFiles = data.filter(file=>file.includes('.txt')) // list of txt files
//     //console.log(TxtFiles)
//     // fs.readFile(TxtFiles[0],'utf8',(err,data)=>{
//     //     console.log(data)
//     // })
//     TxtFiles.forEach(txt=>{
//     //    console.log(txt) // txt > filename.txt
//         fs.readFile(txt,'utf8',(err,data)=>{
//             console.log(data,txt)
//         })
//     })
// })

function ReadFiles(ext){
    fs.readdir('./',(err,data)=>{
        let TxtFiles = data.filter(file=>file.includes(ext)) // list of txt files
        TxtFiles.forEach(txt=>{
            fs.readFile(txt,'utf8',(err,data)=>{
                console.log(data,txt)
            })
        })
    })
}

// ReadFiles('.java')
// ReadFiles('.doc')

// write File
// fs.writeFile('readme.txt','This is another test.',(err)=>{
//     console.log('File is created')
// })

// fs.writeFile('./public/readme.txt','readme file',(err)=>{
//     console.log('File is created')
//     if(err) throw console.log(err)
// })

// append File
// fs.appendFile('readme.txt','Extra string appended',(err)=>{
//     console.log("File is appended")
// })

// fs.appendFile('users.json','5',(err)=>{
//     console.log('file is appended')
// })

// fs.readFile('users.json','utf8',(err,data)=>{
//     let users = JSON.parse(data) // from string to array/object
//     console.log(users,"before")
//     users.push(5)
//     console.log(users,"after")
//     fs.writeFile('users.json',JSON.stringify(users),(err)=>{
//         console.log('file is updated')
//     })
// })

function AppendDataIntoFile(filename,NewValue){
fs.readFile(filename,'utf8',(err,data)=>{
    if(data===undefined){
        fs.writeFile(filename,'[]',(err)=>console.log('file is created')) //if file does not exit
    }
    // let arr=JSON.parse(data) //parse string into array
    // arr.push(NewValue)//added new value in array
    // //update file here
    // fs.write(filename,JSON.stringify(arr), (err)=>{
    //     console.log("file is appended")
    // })
})
}
AppendDataIntoFile('post.json','0')
