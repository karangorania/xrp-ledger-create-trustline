const mongoose = require('mongoose');

//  mongodb://localhost:27017/xrp-api
mongoose
  .connect('mongodb://localhost:27017/xrp-user')
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((e) => {
    console.log('Lost in space');
  });
