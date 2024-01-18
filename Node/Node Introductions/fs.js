const fs = require("fs");
console.log(fs);

//create a file if it doesn't exist, if exist overwrite data
fs.writeFileSync("file1.txt","Hey, I'm data of file 1");

let readFileOne = fs.readFileSync("file1.txt");
console.log(readFileOne.toString());

fs.writeFileSync("file2.txt","Hey, I'm data of file 2");

let contentOfFileTwo = fs.readFileSync("file2.txt");
console.log(contentOfFileTwo.toString());

fs.appendFileSync("file1.txt", " appended data");

//delete file
fs.unlinkSync("file2.txt");

// create directory
if(!fs.existsSync("myDirectory"))
    fs.mkdirSync("myDirectory");

if(!fs.existsSync("myDirectory2"))
    fs.mkdirSync("myDirectory2");

if(fs.existsSync("myDirectory2")){
    fs.rmdirSync("myDirectory2");
    console.log("my directory 2 deleted")
}