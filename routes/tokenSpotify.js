const token  = require('express').Router();
const {readFromFile, writeToFile, readAndAppend} = require('../util/fsUtili');
const querystring = require('query-string');
const Buffer = require('buffer/').Buffer;


token.get('/', (req, res) => {
  const client_id = 'b94f101e63b742208677cc733b6538b7';
  const client_secret = 'eea34ac37db54a2cb696fc165a57b332';
  const redirect_uri = 'http://localhost:3001/homepage.html';

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