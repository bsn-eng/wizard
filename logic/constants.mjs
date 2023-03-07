import { ethers, utils, Signer } from 'ethers';

export const ZERO = ethers.BigNumber.from('0');
export const ONE_GWEI = utils.parseUnits('1', 'gwei');
export const ONE_ETHER = utils.parseUnits('1', 'ether');
export const CHAIN_ID = {
	MAINNET: 1,
	GOERLI: 5
};

export const goerliFactoryAddresses = {
    LSDN_FACTORY: "0xe9482a9b8f3ea7400d4b07c798287d94b036be5c",
	GIANT_SAVETH_POOL: "0xf498849ea5caedf73cf9198c5a2ef9db62443809",
	GIANT_FEES_AND_MEV_POOL: "0x7d8381afbada9ab3ec16de3f17ad0e3a2af58b79",
	SMART_WALLET_NAMING_REGISTRY: "0x78F82286eBd81879672285684CAA5CfC93c48E08",
	DETH: "0x506C2B850D519065a4005b04b9ceed946A64CB6F"
};

const mainnetFactoryAddresses = {
    LSDN_FACTORY: "0x6EDd4DDa4F879541A67366bca844b2D78cC3850A",
	GIANT_SAVETH_POOL: "0xF5D92B01c478273bD13aA8efb130D98e131ecBB9",
	GIANT_FEES_AND_MEV_POOL: "0x04e5c93f4b96D2fdB2cDE4c9826C373e5656796E",
	SMART_WALLET_NAMING_REGISTRY: "0xfC40C203d6b0976526Dd169F2c21AF53B8f2a372",
	DETH: "0x3d1E5Cf16077F349e999d6b21A4f646e83Cd90c5"
};

export const goerliLSDUrls = {
	SUBGRAPH_ENDPOINT: "https://api.thegraph.com/subgraphs/name/bsn-eng/liquid-staking-derivative"
}

const mainnetLSDUrls = {
	SUBGRAPH_ENDPOINT: "https://gateway.thegraph.com/api/403d404492bbd29f3d4e97044fe652e7/subgraphs/id/FXWYdAqgDbmfiahrDB85juPnZ123XiTsojSbosBAJkFK"
}

export const customErrors = {
	UNEQUAL_ARRAY_LENGTH: "Error: Unequal array size. Must provide arrays of equal length"
};

export const _extractChainID = async (signerOrProvider) => {

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

export const _getChainSpecificConstants = (chainID) => {

	if(chainID === CHAIN_ID.GOERLI) {
		return {
			factoryAddresses: goerliFactoryAddresses,
			customErrors: customErrors,
			lsdUrls: goerliLSDUrls
		};
	}
	else if(chainID === CHAIN_ID.MAINNET) {
		return {
			factoryAddresses: mainnetFactoryAddresses,
			customErrors: customErrors,
			lsdUrls: mainnetLSDUrls
		};
	}
};

export const lifecycleStatuses = {
	UNBEGUN: 0,
	INITIALS_REGISTERED: 1,
	DEPOSIT_COMPLETED: 2,
	TOKENS_MINTED: 3,
	EXITED: 4
};
