require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan renew machine hole inflict praise army gentle'; 
let testAccounts = [
"0xf04e232fb0d76b2cb317be6c0df7f8bb2ba62f32acc6d1cedd947db0a3fca80c",
"0x831c510e4a0009949a48338870c217e338a6a137d5360a466fed3ae79259d248",
"0x0822122684a3b715b01cb19250a3968afa8b3bf12aab0e9d1c53570c3444548e",
"0xac9b0efa183cefc63e69a38407275ba71d659a61837c205f52d1ac3be4416185",
"0x5c0fe64f0c7f3fc8d1ade168b0ede94d798e9f34978720d4018aad7cef4f8815",
"0x5aa514102a62cf22bb6bafba0de18a8f077922696e069018498bfd0df32e96be",
"0x051a0cf712be6c8f331a7978a2ba55b9f447f4658ebbfa3c425eff1e6e8b94b7",
"0x9c6e91feceffc506381f6890e212494eacf1859cff94117ff6cd15da7a8b8ca9",
"0x6faeb91dd64498a9e7f44f6eae28e984637df494ccead281f7f18eabe7969f56",
"0x8820a8bdff1a5e8e02e7c4a94d2da99b0178cb99110f9fe6ee54cc5a0ad614ae"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

