import mongoose from "mongoose";

const bottleSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
});

export const Bottle = mongoose.model("Bottle", bottleSchema);
