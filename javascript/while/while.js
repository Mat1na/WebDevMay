// do while

var i = 0;
// do{
// // do something here
// console.log("hello friend")
// i++;
// }while(i<=10); // true > false


// do{
//     console.log("hello friend")
// }while(false)


// do{
//     var getRandomNumber = Math.floor(Math.random() * 100)
//     console.log(getRandomNumber)
//     i++
// }while(i<=10)

var number;
// do{
//     number = parseInt(prompt("Enter a number between 1 and 10"))
//     console.log(number)
// }while(number < 1 || number > 10)
const RateLimitResult = document.getElementById("rateLimit")
const password = "12345"
let rateLimit = 3; // 2 attempts left // 1 attempt left // 0 attempts left
// do {
//     number= prompt("Enter your password")
//     if(number !=password){
//         console.log("Wrong password")
//         rateLimit--
//         RateLimitResult.innerText = `${rateLimit} attempts left`
//     }else{
//         console.log("Correct password")
//     }
// }while(rateLimit!=0)


// while (rateLimit > 0) {
//     var UserInput = prompt("Enter your password")
//     if(rateLimit == 0){
//         console.log("You are blocked")
//         break;
//     }


//     if (UserInput != password) {
//         console.log("Wrong password")
//         rateLimit--
//         RateLimitResult.innerText = `${rateLimit} attempts left`
//     }else{
//         console.log("Correct password")
//         break;
//     }

// }

var x = 0;
var total = 0;
// while(x<10){
//     x++;
//     total+=x;
//     console.log(`${x} + ${total} = ${total}`)

// }

while (x < 100) {
    x++;
    if (x % 3 == 0) {
        console.log(x)
        if (x > 50) {
            break;
        }
    }
}