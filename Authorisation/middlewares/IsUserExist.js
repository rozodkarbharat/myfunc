
const userModel = require("../Model/User.Model")

async function IsUserExist(req,res,next){
const {username,password}=req.body
const data=await userModel.find({username})
if(data){
    res.send({message:"user already exist"})
}
else{
    next()
}

}

module.exports = IsUserExist;