//javascript class

   //function based
// function App(username){
//     this.username=username
// }
// App.prototype.getUserName=function(){
//     return this.
// }


     //class based

class App{

    constructor(username){
        this.username=username
        this.users=[]
    }
    getUserName(){
        return this.username
    }

    getUsers(){
        return this.users
    }

    addUser(){
        return this.users.push(this.username)
    }
    toString(){
        return this.getUserName()+ " "+App.getCity
    }

    static getCity(){
        return "Brussels"
    }
}

let app=new App("John")
console.log(typeof App)
console.log(typeof app)
console.log(app.getUserName())
console.log(app.toString())
app.addUser()
console.log(app.getUsers())
console.log(App.getCity())