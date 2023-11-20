import { ethers, utils, Signer } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';

export const ZERO = ethers.BigNumber.from('0');
export const ONE_GWEI = utils.parseUnits('1', 'gwei');
export const ONE_ETHER = utils.parseUnits('1', 'ether');

export interface ChainSpecificConstants {
	factoryAddresses: typeof goerliFactoryAddresses | typeof mainnetFactoryAddresses;
	customErrors: typeof customErrors;
	lsdUrls: typeof goerliLSDUrls | typeof mainnetLSDUrls;
}

export enum CHAIN_ID {
	MAINNET = 1,
	GOERLI = 5
};

export const goerliFactoryAddresses: Record<string, string> = {
    LSDN_FACTORY: "0xe9482a9b8f3ea7400d4b07c798287d94b036be5c",
	GIANT_SAVETH_POOL: "0x7e30089243E412291e9e5b981F9018Ca40e84eED",
	GIANT_FEES_AND_MEV_POOL: "0xf3D21065A25bebd2357288978fe0e3083736E2bC",
	SMART_WALLET_NAMING_REGISTRY: "0x78F82286eBd81879672285684CAA5CfC93c48E08",
	DETH: "0x506C2B850D519065a4005b04b9ceed946A64CB6F",
	ZEC: ""
};

export const mainnetFactoryAddresses: Record<string, string> = {
    LSDN_FACTORY: "0x6EDd4DDa4F879541A67366bca844b2D78cC3850A",
	GIANT_SAVETH_POOL: "0xF5D92B01c478273bD13aA8efb130D98e131ecBB9",
	GIANT_FEES_AND_MEV_POOL: "0x04e5c93f4b96D2fdB2cDE4c9826C373e5656796E",
	SMART_WALLET_NAMING_REGISTRY: "0xfC40C203d6b0976526Dd169F2c21AF53B8f2a372",
	DETH: "0x3d1E5Cf16077F349e999d6b21A4f646e83Cd90c5",
	ZEC: ""
};

export const goerliLSDUrls: Record<string, string> = {
	SUBGRAPH_ENDPOINT: "https://goerli-lsd-subgraph.joinstakehouse.com",
	STAKEHOUSE_SUBGRAPH_ENDPOINT: "https://goerli-stakehouse-subgraph.joinstakehouse.com"
}

export const mainnetLSDUrls: Record<string, string> = {
	SUBGRAPH_ENDPOINT: "https://lsd-subgraph.joinstakehouse.com",
	STAKEHOUSE_SUBGRAPH_ENDPOINT: "https://stakehouse-subgraph.joinstakehouse.com"
}

export const customErrors: Record<string, string> = {
	UNEQUAL_ARRAY_LENGTH: "Error: Unequal array size. Must provide arrays of equal length",
	NULL_OR_UNDEFINED_VALUE: "Error: Null or undefined value provided"
};

export const _extractChainID = async (signerOrProvider: Signer | Provider) => {

	if(!signerOrProvider) {
		throw "Invalid signer or provider instance";
	}

    if(Signer.isSigner(signerOrProvider)) {
        return signerOrProvider.getChainId();
    }
    
	const network = await signerOrProvider.getNetwork();
	if(!network) {
		throw "Invalid signer or provider instance";
	}

	return network.chainId;
};

export const _getChainSpecificConstants = (chainID: CHAIN_ID.GOERLI | CHAIN_ID.MAINNET): ChainSpecificConstants => {

	if(chainID === CHAIN_ID.GOERLI) {
		return {
			factoryAddresses: goerliFactoryAddresses,
			customErrors: customErrors,
			lsdUrls: goerliLSDUrls
		};
	}
	else {
		return {
			factoryAddresses: mainnetFactoryAddresses,
			customErrors: customErrors,
			lsdUrls: mainnetLSDUrls
		};
	}
};

export enum lifecycleStatuses {
	UNBEGUN = 0,
	INITIALS_REGISTERED = 1,
	DEPOSIT_COMPLETED = 2,
	TOKENS_MINTED = 3,
	EXITED = 4
};
