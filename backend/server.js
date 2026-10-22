// // const express=require("express");
// // const app=express();
// // const cors = require("cors");
// // app.use(cors());
// // app.use(express.json());     //Work of this line

// // require("dotenv").config();
// // const bcrypt = require("bcryptjs");
// // const mongoose=require("mongoose");
// // mongoose.connect(process.env.MONGO_URI)
// // .then(()=>{
// //     console.log("Mongodb connected")
// // })
// // .catch((err)=>{
// //     console.log("Error is coming:"+err)
// // });

// // const Account=require("./models/createAccountmodel")

// // app.post("/create-account",async(req,res)=>{
// //     try{
// //         const data=req.body;
// //         console.log(req.body);
// //          if (!data.fullName || !data.email || !data.password || !data.phoneNumber || !data.role) {
// //             return res.status(400).json({ message: "Please fill all required fields" });
// //         }


// //         const salt = await bcrypt.genSalt(10);
// //         data.password = await bcrypt.hash(data.password, salt);
// //         const user=new Account(data);
// //         await user.save();
// //         res.status(201).json({message:"Account has created"});
// //     }catch(err){
// //         console.log("ERROR", err); 
// //         res.status(500).json({error:err.message});
// //     }
// // });

// // const myModel=require("./models/Mymodel.js");
// // app.post("/myModel",async(req,res)=>{
// //     try{
// //         const data=req.body;
// //         const product=new Register(data);
// //         await product.save();
// //         res.status(201).json({message:"Data has stored"})
// //     }catch(err){
// //         res.status(500).json({error:err.message});
// //     }
// // });




// // app.get("/",(req,res)=>{
// //     res.send("Hello server");
// // })

// // app.listen(3000,()=>{
// //     console.log("server has started");
// // });









// const express = require("express");
// const app = express();
// const cors = require("cors");

// app.use(cors());
// app.use(express.json());

// require("dotenv").config();
// const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

// // ✅ correct model import
// const myModel = require("./models/Mymodel.js");

// // ✅ correct route
// app.post("/addproduct", async (req, res) => {
//   try {
//     console.log(req.body);

//     const product = new myModel(req.body); // ✅ FIXED
//     await product.save();

//     res.status(201).json({ message: "Product saved" });

//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// app.listen(3000, () => {
//   console.log("Server started on 3000");
// });








const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());

app.use(express.json()); // parses JSON from frontend

require("dotenv").config();
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("Error is coming: " + err);
  });

// ✅ Account Model
const Account = require("./models/createAccountmodel");

// ✅ Create Account API
app.post("/create-account", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);

    if (!data.fullName || !data.email || !data.password || !data.phoneNumber || !data.role) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }

    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);

    const user = new Account(data);
    await user.save();

    res.status(201).json({ message: "Account has created" });

  } catch (err) {
    console.log("ERROR", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Product Model
const myModel = require("./models/Mymodel.js");

// ✅ FIXED API
app.post("/addproduct", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);

    const product = new myModel(data); // ✅ FIXED HERE
    await product.save();

    res.status(201).json({ message: "Data has stored" });

  } catch (err) {
    // console.log(err);
    console.log(data);
    res.status(500).json({ error: err.message });
  }
});




const Product = require("./models/Product");
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});







// ✅ Server start
app.listen(3000, () => {
  console.log("Server has started on port 3000");
});