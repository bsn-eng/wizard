import { Signer } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
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

    etherSigner; deployer; utils; savETHPool; feesAndMevPool; giantSavETHPool;
    giantFeesAndMevPool; helper; contractInstance; constants;

    constructor({
        signerOrProvider: Signer | Provider, 
        liquidStakingManagerAddress?: string, 
        savETHPoolAddress?: string,
        feesAndMevPoolAddress?: string
    }) {
        
        this.etherSigner = signerOrProvider;
        this.deployer = new DeployerSubPackage(this.etherSigner);
        this.utils = new UtilsSubPackage(this.etherSigner, liquidStakingManagerAddress);
        this.savETHPool = new SavETHPoolSubPackage(this.etherSigner, savETHPoolAddress);
        this.feesAndMevPool = new FeesAndMevPoolSubPackage(this.etherSigner, feesAndMevPoolAddress);
        this.giantSavETHPool = new GiantSavETHPoolSubPackage(this.etherSigner);
        this.giantFeesAndMevPool = new GiantFeesAndMevPoolSubPackage(this.etherSigner);
        this.helper = new HelperSubPackage(this.etherSigner);
        
        this.contractInstance = new ContractSubPackage(this.etherSigner);
        this.constants = new ConstantsSubPackage(this.etherSigner);
    }
}
