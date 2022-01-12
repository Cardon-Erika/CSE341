const express = require('express');

const app = express();

// the following blocks a response from the favicon response
app.use('/favicon.ico', (req, res, next) => {
    res.end();
});

app.use('/users', (req, res, next) => {
    console.log('You hit the users middleware.');
    res.send('<h1>USERS</h1>');
});

app.use('/', (req, res, next) => {
    console.log('You hit the main middleware.');
    res.send('<h1>HOME PAGE</h1>');
});

app.listen(3000);