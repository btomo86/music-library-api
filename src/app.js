const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config()

const artistControllers = require('./controllers/artists');

app.post('/artists', artistControllers.create);

exports.create = (req, res) => {
    res.sendStatus(201);
  };
    
  app.post("/artists", artistControllers.create);
  app.get("/artists", artistControllers.list);
  module.exports = app;