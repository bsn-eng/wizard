const { customErrors } = require('./constants');
const { getContractInstance } = require('./contracts');
const { _add0x } = require('./utils');

const _batchDepositETHForStaking = async (signer, savETHVaultAddresses, amounts, blsPublicKeys, stakeAmounts, ethValue) => {

    const arrayLength = savETHVaultAddresses.length;
    if(arrayLength != amounts.length || arrayLength != blsPublicKeys.length || arrayLength != stakeAmounts.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<arrayLength; ++i) {
        const blsArray = blsPublicKeys[i];
        const stakeArray = stakeAmounts[i];

        if(blsArray.length != stakeArray.length) {
            throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
        }

        savETHVaultAddresses[i] = _add0x(savETHVaultAddresses);

        for(let j=0; j<blsArray.length; ++j) {
            blsPublicKeys[i][j] = _add0x(blsPublicKeys[i][j]);
        }
    }

    const contract = (await getContractInstance(signer)).giantSavETHPool();

    return contract.batchDepositETHForStaking(
        savETHVaultAddresses,
        amounts,
        blsPublicKeys,
        stakeAmounts,
        { value: ethValue }
    )
};

const _withdrawDETH = async (signer, savETHVaultAddresses, lpTokens, amounts) => {

    const arrayLength = savETHVaultAddresses.length;
    if(arrayLength != lpTokens.length || arrayLength != amounts.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<arrayLength; ++i) {
        const lpArray = lpTokens[i];
        const amountArray = amounts[i];

        if(lpArray.length != amountArray.length) {
            throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
        }

        for(let j=0; j<lpArray.length; ++j) {
            lpTokens[i][j] = _add0x(lpTokens[i][j]);
        }
    }

    const contract = (await getContractInstance(signer)).giantSavETHPool();

    return contract.withdrawDETH(
        savETHVaultAddresses,
        lpTokens,
        amounts
    );
};

module.exports = {
    _batchDepositETHForStaking,
    _withdrawDETH
};
