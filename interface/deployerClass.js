const {
    _deployNewLiquidStakingDerivativeNetwork
} = require('../logic/deployer');

class DeployerSubPackage {

    constructor(signer) {
		this.etherSigner = signer;
	}

    deployNewLiquidStakingDerivativeNetwork(daoAddress, stakehouseTicker, commission=null, gateKeeping=null) {
        return _deployNewLiquidStakingDerivativeNetwork(this.etherSigner, daoAddress, stakehouseTicker, commission, gateKeeping);
    }
}

module.exports = {
    DeployerSubPackage
};
