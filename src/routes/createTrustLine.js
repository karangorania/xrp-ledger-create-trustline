const express = require('express');
const router = express.Router();

const dbConnect = require('../db/connection');
const createTrust = require('../controllers/createTrustLine');
const Trust = require('../models/trust');

router.post('/createTrust', async (req, res) => {
  await createTrust(req.body.tokenName, req.body.secret_key);

  const trust = new Trust({
    name: req.body.name,
    tokenName: req.body.tokenName,
  });
  await trust.save();
  res.send(trust);
});

module.exports = router;
