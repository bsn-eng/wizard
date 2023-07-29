import { getContractInstance } from './contracts.mjs';

export const _totalBribeAmount = async (signer, bribeVaultAddress) => {
    const contract = (await getContractInstance(signer)).frenDelegationBribeVault(bribeVaultAddress);
    return contract.totalBribeAmount();
};

export const _tokensPerETH = async (signer, bribeVaultAddress) => {
    const contract = (await getContractInstance(signer)).frenDelegationBribeVault(bribeVaultAddress);
    return contract.tokensPerETH();
};
