# Wizard SDK
The Wizard SDK allows users to interact with the LSD network and Giant pools. Using the SDK anyone can deploy their own LSD, interact with the new or the existing LSDs.

> It is recommended to use `ethers.js` as the SDK uses it throughout.  

## Installation
To install the SDK use the command `yarn add @blockswaplab/wizard`  

## Using the SDK
One of the ways to import and initialize the Wizard SDK is:
```js
const { Wizard } = require('@blockswaplab/wizard');

const provider = new ethers.providers.InfuraProvider("ropsten", {
    projectId: INFURA_PROJECT_ID,
    projectSecret: INFURA_PROJECT_SECRET
});
const signer = new ethers.Wallet(PRIV_KEY, provider);

const wizard = new Wizard({
    signer: signer, // signer or provider
    liquidStakingManagerAddress: "0x1779642181f0f799582e9ebe9615f96c744e527b", // optional
    savETHPoolAddress: "0x4857819f7a29c73f4a005dd907e01333383d2f81", // optional
    feesAndMevPoolAddress: "0x7635c5d48b0c0b99a66628b3c1297ed5bb395bb9" // optional
});
```
`signer` parameter: ethers.js `signer` or `provider` instance. With `provider` instance only the `view` functions from the smart contract are executable.  
`liquidStakingManagerAddress` parameter: Address of the specific LSD to execute functions from. This is an optional parameter. When `null`, none of the functions from LSD's Liquid Staking Manager can be executed via the SDK.  
`savETHPoolAddress` parameter: Address of the Protected Staking pool of any LSD. This is an optional parameter. When `null`, none of none of the functions from the LSD's Protected Staking pool can be executed via the SDK. This address can be from any LSD, which means a user can query a function from Liquid Staking Manager of LSD-1 and also execute a function from Protected Staking pool of LSD-2.  
`feesAndMevPoolAddress` parameter: Address of the Fess and MEV pool of any LSD. This is an optional parameter. When `null`, none of the functions from the LSD's Fees and MEV pool can be executed via the SDK. This address can be from any LSD, which means a user can query a function from Liquid Staking Manager of LSD-1 and also execute a function from Fees and MEV pool of LSD-2.  

To deploy a new LSD network, the SDK only needs the `signer` parameter.  

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

## Deployer sub-class:  
This sub package deals with deployment of a new LSD network. Any user that initializes the Wizard SDK with `signer` instance can access this sub-class.  

### deployNewLiquidStakingDerivativeNetwork function
Used to deploy a new LSD network.  

#### Input params  
`daoAddress`: Address of the ETH account taking ownership of the, to be deployed, LSD network  
`stakehouseTicker`: 3-5 character string for the name of Stakehouse created by the LSD  
`commission`: Optional parameter. Ranges from 0 to 100%. If set to non-zero value, the LSD takes the specified percentage as commission from node operator's earnings  
`gateKeeping`: Boolean. Optional parameter. If set to `true`, only specified node runners can join the given LSD network as node operators. Otherwise, anyone is free to become a node operator

#### Using the function  
```js
await wizard.deployer.deployNewLiquidStakingDerivativeNetwork(daoAddress, stakehouseTicker, commission=null, gateKeeping=null);
```

## Utils sub-class
This sub-class exposes all the necessary functions from the Liquid Staking Manager smart contract. For anyone to use this sub-class, it is necessary to initialize the Wizard SDK with `signer` instance and `liquidStakingManagerAddress`. Liquid Staking Manager address is the ETH address of the Liquid Staking Manager smart contract of the respective LSD.  

### add0x function
Appends `0x` towards the start of a string, or object.  

#### Input params
`data`: String or object to be appended with `0x`  

#### Using the function
```js
wizard.utils.add0x(data);
```

#### Returns
String or object (depending on the input parameter) appended with `0x` towards the start.  

### remove0x function
Removes `0x` from the front of a string or object.  

#### Input params
`data`: String or object to remove `0x` from  

#### Using the function
```js
wizard.utils.remove0x(data);
```

#### Returns
String or object (depending on the input parameter) with removed `0x` from the beginning.  

### getDAOAddress function
To get Ethereum address specified as the DAO during deployment of the LSD network.  

#### Using the function
```js
await wizard.utils.getDAOAddress();
```

#### Returns
DAO address of the LSD network.  

### getSavETHVaultAddress function
Fetches Protected Staking pool address of the LSD network.  

#### Using the function
```js
await wizard.utils.getSavETHVaultAddress();
```

#### Returns
Ethereum address of Protected Staking pool.  

### getFeesAndMEVPoolAddress function
Fetched Fees and MEV pool address of the LSD network.  

#### Using the function
```js
await wizard.utils.getFeesAndMEVPoolAddress();
```

#### Returns
Ethereum address of the Fees and MEV pool.  

### getStakehouseTicker function
Fetches the Stakehouse ticker of the stakehouse deployed with the LSD network.  

#### Using the function
```js
await wizard.utils.getStakehouseTicker();
```

#### Returns
String ticker of the Stakehouse.  

### isWhitelistingEnabled function
Fetches the status of whitelisting in the LSD network. Is whitelisting is enabled, only selected node runners can become a node operator in the network. If disabled, anyone can become a node operator.  

#### Using the function
```js
await wizard.utils.isWhitelistingEnabled();
```

#### Returns
Boolean.  

### isNodeRunnerWhitelisted function
Fetches the whitelist status of the node operator in the LSD network.  

#### Input params
`nodeRunnerAddress`: Ethereum execution layer address of the node operator

#### Using the function
```js
await wizard.utils.isNodeRunnerWhitelisted(nodeRunnerAddress);
```

#### Returns
Boolean. `true` if node operator is whitelisted in the LSD network, `false` if the node operator is restricted in the LSD network or if doesn't belong to the LSD network.  

### getSmartWalletRepresentative function
Fetches the EOA representative appointed by the node operator for the smart wallet.  

#### Input params
`smartWalletAddress`: address of the smart wallet  

#### Using the function
```js
await wizard.utils.getSmartWalletRepresentative(smartWalletAddress);
```

#### Returns
EOA representative of the smart wallet.  

### getSmartWalletOfKnot function
Fetches the smart wallet associated with the provided BLS public key. Make sure that the BLS public key is registered in the given LSD network.  

#### Input params
`blsPublicKey`: BLS public key of the KNOT

#### Using the function
```js
await wizard.utils.getSmartWalletOfKnot(blsPublicKey);
```

#### Returns
Address of the smart wallet associated with the KNOT.  

### getSmartWalletOfNodeRunner function
Fetches the smart wallet associated with the node runner in the LSD network.  

#### Input params
`nodeRunnerAddress`: Ethereum address of the node runner 

#### Using the function
```js
await wizard.utils.getSmartWalletOfNodeRunner(nodeRunnerAddress);
```

#### Returns
Ethereum address of the Smart wallet.  

### getNodeRunnerOfSmartWallet function
Fetches the node runner associated with the smart wallet in the LSD network.  

#### Input params
`smartWalletAddress`: address of the smart wallet  

#### Using the function
```js
await wizard.utils.getNodeRunnerOfSmartWallet(smartWalletAddress);
```

#### Returns
Ethereum address of the node runner.  

### getStakedKnotsOfSmartWallet function
Fetches the number of KNOTs staked in the smart wallet of the LSD network.  

#### Input params
`smartWalletAddress`: address of the smart wallet  

#### Using the function
```js
await wizard.utils.getStakedKnotsOfSmartWallet(smartWalletAddress);
```

#### Returns
Number of staked KNOTs in Big Numbers.  

### getSmartWalletDormantRepresentative function
Fetches the dormant representative of the smart wallet in the LSD network. A representative is set dormant when a KNOT is staked to make sure that the node runner doesn't appoint a new representative while a KNOT is pending activation after staking.  

#### Input params
`smartWalletAddress`: Address of the smart wallet  

#### Using the function
```js
await wizard.utils.getSmartWalletDormantRepresentative(smartWalletAddress);
```

#### Returns
EOA of dormant representative.  

### isNodeRunnerBanned function
Fetches the ban status of a node runner. A node runner can be banned by the LSD deployer if the node runner is found to be malicious.    

#### Input params
`nodeRunnerAddress`: Ethereum address of the node runner  

#### Using the function
```js
await wizard.utils.isNodeRunnerBanned(nodeRunnerAddress);
```

#### Returns
Boolean. `true` if banned, `false` otherwise.  

### getNumberOfKnots function
Fetches the number of KNOTs that have interacted with the particular LSD Network.  

#### Using the function
```js
await wizard.utils.getNumberOfKnots();
```

#### Returns
Count of KNOTs in Big Numbers.  

### getDaoCommissionPercentage function
Fetches the percentage of commission that the LSD Network owner takes from the node runner's earnings. The commission is set by the LSD owner during the deployment and can be later updated. The commission ranges from 0% to 100%.  

#### Using the function
```js
await wizard.utils.getDaoCommissionPercentage();
```

#### Returns
Returns percentage in Big Numbers.  

### isBLSPublicKeyBanned function
Fetches the ban status of the BLS public key. A BLS public key is banned after a node runner has withdrawn 4 ETH from the smart wallet for this particular BLS public key. The node runner can only withdraw 4 ETH as long the BLS public key has not been staked. Once banned, the BLS public key cannot be used in the LSD network.  

#### Input params
`blsPublicKey`: BLS Public key  

#### Using the function
```js
await wizard.utils.isBLSPublicKeyBanned(blsPublicKey);
```

#### Returns
Boolean. `true` if banned, `false` otherwise.  

### executeAsSmartWallet function
Enables operations proxied through DAO contract to another contract. Can only be called by the DAO address set during deployment of the LSD. DAO address can be any EOA.  

#### Input params
`nodeRunnerAddress`: Address of the node runner  
`targetContractAddress`: Address of the target smart contract  
`encodedFunctionData`: encoded data of the function to be called on the target smart contract  `ethValue`: ETH attached with the transaction  

#### Using the function
```js
await wizard.utils.executeAsSmartWallet(nodeRunnerAddress, targetContractAddress, encodedFunctionData, ethValue);
```

### deRegisterKnotsFromSyndicate function
For knots no longer operational, DAO can de register the knot from the syndicate.  

#### Input params
`blsPublicKeys`: BLS public key of the KNOT  

#### Using the function
```js
await wizard.utils.deRegisterKnotsFromSyndicate(blsPublicKeys);
```

### restoreFreeFloatingSharesToSmartWalletForRageQuit function
In preparation of a Rage Quit, restore sETH to a smart wallet which are recoverable with the execution methods in the event this step does not go to plan. Can be only called by the DAO address.  

#### Input params
`smartWalletAddress`: Address of the smart wallet associated with the KNOT  
`blsPublicKeys`: List of BLS public key of the KNOT  
`amounts`: List of amount. Amounts are number of free floating sETH that will be unstaked for the BLS public keys.  

#### Using the function
```js
await wizard.utils.restoreFreeFloatingSharesToSmartWalletForRageQuit(smartWalletAddress, blsPublicKeys, amounts);
```

### updateDaoAddress function
Migrate the DAO to a new address. Can be only called by the DAO.  

#### Input params
`newDaoAddress`: Ethereum address of the new DAO address  

#### Using the function
```js
await wizard.utils.updateDaoAddress(newDaoAddress);
```

### updateDaoRevenueCommission function
Updates the revenue commission for the LSD. Node runners will have to pay the percentage of commission. Can be only called by the DAO address.  

#### Input params
`newDaoRevenueCommission`: Updated revenue commission. It can range from 0 to 100%  

#### Using the function
```js
await wizard.utils.updateDaoRevenueCommission(newDaoRevenueCommission);
```

### updateStakehouseTicker function
Allow the DAO to rotate the network ticker before the network house is created

#### Input params
`newStakehouseTicker`: string name of the stakehouse of 3-5 characters.  

#### Using the function
```js
await wizard.utils.updateStakehouseTicker(newStakehouseTicker);
```

### updateWhitelisting function
Update the whitelisting status of the LSD. When enabled, only selected node operators can become a node runner for this LSD network. Can be only called by the DAO.  

#### Input params
`newWhitelistingStatus`: Boolean.

#### Using the function
```js
await wizard.utils.updateWhitelisting(newWhitelistingStatus);
```

### updateNodeRunnerWhitelistStatus function
Update the whitelist status of a node runner. Can be only called by the DAO.  

#### Input params
`nodeRunnerAddress`: Address of the node runner  
`newWhitelistingStatus`: Boolean status of whitelist  

#### Using the function
```js
await wizard.utils.updateNodeRunnerWhitelistStatus(nodeRunnerAddress, newWhitelistingStatus);
```

### rotateEOARepresentative function
Appoint a new representative for the node runner. Should be called by the node runner who owns the smart wallet. The new representative will then be associated to the node runner's smart wallet.  

#### Input params
`newRepresentativeAddress`: Address of the new representative

#### Using the function
```js
await wizard.utils.rotateEOARepresentative(newRepresentativeAddress);
```

### rotateEOARepresentativeOfNodeRunner function
Allows the DAO to rotate representative in the case that node runner is not available (to facilitate staking). Can be only called by the DAO address.  

#### Input params
`nodeRunnerAddress`: Address of the node runner  
`newRepresentativeAddress`: Address of the new EOA representative of the node runner  

#### Using the function
```js
await wizard.utils.rotateEOARepresentativeOfNodeRunner(nodeRunnerAddress, newRepresentativeAddress);
```

### withdrawETHForKnot function
Allow node runners to withdraw ETH from their smart wallet. ETH can only be withdrawn until the KNOT has not been staked. Once the ETh is withdrawn for the BLS public key, this key will be banned from the LSD and can no longer be used to stake.  

#### Input params
`recipientAddress`: Ethereum address that receives the ETH after withdrawal  
`blsPublicKey`: BLS public key for which the ETH is to be withdrawn  

#### Using the function
```js
await wizard.utils.withdrawETHForKnot(recipientAddress, blsPublicKey);
```

### rotateNodeRunnerOfSmartWallet function
Allow appointing a new node runner if the existing node runner coordinates with the DAO to sell their wallet. Can be only called by the DAO address or the current owner of the smart wallet.  

#### Input params
`currentNodeRunner`: Address of the current owner of the smart wallet  
`newNodeRunner`: Address of the new node runner to be associated with the smart wallet  
`wasCurrentNodeRunnerMalicious`: Boolean. `true` if the current node runner was malicious, `false` otherwise  

#### Using the function
```js
await wizard.utils.rotateNodeRunnerOfSmartWallet(currentNodeRunner, newNodeRunner, wasCurrentNodeRunnerMalicious);
```

### claimRewardsAsNodeRunner function
Allows a node runner to claim ETH from the syndicate from their smart wallet. Can be only called by the node runner that owns a smart wallet in the LSD network.  

#### Input params
`recipientAddress`: Address that receives the ETH after claiming  
`blsPublicKeys`: List of BLS public keys to claim rewards for  

#### Using the function
```js
await wizard.utils.claimRewardsAsNodeRunner(recipientAddress, blsPublicKeys);
```

### registerBLSPublicKeys function
Allows node runners to register a new BLS public key. If the node runner is interacting with the LSD network for the fist time, then a new smart wallet is created. If not, then the BLS public keys are added to the existing smart wallet of the node runner. Every node runner has a uniques smart wallet in an LSD network. The node runner should also supply 4 ETH with every BLS public keys he wants to register.  

#### Input params
`blsPublicKeys`: List of BLS public keys to be registered  
`blsSignatures`: List of BLS signatures corresponding to each of the BLS public keys  
`representativeAddress`: EOA representative to be appointed by the node runner  
`ethValue`: ETH attached along with the transaction. 4 ETH per BLS public key.  

#### Using the function
```js
await wizard.utils.registerBLSPublicKeys(blsPublicKeys, blsSignatures, representativeAddress, ethValue);
```

### isKnotDeregistered function
Check if a KNOT has been de-registered from the LSD network.  

#### Input params
`blsPublicKey`: BLS public key of the KNOT  

#### Using the function
```js
await wizard.utils.isKnotDeregistered(blsPublicKey);
```

#### Returns
Boolean. `true` if de-registered, `false` otherwise.  

### stake function
Stake a list of BLS public keys. Make sure that there is enough ETH for all the BLS public keys. Can be only called by a node runner who has registered BLS public keys in the LSD network.  

#### Input params
`blsPublicKeys`: List of BLS public keys to be staked  
`cipherTexts`: List of cipher texts corresponding to the BLS public keys  
`aesEncryptorKeys`: List of AES encryptor keys corresponding to the BLS public keys  
`encryptionSignatures`: List of encryption signatures corresponding to the BLS public keys  `dataRoots`: List of data roots corresponding to the BLS public keys  

#### Using the function
```js
await wizard.utils.stake(blsPublicKeys, cipherTexts, aesEncryptorKeys, encryptionSignatures, dataRoots);
```

### mintDerivatives function
Trigger minting of derivatives for a KNOT after it has been activated on Ethereum consensus layer. Anyone can trigger minting. After the minting of the KNOT has been triggered, it starts earning rewards.  

#### Input params
`blsPublicKeys`: List of BLS public keys to trigger minting for  
`beaconChainReports`: List of finalised beacon chain reports for each of the BLS public keys  
`authenticatedReportSignatures`: List of report signatures after the beacon chain reports have been authenticated by the deposit router  

#### Using the function
```js
await wizard.utils.mintDerivatives(blsPublicKeys, beaconChainReports, authenticatedReportSignatures);
```

### getNetworkFeeRecipient function
Fetch the network recipient, which the node runner must set in order to receive rewards after their KNOT has been activated. Every LSD network has a single fee recipient determined by its syndicate contract.  

#### Using the function
```js
await wizard.utils.getNetworkFeeRecipient();
```

#### Returns
Ethereum address of the LSD's fee recipient  


## SavETH Pool sub-class
This sub-class exposes all the necessary functions from the SavETHVault smart contract. For anyone to use this sub-class it is necessary to initialize the Wizard SDK with the `signer` instance and `savETHPoolAddress`. SavETH Pool Address is the Protected Staking Pool address of the respective LSD.  

### getIndexOwnedByTheVault function
Fetches the savETH index created upon deployment of the Protected Staking Pool of the LSD. Every LSD network has it's own unique savETH index which holds dETH for users that have their validator minted.  

#### Using the function
```js
await wizard.savETHPool.getIndexOwnedByTheVault();
```

#### Returns
SavETH Index in Big Numbers.  

### batchDepositETHForStaking function
Allows anyone to deposit ETH in exchange of LP tokens. A user can deposit ETH for multiple BLS public keys, with minimum deposit of 0.001 ETH and maximum of 24 ETH per BLS Public key.  

#### Input params
`blsPublicKeys`: List of BLS public keys  
`amounts`: List of ETH value corresponding to each of the BLS public keys  
`ethValue`: Total amount of ETH attached with the transaction  

#### Using the function
```js
await wizard.savETHPool.batchDepositETHForStaking(blsPublicKeys, amounts, ethValue);
```

### depositETHForStaking function
Allows anyone to deposit ETH in exchange of LP tokens. This function allows user to deposit ETH for a single BLS public key.  

#### Input params
`blsPublicKey`: BLS public key to deposit ETH for  
`amount`: Amount of ETH to deposit. Minimum limit is 0.001 and maximum is 24 ETH.  
`ethValue`: ETH attached with the transaction  

#### Using the function
```js
await wizard.savETHPool.depositETHForStaking(blsPublicKey, amount, ethValue);
```

#### Returns
Number of LP tokens issued for the deposit in Big Numbers. The number of LP tokens issued should always be equal to ETH deposited.  

### burnLPTokensByBLS function
Allows the user to burn multiple LP tokens associated with the BLS public keys. This is a batch transaction, which means a user can provide multiple BLS public keys and burn amounts of LP tokens for each of them.  

#### Input params
`blsPublicKeys`: List of BLS public keys  
`amounts`: List of number of LP tokens to be burnt for each of the BLS public keys  

#### Using the function
```js
await wizard.savETHPool.burnLPTokensByBLS(blsPublicKeys, amounts);
```

### burnLPTokens function
Allows the user to burn multiple LP tokens at once.  

#### Input params
`lpTokens`: List of address of LP tokens to be burnt  
`amounts`: List of number of LP tokens to be burnt  

#### Using the function
```js
await wizard.savETHPool.burnLPTokens(lpTokens, amounts);
```

### burnLPToken function
Allows the user to burn an LP token by given amount. The user will receive ETH in 1:1 ratio of LP token if the associated BLS public key has not been staked yet. If the BLS public key is staked, then the user receives dETH.  

#### Input params
`lpToken`: Address of the LP token to be burnt  
`amount`: Number of LP tokens to be burnt  

#### Using the function
```js
await wizard.savETHPool.burnLPToken(lpToken, amount);
```

#### Returns
Amount of ETH or dETH redeemed by the user upon burning the LP token.  

### isDETHReadyForWithdrawal function
Utility function that determines whether an LP token can be burned for dETH if the associated derivatives have been minted.  

#### Input params
`lpToken`: Address of the LP token  

#### Using the function
```js
await wizard.savETHPool.isDETHReadyForWithdrawal(lpToken);
```

#### Returns
Boolean. `true` if ready for withdrawal, `false` otherwise.  


## Fees and MEV sub-class
This sub-class exposes all the necessary functions required for user to interact with the Fees and MEV Pool of the LSD network. The sub-class exposes all the necessary functions from the StakingFundsVault smart contract. For a user to interact with this sub-class, it is necessary to initialize the Wizard SDK with `signer` instance and `feesAndMevPoolAddress`.  

### totalShares function
Fetches the total number of LP tokens issued by the pool.  

#### Using the function
```js
await wizard.feesAndMevPool.totalShares();
```

#### Returns
Returns the count of LP tokens in wei in Big Numbers.  

### updateAccumulatedETHPerLP function
Updates the accrued ETH per LP token.  

#### Using the function
```js
await wizard.feesAndMevPool.updateAccumulatedETHPerLP();
```

### batchDepositETHForStaking function
Allows the user to deposit ETH for multiple BLS public keys in a batch. The minimum deposit limit is 0.001 and the maximum is 4 ETH per validator.  

#### Input params
`blsPublicKeys`: List of BLS public keys to deposit ETH for  
`amounts`: List of number of ETH to be deposited for corresponding BLS public keys  
`ethValue`: Amount of ETH attached with the transaction  

#### Using the function
```js
await wizard.feesAndMevPool.batchDepositETHForStaking(blsPublicKeys, amounts, ethValue);
```

### depositETHForStaking function
Allows the user to deposit ETH for a BLS public key and get LP tokens in return.  

#### Input params
`blsPublicKey`: BLS public key to deposit ETH for  
`amount`: Amount of ETH to be deposited  
`ethValue`: Amount of ETH attached with the transaction  

#### Using the function
```js
await wizard.feesAndMevPool.depositETHForStaking(blsPublicKey, amount, ethValue);
```

#### Returns
Number of ETH deposited in Big Numbers.  

### burnLPTokensForETHByBLS function
Allows users to burn their LP tokens in batches. A user can provide BLS public key associated with the LP tokens to burn the tokens.  

#### Input params
`blsPublicKeys`: List of BLS public keys to burn the associated LP tokens for  
`amounts`: List of number of LP tokens to be burnt  

#### Using the function
```js
await wizard.feesAndMevPool.burnLPTokensForETHByBLS(blsPublicKeys, amounts);
```

### burnLPTokensForETH function
Allows users to burn a batch of LP tokens to get ETH that has not been staked in return.  

#### Input params
`lpTokens`: List of address of LP tokens to be burnt  
`amounts`: List of number of LP tokens to be burnt  

#### Using the function
```js
await wizard.feesAndMevPool.burnLPTokensForETH(lpTokens, amounts);
```

### burnLPTokenForETH function
Allows users to burn an LP token associated with an unstaked BLS public key to get back ETH.  

#### Input params
`lpToken`: Address of the LP token to be burnt  
`amount`: Amount of LP tokens to be burnt  

#### Using the function
```js
await wizard.feesAndMevPool.burnLPTokenForETH(lpToken, amount);
```

### claimRewards function
Allows users to claim ETH from the syndicate contract if the respective BLS public keys have their tokens minted.  

#### Input params
`recipient`: Ethereum execution layer address that receives the ETH  
`blsPublicKeys`: List of BLS public keys to claim rewards for  

#### Using the function
```js
await wizard.feesAndMevPool.claimRewards(recipient, blsPublicKeys);
```

### batchPreviewAccumulatedETHByBLSKeys function
Preview total ETH accumulated by a staking funds LP token holder associated with many KNOTs that have minted derivatives.  

#### Input params
`userAddress`: Ethereum execution layer address of the LP token holder  
`blsPublicKeys`: List of BLS public keys associated with the LP tokens held by the user  

#### Using the function
```js
await wizard.feesAndMevPool.batchPreviewAccumulatedETHByBLSKeys(userAddress, blsPublicKeys);
```

#### Returns
Total accumulated ETH in Big Numbers.  

### batchPreviewAccumulatedETH function
Preview total ETH accumulated by a user for multiple LP tokens.  

#### Input params
`userAddress`: Ethereum execution layer address of the LP token holder  
`lpTokens`: List of address of LP tokens that the user holds  

#### Using the function
```js
await wizard.feesAndMevPool.batchPreviewAccumulatedETH(userAddress, lpTokens);
```

#### Returns
Total ETH accumulated by the user in Big NUmbers.  

###  function
Preview ETH accumulated by the user for a single LP token.  

#### Input params
`userAddress`: Ethereum execution layer address of the LP token holder  
`lpTokens`: Address of the LP token that the user holds  

#### Using the function
```js
await wizard.feesAndMevPool.previewAccumulatedETH(userAddress, lpToken);
```

#### Returns
Total ETH accumulated by the user for the LP token.  

### claimFundsFromSyndicateForDistribution function
Claim ETH to the Fees and MEV Pool, from the syndicate, that was accrued by a list of actively staked validators.  

#### Input params
`blsPublicKeys`: List of BLS public keys to claim ETH for  

#### Using the function
```js
await wizard.feesAndMevPool.claimFundsFromSyndicateForDistribution(blsPublicKeys);
```

## Giant SavETH Pool sub-class
This sub-class exposes all the necessary functions required to interact with the Giant Protected Staking pool, which is present as the GiantSavETHVaultPool smart contract of LSD Network. To use this sub-class, it is necessary to initialize the Wizard SDK with `signer` instance.  

### batchDepositETHForStaking function
Allows users to stake ETH in batches for different LSD Networks at once. The ETH that has been sitting idle is sent to the Protected Staking Pools of respective LSD Networks when this function is called by the node runner. A node runner should be on a look out and can use the funds if his LSD Network's Protected Staking Pool is falling short of ETH.  

#### Input params
`savETHVaultAddresses`: List of address of Protected Staking pool of different LSD Networks  
`amounts`: List of number of ETH being set to each of the Protected Staking Pools  
`blsPublicKeys`: 2 dimensional array of BLS public keys of specific LSD Network to receive ETH for staking  
`stakeAmounts`: 2 dimensional array of number of ETH being sent to each of the BLS public keys  
`ethValue`: Total ETH sent along with the transaction  

#### Using the function
```js
await wizard.giantSavETHPool.batchDepositETHForStaking(savETHVaultAddresses, amounts, blsPublicKeys, stakeAmounts, ethValue);
```

### withdrawDETH function
Allow a user to burn their Giant Protected Staking LP token in exchange of dETH that is ready to withdraw from a set of Protected Staking Pools of LSD Networks.  

#### Input params
`savETHVaultAddresses`: List of Protected Staking Pools to withdraw dETH from  
`lpTokens`: 2 dimensional array of addresses of LP tokens to burn in exchange of dETH  
`amounts`: 2 dimensional array of number of LP tokens to be burnt  

#### Using the function
```js
await wizard.giantSavETHPool.withdrawDETH(savETHVaultAddresses, lpTokens, amounts);
```

### batchRotateLPTokens function
Allow users to rotate their ETH from one BLS public key of an LSD Network to another.  

#### Input params
`savETHVaultAddresses`: List of address of Protected Staking Pools  
`oldLPTokens`: 2 dimensional array of LP tokens that need to be rotated  
`newLPTokens`: 2 dimensional array of LP tokens that will be minted in exchange of old LP tokens  
`amounts`: 2 dimensional array of number of LP tokens to be rotated.  

#### Using the function
```js
await wizard.giantSavETHPool.batchRotateLPTokens(savETHVaultAddresses, oldLPTokens, newLPTokens, amounts);
```

### bringUnusedETHBackIntoGiantPool function
Any ETH that has not been utilized by a Protected Staking Pool can be brought back into the Giant Protected Staking Pool.  

#### Input params
`savETHVaultAddresses`: List of Protected Staking Pools to bring idle ETH from  
`lpToken`: 2 dimensional array of LP tokens that the Giant Protected Staking Pool holds which represents ETH in a Protected Staking Pool  
`amounts`: 2 dimensional array of amount of ETH to be brought back to the Giant Protected Staking Pool  

#### Using the function
```js
await wizard.giantSavETHPool.bringUnusedETHBackIntoGiantPool(savETHVaultAddresses, lpToken, amounts);
```

### depositETH function
Allow users to deposit ETH into the Giant Protected Staking Pool in exchange of Giant LP tokens. The LP tokens maintain 1:1 ratio with ETH as long as the ETH is not staked. Once staked, user start earning rewards and their LP tokens can be burnt to get dETH.  

#### Input params
`amount`: Amount of ETH to deposit  
`ethValue`: Amount of ETH attached with the transaction  

#### Using the function
```js
await wizard.giantSavETHPool.depositETH(amount, ethValue);
```

### getIdleETH function
Fetch the number of idle ETH sitting in the pool.  

#### Using the function
```js
await wizard.giantSavETHPool.getIdleETH();
```

#### Returns
Number of idle ETH in Big Numbers.  

### withdrawETH function
Allow users to burn LP tokens and get back the ETH they deposited in case the ETH has not been staked yet.  

#### Input params
`amount`: Number of LP tokens to be burnt  

#### Using the function
```js
await wizard.giantSavETHPool.withdrawETH(amount);
```

## Giant Fees and MEV sub-class
This sub-class exposes all the necessary functions from the Giant Fees and MEV pool of the LSD Network. For anyone to use this sub-class, it is necessary to initialize the sub-class with `signer` instance.  

### batchDepositETHForStaking function
This function allows users to deposit ETH in batches from the Giant Fees and MEV pool to multiple Fees and MEV pools of different LSD Networks. A node runner should be on a lookout in case the pool is falling short of ETH and when the Giant pool gets funded with ETH, he can then use these ETH in the respective LSD network to get them staked.  

#### Input params
`feesAndMevPoolAddresses`: List of address of Fees and MEV pool to transfer ETH to  
`amounts`: List of number of ETH to be transferred to each of the Fees and MEV pools  
`blsPublicKeys`: 2 dimensional array of address of BLS public keys which receive ETH  
`stakeAmounts`: 2 dimensional array of amount of ETH to be transferred to each of the BLS public keys  
`ethValue`: Amount of ETH attached with the transaction  

#### Using the function
```js
await wizard.giantFeesAndMevPool.batchDepositETHForStaking(feesAndMevPoolAddresses, amounts, blsPublicKeys, stakeAmounts, ethValue);
```

### claimRewards function
Allows a giant LP to claim a percentage of the revenue received by the MEV and Fees Pool.  

#### Input params
`recipient`: Recipient address that receives the ETH from revenue  
`feesAndMevPoolAddresses`: List of address of Fees and MEV pools to claim revenue from  
`blsPublicKeys`: 2 dimensional list of BLS public keys to claim portion of revenue from  

#### Using the function
```js
await wizard.giantFeesAndMevPool.claimRewards(recipient, feesAndMevPoolAddresses, blsPublicKeys);
```

### previewAccumulatedETH function
Allows users to preview ETH accumulated by an address.  

#### Input params
`userAddress`: Ethereum execution layer address to find ETH accumulation for  
`feesAndMevPoolAddresses`: List of address of Fees and MEV pools  
`lpTokens`: 2 dimensional array of address of LP tokens  

#### Using the function
```js
await wizard.giantFeesAndMevPool.previewAccumulatedETH(userAddress, feesAndMevPoolAddresses, lpTokens);
```

#### Returns
Accumulated ETH in Big Numbers.  

### batchRotateLPTokens function
Allows users to batch rotate their existing deposited ETH from one BLS public key to another.  

#### Input params
`feesAndMevPoolAddresses`: List of address of Fees and MEV pools that hold the LP tokens  
`oldLPTokens`: 2 dimensional array of address of old LP tokens to be rotated  
`newLPToken`: 2 dimensional array of address of new LP tokens to be minted after burning the old LP tokens  
`amounts`: 2 dimensional array of number of old LP tokens of each type to be rotated.  

#### Using the function
```js
await wizard.giantFeesAndMevPool.batchRotateLPTokens(feesAndMevPoolAddresses, oldLPTokens, newLPToken, amounts);
```

### bringUnusedETHBackIntoGiantPool function
Allows user to bring back unstaked ETH from the Fees and MEV pool of different LSD Networks to the Giant Fees and MEV Pool.  

#### Input params
`feesAndMevPoolAddresses`: List of address of Fees and MEV pool to bring back ETH from  
`lpTokens`: 2 dimensional array of address of LP tokens that the Giant pool holds for specific Fees and MEV Pools to bring back ETH  
`amounts`: 2 dimensional array of number of ETH to be brought back  

#### Using the function
```js
await wizard.giantFeesAndMevPool.bringUnusedETHBackIntoGiantPool(feesAndMevPoolAddresses, lpTokens, amounts);
```

###  function
Updates the accrued ETH per LP token.  

#### Using the function
```js
await wizard.giantFeesAndMevPool.updateAccumulatedETHPerLP();
```

### depositETH function
Allows users to deposit ETH into the Giant Fees and MEV Pool in exchange of LP tokens. The LP tokens hold 1:1 relationship with ETH until the ETH is staked. Once staked, the users can start earning and claiming rewards for every Giant LP they hold.  

#### Input params
`amount`: Number of ETH to be staked  
`ethValue`: Amount of ETH to be attached with the transaction  

#### Using the function
```js
await wizard.giantFeesAndMevPool.depositETH(amount, ethValue);
```

### getIdleETH function
Allows user to fetch number of idle ETH in the pool.  

#### Using the function
```js
await wizard.giantFeesAndMevPool.getIdleETH();
```

#### Returns
Amount of idle ETH in Big Numbers.  

### withdrawETH function
Allows user to withdraw ETH by burning the LP token as long as the ETH has not been staked.  

#### Input params
`amount`: Number of LP tokens to be burnt  

#### Using the function
```js
await wizard.giantFeesAndMevPool.withdrawETH(amount);
```

## Contract Instance sub-class
This sub-class allows users to get the contract instance of specific smart contracts of the LSD network. This turns out to be useful when a function from one of the smart contracts is not exposed in Wizard SDK directly. For a user to use this sub-class, it is necessary to initialize the Wizard SDK with the `signer` instance.  

### Contracts exposed via the sub-class
* lsdnFactory: LSDN factory (used to deploy a new LSD Network)  
* liquidStakingManager  
* savETHVault: Protected Staking Pool smart contract  
* feesAndMevPool  
* giantSavETHPool: Giant Protected Staking Pool smart contract  
* giantFeesAndMevPool  

### Getting the contract instances
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
