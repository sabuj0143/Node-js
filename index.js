const fs  = require('fs');

// const OurReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf8');
const OurReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);

OurReadStream.on('data', (chunk) => {
    console.log(chunk.toString());
})

