class Person {
    constructor(name,age){
    this.name=name
    this.age=age
}
}

class Student extends Person{
    constructor(name,age,role){
        super(name,age)
        this.role=role
    }
}

class Teacher extends Person{
    constructor(name,age,role){
        super(name,age)
        this.role=role
    }
}

let student=new Student("John",20,"student")
console.log(student)