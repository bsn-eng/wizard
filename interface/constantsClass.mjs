import { _getChainSpecificConstants, _extractChainID } from '../logic/constants.mjs';

export class ConstantsSubPackage {

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
