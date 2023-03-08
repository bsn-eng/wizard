import {
    _totalShares,
    _updateAccumulatedETHPerLP,
    _batchDepositETHForStaking,
    _depositETHForStaking,
    _burnLPTokensForETHByBLS,
    _burnLPTokensForETH,
    _burnLPTokenForETH,
    _claimRewards,
    _batchPreviewAccumulatedETHByBLSKeys,
    _batchPreviewAccumulatedETH,
    _previewAccumulatedETH,
    _claimFundsFromSyndicateForDistribution,
} from '../logic/feesAndMevPool.mjs';

export class FeesAndMevPoolSubPackage {

    constructor(signer, feesAndMevPoolAddress) {
        this.etherSigner = signer,
        this.feesAndMevPoolAddress = feesAndMevPoolAddress;
    }

    totalShares() {
        return _totalShares(this.etherSigner, this.feesAndMevPoolAddress);
    }

    updateAccumulatedETHPerLP() {
        return _updateAccumulatedETHPerLP(this.etherSigner, this.feesAndMevPoolAddress);
    }

    batchDepositETHForStaking(blsPublicKeys, amounts, ethValue) {
        return _batchDepositETHForStaking(this.etherSigner, this.feesAndMevPoolAddress, blsPublicKeys, amounts, ethValue);
    }

    depositETHForStaking(blsPublicKey, amount, ethValue) {
        return _depositETHForStaking(this.etherSigner, this.feesAndMevPoolAddress, blsPublicKey, amount, ethValue);
    }

    burnLPTokensForETHByBLS(blsPublicKeys, amounts) {
        return _burnLPTokensForETHByBLS(this.etherSigner, this.feesAndMevPoolAddress, blsPublicKeys, amounts);
    }

    burnLPTokensForETH(lpTokens, amounts) {
        return _burnLPTokensForETH(this.etherSigner, this.feesAndMevPoolAddress, lpTokens, amounts);
    }

    burnLPTokenForETH(lpToken, amount) {
        return _burnLPTokenForETH(this.etherSigner, this.feesAndMevPoolAddress, lpToken, amount);
    }

    claimRewards(recipient, blsPublicKeys) {
        return _claimRewards(this.etherSigner, this.feesAndMevPoolAddress, recipient, blsPublicKeys);
    }

    batchPreviewAccumulatedETHByBLSKeys(userAddress, blsPublicKeys) {
        return _batchPreviewAccumulatedETHByBLSKeys(this.etherSigner, this.feesAndMevPoolAddress, userAddress, blsPublicKeys);
    }
    
    batchPreviewAccumulatedETH(userAddress, lpTokens) {
        return _batchPreviewAccumulatedETH(this.etherSigner, this.feesAndMevPoolAddress, userAddress, lpTokens);
    }
    
    previewAccumulatedETH(userAddress, lpToken) {
        return _previewAccumulatedETH(this.etherSigner, this.feesAndMevPoolAddress, userAddress, lpToken);
    }
    
    claimFundsFromSyndicateForDistribution(blsPublicKeys) {
        return _claimFundsFromSyndicateForDistribution(this.etherSigner, this.feesAndMevPoolAddress, blsPublicKeys);
    }
}
