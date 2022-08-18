const connectXrp = require('xrpl');
require('dotenv').config();

const { XRP_RPC_KEY } = process.env;

// Connect ---------------------------------------------------------------------
async function main(tokenName, secret_key) {
  const client = new connectXrp.Client(XRP_RPC_KEY);

  await client.connect();

  const hot_wallet = connectXrp.Wallet.fromSeed(secret_key);

  // Create trust line from hot to cold address --------------------------------

  const currency_code = tokenName;
  const issuer_address = 'rn2sbUWaB2iDPjuDncEUXePRwtVdafTBk3';

  const trust_set_tx = {
    TransactionType: 'TrustSet',
    Account: hot_wallet.address,
    LimitAmount: {
      currency: currency_code,
      issuer: issuer_address,
      value: '10000000000', // Large limit, arbitrarily chosen
    },
  };

  const ts_prepared = await client.autofill(trust_set_tx);
  const ts_signed = hot_wallet.sign(ts_prepared);
  const ts_result = await client.submitAndWait(ts_signed.tx_blob);

  //   console.log(ts_result);

  client.disconnect();
}

// main();

module.exports = main;
