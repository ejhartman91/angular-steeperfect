let express = require('express');
let app = express();

let teas = require('./teas/teas');

app.use('/teas', teas);

module.exports = app;