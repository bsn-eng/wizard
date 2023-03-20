import { Provider } from '@ethersproject/abstract-provider';
import { BigNumber, Bytes, Signer } from 'ethers';
import { customErrors } from './constants.js';
import { getContractInstance } from './contracts.js';
import { _add0x } from './utils.js';

export const _batchDepositETHForStaking = async (signer: Signer | Provider, feesAndMevPoolAddresses: Array<string>, amounts: Array<string | BigNumber>, blsPublicKeys: Array<Array<string>>, stakeAmounts: Array<Array<string | BigNumber>>, ethValue: string | BigNumber) => {

    const arrayLength = feesAndMevPoolAddresses.length;
    if(arrayLength != amounts.length || arrayLength != blsPublicKeys.length || arrayLength != stakeAmounts.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<arrayLength; ++i) {
        const blsArray = blsPublicKeys[i];
        const amountArray = stakeAmounts[i];

        if(blsArray.length != amountArray.length) {
            throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
        }

        feesAndMevPoolAddresses[i] = _add0x(feesAndMevPoolAddresses[i]);

        for(let j=0; j<blsArray.length; ++j) {
            blsPublicKeys[i][j] = _add0x(blsPublicKeys[i][j]);
        }
    }

    const contract = (await getContractInstance(signer)).giantFeesAndMevPool();

    return contract.batchDepositETHForStaking(
        feesAndMevPoolAddresses,
        amounts,
        blsPublicKeys,
        stakeAmounts,
        { value: ethValue }
    );
};

export const _claimRewards = async (signer: Signer | Provider, recipient: string, feesAndMevPoolAddresses: Array<string>, blsPublicKeys: Array<Array<string>>) => {

    const arrayLength = blsPublicKeys.length;
    if(arrayLength != feesAndMevPoolAddresses.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<arrayLength; ++i) {
        feesAndMevPoolAddresses[i] = _add0x(feesAndMevPoolAddresses[i]);

        for(let j=0; j<blsPublicKeys[i].length; ++j) {
            blsPublicKeys[i][j] = _add0x(blsPublicKeys[i][j]);
        }
    }

    const contract = (await getContractInstance(signer)).giantFeesAndMevPool();

    return contract.claimRewards(
        _add0x(recipient),
        feesAndMevPoolAddresses,
        blsPublicKeys
    );
};

export const _previewAccumulatedETH = async (signer: Signer | Provider, userAddress: string, feesAndMevPoolAddresses: Array<string>, lpTokens: Array<Array<string>>) => {

    if(lpTokens.length != feesAndMevPoolAddresses.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<feesAndMevPoolAddresses.length; ++i) {
        feesAndMevPoolAddresses[i] = _add0x(feesAndMevPoolAddresses[i]);

        for(let j=0; j<lpTokens[i].length; ++j) {
            lpTokens[i][j] = _add0x(lpTokens[i][j]);
        }
    }

    const contract = (await getContractInstance(signer)).giantFeesAndMevPool();

    return contract.previewAccumulatedETH(
        _add0x(userAddress),
        feesAndMevPoolAddresses,
        lpTokens
    );
};

export const _batchRotateLPTokens = async (signer: Signer | Provider, feesAndMevPoolAddresses: Array<string>, oldLPTokens: Array<Array<string>>, newLPTokens: Array<Array<string>>, amounts: Array<Array<string | BigNumber>>) => {

    const arrayLength = feesAndMevPoolAddresses.length;
    if(arrayLength != oldLPTokens.length || arrayLength != newLPTokens.length || arrayLength != amounts.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<arrayLength; ++i) {
        let newLPArray = newLPTokens[i];
        let oldLPArray = oldLPTokens[i];
        const amountArray = amounts[i];

        if(newLPArray.length != oldLPArray.length || newLPArray.length != amountArray.length) {
            throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
        }

        feesAndMevPoolAddresses[i] = _add0x(feesAndMevPoolAddresses[i]);

        for(let j=0; j<newLPArray.length; ++j) {
            newLPArray[i][j] = _add0x(newLPArray[i][j]);
            oldLPArray[i][j] = _add0x(oldLPArray[i][j]);
        }
    }

    const contract = (await getContractInstance(signer)).giantFeesAndMevPool();

    return contract.batchRotateLPTokens(
        feesAndMevPoolAddresses,
        oldLPTokens,
        newLPTokens,
        amounts
    );
};

export const _bringUnusedETHBackIntoGiantPool = async (signer: Signer | Provider, feesAndMevPoolAddresses: Array<string>, lpTokens: Array<Array<string>>, amounts: Array<Array<BigNumber | string>>) => {

    const arrayLength = feesAndMevPoolAddresses.length;
    if(arrayLength != lpTokens.length || arrayLength != amounts.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<arrayLength; ++i) {
        const lpArray = lpTokens[i];
        const amountArray = amounts[i];

        if(lpArray.length != amountArray.length) {
            throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
        }

        feesAndMevPoolAddresses[i] = _add0x(feesAndMevPoolAddresses[i]);

        for(let j=0; j<lpArray.length; ++i) {
            lpTokens[i][j] = _add0x(lpTokens[i][j]);
        }
    }

    const contract = (await getContractInstance(signer)).giantFeesAndMevPool();

    return contract.bringUnusedETHBackIntoGiantPool(
        feesAndMevPoolAddresses,
        lpTokens,
        amounts
    );
};

export const _updateAccumulatedETHPerLP = async (signer: Signer | Provider) => {

    const contract = (await getContractInstance(signer)).giantFeesAndMevPool();

    return contract.updateAccumulatedETHPerLP();
};

export const _depositETH = async (signer: Signer | Provider, amount: string | BigNumber, ethValue: BigNumber) => {

    const contract = (await getContractInstance(signer)).giantFeesAndMevPool();

    return contract.depositETH(
        amount,
        { value: ethValue }
    );
};

export const _getIdleETH = async (signer: Signer | Provider) => {

    const contract = (await getContractInstance(signer)).giantFeesAndMevPool();

    return contract.idleETH();
};

export const _withdrawETH = async (signer: Signer | Provider, amount: string | BigNumber) => {

    const contract = (await getContractInstance(signer)).giantFeesAndMevPool();

    return contract.withdrawETH(amount);
};
