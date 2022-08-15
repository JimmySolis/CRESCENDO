const profile = require('express').Router();
const fs = require('fs');
const axios = require('axios');
//axios makes it easier and faster to send asynchronous requests to endpoints and perform operations

let access_token = '';



profile.get('/', (req,res) => {
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
    //res.send('found')
    res.redirect('/api/profile/me')
})

profile.get('/me', async (req, res) => {
    let profileData = await getMyProfile();
    console.log(profileData)
    res.send(profileData)
})

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

module.exports = profile;