const express = require('express')
const port = 3000
const exphbs  = require('express-handlebars');
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

// App setup
const app = express()

// Set db
require('./data/reddit-db');

// Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());


app.get('/posts/new')


const postController = require('./controllers/posts');


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

module.exports = app;
