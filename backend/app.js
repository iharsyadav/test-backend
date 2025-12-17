import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Car from "./models/Car.js";
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch(err => console.log(err));

const app = express();
app.use(cors());
app.use(express.json());

app.get("/cars", async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
app.listen(process.env.PORT ||5000, () => console.log("Server running on 5000"));
