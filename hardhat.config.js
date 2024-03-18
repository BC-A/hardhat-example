require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      gas: 49000,
      // mining: {
      //   auto: false,
      //   interval: 0,
      // }
    }
  }
};
