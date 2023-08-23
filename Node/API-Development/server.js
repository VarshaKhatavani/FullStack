const http = require("http");

console.log(http);

const server = http.createServer((req,res)=>{
    console.log("server has been started");
    res.end("Hello world!");    
})

server.listen(8080);