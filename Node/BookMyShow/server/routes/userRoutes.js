//const express = require("express");
//const Router = express.Router();
//OR
const router = require("express").Router();

// save user schema to db 
const user = require("../models/userModel");

router.post('/register', async (req,res)=>{
    try {
        const userExists = await user.findOne({email:req.body.email});
        if(userExists){
            return res.send({
                success:false,
                message:"User with this email already exist"
            })
        }
        const newUser = new user(req.body);
        console.log(newUser);
        await newUser.save();
        res.send("got the data");
    } catch (error) {
        console.log(error); 
    }   
})

module.exports = router ;
