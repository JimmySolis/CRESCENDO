const profile = require('express').Router();
const fs = require('fs');

let access_token = '';



profile.get('/', (req,res) => {
    fs.readFile('./db/data.json', 'utf8', (err, data) => {
        if (err) {
            console.log('error')
        }
        else {
            const contents = JSON.parse(data);
            access_token = contents.access_token;
            console.log('access token found!')
            console.log(access_token)
        }
    });
})

profile.get('/', (req, res) => {
//use axios and /me endpoint to get current user's profile
})

module.exports = profile;