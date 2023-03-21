import { BigNumber, Bytes, Signer } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import { customErrors } from './constants';
import { getContractInstance } from './contracts';
import { _add0x } from './utils';

export const _totalShares = async (signer: Signer | Provider, feesAndMevPoolAddress: string) => {

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.totalShares();
};

export const _updateAccumulatedETHPerLP = async (signer: Signer | Provider, feesAndMevPoolAddress: string) => {

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.updateAccumulatedETHPerLP();
};

export const _batchDepositETHForStaking = async (signer: Signer | Provider, feesAndMevPoolAddress: string, blsPublicKeys: Array<string>, amounts: Array<string | BigNumber>, ethValue: BigNumber) => {

    if(blsPublicKeys.length != amounts.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
    }

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.batchDepositETHForStaking(
        blsPublicKeys,
        amounts,
        { value: ethValue }
    );
};

export const _depositETHForStaking = async (signer: Signer | Provider, feesAndMevPoolAddress: string, blsPublicKey: string, amount: string | BigNumber, ethValue: BigNumber) => {

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.depositETHForStaking(
        _add0x(blsPublicKey),
        amount,
        { value: ethValue }
    );
};

export const _burnLPTokensForETHByBLS = async (signer: Signer | Provider, feesAndMevPoolAddress: string, blsPublicKeys: Array<string>, amounts: Array<string | BigNumber>) => {

    if(blsPublicKeys.length != amounts.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
    }

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.burnLPTokensForETHByBLS(
        blsPublicKeys,
        amounts
    );
};

export const _burnLPTokensForETH = async (signer: Signer| Provider, feesAndMevPoolAddress: string, lpTokens: Array<string>, amounts: Array<string | BigNumber>) => {

    if(lpTokens.length != amounts.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<lpTokens.length; ++i) {
        lpTokens[i] = _add0x(lpTokens[i]);
    }

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.burnLPTokensForETH(
        lpTokens,
        amounts
    );
};

export const _burnLPTokenForETH = async (signer: Signer| Provider, feesAndMevPoolAddress: string, lpToken: string, amount: string | BigNumber) => {

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.burnLPForETH(
        _add0x(lpToken),
        amount
    );
};

export const _claimRewards = async (signer: Signer| Provider, feesAndMevPoolAddress: string, recipient: string, blsPublicKeys: Array<string>) => {

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
    }

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.claimRewards(
        _add0x(recipient),
        blsPublicKeys
    );
};

export const _batchPreviewAccumulatedETH = async (signer: Signer| Provider, feesAndMevPoolAddress: string, userAddress: string, lpTokens: Array<string>) => {

    for(let i=0; i<lpTokens.length; ++i) {
        lpTokens[i] = _add0x(lpTokens[i]);
    }

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.batchPreviewAccumulatedETH(
        _add0x(userAddress),
        lpTokens
    );
};

export const _claimFundsFromSyndicateForDistribution = async (signer: Signer| Provider, feesAndMevPoolAddress: string, blsPublicKeys: Array<string>) => {

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
    }

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.claimFundsFromSyndicateForDistribution(
        blsPublicKeys
    );
};
