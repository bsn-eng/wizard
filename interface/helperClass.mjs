import { _getValidatorDetails } from '../logic/helper.mjs';

export class HelperSubPackage {

    constructor(signer) {
		this.etherSigner = signer;
	}

    getValidatorDetails(blsPublicKey) {
        return _getValidatorDetails(this.etherSigner, blsPublicKey);
    }
}
