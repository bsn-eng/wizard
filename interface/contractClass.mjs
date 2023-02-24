import { getContractInstance } from '../logic/contracts.mjs';

class ContractSubPackage {

    constructor(signer) {
        return  getContractInstance(signer);
    }
}

export default {
    ContractSubPackage
};
