const express = require("express");
const prdtController = require("./Controllers/productController");
const app = express();
const PORT = 8088;

//get all products
app.get("/products",prdtController.getAllProducts);
// get specific product
app.get("/products/:id",prdtController.getProductById);
// post data to json
//http://localhost:8088/products/
app.post("/products",prdtController.createPost);
// delete specific product
app.delete("/products/:id",prdtController.deletePost);
// put - major updates | add key/value pairs
app.put("/products/:id",prdtController.replaceProduct);

// http://localhost:8088/products/1
//{
//     "id":1,
//     "title":"Laptop",
//     "price":3400.00,
//     "ratings":4.9
// }
// patch - minor updates | update json values
app.patch("/products/:id",prdtController.updateProduct);

app.listen(PORT, ()=>{
    console.log(`server is listening at ${PORT}`);
})

