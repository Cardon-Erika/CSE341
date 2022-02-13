const path = require('path');
const PORT = process.env.PORT || 3000;

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const flash = require('connect-flash');
const validator = require('express-validator');

const MONGODB_URI = "mongodb+srv://main:LvPHax56Xf0ZE4RS@cluster0.4u4dj.mongodb.net/info?retryWrites=true&w=majority"

const app = express();
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'info'
  });

app.set('view engine', 'ejs');
app.set('views', 'views');

const infoRoutes = require('./routes/info');

app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'public')));

app.use(
    session({
      secret: 'my secret',
      resave: false,
      saveUninitialized: false
    })
  );

app.use(flash());

// const route = require('./routes');
app.use(infoRoutes);

const MONGODB_URL = process.env.MONGODB_URL || MONGODB_URI;

mongoose
  .connect(MONGODB_URL)
  .then(result => {
    app.listen(PORT);
  }).catch(err => {
    console.log(err);
  });