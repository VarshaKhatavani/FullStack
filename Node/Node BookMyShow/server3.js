const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 8088;

// handle JSON encoded data
app.use(express.json());

const data = JSON.parse(fs.readFileSync("./data.json","utf-8"));
let products = data.products;
//console.log(products);

//get all products
app.get("/products",(req,res)=>{ 
    res.send(products);
})

// get specific product
app.get("/products/:id",(req,res)=>{
    let id = req.params.id;
    console.log(id);
    const product = products.find((obj)=>obj.id == id);
    console.log("Single product will be shown");
    //console.log(product);
    res.send(product);
})

// post data to json
//http://localhost:8088/products/
app.post("/products",(req,res)=>{
    console.log(req.body);
    let product = req.body;
    products.push(product);
    res.send("data added");
})

// delete specific product
app.delete("/products/:id",(req,res)=>{
    const id = req.params.id; 
    const productIndex = products.findIndex(obj => obj.id == id);
    console.log(productIndex);
    products.splice(productIndex,1);
    res.send("Data Deleted");
})

// put - major updates | add key/value pairs
app.put("/products/:id",(req,res)=>{
    const id = req.params.id;
    const productIndex = products.findIndex(obj => obj.id == id);
    // splice will add new json values & delete existing one
    products.splice(productIndex, 1, {id:id, ...req.body});
    res.send("data updated with PUT")
})

// http://localhost:8088/products/1
//{
//     "id":1,
//     "title":"Laptop",
//     "price":3400.00,
//     "ratings":4.9
// }

// patch - minor updates | update json values
app.patch("/products/:id",(req,res)=>{
    const id = req.params.id;
    const productIndex = products.findIndex(obj => obj.id == id );
    const product = products[productIndex];
    products.splice(productIndex, 1, {...product, ...req.body});
    res.send("data updated with PATCH");
})

app.listen(PORT, ()=>{
    console.log(`server is listening at ${PORT}`);
})

