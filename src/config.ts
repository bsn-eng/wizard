import { DeployerSubPackage } from './interface/deployerClass.js';
import { ConstantsSubPackage } from './interface/constantsClass.js';
import { ContractSubPackage } from './interface/contractClass.js';
import { UtilsSubPackage } from './interface/utilsClass.js';
import { SavETHPoolSubPackage } from './interface/savETHPoolClass.js';
import { FeesAndMevPoolSubPackage } from './interface/feesAndMevPoolClass.js';
import { GiantSavETHPoolSubPackage } from './interface/giantSavETHPoolClass.js';
import { GiantFeesAndMevPoolSubPackage } from './interface/giantFeesAndMevPoolClass.js';
import { HelperSubPackage } from './interface/helperClass.js';

export class Wizard {

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
        this.giantSavETHPool = new GiantSavETHPoolSubPackage(signer);
        this.giantFeesAndMevPool = new GiantFeesAndMevPoolSubPackage(signer);
        this.helper = new HelperSubPackage(signer);
        
        this.contractInstance = new ContractSubPackage(signer);
        this.constants = new ConstantsSubPackage(signer);
    }
}
