# Utils sub-class
This sub-class exposes all the necessary functions from the Liquid Staking Manager smart contract. For anyone to use this sub-class, it is necessary to initialize the Wizard SDK with `signer` instance and `liquidStakingManagerAddress`. Liquid Staking Manager address is the ETh address of the Liquid Staking Manager smart contract of the respective LSD.  

## add0x function
Appends `0x` towards the start of a string, or object.  

### Input params
`data`: String or object to be appended with `0x`  

### Using the function
```js
wizard.utils.add0x(data);
```

### Returns
String or object (depending on the input parameter) appended with `0x` towards the start.  

## remove0x function
Removes `0x` from the front of a string or object.  

### Input params
`data`: String or object to remove `0x` from  

### Using the function
```js
wizard.utils.remove0x(data);
```

### Returns
String or object (depending on the input parameter) with removed `0x` from the beginning.  

## getDAOAddress function
To get Ethereum address specified as the DAO during deployment of the LSD network.  

### Using the function
```js
await wizard.utils.getDAOAddress();
```

### Returns
DAO address of the LSD network.  

## getSavETHVaultAddress function
Fetches Protected Staking pool address of the LSD network.  

### Using the function
```js
await wizard.utils.getSavETHVaultAddress();
```

### Returns
Ethereum address of Protected Staking pool.  

## getFeesAndMEVPoolAddress function
Fetched Fees and MEV pool address of the LSD network.  

### Using the function
```js
await wizard.utils.getFeesAndMEVPoolAddress();
```

### Returns
Ethereum address of the Fees and MEV pool.  