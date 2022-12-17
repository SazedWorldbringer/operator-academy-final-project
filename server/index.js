// Import express and the file containing our route definitions
const express = require("express");
const app = express();
const routes = require("./src/routes");
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

mongoose.connect(
  `mongodb+srv://cutest-asteroid:uvuXBVnXeQ4iE0vS@cluster0.fegxgy7.mongodb.net/?retryWrites=true&w=majority`
).then(() => {
  app.listen(port, () => {
    console.log(`Your Express application is running on port ${port}`);
  });
})
