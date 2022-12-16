import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Asteroid = new Schema({
  title: String,
  nasa_id: String,
  href: String,
  votes: Number
});
