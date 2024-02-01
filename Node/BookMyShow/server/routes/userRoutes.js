//const express = require("express");
//const Router = express.Router();
//OR
const router = require("express").Router();
const bcrypt = require("bcrypt");
// save user schema to db 
const user = require("../models/userModel");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/authMiddleware");

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
            message:"User has been created! Please Sign Up."
        });
    } catch (error) {
        console.log(error); 
    }   
})

router.post('/login', async (req,res)=>{
    try {
        const userInput = await user.findOne({email:req.body.email});
        //console.log(userInput);
        // userInput - stores user object
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

        const token = jwt.sign(
                    {userId:user._id}, 
                    process.env.JWT_SECRET_KEY,
                    {expiresIn:"1d"}
        );
        console.log(token);

        res.send({
            success:true,
            message:"Welcome " + userInput.name + ", to BookMyShow!",
            token:token
        })
    } catch (error) {
        console.log(error);
    }
})


router.get("/get-current-user", authMiddleware, async(req,res)=>{
    try {
        console.log('req.body.userId....',req.body.userId);
        const loggendInUser = await user.findById(req.body.userId);
         console.log(loggendInUser);
        res.send({
            success:true,
            message:"Users details fetched!",
            data:loggendInUser
        })
    } catch (error) {
        res.send({
            success:false,
            message:error.message
        })
    }
})

module.exports = router ;
