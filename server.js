const express = require('express');
const api = require('./routes/index');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.get('/', (req,res) =>{
     res.sendFile(`${__dirname}/public/index.html`)   
    }
)

var access_token = '';

app.get('/homepage', (req,res) => {
  res.sendFile(`${__dirname}/public/homepage.html`)
  access_token = req.query.access_token;
  console.log(access_token)
})

app.use(express.static('public'));

const PORT = process.env.PORT || 3001;




app.listen(PORT, () => console.log(`We are live through ${PORT} 🚨`))