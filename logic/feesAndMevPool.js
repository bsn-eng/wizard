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

module.exports = {
    _totalShares,
    _updateAccumulatedETHPerLP
};
