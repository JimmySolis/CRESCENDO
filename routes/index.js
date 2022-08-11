const express = require('express');

const auth  = require('./authSpotify');
const token = require('./tokenSpotify');

const app = express();



app.use('/authSpotify', auth);

app.use('/callback', token);


module.exports = app;