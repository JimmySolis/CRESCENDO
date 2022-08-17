const top = require('express').Router();
const axios = require('axios');
const fs = require('fs');

let access_token = '';

// top.get('/', (req, res) => {
    // fs.readFile('./db/data.json', 'utf8', (err, data) => {
    //     if (err) {
    //         console.log('error')
    //     }
    //     else {
    //         const contents = JSON.parse(data);
    //         access_token = contents.access_token;
    //         console.log('access token found!')
    //         console.log(access_token)
    //     }
    // });
//     //res.send('found')
// })


const getToken = () => {
    fs.readFile('./db/data.json', 'utf8', (err, data) => {
        if (err) {
            console.log('error')
        }
        else {
            const contents = JSON.parse(data);
            access_token = contents.access_token;
            console.log('access token found!')
            console.log(access_token)
        }
    });
    if (access_token) {
        console.log('token found!')
        console.log(access_token)
    } else {
        console.log('token not found')
    }
}

getToken();


top.get('/playlists', async (req, res) => {
    let topPlaylists = await getTop('playlist');
    console.log(topPlaylists);
    res.send(topPlaylists);
})

//displays current user's top artists
top.get('/artists', async (req, res) => {
    let topArtists = await getTop('artists');
    console.log(topArtists)
    let topArtistNames = [];
    (topArtists.items).forEach(artist => topArtistNames.push(artist.name))
    console.log(topArtistNames)
    res.send(topArtistNames)
})

//displays current user's top albums
top.get('/albums', async (req, res) => {
    let topAlbums = await getTop('album');
    console.log(topAlbums)
    res.send(topAlbums)
    //let topAlbumNames = [];
    //(topAlbums.items).forEach(album => topAlbumNames.push(album.name))
    //console.log(topAlbumNames)
    //res.send(topAlbumNames)
})

//displays current user's top genres
top.get('/genres', async (req, res) => {
    let topGenres = await getTop('genre');
    console.log(topGenres)
    res.send(topGenres)
    // let topGenreNames = [];
    // (topGenres.items).forEach(genre => topGenreNames.push(genre.name))
    // console.log(topGenreNames)
    // res.send(topGenreNames)

})

class Track {
    constructor(album, artist, name) {
        this.album = album,
        this.artists = artist,
        this.name = name
    }
}

top.get('/tracks', async (req, res) => {
    let topTracks = await getTop('tracks');
    let tracks = topTracks.items;
    let trackObjects = [];
    tracks.forEach(track => trackObjects.push(JSON.stringify(track)))
    console.log(trackObjects)
    let topTrackNames = [];
    let topTrackArtists = [];
    // for (var i = 0; i < tracks.length; i++) {
    //     let trackArtists = [];
    //     (tracks[i].artists).forEach(artist => trackArtists.push(artist.name))
    //     topTrackNames.push(new Track(tracks[i].album.name, topTrackArtists, tracks[i].name))
    // }
    tracks.forEach(track => topTrackNames.push(new Track(track.album.name, track.artists[0].name, track.name)))
    console.log(topTrackNames)
    res.send(topTrackNames)
    let trackAlbums = [];
    tracks.forEach(track => console.log(track.artists))
    //console.log(trackAlbums)
})

//playlists


// // function to get current user's top artists
// const getTopArtists = async () => {
//     const api_url = 'https://api.spotify.com/v1/me';
//     try {
//         const response = await axios.get(api_url, {
//             headers: {
//                 'Authorization': `Bearer ${access_token}`
//             }
//         });
//         console.log(response.data);
//         return response.data;
//     }catch (error) {
//         console.log(error);
//     }
// };

// // function to get current user's top albums
// const getTopAlbums = async () => {
//     const api_url = 'https://api.spotify.com/v1/me';
//     try {
//         const response = await axios.get(api_url, {
//             headers: {
//                 'Authorization': `Bearer ${access_token}`
//             }
//         });
//         console.log(response.data);
//         return response.data;
//     }catch (error) {
//         console.log(error);
//     }
// };

// function to get current user's top genres
const getTop = async (type) => {
    const api_url = `https://api.spotify.com/v1/me/top/${type}`;
    try {
        const response = await axios.get(api_url, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        });
        console.log(response.data);
        return response.data;
    }catch (error) {
        console.log(error);
    }
};

module.exports = top;