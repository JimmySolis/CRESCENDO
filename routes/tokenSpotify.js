const token  = require('express').Router();
const Buffer = require('buffer/').Buffer;
const request = require('request');
//const axios = require('axios');
require('dotenv').config();
const querystring = require('query-string')
const fs = require('fs')

var access_token = '';
const client_id = process.env.client_id;
const client_secret = process.env.client_secret;
const redirect_uri = 'http://localhost:3001/api/callback';

token.get('/', async (req, res) =>{
  const code = req.query.code || null;
  if(code){
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      json: true
    };

    request.post(authOptions, function (error, response, body) {
      console.log(authOptions)
      if(error) 
        console.log('error')
      console.log(response.statusCode)
        if (!error && response.statusCode === 200) {
          access_token = body.access_token;
          console.log(body);
          
          res.status(200)

          fs.writeFile(
            './db/data.json',
            JSON.stringify(body, null, 4),
            (writeErr) =>
              writeErr
                ? console.error(writeErr)
                : console.info('Added access token!')
          );
          res.redirect(`/homepage`)
        }
    });
  } else{
    res.status(500).json({ message : 'nothing found'}).redirect(`./callback/tokenFail`);
  }
})

token.get('/tokenFail', (req, res) => {
  res.send('Token not found')
})


module.exports = token;


// experiment to replace 'request' with axios

