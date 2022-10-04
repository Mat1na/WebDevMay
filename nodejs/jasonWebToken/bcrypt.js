// test and learn bcryptjs module 
const bcrypt = require('bcryptjs')
const user_passwords = 'abc123'
// hashing plaintext passwords
bcrypt.hash(user_passwords,10)
.then(result=>{
    console.log(`before ${user_passwords}\nafter ${result}`)
})

const passsentbyfront = "abc123"
// $2a$10$WIRq5hEw19cQqpymDUbUm.96Bu0MQv6OlvC/PLA8dudGq1F5TVsWy

// how do we compare plaintext pass and hashed one
bcrypt.compare(passsentbyfront,"$2a$10$WIRq5hEw19cQqpymDUbUm.96Bu0MQv6OlvC/PLA8dudGq1F5TVsWy")
.then(result=>{
    console.log(result) // pass is valid or invalid
})


