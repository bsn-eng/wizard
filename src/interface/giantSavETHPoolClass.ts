import { BigNumber, Signer, Bytes } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import {
    _batchDepositETHForStaking,
    _withdrawDETH,
    _batchRotateLPTokens,
    _bringUnusedETHBackIntoGiantPool,
    _depositETH,
    _getIdleETH,
    _withdrawETH,
} from '../logic/giantSavETHPool.js';

export class GiantSavETHPoolSubPackage {

    etherSigner;

    constructor(signer: Signer | Provider) {
        this.etherSigner = signer;
    }

    batchDepositETHForStaking(savETHVaultAddresses: Array<string>, amounts: Array<string | BigNumber>, blsPublicKeys: Array<Array<string>>, stakeAmounts: Array<Array<string | BigNumber>>, ethValue: BigNumber) {
        return _batchDepositETHForStaking(this.etherSigner, savETHVaultAddresses, amounts, blsPublicKeys, stakeAmounts, ethValue);
    }

    withdrawDETH(savETHVaultAddresses: Array<string>, lpTokens: Array<Array<string>>, amounts: Array<Array<string | BigNumber>>) {
        return _withdrawDETH(this.etherSigner, savETHVaultAddresses, lpTokens, amounts);
    }

    batchRotateLPTokens(savETHVaultAddresses: Array<string>, oldLPTokens: Array<Array<string>>, newLPTokens: Array<Array<string>>, amounts: Array<Array<string | BigNumber>>) {
        return _batchRotateLPTokens(this.etherSigner, savETHVaultAddresses, oldLPTokens, newLPTokens, amounts);
    }
    
    bringUnusedETHBackIntoGiantPool(savETHVaultAddresses: Array<string>, lpTokens: Array<Array<string>>, amounts: Array<Array<string | BigNumber>>) {
        return _bringUnusedETHBackIntoGiantPool(this.etherSigner, savETHVaultAddresses, lpTokens, amounts);
    }

    depositETH(amount: string | BigNumber, ethValue: BigNumber) {
        return _depositETH(this.etherSigner, amount, ethValue);
    }

    getIdleETH() {
        return _getIdleETH(this.etherSigner);
    }

    withdrawETH(amount: string | BigNumber) {
        return _withdrawETH(this.etherSigner, amount);
    }
}
