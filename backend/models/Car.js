import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
});

// ✅ THIS LINE IS VERY IMPORTANT
const Car = mongoose.model("Car", carSchema);

export default Car;
