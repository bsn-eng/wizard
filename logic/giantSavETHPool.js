const { customErrors } = require('./constants');
const { getContractInstance } = require('./contracts');
const { _add0x } = require('./utils');

const _batchDepositETHForStaking = async (signer, savETHVaultAddresses, amounts, blsPublicKeys, stakeAmounts) => {

    const arrayLength = savETHVaultAddresses.length;
    if(arrayLength != amounts.length || arrayLength != blsPublicKeys.length || arrayLength != stakeAmounts.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<blsPublicKeys.length; ++i) {
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
        stakeAmounts
    )
};

module.exports = {
    _batchDepositETHForStaking
};
