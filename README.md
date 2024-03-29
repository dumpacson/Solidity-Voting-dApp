# Solidity-Voting-dApp

This is a demo application to implement voting in solidity smart contract using ReactJS.
<br></br>

## Installation

Make sure your browser is connected to a Metamask wallet.

Connect your metamask to the Volta Testnet RPC: [Energy Web: How to connect Metamask to the Volta Testnet RPC](https://youtu.be/ThKW18ZZalg?si=hWgnxn--OvMPN1HH)

Volta Test Tokens are required to compile & upload the contract to the testnet, you can request for Volta Tokens here: [Energy Web Volta Testnet Faucet](https://voltafaucet.energyweb.org/)

Once your metamask is connected to the Volta Testnet RPC, go to the metamask browser extension, click the `3 dots` icon on the top right, click on `Account Details`, click on `Show Private Key`, copy the Private Key and navigate to `hard-contract/.env` file and replace the `PRIVATE_key`.
<br></br>

First, clone the repository

```shell
gh repo clone dumpacson/Solidity-Voting-dApp
```
<br></br>

After cloning the repository, you first need to compile the contract and upload it to the Volta Testnet. Run the following commands to compile and upload the contract.

```shell
cd hardhat-contract
```
```shell
npm install
```
```shell
npx hardhat run --network volta scripts/deploy.js
```
<br></br>

Once the contract is uploaded to the blockchain, copy the `contract_address` in the terminal and navigate to `hard-contract/.env` file and replace the `contract_address`.

Navigate to `solidity-voting-react2/src/Constants/constant.js` file and replace the `contract_address` there too.

You can also use another blockchain by initializing the blockchain's endpoint in `hard-contract/hardhat-config` & `hard-contract/.env`.
<br></br>

Then, install the packages for the react-app by running the following commands: 

```shell
cd ..
```
```shell
cd solidity-voting-react2
```
```shell
npm install
```

To run the app, simply run command:

```shell
npm start
```
<br></br>


## Screens
![Login](https://github.com/dumpacson/Solidity-Voting-dApp/blob/bfa5ea11598fcb3512e4827284824612e522e716/screens/Login.png "Login")
![Voting](https://github.com/dumpacson/Solidity-Voting-dApp/blob/bfa5ea11598fcb3512e4827284824612e522e716/screens/Voting.png "Voting")
![Voted](https://github.com/dumpacson/Solidity-Voting-dApp/blob/bfa5ea11598fcb3512e4827284824612e522e716/screens/Voted.png "Voted")
![Voting Ended](https://github.com/dumpacson/Solidity-Voting-dApp/blob/bfa5ea11598fcb3512e4827284824612e522e716/screens/Voting%20Ended.png "Voting Ended")
