// Import express and the file containing our route definitions
const express = require("express");
const app = express();
const routes = require("./src/routes");

// Configure the express application
const port = 3000;
app.use(express.urlencoded({ extended: false }));
app.use("/", routes);

// Start the server
app.listen(port, () => {
  console.log(`Your Express application is running on port ${port}`);
});
