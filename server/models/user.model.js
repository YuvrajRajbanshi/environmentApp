import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  user: "string",
  password: "string",
  email: "string",
});

export const User = mongoose.model("User", userSchema);
