const http = require("http");
//console.log(http);

let data = {"name":"Varsha"};

const server = http.createServer((req,res)=>{
    console.log("Server has been started");
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(data));
})

server.on('error', (error)=>{
    console.log('Server error:', error);
})

server.listen(8088);

