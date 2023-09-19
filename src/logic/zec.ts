import { customErrors } from './constants';
import { getContractInstance } from './contracts';
import _ from 'lodash';
import { BigNumber, Bytes, Signer } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import { _add0x } from './utils';

export const _updateTotalZecBLSPublicKeyLimit = async (signer: Signer | Provider, newLimit: string | BigNumber) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.updateTotalZecBLSPublicKeyLimit(newLimit);
};

export const _updateDAOAddress = async (signer: Signer | Provider, liquidStakingManagerAddress: string, previousDAOAddress: string, newDAOAddress: string) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.updateDAOAddress(
        _add0x(liquidStakingManagerAddress),
        _add0x(previousDAOAddress),
        _add0x(newDAOAddress)
    );
};
