import { HardhatUserConfig } from 'hardhat/config'

import '@nomicfoundation/hardhat-toolbox'

import * as dotenv from 'dotenv'
dotenv.config()

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.18',
    // settings: {
    //   optimizer: {
    //     enabled: true,
    //     runs: 200
    //   }
    // }
  },
  networks: {
    //  0x809f7fD1008A495ae7627E4cfC04d9f93C7C785C
    mumbai: {
      url: process.env.MUMBAI_URL,
      accounts: [process.env.PRIVATE_KEY as string],
      chainId: 80001
    },
    // 0x3ca3e4b2714c7697c70fcc88259afb7786e1e4ae
    goerli: {
      url: process.env.GOERLI_URL,
      accounts: [process.env.PRIVATE_KEY as string],
      chainId: 5
    }
  },
  etherscan: {
    // apiKey: process.env.ETHERSACN_API_KEY
    apiKey: process.env.POLYGONSCAN_API_KEY
  }
}

export default config
