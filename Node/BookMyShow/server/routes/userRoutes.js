//const express = require("express");
//const Router = express.Router();
//OR
const router = require("express").Router();

// save user schema to db 
const user = require("../models/userModel");

router.post('/register', async (req,res)=>{
    const newUser = new user(req.body);
    console.log(newUser);
    await newUser.save();
    res.send("got the data");
})

module.exports = router ;
