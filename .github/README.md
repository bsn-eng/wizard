# Wizard SDK
The Wizard SDK allows users to interact with the LSD network and Giant pools. Using the SDK anyone can deploy their own LSD, interact with the new or the existing LSDs. The SDK is written in typescript and uses typechain to generate types from the ABIs.  

> It is recommended to use `ethers.js` as the SDK uses it throughout.  

## Pre-installations
The LSD Wizard typescript SDK needs following pre-installations to compile:
```bash
yarn add typescript typechain @typechain/ethers-v5 @types/lodash
```

## Installation
To install the SDK use the command `yarn add @blockswaplab/lsd-wizard`  

## Using the SDK
One of the ways to import and initialize the Wizard SDK is:
```js
const { Wizard } = require('@blockswaplab/lsd-wizard');
// or import
// import { Wizard } from '@blockswaplab/lsd-wizard';

const provider = new ethers.providers.InfuraProvider("goerli", {
    projectId: INFURA_PROJECT_ID,
    projectSecret: INFURA_PROJECT_SECRET
});
const signer = new ethers.Wallet(PRIV_KEY, provider);

// The addresses used below are for representation. Anyone is free to initialise the SDK with their own LSD's respective addresses.  
const wizard = new Wizard({
    signerOrProvider: signer, // signer or provider
    liquidStakingManagerAddress: "0x1779642181f0f799582e9ebe9615f96c744e527b", // optional
    savETHPoolAddress: "0x4857819f7a29c73f4a005dd907e01333383d2f81", // optional
    feesAndMevPoolAddress: "0x7635c5d48b0c0b99a66628b3c1297ed5bb395bb9" // optional
});
```
`signerOrProvider` parameter: ethers.js `signer` or `provider` instance. With `provider` instance only the `view` functions from the smart contract are executable.  
`liquidStakingManagerAddress` parameter: Address of the specific LSD to execute functions from. This is an optional parameter. When `null`, none of the functions from LSD's Liquid Staking Manager can be executed via the SDK.  
`savETHPoolAddress` parameter: Address of the Protected Staking pool of any LSD. This is an optional parameter. When `null`, none of none of the functions from the LSD's Protected Staking pool can be executed via the SDK. This address can be from any LSD, which means a user can query a function from Liquid Staking Manager of LSD-1 and also execute a function from Protected Staking pool of LSD-2.  
`feesAndMevPoolAddress` parameter: Address of the Fess and MEV pool of any LSD. This is an optional parameter. When `null`, none of the functions from the LSD's Fees and MEV pool can be executed via the SDK. This address can be from any LSD, which means a user can query a function from Liquid Staking Manager of LSD-1 and also execute a function from Fees and MEV pool of LSD-2.  

To deploy a new LSD network, the SDK only needs the `signerOrProvider` parameter.  

## Sub classes
The SDK exposes various sub-classes:  
* [deployer](#deployer-sub-class)  
* [utils](#utils-sub-class)  
* [savETHPool](#saveth-pool-sub-class)  
* [feesAndMevPool](#fees-and-mev-sub-class)  
* [giantSavETHPool](#giant-saveth-pool-sub-class)  
* [giantFeesAndMevPool](#giant-fees-and-mev-sub-class)  
* [contractInstance](#contract-instance-sub-class)  
* constants  
