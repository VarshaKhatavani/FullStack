//Mongoose is an Object Data Modeling (ODM) library for MongoDB. 
//It is used to create and manage relationships between data, 
//provides schema validation, and is used to translate between objects in code 
//and the representation of those objects in MongoDB. 

const mongoose = require("mongoose");

const password = "5GGZ0yGyGMu4fU13";

const db = `mongodb+srv://Varsha:${password}@bookmyshow.lec0l7m.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(db).then(()=>{
    console.log("Connection Established!");
}).catch((err)=>{
    console.log(err);
})