const user = require('express').Router();
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

// user/:user_id/profile
// sends the user's spotify profile information based on the user's spotify id
user.get('/:id', async (req, res) => {
    let id = req.params.id;
    let profileData = '';
    profileData = await getUserProfile(id);
    res.send(profileData);
});


// user/:user_id/playlists
// sends the user's list of saved spotify playlists based on the user's spotify id
user.get('/:id/playlists', async (req, res) => {
    let id = req.params.id;
    let playlistsData = '';
    playlistsData = await getUserPlaylists(id);
    res.send(playlistsData);
});


// gathers and returns user's spotify profile data based on the user's spotify id
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
    } catch (error) {
        console.log(error);
    }
};

// gathers and returns the user's saved spotify playlists based on the user's spotify id
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



// clicking on any playlist should redirect to pathway '/api/playlist/:playlist_id
// when generating page, playlist id could be saved as button/card id to make playlist id available for redirect


module.exports = user;