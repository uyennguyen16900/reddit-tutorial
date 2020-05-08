const express = require('express')
const exphbs  = require('express-handlebars');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');


// App setup
const app = express()

// Set db
dotenv.config({ path: '.env' });

// Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var checkAuth = (req, res, next) => {
  console.log("Checking authentication");
  if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
      console.log("Cookie nToken undefined")
      req.user = null;
  } else {
    var token = req.cookies.nToken;
    var decodedToken = jwt.decode(token, { complete: true }) || {};
    console.log("Cookie nToken IS defined: " + decodedToken.payload)
    req.user = decodedToken.payload;
  }

  next();
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser()); // Add this after you initialize express.
app.use(checkAuth);
app.use(express.static('public'));


require('./controllers/posts.js')(app);
require('./controllers/comments.js')(app);
require('./controllers/auth.js')(app);
require('./data/reddit-db');
require('./controllers/replies.js')(app);

// app.listen(process.env.PORT, () => console.log(`Listening at http://localhost:${process.env.PORT}`));
app.listen(3000, () => {
    console.log('Reddit listening on port localhost:3000!');
});

module.exports = app;
