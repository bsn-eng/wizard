const { ethers } = require('ethers');
const { _getChainSpecificConstants, _extractChainID } = require('./constants.js');

const LSDN_FACTORY_ABI = require('../ABI/lsdn_factory_abi.json');
const LIQUID_STAKING_MANAGER_ABI = require('../ABI/liquid_staking_manager_abi.json');
const SAVETH_VAULT_ABI = require('../ABI/saveth_vault_abi.json');
const STAKING_FUNDS_VAULT_ABI = require('../ABI/staking_funds_vault_abi.json');

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

    const getSavETHVault = (savETHVaultAddress) => new ethers.Contract(
        savETHVaultAddress,
        SAVETH_VAULT_ABI,
        signer
    );

    const getFeesAndMevPool = (feesAndMevPoolAddress) => new ethers.Contract(
        feesAndMevPoolAddress,
        STAKING_FUNDS_VAULT_ABI,
        signer
    );

    return {
        lsdnFactory: getLSDNFactory,
        liquidStakingManager: getLiquidStakingManager,
        savETHVault: getSavETHVault,
        feesAndMevPool: getFeesAndMevPool
    }
}

module.exports = {
    getContractInstance
};
