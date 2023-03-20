import { BigNumber, Bytes, Signer } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import { customErrors } from './constants.js';
import { getContractInstance } from './contracts.js';
import { _add0x } from './utils.js';

export const _batchDepositETHForStaking = async (signer: Signer | Provider, savETHVaultAddresses: Array<string>, amounts: Array<string | BigNumber>, blsPublicKeys: Array<Array<string>>, stakeAmounts: Array<Array<string | BigNumber>>, ethValue: BigNumber) => {

    const arrayLength = savETHVaultAddresses.length;
    if(arrayLength != amounts.length || arrayLength != blsPublicKeys.length || arrayLength != stakeAmounts.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<arrayLength; ++i) {
        const blsArray = blsPublicKeys[i];
        const stakeArray = stakeAmounts[i];

        if(blsArray.length != stakeArray.length) {
            throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
        }

        savETHVaultAddresses[i] = _add0x(savETHVaultAddresses[i]);

        for(let j=0; j<blsArray.length; ++j) {
            blsPublicKeys[i][j] = _add0x(blsPublicKeys[i][j]);
        }
    }

    const contract = (await getContractInstance(signer)).giantSavETHPool();

    return contract.batchDepositETHForStaking(
        savETHVaultAddresses,
        amounts,
        blsPublicKeys,
        stakeAmounts,
        { value: ethValue }
    )
};

export const _withdrawDETH = async (signer: Signer | Provider, savETHVaultAddresses: Array<string>, lpTokens: Array<Array<string>>, amounts: Array<Array<string | BigNumber>>) => {

    const arrayLength = savETHVaultAddresses.length;
    if(arrayLength != lpTokens.length || arrayLength != amounts.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<arrayLength; ++i) {
        const lpArray = lpTokens[i];
        const amountArray = amounts[i];

        if(lpArray.length != amountArray.length) {
            throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
        }

        savETHVaultAddresses[i] = _add0x(savETHVaultAddresses[i]);

        for(let j=0; j<lpArray.length; ++j) {
            lpTokens[i][j] = _add0x(lpTokens[i][j]);
        }
    }

    const contract = (await getContractInstance(signer)).giantSavETHPool();

    return contract.withdrawDETH(
        savETHVaultAddresses,
        lpTokens,
        amounts
    );
};

export const _batchRotateLPTokens = async (signer: Signer | Provider, savETHVaultAddresses: Array<string>, oldLPTokens: Array<Array<string>>, newLPTokens: Array<Array<string>>, amounts: Array<Array<string | BigNumber>>) => {

    const arrayLength = savETHVaultAddresses.length;
    if(arrayLength != oldLPTokens.length || arrayLength != newLPTokens.length || arrayLength != amounts.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<arrayLength; ++i) {
        const oldLPArray = oldLPTokens[i];
        const newLPArray = newLPTokens[i];
        const amountArray = amounts[i];

        if(oldLPArray.length != newLPArray.length || oldLPArray.length != amountArray.length) {
            throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
        }

        savETHVaultAddresses[i] = _add0x(savETHVaultAddresses[i]);

        for(let j=0; j<oldLPArray.length; ++j) {
            oldLPTokens[i][j] = _add0x(oldLPTokens[i][j]);
            newLPTokens[i][j] = _add0x(newLPTokens[i][j]);
        }
    }

    const contract = (await getContractInstance(signer)).giantSavETHPool();

    return contract.batchRotateLPTokens(
        savETHVaultAddresses,
        oldLPTokens,
        newLPTokens,
        amounts
    );
};

export const _bringUnusedETHBackIntoGiantPool = async (signer: Signer | Provider, savETHVaultAddresses: Array<string>, lpTokens: Array<Array<string>>, amounts: Array<Array<string | BigNumber>>) => {

    const arrayLength = savETHVaultAddresses.length;
    if(arrayLength != lpTokens.length || arrayLength != amounts.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<arrayLength; ++i) {
        const lpArray = lpTokens[i];
        const amountArray = amounts[i];

        if(lpArray.length != amountArray.length) {
            throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
        }

        savETHVaultAddresses[i] = _add0x(savETHVaultAddresses[i]);

        for(let j=0; j<lpArray.length; ++j) {
            lpTokens[i][j] = _add0x(lpTokens[i][j]);
        }
    }

    const contract = (await getContractInstance(signer)).giantSavETHPool();

    return contract.bringUnusedETHBackIntoGiantPool(
        savETHVaultAddresses,
        lpTokens,
        amounts
    );
};

export const _depositETH = async (signer: Signer | Provider, amount: string | BigNumber, ethValue: BigNumber) => {

    const contract = (await getContractInstance(signer)).giantSavETHPool();

    return contract.depositETH(
        amount,
        { value: ethValue }
    );
};

export const _getIdleETH = async (signer: Signer | Provider) => {

    const contract = (await getContractInstance(signer)).giantSavETHPool();

    return contract.idleETH();
};

export const _withdrawETH = async (signer: Signer | Provider, amount: string | BigNumber) => {

    const contract = (await getContractInstance(signer)).giantSavETHPool();

    return contract.withdrawETH(amount);
};
