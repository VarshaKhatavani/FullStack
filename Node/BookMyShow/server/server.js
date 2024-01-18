const express = require("express");

const PORT = 5001; 

const app = express();

const dbConfig = require("./config/dbConfig");

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.listen(PORT, ()=>{
    console.log(`Server is live at PORT ${PORT}`);
})