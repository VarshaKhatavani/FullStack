const express = require("express");
const productRoute = require("./routes/productRoute");

const app = express();
const PORT = 8088;

app.use(express.json());
app.use('/', productRoute.router);  // middleware is initilizing our router for us.

app.listen(PORT, ()=>{
    console.log(`server is listening at ${PORT}`);
})