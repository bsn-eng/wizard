import { _getValidatorDetails } from '../logic/helper.mjs';

class HelperSubPackage {

    constructor(signer) {
		this.etherSigner = signer;
	}

    getValidatorDetails(blsPublicKey) {
        return _getValidatorDetails(this.etherSigner, blsPublicKey);
    }
}

export default {
    HelperSubPackage
};
