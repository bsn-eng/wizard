# Contract Instance sub-class
This sub-class allows users to get the contract instance of specific smart contracts of the LSD network. This turns out to be useful when a function from one of the smart contracts is not exposed in Wizard SDK directly. For a user to use this sub-class, it is necessary to initialize the Wizard SDK with the `signer` instance.  

## Contracts exposed via the sub-class
* lsdnFactory: LSDN factory (used to deploy a new LSD Network)  
* liquidStakingManager  
* savETHVault: Protected Staking Pool smart contract  
* feesAndMevPool  
* giantSavETHPool: Giant Protected Staking Pool smart contract  
* giantFeesAndMevPool  

## Getting the contract instances
* LSDN Factory
```js
const contract = (await wizard.contractInstance).lsdnFactory();
```

* Liquid Staking Manager
```js
const contract = (await wizard.contractInstance).liquidStakingManager(LIQUID_STAKING_MANAGER_ADDRESS);
```

* Protected Staking Pool
```js
const contract = (await wizard.contractInstance).savETHVault(PROTECTED_STAKING_POOL_ADDRESS);
```

* Fees and MEV Pool
```js
const contract = (await wizard.contractInstance).feesAndMevPool(FEES_AND_MEV_POOL_ADDRESS);
```

* Giant Protected Staking Pool
```js
const contract = (await wizard.contractInstance).giantSavETHPool();
```

* Giant Fees and MEV Pool
```js
const contract = (await wizard.contractInstance).giantFeesAndMevPool();
```
