const express = require('express');

const auth  = require('./authSpotify');
const token = require('./tokenSpotify');
//const profile = require('./profile');
const top = require('./top');
const playlist = require('./playlist');
const user = require('./user');
const me = require('./me');

const app = express();



app.use('/authSpotify', auth);

app.use('/callback', token);

//app.use('/profile', profile);

//app.use('/me/saved', saved);

app.use('/playlist', playlist);

app.use('/user', user);

app.use('/me', me);

app.use('/me/top', top);


module.exports = app;