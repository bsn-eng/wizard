const { customErrors } = require('./constants');
const { getContractInstance } = require('./contracts');
const { _add0x } = require('./utils');

const _getIndexOwnedByTheVault = async (signer, savETHVaultAddress) => {

    const contract = (await getContractInstance(signer)).savETHVault(savETHVaultAddress);

    return contract.indexOwnedByTheVault();
};

const _batchDepositETHForStaking = async (signer, savETHVaultAddress, blsPublicKeys, amounts, ethValue) => {

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

const _depositETHForStaking = async (signer, savETHVaultAddress, blsPublicKey, amount, ethValue) => {

    const contract = (await getContractInstance(signer)).savETHVault(savETHVaultAddress);

    return contract.depositETHForStaking(
        _add0x(blsPublicKey),
        amount,
        { value: ethValue }
    );
};

const _burnLPTokensByBLS = async (signer, savETHVaultAddress, blsPublicKeys, amounts) => {

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

const _burnLPTokens = async (signer, savETHVaultAddress, lpTokens, amounts) => {

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

const _burnLPToken = async (signer, savETHVaultAddress, lpToken, amount) => {

    const contract = (await getContractInstance(signer)).savETHVault(savETHVaultAddress);

    return contract.burnLPToken(
        _add0x(lpToken),
        amount
    );
};

const _isDETHReadyForWithdrawal = async (signer, savETHVaultAddress, lpToken) => {

    const contract = (await getContractInstance(signer)).savETHVault(savETHVaultAddress);

    return contract.isDETHReadyForWithdrawal(
        lpToken
    );
};

module.exports = {
    _getIndexOwnedByTheVault,
    _batchDepositETHForStaking,
    _depositETHForStaking,
    _burnLPTokensByBLS,
    _burnLPTokens,
    _burnLPToken,
    _isDETHReadyForWithdrawal
};
