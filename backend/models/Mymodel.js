const mongoose=require("mongoose");
const mySchema=new mongoose.Schema({
    productName:String,
    category:String,
    subCategory:String,
    unit:String,
    price:Number,
    quantity:String,
    description:String,
    state:String,
    city:String,
    address:String,
    harvestDate:Date,
    expiryDate:Date
})

// Model
const myModel=mongoose.model("myModel",mySchema);
module.exports=myModel;