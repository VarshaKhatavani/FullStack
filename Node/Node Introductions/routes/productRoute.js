const express = require("express");
const prdtController = require("../controllers/productController");

const router = express.Router();

//get all products
router.get("/products",prdtController.getAllProducts)
// get specific product
.get("/products/:id",prdtController.getProductById)
// post data to json
//http://localhost:8088/products/
.post("/products",prdtController.createPost)
// delete specific product
.delete("/products/:id",prdtController.deletePost)
// put - major updates | add key/value pairs
.put("/products/:id",prdtController.replaceProduct)
// http://localhost:8088/products/1
//{
//     "id":1,
//     "title":"Laptop",
//     "price":3400.00,
//     "ratings":4.9
// }
// patch - minor updates | update json values
.patch("/products/:id",prdtController.updateProduct);

exports.router = router;