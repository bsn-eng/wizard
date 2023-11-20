import { Signer, Bytes } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import { _getValidatorDetails, _getFinalisedEpochReportForMultipleBlsKeys } from '../logic/helper';

export class HelperSubPackage {
    etherSigner;

    constructor(signer: Signer | Provider) {
		this.etherSigner = signer;
	}

    getValidatorDetails(blsPublicKey: string) {
        return _getValidatorDetails(this.etherSigner, blsPublicKey);
    }

    
    getFinalisedEpochReportForMultipleBlsKeys(beaconNodeURL: string, blsPublicKeys: Array <string>, status?: Array <string>){
        return _getFinalisedEpochReportForMultipleBlsKeys(this.etherSigner, beaconNodeURL, blsPublicKeys, status);
    }
}
