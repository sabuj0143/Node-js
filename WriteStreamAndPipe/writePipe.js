const fs  = require('fs');

// const OurReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf8');
const OurReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
const OurWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

// OurReadStream.on('data', (chunk) => {
//     OurWriteStream.write(chunk);
// });
OurReadStream.pipe(OurWriteStream);