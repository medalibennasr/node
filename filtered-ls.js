var fs = require("fs");

fs.readdir(process.argv[2],function(err, files) {
    if (err) {
       return console.error(err);
    }
    files.forEach( function (file) {
       file.endsWith('.'+process.argv[3]) && console.log( file );
    });
  
 });