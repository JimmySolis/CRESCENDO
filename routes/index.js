const express = require('express');

const auth  = require('./authSpotify');
const token = require('./tokenSpotify');
const profile = require('./profile');
const top = require('./top');

const app = express();



app.use('/authSpotify', auth);

app.use('/callback', token);

app.use('/profile',profile);

app.use('/top', top);


module.exports = app;