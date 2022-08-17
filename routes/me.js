const me = require('express').Router();
const fs = require('fs');
const axios = require('axios');
const path = require('path');

//axios makes it easier and faster to send asynchronous requests to endpoints and perform operations

let access_token = '';

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

// get current user's profile information
me.get('/', async (req, res) => {
    let profileData = await getMyProfile();
    res.send(profileData);
});

class Playlist {
    constructor (id, name, image) {
        this.id = id;
        this.name = name;
        this.image = image;
    }
}

// get current user's list of playlists
me.get('/playlists', async (req, res) => {
    let playlistsData = await getMyPlaylists();
    let playlistsArr = [];
    (playlistsData.items).forEach(playlist => playlistsArr.push(new Playlist(playlist.id, playlist.name, playlist.images[0].url)))
    res.json(playlistsArr);
    
    
})

class Album {
    constructor (id, name, artist, img) {
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.img = img;
    }
}

// current user's saved albums
me.get('/saved/albums', async (req, res) => {
    let savedAlbums = await getSaved('albums');
    // album name = savedAlbums.items.album.name
    // album artist = savedAlbums.items.album.artists[0]
    // album id = savedAlbums.items.album.id
    // album img = savedAlbums.items.album.images[0]
    let savedAlbumsArr = [];
    (savedAlbums.items).forEach(albumEl => savedAlbumsArr.push(new Album(albumEl.album.id, albumEl.album.name, albumEl.album.artists[0].name, albumEl.album.images[0].url)))
    res.send(savedAlbumsArr);
});

// current user's saved tracks
me.get('/saved/tracks', async (req, res) => {
    let savedTracks = await getSaved('tracks');
    res.send(savedTracks);
});


// gathers and returns current user's profile data
const getMyProfile = async () => {
    const api_url = 'https://api.spotify.com/v1/me';
    try {
        const response = await axios.get(api_url, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

// gathers and returns data on current user's saved spotify playlists
const getMyPlaylists = async () => {
    const api_url = 'https://api.spotify.com/v1/me/playlists';
    try {
        const response = await axios.get(api_url, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        });
        //console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};


const getSaved = async (type) => {
    const api_url = `https://api.spotify.com/v1/me/${type}`;
    try {
        const response = await axios.get(api_url, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}




module.exports = me;