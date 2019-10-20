// require  packages
const express = require('express');
const path = require('path');
// run on port 3000 locally, or whichever PORT heroku configures in PROD
const port = process.env.PORT || 3000;

const app = express();

// serve static files from the public directory
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/main.html'))
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
