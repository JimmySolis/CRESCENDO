const e = require('express');
const fs = require('fs');
const Album = require('../lib/Album');
const Artist = require('../lib/Artist');
const Playlist = require('../lib/Playlist');
const Track = require('../lib/Track');

const GenHtml = {};

const htmlHead = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <title>User Playlists</title>
</head>

<body>
    <div class="d-flex justify-content-center p-10" style="background-color:#0e4f25">

        <div id="viewBody" class="container d-flex justify-content-around row row-cols-8" style="background-color:#83ffae">`;

const htmlEnd = `</div>
</div>
<script src="./scripts/playlists.js"></script>

</body>
</html>`;

GenHtml.displayPlaylists = (playlists) => {
    const playlistArr = playlists;
    let middleHtml = ``;
    playlistArr.forEach(playlist => middleHtml += playlist.renderPlaylist());
    let finalPage = htmlHead + middleHtml + htmlEnd;
    fs.writeFile('./public/playlistDisplay.html', finalPage, (err) => 
        err ? console.log(err) : console.log('Success!')
    );
}

GenHtml.displayAlbums = (albums) => {
    const albumsArr = albums;
    let middleHtml = ``;
    albumsArr.forEach(album => middleHtml += album.renderAlbum());
    let finalPage = htmlHead + middleHtml + htmlEnd;
    fs.writeFile('./public/albumDisplay.html', finalPage, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

GenHtml.displayTracks = (tracks) => {
    const tracksArr = tracks;
    let middleHtml = `<ul class="w-100">`;
    tracksArr.forEach(track => middleHtml += track.renderTrack());
    let finalPage = htmlHead + middleHtml + `</ul>` + htmlEnd;
    fs.writeFile('./public/trackDisplay.html', finalPage, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

GenHtml.displayArtists = (artists) => {
    const artistsArr = artists;
    let middleHtml = ``;
    artistsArr.forEach(artist => middleHtml += artist.renderArtist());
    let finalPage = htmlHead + middleHtml + htmlEnd;
    fs.writeFile('./public/artistsDisplay.html', finalPage, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

module.exports = GenHtml;

