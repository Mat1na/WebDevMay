// const student={
//     name:"Joe Dalton",
//     age:25,
//     education:"Software Developer",
//     projects:['a','b','c','d'],
//     print: function(){
//         console.log("print function")
//         console.log(this.name)
//         console.log(this)
//     }
// }
// console.log("global scope",this)
// function ThisExample(){
//     console.log(this,"function scope this")
// }

// ThisExample()
// // student.print()


// const name="Joe"; // global scope

// function LocalScopeFunction(){
//     const name = "Dalton"
//     console.log(name)
// }


// LocalScopeFunction()
// console.log(name)

const student={
    name:"Joe Dalton",
    age:25,
    education:"Software Developer",
    projects:['a','b','c','d'],
    print: ()=>{ // arrow function
        console.log(this.name)
        console.log("arrow function")
    }
}

//student.print()

const Tools = {
    bmicalc:function(weight,height){
        let bmi = weight/(height*height)
        console.log(`BMI Result is ${bmi}`)
    },
    nettosalary:function(salary,tax){
        let netSalary = salary - ((salary*tax)/100)
        console.log(`Net Salary is ${netSalary}`)
    }
}

// Tools.bmicalc(75,1.75)
// Tools.nettosalary(1000,21)

const PC = {
    screen:"ASUS",
    keyboard:"Logitech",
    mouse:"Logitech",
    cpu:"Intel i7",
    gpu:"NVIDIA GTA 1060 6Gb",
    power:false,
    turnon:function(){
        PC.power = true; // updated the boolean value 
        console.log("computer is turning on...")
        console.log(`
        Screen: ${PC.screen}
        Keyboard: ${PC.keyboard}
        Mouse: ${PC.mouse}
        CPU: ${PC.cpu}
        GPU: ${PC.gpu}`)
    },
    turnoff:function(){
        PC.power = false;  // updated the boolean value 
        console.log("Computer is turning off...")
    },
    switcher:function(){
        PC.power = !this.power; // alternative way of doing it
         // updated the boolean value {toggle}
        // if off turn on then off
    },
    status:function(){
        //const computerStatus = PC.power ? "Computer is running":"COmputer is off"
        console.log(PC.power ? "Computer is running":"COmputer is off")
    }
}


// PC.turnon()
// PC.status()
// PC.turnoff()
 PC.status()

function number1(){
    console.log(1)
    return 1
}
function number2(){
    console.log(2)
    return 5 // provide the value
}

console.log(number1()+number2())
