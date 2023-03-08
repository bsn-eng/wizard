import {
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
    _updateNodeRunnerWhitelistStatus,
    _rotateEOARepresentativeOfNodeRunner,
    _withdrawETHForKnot,
    _rotateNodeRunnerOfSmartWallet,
    _claimRewardsAsNodeRunner,
    _registerBLSPublicKeys,
    _isKnotDeregistered,
    _stake,
    _mintDerivatives,
    _getNetworkFeeRecipient,
} from '../logic/utils.mjs';

export class UtilsSubPackage {

    constructor(signer, liquidStakingManagerAddress) {
        this.etherSigner = signer;
        this.liquidStakingManagerAddress = liquidStakingManagerAddress;
    }

    add0x(data) {
        return _add0x(data);
    }

    remove0x(data) {
        return _remove0x(data);
    }

    getDAOAddress() {
        return _getDAOAddress(this.etherSigner, this.liquidStakingManagerAddress);
    }

    getSavETHVaultAddress() {
        return _getSavETHVaultAddress(this.etherSigner, this.liquidStakingManagerAddress);
    }

    getFeesAndMEVPoolAddress() {
        return _getFeesAndMEVPoolAddress(this.etherSigner, this.liquidStakingManagerAddress);
    }

    getStakehouseTicker() {
        return _getStakehouseTicker(this.etherSigner, this.liquidStakingManagerAddress);
    }

    isWhitelistingEnabled() {
        return _isWhitelistingEnabled(this.etherSigner, this.liquidStakingManagerAddress);
    }

    isNodeRunnerWhitelisted(nodeRunnerAddress) {
        return _isNodeRunnerWhitelisted(this.etherSigner, this.liquidStakingManagerAddress, nodeRunnerAddress);
    }

    getSmartWalletRepresentative(smartWalletAddress) {
        return _getSmartWalletRepresentative(this.etherSigner, this.liquidStakingManagerAddress, smartWalletAddress);
    }

    getSmartWalletOfKnot(blsPublicKey) {
        return _getSmartWalletOfKnot(this.etherSigner, this.liquidStakingManagerAddress, blsPublicKey);
    }

    getSmartWalletOfNodeRunner(nodeRunnerAddress) {
        return _getSmartWalletOfNodeRunner(this.etherSigner, this.liquidStakingManagerAddress, nodeRunnerAddress);
    }

    getNodeRunnerOfSmartWallet(smartWalletAddress) {
        return _getNodeRunnerOfSmartWallet(this.etherSigner, this.liquidStakingManagerAddress, smartWalletAddress);
    }

    getStakedKnotsOfSmartWallet(smartWalletAddress) {
        return _getStakedKnotsOfSmartWallet(this.etherSigner, this.liquidStakingManagerAddress, smartWalletAddress);
    }

    getSmartWalletDormantRepresentative(smartWalletAddress) {
        return _getSmartWalletDormantRepresentative(this.etherSigner, this.liquidStakingManagerAddress, smartWalletAddress);
    }

    isNodeRunnerBanned(nodeRunnerAddress) {
        return _isNodeRunnerBanned(this.etherSigner, this.liquidStakingManagerAddress, nodeRunnerAddress);
    }

    getNumberOfKnots() {
        return _getNumberOfKnots(this.etherSigner, this.liquidStakingManagerAddress);
    }

    getDaoCommissionPercentage() {
        return _getDaoCommissionPercentage(this.etherSigner, this.liquidStakingManagerAddress);
    }

    isBLSPublicKeyBanned(blsPublicKey) {
        return _isBLSPublicKeyBanned(this.etherSigner, this.liquidStakingManagerAddress, blsPublicKey);
    }

    executeAsSmartWallet(nodeRunnerAddress, targetContractAddress, encodedFunctionData, ethValue) {
        return _executeAsSmartWallet(this.etherSigner, this.liquidStakingManagerAddress, nodeRunnerAddress, targetContractAddress, encodedFunctionData, ethValue);
    }

    deRegisterKnotsFromSyndicate(blsPublicKeys) {
        return _deRegisterKnotsFromSyndicate(this.etherSigner, this.liquidStakingManagerAddress, blsPublicKeys);
    }

    restoreFreeFloatingSharesToSmartWalletForRageQuit(smartWalletAddress, blsPublicKeys, amounts) {
        return _restoreFreeFloatingSharesToSmartWalletForRageQuit(this.etherSigner, this.liquidStakingManagerAddress, smartWalletAddress, blsPublicKeys, amounts);
    }

    updateDaoAddress(newDaoAddress) {
        return _updateDaoAddress(this.etherSigner, this.liquidStakingManagerAddress, newDaoAddress);
    }

    updateDaoRevenueCommission(newDaoRevenueCommission) {
        return _updateDaoRevenueCommission(this.etherSigner, this.liquidStakingManagerAddress, newDaoRevenueCommission);
    }

    updateStakehouseTicker(newStakehouseTicker) {
        return _updateStakehouseTicker(this.etherSigner, this.liquidStakingManagerAddress, newStakehouseTicker);
    }

    updateWhitelisting(newWhitelistingStatus) {
        return _updateWhitelisting(this.etherSigner, this.liquidStakingManagerAddress, newWhitelistingStatus);
    }

    updateNodeRunnerWhitelistStatus(nodeRunnerAddresses, newWhitelistingStatus) {
        return _updateNodeRunnerWhitelistStatus(this.etherSigner, this.liquidStakingManagerAddress, nodeRunnerAddresses, newWhitelistingStatus);
    }

    rotateEOARepresentative(newRepresentativeAddress) {
        return _rotateEOARepresentative(this.etherSigner, this.liquidStakingManagerAddress, newRepresentativeAddress);
    }

    rotateEOARepresentativeOfNodeRunner(nodeRunnerAddress, newRepresentativeAddress) {
        return _rotateEOARepresentativeOfNodeRunner(this.etherSigner, this.liquidStakingManagerAddress, nodeRunnerAddress, newRepresentativeAddress);
    }

    withdrawETHForKnot(recipientAddress, blsPublicKey) {
        return _withdrawETHForKnot(this.etherSigner, this.liquidStakingManagerAddress, recipientAddress, blsPublicKey);
    }

    rotateNodeRunnerOfSmartWallet(currentNodeRunner, newNodeRunner, wasCurrentNodeRunnerMalicious) {
        return _rotateNodeRunnerOfSmartWallet(this.etherSigner, this.liquidStakingManagerAddress, currentNodeRunner, newNodeRunner, wasCurrentNodeRunnerMalicious);
    }

    claimRewardsAsNodeRunner(recipientAddress, blsPublicKeys) {
        return _claimRewardsAsNodeRunner(this.etherSigner, this.liquidStakingManagerAddress, recipientAddress, blsPublicKeys);
    }

    registerBLSPublicKeys(blsPublicKeys, blsSignatures, representativeAddress, ethValue) {
        return _registerBLSPublicKeys(this.etherSigner, this.liquidStakingManagerAddress, blsPublicKeys, blsSignatures, representativeAddress, ethValue);
    }

    isKnotDeregistered(blsPublicKey) {
        return _isKnotDeregistered(this.etherSigner, this.liquidStakingManagerAddress, blsPublicKey);
    }

    stake(blsPublicKeys, cipherTexts, aesEncryptorKeys, encryptionSignatures, dataRoots) {
        return _stake(this.etherSigner, this.liquidStakingManagerAddress, blsPublicKeys, cipherTexts, aesEncryptorKeys, encryptionSignatures, dataRoots);
    }

    mintDerivatives(blsPublicKeys, beaconChainReports, authenticatedReportSignatures) {
        return _mintDerivatives(this.etherSigner, this.liquidStakingManagerAddress, blsPublicKeys, beaconChainReports, authenticatedReportSignatures);
    }

    getNetworkFeeRecipient() {
        return _getNetworkFeeRecipient(this.etherSigner, this.liquidStakingManagerAddress);
    }
}
