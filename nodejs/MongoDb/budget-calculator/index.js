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
      } else {
        console.log("connected to db");
      }
    }
  );
}

// create your schema here!
const budgetSchema = new mongoose.Schema({
title:String,
description:String,
value:Number
});

// 2. compile schema to model
const Budget = mongoose.model("budget", budgetSchema);

prompt.start();

function AddBudget() {
  prompt.get(["title", "description","value"], (err, budget) => {
    console.log(budget);

    const budgetObj = new Budget(budget);
    budgetObj.save()
    .then((data) => console.log(data,"Budget is saved!"));
  });
}

function UpdateBudget() {
  prompt.get(["title", "description","value"], (err, budget) => {
    console.log(budget);
    Customer.updateOne({ incom: incom }, { $set: budget })
      .then((response) => console.log(response))
      .finally(() => {
        console.log("To return menu press 0");
        prompt.get(["return"], (err, answer) => {
          if (answer.return === "0") {
            console.clear();
            Menu();
          }
        });
      });
    console.log(incom);
    //    console.log(clean(customer))
  });
}

function GetAllBudgets() {
  Budget.find({})
    .then((data) => {
      data.forEach((budget) => {
        console.table({
        
                    
        });
      });
    })
    .finally(() => {
      console.log("To return menu press 0");
      prompt.get(["return"], (err, answer) => {
        if (answer.return === "0") {
          console.clear();
          Menu();
        }
      });
    });
}

function Menu() {
  console.log(
    "\x1b[33m%s\x1b[0m",
    `
────██──────▀▀▀██ Budget app v.1.0
──▄▀█▄▄▄─────▄▀█▄▄▄
▄▀──█▄▄──────█─█▄▄
─▄▄▄▀──▀▄───▄▄▄▀──▀▄
─▀───────▀▀─▀───────▀▀`
  );
  console.log(`1. Add Budget\n2. Update Budget\n3. Exit`);
  prompt.get(["option"], (err, opt) => {
    switch (opt.option) {
      case "1":
        // console.log('Add Customer')
        AddBudget();
        break;
      case "2":
        UpdateBudget();

        break;

      case "3":
        GetAllBudgets();

        break;

      case "4":
        console.log("Exit");
        process.exit();
      default:
        console.log("Invalid Option");
        Menu();
    }
  });
}

Menu();
