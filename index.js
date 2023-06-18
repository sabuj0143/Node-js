/*
 * Title: Basic Node app example
 * Description: Simple node application that print random quotes per second interval.
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 11/09/19
 *
 */

// Dependencies
const mathLibrary = require('./lib/math');
const quotesLibrary = require('./lib/quotes');

// App object - Module scaffolding
const app = {};

// Configuration
app.config = {
    timeBetweenQuotes: 1000,
};

// Function that prints a random quote
app.printAQuote = function printAQuote() {
    // Get all the quotes
    const allQuotes = quotesLibrary.allQuotes();

    // Get the length of the quotes
    const numberOfQuotes = allQuotes.length;

    // Pick a random number between 1 and the number of quotes
    const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);

    // Get the quote at that position in the array (minus one)
    const selectedQuote = allQuotes[randomNumber - 1];

    // Print the quote to the console
    console.log(selectedQuote);
};

// Function that loops indefinitely, calling the printAQuote function as it goes
app.indefiniteLoop = function indefiniteLoop() {
    // Create the interval, using the config variable defined above
    setInterval(app.printAQuote, app.config.timeBetweenQuotes);
};

// Invoke the loop
app.indefiniteLoop();









// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req, res) => {
//    const MyReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf8');
//    MyReadStream.pipe(res)
// });

// server.listen(5000);
// console.log('port lister running');


// const fs  = require('fs');

// const OurReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf8');
// const OurReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);

// OurReadStream.on('data', (chunk) => {
//     console.log(chunk.toString());
// })

