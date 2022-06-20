let result;
let lead = document.querySelector('.lead');
let date = new Date();
// let pastDate=new Date(1545,11,2,10,30,15)
// console.log(date)
// console.log(pastDate)

// get full year
result = date.getFullYear();
lead.innerHTML = result

// get month date day
lead.innerHTML = date.getMonth();

lead.innerHTML = date.getDate();
lead.innerHTML = date.getDay();

// // toLocaleString
// result = date.toLocaleString();
// lead.innerHTML = date.toLocaleString();
// lead.innerHTML = date.toLocaleString('nl-BE', { timeZone: 'Europe/Brussels', day: '2-digit', month: 'long', year: 'numeric' });


// window.setInterval(UpdateTime, 1000)

// function UpdateTime() {
//     let date2 = new Date()
//     var hours, minutes, seconds;
//     hours = date2.getHours();
//     minutes = date2.getMinutes();
//     seconds = date2.getSeconds();
//     lead.innerHTML = `${hours}:${minutes}:${seconds}`
// }

// var DaysInNederlands= ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'];

// lead.innerHTML = DaysInNederlands[date.getDay()];

// result = date.setFullYear(2022,05,20)
// lead.innerHTML =result
// console.log(result)