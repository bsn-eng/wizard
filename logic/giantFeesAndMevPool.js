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

module.exports = {
    _batchDepositETHForStaking,
    _claimRewards,
    _previewAccumulatedETH
};
