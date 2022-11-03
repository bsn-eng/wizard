const {
    getContractInstance
} = require('../logic/contracts');

class ContractSubPackage {

    constructor(signer) {
        return  getContractInstance(signer);
    }
}

module.exports = {
    ContractSubPackage
};
