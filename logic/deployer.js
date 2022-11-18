const { ethers } = require('ethers');
const { getContractInstance } = require('./contracts');

const _deployNewLiquidStakingDerivativeNetwork = async (signer, daoAddress, stakehouseTicker, commission=null, gateKeeping=null) => {

    if(!commission) {
        commission = ethers.BigNumber.from("0");
    }

    if(!gateKeeping) {
        gateKeeping = false;
    }

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
