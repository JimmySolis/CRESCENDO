const user = require('express').Router();
const SpotifyApi = require('../helpers/spotifyAPI');
const GenHtml = require('../helpers/genHTML');

// // user/:user_id/profile
// // sends the user's spotify profile information based on the user's spotify id
// user.get('/:id', async (req, res) => {
//     let id = req.params.id;
//     let profileData = '';
//     profileData = await SpotifyApi.getUserProfile(id);
//     res.send(profileData);
// });

// user/:user_id/playlists
// sends the user's list of saved spotify playlists based on the user's spotify id
user.get('/:id/playlists', async (req, res) => {
    let id = req.params.id;
    let playlistsData = await SpotifyApi.getUserPlaylists(id);
    let playlistsArr = [];
    (playlistsData.items).forEach(playlist => playlistsArr.push(new Playlist(playlist.id, playlist.name, playlist.images[0].url)))
    //res.send(playlistsArr);
    console.log('users playlists data');
    GenHtml.displayPlaylists(playlistsArr);
});

module.exports = user;
