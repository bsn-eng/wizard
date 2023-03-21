import { BigNumber, Signer } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import { _deployNewLiquidStakingDerivativeNetwork } from '../logic/deployer';

export class DeployerSubPackage {
    
    etherSigner;

    constructor(signer: Signer | Provider) {
		this.etherSigner = signer;
	}

    deployNewLiquidStakingDerivativeNetwork(daoAddress: string, stakehouseTicker: string, commission?: BigNumber, gateKeeping?: boolean) {
        return _deployNewLiquidStakingDerivativeNetwork(this.etherSigner, daoAddress, stakehouseTicker, commission, gateKeeping);
    }
}
