const { customErrors } = require('./constants');
const { getContractInstance } = require('./contracts');
const { _add0x } = require('./utils');

const _batchDepositETHForStaking = async (signer, feesAndMevPoolAddresses, amounts, blsPublicKeys, stakeAmounts, ethValue) => {

    const arrayLength = feesAndMevPoolAddresses.length;
    if(arrayLength != amounts.length || arrayLength != blsPublicKeys.length || arrayLength != stakeAmounts) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<arrayLength; ++i) {
        const blsArray = blsPublicKeys[i];
        const amountArray = amounts[i];

        if(blsArray.length != amountArray.length) {
            throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
        }

        feesAndMevPoolAddresses[i] = _add0x(feesAndMevPoolAddresses);

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

const _claimRewards = async (signer, recipient, feesAndMevPoolAddresses, blsPublicKeys) => {

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

const _previewAccumulatedETH = async (signer, userAddress, feesAndMevPoolAddresses, lpTokens) => {

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

const _batchRotateLPTokens = async (signer, feesAndMevPoolAddresses, oldLPTokens, newLPTokens, amounts) => {

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

const _bringUnusedETHBackIntoGiantPool = async (signer, feesAndMevPoolAddresses, lpTokens, amounts) => {

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

const _updateAccumulatedETHPerLP = async (signer) => {

    const contract = (await getContractInstance(signer)).giantFeesAndMevPool();

    return contract.updateAccumulatedETHPerLP();
};

module.exports = {
    _batchDepositETHForStaking,
    _claimRewards,
    _previewAccumulatedETH,
    _batchRotateLPTokens,
    _bringUnusedETHBackIntoGiantPool,
    _updateAccumulatedETHPerLP
};
