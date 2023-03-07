const {
    _getValidatorDetails
} = require('../logic/helper');

class HelperSubPackage {

    constructor(signer) {
		this.etherSigner = signer;
	}

    getValidatorDetails(blsPublicKey) {
        return _getValidatorDetails(this.etherSigner, blsPublicKey);
    }
}

module.exports = {
    HelperSubPackage
};
