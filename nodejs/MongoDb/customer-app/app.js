const mongoose = require('mongoose')
// npm i prompt
const prompt = require('prompt')

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/customers');
}

// 1. create a schema
const customerSchema = new mongoose.Schema({
    fullname: {
        type:String,
        lowercase:true,
    },
    email: String,
    phone: String,
    address: String,
    website: String
})

// 2. compile schema to model
const Customer = mongoose.model('Customer', customerSchema)

function clean(obj) {
    for (var propName in obj) {
      if (obj[propName] === '' || obj[propName] === undefined) {
        delete obj[propName];
      }
    }
    return obj
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
function isCustomerExist(fullname) {
    return Customer.exists({
        fullname: fullname
    })
        .then(res => res)
}

prompt.start();

function AddCustomer() {
    prompt.get(['fullname', 'email', 'phone', 'address', 'website'], (err, customer) => {
        // console.log(customer)
        // create obj from model
        const customerObj = new Customer(customer)
        isCustomerExist(customer.fullname)
            .then(fullname => {
                fullname === null ?
                    EmailValidation(customer.email) ?
                        customerObj.save()
                            .then(data => console.log("Customer is saved!"))
                        :
                        console.log("Invalid Email")
                    :
                    console.log('fullname is not available')
                // clear console after 2 seconds
            })
            .finally(() => setTimeout(() => {
                console.clear()
                Menu()
            }, 2000))

    })
}

function UpdateCustomer(customerFullname){
    prompt.get(['fullname', 'email', 'phone', 'address', 'website'],(err,customer)=>{
        console.log(customer)
        Customer.updateOne({fullname:customerFullname},{$set:clean(customer)})
        .then(response=>console.log(response))
        .finally(() => {
            console.log('To return menu press 0')
            prompt.get(['return'], (err, answer) => {
                if (answer.return === '0') {
                    console.clear()
                    Menu()
                }
            })
        })
        console.log(customerFullname)
    //    console.log(clean(customer))
    })
}



function GetAllCustomers() {
    Customer.find({})
        .then(data => {
            data.forEach(customer => {
                console.table({
                    fullname: customer.fullname,
                    email: customer.email,
                    phone: customer.phone,
                    address: customer.address,
                    website: customer.website
                })
            })
        })
        .finally(() => {
            console.log('To return menu press 0')
            prompt.get(['return'], (err, answer) => {
                if (answer.return === '0') {
                    console.clear()
                    Menu()
                }
            })
        })
}

function DeleteCustomer() {
    prompt.get(['fullname'], (err, customer) => {
        isCustomerExist(customer.fullname)
            .then(fullname => {
                fullname !== null ?
                    Customer.findOneAndDelete({
                        fullname:customer.fullname
                    })
                        .then(() => console.log(`${customer.fullname} is deleted.`))
                    :
                    console.log('Customer not found')
            })
            .finally(() => {
                setTimeout(() => {
                    console.clear()
                    Menu()
                }, 3000)
            })
    })
}

function Menu() {
    console.log('\x1b[33m%s\x1b[0m',`
────██──────▀▀▀██ Customer app v.1.0
──▄▀█▄▄▄─────▄▀█▄▄▄
▄▀──█▄▄──────█─█▄▄
─▄▄▄▀──▀▄───▄▄▄▀──▀▄
─▀───────▀▀─▀───────▀▀`)
    console.log(`1. Add Customer\n2. Update Customer\n3. Delete Customer\n4. Get Customers\n5. Exit`)
    prompt.get(['option'], (err, opt) => {
        switch (opt.option) {
            case '1':
                // console.log('Add Customer')
                AddCustomer()
                break;
            case '2':
                prompt.get(['fullname'],(err,customer)=>{
                    Customer.find({fullname:customer.fullname})
                    .then(response=>response.length>0)
                    .then(bool=>{
                        if(bool){
                            UpdateCustomer(customer.fullname)
                        }
                    })
                   
                 //   UpdateCustomer()
                })
                break;
            case '3':
                DeleteCustomer()
                break;
            case '4':
                GetAllCustomers()
                break;
            case '5':
                console.log("Exit")
                process.exit()
            default:
                console.log('Invalid Option')
                Menu()
        }
    })
}

Menu()