import { Signer, Bytes } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import { _getValidatorDetails } from '../logic/helper.js';

export class HelperSubPackage {
    etherSigner;

    constructor(signer: Signer | Provider) {
		this.etherSigner = signer;
	}

    getValidatorDetails(blsPublicKey: string) {
        return _getValidatorDetails(this.etherSigner, blsPublicKey);
    }
}
