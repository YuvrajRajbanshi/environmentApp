import mongoose from "mongoose";

import { All } from "../models/all.model.js";
import { Home } from "../models/home.model.js";

export const getAllProducts = async (req, res) => {
  try {
    // const allProducts = await All.find();
    // res.status(200).json(allProducts);

    res.json({ message: "I am working fine sir" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const homeProducts = async (req, res) => {
  try {
    const homeProduct = await Home.find();
    res.status(200).json(homeProduct);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
