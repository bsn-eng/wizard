import { Signer } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import { getContractInstance } from '../logic/contracts.js';

export class ContractSubPackage {

    constructor(signer: Signer | Provider) {
        return  getContractInstance(signer);
    }
}
