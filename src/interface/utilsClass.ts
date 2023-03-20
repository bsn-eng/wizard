import { Signer, Bytes, BigNumber } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
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
} from '../logic/utils.js';
import { AuthenticatedBalanceReportT, FinalisedBeaconChainReportT } from '../types.js';

export class UtilsSubPackage {

    etherSigner; liquidStakingManagerAddress;

    constructor(signer: Signer | Provider, liquidStakingManagerAddress: string) {
        this.etherSigner = signer;
        this.liquidStakingManagerAddress = liquidStakingManagerAddress;
    }

    add0x(data: string) {
        return _add0x(data);
    }

    remove0x(data: string) {
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

    isNodeRunnerWhitelisted(nodeRunnerAddress: string) {
        return _isNodeRunnerWhitelisted(this.etherSigner, this.liquidStakingManagerAddress, nodeRunnerAddress);
    }

    getSmartWalletRepresentative(smartWalletAddress: string) {
        return _getSmartWalletRepresentative(this.etherSigner, this.liquidStakingManagerAddress, smartWalletAddress);
    }

    getSmartWalletOfKnot(blsPublicKey: string) {
        return _getSmartWalletOfKnot(this.etherSigner, this.liquidStakingManagerAddress, blsPublicKey);
    }

    getSmartWalletOfNodeRunner(nodeRunnerAddress: string) {
        return _getSmartWalletOfNodeRunner(this.etherSigner, this.liquidStakingManagerAddress, nodeRunnerAddress);
    }

    getNodeRunnerOfSmartWallet(smartWalletAddress: string) {
        return _getNodeRunnerOfSmartWallet(this.etherSigner, this.liquidStakingManagerAddress, smartWalletAddress);
    }

    getStakedKnotsOfSmartWallet(smartWalletAddress: string) {
        return _getStakedKnotsOfSmartWallet(this.etherSigner, this.liquidStakingManagerAddress, smartWalletAddress);
    }

    getSmartWalletDormantRepresentative(smartWalletAddress: string) {
        return _getSmartWalletDormantRepresentative(this.etherSigner, this.liquidStakingManagerAddress, smartWalletAddress);
    }

    isNodeRunnerBanned(nodeRunnerAddress: string) {
        return _isNodeRunnerBanned(this.etherSigner, this.liquidStakingManagerAddress, nodeRunnerAddress);
    }

    getNumberOfKnots() {
        return _getNumberOfKnots(this.etherSigner, this.liquidStakingManagerAddress);
    }

    getDaoCommissionPercentage() {
        return _getDaoCommissionPercentage(this.etherSigner, this.liquidStakingManagerAddress);
    }

    isBLSPublicKeyBanned(blsPublicKey: string) {
        return _isBLSPublicKeyBanned(this.etherSigner, this.liquidStakingManagerAddress, blsPublicKey);
    }

    executeAsSmartWallet(nodeRunnerAddress: string, targetContractAddress: string, encodedFunctionData: string, ethValue: BigNumber) {
        return _executeAsSmartWallet(this.etherSigner, this.liquidStakingManagerAddress, nodeRunnerAddress, targetContractAddress, encodedFunctionData, ethValue);
    }

    deRegisterKnotsFromSyndicate(blsPublicKeys: Array<string>) {
        return _deRegisterKnotsFromSyndicate(this.etherSigner, this.liquidStakingManagerAddress, blsPublicKeys);
    }

    restoreFreeFloatingSharesToSmartWalletForRageQuit(smartWalletAddress: string, blsPublicKeys: Array<string>, amounts: Array<string | BigNumber>) {
        return _restoreFreeFloatingSharesToSmartWalletForRageQuit(this.etherSigner, this.liquidStakingManagerAddress, smartWalletAddress, blsPublicKeys, amounts);
    }

    updateDaoAddress(newDaoAddress: string) {
        return _updateDaoAddress(this.etherSigner, this.liquidStakingManagerAddress, newDaoAddress);
    }

    updateDaoRevenueCommission(newDaoRevenueCommission: BigNumber) {
        return _updateDaoRevenueCommission(this.etherSigner, this.liquidStakingManagerAddress, newDaoRevenueCommission);
    }

    updateStakehouseTicker(newStakehouseTicker: string) {
        return _updateStakehouseTicker(this.etherSigner, this.liquidStakingManagerAddress, newStakehouseTicker);
    }

    updateWhitelisting(newWhitelistingStatus: boolean) {
        return _updateWhitelisting(this.etherSigner, this.liquidStakingManagerAddress, newWhitelistingStatus);
    }

    updateNodeRunnerWhitelistStatus(nodeRunnerAddresses: Array<string>, newWhitelistingStatus: boolean) {
        return _updateNodeRunnerWhitelistStatus(this.etherSigner, this.liquidStakingManagerAddress, nodeRunnerAddresses, newWhitelistingStatus);
    }

    rotateEOARepresentative(newRepresentativeAddress: string) {
        return _rotateEOARepresentative(this.etherSigner, this.liquidStakingManagerAddress, newRepresentativeAddress);
    }

    rotateEOARepresentativeOfNodeRunner(nodeRunnerAddress: string, newRepresentativeAddress: string) {
        return _rotateEOARepresentativeOfNodeRunner(this.etherSigner, this.liquidStakingManagerAddress, nodeRunnerAddress, newRepresentativeAddress);
    }

    withdrawETHForKnot(recipientAddress: string, blsPublicKey: string) {
        return _withdrawETHForKnot(this.etherSigner, this.liquidStakingManagerAddress, recipientAddress, blsPublicKey);
    }

    rotateNodeRunnerOfSmartWallet(currentNodeRunner: string, newNodeRunner: string, wasCurrentNodeRunnerMalicious: boolean) {
        return _rotateNodeRunnerOfSmartWallet(this.etherSigner, this.liquidStakingManagerAddress, currentNodeRunner, newNodeRunner, wasCurrentNodeRunnerMalicious);
    }

    claimRewardsAsNodeRunner(recipientAddress: string, blsPublicKeys: Array<string>) {
        return _claimRewardsAsNodeRunner(this.etherSigner, this.liquidStakingManagerAddress, recipientAddress, blsPublicKeys);
    }

    registerBLSPublicKeys(blsPublicKeys: Array<string>, blsSignatures: Array<string>, representativeAddress: string, ethValue: BigNumber) {
        return _registerBLSPublicKeys(this.etherSigner, this.liquidStakingManagerAddress, blsPublicKeys, blsSignatures, representativeAddress, ethValue);
    }

    isKnotDeregistered(blsPublicKey: string) {
        return _isKnotDeregistered(this.etherSigner, this.liquidStakingManagerAddress, blsPublicKey);
    }

    stake(blsPublicKeys: Array<string>, cipherTexts: Array<string>, aesEncryptorKeys: Array<string>, encryptionSignatures: Array<AuthenticatedBalanceReportT>, dataRoots: Array<string>) {
        return _stake(this.etherSigner, this.liquidStakingManagerAddress, blsPublicKeys, cipherTexts, aesEncryptorKeys, encryptionSignatures, dataRoots);
    }

    mintDerivatives(blsPublicKeys: Array<string>, beaconChainReports: Array<FinalisedBeaconChainReportT>, authenticatedReportSignatures: Array<AuthenticatedBalanceReportT>) {
        return _mintDerivatives(this.etherSigner, this.liquidStakingManagerAddress, blsPublicKeys, beaconChainReports, authenticatedReportSignatures);
    }

    getNetworkFeeRecipient() {
        return _getNetworkFeeRecipient(this.etherSigner, this.liquidStakingManagerAddress);
    }
}
