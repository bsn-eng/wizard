import { Provider } from '@ethersproject/abstract-provider';
import { Overrides } from '@ethersproject/contracts';
import { BigNumber, Bytes, Signer } from 'ethers';
import { customErrors } from './constants.js';
import { getContractInstance } from './contracts.js';
import { _add0x } from './utils.js';

interface CustomOverride extends Overrides {
    value?: BigNumber;
}

function overrides(value: BigNumber, options: CustomOverride = {}): CustomOverride {
    const { gasLimit, gasPrice, nonce, type, ...rest } = options;
    return {
      ...rest,
      value,
      gasLimit,
      gasPrice,
      nonce,
      type
    };
}

export const _batchDepositETHForStaking = async (signer: Signer | Provider, feesAndMevPoolAddresses: Array<string>, amounts: Array<string | BigNumber>, blsPublicKeys: Array<Array<string>>, stakeAmounts: Array<Array<string | BigNumber>>, ethValue: BigNumber) => {

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

    const overrideEthValue = overrides(ethValue, { gasLimit: 500000 });

    const contract = (await getContractInstance(signer)).giantFeesAndMevPool();

    return contract.batchDepositETHForStaking(
        feesAndMevPoolAddresses,
        amounts,
        blsPublicKeys,
        stakeAmounts,
        overrideEthValue
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
