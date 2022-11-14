# Giant Fees and MEV sub-class
This sub-class exposes all the necessary functions from the Giant Fees and MEV pool of the LSD Network. For anyone to use this sub-class, it is necessary to initialize the sub-class with `signer` instance.  

## batchDepositETHForStaking function
This function allows users to deposit ETH in batches from the Giant Fees and MEV pool to multiple Fees and MEV pools of different LSD Networks. A node runner should be on a lookout in case the pool is falling short of ETH and when the Giant pool gets funded with ETH, he can then use these ETH in the respective LSD network to get them staked.  

### Input params
`feesAndMevPoolAddresses`: List of address of Fees and MEV pool to transfer ETH to  
`amounts`: List of number of ETH to be transferred to each of the Fees and MEV pools  
`blsPublicKeys`: 2 dimensional array of address of BLS public keys which receive ETH  
`stakeAmounts`: 2 dimensional array of amount of ETH to be transferred to each of the BLS public keys  
`ethValue`: Amount of ETH attached with the transaction  

### Using the function
```js
await wizard.giantFeesAndMevPool.batchDepositETHForStaking(feesAndMevPoolAddresses, amounts, blsPublicKeys, stakeAmounts, ethValue);
```

## claimRewards function
Allows a giant LP to claim a percentage of the revenue received by the MEV and Fees Pool.  

### Input params
`recipient`: Recipient address that receives the ETH from revenue  
`feesAndMevPoolAddresses`: List of address of Fees and MEV pools to claim revenue from  
`blsPublicKeys`: 2 dimensional list of BLS public keys to claim portion of revenue from  

### Using the function
```js
await wizard.giantFeesAndMevPool.claimRewards(recipient, feesAndMevPoolAddresses, blsPublicKeys);
```

## previewAccumulatedETH function
Allows users to preview ETH accumulated by an address.  

### Input params
`userAddress`: Ethereum execution layer address to find ETH accumulation for  
`feesAndMevPoolAddresses`: List of address of Fees and MEV pools  
`lpTokens`: 2 dimensional array of address of LP tokens  

### Using the function
```js
await wizard.giantFeesAndMevPool.previewAccumulatedETH(userAddress, feesAndMevPoolAddresses, lpTokens);
```

### Returns
Accumulated ETH in Big Numbers.  

## batchRotateLPTokens function
Allows users to batch rotate their existing deposited ETH from one BLS public key to another.  

### Input params
`feesAndMevPoolAddresses`: List of address of Fees and MEV pools that hold the LP tokens  
`oldLPTokens`: 2 dimensional array of address of old LP tokens to be rotated  
`newLPToken`: 2 dimensional array of address of new LP tokens to be minted after burning the old LP tokens  
`amounts`: 2 dimensional array of number of old LP tokens of each type to be rotated.  

### Using the function
```js
await wizard.giantFeesAndMevPool.batchRotateLPTokens(feesAndMevPoolAddresses, oldLPTokens, newLPToken, amounts);
```

## bringUnusedETHBackIntoGiantPool function
Allows user to bring back unstaked ETH from the Fees and MEV pool of different LSD Networks to the Giant Fees and MEV Pool.  

### Input params
`feesAndMevPoolAddresses`: List of address of Fees and MEV pool to bring back ETH from  
`lpTokens`: 2 dimensional array of address of LP tokens that the Giant pool holds for specific Fees and MEV Pools to bring back ETH  
`amounts`: 2 dimensional array of number of ETH to be brought back  

### Using the function
```js
await wizard.giantFeesAndMevPool.bringUnusedETHBackIntoGiantPool(feesAndMevPoolAddresses, lpTokens, amounts);
```

##  function
Updates the accrued ETH per LP token.  

### Using the function
```js
await wizard.giantFeesAndMevPool.updateAccumulatedETHPerLP();
```

## depositETH function
Allows users to deposit ETH into the Giant Fees and MEV Pool in exchange of LP tokens. The LP tokens hold 1:1 relationship with ETH until the ETH is staked. Once staked, the users can start earning and claiming rewards for every Giant LP they hold.  

### Input params
`amount`: Number of ETH to be staked  
`ethValue`: Amount of ETH to be attached with the transaction  

### Using the function
```js
await wizard.giantFeesAndMevPool.depositETH(amount, ethValue);
```

## getIdleETH function
Allows user to fetch number of idle ETH in the pool.  

### Using the function
```js
await wizard.giantFeesAndMevPool.getIdleETH();
```

### Returns
Amount of idle ETH in Big Numbers.  

## withdrawETH function
Allows user to withdraw ETH by burning the LP token as long as the ETH has not been staked.  

### Input params
`amount`: Number of LP tokens to be burnt  

### Using the function
```js
await wizard.giantFeesAndMevPool.withdrawETH(amount);
```
