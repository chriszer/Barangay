require('babel-register')
require('babel-polyfill')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 22000,
      network_id: '*', // Match any network id
      gasPrice: 0,
      gas: 9999999,
      type: 'quorum',
    },
    // nodetwo: {
    //   host: '127.0.0.1',
    //   port: 22001,
    //   network_id: '*', // Match any network id
    //   gasPrice: 0,
    //   gas: 9999999,
    //   type: 'quorum',
    // },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: '0.5.5',
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}
