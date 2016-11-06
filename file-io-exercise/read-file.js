var fs = require('fs');
var fileName = process.argv[2];
if (fileName) {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data.toString());
    }
  });
}