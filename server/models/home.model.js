import mongoose from "mongoose";

const homeSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
});

export const Home = mongoose.model("Home", homeSchema);
