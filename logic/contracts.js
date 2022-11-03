const { ethers } = require('ethers');
const { _getChainSpecificConstants, _extractChainID } = require('./constants.js');

const LSDN_FACTORY_ABI = require('../ABI/lsdn_factory_abi.json');

const getContractInstance = async (signer) => {

    const chainID = await _extractChainID(signer);
    const values = _getChainSpecificConstants(chainID);

    const getLSDNFactory = () => new ethers.Contract(
        values.factoryAddresses.LSDN_FACTORY,
        LSDN_FACTORY_ABI,
        signer
    );

    return {
        lsdnFactory: getLSDNFactory
    }
}

module.exports = {
    getContractInstance
};
