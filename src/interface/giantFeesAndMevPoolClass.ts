import { BigNumber, Bytes, Signer } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import {
    _batchDepositETHForStaking,
    _claimRewards,
    _previewAccumulatedETH,
    _bringUnusedETHBackIntoGiantPool,
    _updateAccumulatedETHPerLP,
    _depositETH,
    _getIdleETH,
    _withdrawETH,
    _batchFetchETHFromRageQuit,
    _batchClaimETHFromRageQuit,
    _fetchETHFromRageQuit,
    _claimETHFromRageQuit
} from '../logic/giantFeesAndMevPool';

export class GiantFeesAndMevPoolSubPackage {

    etherSigner;

    constructor(signer: Signer | Provider) {
        this.etherSigner = signer;
    }

    batchDepositETHForStaking(feesAndMevPoolAddresses: Array<string>, amounts: Array<string | BigNumber>, blsPublicKeys: Array<Array<string>>, stakeAmounts: Array<Array<string | BigNumber>>) {
        return _batchDepositETHForStaking(this.etherSigner, feesAndMevPoolAddresses, amounts, blsPublicKeys, stakeAmounts);
    }

    claimRewards(recipient: string, feesAndMevPoolAddresses: Array<string>, blsPublicKeys: Array<Array<string>>) {
        return _claimRewards(this.etherSigner, recipient, feesAndMevPoolAddresses, blsPublicKeys);
    }
    
    previewAccumulatedETH(userAddress: string, feesAndMevPoolAddresses: Array<string>, lpTokens:Array<Array<string>>) {
        return _previewAccumulatedETH(this.etherSigner, userAddress, feesAndMevPoolAddresses, lpTokens);
    }
    
    bringUnusedETHBackIntoGiantPool(feesAndMevPoolAddresses: Array<string>, lpTokens: Array<Array<string>>, amounts: Array<Array<string | BigNumber>>) {
        return _bringUnusedETHBackIntoGiantPool(this.etherSigner, feesAndMevPoolAddresses, lpTokens, amounts);
    }
    
    updateAccumulatedETHPerLP() {
        return _updateAccumulatedETHPerLP(this.etherSigner);
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

    batchFetchETHFromRageQuit(feesAndMevPoolAddresses: Array<string>, lpTokens: Array<Array<string>>,  amounts: Array<Array<string | BigNumber>>) {
        return _batchFetchETHFromRageQuit(this.etherSigner, feesAndMevPoolAddresses, lpTokens, amounts);
    }

    fetchETHFromRageQuit(feesAndMevPoolAddress: string, lpToken: string) {
        return _fetchETHFromRageQuit(this.etherSigner, feesAndMevPoolAddress, lpToken);
    }

    batchClaimETHFromRageQuit(blsPublicKeys: Array<string>) {
        return _batchClaimETHFromRageQuit(this.etherSigner, blsPublicKeys);
    }

    claimETHFromRageQuit(blsPublicKey: string) {
        return _claimETHFromRageQuit(this.etherSigner, blsPublicKey);
    }
}
