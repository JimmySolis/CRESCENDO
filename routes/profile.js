const profile = require('express').Router();
const fs = require('fs');
const axios = require('axios');
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

// get other user's spotify profile information
profile.get('/user/:id', async (req, res) => {
    let id = req.params.id;
    let profileData = await getUserProfile(id);
    res.send(profileData);
})

//get other user's playlists
profile.get('/user/:id/playlists', async (req, res) => {
    let id = req.params.id;
    let userPlaylists = await getUserPlaylists(id);
    res.send(userPlaylists);
})








//get current user's spotify profile information 
profile.get('/me', async (req,res) => {
    let profileData = await getMyProfile();
    console.log(profileData)
    res.send(profileData)
    //res.redirect('/api/profile/me')
})

class Playlist {
    constructor(id, name, image) {
        this.id = id;
        this.name = name;
        this.image = image;
    }
}

//displays current user's playlists
profile.get('/me/playlists', async (req,res) => {
    let playlists = await getMyPlaylists();
    //all playlist info stored in playlists.items
    console.log(playlists)
    let playlistNames = [];
    (playlists.items).forEach(playlist => playlistNames.push(new Playlist(playlist.id, playlist.name, playlist.images[0].url)));
    res.send(playlistNames);
})






const getUserProfile = async (id) => {
    const api_url = `https://api.spotify.com/v1/users/${id}`;
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

// function to get current user's profile
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
    }catch (error) {
        console.log(error);
    }
};

// function to get current user's profile
const getMyPlaylists = async () => {
    const api_url = 'https://api.spotify.com/v1/me/playlists';
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

//clicking on any playlist should redirect to pathway '/api/playlist/:playlist_id

const getUserPlaylists = async (id) => {
    const api_url = `https://api.spotify.com/v1/users/${id}/playlists`;
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
}


module.exports = profile;