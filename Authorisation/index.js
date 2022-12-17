const express=require("express")
const cors=require("cors")
const connection=require("./db")
const userRouter=require("./Routes/user.route")
const blogRouter = require("./Routes/blog.route")
const app=express()
app.use(express.json())
app.use(cors())

app.use("/user",userRouter)
app.use("/blog", blogRouter);

app.get("/",(req,res)=>{
    res.send("Homepage")
})

app.listen(8000,async()=>{
    await connection
    console.log("server running")
})