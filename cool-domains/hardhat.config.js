require("@nomiclabs/hardhat-waffle");

require("dotenv").config({ path: ".env" });

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: process.env.ALCHEMY_MUMBAI_URL,
      accounts: [process.env.TEST_WALLET_PRIVATE_KEY],
    }
  }
};