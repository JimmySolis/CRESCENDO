const token  = require('express').Router();
const Buffer = require('buffer/').Buffer;
const request = require('request');
require('dotenv').config();


const client_id = process.env.client_id;
const client_secret = process.env.client_secret;
const redirect_uri = 'http://localhost:3001/api/callback';

//let authOptions = '';
//let toke = '';

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
          var access_token = body.access_token;

          res.send({
            'access token': access_token
          });
        }
    });
    //res.status(200).send(authOptions);
  } else{
    res.status(500).json({ message : 'nothing found'});
  }
})

// token.post('/', (req, res) => {
// const code = req.query.code || null;
//  if(code === true){
// const authOptions = {
//   url: 'https://accounts.spotify.com/api/token',
//   form: {
//     code: code,
//     redirect_uri: redirect_uri,
//     grant_type: 'authorization_code'
//   },
//   headers: {
//     'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
//   },
//   json: true
// }
// res.status(200).json(authOptions);
// } else{
//   res.status(500).json({ message : 'nothing found'});
// }
   
//     }
//   );

// token.post(authOptions, (req,res) => {
//         const token = res.body.access_token;
     
//         if(token){
//           res.status(200).json(token);
//         }else{
//           res.status(505).json({message : 'no token'})
//         }
//     })


token.get('/tokenSuccess', (req,res) => {
  res.send('Success!');
})



  module.exports = token;