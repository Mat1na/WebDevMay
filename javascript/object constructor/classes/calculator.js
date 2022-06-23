class Calc{
    constructor(num1,num2,operator){
        this.result=0
        this.num1=num1
        this.num2=num2
        this.operator=operator
    }

    GetResult(operator){
        this.operator=operator
        switch(operator){
        case"+":
         this.result=this.num1+this.num2
         break;
         case"-":
         this.result=this.num1-this.num2
         break;
         case"*":
         this.result=this.num1*this.num2
         break;
         case"/":
         this.result=this.num1/this.num2
         break;
         default:
            console.log("invalid operator")
         break;


    }
}
    toString(){
            console.log(`${this.num1}${this.operator}${this.num2}=${this.result}`)
        }
    

    // add(){
    //     return this.result=this.num1+this.num2
    // }

    // subtract(){
    //     return this.result=this.num1-this.num2 
    // }

    // multiply(){
    //     return this.result=this.num1*this.num2
    // }

    // devide(){
    //     return this.result=this.num1/this.num2
    // }
    // toString(){
    //     console.log(`Result is ${this.result}`)
    // }
}


let app0=new Calc(10,5,)
app0.GetResult("-")
app0.GetResult("+")
app0.GetResult("*")
app0.toString()



// let app=new Calc(10,5,"+")
// app.GetResult()
// app.toString()

// let app2=new Calc(10,5,"-")
// app2.GetResult()
// app2.toString()

// let app3=new Calc(10,5,"*")
// app3.GetResult()
// app3.toString()

// app.add()
// app.subtract()
// app.multiply()
// app.devide()
// app.toString()