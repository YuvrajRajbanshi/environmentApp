import mongoose from "mongoose";

const allSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
});

export const All = mongoose.model("All", allSchema);
