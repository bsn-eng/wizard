import { customErrors } from './constants';
import { getContractInstance } from './contracts';
import _ from 'lodash';
import { BigNumber, Bytes, Signer } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import { _add0x } from './utils';
import { FinalisedBeaconChainReportT, SignatureT } from '../types';

export const _updateTotalZecBLSPublicKeyLimit = async (signer: Signer | Provider, newLimit: string | BigNumber) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.updateTotalZecBLSPublicKeyLimit(newLimit);
};

export const _updateDAOAddress = async (signer: Signer | Provider, liquidStakingManagerAddress: string, previousDAOAddress: string, newDAOAddress: string) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.updateDAOAddress(
        _add0x(liquidStakingManagerAddress),
        _add0x(previousDAOAddress),
        _add0x(newDAOAddress)
    );
};

export const _appointEOARepresentative = async (signer: Signer | Provider, eoaRepresentative: string) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.appointEOARepresentative(_add0x(eoaRepresentative));
};

export const _appointZECRepresentative = async (signer: Signer | Provider, zecRepresentative: string) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.appointZECRepresentative(_add0x(zecRepresentative));
};

export const _addDAOToZECCommittee = async (signer: Signer | Provider, liquidStakingManagerAddress: string, daoAddress: string) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.addDAOToZECCommittee(
        _add0x(liquidStakingManagerAddress),
        _add0x(daoAddress)
    );
};

export const _removeDAOFromZECCommittee = async (signer: Signer | Provider, daoAddress: string) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.removeDAOFromZECCommittee(_add0x(daoAddress));
};

export const _whitelistNodeOperators = async (signer: Signer | Provider, liquidStakingManagerAddress: string, nodeOperator: string) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.whitelistNodeOperators(
        _add0x(nodeOperator),
        _add0x(liquidStakingManagerAddress)
    );
};

export const _batchWhitelistNodeOperators = async (signer: Signer | Provider, liquidStakingManagerAddress: string, nodeOperators: Array<string>) => {

    const contract = (await getContractInstance(signer)).zec();

    for(let i=0; i< nodeOperators.length; ++i) {
        nodeOperators[i] = _add0x(nodeOperators[i]);
    }

    return contract.batchWhitelistNodeOperators(
        nodeOperators,
        _add0x(liquidStakingManagerAddress)
    );
};

export const _banNodeOperator = async (signer: Signer | Provider, nodeOperator: string) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.banNodeOperator(_add0x(nodeOperator));
};

export const _depositETH = async (signer: Signer | Provider, amount: string, ethValue: BigNumber) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.depositETH(
        amount,
        { value: ethValue }
    );
};

export const _batchDepositETHForStaking = async (signer: Signer | Provider, blsPublicKeys: Array<string>, blsSignatures: Array<string>, eoaRepresentative: string, stakeGiantPoolFunds: boolean, ethValue: BigNumber) => {

    if(blsPublicKeys.length != blsSignatures.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
        blsSignatures[i] = _add0x(blsSignatures[i])
    }

    const contract = (await getContractInstance(signer)).zec();

    return contract.batchDepositETHForStaking(
        blsPublicKeys,
        blsSignatures,
        _add0x(eoaRepresentative),
        stakeGiantPoolFunds,
        { value: ethValue }
    );
};

export const _sendETHFromGiantPools = async (signer: Signer | Provider, liquidStakingManagerAddress: string, blsPublicKeys: Array<string>, blsSignatures: Array<string>, appointNewEOARepresentative: boolean) => {

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
        blsSignatures[i] = _add0x(blsSignatures[i])
    }

    const contract = (await getContractInstance(signer)).zec();

    return contract.sendETHFromGiantPools(
        _add0x(liquidStakingManagerAddress),
        blsPublicKeys,
        blsSignatures,
        appointNewEOARepresentative
    );
};

export const _callBackETH = async (signer: Signer | Provider, liquidStakingManagerAddress: string, blsPublicKey: string) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.callBackETH(
        _add0x(liquidStakingManagerAddress),
        _add0x(blsPublicKey)
    );
};

export const _recoverSigningKeyViaStakehouseProtocol = async (signer: Signer | Provider, liquidStakingManagerAddress: string, blsPublicKey: string, hAesPublicKey: string) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.recoverSigningKeyViaStakehouseProtocol(
        _add0x(liquidStakingManagerAddress),
        _add0x(blsPublicKey),
        _add0x(hAesPublicKey)
    );
};

export const _recoverSigningKeyViaZEC = async (signer: Signer | Provider, blsPublicKey: string, stakehouseAddress: string, hAesPublicKey: string) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.recoverSigningKeyViaZEC(
        _add0x(blsPublicKey),
        _add0x(stakehouseAddress),
        _add0x(hAesPublicKey)
    );
};

export const _rageQuit = async (signer: Signer | Provider, blsPublicKey: string, finalisedEpochReport: FinalisedBeaconChainReportT, reportSignature: SignatureT) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.rageQuit(
        _add0x(blsPublicKey),
        finalisedEpochReport,
        reportSignature
    );
};

export const _applyForNodeOperatorClaimingRewards = async (signer: Signer | Provider) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.applyForNodeOperatorClaimingRewards();
};

export const _claimRewards = async (signer: Signer | Provider, liquidStakingManagerAddresses: Array<string>, blsPublicKeys: Array<Array<string>>, recipient: string) => {

    if(liquidStakingManagerAddresses.length != blsPublicKeys.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<liquidStakingManagerAddresses.length; ++i) {
        liquidStakingManagerAddresses[i] = _add0x(liquidStakingManagerAddresses[i]);
        
        for(let j=0; j<blsPublicKeys[i].length; ++j) {
            blsPublicKeys[i][j] = _add0x(blsPublicKeys[i][j]);
        }
    }

    const contract = (await getContractInstance(signer)).zec();

    return contract.claimRewards(
        _add0x(recipient),
        liquidStakingManagerAddresses,
        blsPublicKeys
    );
};

export const _fetchZECRewards = async (signer: Signer | Provider, liquidStakingManagerAddresses: Array<string>, blsPublicKeys: Array<Array<string>>) => {

    if(liquidStakingManagerAddresses.length != blsPublicKeys.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<liquidStakingManagerAddresses.length; ++i) {
        liquidStakingManagerAddresses[i] = _add0x(liquidStakingManagerAddresses[i]);
        
        for(let j=0; j<blsPublicKeys[i].length; ++j) {
            blsPublicKeys[i][j] = _add0x(blsPublicKeys[i][j]);
        }
    }

    const contract = (await getContractInstance(signer)).zec();

    return contract.fetchZECRewards(
        liquidStakingManagerAddresses,
        blsPublicKeys
    )
};

export const _totalRewardsReceived = async (signer: Signer | Provider) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.totalRewardsReceived();
};

export const _getTotalLiquidityInActiveRangeForUser = async (signer: Signer | Provider, userAddress: string) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.getTotalLiquidityInActiveRangeForUser(_add0x(userAddress));
};

export const _depositRagequitETH = async (signer: Signer | Provider, blsPublicKey: string, ethValue: BigNumber) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.depositRagequitETH(
        _add0x(blsPublicKey),
        { value: ethValue }
    );
};

export const _claimRagequitETH = async (signer: Signer | Provider, blsPublicKey: string, recipient: string) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.claimRagequitETH(
        _add0x(blsPublicKey),
        _add0x(recipient)
    )
};

export const _previewNodeOperatorRewards = async (signer: Signer | Provider, nodeOperator: string) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.previewNodeOperatorRewards(_add0x(nodeOperator))
};

export const _slash = async (signer: Signer | Provider, stakehouseAddress: string, liquidStakingManagerAddress: string, blsPublicKey: string, finalisedEpochReport: FinalisedBeaconChainReportT, reportSignature: SignatureT, ethValue: BigNumber) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.slash(
        _add0x(stakehouseAddress),
        _add0x(liquidStakingManagerAddress),
        _add0x(blsPublicKey),
        finalisedEpochReport,
        reportSignature,
        { value: ethValue }
    );
};

export const _withdrawETH = async (signer: Signer | Provider, amount: string) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.withdrawETH(amount);
};
