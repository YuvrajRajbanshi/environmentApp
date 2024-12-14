import exress from "express";
import mongodb from "mongodb";

export const getData = (req, res) => {
  res.json({
    message: "Hello I am Yuvraj and try to check if it's working or not",
    test: "Sky fall ",
    sanjana: "Hello Meri Hemlata  kaise hai tu",
  });
};
