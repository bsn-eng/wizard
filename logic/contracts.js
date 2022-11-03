const { ethers } = require('ethers');
const { _getChainSpecificConstants, _extractChainID } = require('./constants.js');

const LSDN_FACTORY_ABI = require('../ABI/lsdn_factory_abi.json');
const LIQUID_STAKING_MANAGER_ABI = require('../ABI/liquid_staking_manager_abi.json');

const getContractInstance = async (signer) => {

    const chainID = await _extractChainID(signer);
    const values = _getChainSpecificConstants(chainID);

    const getLSDNFactory = () => new ethers.Contract(
        values.factoryAddresses.LSDN_FACTORY,
        LSDN_FACTORY_ABI,
        signer
    );

    const getLiquidStakingManager = (liquidStakingManagerAddress) => new ethers.Contract(
        liquidStakingManagerAddress,
        LIQUID_STAKING_MANAGER_ABI,
        signer
    );

    return {
        lsdnFactory: getLSDNFactory,
        liquidStakingManager: getLiquidStakingManager
    }
}

module.exports = {
    getContractInstance
};
