import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

import testRouter from "./routes/test.js";

const connectDB = () => {
  try {
    const success = mongoose.connect("mongodb://localhost:27017/ecoswap");
    console.log("Database has connected successfully my bro");
  } catch (error) {
    console.log("Database has failed to connect", error);
  }
};
connectDB();

app.get("/", (req, res) => {
  res.json({
    message: "Hello I am Yuvraj and try to check if it's working or not",
    test: "Sky fall ",
    samy: "Hello Meri 💝 kaise hai tu",
  });
});

app.get("/api/hello", testRouter);

app.get("/test", (req, res) => {
  res.json({
    message: "Hello I am Yuvraj and try to check if it's working or not",
    test: "Sky fall ",
    samy: "Hello Meri hope kaise hai tu",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
