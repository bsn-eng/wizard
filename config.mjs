import { DeployerSubPackage } from './interface/deployerClass.mjs';
import { ConstantsSubPackage } from './interface/constantsClass.mjs';
import { ContractSubPackage } from './interface/contractClass.mjs';
import { UtilsSubPackage } from './interface/utilsClass.mjs';
import { SavETHPoolSubPackage } from './interface/savETHPoolClass.mjs';
import { FeesAndMevPoolSubPackage } from './interface/feesAndMevPoolClass.mjs';
import { GiantSavETHPoolSubPackage } from './interface/giantSavETHPoolClass.mjs';
import { GiantFeesAndMevPoolSubPackage } from './interface/giantFeesAndMevPoolClass.mjs';
import { HelperSubPackage } from './interface/helperClass.mjs';

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
