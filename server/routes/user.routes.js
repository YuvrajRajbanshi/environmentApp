import express from "express";
import { newUser, signin } from "../controllers/user.controller.js";
const router = express.Router();

// users routes

router.post("/newUser", newUser);

// signin route
router.post("/signIn", signin);
export default router;
