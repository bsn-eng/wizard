const { customErrors } = require('./constants');
const { getContractInstance } = require('./contracts');
const { _add0x } = require('./utils');

const _totalShares = async (signer, feesAndMevPoolAddress) => {

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.totalShares();
};

module.exports = {
    _totalShares
};
