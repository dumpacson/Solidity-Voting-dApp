# Solidity-Voting-dApp

This is a demo application to implement voting in solidity smart contract using ReactJS. 


## Installation

Make sure your browser is connected to a Metamask wallet.

And connect your metamask to the Volta Testnet RPC: [Energy Web: How to connect Metamask to the Volta Testnet RPC](https://youtu.be/ThKW18ZZalg?si=hWgnxn--OvMPN1HH)

After cloning the repository, you first need to compile the contract and upload it to the blockchain network. Run the following commands to compile and upload the contract.

```shell
cd hardhat-contract
```
```shell
npx hardhat compile
```
```shell
npx hardhat run --network volta scripts/deploy.js
```

Once the contract is uploaded to the blockchain, copy the contract_address in the terminal and navigate to `shell hard-contract/.env` file and replace the contract_address

Navigate to `shell solidity-voting-react2/Constants/constant.js` file and replace the contract_address there too

You can also use another blockchain by writing the blockchain's endpoint in hardhat-config.

Then, install the packages by running the following commands: 

```shell
cd ..
```
```shell
cd solidity-voting-react2
```
```shell
npm install
```

To run the app, simply run command

```shell
npm start
```
