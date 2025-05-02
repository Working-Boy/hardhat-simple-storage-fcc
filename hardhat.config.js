require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");
require("solidity-coverage");

/** @type import('hardhat/config').HardhatUserConfig */

const GANACHE_PRIVATE_KEY  = process.env.GANACHE_PRIVATE_KEY || "0xkey";
const GANACHE_RPC_URL  = process.env.GANACHE_RPC_URL || "https://rpc-url";


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    }, // yarn hardhat run scripts/deploy.js
    ganache: {
      url: GANACHE_RPC_URL,
      accounts: [GANACHE_PRIVATE_KEY],
      chainId: 1337,
    }, // yarn hardhat run scripts/deploy.js --network ganache
    // TO USE THE localhost netwwork, run yarn hardhat node in the terminal AND FROM THERE YOU WILL SEE YOUR url AND CHAIN ID.
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
      // accounts : hardhat ALREADY PLACED THEM AUTOMATICALLY SO NO NEED TO ADD THEM.
    } // yarn hardhat run scripts/deploy.js --network localhost
  },
  solidity: "0.8.28",
  gasReporter: {
    enabled: true,
    outputFile: "gas_Report.txt",
    noColors: true,

}

};
