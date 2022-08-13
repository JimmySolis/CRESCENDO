const token  = require('express').Router();
const Buffer = require('buffer/').Buffer;
require('dotenv').config();

const client_id = process.env.client_id;
const client_secret = process.env.client_secret;
const redirect_uri = 'http://localhost:3001/homepage.html';

let authOptions = '';

token.get('/', (req, res) =>{
  const code = req.query|| null;
 if(code){
authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  form: {
    code: code,
    redirect_uri: redirect_uri,
    grant_type: 'authorization_code'
  },
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')),
    'Content-Type' : 'application/x-www-form-urlencoded'  
  },
  json: true
}
res.status(200);
} else{
  res.status(500).json({ message : 'nothing found'});
}
   
    }
)

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

token.post(authOptions, (req,res) => {
    const token = req.body.access_token;
 
    if(token){
      res.status(200).json(token);
    }else{
      res.status(505).json({message : 'no token'})
    }

  

})



  module.exports = token;