import { customErrors } from './constants.mjs';
import { getContractInstance } from './contracts.mjs';
import { _add0x } from './utils.mjs';

export const _getIndexOwnedByTheVault = async (signer, savETHVaultAddress) => {

    const contract = (await getContractInstance(signer)).savETHVault(savETHVaultAddress);

    return contract.indexOwnedByTheVault();
};

export const _batchDepositETHForStaking = async (signer, savETHVaultAddress, blsPublicKeys, amounts, ethValue) => {

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

export const _depositETHForStaking = async (signer, savETHVaultAddress, blsPublicKey, amount, ethValue) => {

    const contract = (await getContractInstance(signer)).savETHVault(savETHVaultAddress);

    return contract.depositETHForStaking(
        _add0x(blsPublicKey),
        amount,
        { value: ethValue }
    );
};

export const _burnLPTokensByBLS = async (signer, savETHVaultAddress, blsPublicKeys, amounts) => {

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

export const _burnLPTokens = async (signer, savETHVaultAddress, lpTokens, amounts) => {

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

export const _burnLPToken = async (signer, savETHVaultAddress, lpToken, amount) => {

    const contract = (await getContractInstance(signer)).savETHVault(savETHVaultAddress);

    return contract.burnLPToken(
        _add0x(lpToken),
        amount
    );
};

export const _isDETHReadyForWithdrawal = async (signer, savETHVaultAddress, lpToken) => {

    const contract = (await getContractInstance(signer)).savETHVault(savETHVaultAddress);

    return contract.isDETHReadyForWithdrawal(
        lpToken
    );
};

export const _depositDETHForStaking = async (signer, savETHVaultAddress, blsPublicKey, amount) => {

    const contract = (await getContractInstance(signer)).savETHVault(savETHVaultAddress);

    return contract.depositDETHForStaking(
        _add0x(blsPublicKey),
        amount
    );
};

export const _getdETHRequiredToIsolateWithdrawnKnot = async (signer, savETHVaultAddress, blsPublicKey) => {

    const contract = (await getContractInstance(signer)).savETHVault(savETHVaultAddress);

    return contract.dETHRequiredToIsolateWithdrawnKnot(
        _add0x(blsPublicKey)
    );
};

export const _approveProtectedStakingPoolToTransferDETH = async (signer, spender, amount) => {

    const contract = (await getContractInstance(signer)).dETH();

    return contract.approve(
        _add0x(spender),
        amount
    );
};
