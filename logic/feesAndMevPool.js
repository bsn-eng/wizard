const { customErrors } = require('./constants');
const { getContractInstance } = require('./contracts');
const { _add0x } = require('./utils');

const _totalShares = async (signer, feesAndMevPoolAddress) => {

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.totalShares();
};

const _updateAccumulatedETHPerLP = async (signer, feesAndMevPoolAddress) => {

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.updateAccumulatedETHPerLP();
};

const _batchDepositETHForStaking = async (signer, feesAndMevPoolAddress, blsPublicKeys, amounts, ethValue) => {

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

module.exports = {
    _totalShares,
    _updateAccumulatedETHPerLP,
    _batchDepositETHForStaking
};
