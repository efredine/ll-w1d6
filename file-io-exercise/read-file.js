var fs = require('fs');
var fileName = process.argv[2];
if (fileName) {
  fs.readFile(fileName, {encoding: 'utf8', mode: 'r'}, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });
}