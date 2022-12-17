var jwt = require("jsonwebtoken");
const express=require("express");
const blogModel = require("../Model/blog.model");
const Authorisation = require("../middlewares/Authorisation");
const blogRouter=express.Router()

blogRouter.post("/create", Authorisation(['admin']), async (req, res) => {
  const { title, author, description } = req.body;
  try {
    const data = await new blogModel({ title, author, description });
    await data.save;
    res.send({ message: "Blog created successfully" });
  } catch (err) {
    res.status(500).send({ message: "Something Went Wrong" });
  }
});

module.exports=blogRouter