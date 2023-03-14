import { Signer } from 'ethers';
import { _getValidatorDetails } from '../logic/helper.js';

export class HelperSubPackage {
    etherSigner;

    constructor(signer: Signer) {
		this.etherSigner = signer;
	}

    getValidatorDetails(blsPublicKey) {
        return _getValidatorDetails(this.etherSigner, blsPublicKey);
    }
}
