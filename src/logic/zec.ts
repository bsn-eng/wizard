import { customErrors } from './constants';
import { getContractInstance } from './contracts';
import _ from 'lodash';
import { BigNumber, Bytes, Signer } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';

export const _updateTotalZecBLSPublicKeyLimit = async (signer: Signer | Provider, newLimit: string | BigNumber) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.updateTotalZecBLSPublicKeyLimit(newLimit);
};
