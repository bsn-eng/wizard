import { BigNumber, ethers, Signer } from 'ethers';
import { getContractInstance } from './contracts.js';

export const _deployNewLiquidStakingDerivativeNetwork = async (
    signer: Signer,
    daoAddress: string,
    stakehouseTicker: string,
    commission?: BigNumber,
    gateKeeping?: boolean) => {

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
