# Fees and MEV sub-class
This sub-class exposes all the necessary functions required for user to interact with the Fees and MEV Pool of the LSD network. The sub-class exposes all the necessary functions from the StakingFundsVault smart contract. For a user to interact with this sub-class, it is necessary to initialize the Wizard SDK with `signer` instance and `feesAndMevPoolAddress`.  

## totalShares function
Fetches the total number of LP tokens issued by the pool.  

### Using the function
```js
await wizard.feesAndMevPool.totalShares();
```

### Returns
Returns the count of LP tokens in wei in Big Numbers.  

## updateAccumulatedETHPerLP function
Updates the accrued ETH per LP token.  

### Using the function
```js
await wizard.feesAndMevPool.updateAccumulatedETHPerLP();
```

## batchDepositETHForStaking function
Allows the user to deposit ETH for multiple BLS public keys in a batch. The minimum deposit limit is 0.001 and the maximum is 4 ETH per validator.  

### Input params
`blsPublicKeys`: List of BLS public keys to deposit ETH for  
`amounts`: List of number of ETH to be deposited for corresponding BLS public keys  
`ethValue`: Amount of ETH attached with the transaction  

### Using the function
```js
await wizard.feesAndMevPool.batchDepositETHForStaking(blsPublicKeys, amounts, ethValue);
```

## depositETHForStaking function
Allows the user to deposit ETH for a BLS public key and get LP tokens in return.  

### Input params
`blsPublicKey`: BLS public key to deposit ETH for  
`amount`: Amount of ETH to be deposited  
`ethValue`: Amount of ETH attached with the transaction  

### Using the function
```js
await wizard.feesAndMevPool.depositETHForStaking(blsPublicKey, amount, ethValue);
```

### Returns
Number of ETH deposited in Big Numbers.  

## burnLPTokensForETHByBLS function
Allows users to burn their LP tokens in batches. A user can provide BLS public key associated with the LP tokens to burn the tokens.  

### Input params
`blsPublicKeys`: List of BLS public keys to burn the associated LP tokens for  
`amounts`: List of number of LP tokens to be burnt  

### Using the function
```js
await wizard.feesAndMevPool.burnLPTokensForETHByBLS(blsPublicKeys, amounts);
```

## burnLPTokensForETH function
Allows users to burn a batch of LP tokens to get ETH that has not been staked in return.  

### Input params
`lpTokens`: List of address of LP tokens to be burnt  
`amounts`: List of number of LP tokens to be burnt  

### Using the function
```js
await wizard.feesAndMevPool.burnLPTokensForETH(lpTokens, amounts);
```

## burnLPTokenForETH function
Allows users to burn an LP token associated with an unstaked BLS public key to get back ETH.  

### Input params
`lpToken`: Address of the LP token to be burnt  
`amount`: Amount of LP tokens to be burnt  

### Using the function
```js
await wizard.feesAndMevPool.burnLPTokenForETH(lpToken, amount);
```

## claimRewards function
Allows users to claim ETH from the syndicate contract if the respective BLS public keys have their tokens minted.  

### Input params
`recipient`: Ethereum execution layer address that receives the ETH  
`blsPublicKeys`: List of BLS public keys to claim rewards for  

### Using the function
```js
await wizard.feesAndMevPool.claimRewards(recipient, blsPublicKeys);
```

## batchPreviewAccumulatedETHByBLSKeys function
Preview total ETH accumulated by a staking funds LP token holder associated with many KNOTs that have minted derivatives.  

### Input params
`userAddress`: Ethereum execution layer address of the LP token holder  
`blsPublicKeys`: List of BLS public keys associated with the LP tokens held by the user  

### Using the function
```js
await wizard.feesAndMevPool.batchPreviewAccumulatedETHByBLSKeys(userAddress, blsPublicKeys);
```

### Returns
Total accumulated ETH in Big Numbers.  

## batchPreviewAccumulatedETH function
Preview total ETH accumulated by a user for multiple LP tokens.  

### Input params
`userAddress`: Ethereum execution layer address of the LP token holder  
`lpTokens`: List of address of LP tokens that the user holds  

### Using the function
```js
await wizard.feesAndMevPool.batchPreviewAccumulatedETH(userAddress, lpTokens);
```

### Returns
Total ETH accumulated by the user in Big NUmbers.  

##  function
Preview ETH accumulated by the user for a single LP token.  

### Input params
`userAddress`: Ethereum execution layer address of the LP token holder  
`lpTokens`: Address of the LP token that the user holds  

### Using the function
```js
await wizard.feesAndMevPool.previewAccumulatedETH(userAddress, lpToken);
```

### Returns
Total ETH accumulated by the user for the LP token.  

## claimFundsFromSyndicateForDistribution function
Claim ETH to the Fees and MEV Pool, from the syndicate, that was accrued by a list of actively staked validators.  

### Input params
`blsPublicKeys`: List of BLS public keys to claim ETH for  

### Using the function
```js
await wizard.feesAndMevPool.claimFundsFromSyndicateForDistribution(blsPublicKeys);
```
