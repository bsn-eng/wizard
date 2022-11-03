const { getContractInstance } = require('./contracts');

const _add0x = (data) => {

	if(!data) {
		throw customErrors.NULL_OR_UNDEFINED_VALUE;
	}

	if(Buffer.isBuffer(data)) {
		return data;
	}

	if(data instanceof Uint8Array) {
		return '0x' + Buffer.from(data).toString('hex');
	}

	if(_.isString(data)) {
		return (data.indexOf('0x') !== -1) ? data : '0x'.concat(data);		
	}

	return data;
};

const _remove0x = (data) => {

	if(!data) {
		throw customErrors.NULL_OR_UNDEFINED_VALUE;
	}

	if(Buffer.isBuffer(data)) {
		return data;
	}

	if(data instanceof Uint8Array) {
		return Buffer.from(data).toString('hex');
	}

	if(_.isString(data)) {
		return (data.indexOf('0x') !== -1) ? data.slice(2) : data;
	}

	return data;
};

const _getDAOAddress = async (signer, liquidStakingManagerAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.dao();
};

const _getSavETHVaultAddress = async (signer, liquidStakingManagerAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.savETHVault();
};

const _getFeesAndMEVPoolAddress = async (signer, liquidStakingManagerAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.stakingFundsVault();
};

const _getStakehouseTicker = async (signer, liquidStakingManagerAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.stakehouseTicker();
};

const _isWhitelistingEnabled = async (signer, liquidStakingManagerAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.enableWhitelisting();
};

const _isNodeRunnerWhitelisted = async (signer, liquidStakingManagerAddress, nodeRunnerAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.isNodeRunnerWhitelisted(
        _add0x(nodeRunnerAddress)
    );
};

const _getSmartWalletRepresentative = async (signer, liquidStakingManagerAddress, smartWalletAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.smartWalletRepresentative(
        _add0x(smartWalletAddress)
    );
};

const _getSmartWalletOfKnot = async (signer, liquidStakingManagerAddress, blsPublicKey) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.smartWalletOfKnot(
        _add0x(blsPublicKey)
    );
};

const _getSmartWalletOfNodeRunner = async (signer, liquidStakingManagerAddress, nodeRunnerAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.smartWalletOfNodeRunner(
        _add0x(nodeRunnerAddress)
    );
};

const _getNodeRunnerOfSmartWallet = async (signer, liquidStakingManagerAddress, smartWalletAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.nodeRunnerOfSmartWallet(
        _add0x(smartWalletAddress)
    )
};

const _getStakedKnotsOfSmartWallet = async (signer, liquidStakingManagerAddress, smartWalletAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.stakedKnotsOfSmartWallet(
        _add0x(smartWalletAddress)
    );
};

const _getSmartWalletDormantRepresentative = async (signer, liquidStakingManagerAddress, smartWalletAddress) => {  

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.smartWalletDormantRepresentative(
        _add0x(smartWalletAddress)
    );
};

const _isNodeRunnerBanned = async (signer, liquidStakingManagerAddress, nodeRunnerAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.bannedNodeRunners(
        _add0x(nodeRunnerAddress)
    )
};

module.exports = {
    _add0x,
    _remove0x,
    _getDAOAddress,
    _getSavETHVaultAddress,
    _getFeesAndMEVPoolAddress,
    _getStakehouseTicker,
    _isWhitelistingEnabled,
    _isNodeRunnerWhitelisted,
    _getSmartWalletRepresentative,
    _getSmartWalletOfKnot,
    _getSmartWalletOfNodeRunner,
    _getNodeRunnerOfSmartWallet,
    _getStakedKnotsOfSmartWallet,
    _getSmartWalletDormantRepresentative,
    _isNodeRunnerBanned
}
