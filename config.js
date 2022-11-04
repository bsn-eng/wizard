const { DeployerSubPackage } = require('./interface/deployerClass');
const { ConstantsSubPackage } = require('./interface/constantsClass');
const { ContractSubPackage } = require('./interface/contractClass');
const { UtilsSubPackage } = require('./interface/utilsClass');
const { SavETHPoolSubPackage } = require('./interface/savETHPoolClass');

class Wizard {

    constructor({
        signer, 
        liquidStakingManagerAddress=null, 
        savETHPoolAddress=null
    }) {
        
        this.deployer = new DeployerSubPackage(signer);
        this.utils = new UtilsSubPackage(signer, liquidStakingManagerAddress);
        this.savETHPool = new SavETHPoolSubPackage(signer, savETHPoolAddress);
        
        this.contractInstance = new ContractSubPackage(signer);
        this.constants = new ConstantsSubPackage(signer);
    }
}

module.exports = {
    Wizard
};