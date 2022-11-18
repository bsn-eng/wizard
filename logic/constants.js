const { ethers, utils, Signer } = require('ethers');

const ZERO = ethers.BigNumber.from('0');
const ONE_GWEI = utils.parseUnits('1', 'gwei');
const ONE_ETHER = utils.parseUnits('1', 'ether');
const CHAIN_ID = {
	MAINNET: 1,
	GOERLI: 5
};

const goerliFactoryAddresses = {
    LSDN_FACTORY: "0xFE5Dab8D21F1E5bb34DA0Bbed4d9E75Ae11b8c5E",
	GIANT_SAVETH_POOL: "0x9B04B91C6b721806Ff0E0A5E0cCd902CE10fe279",
	GIANT_FEES_AND_MEV_POOL: "0x9a5410DE325520579B6e6dF4F48117B1592cbFd4"
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

