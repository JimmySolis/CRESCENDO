const axios = require('axios');
const Buffer = require('buffer/').Buffer;
const SpotifyApi = {}
require('dotenv').config();

var client_id = process.env.CLIENT_ID;
var client_secret = process.env.CLIENT_SECRET;
const redirect_uri = 'http://localhost:3001/api/authSpotify/callback';

let access_token = '';

//retrieve code from spotify using client credentials. code will then be traded for authorization token
SpotifyApi.getToken = async (codeIn) => {
    const response = await axios({
        url: 'https://accounts.spotify.com/api/token',
        method: 'post',
        params: {
            grant_type: "authorization_code",
            code: codeIn,
            redirect_uri: redirect_uri
        },
        headers: {
            'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')),
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .catch((error) => console.log(error))
    access_token = response.data.access_token;
};

// retrieves list of Spotify user with user id's playlists
SpotifyApi.getUserPlaylists = async (id) => {
    const api_url = `https://api.spotify.com/v1/users/${id}/playlists`;
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

//retrieves the spotify user's profile information
SpotifyApi.getUserProfile = async (id) => {
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

//retrieves data on the spotify playlist with the id found in the parameter
SpotifyApi.getPlaylistInfo = async (id) => {
    const api_url = `https://api.spotify.com/v1/playlists/${id}`;
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

//retrieves a list of the current users top artists or songs
SpotifyApi.getTop = async (type) => {
    const api_url = `https://api.spotify.com/v1/me/top/${type}`;
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

//retrieves data on the current users saved tracks or albums
SpotifyApi.getSaved = async (type) => {
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
};

//retrieves data on the current user's playlists
SpotifyApi.getMyPlaylists = async () => {
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

//retrieves the current user's spotify profile information
SpotifyApi.getMyProfile = async () => {
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

module.exports = SpotifyApi;
