const { DeployerSubPackage } = require('./interface/deployerClass');
const { ConstantsSubPackage } = require('./interface/constantsClass');
const { ContractSubPackage } = require('./interface/contractClass');
const { UtilsSubPackage } = require('./interface/utilsClass');
const { SavETHPoolSubPackage } = require('./interface/savETHPoolClass');
const { FeesAndMevPoolSubPackage } = require('./interface/feesAndMevPoolClass');

class Wizard {

    constructor({
        signer, 
        liquidStakingManagerAddress=null, 
        savETHPoolAddress=null,
        feesAndMevPoolAddress=null
    }) {
        
        this.deployer = new DeployerSubPackage(signer);
        this.utils = new UtilsSubPackage(signer, liquidStakingManagerAddress);
        this.savETHPool = new SavETHPoolSubPackage(signer, savETHPoolAddress);
        this.feesAndMevPool = new FeesAndMevPoolSubPackage(signer, feesAndMevPoolAddress);
        
        this.contractInstance = new ContractSubPackage(signer);
        this.constants = new ConstantsSubPackage(signer);
    }
}

module.exports = {
    Wizard
};