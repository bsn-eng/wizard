import { getContractInstance } from '../logic/contracts.mjs';

export class ContractSubPackage {

    constructor(signer) {
        return  getContractInstance(signer);
    }
}
