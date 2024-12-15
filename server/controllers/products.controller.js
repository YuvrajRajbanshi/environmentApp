import mongoose from "mongoose";

import { Home } from "../models/home.model.js";
import { Bottle } from "../models/bottle.model.js";
import { Bag } from "../models/bag.model.js";
import { Notebook } from "../models/notebooks.models.js";
import { Solar } from "../models/solor.model.js";

export const homeProducts = async (req, res) => {
  try {
    const homeProduct = await Home.find();
    res.status(200).json(homeProduct);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const bottleProducts = async (req, res) => {
  try {
    const bottleProduct = await Bottle.find();
    res.status(200).json(bottleProduct);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const bagProducts = async (req, res) => {
  try {
    const bagProduct = await Bag.find();
    res.status(200).json(bagProduct);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const notebookProducts = async (req, res) => {
  try {
    const notebookProduct = await Notebook.find();
    res.status(200).json(notebookProduct);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const solarProducts = async (req, res) => {
  try {
    const solarProduct = await Solar.find();
    res.status(200).json(solarProduct);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
