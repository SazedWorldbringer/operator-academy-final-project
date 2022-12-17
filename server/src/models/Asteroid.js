const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const AsteroidSchema = new Schema({
  title: String,
});

const AsteroidModel = mongoose.model("Asteroid", AsteroidSchema);

module.exports = AsteroidModel
