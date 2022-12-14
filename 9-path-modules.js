//1:06:00
const path = require("path");
const seperator = path.sep;

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(`filePath: ${filePath}`);

const base = path.basename(filePath);
console.log(`base: ${base}`);

const absolute = path.resolve(__dirname, "content", "subfoler", "test.txt");
console.log(`absolute: ${absolute}`);

//Questions:
// Difference between filePath, base, and abolute?
