const { Artist }  = require('../models/index.js');

exports.create = (req, res) => {
  Artist.create(req.body).then(artist => res.status(201).json(artist));
};

exports.list = (_, res) => {
  Artist.findAll().then(artists => {
    res.status(200).json(artists);
  });
};

exports.list = (_, res) => {
  Artist.findAll().then(artists => {
    res.status(200).json(artists);
  });
};