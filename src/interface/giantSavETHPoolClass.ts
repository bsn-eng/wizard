import { BigNumber, Signer, Bytes } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import {
    _batchDepositETHForStaking,
    _withdrawDETH,
    _bringUnusedETHBackIntoGiantPool,
    _depositETH,
    _getIdleETH,
    _withdrawETH,
} from '../logic/giantSavETHPool';

export class GiantSavETHPoolSubPackage {

    etherSigner;

    constructor(signer: Signer | Provider) {
        this.etherSigner = signer;
    }

    batchDepositETHForStaking(savETHVaultAddresses: Array<string>, amounts: Array<string | BigNumber>, blsPublicKeys: Array<Array<string>>, stakeAmounts: Array<Array<string | BigNumber>>) {
        return _batchDepositETHForStaking(this.etherSigner, savETHVaultAddresses, amounts, blsPublicKeys, stakeAmounts);
    }

    withdrawDETH(savETHVaultAddresses: Array<string>, lpTokens: Array<Array<string>>, amounts: Array<Array<string | BigNumber>>) {
        return _withdrawDETH(this.etherSigner, savETHVaultAddresses, lpTokens, amounts);
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
