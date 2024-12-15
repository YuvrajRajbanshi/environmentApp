import mongoose from "mongoose";

const homeSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  img: String,
});

export const Home = mongoose.model("Home", homeSchema);
