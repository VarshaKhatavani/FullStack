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
        name : "Salesforce",
        creator:"XYZ",
        isPublished:true,
        rating:4.8       
    })
    const courseCreated = await course.save();
}

//createCourse();

// operators 
// $lt
// lte 
// gte 
// gt 
// in
// not in

async function getCourse(){
    const course = await Course.findById("65a2c6502388344df8ab7251");
    console.log(course);
}

getCourse();

async function updateCourse(id){
    let course = await Course.findById(id);
    if(!course){
        return;
    }
    course.name="Scala"
    course.creator="Carey"
    const updatedCourse = await course.save();
    console.log(updateCourse)
}

updateCourse("65a2c805f89a4cf5dd82e24e");

async function deleteCourse(id){
    const deletedCourse = await Course.findByIdAndDelete(id);
    console.log(deletedCourse);
}

deleteCourse("65a2cdd37ad5097c992ce649");