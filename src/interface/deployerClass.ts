import { BigNumber, Signer } from 'ethers';
import { _deployNewLiquidStakingDerivativeNetwork } from '../logic/deployer.js';

export class DeployerSubPackage {
    
    etherSigner;

    constructor(signer: Signer) {
		this.etherSigner = signer;
	}

    deployNewLiquidStakingDerivativeNetwork(daoAddress: string, stakehouseTicker: string, commission?: BigNumber, gateKeeping?: boolean) {
        return _deployNewLiquidStakingDerivativeNetwork(this.etherSigner, daoAddress, stakehouseTicker, commission, gateKeeping);
    }
}
