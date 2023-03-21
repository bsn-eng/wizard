import { BigNumber, Signer, Bytes } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import {
    _totalShares,
    _updateAccumulatedETHPerLP,
    _batchDepositETHForStaking,
    _depositETHForStaking,
    _burnLPTokensForETHByBLS,
    _burnLPTokensForETH,
    _burnLPTokenForETH,
    _claimRewards,
    _batchPreviewAccumulatedETH,
    _claimFundsFromSyndicateForDistribution,
} from '../logic/feesAndMevPool.js';

export class FeesAndMevPoolSubPackage {
    
    etherSigner: Signer | Provider;
    feesAndMevPoolAddress: string;

    constructor(signer: Signer | Provider, feesAndMevPoolAddress: string) {
        this.etherSigner = signer,
        this.feesAndMevPoolAddress = feesAndMevPoolAddress;
    }

    totalShares() {
        return _totalShares(this.etherSigner, this.feesAndMevPoolAddress);
    }

    updateAccumulatedETHPerLP() {
        return _updateAccumulatedETHPerLP(this.etherSigner, this.feesAndMevPoolAddress);
    }

    batchDepositETHForStaking(blsPublicKeys: Array<string>, amounts: Array<string | BigNumber>, ethValue: BigNumber) {
        return _batchDepositETHForStaking(this.etherSigner, this.feesAndMevPoolAddress, blsPublicKeys, amounts, ethValue);
    }

    depositETHForStaking(blsPublicKey: string, amount: string | BigNumber, ethValue: BigNumber) {
        return _depositETHForStaking(this.etherSigner, this.feesAndMevPoolAddress, blsPublicKey, amount, ethValue);
    }

    burnLPTokensForETHByBLS( blsPublicKeys: Array<string>, amounts: Array<string | BigNumber>) {
        return _burnLPTokensForETHByBLS(this.etherSigner, this.feesAndMevPoolAddress, blsPublicKeys, amounts);
    }

    burnLPTokensForETH(lpTokens: Array<string>, amounts: Array<string | BigNumber>) {
        return _burnLPTokensForETH(this.etherSigner, this.feesAndMevPoolAddress, lpTokens, amounts);
    }

    burnLPTokenForETH(lpToken: string, amount: string | BigNumber) {
        return _burnLPTokenForETH(this.etherSigner, this.feesAndMevPoolAddress, lpToken, amount);
    }

    claimRewards(recipient: string, blsPublicKeys: Array<string>) {
        return _claimRewards(this.etherSigner, this.feesAndMevPoolAddress, recipient, blsPublicKeys);
    }
    
    batchPreviewAccumulatedETH(userAddress: string, lpTokens: Array<string>) {
        return _batchPreviewAccumulatedETH(this.etherSigner, this.feesAndMevPoolAddress, userAddress, lpTokens);
    }
    
    claimFundsFromSyndicateForDistribution(blsPublicKeys: Array<string>) {
        return _claimFundsFromSyndicateForDistribution(this.etherSigner, this.feesAndMevPoolAddress, blsPublicKeys);
    }
}
