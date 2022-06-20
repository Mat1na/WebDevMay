let result;
let lead=document.querySelector(".lead");

let date=new Date();


// get full year

result=date.getFullYear();
lead.innerHTML=result;


// get month
lead.innerHTML=date.getMonth();


// tollocaleString
result=date.toLocaleString()
lead.innerHTML=date.toLocaleString("nl-BE")


// window.setInterval(UpdateTime,1000)
// function UpdateTime(){
// var hours, minutes, seconds;
// hours=date.getHours();
// minutes=date.getMinutes();
// seconds=date.getSeconds();


//     lead.innerHTML=`${hours}:${minutes}:${seconds}`
// }


var DaysInNederlands=["zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"]
lead.innerHTML=DaysInNederlands[date.getDay()]

result=date.setFullYear(2021,01,01)

console.log(result)

