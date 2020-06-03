var fs = require('fs');
fs.readFile('AC.json', function (err, dado) {
  if (err) {
    console.error('Could not open file: %s', err);
    process.exit(1);
  }
  console.log(dado.toString('utf8'));
});
