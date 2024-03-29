import { Signer } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import { _getChainSpecificConstants, _extractChainID } from './constants';
import { 
    Lsdn_factory_abi__factory,
    Lsm_abi__factory,
    Protected_staking_abi__factory,
    Fees_and_mev_abi__factory,
    Giant_protected_staking_abi__factory,
    Giant_fees_and_mev_abi__factory,
    Syndicate_abi__factory,
    Smart_wallet_abi__factory,
    Smart_wallet_naming_abi__factory,
    Rage_quit_assistant_abi__factory,
    Fren_delegation_bribes_abi__factory,
    Zec_abi__factory
} from '../contracts/lsd/index';

import { Erc20_generic_abi__factory } from '../contracts/stakehouse/index';

export const getContractInstance = async (signer: Signer | Provider) => {

    const chainID = await _extractChainID(signer);
    const values = _getChainSpecificConstants(chainID);

    const getLSDNFactory = () => Lsdn_factory_abi__factory.connect(
        values?.factoryAddresses.LSDN_FACTORY as string,
        signer
    );

    const getLiquidStakingManager = (liquidStakingManagerAddress: string) => Lsm_abi__factory.connect(
        liquidStakingManagerAddress,
        signer
    );

    const getSavETHVault = (savETHVaultAddress: string) => Protected_staking_abi__factory.connect(
        savETHVaultAddress,
        signer
    );

    const getFeesAndMevPool = (feesAndMevPoolAddress: string) =>Fees_and_mev_abi__factory.connect(
        feesAndMevPoolAddress,
        signer
    );

    const getGiantSavETHPool = () => Giant_protected_staking_abi__factory.connect(
        values?.factoryAddresses.GIANT_SAVETH_POOL as string,
        signer
    );

    const getGiantFeesAndMevPool = () => Giant_fees_and_mev_abi__factory.connect(
        values?.factoryAddresses.GIANT_FEES_AND_MEV_POOL as string,
        signer
    );

    const getSyndicate = (syndicateAddress: string) => Syndicate_abi__factory.connect(
        syndicateAddress,
        signer
    );

    const getSmartWallet = (smartWalletAddress: string) => Smart_wallet_abi__factory.connect(
        smartWalletAddress,
        signer
    );

    const getSmartWalletNamingRegistry = () => Smart_wallet_naming_abi__factory.connect(
        values?.factoryAddresses.SMART_WALLET_NAMING_REGISTRY as string,
        signer
    );

    const getDETH = () => Erc20_generic_abi__factory.connect(
        values?.factoryAddresses.DETH as string,
        signer
    );

    const getERC20 = (erc20Address: string) => Erc20_generic_abi__factory.connect(
        erc20Address,
        signer
    );

    const getRageQuitAssistant = (rageQuitAssistantAddress: string) => Rage_quit_assistant_abi__factory.connect(
        rageQuitAssistantAddress,
        signer
    );

    const getFrenDelegationBribeVault = (frenDelegationBribeVaultAddress: string) => Fren_delegation_bribes_abi__factory.connect(
        frenDelegationBribeVaultAddress,
        signer
    );

    const getZEC = () => Zec_abi__factory.connect(
        values?.factoryAddresses.ZEC as string,
        signer
    );

    return {
        lsdnFactory: getLSDNFactory,
        liquidStakingManager: getLiquidStakingManager,
        savETHVault: getSavETHVault,
        feesAndMevPool: getFeesAndMevPool,
        giantSavETHPool: getGiantSavETHPool,
        giantFeesAndMevPool: getGiantFeesAndMevPool,
        syndicate: getSyndicate,
        smartWallet: getSmartWallet,
        smartWalletNamingRegistry: getSmartWalletNamingRegistry,
        dETH: getDETH,
        erc20: getERC20,
        frenDelegationBribeVault: getFrenDelegationBribeVault,
        rageQuitAssistant: getRageQuitAssistant,
        zec: getZEC
    }
}
