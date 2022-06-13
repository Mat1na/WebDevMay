
 var output=[];
 var number=1;

function fizzBuzz(){
   

if(number%3===0&&number%5===0){
    output.push("fizzbuzz");
}else if(number%3===0){
    output.push("fizz");
}else if(number%5===0){
    output.push("buzz")
}else{
    output.push(number);
}
number++;
console.log(output)

}

// function fizzBuzz(){
   

//     if(number%3===0&&number%5===0){
//        result= output.push("fizzbuzz");
//     }
   
//     else{
//        result= output.push(number);

//     }
//     number++;
//     console.log(output)
//     }
    


   
  