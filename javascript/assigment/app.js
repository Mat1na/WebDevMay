
function checkWeather(){
var temp;
var result;

var goodWeather= document.getElementById("weqther").value;
if(temp="rain"){
    result="You need an umbrela";
}

else{
result=goodWeather? "It\'s  warm you don\'t need a jacket":"It\'s  cold wear a jacket";
}
}

console.log(result);