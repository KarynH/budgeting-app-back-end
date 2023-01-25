const app = require("./app.js");

//CONFIGURATION
//Loads .env file contents into process.env.
require("dotenv").config();
const PORT = process.env.PORT;

//APP.LISTEN CALLBACK
//method listens for connections, takes a callbackfunction
app.listen(PORT, () => {
  console.log(`port ${PORT}  is running!`);
});
