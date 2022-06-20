// Switch Statement

// switch(value){
//     case 1:
//         // do something here
//     break;
//     case 2:
//         // do something
//     break;
//     default:
//         // 
//         break;
// }
var value  = 2;

switch(value){
    case 1:
        console.log("value is 1");
        break;
    case 2:
        console.log("value is 2");
        break;
    default:
        console.log("value is not 1 or 2");

}

var date = new Date();

console.log(date.getDay()); // 1  refers to Monday 0 refers to Sunday
switch(date.getDay()){
    case 0:
        console.log("Zondag");
        break;
    case 1:
        console.log("Maandag");
        break;
    case 2:
        console.log("Dinsdag");
        break;
    case 3:
        console.log("Woensdag");
        break;
    case 4:
        console.log("Donderdag");
        break;
    case 5:
        console.log("Vrijdag");
        break;
    case 6:
        console.log("Zaterdag");
        break;
    default:
        console.log("something went wrong");

}

const winner = "Atilla";

switch(winner){
    case "Dave":
        console.log("Dave is the winner");
        break;
    case "Joe":
        console.log("Joe is the winner");
        break;
    default:
        console.log("No winner");
}

let isLightOn = false;
const SwitchBtn = document.getElementById("switcher")

const LightController = {
    lightOn:function(){
        console.log("Light is on");
        isLightOn = true;
    },
    lightOff:function(){
        console.log("Light is off");
        isLightOn = false;
    }
}


SwitchBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('hello')
    switch(isLightOn){
        case false:
            LightController.lightOn();
            break;
        case true:
            LightController.lightOff();
            break;
        default:
            console.log("Something went wrong");

    }
})


// switch(isLightOn){
//     case false:
//         console.log("Light is off");
//         break;
//     case true:
//         console.log("Light is on");
//         break;
//     default:
//         console.log("Something went wrong");
// }