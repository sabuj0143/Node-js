
const fs  = require('fs');

// const OurReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf8');
const OurReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
const OurWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

OurReadStream.on('data', (chunk) => {
    OurWriteStream.write(chunk);
});















// const http = require('http');
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('<html><head><title>Form</title></head>');
//         res.write(
//             '<body><form method="post" action="/process"><input name="message" /></form></body>'
//         );
//         res.end();
//     } else if (req.url === '/process' && req.method === 'POST') {
//         const body = [];
//         req.on('data', (chunk) => {
//             body.push(chunk);
//         })
//         req.on('end', () => {
//             console.log('Stream finished');
//             const parsedBody = Buffer.concat(body).toString();
//             console.log(parsedBody);
//         })
//         res.write('Thank You Submit!');
//         res.end();
//     } else {
//         res.write('404 Data is not available');
//         res.end();
//     }

// });

// server.listen(5000);
// console.log('port lister running');




// const fs  = require('fs');

// const OurReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf8');
// const OurReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);

// OurReadStream.on('data', (chunk) => {
//     console.log(chunk.toString());
// })

