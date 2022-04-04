import Logger from "js-logger";
import { App } from "./app";

// the logging for this application
Logger.useDefaults();

// transaction data that contains a record for a transaction.
// these records contain the user id, the date of the transaction and the
// dollar amount for that transaction.

const transactions = [
  {
    userId: "jay",
    date: new Date("10/24/2021"),
    dollarAmount: 120,
  },
  {
    userId: "jay",
    date: new Date("9/24/2021"),
    dollarAmount: 10,
  },
  {
    userId: "jay",
    date: new Date("8/24/2021"),
    dollarAmount: 140,
  },
  {
    userId: "dianne",
    date: new Date("1/22/2021"),
    dollarAmount: 220,
  },
  {
    userId: "dianne",
    date: new Date("2/24/2021"),
    dollarAmount: 122,
  },
  {
    userId: "dianne",
    date: new Date("3/2/2021"),
    dollarAmount: 49,
  },
  {
    userId: "dianne",
    date: new Date("2/4/2021"),
    dollarAmount: 240,
  },
  {
    userId: "dianne",
    date: new Date("1/1/2021"),
    dollarAmount: 440,
  },
];

App(transactions);
