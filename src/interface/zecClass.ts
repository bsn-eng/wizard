import { BigNumber, Signer } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import {
    _updateTotalZecBLSPublicKeyLimit,
    _updateDAOAddress
} from '../logic/zec';

export class ZECSubPackage {
    etherSigner;

    constructor(signer: Signer | Provider) {
		this.etherSigner = signer;
	}

    updateTotalZecBLSPublicKeyLimit(newLimit: string | BigNumber) {
        return _updateTotalZecBLSPublicKeyLimit(this.etherSigner, newLimit);
    }

    updateDAOAddress(liquidStakingManagerAddress: string, previousDAOAddress: string, newDAOAddress: string) {
        return _updateDAOAddress(this.etherSigner, liquidStakingManagerAddress, previousDAOAddress, newDAOAddress);
    }
}