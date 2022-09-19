//mongodb://localhost:27017

const mongoose = require("mongoose");
main().catch((err) => console.log(err));
//https://mongoosejs.com/docs/index.html

//mongodb+srv://admin:<password>@cluster0.z7q9oo4.mongodb.net/?retryWrites=true&w=majority

async function main() {
  await mongoose.connect("mongodb://localhost:27017/myMongoDB", (err) => {
    if (err) {
      console.log("error in connecting to db");
    } else {
      console.log("connected to db");
    }
  });
 
}
 // create your schema here!
 const users = new mongoose.Schema({
    username: {
     type:String,
     required:true
    },
    password: String,
    age: Number,
    isAdmin: Boolean,
  });

  //compile your schema to model
  const Users = mongoose.model("Users", users);

  //create a record
  const user1 = {
    username:"Stamatia",
    password: "123456",
    age: 18,
    isAdmin: true,
  };

  const _user1=new Users(user1)
  // //save it to database
  // _user1.save()
  // .then(res=>{
  //   console.log(res)
  // })

  // save when username unique
  Users.findOne({
    username:"admin"
  })
  .then(user=>{
   
    if(user!== null){
      
      console.log(user,"username already exists, Choose another username")
    }else{
      console.log(user,"username is unique")
      //save
      new Users({
        username:"admin",
        password: "123456",
        age: 18,
        isAdmin: true,
      }).save().then((newUser)=>console.log(newUser))
    }
  })

  // Users.find({})
  // .then(res=>{
  //   console.log(res) //all records
  // })

//   Users.find({
//     _id:'63285f46e3e16bfc84ff4c6b' //found id in MongoDB compass
//   })
//  .then(res=>{
//     console.log(res) //all records
//   })
// Users.find({
//   username:'Stamatia' 
// })
// .then(res=>{
//   console.log(res) 
// })
 
// //find id and delete item
// Users.findByIdAndDelete('63285f46e3e16bfc84ff4c6b')
// .then(res=>{
//   console.log(res, 'record deleeted') 
// })
// //Delete all
// Users.deleteMany({},(err)=>{
//   console.log('deleted') 
// })
