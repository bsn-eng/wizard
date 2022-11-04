const { DeployerSubPackage } = require('./interface/deployerClass');
const { ConstantsSubPackage } = require('./interface/constantsClass');
const { ContractSubPackage } = require('./interface/contractClass');
const { UtilsSubPackage } = require('./interface/utilsClass');

class Wizard {

    constructor({signer, liquidStakingManagerAddress=null}) {
        
        this.deployer = new DeployerSubPackage(signer);
        this.utils = new UtilsSubPackage(signer, liquidStakingManagerAddress);
        // this.pool = new PoolSubPackage(signer);
        // this.giantPool = new GiantPoolSubPackage(signer);
        
        this.contractInstance = new ContractSubPackage(signer);
        this.constants = new ConstantsSubPackage(signer);
    }
}

module.exports = {
    Wizard
};