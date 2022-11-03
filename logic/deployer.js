const { utils, ethers } = require('ethers');
const { gql, request } = require('graphql-request');
const { getContractInstance } = require('./contracts');

const _deployNewLiquidStakingDerivativeNetwork = async (signer, daoAddress, stakehouseTicker, commission=null, gateKeeping=null) => {

    const contract = (await getContractInstance(signer)).lsdnFactory();

    return contract.deployNewLiquidStakingDerivativeNetwork(
        daoAddress,
        commission,
        gateKeeping,
        stakehouseTicker
    );
};

module.exports = {
    _deployNewLiquidStakingDerivativeNetwork
};
