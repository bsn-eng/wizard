import { BigNumber, Signer, Bytes } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import {
    _batchDepositETHForStaking,
    _withdrawDETH,
    _bringUnusedETHBackIntoGiantPool,
    _depositETH,
    _getIdleETH,
    _withdrawETH,
    _batchPartialWithdrawal,
    _batchFetchETHFromRageQuit,
    _batchClaimETHFromRageQuit,
    _fetchETHFromRageQuit,
    _claimETHFromRageQuit
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

    batchPartialWithdrawal(savETHVaultAddresses: Array<string>, lpTokens: Array<Array<string>>, amounts: Array<Array<string | BigNumber>>) {
        return _batchPartialWithdrawal(this.etherSigner, savETHVaultAddresses, lpTokens, amounts);
    }

    batchFetchETHFromRageQuit(savETHVaultAddresses: Array<string>, lpTokens: Array<Array<string>>,  amounts: Array<Array<string | BigNumber>>) {
        return _batchFetchETHFromRageQuit(this.etherSigner, savETHVaultAddresses, lpTokens, amounts);
    }

    fetchETHFromRageQuit(savETHVaultAddress: string, lpToken: string, amount: string) {
        return _fetchETHFromRageQuit(this.etherSigner, savETHVaultAddress, lpToken, amount);
    }

    batchClaimETHFromRageQuit(blsPublicKeys: Array<string>) {
        return _batchClaimETHFromRageQuit(this.etherSigner, blsPublicKeys);
    }

    claimETHFromRageQuit(blsPublicKey: string) {
        return _claimETHFromRageQuit(this.etherSigner, blsPublicKey);
    }
}
