
const fs=require ('fs')


// //rename file
// fs.rename('notes.txt','notes.js',(err)=>{
//     if(err) throw err;
//     console.log('file renamed')
// })

// // find files and rename them
// fs.readdir('./', (err, files) => {
//     let filesNames = files.filter(file => file.includes('12sd'))
//     //   console.log(filesNames)

//     filesNames.forEach((file,index) => {
//    //     console.log(file) // print file name
//         // rename all here
//         console.log(index,'before')
//         let newName = `tutorial-${index+1}.txt`
//        // console.log(newName)
//         fs.rename(file,newName,(err)=>console.log('renamed'))

//     })
// })

// delete file 
// fs.rm('company.txt',(err)=>{
//     console.log('file is deleted')
// })

// // unlink method also to delete file
// fs.unlink('tutorial-1.txt',(err)=>{
//     console.log('file is deleted')
// })

// // delete a folder
// fs.rmdir('./test',(err)=>{
//     console.log('folder is deleted')
// })

// delete a folder with subfolder

fs.rmdir('./test1',{
    recursive:true,
    force:true
},(err)=>{
    console.log('folder is deleted')
})

// exists method
fs.exists('./movies.txt',(result)=>{
    console.log(result?'file exists':'file doesnt exist')
})