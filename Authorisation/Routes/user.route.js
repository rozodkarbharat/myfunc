const express=require("express")
const IsUserExist = require("../middlewares/IsUserExist")
const userModel=require("../Model/User.Model")
var jwt = require("jsonwebtoken");
const userRouter=express.Router()

userRouter.post("/signup",IsUserExist,async(req,res)=>{
    const {username,password,role}=req.body
    try{
       const data=new userModel({username,password,role})
        await data.save()
        res.status(200).send({message:"Signup Successful"})
    }
    catch(err){
        res.status(501).send({message:"Something went wrong",type:"err"})
    }
})

userRouter.post("/login",async(req,res)=>{
     const { username, password } = req.body;
    try{
      const data=await userModel.find({username,password})
      if(data){
        var token = jwt.sign({ username }, "secret");
        res.status(200).send({message:"Login Successful",token})
      }
    }
    catch(err){
     res.status(501).send({ message: "Something went wrong", type: "err" });
    }
})

module.exports=userRouter