const express = require("express");
const fs = require("fs");

const app = express();
// handle JSON encoded data
app.use(express.json());

const data = JSON.parse(fs.readFileSync("./data.json","utf-8"));
let products = data.products;
//console.log(products);

const getAllProducts =  (req,res)=>{ 
    res.send(products);
}

const getProductById = (req,res)=>{
    let id = req.params.id;
    console.log(id);
    const product = products.find((obj)=>obj.id == id);
    console.log("Single product will be shown");
    //console.log(product);
    res.send(product);
}

const createPost = (req,res)=>{
    console.log(req.body);
    let product = req.body;
    products.push(product);
    res.send("data added");
}

const replaceProduct = (req,res)=>{
    const id = req.params.id;
    const productIndex = products.findIndex(obj => obj.id == id);
    // splice will add new json values & delete existing one
    products.splice(productIndex, 1, {id:id, ...req.body});
    res.send("data updated with PUT")
}

const deletePost = (req,res)=>{
    const id = req.params.id; 
    const productIndex = products.findIndex(obj => obj.id == id);
    console.log(productIndex);
    products.splice(productIndex,1);
    res.send("Data Deleted");
}

const updateProduct = (req,res)=>{
    const id = req.params.id;
    const productIndex = products.findIndex(obj => obj.id == id );
    const product = products[productIndex];
    products.splice(productIndex, 1, {...product, ...req.body});
    res.send("data updated with PATCH");
}

module.exports = {
    getAllProducts,
    getProductById,
    createPost,
    replaceProduct,
    deletePost,
    updateProduct         
}