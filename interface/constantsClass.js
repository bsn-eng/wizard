const {
	_getChainSpecificConstants,
	_extractChainID
} = require('../logic/constants');

class ConstantsSubPackage {

	constructor(signer) {

		return (async () => {
			const chainID = await _extractChainID(signer);

			const values = _getChainSpecificConstants(chainID);

			this.factoryAddresses = values.factoryAddresses;
			this.customErrors = values.customErrors;
            
			return this;
		})();
	}
}

module.exports = {
    ConstantsSubPackage
};
