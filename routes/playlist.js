const playlist = require('express').Router();
const axios = require('axios');
const fs = require('fs');

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


class Track {
    constructor(album, artist, name) {
        this.album = album,
        this.artists = artist,
        this.name = name
    }
}


playlist.get('/:id', async (req, res) => {
    let id = req.params.id;
    let playlistInfo = await getPlaylistInfo(id);

    //res.send(playlistInfo.tracks.items);

    let trackNames = [];
    (playlistInfo.tracks.items).forEach(trackItem => trackNames.push(new Track(trackItem.track.album.name, trackItem.track.artists[0].name, trackItem.track.name)))
    console.log(trackNames)
    res.send(trackNames)

})

const getPlaylistInfo = async (id) => {
    const api_url = `https://api.spotify.com/v1/playlists/${id}`;
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


module.exports = playlist;