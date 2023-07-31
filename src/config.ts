import { Signer } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import { DeployerSubPackage } from './interface/deployerClass';
import { ConstantsSubPackage } from './interface/constantsClass';
import { ContractSubPackage } from './interface/contractClass';
import { UtilsSubPackage } from './interface/utilsClass';
import { SavETHPoolSubPackage } from './interface/savETHPoolClass';
import { FeesAndMevPoolSubPackage } from './interface/feesAndMevPoolClass';
import { GiantSavETHPoolSubPackage } from './interface/giantSavETHPoolClass';
import { GiantFeesAndMevPoolSubPackage } from './interface/giantFeesAndMevPoolClass';
import { HelperSubPackage } from './interface/helperClass';

export class Wizard {

    etherSigner: Signer | Provider; 
    deployer: DeployerSubPackage; 
    utils?: UtilsSubPackage; 
    savETHPool?: SavETHPoolSubPackage; 
    feesAndMevPool?: FeesAndMevPoolSubPackage; 
    giantSavETHPool: GiantSavETHPoolSubPackage;
    giantFeesAndMevPool: GiantFeesAndMevPoolSubPackage; 
    helper: HelperSubPackage; 
    contractInstance: ContractSubPackage; 
    constants: ConstantsSubPackage;

    constructor({
        signerOrProvider,
        liquidStakingManagerAddress,
        savETHPoolAddress,
        feesAndMevPoolAddress
    }: {
        signerOrProvider: Signer | Provider,
        liquidStakingManagerAddress?: string,
        savETHPoolAddress?: string,
        feesAndMevPoolAddress?: string,
        frenDelegationBribeVaultAddress?: string,
    }) {
        
        this.etherSigner = signerOrProvider;
        this.deployer = new DeployerSubPackage(this.etherSigner);
        this.utils = liquidStakingManagerAddress
            ? new UtilsSubPackage(this.etherSigner, liquidStakingManagerAddress, frenDelegationBribeVaultAddress)
            : undefined;
        this.savETHPool = savETHPoolAddress
            ? new SavETHPoolSubPackage(this.etherSigner, savETHPoolAddress)
            : undefined;
        this.feesAndMevPool = feesAndMevPoolAddress
            ? new FeesAndMevPoolSubPackage(this.etherSigner, feesAndMevPoolAddress)
            : undefined;
        this.giantSavETHPool = new GiantSavETHPoolSubPackage(this.etherSigner);
        this.giantFeesAndMevPool = new GiantFeesAndMevPoolSubPackage(this.etherSigner);
        this.helper = new HelperSubPackage(this.etherSigner);
        
        this.contractInstance = new ContractSubPackage(this.etherSigner);
        this.constants = new ConstantsSubPackage(this.etherSigner);
    }
}
