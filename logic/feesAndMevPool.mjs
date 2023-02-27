import { customErrors } from './constants.mjs';
import { getContractInstance } from './contracts.mjs';
import { _add0x } from './utils.mjs';

export const _totalShares = async (signer, feesAndMevPoolAddress) => {

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.totalShares();
};

export const _updateAccumulatedETHPerLP = async (signer, feesAndMevPoolAddress) => {

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.updateAccumulatedETHPerLP();
};

export const _batchDepositETHForStaking = async (signer, feesAndMevPoolAddress, blsPublicKeys, amounts, ethValue) => {

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

export const _depositETHForStaking = async (signer, feesAndMevPoolAddress, blsPublicKey, amount, ethValue) => {

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.depositETHForStaking(
        _add0x(blsPublicKey),
        amount,
        { value: ethValue }
    );
};

export const _burnLPTokensForETHByBLS = async (signer, feesAndMevPoolAddress, blsPublicKeys, amounts) => {

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

export const _burnLPTokensForETH = async (signer, feesAndMevPoolAddress, lpTokens, amounts) => {

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

export const _burnLPTokenForETH = async (signer, feesAndMevPoolAddress, lpToken, amount) => {

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.burnLPForETH(
        _add0x(lpToken),
        amount
    );
};

export const _claimRewards = async (signer, feesAndMevPoolAddress, recipient, blsPublicKeys) => {

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
    }

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.claimRewards(
        _add0x(recipient),
        blsPublicKeys
    );
};

export const _batchPreviewAccumulatedETHByBLSKeys = async (signer, feesAndMevPoolAddress, userAddress, blsPublicKeys) => {

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
    }

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.batchPreviewAccumulatedETHByBLSKeys(
        _add0x(userAddress),
        blsPublicKeys
    );
};

export const _batchPreviewAccumulatedETH = async (signer, feesAndMevPoolAddress, userAddress, lpTokens) => {

    for(let i=0; i<lpTokens.length; ++i) {
        lpTokens[i] = _add0x(lpTokens[i]);
    }

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.batchPreviewAccumulatedETH(
        _add0x(userAddress),
        lpTokens
    );
};

export const _previewAccumulatedETH = async (signer, feesAndMevPoolAddress, userAddress, lpToken) => {

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.previewAccumulatedETH(
        _add0x(userAddress),
        _add0x(lpToken)
    );
};

export const _claimFundsFromSyndicateForDistribution = async (signer, feesAndMevPoolAddress, blsPublicKeys) => {

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
    }

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.claimFundsFromSyndicateForDistribution(
        blsPublicKeys
    );
};
