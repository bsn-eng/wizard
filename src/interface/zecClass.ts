import { BigNumber, Signer } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import {
    _updateTotalZecBLSPublicKeyLimit
} from '../logic/zec';

export class ZECSubPackage {
    etherSigner;

    constructor(signer: Signer | Provider) {
		this.etherSigner = signer;
	}

    updateTotalZecBLSPublicKeyLimit(newLimit: string | BigNumber) {
        return _updateTotalZecBLSPublicKeyLimit(this.etherSigner, newLimit);
    }
}