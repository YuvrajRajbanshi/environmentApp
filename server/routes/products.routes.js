import express from "express";
import {
  homeProducts,
  bottleProducts,
  bagProducts,
  notebookProducts,
  solarProducts,
} from "../controllers/products.controller.js";

const router = express.Router();

// for only home page products
router.get("/home", homeProducts);

// for all the products, will differ from types
router.get("/bottle", bottleProducts);

router.get("/bag", bagProducts);
router.get("/notebook", notebookProducts);
router.get("/solar", solarProducts);
// router.get()
export default router;
