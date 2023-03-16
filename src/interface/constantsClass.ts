import { Signer } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import { _getChainSpecificConstants, _extractChainID } from '../logic/constants';

export class ConstantsSubPackage {

	factoryAddresses; customErrors;

	constructor(signer: Signer | Provider) {

		return (async () => {
			const chainID = await _extractChainID(signer);

			const values = _getChainSpecificConstants(chainID);

			this.factoryAddresses = values?.factoryAddresses;
			this.customErrors = values?.customErrors;
            
			return this;
		})();
	}
}
