import mongoose from "mongoose";

const bagSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  img: String,
});

export const Bag = mongoose.model("Bag", bagSchema);
