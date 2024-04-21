const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME || 8888;

console.log(">>> check env: ", process.env)

// config template engine
app.set('views', path.join(__dirname, 'views')); // specify the views directory
app.set('view engine', 'ejs'); // register the template engine 

// config static file
app.use(express.static(path.join(__dirname, 'public')));

//  khai bao route
app.get('/', (req, res) => {
  res.render('base.ejs');
})

app.get('/user', (req, res) => {
  res.send('<h1> user </h1>');
})


app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`);
})