var jwt = require('jsonwebtoken');
const userModel = require('../Model/User.Model');

function Authorisation(alloweduser){
  return   function (req,res,next){
  
    const token=req.headers.token.split(" ")[1]

        jwt.verify(token, "secret", async function (err, decoded) {
            if(err){
                res.send({message:"something went wrong"})
            }
          const data = await userModel.find({ username });
          
          if ( alloweduser.includes(data[0].role)) {
            next();
          } else {
            res.send({ message: "You are not authorised" });
          }
        });
    }
}

module.exports = Authorisation;