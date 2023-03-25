import { Signer } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import { _getChainSpecificConstants,
	_extractChainID, 
	goerliFactoryAddresses,
	mainnetFactoryAddresses,
	customErrors
} from '../logic/constants';

export class ConstantsSubPackage {

	factoryAddresses!: typeof goerliFactoryAddresses | typeof mainnetFactoryAddresses;
	customErrors!: typeof customErrors;
  
	constructor(signer: Signer | Provider) {
	  (async () => {
		const chainID = await _extractChainID(signer);
		const values = _getChainSpecificConstants(chainID);
  
		this.factoryAddresses = values?.factoryAddresses;
		this.customErrors = values?.customErrors;
  
		return this;
	  })();
	}
  }