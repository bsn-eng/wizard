import { ethers, utils, Signer } from 'ethers';

const ZERO = ethers.BigNumber.from('0');
const ONE_GWEI = utils.parseUnits('1', 'gwei');
const ONE_ETHER = utils.parseUnits('1', 'ether');
const CHAIN_ID = {
	MAINNET: 1,
	GOERLI: 5
};

const goerliFactoryAddresses = {
    LSDN_FACTORY: "0xe9482a9b8f3ea7400d4b07c798287d94b036be5c",
	GIANT_SAVETH_POOL: "0xf498849ea5caedf73cf9198c5a2ef9db62443809",
	GIANT_FEES_AND_MEV_POOL: "0x7d8381afbada9ab3ec16de3f17ad0e3a2af58b79",
	SMART_WALLET_NAMING_REGISTRY: "0x78F82286eBd81879672285684CAA5CfC93c48E08",
	DETH: "0x506C2B850D519065a4005b04b9ceed946A64CB6F"
};

const mainnetFactoryAddresses = {
    LSDN_FACTORY: "0x28AC271135D7FCA904dF141439959e9B916B9BcD",
	GIANT_SAVETH_POOL: "0x607c0FBfAFe70A195e2fAaE1EFE62E7cb5888AD9",
	GIANT_FEES_AND_MEV_POOL: "0x1dC847964D3FeaeeFc5FAD5Ad63aE0eAa4343FD4",
	SMART_WALLET_NAMING_REGISTRY: "",
	DETH: "0x3d1e5cf16077f349e999d6b21a4f646e83cd90c5"
};

const goerliLSDUrls = {
	SUBGRAPH_ENDPOINT: "https://api.thegraph.com/subgraphs/name/bsn-eng/liquid-staking-derivative"
}

const mainnetLSDUrls = {
	SUBGRAPH_ENDPOINT: "https://api.studio.thegraph.com/query/37726/lsd-mainnet/v0.0.1"
}

const customErrors = {
	UNEQUAL_ARRAY_LENGTH: "Error: Unequal array size. Must provide arrays of equal length"
};

const _extractChainID = async (signerOrProvider) => {

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

const _getChainSpecificConstants = (chainID) => {

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

const lifecycleStatuses = {
	UNBEGUN: 0,
	INITIALS_REGISTERED: 1,
	DEPOSIT_COMPLETED: 2,
	TOKENS_MINTED: 3,
	EXITED: 4
};

export default {
	_getChainSpecificConstants,
	_extractChainID,
	ZERO,
	ONE_GWEI,
	ONE_ETHER,
	CHAIN_ID,
	customErrors,
	lifecycleStatuses,
	goerliLSDUrls
};
