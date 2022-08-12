// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
const fileUpload = require('express-fileupload')
const mysql = require('mysql');


//Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;


//default option 
app.use(fileUpload());

//css route || static files
app.use(express.static('public'));
app.use(express.static('upload'));
//app.use(express.static('upload'));

//templating engine 
const handlebars = exphbs.create({ extname: '.hbs', });
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

//connection pool
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Belles01',
    database:'userinfo'
});


//render hbs
app.get('', function (req, res) {
    res.render('index');
        connection.query("SELECT * FROM `user` WHERE id ='1'", (err, rows) => {
            if(!err) {
                res.render('index', { rows });
            }
        });
    });


app.post('', function (req, res) {
    let sampleFile;
    let uplaodPath;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('NO files were uploaded');
    }

    //name of the input is sampleFile
    sampleFile = req.files.sampleFile;
    uplaodPath = __dirname + '/upload/' + sampleFile.name;
    console.log(sampleFile);

    //use mv() to place file on server
    sampleFile.mv(uplaodPath, function (err) {
        if (err) return res.status(500).send(err);
    });

    res.send('File uploaded!');

});

//nodemon app.js
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});