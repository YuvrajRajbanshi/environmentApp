import express from "express";
import { getData } from "../controllers/raw.js";

const router = express.Router();

router.get("/test", getData);

export default router;
