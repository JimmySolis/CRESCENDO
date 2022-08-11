const express = require('express');
const api = require('./routes/index');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.get('/', (req,res) =>{
     res.sendFile(`${__dirname}/redirectToHome.html`)
     console.log(__dirname)
     const code = req.query.code;
           
       console.log(code);
    }
)



app.use(express.static('public'));

const PORT = process.env.PORT || 3001;




app.listen(PORT, () => console.log(`We are live through ${PORT}`))