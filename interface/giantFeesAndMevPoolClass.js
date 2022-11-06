const {
    _batchDepositETHForStaking,
    _claimRewards,
    _previewAccumulatedETH,
    _batchRotateLPTokens,
    _bringUnusedETHBackIntoGiantPool,
    _updateAccumulatedETHPerLP
} = require('../logic/giantFeesAndMevPool');

class GiantFeesAndMevPoolSubPackage {

    constructor(signer) {
        this.etherSigner = signer;
    }

    batchDepositETHForStaking(feesAndMevPoolAddresses, amounts, blsPublicKeys, stakeAmounts, ethValue) {
        return _batchDepositETHForStaking(this.etherSigner, feesAndMevPoolAddresses, amounts, blsPublicKeys, stakeAmounts, ethValue);
    }

    claimRewards(recipient, feesAndMevPoolAddresses, blsPublicKeys) {
        return _claimRewards(this.etherSigner, recipient, feesAndMevPoolAddresses, blsPublicKeys);
    }
    
    previewAccumulatedETH(userAddress, feesAndMevPoolAddresses, lpTokens) {
        return _previewAccumulatedETH(this.etherSigner, userAddress, feesAndMevPoolAddresses, lpTokens);
    }

    batchRotateLPTokens(feesAndMevPoolAddresses, oldLPTokens, newLPToken, amounts) {
        return _batchRotateLPTokens(this.etherSigner, feesAndMevPoolAddresses, oldLPTokens, newLPToken, amounts);
    }
    
    bringUnusedETHBackIntoGiantPool(feesAndMevPoolAddresses, lpTokens, amounts) {
        return _bringUnusedETHBackIntoGiantPool(this.etherSigner, feesAndMevPoolAddresses, lpTokens, amounts);
    }
    
    updateAccumulatedETHPerLP() {
        return _updateAccumulatedETHPerLP(this.etherSigner);
    }
}

module.exports = {
    GiantFeesAndMevPoolSubPackage
};
