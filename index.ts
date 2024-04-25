#! /usr/bin/env node
import inquirer from "inquirer";

const currency: any = {
  USD: 1, //Base Currency
  EUR: 0.92,
  KWD: 0.31,
  INR: 83.3,
  PKR: 277.78,
  AED: 3.78,
  BHD: 0.78,
  CNY: 7.3,
  AUD: 1.52,
  OMR: 0.38,
  AFN: 71.29,
  CAD: 1.36,
};

let userAns = await inquirer.prompt([
  {
    name: "from",
    message: "Enter from currency",
    type: "list",
    choices: [
      "USD",
      "EUR",
      "KWD",
      "INR",
      "PKR",
      "AED",
      "BHD",
      "CNY",
      "AUD",
      "OMR",
      "AFN",
      "CAD",
    ],
  },
  {
    name: "to",
    message: "Enter to currency",
    type: "list",
    choices: [
      "USD",
      "EUR",
      "KWD",
      "INR",
      "PKR",
      "AED",
      "BHD",
      "CNY",
      "AUD",
      "OMR",
      "AFN",
      "CAD",
    ],
  },
  {
    name: "amount",
    message: "Enter to your amount",
    type: "number",
  },
]);

let fromAmount = currency[userAns.from]; // exchange rate
let toAmount = currency[userAns.to];  // exchange rate
let amount = userAns.amount;
let baseAmount = amount / fromAmount; // convert a USD based currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);