import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import productRouter from "./routes/products.routes.js";
import userRouter from "./routes/user.routes.js";

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

const connectDB = () => {
  try {
    const success = mongoose.connect("mongodb://localhost:27017/ecoswap");
    console.log("Database has connected successfully my bro");
  } catch (error) {
    console.log("Database has failed to connect", error);
  }
};
connectDB();

app.use("/api/products", productRouter);
app.use("/api/bottleProducts", productRouter);
app.use("/api/notebookProducts", productRouter);
app.use("/api/solorProducts", productRouter);
app.use("/api/bagProducts", productRouter);

app.get("/", (req, res) => {
  res.json({ message: "Hello bro" });
});

// for single product
// app.use("/api/product", userRouter);

// only for users
// app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
