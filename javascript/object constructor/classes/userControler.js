class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.users=[]
  }
  getusers(){
    return this.users
  }
  
}


class Guest extends User {
  constructor(username, password,permission) {
    super(username, password)
    this.permission=permission
  }
  register(){
    this.users.push({
        username: this.username,
        password:this.password ,
        permition:this.permission
    })
}



}
class Admin extends User {
  constructor(username, password,permission) {
    super(username, password)
    this.permission=permission
  }
  register(){
    this.users.push({
        username: this.username,
        password:this.password ,
        permition:this.permission
    })
}
}


let app= new Admin("admin","admin1237","administrator")
app.register()
console.log(app.getusers())