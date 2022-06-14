var myArr=[];
var result=myArr;
var myNum=[5,7,8,1,9,4,45,78,14]
var numbers = [5,7,8,1,9,4,45,78,14]
var myLet=["a","c","k","i"]
//push method

myArr.push(1)
myArr.push("a")
myArr.push(null)
myArr.push(true)

//pop method
myArr.pop() //remove from end

// shift 
myArr.shift()//remove from start

//join method
result=myArr.join("-")

//short method
result=myLet.sort()//alphabetical order
result=myNum.sort(function(a,b){
    // return a-b
    return b-a
})

//concat method
result=myNum.concat(myLet)

//iteration method{for,forEach, filter,reduce, every, some}
for(var i=0;i<result.length;i++){
    console.log(result[i])
}


result.forEach(function(value,index,arrayitself){
console.log(value,index,arrayitself)
})


function NewForLoop(value,index,arrayitself){
    console.log(value,index,arrayitself)
    }

    // result.forEach(NewForLoop)
    // result.map(NewForLoop)

var total=0;
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i])
    total+=numbers[i]
    console.log(total)
}

// myNum.forEach((n)=>total+=n)
// result=`Total result is ${total}`

// Filter method
result=numbers.filter(function(value){
    return value>=10
})

let post=[
    
{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }
]
result=numbers.filter(value=>value>=10)
// result=post.filter(value=>{
//     return value.id===3
// })


function FindPostById(id){
    return post.filter(value=>value.id==id)
}
result=FindPostById(5)
console.log(result)