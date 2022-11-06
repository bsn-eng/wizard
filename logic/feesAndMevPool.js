const { customErrors } = require('./constants');
const { getContractInstance } = require('./contracts');
const { _add0x } = require('./utils');

const _totalShares = async (signer, feesAndMevPoolAddress) => {

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.totalShares();
};

const _updateAccumulatedETHPerLP = async (signer, feesAndMevPoolAddress) => {

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.updateAccumulatedETHPerLP();
};

const _batchDepositETHForStaking = async (signer, feesAndMevPoolAddress, blsPublicKeys, amounts, ethValue) => {

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

const _depositETHForStaking = async (signer, feesAndMevPoolAddress, blsPublicKey, amount, ethValue) => {

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.depositETHForStaking(
        _add0x(blsPublicKey),
        amount,
        { value: ethValue }
    );
};

const _burnLPTokensForETHByBLS = async (signer, feesAndMevPoolAddress, blsPublicKeys, amounts) => {

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

const _burnLPTokensForETH = async (signer, feesAndMevPoolAddress, lpTokens, amounts) => {

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

const _burnLPTokenForETH = async (signer, feesAndMevPoolAddress, lpToken, amount) => {

    const contract = (await getContractInstance(signer)).feesAndMevPool(feesAndMevPoolAddress);

    return contract.burnLPForETH(
        _add0x(lpToken),
        amount
    );
};

module.exports = {
    _totalShares,
    _updateAccumulatedETHPerLP,
    _batchDepositETHForStaking,
    _depositETHForStaking,
    _burnLPTokensForETHByBLS,
    _burnLPTokensForETH,
    _burnLPTokenForETH
};
