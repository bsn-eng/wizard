import {
    _getIndexOwnedByTheVault,
    _batchDepositETHForStaking,
    _depositETHForStaking,
    _burnLPTokensByBLS,
    _burnLPTokens,
    _burnLPToken,
    _isDETHReadyForWithdrawal,
    _getdETHRequiredToIsolateWithdrawnKnot,
    _depositDETHForStaking,
    _approveProtectedStakingPoolToTransferDETH,
} from '../logic/savETHPool.mjs';

export class SavETHPoolSubPackage {

    constructor(signer, savETHPoolAddress) {
        this.etherSigner = signer;
        this.savETHPoolAddress = savETHPoolAddress;
    }

    getIndexOwnedByTheVault() {
        return _getIndexOwnedByTheVault(this.etherSigner, this.savETHPoolAddress);
    }

    batchDepositETHForStaking(blsPublicKeys, amounts, ethValue) {
        return _batchDepositETHForStaking(this.etherSigner, this.savETHPoolAddress, blsPublicKeys, amounts, ethValue);
    }

    depositETHForStaking(blsPublicKey, amount, ethValue) {
        return _depositETHForStaking(this.etherSigner, this.savETHPoolAddress, blsPublicKey, amount, ethValue);
    }

    burnLPTokensByBLS(blsPublicKeys, amounts) {
        return _burnLPTokensByBLS(this.etherSigner, this.savETHPoolAddress, blsPublicKeys, amounts);
    }

    burnLPTokens(lpTokens, amounts) {
        return _burnLPTokens(this.etherSigner, this.savETHPoolAddress, lpTokens, amounts);
    }

    burnLPToken(lpToken, amount) {
        return _burnLPToken(this.etherSigner, this.savETHPoolAddress, lpToken, amount);
    }

    isDETHReadyForWithdrawal(lpToken) {
        return _isDETHReadyForWithdrawal(this.etherSigner, this.savETHPoolAddress, lpToken);
    }

    getdETHRequiredToIsolateWithdrawnKnot(blsPublicKey) {
        return _getdETHRequiredToIsolateWithdrawnKnot(this.etherSigner, this.savETHPoolAddress, blsPublicKey);
    }

    depositDETHForStaking(blsPublicKey, amount) {
        return _depositDETHForStaking(this.etherSigner, this.savETHPoolAddress, blsPublicKey, amount);
    }

    approveProtectedStakingPoolToTransferDETH(amount) {
        return _approveProtectedStakingPoolToTransferDETH(this.etherSigner, this.savETHPoolAddress, amount);
    }
}
