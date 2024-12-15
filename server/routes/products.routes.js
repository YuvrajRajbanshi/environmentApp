import express from "express";
import {
  getAllProducts,
  homeProducts,
} from "../controllers/products.controller.js";

const router = express.Router();

// for all the products, will differ from types
router.get("/all", getAllProducts);

// for only home page products
router.get("/home", homeProducts);

export default router;
