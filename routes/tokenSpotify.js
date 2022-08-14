const token  = require('express').Router();
const Buffer = require('buffer/').Buffer;
const request = require('request');
require('dotenv').config();
const querystring = require('query-string')

var access_token = '';
const client_id = process.env.client_id;
const client_secret = process.env.client_secret;
const redirect_uri = 'http://localhost:3001/api/callback';

token.get('/', (req, res) =>{
  const code = req.query.code || null;
  if(code){
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      json: true
    };

    request.post(authOptions, function (error, response, body) {
      console.log(authOptions)
      if(error) 
        console.log('error')
      console.log(response.statusCode)
        if (!error && response.statusCode === 200) {
          access_token = body.access_token;
          console.log(body);
          
          res.status(200)
          // res.send({
          //   'access token': access_token
          // });
          res.redirect(`/homepage?` +
          querystring.stringify({
            access_token: access_token
          }));
        }
    });
    //res.status(200).send(authOptions);
  } else{
    res.status(500).json({ message : 'nothing found'}).redirect(`./callback/tokenFail`);
  }
})


// token.get('/tokenSuccess', (req,res) => {
//   const token = req.query.access_token;
//   res.send('reached');
//   console.log(token);
// })



  module.exports = token;



  //ACCIDENTALLY ADDED TO MAIN -- MAKE SURE TO COMPARE AND FIX TO COMMIT ONLY TO BRANCH AND NOT MAIN
  //GIT ADD ALREADY EXECUTED