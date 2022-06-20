let score=document.querySelector(".score");
let btn=document.querySelector(".btn");
let results=document.querySelector(".results")

let scores=0




function rundomDiceNumbers(){

var diceRoll1=Math.round((Math.random()*5))+1;

console.log(diceRoll1);

var diceRoll2=Math.round((Math.random()*5))+1;
console.log(diceRoll2);

results.innerHTML=`${diceRoll1} and ${diceRoll2}`

console.log(results);


if(diceRoll1==diceRoll2){
    scores++
score.innerHTML=`your score is ${scores}`
}
else{
    results.innerHTML="Roll Again" 
}
}


btn.addEventListener("click",rundomDiceNumbers)

