# Deployer sub-class:  
This sub package deals with deployment of a new LSD network. Any user that initializes the Wizard SDK with `signer` instance can access this sub-class.  

## deployNewLiquidStakingDerivativeNetwork function
Used to deploy a new LSD network.  

### Input params  
`daoAddress`: Address of the ETH account taking ownership of the, to be deployed, LSD network  
`stakehouseTicker`: 3-5 character string for the name of Stakehouse created by the LSD  
`commission`: Optional parameter. Ranges from 0 to 100%. If set to non-zero value, the LSD takes the specified percentage as commission from node operator's earnings  
`gateKeeping`: Boolean. Optional parameter. If set to `true`, only specified node runners can join the given LSD network as node operators. Otherwise, anyone is free to become a node operator

### Using the function  
```js
await wizard.deployer.deployNewLiquidStakingDerivativeNetwork(daoAddress, stakehouseTicker, commission=null, gateKeeping=null);
```