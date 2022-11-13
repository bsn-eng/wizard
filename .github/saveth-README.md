# SavETH Pool sub-class
This sub-class exposes all the necessary functions from the SavETHVault smart contract. For anyone to use this sub-class it is necessary to initialize the Wizard SDK with the `signer` instance and `savETHPoolAddress`. SavETH Pool Address is the Protected Staking Pool address of the respective LSD.  

## getIndexOwnedByTheVault function
Fetches the savETH index created upon deployment of the Protected Staking Pool of the LSD. Every LSD network has it's own unique savETH index which holds dETH for users that have their validator minted.  

### Using the function
```js
await wizard.savETHPool.getIndexOwnedByTheVault();
```

### Returns
SavETH Index in Big Numbers.  

## batchDepositETHForStaking function
Allows anyone to deposit ETH in exchange of LP tokens. A user can deposit ETH for multiple BLS public keys, with minimum deposit of 0.001 ETH and maximum of 24 ETH per BLS Public key.  

### Input params
`blsPublicKeys`: List of BLS public keys  
`amounts`: List of ETH value corresponding to each of the BLS public keys  
`ethValue`: Total amount of ETH attached with the transaction  

### Using the function
```js
await wizard.savETHPool.batchDepositETHForStaking(blsPublicKeys, amounts, ethValue);
```

## depositETHForStaking function
Allows anyone to deposit ETH in exchange of LP tokens. This function allows user to deposit ETH for a single BLS public key.  

### Input params
`blsPublicKey`: BLS public key to deposit ETH for  
`amount`: Amount of ETH to deposit. Minimum limit is 0.001 and maximum is 24 ETH.  
`ethValue`: ETH attached with the transaction  

### Using the function
```js
await wizard.savETHPool.depositETHForStaking(blsPublicKey, amount, ethValue);
```

### Returns
Number of LP tokens issued for the deposit in Big Numbers. The number of LP tokens issued should always be equal to ETH deposited.  

## burnLPTokensByBLS function
Allows the user to burn multiple LP tokens associated with the BLS public keys. This is a batch transaction, which means a user can provide multiple BLS public keys and burn amounts of LP tokens for each of them.  

### Input params
`blsPublicKeys`: List of BLS public keys  
`amounts`: List of number of LP tokens to be burnt for each of the BLS public keys  

### Using the function
```js
await wizard.savETHPool.burnLPTokensByBLS(blsPublicKeys, amounts);
```

## burnLPTokens function
Allows the user to burn multiple LP tokens at once.  

### Input params
`lpTokens`: List of address of LP tokens to be burnt  
`amounts`: List of number of LP tokens to be burnt  

### Using the function
```js
await wizard.savETHPool.burnLPTokens(lpTokens, amounts);
```

## burnLPToken function
Allows the user to burn an LP token by given amount. The user will receive ETH in 1:1 ratio of LP token if the associated BLS public key has not been staked yet. If the BLS public key is staked, then the user receives dETH.  

### Input params
`lpToken`: Address of the LP token to be burnt  
`amount`: Number of LP tokens to be burnt  

### Using the function
```js
await wizard.savETHPool.burnLPToken(lpToken, amount);
```

### Returns
Amount of ETH or dETH redeemed by the user upon burning the LP token.  

## isDETHReadyForWithdrawal function
Utility function that determines whether an LP token can be burned for dETH if the associated derivatives have been minted.  

### Input params
`lpToken`: Address of the LP token  

### Using the function
```js
await wizard.savETHPool.isDETHReadyForWithdrawal(lpToken);
```

### Returns
Boolean. `true` if ready for withdrawal, `false` otherwise.  
