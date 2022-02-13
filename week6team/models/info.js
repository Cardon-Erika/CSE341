const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const infoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Info', infoSchema);

