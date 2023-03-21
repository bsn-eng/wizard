import { BigNumber, Bytes, Signer } from 'ethers';
import { Overrides } from '@ethersproject/contracts';
import { Provider } from '@ethersproject/abstract-provider';
import { customErrors } from './constants';
import { getContractInstance } from './contracts';
import { _add0x } from './utils';

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

    const overrideEthValue = overrides(ethValue, { gasLimit: 500000 });

    const contract = (await getContractInstance(signer)).giantSavETHPool();

    return contract.batchDepositETHForStaking(
        savETHVaultAddresses,
        amounts,
        blsPublicKeys,
        stakeAmounts,
        overrideEthValue
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
