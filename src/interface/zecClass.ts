import { BigNumber, Signer } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import {
    _updateTotalZecBLSPublicKeyLimit,
    _updateDAOAddress,
    _appointEOARepresentative,
    _appointZECRepresentative,
    _addDAOToZECCommittee,
    _removeDAOFromZECCommittee,
    _whitelistNodeOperators,
    _batchWhitelistNodeOperators,
    _banNodeOperator,
    _depositETH,
    _batchRegisterBLSPublicKeysAndETH,
    _sendETHFromGiantPools,
    _callBackETH,
    _recoverSigningKeyViaStakehouseProtocol,
    _recoverSigningKeyViaZEC,
    _rageQuit,
    _applyForNodeOperatorClaimingRewards,
    _claimRewards,
    _fetchZECRewards,
    _totalRewardsReceived,
    _getTotalLiquidityInActiveRangeForUser,
    _depositRagequitETH,
    _claimRagequitETH,
    _previewNodeOperatorRewards,
    _slash,
    _withdrawETH
} from '../logic/zec';
import { FinalisedBeaconChainReportT, SignatureT } from '../types';

export class ZECSubPackage {
    etherSigner;

    constructor(signer: Signer | Provider) {
		this.etherSigner = signer;
	}

    updateTotalZecBLSPublicKeyLimit(newLimit: string | BigNumber) {
        return _updateTotalZecBLSPublicKeyLimit(this.etherSigner, newLimit);
    }

    updateDAOAddress(liquidStakingManagerAddress: string, previousDAOAddress: string, newDAOAddress: string) {
        return _updateDAOAddress(this.etherSigner, liquidStakingManagerAddress, previousDAOAddress, newDAOAddress);
    }

    appointEOARepresentative(eoaRepresentative: string) {
        return _appointEOARepresentative(this.etherSigner, eoaRepresentative);
    }

    appointZECRepresentative(zecRepresentative: string) {
        return _appointZECRepresentative(this.etherSigner, zecRepresentative);
    }
    
    addDAOToZECCommittee(liquidStakingManagerAddress: string, daoAddress: string) {
        return _addDAOToZECCommittee(this.etherSigner, liquidStakingManagerAddress, daoAddress);
    }

    removeDAOFromZECCommittee(daoAddress: string) {
        return _removeDAOFromZECCommittee(this.etherSigner, daoAddress);
    }

    whitelistNodeOperators(liquidStakingManagerAddress: string, nodeOperator: string) {
        return _whitelistNodeOperators(this.etherSigner, liquidStakingManagerAddress, nodeOperator);
    }

    batchWhitelistNodeOperators(liquidStakingManagerAddress: string, nodeOperators: Array<string>) {
        _batchWhitelistNodeOperators(this.etherSigner, liquidStakingManagerAddress, nodeOperators);
    }

    banNodeOperator(nodeOperator: string) {
        return _banNodeOperator(this.etherSigner, nodeOperator);
    }

    depositETH(amount: string, ethValue: BigNumber) {
        return _depositETH(this.etherSigner, amount, ethValue);
    }

    batchRegisterBLSPublicKeysAndETH(blsPublicKeys: Array<string>, blsSignatures: Array<string>, eoaRepresentative: string, stakeGiantPoolFunds: boolean, ethValue: BigNumber) {
        return _batchRegisterBLSPublicKeysAndETH(this.etherSigner, blsPublicKeys, blsSignatures, eoaRepresentative, stakeGiantPoolFunds, ethValue)
    }

    sendETHFromGiantPools(liquidStakingManagerAddress: string, blsPublicKeys: Array<string>, blsSignatures: Array<string>, appointNewEOARepresentative: boolean) {
        return _sendETHFromGiantPools(this.etherSigner, liquidStakingManagerAddress, blsPublicKeys, blsSignatures, appointNewEOARepresentative);
    }

    callBackETH(liquidStakingManagerAddress: string, blsPublicKey: string) {
        return _callBackETH(this.etherSigner, liquidStakingManagerAddress, blsPublicKey);
    }

    recoverSigningKeyViaStakehouseProtocol(liquidStakingManagerAddress: string, blsPublicKey: string, hAesPublicKey: string) {
        _recoverSigningKeyViaStakehouseProtocol(this.etherSigner, liquidStakingManagerAddress, blsPublicKey, hAesPublicKey);
    }

    recoverSigningKeyViaZEC(blsPublicKey: string, stakehouseAddress: string, hAesPublicKey: string) {
        return _recoverSigningKeyViaZEC(this.etherSigner, blsPublicKey, stakehouseAddress, hAesPublicKey);
    }

    rageQuit(blsPublicKey: string, finalisedEpochReport: FinalisedBeaconChainReportT, reportSignature: SignatureT) {
        return _rageQuit(this.etherSigner, blsPublicKey, finalisedEpochReport, reportSignature);
    }

    applyForNodeOperatorClaimingRewards() {
        return _applyForNodeOperatorClaimingRewards(this.etherSigner);
    }

    claimRewards(liquidStakingManagerAddresses: Array<string>, blsPublicKeys: Array<Array<string>>, recipient: string) {
        return _claimRewards(this.etherSigner, liquidStakingManagerAddresses, blsPublicKeys, recipient);
    }

    fetchZECRewards(liquidStakingManagerAddresses: Array<string>, blsPublicKeys: Array<Array<string>>) {
        return _fetchZECRewards(this.etherSigner, liquidStakingManagerAddresses, blsPublicKeys);
    }

    totalRewardsReceived() {
        return _totalRewardsReceived(this.etherSigner);
    }

    getTotalLiquidityInActiveRangeForUser(userAddress: string) {
        return _getTotalLiquidityInActiveRangeForUser(this.etherSigner, userAddress);
    }

    depositRagequitETH(blsPublicKey: string, ethValue: BigNumber) {
        return _depositRagequitETH(this.etherSigner, blsPublicKey, ethValue);
    }

    claimRagequitETH(blsPublicKey: string, recipient: string) {
        return _claimRagequitETH(this.etherSigner, blsPublicKey, recipient);
    }

    previewNodeOperatorRewards(nodeOperator: string) {
        return _previewNodeOperatorRewards(this.etherSigner, nodeOperator);
    }

    slash(stakehouseAddress: string, liquidStakingManagerAddress: string, blsPublicKey: string, finalisedEpochReport: FinalisedBeaconChainReportT, reportSignature: SignatureT, ethValue: BigNumber) {
        return _slash(this.etherSigner, stakehouseAddress, liquidStakingManagerAddress, blsPublicKey, finalisedEpochReport, reportSignature, ethValue);
    }

    withdrawETH(amount: string) {
        return _withdrawETH(this.etherSigner, amount);
    }
}