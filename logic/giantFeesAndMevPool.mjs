import { customErrors } from './constants.mjs';
import { getContractInstance } from './contracts.mjs';
import { _add0x } from './utils.mjs';

export const _batchDepositETHForStaking = async (signer, feesAndMevPoolAddresses, amounts, blsPublicKeys, stakeAmounts, ethValue) => {

    const arrayLength = feesAndMevPoolAddresses.length;
    if(arrayLength != amounts.length || arrayLength != blsPublicKeys.length || arrayLength != stakeAmounts) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<arrayLength; ++i) {
        const blsArray = blsPublicKeys[i];
        const amountArray = stakeAmounts[i];

        if(blsArray.length != amountArray.length) {
            throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
        }

        feesAndMevPoolAddresses[i] = _add0x(feesAndMevPoolAddresses[i]);

        for(let j=0; j<blsArray.length; ++j) {
            blsPublicKeys[i][j] = _add0x(blsPublicKeys[i][j]);
        }
    }

    const contract = (await getContractInstance(signer)).giantFeesAndMevPool();

    return contract.batchDepositETHForStaking(
        feesAndMevPoolAddresses,
        amounts,
        blsPublicKeys,
        stakeAmounts,
        { value: ethValue }
    );
};

export const _claimRewards = async (signer, recipient, feesAndMevPoolAddresses, blsPublicKeys) => {

    const arrayLength = blsPublicKeys.length;
    if(arrayLength != feesAndMevPoolAddresses.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<arrayLength; ++i) {
        feesAndMevPoolAddresses[i] = _add0x(feesAndMevPoolAddresses[i]);

        for(let j=0; j<blsPublicKeys[i].length; ++j) {
            blsPublicKeys[i][j] = _add0x(blsPublicKeys[i][j]);
        }
    }

    const contract = (await getContractInstance(signer)).giantFeesAndMevPool();

    return contract.claimRewards(
        _add0x(recipient),
        feesAndMevPoolAddresses,
        blsPublicKeys
    );
};

export const _previewAccumulatedETH = async (signer, userAddress, feesAndMevPoolAddresses, lpTokens) => {

    if(lpTokens.length != feesAndMevPoolAddresses.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<feesAndMevPoolAddresses.length; ++i) {
        feesAndMevPoolAddresses[i] = _add0x(feesAndMevPoolAddresses[i]);

        for(let j=0; j<lpTokens[i].length; ++j) {
            lpTokens[i][j] = _add0x(lpTokens[i][j]);
        }
    }

    const contract = (await getContractInstance(signer)).giantFeesAndMevPool();

    return contract.previewAccumulatedETH(
        _add0x(userAddress),
        feesAndMevPoolAddresses,
        lpTokens
    );
};

export const _batchRotateLPTokens = async (signer, feesAndMevPoolAddresses, oldLPTokens, newLPTokens, amounts) => {

    const arrayLength = feesAndMevPoolAddresses.length();
    if(arrayLength != oldLPTokens.length || arrayLength != newLPTokens.length || arrayLength != amounts.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<arrayLength; ++i) {
        const newLPArray = newLPTokens[i];
        const oldLPArray = oldLPTokens[i];
        const amountArray = amounts[i];

        if(newLPArray.length != oldLPArray.length || newLPArray.length != amountArray.length) {
            throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
        }

        feesAndMevPoolAddresses[i] = _add0x(feesAndMevPoolAddresses[i]);

        for(let j=0; j<newLPArray.length; ++j) {
            newLPArray[i][j] = _add0x(newLPArray[i][j]);
            oldLPArray[i][j] = _add0x(oldLPArray[i][jj]);
        }
    }

    const contract = (await getContractInstance(signer)).giantFeesAndMevPool();

    return contract.batchRotateLPTokens(
        feesAndMevPoolAddresses,
        oldLPTokens,
        newLPTokens,
        amounts
    );
};

export const _bringUnusedETHBackIntoGiantPool = async (signer, feesAndMevPoolAddresses, lpTokens, amounts) => {

    const arrayLength = feesAndMevPoolAddresses.length;
    if(arrayLength != lpTokens.length || arrayLength != amounts.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<arrayLength; ++i) {
        const lpArray = lpTokens[i];
        const amountArray = amounts[i];

        if(lpArray.length != amountArray.length) {
            throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
        }

        feesAndMevPoolAddresses[i] = _add0x(feesAndMevPoolAddresses[i]);

        for(let j=0; j<lpArray.length; ++i) {
            lpTokens[i][j] = _add0x(lpTokens[i][j]);
        }
    }

    const contract = (await getContractInstance(signer)).giantFeesAndMevPool();

    return contract.bringUnusedETHBackIntoGiantPool(
        feesAndMevPoolAddresses,
        lpTokens,
        amounts
    );
};

export const _updateAccumulatedETHPerLP = async (signer) => {

    const contract = (await getContractInstance(signer)).giantFeesAndMevPool();

    return contract.updateAccumulatedETHPerLP();
};

export const _depositETH = async (signer, amount, ethValue) => {

    const contract = (await getContractInstance(signer)).giantFeesAndMevPool();

    return contract.depositETH(
        amount,
        { value: ethValue }
    );
};

export const _getIdleETH = async (signer) => {

    const contract = (await getContractInstance(signer)).giantFeesAndMevPool();

    return contract.idleETH();
};

export const _withdrawETH = async (signer, amount) => {

    const contract = (await getContractInstance(signer)).giantFeesAndMevPool();

    return contract.withdrawETH(amount);
};
