const mongoose=require("mongoose")

const schema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
  role:{type:String}
});

const userModel=mongoose.model("user",schema)

module.exports=userModel