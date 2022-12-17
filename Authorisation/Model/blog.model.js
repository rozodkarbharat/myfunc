const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    title:String,
    author:String,
    description:String
})


const blogModel=mongoose.model("blog",schema)

module.exports=blogModel