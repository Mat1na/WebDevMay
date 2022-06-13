// const student={
//     name:"Joe Dalton",
//     age:25,
//     education:"Software Developer",
//     projects:["a","b","c","d"],
//     print:function(){
//         console.log("print function");
//         console.log(this.name);
//         console.log(this);
//     }
// }
// console.log("global scop",this)
// student.print()

// var name="Joe";

// function LocalScopeFunction(){
//     const name="Dalton";
//     console.log(name)
// }
// console.log(LocalScopeFunction)

// const student2={
//     name:"Joe Dalton",
//     age:25,
//     education:"Software Developer",
//     projects:["a","b","c","d"],
//     print:()=>{
//         console.log("print function");
//         console.log(this.name);
//         console.log(this);
//     }
// }
// console.log("global scop",this)
// student2.print() // does not work with arrow function


// const Tools={
//     bmiCalc:function(weight,height){
//         let bmi=weight/(height*height);
//         console.log(`BMI result is ${bmi}`)
//     },
//     nettoSalary:function(salary,tax){
//         let netSalary=salary-((salary*tax)/100)
//         console.log(`Netto salary result is ${netSalary}`)
//     }
// };
// Tools.bmiCalc(75,1.75);
// Tools.nettoSalary(1000,21);

const computer={
    screen:"Asus",
    keyboard:"Logitech",
    mouse:"Logitech",
    cpu:"intel",
    gpu:"NVIDIA",
    power:false,
    turnon:function(){
        this.power=true;
        console.log("Computer is turning on...")
        console.log(`
        screen:${this.screen}
        keyboard:${this.keyboard}
        mouse:${this.mouse}
        cpu:${this.cpu}
        gpu:${this.gpu}
        `)
    },
    turnoff: function(){
        this.power=!this.power;
        console.log("Computer is turning off...")
    },
    // switcher:function(){
    //     this.power=this.power;
    // },
    status: function(){
const computerStatus=this.power?"Computer is on":"Computer is off"
console.log(computerStatus);
    }
}
// computer.turnon();
// // computer.turnoff();
// computer.status()

// function number1(){
//     console.log(1)
//     return 1
// }
// function number2(){
//     console.log(2)
//     return 2
// }

// console.log(number1()+number2()) /* does not work without return */