//const express = require("express");
//const Router = express.Router();
//OR
const router = require("express").Router();
const bcrypt = require("bcrypt");
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
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        // create new user 
        const newUser = new user(req.body);
        console.log(newUser);
    
        // save to database
        await newUser.save();
        res.send({
            success:true,
            message:"User has been created!"
        });
    } catch (error) {
        console.log(error); 
    }   
})

router.post('/login', async (req,res)=>{
    try {
        const userInput = await user.findOne({email:req.body.email});
        if(!userInput){
            return res.send({
                success:false,
                message:"User with this email doesn't exists"
            })
        }
        const validPassword = await bcrypt.compare(req.body.password,userInput.password);
        if(!validPassword){
            return res.send({
                success:false,
                message:"Invalid password"
            })
        }
        res.send({
            success:true,
            message:"User Logged In"
        })
    } catch (error) {
        console.log(error);
    }
})
module.exports = router ;
