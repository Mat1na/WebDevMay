const mongoose = require("mongoose");
// npm i prompt
const prompt = require("prompt");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb://localhost:27017/budget-calculator",
    (err) => {
      if (err) {
        console.log("error in connecting to db");
      }
    }
  );
}

// create your schema here!
const budgetSchema = new mongoose.Schema({
  username: String,
  expenses: {
    type: Array,
  },
  income: {
    type: Array,
  },
  balance: Number,
});

// 2. compile schema to model
const Budget = mongoose.model("budget", budgetSchema);

prompt.start();

function AddIncome(username) {
  prompt.get(["income", "category"], (err, result) => {
    if (err) {
      return console.error(err);
    }
    try {
      Budget.findOneAndUpdate(
        { username: username },
        { $push: { amount: result.income, category: result.category } },
        (err) => {
          console.log("saved");
        }
      )
    } catch (error) {
    } finally {
      setTimeout(() => Menu(username), 3000);
    }
  });
}

function AddExpences() {
  prompt.get(["expense", "category"], (err, result) => {
    if (err) {
      return console.error(err);
    }
    Budget.findOneAndUpdate(
      { username: username },
      { $push: { amount: result.expense, category: result.category } }
        .then(() => {
          console.log("expense added");
        })
        .finally(() => {
          setTimeout(() => Menu(username), 3000);
        })
    );
  });
}

function ShowBalance() {
  Budget.findOne({ username: username }).then((response) => {
    let income = response.income.reduce(
      (acc, curr) => parseInt(acc) + parseInt(curr.amount),
      0
    ); //accumulator ,currentValue
    let expenses = response.expenses.reduce(
      (acc, curr) => parseInt(acc) + parseInt(curr.amount),
      0
    );
    console.log("income:", Math.floor(income), income);
    console.log("expenses:", Math.floor(expenses));
    console.log("balance:", Math.floor(income - expenses));
  });
}
// ascii art
function Menu(username) {
  console.log(
    "\x1b[33m%s\x1b[0m",
    `:
────██──────▀▀▀██ Budget app v.1.0 
──▄▀█▄▄▄─────▄▀█▄▄▄
▄▀──█▄▄──────█─█▄▄
─▄▄▄▀──▀▄───▄▄▄▀──▀▄
─▀───────▀▀─▀───────▀▀`
  );
  console.log(
    "\x1b[33m%s\x1b[0m",
    `${username} logged in, welcome to your budget app`
  );
  console.log("\x1b[1m", `Please choose one of the following options:`);
  console.log("\x1b[31m", `1. Add income`);
  console.log("\x1b[31m", `2. Add expenses`);
  console.log("\x1b[31m", `3. Show balance`);
  console.log("\x1b[31m", `4. Exit`);

  prompt.get(["option"], (err, result) => {
    if (err) {
      return console.error(err);
    }
    switch (result.option) {
      case "1":
        // console.log('Add Customer')
        AddIncome(username);
        break;

      case "2":
        AddExpences(username);
        break;

      case "3":
        ShowBalance(username);
        break;

      case "4":
        console.log("\x1b[33m%s\x1b[0m", `Thank you for using our app!`);
      // process.exit();
      default:
        console.log("\x1b[31m", `Please choose a valid option!`);
        Menu();
    }
  });
}

(() => {
  console.log("\x1b[33m%s\x1b[0m", "Login with your username");
  prompt.get(["username"], function (err, result) {
    Budget.find({ username: result.username }, function (err, docs) {
      if (docs.length == 0) {
        console.log("user not found, creating new user and logging in...");
        Budget.create(
          { username: result.username, expenses: [], income: [], balance: 0 },
          function (err, small) {
            if (err) return console.error(err);
            setTimeout(() => {
              Menu(result.username);
            }, 2000);
          }
        );
      } else {
        Menu(result.username);
      }
    });
  });
  // Menu()
})();
