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
    // if the id is equal to 'me' the user is looking for their own spotify profile data
    if (id == 'me') {
        // in which case, the getMyProfile function is called to gather data on the current user's spotify profile
        profileData = await getMyProfile();
    } else {
        // if the id parameter in the request is anything other than 'me' the getUserProfile(id) function 
        // is called with the request's 'id' paramter included as its own parameter to gather information 
        // on the spotify user with the specified id 
        profileData = await getUserProfile(id);
    }
    res.send(profileData);
});

// // user/me/profile
// sends the current user's spotify profile information
// user.get('/me', async (req, res) => {
//     let profileData = await getMyProfile();
// })

// user/:user_id/playlists
// sends the user's list of saved spotify playlists based on the user's spotify id
user.get('/:id/playlists', async (req, res) => {
    let id = req.params.id;
    let playlistsData = '';
    // if the id is 'me' the user is looking for their own data. 
    if (id == 'me') {
        //in which case the getMyPlaylists() function is called to retreive data from the spotify api's 'v1/me' endpoint
        playlistsData = await getMyPlaylists();
    } else {
        // if the id parameter is anything else, the getUserPlaylist(id) function is called 
        // to retreive data from the spotify api's '/v1/users/:user_id' endpoint
        playlistsData = await getUserPlaylists(id);
    }
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


// gathers and returns data on current user's saved spotify playlists
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
    } catch (error) {
        console.log(error);
    }
};



// clicking on any playlist should redirect to pathway '/api/playlist/:playlist_id
// when generating page, playlist id could be saved as button/card id to make playlist id available for redirect


module.exports = user;