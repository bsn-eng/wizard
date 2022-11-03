const { getContractInstance } = require('./contracts');

const _getDAOAddress = async (signer, liquidStakingManagerAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.dao();
};

const _getStakehouseTicker = async (signer, liquidStakingManagerAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.stakehouseTicker();
};

module.exports = {
    _getDAOAddress,
    _getStakehouseTicker
}
