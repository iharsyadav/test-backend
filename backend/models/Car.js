import mongoose from "mongoose";
const carSchema = new mongoose.Schema({
    name:String,
    brand:String,
    color: String,
    topspeed:Number,
    price: Number,
    image: String
})
export default mongoose.Model("Car",carSchema);