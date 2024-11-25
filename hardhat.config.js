require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    localhost: {
      url: "http://127.0.0.1:7545",
      accounts: {
        mnemonic: "test test test test test test test test test test test junk"
      }
    },
    hardhat: {
      // This is your local Hardhat Network
    },
    local: {
      url: "http://127.0.0.1:7545",
      accounts: [`${process.env.PRIVATE_KEY}`]  // Remove '0x' if your private key starts with it
    }
  },
};