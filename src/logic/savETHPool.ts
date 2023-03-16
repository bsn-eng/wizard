import { BigNumber, Bytes, Signer } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import { customErrors } from './constants.js';
import { getContractInstance } from './contracts.js';
import { _add0x } from './utils.js';

export const _getIndexOwnedByTheVault = async (signer: Signer | Provider, savETHVaultAddress: string) => {

    const contract = (await getContractInstance(signer)).savETHVault(savETHVaultAddress);

    return contract.indexOwnedByTheVault();
};

export const _batchDepositETHForStaking = async (signer: Signer | Provider, savETHVaultAddress: string, blsPublicKeys: Array<string | Bytes>, amounts: Array<string | BigNumber>, ethValue: BigNumber) => {

    if(blsPublicKeys.length != amounts.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
    }

    const contract = (await getContractInstance(signer)).savETHVault(savETHVaultAddress);

    return contract.batchDepositETHForStaking(
        blsPublicKeys,
        amounts,
        { value: ethValue }
    );
};

export const _depositETHForStaking = async (signer: Signer | Provider, savETHVaultAddress: string, blsPublicKey: string | Bytes, amount: string | BigNumber, ethValue: BigNumber) => {

    const contract = (await getContractInstance(signer)).savETHVault(savETHVaultAddress);

    return contract.depositETHForStaking(
        _add0x(blsPublicKey),
        amount,
        { value: ethValue }
    );
};

export const _burnLPTokensByBLS = async (signer: Signer | Provider, savETHVaultAddress: string, blsPublicKeys: Array<string | Bytes>, amounts: Array<string | BigNumber>) => {

    if(blsPublicKeys.length != amounts.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
    }

    const contract = (await getContractInstance(signer)).savETHVault(savETHVaultAddress);

    return contract.burnLPTokensByBLS(
        blsPublicKeys,
        amounts
    );
};

export const _burnLPTokens = async (signer: Signer | Provider, savETHVaultAddress: string, lpTokens: Array<string>, amounts: Array<string | BigNumber>) => {

    if(lpTokens.length != amounts.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<lpTokens.length; ++i) {
        lpTokens[i] = _add0x(lpTokens[i]);
    }
    
    const contract = (await getContractInstance(signer)).savETHVault(savETHVaultAddress);

    return contract.burnLPTokens(
        lpTokens,
        amounts
    );
};

export const _burnLPToken = async (signer: Signer | Provider, savETHVaultAddress: string, lpToken: string, amount: string | BigNumber) => {

    const contract = (await getContractInstance(signer)).savETHVault(savETHVaultAddress);

    return contract.burnLPToken(
        _add0x(lpToken),
        amount
    );
};

export const _isDETHReadyForWithdrawal = async (signer: Signer | Provider, savETHVaultAddress: string, lpToken: string) => {

    const contract = (await getContractInstance(signer)).savETHVault(savETHVaultAddress);

    return contract.isDETHReadyForWithdrawal(
        lpToken
    );
};

export const _depositDETHForStaking = async (signer: Signer | Provider, savETHVaultAddress: string, blsPublicKey: string | Bytes, amount: string | BigNumber) => {

    const contract = (await getContractInstance(signer)).savETHVault(savETHVaultAddress);

    return contract.depositDETHForStaking(
        _add0x(blsPublicKey),
        amount
    );
};

export const _getdETHRequiredToIsolateWithdrawnKnot = async (signer: Signer | Provider, savETHVaultAddress: string, blsPublicKey: string | Bytes) => {

    const contract = (await getContractInstance(signer)).savETHVault(savETHVaultAddress);

    return contract.dETHRequiredToIsolateWithdrawnKnot(
        _add0x(blsPublicKey)
    );
};

export const _approveProtectedStakingPoolToTransferDETH = async (signer: Signer | Provider, spender: string, amount: string | BigNumber) => {

    const contract = (await getContractInstance(signer)).dETH();

    return contract.approve(
        _add0x(spender),
        amount
    );
};
