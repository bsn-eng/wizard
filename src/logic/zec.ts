import { customErrors } from './constants';
import { getContractInstance } from './contracts';
import _ from 'lodash';
import { BigNumber, Bytes, Signer } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';

export const _updateTotalZecBLSPublicKeyLimit = async (signer: Signer | Provider, newLimit: string | BigNumber) => {

    const contract = (await getContractInstance(signer)).zec();

    return contract.updateTotalZecBLSPublicKeyLimit(newLimit);
};

export const _getSavETHVaultAddress = async (signer: Signer | Provider, liquidStakingManagerAddress: string) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.savETHVault();
};

export const _add0x = (data: string) => {

	if(!data) {
		throw customErrors.NULL_OR_UNDEFINED_VALUE;
	}

	if(_.isString(data)) {
		return (data.indexOf('0x') !== -1) ? data : '0x'.concat(data);		
	}

	return data;
};

export const _remove0x = (data: string) => {

	if(!data) {
		throw customErrors.NULL_OR_UNDEFINED_VALUE;
	}

	if(_.isString(data)) {
		return (data.indexOf('0x') !== -1) ? data.slice(2) : data;
	}

	return data;
};