const { getContractInstance } = require('./contracts');

const _getDAOAddressOfLSDN = async (signer, liquidStakingManagerAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.dao();
};

module.exports = {
    _getDAOAddressOfLSDN
}
