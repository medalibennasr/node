// var fs = require("fs");
// var dali = fs.readFileSync(process.argv[2], "utf8");
// console.log(dali.toString().split("/n").length - 1);

var fs = require("fs");
var data = fs.readFileSync(process.argv[2]);
console.log(data.toString().split("\n").length - 1);
