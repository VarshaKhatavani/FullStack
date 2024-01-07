const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send({"type":"GET"});
})

app.post("/",(req,res)=>{
    res.send({"type":"POST"});
})

app.put("/",(req,res)=>{
    res.send({"type":"PUT"});
})

app.delete("/",(req,res)=>{
    res.send({"type":"DELETE"});
})

app.listen(8088, ()=>{
    console.log("Server has been started...");
})