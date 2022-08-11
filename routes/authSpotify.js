const auth = require('express').Router();
const {readFromFile, writeToFile, readAndAppend} = require('../util/fsUtili')
const querystring = require('query-string');
const app = require('.');

require('dotenv').config();

const client_id = process.env.client_id;
const client_secret = process.env.client_secret;
const redirect_uri = 'http://localhost:3001/redirectToHome.html';



auth.get('/', (req, res) => {
    const scope = 'user-read-private user-read-email playlist-read-private user-top-read user-library-read';
  
    res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
      }));

  

  });



 



module.exports = auth;
