// Import express and the file containing our route definitions
const express = require("express");
const app = express();
const routes = require("./src/routes");

require('dotenv').config()

// mongoose to connect to the database
const mongoose = require('mongoose');

const cors = require('cors')

// Configure the express application
const port = process.env.PORT || 3000;
app.use((res, req, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use("/", routes);
mongoose.set('strictQuery', false)

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Your Express application is running on port ${port}`);
    });
  })
