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

## getStakehouseTicker function
Fetches the Stakehouse ticker of the stakehouse deployed with the LSD network.  

### Using the function
```js
await wizard.utils.getStakehouseTicker();
```

### Returns
String ticker of the Stakehouse.  

## isWhitelistingEnabled function
Fetches the status of whitelisting in the LSD network. Is whitelisting is enabled, only selected node runners can become a node operator in the network. If disabled, anyone can become a node operator.  

### Using the function
```js
await wizard.utils.isWhitelistingEnabled();
```

### Returns
Boolean.  

## isNodeRunnerWhitelisted function
Fetches the whitelist status of the node operator in the LSD network.  

### Input params
`nodeRunnerAddress`: Ethereum execution layer address of the node operator

### Using the function
```js
await wizard.utils.isNodeRunnerWhitelisted(nodeRunnerAddress);
```

### Returns
Boolean. `true` if node operator is whitelisted in the LSD network, `false` if the node operator is restricted in the LSD network or if doesn't belong to the LSD network.  

## getSmartWalletRepresentative function
Fetches the EOA representative appointed by the node operator for the smart wallet.  

### Input params
`smartWalletAddress`: address of the smart wallet  

### Using the function
```js
await wizard.utils.getSmartWalletRepresentative(smartWalletAddress);
```

### Returns
EOA representative of the smart wallet.  

## getSmartWalletOfKnot function
Fetches the smart wallet associated with the provided BLS public key. Make sure that the BLS public key is registered in the given LSD network.  

### Input params
`blsPublicKey`: BLS public key of the KNOT

### Using the function
```js
await wizard.utils.getSmartWalletOfKnot(blsPublicKey);
```

### Returns
Address of the smart wallet associated with the KNOT.  

## getSmartWalletOfNodeRunner function
Fetches the smart wallet associated with the node runner in the LSD network.  

### Input params
`nodeRunnerAddress`: Ethereum address of the node runner 

### Using the function
```js
await wizard.utils.getSmartWalletOfNodeRunner(nodeRunnerAddress);
```

### Returns
Ethereum address of the Smart wallet.  

## getNodeRunnerOfSmartWallet function
Fetches the node runner associated with the smart wallet in the LSD network.  

### Input params
`smartWalletAddress`: address of the smart wallet  

### Using the function
```js
await wizard.utils.getNodeRunnerOfSmartWallet(smartWalletAddress);
```

### Returns
Ethereum address of the node runner.  

## getStakedKnotsOfSmartWallet function
Fetches the number of KNOTs staked in the smart wallet of the LSD network.  

### Input params
`smartWalletAddress`: address of the smart wallet  

### Using the function
```js
await wizard.utils.getStakedKnotsOfSmartWallet(smartWalletAddress);
```

### Returns
Number of staked KNOTs in Big Numbers.  

## getSmartWalletDormantRepresentative function
Fetches the dormant representative of the smart wallet in the LSD network. A representative is set dormant when a KNOT is staked to make sure that the node runner doesn't appoint a new representative while a KNOT is pending activation after staking.  

### Input params
`smartWalletAddress`: Address of the smart wallet  

### Using the function
```js
await wizard.utils.getSmartWalletDormantRepresentative(smartWalletAddress);
```

### Returns
EOA of dormant representative.  

## isNodeRunnerBanned function
Fetches the ban status of a node runner. A node runner can be banned by the LSD deployer if the node runner is found to be malicious.    

### Input params
`nodeRunnerAddress`: Ethereum address of the node runner  

### Using the function
```js
await wizard.utils.isNodeRunnerBanned(nodeRunnerAddress);
```

### Returns
Boolean. `true` if banned, `false` otherwise.  

## getNumberOfKnots function
Fetches the number of KNOTs that have interacted with the particular LSD Network.  

### Using the function
```js
await wizard.utils.getNumberOfKnots();
```

### Returns
Count of KNOTs in Big Numbers.  

## getDaoCommissionPercentage function
Fetches the percentage of commission that the LSD Network owner takes from the node runner's earnings. The commission is set by the LSD owner during the deployment and can be later updated. The commission ranges from 0% to 100%.  

### Using the function
```js
await wizard.utils.getDaoCommissionPercentage();
```

### Returns
Returns percentage in Big Numbers.  

## isBLSPublicKeyBanned function
Fetches the ban status of the BLS public key. A BLS public key is banned after a node runner has withdrawn 4 ETH from the smart wallet for this particular BLS public key. The node runner can only withdraw 4 ETH as long the BLS public key has not been staked. Once banned, the BLS public key cannot be used in the LSD network.  

### Input params
`blsPublicKey`: BLS Public key  

### Using the function
```js
await wizard.utils.isBLSPublicKeyBanned(blsPublicKey);
```

### Returns
Boolean. `true` if banned, `false` otherwise.  

## executeAsSmartWallet function
Enables operations proxied through DAO contract to another contract. Can only be called by the DAO address set during deployment of the LSD. DAO address can be any EOA.  

### Input params
`nodeRunnerAddress`: Address of the node runner  
`targetContractAddress`: Address of the target smart contract  
`encodedFunctionData`: encoded data of the function to be called on the target smart contract  `ethValue`: ETH attached with the transaction  

### Using the function
```js
await wizard.utils.executeAsSmartWallet(nodeRunnerAddress, targetContractAddress, encodedFunctionData, ethValue);
```

## deRegisterKnotsFromSyndicate function
For knots no longer operational, DAO can de register the knot from the syndicate.  

### Input params
`blsPublicKeys`: BLS public key of the KNOT  

### Using the function
```js
await wizard.utils.deRegisterKnotsFromSyndicate(blsPublicKeys);
```

## restoreFreeFloatingSharesToSmartWalletForRageQuit function
In preparation of a Rage Quit, restore sETH to a smart wallet which are recoverable with the execution methods in the event this step does not go to plan. Can be only called by the DAO address.  

### Input params
`smartWalletAddress`: Address of the smart wallet associated with the KNOT  
`blsPublicKeys`: List of BLS public key of the KNOT  
`amounts`: List of amount. Amounts are number of free floating sETH that will be unstaked for the BLS public keys.  

### Using the function
```js
await wizard.utils.restoreFreeFloatingSharesToSmartWalletForRageQuit(smartWalletAddress, blsPublicKeys, amounts);
```

## updateDaoAddress function
Migrate the DAO to a new address. Can be only called by the DAO.  

### Input params
`newDaoAddress`: Ethereum address of the new DAO address  

### Using the function
```js
await wizard.utils.updateDaoAddress(newDaoAddress);
```

## updateDaoRevenueCommission function
Updates the revenue commission for the LSD. Node runners will have to pay the percentage of commission. Can be only called by the DAO address.  

### Input params
`newDaoRevenueCommission`: Updated revenue commission. It can range from 0 to 100%  

### Using the function
```js
await wizard.utils.updateDaoRevenueCommission(newDaoRevenueCommission);
```

## updateStakehouseTicker function
Allow the DAO to rotate the network ticker before the network house is created

### Input params
`newStakehouseTicker`: string name of the stakehouse of 3-5 characters.  

### Using the function
```js
await wizard.utils.updateStakehouseTicker(newStakehouseTicker);
```

## updateWhitelisting function
Update the whitelisting status of the LSD. When enabled, only selected node operators can become a node runner for this LSD network. Can be only called by the DAO.  

### Input params
`newWhitelistingStatus`: Boolean.

### Using the function
```js
await wizard.utils.updateWhitelisting(newWhitelistingStatus);
```
