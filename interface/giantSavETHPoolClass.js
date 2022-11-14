const {
    _batchDepositETHForStaking,
    _withdrawDETH,
    _batchRotateLPTokens,
    _bringUnusedETHBackIntoGiantPool,
    _depositETH,
    _getIdleETH
} = require('../logic/giantSavETHPool');

class GiantSavETHPoolSubPackage {

    constructor(signer) {
        this.etherSigner = signer;
    }

    batchDepositETHForStaking(savETHVaultAddresses, amounts, blsPublicKeys, stakeAmounts, ethValue) {
        return _batchDepositETHForStaking(this.etherSigner, savETHVaultAddresses, amounts, blsPublicKeys, stakeAmounts, ethValue);
    }

    withdrawDETH(savETHVaultAddresses, lpTokens, amounts) {
        return _withdrawDETH(this.etherSigner, savETHVaultAddresses, lpTokens, amounts);
    }

    batchRotateLPTokens(savETHVaultAddresses, oldLPTokens, newLPTokens, amounts) {
        return _batchRotateLPTokens(this.etherSigner, savETHVaultAddresses, oldLPTokens, newLPTokens, amounts);
    }
    
    bringUnusedETHBackIntoGiantPool(savETHVaultAddresses, lpToken, amounts) {
        return _bringUnusedETHBackIntoGiantPool(this.etherSigner, savETHVaultAddresses, lpToken, amounts);
    }

    depositETH(amount, ethValue) {
        return _depositETH(this.etherSigner, amount, ethValue);
    }

    getIdleETH() {
        return _getIdleETH(this.etherSigner);
    }
}

module.exports = {
    GiantSavETHPoolSubPackage
};