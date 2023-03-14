import { Signer } from 'ethers';
import { _getChainSpecificConstants, _extractChainID } from '../logic/constants';

export class ConstantsSubPackage {

	constructor(signer: Signer) {

		return (async () => {
			const chainID = await _extractChainID(signer);

			const values = _getChainSpecificConstants(chainID);

			this.factoryAddresses = values?.factoryAddresses;
			this.customErrors = values?.customErrors;
            
			return this;
		})();
	}
}
