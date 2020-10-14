const express = require('express');
const app = express();
app.use(express.json());

const artistControllers = require('./controllers/artists');

app.post('/artists', artistControllers.create);

exports.create = (req, res) => {
    res.sendStatus(201);
  };
    
module.exports = app;