const { ethers, utils, Signer } = require('ethers');

const ZERO = ethers.BigNumber.from('0');
const ONE_GWEI = utils.parseUnits('1', 'gwei');
const ONE_ETHER = utils.parseUnits('1', 'ether');
const CHAIN_ID = {
	MAINNET: 1,
	GOERLI: 5
};

const goerliFactoryAddresses = {
    LSDN_FACTORY: "0x6f3aac4fB210E00726C68Adb112a8a1D57a919Ed",
	GIANT_SAVETH_POOL: "0xB8c023A2e101e20B47D7356555CF7d8742059ff4",
	GIANT_FEES_AND_MEV_POOL: "0x1f7de0a0A6b2800E4c712c537B3CdA9840446eEF"
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

