const express = require('express');

const auth  = require('./authSpotify');
const playlist = require('./playlist');
const user = require('./user');
const me = require('./me');

const app = express();


app.use('/authSpotify', auth);

app.use('/playlist', playlist);

app.use('/user', user);

app.use('/me', me);

module.exports = app;
