const express = require('express');
const dbConnect = require('./db/connection');
const app = express();

const createTrust = require('./routes/createTrustLine');

const port = process.env.PORT || 3001;

// Incoming request object as JSON
app.use(express.json());

app.post('/createTrust', createTrust);

app.listen(port, () => {
  console.log(`Connected to ${port}`);
});
