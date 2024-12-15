import mongoose from "mongoose";

const solarSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  img: String,
});

export const Solar = mongoose.model("Solar", solarSchema);
