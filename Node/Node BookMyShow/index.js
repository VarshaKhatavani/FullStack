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

// schema create

const courseSchema = new mongoose.Schema({
    name:String,
    creator:String,
    publishedDate:{type:Date, default:Date.now},
    isPublished:Boolean,
    rating:Number
})

// Model

const Course = mongoose.model('Course', courseSchema);

// CRUD

async function createCourse(){
    const course = new Course({
        name : "Java",
        creator:"James Gosling",
        isPublished:true,
        rating:4.5       
    })
    const courseCreated = await course.save();
}

//createCourse();