const express = require('express');
const MailSender = require('./utils/MaileSender');
const Mail = require('./utils/mail');


const app=express();

app.use(express.json());
app.post("/first",async(req,res)=>{
    const {to,subject,text}=req.body;
    let result=await Mail({to,subject,text})

    if(result.error){
        res.send({message:result.message})
    }
    else{
        res.send({message:result.message})
    }
})

app.post("/second",async(req,res)=>{
    console.log(req.body)
    const {to,subject,text}=req.body;
    let result=await Mail({to,subject,text})
    console.log()
    if(result.error){
        res.send({message:result.message})
    }
    else{
        res.send({message:result.message})
    }
})

app.post("/third",async(req,res)=>{
    const {to,subject,text}=req.body;
    let result=await Mail({to,subject,text})
    if(res.error){
        res.send({message:result.message})
    }
    else{
        res.send({message:result.message})
    }
})

app.get("/",(req,res)=>{
    res.send("Welcome to home page!");
})


app.listen(5000,()=>{
    console.log('listening on port 5000')
})