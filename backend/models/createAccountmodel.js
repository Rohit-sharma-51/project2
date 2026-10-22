const mongoose=require("mongoose");

const createAccount=new mongoose.Schema({
    fullName:{type:String,required:true},
    role:{type:String,required:true,enum:["farmer","buyer"]},
    preferredLanguage:{type:String,enum:["english","hindi"],default:"english"},
    phoneNumber:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    country:String,
    state:String,
    city:String,
    address:String
});

const Account=mongoose.model("Account",createAccount);
module.exports=Account;