const { DeployerSubPackage } = require('./interface/deployerClass');
const { ConstantsSubPackage } = require('./interface/constantsClass');
const { ContractSubPackage } = require('./interface/contractClass');

class Wizard {

    constructor(signer) {

        super(signer);
        
        this.deployer = new DeployerSubPackage(signer);
        
        this.contractInstance = new ContractSubPackage(signer);
        this.constants = new ConstantsSubPackage(signer);
    }
}

module.exports = {
    Wizard
};