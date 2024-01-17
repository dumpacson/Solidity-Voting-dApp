
/** @type import('hardhat/config').HardhatUserConfig */

require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.11",
  defaultNetwork: "volta",
  networks: {
     hardhat: {},
     volta: {
        url: API_URL,
        accounts: [`0x${PRIVATE_KEY}`],
        gas: 21000000,
        gasPrice: 80000000000,
     }
  },
}