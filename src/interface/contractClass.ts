import { Signer } from 'ethers';
import { getContractInstance } from '../logic/contracts.js';

export class ContractSubPackage {

    constructor(signer: Signer) {
        return  getContractInstance(signer);
    }
}
