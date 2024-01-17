# Solidity-Voting-dApp

This is a demo application to implement voting in solidity smart contract using ReactJS.
<br></br>

## Installation

Make sure your browser is connected to a Metamask wallet.

Connect your metamask to the Volta Testnet RPC: [Energy Web: How to connect Metamask to the Volta Testnet RPC](https://youtu.be/ThKW18ZZalg?si=hWgnxn--OvMPN1HH)

Volta Test Tokens are required to compile & upload the contract to the testnet, you can request for Volta Tokens here: [Energy Web Volta Testnet Taucet](https://voltafaucet.energyweb.org/)

Once your metamask is connected the Volta Testnet RPC, go to the metamask browser extension, click the 3 dots icon on the top right, click on 'Account Details', click on 'Show Private Key', copy the Private Key and navigate to `hard-contract/.env` file and replace the `PRIVATE_key`
<br></br>

After cloning the repository, you first need to compile the contract and upload it to the blockchain network. Run the following commands to compile and upload the contract.

```shell
cd hardhat-contract
```
```shell
npm install
```
```shell
npx hardhat compile
```
```shell
npx hardhat run --network volta scripts/deploy.js
```
<br></br>

Once the contract is uploaded to the blockchain, copy the contract_address in the terminal and navigate to `hard-contract/.env` file and replace the contract_address

Navigate to `solidity-voting-react2/src/Constants/constant.js` file and replace the contract_address there too

You can also use another blockchain by initializing the blockchain's endpoint in hardhat-config.
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
<br></br>

To run the app, simply run command

```shell
npm start
```
<br></br>


## Screens
