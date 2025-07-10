import mongoose  from "mongoose";

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    image:String,
    views:{type:Number,default:0}

});
export const Product = mongoose.model("Product",productSchema);