const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  title: String,
  path: String,
  dateUploaded: { type: Date, default: Date.now },
  activity: String
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;