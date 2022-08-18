# XRP Ledger API

It is XRP Ledger Wallet API. You can create Trust Line to other wallet using secret key.

I have use public XRP Ledger Testnet server.You have to put your secret key and it will create Trust Line for custom tokens.

You can get testnet account with secret from here

- [XRP-Testnet-Wallet](https://xrpl.org/xrp-testnet-faucet.html)

## Create Wallet API

This API will create Trust Line for the below mentioned tokens.

You have to provide three things to Trust Line to your account.

- 1 Your Name
- 2 Token Name ( Only three SOX, LOX, NFX )
- 3 Your Secret Key

```bash
{
    "name" : "Karan J Goraniya",
    "tokenName": "LOX",
    "secret_key": "shoKxkGtU8SndNohmb24euVVCbEtN"
}
```

After you successfully Create Trust Line move to this repository.

- [XRP-Ledger](https://github.com/karangorania/xrp-ledger)

## Postman Doc

- [Postman Docs](https://documenter.getpostman.com/view/15467845/VUqoPJ8h)

## For Developers

```bash
create .env file in root directory.
```

```bash
Add this to your .env file or you can see .env.sample file
```

```bash
XRP_RPC_KEY = "WEBSOCKET_RPC_KEY"
```

-Get Your Hot Wallet

- [Hot Wallet Testnet](https://xrpl.org/xrp-testnet-faucet.html)

-Get Your WebScoket

- You can use public client for Testnet

```bash
wss://s.altnet.rippletest.net:51233
```

## NPM Packages

- [Express](https://www.npmjs.com/package/express)
- [Xrpl](https://www.npmjs.com/package/xrpl)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Cors](https://www.npmjs.com/package/cors)
- [Body-Parser](https://www.npmjs.com/package/body-parser)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Nodemon](https://www.npmjs.com/package/nodemon)

## Tech Stack

- [Node](https://nodejs.org/en/)

## Run Locally

Clone the project

```bash
  git clone https://github.com/karangorania/xrp-ledger-create-trustline
```

Go to the project directory

```bash
  cd xrp-ledger-create-trustline
```

Install dependencies

```bash
  npm install
```

Start the app

```bash
  npm start
```
