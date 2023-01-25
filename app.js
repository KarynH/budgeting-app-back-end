//DEPENDENCIES
const express = require("express"); //create an express application
const cors = require("cors"); //create use of cors
const transactionController = require("./controllers/transactionController"); //import, use array from models


const app = express();


app.use(cors());
app.use(express.json());

// /TRANSACTIONS
app.use("/transactions", transactionController);

module.exports = app;
