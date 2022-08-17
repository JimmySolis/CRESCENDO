const express = require('express');

const auth  = require('./authSpotify');
const token = require('./tokenSpotify');
//const profile = require('./profile');
const top = require('./top');
const playlist = require('./playlist');
const user = require('./user');

const app = express();



app.use('/authSpotify', auth);

app.use('/callback', token);

//app.use('/profile', profile);

app.use('/myTop', top);

app.use('/playlist', playlist);

app.use('/user', user);


module.exports = app;