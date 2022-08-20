const me = require('express').Router();
const Album = require('../lib/Album'); // id, name, artist, img, tracks
const Artist = require('../lib/Artist'); // id, name, img
const Playlist = require('../lib/Playlist'); //id, name, image, tracks
const Track = require('../lib/Track'); // id, name, album, artist
const SpotifyApi = require('../helpers/spotifyAPI');
const GenHtml = require('../helpers/genHTML');

// // get current user's profile information
// me.get('/', async (req, res) => {
//     let profileData = await SpotifyApi.getMyProfile();
//     res.send(profileData);
// });

// get current user's list of playlists
me.get('/playlists', async (req, res) => {
    let playlistsData = await SpotifyApi.getMyPlaylists();
    let playlistsArr = [];
    (playlistsData.items).forEach(playlist => playlistsArr.push(new Playlist(playlist.id, playlist.name, playlist.images[0].url)))
    //res.send(playlistsArr);
    console.log('current users playlists data');
    GenHtml.displayPlaylists(playlistsArr);
    //res.sendFile('CRESCENDO-/public/playlistDisplay.html')
});

// current user's saved albums
me.get('/saved/albums', async (req, res) => {
    let savedAlbums = await SpotifyApi.getSaved('albums');
    let savedAlbumsArr = [];
    let albumTracksArr = [];
    (savedAlbums.items).forEach(albumEl => savedAlbumsArr.push(new Album(albumEl.album.id, albumEl.album.name, albumEl.album.artists[0].name, albumEl.album.images[0].url, (albumEl.album.tracks.items).forEach(trackEl => albumTracksArr.push(new Track(trackEl.id, trackEl.name, '',trackEl.artists[0].name))))))
    //res.send(savedAlbumsArr);
    console.log('current users saved albums');
    GenHtml.displayAlbums(savedAlbumsArr);

});

// current user's saved tracks
me.get('/saved/tracks', async (req, res) => {
    let savedTracks = await SpotifyApi.getSaved('tracks');
    let tracksArr = [];
    (savedTracks.items).forEach(trackEl => tracksArr.push(new Track(trackEl.track.id, trackEl.track.name, trackEl.track.album.name, trackEl.track.album.artists[0].name)))
    //res.send(tracksArr);
    console.log('current users saved tracks data');
    GenHtml.displayTracks(tracksArr);
});

//displays current user's top artists
me.get('/top/artists', async (req, res) => {
    let topArtists = await SpotifyApi.getTop('artists');
    let topArtistArr = [];
    (topArtists.items).forEach(artist => topArtistArr.push(new Artist(artist.id, artist.name, artist.images[0].url)))
    //res.send(topArtistArr);
    console.log('current users top artists data');
    GenHtml.displayArtists(topArtistArr);
});

me.get('/top/tracks', async (req, res) => {
    let topTracks = await SpotifyApi.getTop('tracks');
    let tracks = topTracks.items;
    let topTracksArr = [];
    tracks.forEach(track => topTracksArr.push(new Track(track.id, track.name, track.album.name, track.artists[0].name)))//, track.images[0].url)))
    //res.send(topTracksArr);
    console.log('Sending object array of current users top tracks');
    GenHtml.displayTracks(topTracksArr);
});

module.exports = me;

