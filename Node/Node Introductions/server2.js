const express = require("express");

const app = express();

// application level middleware
app.use((req, res, next)=>{
    console.log(req.method, req.ip, req.hostname, new Date());
    next(); // will allow next request to execute
})

// auth middleware
const auth = (req, res, next)=>{
    console.log(req.query); 
    //  add in query string : http://localhost:8088/?password=123
    // output : { password: '123' }
    let password = req.query.password;
    if(password==123){
        next();
    }
    else{
        res.send("You are not authorized person");
    }
}
//app.use(auth);

// route level middleware
// query string : http://localhost:8088/users/?password=123
app.get("/users", auth, (req,res)=>{
    res.send({"type":"GET"});
})


// user specific middleware
// query string : http://localhost:8088/users/123/?password=123
app.get("/users/:id", auth, (req,res)=>{
    console.log(req.params);
    res.send({"type":"GET"});
})

// Built in middleware
app.use(express.static('public'));

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