const { ethers } = require('ethers');
const { _getChainSpecificConstants, _extractChainID } = require('./constants.js');
const { lsdContracts } = require('@blockswaplab/lsd-protocol-abis');

const getContractInstance = async (signer) => {

    const chainID = await _extractChainID(signer);
    const values = _getChainSpecificConstants(chainID);

    const getLSDNFactory = () => new ethers.Contract(
        values.factoryAddresses.LSDN_FACTORY,
        lsdContracts.LSDN_FACTORY,
        signer
    );

    const getLiquidStakingManager = (liquidStakingManagerAddress) => new ethers.Contract(
        liquidStakingManagerAddress,
        lsdContracts.LIQUID_STAKING_MANAGER,
        signer
    );

    const getSavETHVault = (savETHVaultAddress) => new ethers.Contract(
        savETHVaultAddress,
        lsdContracts.PROTECTED_STAKING,
        signer
    );

    const getFeesAndMevPool = (feesAndMevPoolAddress) => new ethers.Contract(
        feesAndMevPoolAddress,
        lsdContracts.FEES_AND_MEV,
        signer
    );

    const getGiantSavETHPool = () => new ethers.Contract(
        values.factoryAddresses.GIANT_SAVETH_POOL,
        lsdContracts.GIANT_PROTECTED_STAKING,
        signer
    );

    const getGiantFeesAndMevPool = () => new ethers.Contract (
        values.factoryAddresses.GIANT_FEES_AND_MEV_POOL,
        lsdContracts.GIANT_FEES_AND_MEV,
        signer
    );

    const getSyndicate = (syndicateAddress) => new ethers.Contract(
        syndicateAddress,
        lsdContracts.SYNDICATE,
        signer
    );

    const getSmartWallet = (smartWalletAddress) => new ethers.Contract(
        smartWalletAddress,
        lsdContracts.SMART_WALLET,
        signer
    );

    const getSmartWalletNamingRegistry = () => new ethers.Contract(
        values.factoryAddresses.SMART_WALLET_NAMING_REGISTRY,
        lsdContracts.SMART_WALLET_NAMING_REGISTRY,
        signer
    );

    return {
        lsdnFactory: getLSDNFactory,
        liquidStakingManager: getLiquidStakingManager,
        savETHVault: getSavETHVault,
        feesAndMevPool: getFeesAndMevPool,
        giantSavETHPool: getGiantSavETHPool,
        giantFeesAndMevPool: getGiantFeesAndMevPool,
        syndicate: getSyndicate,
        smartWallet: getSmartWallet,
        smartWalletNamingRegistry: getSmartWalletNamingRegistry
    }
}

module.exports = {
    getContractInstance
};
