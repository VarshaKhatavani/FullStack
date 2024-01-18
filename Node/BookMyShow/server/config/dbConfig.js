require("dotenv").config();
const mongoose = require("mongoose");

const dbConnectionString = process.env.DB_CONNECTION_STRING ;
console.log('DB Connection String:', dbConnectionString);

mongoose.connect(dbConnectionString)
    .then(()=>{
        console.log('connect to db');
    })
    .catch((error)=>{
        console.log('Error connecting to MongoDB:',error.message);
    })
