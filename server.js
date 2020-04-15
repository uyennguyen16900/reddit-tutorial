const express = require('express')
const exphbs  = require('express-handlebars');
const dotenv = require('dotenv');
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


// require controllers
const homeController = require('./controllers/home')
const postController = require('./controllers/posts');
const commentController = require('./controllers/comments');


// define routes
app.get('/', homeController.getHome);
app.get('/posts/new', postController.getNewPostForm); // add isAuthenticated rule
app.post('/posts/new', postController.postNewPost); // add isAuthenticated rule
app.get('/posts/:id', postController.getPost);
app.get('/n/:subreddit', postController.getSubReddit);
app.post('/posts/:postId/comments', commentController.postNewComment);


app.listen(process.env.PORT, () => console.log(`Listening at http://localhost:${process.env.PORT}`));

module.exports = app;
