import { Signer } from 'ethers';
import { customErrors } from './constants.js';
import { getContractInstance } from './contracts.js';
import { _add0x } from './utils.js';

export const _totalShares = async (signer: Signer, feesAndMevPoolAddress: string) => {

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.totalShares();
};

export const _updateAccumulatedETHPerLP = async (signer: Signer, feesAndMevPoolAddress: string) => {

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.updateAccumulatedETHPerLP();
};

export const _batchDepositETHForStaking = async (signer: Signer, feesAndMevPoolAddress: string, blsPublicKeys, amounts, ethValue) => {

    if(blsPublicKeys.length != amounts.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
    }

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.batchDepositETHForStaking(
        blsPublicKeys,
        amounts,
        { value: ethValue }
    );
};

export const _depositETHForStaking = async (signer: Signer, feesAndMevPoolAddress: string, blsPublicKey: string, amount, ethValue) => {

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.depositETHForStaking(
        _add0x(blsPublicKey),
        amount,
        { value: ethValue }
    );
};

export const _burnLPTokensForETHByBLS = async (signer: Signer, feesAndMevPoolAddress: string, blsPublicKeys, amounts) => {

    if(blsPublicKeys.length != amounts.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
    }

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.burnLPTokensForETHByBLS(
        blsPublicKeys,
        amounts
    );
};

export const _burnLPTokensForETH = async (signer: Signer, feesAndMevPoolAddress: string, lpTokens, amounts) => {

    if(lpTokens.length != amounts.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<lpTokens.length; ++i) {
        lpTokens[i] = _add0x(lpTokens[i]);
    }

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.burnLPTokensForETH(
        lpTokens,
        amounts
    );
};

export const _burnLPTokenForETH = async (signer: Signer, feesAndMevPoolAddress: string, lpToken, amount) => {

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.burnLPForETH(
        _add0x(lpToken),
        amount
    );
};

export const _claimRewards = async (signer: Signer, feesAndMevPoolAddress: string, recipient: string, blsPublicKeys) => {

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
    }

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.claimRewards(
        _add0x(recipient),
        blsPublicKeys
    );
};

export const _batchPreviewAccumulatedETHByBLSKeys = async (signer: Signer, feesAndMevPoolAddress: string, userAddress: string, blsPublicKeys) => {

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
    }

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.batchPreviewAccumulatedETHByBLSKeys(
        _add0x(userAddress),
        blsPublicKeys
    );
};

export const _batchPreviewAccumulatedETH = async (signer: Signer, feesAndMevPoolAddress: string, userAddress: string, lpTokens) => {

    for(let i=0; i<lpTokens.length; ++i) {
        lpTokens[i] = _add0x(lpTokens[i]);
    }

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.batchPreviewAccumulatedETH(
        _add0x(userAddress),
        lpTokens
    );
};

export const _previewAccumulatedETH = async (signer: Signer, feesAndMevPoolAddress: string, userAddress: string, lpToken) => {

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.previewAccumulatedETH(
        _add0x(userAddress),
        _add0x(lpToken)
    );
};

export const _claimFundsFromSyndicateForDistribution = async (signer: Signer, feesAndMevPoolAddress: string, blsPublicKeys) => {

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
    }

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.claimFundsFromSyndicateForDistribution(
        blsPublicKeys
    );
};
