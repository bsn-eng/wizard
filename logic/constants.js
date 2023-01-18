const { ethers, utils, Signer } = require('ethers');

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
	SMART_WALLET_NAMING_REGISTRY: "0x31D01003bE62Ef03222CF54E8895931e91B8C2eE"
};

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
			customErrors: customErrors
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

module.exports = {
	_getChainSpecificConstants,
	_extractChainID,
	ZERO,
	ONE_GWEI,
	ONE_ETHER,
	CHAIN_ID,
	customErrors,
	lifecycleStatuses,
};
