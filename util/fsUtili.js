const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile.
// This gives us a .then to do something with the data of a file.
const readFromFile = util.promisify(fs.readFile);

// The parameters for this function are destination and content it will write a 
// data from a file to a destination.
const writeToFile = (destination, content) =>
fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
 err ? console.log(err) : console.info(`\nData written to ${destination}`)
 );


//  Parameters COntent you want in file. The path to the file.
 const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    });
 };

 module.exports = {readFromFile, writeToFile, readAndAppend};
