const {
    _add0x,
    _remove0x,
    _getDAOAddress,
    _getSavETHVaultAddress,
    _getFeesAndMEVPoolAddress,
    _getStakehouseTicker,
    _isWhitelistingEnabled,
    _isNodeRunnerWhitelisted,
    _getSmartWalletRepresentative,
    _getSmartWalletOfKnot,
    _getSmartWalletOfNodeRunner,
    _getNodeRunnerOfSmartWallet,
    _getStakedKnotsOfSmartWallet,
    _getSmartWalletDormantRepresentative,
    _isNodeRunnerBanned,
    _getNumberOfKnots,
    _getDaoCommissionPercentage,
    _isBLSPublicKeyBanned,
    _executeAsSmartWallet,
    _deRegisterKnotsFromSyndicate,
    _restoreFreeFloatingSharesToSmartWalletForRageQuit,
    _updateDaoAddress,
    _updateDaoRevenueCommission,
    _updateStakehouseTicker,
    _updateWhitelisting,
    _rotateEOARepresentative,
    _rotateEOARepresentativeOfNodeRunner,
    _withdrawETHForKnot,
    _rotateNodeRunnerOfSmartWallet,
    _claimRewardsAsNodeRunner,
    _registerBLSPublicKeys,
    _isKnotDeregistered,
    _stake,
    _mintDerivatives,
    _getNetworkFeeRecipient
} = require('../logic/utils');

class UtilsSubPackage {

    constructor(signer) {
        this.etherSigner = signer;
    }

    add0x(data) {
        return _add0x(data);
    }

    remove0x(data) {
        return _remove0x(data);
    }

    getDAOAddress(liquidStakingManagerAddress) {
        return _getDAOAddress(this.etherSigner, liquidStakingManagerAddress);
    }

    getSavETHVaultAddress(liquidStakingManagerAddress) {
        return _getSavETHVaultAddress(this.etherSigner, liquidStakingManagerAddress);
    }

    getFeesAndMEVPoolAddress(liquidStakingManagerAddress) {
        return _getFeesAndMEVPoolAddress(this.etherSigner, liquidStakingManagerAddress);
    }

    getStakehouseTicker(liquidStakingManagerAddress) {
        return _getStakehouseTicker(this.etherSigner, liquidStakingManagerAddress);
    }

    isWhitelistingEnabled(liquidStakingManagerAddress) {
        return _isWhitelistingEnabled(this.etherSigner, liquidStakingManagerAddress);
    }

    isNodeRunnerWhitelisted(liquidStakingManagerAddress, nodeRunnerAddress) {
        return _isNodeRunnerWhitelisted(this.etherSigner, liquidStakingManagerAddress, nodeRunnerAddress);
    }

    getSmartWalletRepresentative(liquidStakingManagerAddress, smartWalletAddress) {
        return _getSmartWalletRepresentative(this.etherSigner, liquidStakingManagerAddress, smartWalletAddress);
    }

    getSmartWalletOfKnot(liquidStakingManagerAddress, blsPublicKey) {
        return _getSmartWalletOfKnot(this.etherSigner, liquidStakingManagerAddress, blsPublicKey);
    }

    getSmartWalletOfNodeRunner(liquidStakingManagerAddress, nodeRunnerAddress) {
        return _getSmartWalletOfNodeRunner(this.etherSigner, liquidStakingManagerAddress, nodeRunnerAddress);
    }

    getNodeRunnerOfSmartWallet(liquidStakingManagerAddress, smartWalletAddress) {
        return _getNodeRunnerOfSmartWallet(this.etherSigner, liquidStakingManagerAddress, smartWalletAddress);
    }

    getStakedKnotsOfSmartWallet(liquidStakingManagerAddress, smartWalletAddress) {
        return _getStakedKnotsOfSmartWallet(this.etherSigner, liquidStakingManagerAddress, smartWalletAddress);
    }

    getSmartWalletDormantRepresentative(liquidStakingManagerAddress, smartWalletAddress) {
        return _getSmartWalletDormantRepresentative(this.etherSigner, liquidStakingManagerAddress, smartWalletAddress);
    }

    isNodeRunnerBanned(liquidStakingManagerAddress, nodeRunnerAddress) {
        return _isNodeRunnerBanned(this.etherSigner, liquidStakingManagerAddress, nodeRunnerAddress);
    }

    getNumberOfKnots(liquidStakingManagerAddress) {
        return _getNumberOfKnots(this.etherSigner, liquidStakingManagerAddress);
    }

    getDaoCommissionPercentage(liquidStakingManagerAddress) {
        return _getDaoCommissionPercentage(this.etherSigner, liquidStakingManagerAddress);
    }

    isBLSPublicKeyBanned(liquidStakingManagerAddress, blsPublicKey) {
        return _isBLSPublicKeyBanned(this.etherSigner, liquidStakingManagerAddress, blsPublicKey);
    }

    executeAsSmartWallet(liquidStakingManagerAddress, nodeRunnerAddress, targetContractAddress, encodedFunctionData, ethValue) {
        return _executeAsSmartWallet(this.etherSigner, liquidStakingManagerAddress, nodeRunnerAddress, targetContractAddress, encodedFunctionData, ethValue);
    }

    deRegisterKnotsFromSyndicate(liquidStakingManagerAddress, blsPublicKeys) {
        return _deRegisterKnotsFromSyndicate(this.etherSigner, liquidStakingManagerAddress, blsPublicKeys);
    }

    restoreFreeFloatingSharesToSmartWalletForRageQuit(liquidStakingManagerAddress, smartWalletAddress, blsPublicKeys, amounts) {
        return _restoreFreeFloatingSharesToSmartWalletForRageQuit(this.etherSigner, liquidStakingManagerAddress, smartWalletAddress, blsPublicKeys, amounts);
    }

    updateDaoAddress(liquidStakingManagerAddress, newDaoAddress) {
        return _updateDaoAddress(this.etherSigner, liquidStakingManagerAddress, newDaoAddress);
    }

    updateDaoRevenueCommission(liquidStakingManagerAddress, newDaoRevenueCommission) {
        return _updateDaoRevenueCommission(this.etherSigner, liquidStakingManagerAddress, newDaoRevenueCommission);
    }

    updateStakehouseTicker(liquidStakingManagerAddress, newStakehouseTicker) {
        return _updateStakehouseTicker(this.etherSigner, liquidStakingManagerAddress, newStakehouseTicker);
    }

    updateWhitelisting(liquidStakingManagerAddress, newWhitelistingStatus) {
        return _updateWhitelisting(this.etherSigner, liquidStakingManagerAddress, newWhitelistingStatus);
    }

    rotateEOARepresentative(liquidStakingManagerAddress, newRepresentativeAddress) {
        return _rotateEOARepresentative(this.etherSigner, liquidStakingManagerAddress, newRepresentativeAddress);
    }

    rotateEOARepresentativeOfNodeRunner(liquidStakingManagerAddress, nodeRunnerAddress, newRepresentativeAddress) {
        return _rotateEOARepresentativeOfNodeRunner(this.etherSigner, liquidStakingManagerAddress, nodeRunnerAddress, newRepresentativeAddress);
    }

    withdrawETHForKnot(liquidStakingManagerAddress, recipientAddress, blsPublicKey) {
        return _withdrawETHForKnot(this.etherSigner, liquidStakingManagerAddress, recipientAddress, blsPublicKey);
    }

    rotateNodeRunnerOfSmartWallet(liquidStakingManagerAddress, currentNodeRunner, newNodeRunner, wasCurrentNodeRunnerMalicious) {
        return _rotateNodeRunnerOfSmartWallet(this.etherSigner, liquidStakingManagerAddress, currentNodeRunner, newNodeRunner, wasCurrentNodeRunnerMalicious);
    }

    claimRewardsAsNodeRunner(liquidStakingManagerAddress, recipientAddress, blsPublicKeys) {
        return _claimRewardsAsNodeRunner(this.etherSigner, liquidStakingManagerAddress, recipientAddress, blsPublicKeys);
    }

    registerBLSPublicKeys(liquidStakingManagerAddress, blsPublicKeys, blsSignatures, representativeAddress) {
        return _registerBLSPublicKeys(this.etherSigner, liquidStakingManagerAddress, blsPublicKeys, blsSignatures, representativeAddress);
    }

    isKnotDeregistered(liquidStakingManagerAddress, blsPublicKey) {
        return _isKnotDeregistered(this.etherSigner, liquidStakingManagerAddress, blsPublicKey);
    }

    stake(liquidStakingManagerAddress, blsPublicKeys, cipherTexts, aesEncryptorKeys, encryptionSignatures, dataRoots) {
        return _stake(this.etherSigner, liquidStakingManagerAddress, blsPublicKeys, cipherTexts, aesEncryptorKeys, encryptionSignatures, dataRoots);
    }

    mintDerivatives(liquidStakingManagerAddress, blsPublicKeys, beaconChainReports, authenticatedReportSignatures) {
        return _mintDerivatives(this.etherSigner, liquidStakingManagerAddress, blsPublicKeys, beaconChainReports, authenticatedReportSignatures);
    }

    getNetworkFeeRecipient(liquidStakingManagerAddress) {
        return _getNetworkFeeRecipient(this.etherSigner, liquidStakingManagerAddress);
    }
}

module.exports = {
    UtilsSubPackage
};
