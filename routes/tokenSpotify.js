const token  = require('express').Router();
const {readFromFile, writeToFile, readAndAppend} = require('../util/fsUtili');
const querystring = require('query-string');
const Buffer = require('buffer/').Buffer;

require('dotenv').config();

const client_id = process.env.client_id;
const client_secret = process.env.client_secret;
const redirect_uri = 'http://localhost:3001/homepage.html';

token.get('/', (req, res) => {

const code = req.query.code || null;
 
const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  form: {
    code: code,
    redirect_uri: redirect_uri,
    grant_type: 'authorization_code'
  },
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  json: true
};
req.query.code = authOptions;
console.log(req.query.code) 
return; 
   
    }
  );


  module.exports = token;