import mongoose from "mongoose";

const notebookSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  img: String,
});

export const Notebook = mongoose.model("Notebook", notebookSchema);
