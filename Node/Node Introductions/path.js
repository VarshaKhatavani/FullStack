const path = require("path");
console.log(path);

let jsFilePath = "/Users/HP/Documents/GitHub/FullStack/Node/Node BookMyShow/path.js";

// get extension name
console.log(path.extname(jsFilePath));

//get base name (file name)
let basename = path.basename(jsFilePath);

console.log(basename);

// get directory name
console.log(__dirname);

//file name along with path
console.log(__filename);