const auth = require('express').Router();
const querystring = require('query-string');
require('dotenv').config();
const SpotifyApi = require('../helpers/spotifyAPI');

const client_id = process.env.client_id;
const client_secret = process.env.client_secret;
const redirect_uri = 'http://localhost:3001/api/authSpotify/callback';

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

auth.get('/callback', (req, res) => {
  const code = req.query.code || null;
  if (code) {
    SpotifyApi.getToken(code);
    res.redirect('/homepage');
  } else {
    console.log('Authorization not provided');
  }
})

module.exports = auth;
