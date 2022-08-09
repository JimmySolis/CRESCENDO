const express = require('express');
const querystring = require('query-string');

const client_id = 'CLIENT_ID';
const redirect_uri = 'https://crescendooo.herokuapp.com/homepage.html';

const app = express();

app.get('/login', (req, res) => {

  const scope = 'user-read-private user-read-email playlist-read-private user-top-read user-library-read';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
    }));
});

