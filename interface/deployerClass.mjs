import { _deployNewLiquidStakingDerivativeNetwork } from '../logic/deployer.mjs';

export class DeployerSubPackage {

    constructor(signer) {
		this.etherSigner = signer;
	}

    deployNewLiquidStakingDerivativeNetwork(daoAddress, stakehouseTicker, commission=null, gateKeeping=null) {
        return _deployNewLiquidStakingDerivativeNetwork(this.etherSigner, daoAddress, stakehouseTicker, commission, gateKeeping);
    }
}
