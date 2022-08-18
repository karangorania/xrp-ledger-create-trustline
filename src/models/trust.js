const mongoose = require('mongoose');

// schema for Trust
const trustSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  tokenName: {
    type: String,
    required: true,
  },
});

// create new collection
const Trust = new mongoose.model('Trust', trustSchema);

module.exports = Trust;
