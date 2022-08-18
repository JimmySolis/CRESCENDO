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

  // Obtain existing data
  // fs.readFile('./db/data.json', 'utf8', (err, data) => {
    // if (err) {
      // console.error(err);
    // } else {
      // Convert string into JSON object
      // const parsedReviews = JSON.parse(data);

      // Add a new review
      // parsedReviews.push(newReview);

      // Write updated reviews back to the file
      // fs.writeFile(
      //   './db/reviews.json',
      //   JSON.stringify(parsedReviews, null, 4),
      //   (writeErr) =>
      //     writeErr
      //       ? console.error(writeErr)
      //       : console.info('Successfully updated reviews!')
      // );
    // }
  // });
})

app.use(express.static('public'));

const PORT = process.env.PORT || 3001;




app.listen(PORT, () => console.log(`We are live through ${PORT} 🚨`))