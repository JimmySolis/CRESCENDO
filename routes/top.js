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
    let topAlbums = await getTop('albums');
    console.log(topAlbums)
    let topAlbumNames = [];
    (topAlbums.items).forEach(album => topAlbumNames.push(album.name))
    console.log(topAlbumNames)
    res.send(topAlbumNames)
})

//displays current user's top genres
top.get('/genres', async (req, res) => {
    let topGenres = await getTop('genres');
    console.log(topGenres)
    let topGenreNames = [];
    (topGenres.items).forEach(genre => topGenreNames.push(genre.name))
    console.log(topGenreNames)
    res.send(topGenreNames)

})

class Track {
    constructor(album, artists, name) {
        this.album = album,
        this.artists = artists,
        this.name = name
    }
}

top.get('/tracks', async (req, res) => {
    let topTracks = await getTop('tracks');
    let trackObjects = [];
    topTracks.items.forEach(track => trackObjects.push(JSON.stringify(track)))
    console.log(trackObjects)
    let topTrackNames = [];
    (topTracks.items).forEach(track => topTrackNames.push(new Track(track.album, track.artists, track.name)))
    console.log(topTrackNames)
    res.send(topTrackNames)
    let trackAlbums = [];
    topTracks.forEach(track => trackAlbums.push(track.album))
    console.log(trackAlbums)
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