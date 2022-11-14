# Giant SavETH Pool sub-class
This sub-class exposes all the necessary functions required to interact with the Giant Protected Staking pool, which is present as the GiantSavETHVaultPool smart contract of LSD Network. To use this sub-class, it is necessary to initialize the Wizard SDK with `signer` instance.  

## batchDepositETHForStaking function
Allows users to stake ETH in batches for different LSD Networks at once. The ETH that has been sitting idle is sent to the Protected Staking Pools of respective LSD Networks when this function is called by the node runner. A node runner should be on a look out and can use the funds if his LSD Network's Protected Staking Pool is falling short of ETH.  

### Input params
`savETHVaultAddresses`: List of address of Protected Staking pool of different LSD Networks  
`amounts`: List of number of ETH being set to each of the Protected Staking Pools  
`blsPublicKeys`: 2 dimensional array of BLS public keys of specific LSD Network to receive ETH for staking  
`stakeAmounts`: 2 dimensional array of number of ETH being sent to each of the BLS public keys  
`ethValue`: Total ETH sent along with the transaction  

### Using the function
```js
await wizard.giantSavETHPool.batchDepositETHForStaking(savETHVaultAddresses, amounts, blsPublicKeys, stakeAmounts, ethValue);
```

## withdrawDETH function
Allow a user to burn their Giant Protected Staking LP token in exchange of dETH that is ready to withdraw from a set of Protected Staking Pools of LSD Networks.  

### Input params
`savETHVaultAddresses`: List of Protected Staking Pools to withdraw dETH from  
`lpTokens`: 2 dimensional array of addresses of LP tokens to burn in exchange of dETH  
`amounts`: 2 dimensional array of number of LP tokens to be burnt  

### Using the function
```js
await wizard.giantSavETHPool.withdrawDETH(savETHVaultAddresses, lpTokens, amounts);
```

## batchRotateLPTokens function
Allow users to rotate their ETH from one BLS public key of an LSD Network to another.  

### Input params
`savETHVaultAddresses`: List of address of Protected Staking Pools  
`oldLPTokens`: 2 dimensional array of LP tokens that need to be rotated  
`newLPTokens`: 2 dimensional array of LP tokens that will be minted in exchange of old LP tokens  
`amounts`: 2 dimensional array of number of LP tokens to be rotated.  

### Using the function
```js
await wizard.giantSavETHPool.batchRotateLPTokens(savETHVaultAddresses, oldLPTokens, newLPTokens, amounts);
```

## bringUnusedETHBackIntoGiantPool function
Any ETH that has not been utilized by a Protected Staking Pool can be brought back into the Giant Protected Staking Pool.  

### Input params
`savETHVaultAddresses`: List of Protected Staking Pools to bring idle ETH from  
`lpToken`: 2 dimensional array of LP tokens that the Giant Protected Staking Pool holds which represents ETH in a Protected Staking Pool  
`amounts`: 2 dimensional array of amount of ETH to be brought back to the Giant Protected Staking Pool  

### Using the function
```js
await wizard.giantSavETHPool.bringUnusedETHBackIntoGiantPool(savETHVaultAddresses, lpToken, amounts);
```

## depositETH function
Allow users to deposit ETH into the Giant Protected Staking Pool in exchange of Giant LP tokens. The LP tokens maintain 1:1 ratio with ETH as long as the ETH is not staked. Once staked, user start earning rewards and their LP tokens can be burnt to get dETH.  

### Input params
`amount`: Amount of ETH to deposit  
`ethValue`: Amount of ETH attached with the transaction  

### Using the function
```js
await wizard.giantSavETHPool.depositETH(amount, ethValue);
```

## getIdleETH function
Fetch the number of idle ETH sitting in the pool.  

### Using the function
```js
await wizard.giantSavETHPool.getIdleETH();
```

### Returns
Number of idle ETH in Big Numbers.  

## withdrawETH function
Allow users to burn LP tokens and get back the ETH they deposited in case the ETH has not been staked yet.  

### Input params
`amount`: Number of LP tokens to be burnt  

### Using the function
```js
await wizard.giantSavETHPool.withdrawETH(amount);
```
