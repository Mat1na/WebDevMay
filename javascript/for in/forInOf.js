const student={
    name:"joe",
    age:30,
    isAdmin:false,
    courses:["html","css","javascript"],
    address:{
        city:"Lviv",
        street:"schevchenko"

    }
}

const student1={
    x:"john",
    y:30,
    z:false
}


//console.loog("result", student["isAdmin"])

function UpdateData(obj,key,newValue){
    return obj[key]=newValue
}
//for in
for (var key in student){
    console.log(student [key])
    for(var key2 in student[key]){
        console.log(student [key][key2])  
    }
}

function UpdateObjectData(obj,key,newValue)
// for for
for (var key of Object.entries(student)){
    console.log(key)
}