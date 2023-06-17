const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
   const MyReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf8');
   MyReadStream.pipe(res)
});

server.listen(5000);
console.log('port lister running');




// const fs  = require('fs');

// const OurReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf8');
// const OurReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);

// OurReadStream.on('data', (chunk) => {
//     console.log(chunk.toString());
// })

