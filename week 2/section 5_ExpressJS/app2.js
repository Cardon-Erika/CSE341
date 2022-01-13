const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const homeRoutes = require('./routes/home');
const userRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);
app.use(homeRoutes);

app.listen(3000);