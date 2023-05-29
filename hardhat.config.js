require("@nomicfoundation/hardhat-toolbox");

const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString() 

const projectId = "2rHvaAYALqTJX1VoeypC5Ejv8erwCevT"
const projectId2 = "BarEwRBCOp-Lpax2SejA_N4l5uvNYl3g"
const projectId3 = "Bbh6BB_uYvSdW3Gtb5kel2TCg657Oafu"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai_testnet: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${projectId3}`,
      accounts: [privateKey]
    },
    zkEvm_testnet: {
      url: `https://polygonzkevm-testnet.g.alchemy.com/v2/${projectId}`,
      accounts: [privateKey]
    },
    zkEvm_mainnet: {
      url: `https://polygonzkevm-mainnet.g.alchemy.com/v2/${projectId2}`,
      accounts: [privateKey]
    }

  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
