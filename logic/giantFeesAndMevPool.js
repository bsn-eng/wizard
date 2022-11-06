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

module.exports = {
    _batchDepositETHForStaking
};
