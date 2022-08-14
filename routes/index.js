const express = require('express');

const auth  = require('./authSpotify');
const token = require('./tokenSpotify');
const profile = require('./profile');

const app = express();



app.use('/authSpotify', auth);

app.use('/callback', token);

app.use('/profile',profile)


module.exports = app;