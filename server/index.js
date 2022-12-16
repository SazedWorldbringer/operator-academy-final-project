// Import express and the file containing our route definitions
const express = require("express");
const app = express();
const routes = require("./src/routes");
// mongoose to connect to the database
const mongoose = require('mongoose');

const db = mongoose.connect(
  `mongodb+srv://cutest-asteroid:${process.env.MONGODB_PASSWORD}@cluster0.fegxgy7.mongodb.net/?retryWrites=true&w=majority`
);

// Configure the express application
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false }));
app.use("/", routes);

// Start the server
app.listen(port, () => {
  console.log(`Your Express application is running on port ${port}`);
});
