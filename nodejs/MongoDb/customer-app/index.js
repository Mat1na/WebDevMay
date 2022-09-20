const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/customers', (err) => console.log('connected to db'));
}

// 1. create a schema
const customerSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    phone: String,
    address: String,
    website: String
})

// 2. compile schema to model
const Customer = mongoose.model('Customer', customerSchema)

// 3 Customer-1 user object
const customerObj = {
    fullname: 'Michael Jackson',
    email: 'john@gmail.com',
    phone: '1234567890',
    address: '1234 Main St',
    website: 'www.john.com'
}

// email validation
function EmailValidation(email) {
    let domains = ['gmail.com', 'hotmail.com']

    let foundEmail = domains.filter(domain => domain === email.split('@')[1])
    // console.log(foundEmail)
    if (foundEmail.length > 0) {
        return true
    } else {
        return false
    }
}

// userValidation

function isCustomerExist(fullname){
    return Customer.exists({
        fullname:fullname
    })
    .then(res=>res)
}



// 4 create an object from model
const customer1 = new Customer(customerObj)

// add data
isCustomerExist(customer1.fullname)
.then(res=>{
    if(res!==null){
        console.log('customer already exist')
    }else{
        if (EmailValidation(customer1.email)) {
            //  save to db
            console.log('true')
            customer1.save()
            .then(data=>{
                console.log(data, "SAVED")
            })
        } else {
            console.log("Please enter a valid email")
        }
    }
})

// update data
Customer.findByIdAndUpdate('632984d7479c9020e069186d',{
    email:'mickael@gmail.com',
    website:'www.mickael.com'
})
.then (data=>console.log(data,'udated'))

// find data
   // Customer.findById('632984d7479c9020e069186d')
    // .then(data=>console.log(data))
Customer.find({_id:'632984d7479c9020e069186d'})
.then(data=>console.log(data))


// delete data
Customer.findByIdAndDelete('632987c9d8c949da5816c999')
.then(data=>console.log(data, 'deleted'))

