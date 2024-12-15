import mongoose from "mongoose";
import { User } from "../models/user.model.js";

// Create a new user
export const newUser = async (req, res) => {
  const { user, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await User.create({
      user,
      email,
      password,
    });

    res.status(201).json({ message: "User created successfully" }, user);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Sign in an existing user
export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    if (existingUser.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    if (existingUser.password === password) {
      return res
        .status(200)
        .json({ message: "User signed in successfully" }, existingUser);
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
