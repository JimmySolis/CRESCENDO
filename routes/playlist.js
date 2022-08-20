const playlist = require('express').Router();
const axios = require('axios');
const fs = require('fs');
const Album = require('../lib/Album');
const Artist = require('../lib/Artist');
const Playlist = require('../lib/Playlist');
const Track = require('../lib/Track');
const SpotifyApi = require('../helpers/spotifyAPI');
const GenHtml = require('../helpers/genHTML');


playlist.get('/:id', async (req, res) => {
    let id = req.params.id;
    let playlistInfo = await SpotifyApi.getPlaylistInfo(id);
    // id, name, album, artist, image
    let trackNames = [];
    (playlistInfo.tracks.items).forEach(trackItem => trackNames.push(new Track(trackItem.track.id, trackItem.track.name, trackItem.track.album.name, trackItem.track.artists[0].name)))
    //console.log(trackNames)
    //res.send(trackNames)
    GenHtml.displayTracks(trackNames);

})

module.exports = playlist;
