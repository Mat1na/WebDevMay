class User {
    constructor(role='user') {
        this.role=role;
    }
}

class Controller extends User {
    constructor(role) {
        super(role);
        this.users = [];
    }

    getUsers(){
        return this.users;
    }

    register(username,password) {
        this.users.push({
            username,
            password,
            role:this.role
        })
    }
}


let admin = new Controller('Administrator');
admin.register('mehmet','mehmet12345');
admin.register('ali','ali12345');
// console.log(admin.getUsers())

admin.getUsers().forEach(user=>{
    console.log(user)
})