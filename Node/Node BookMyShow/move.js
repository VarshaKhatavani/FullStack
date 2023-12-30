const fs = require("fs");
const path = require("path");

let srcPath = "/Users/HP/Documents/GitHub/FullStack/Node/Node BookMyShow/move.js";
let destDirectory = "/Users/HP/Documents/GitHub/FullStack/Node/Node BookMyShow/Directory 2";

let baseNameOfFile = path.basename(srcPath);
console.log(baseNameOfFile); // move.js

let destPath = path.join(destDirectory,baseNameOfFile);
console.log(destPath); // destination path

fs.copyFileSync(srcPath, destPath);

//fs.unlinkSync(srcPath);
