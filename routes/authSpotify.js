const auth = require('express').Router();
const {readFromFile, writeToFile, readAndAppend} = require('../util/fsUtili')
const querystring = require('query-string');
const app = require('.');

const client_id = 'b94f101e63b742208677cc733b6538b7';
const client_secret = 'eea34ac37db54a2cb696fc165a57b332';
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
