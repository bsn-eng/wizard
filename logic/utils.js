const { customErrors } = require('./constants');
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

const _getNumberOfKnots = async (signer, liquidStakingManagerAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.numberOfKnots();
};

const _getDaoCommissionPercentage = async (signer, liquidStakingManagerAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.daoCommissionPercentage();
};

const _isBLSPublicKeyBanned = async (signer, liquidStakingManagerAddress, blsPublicKey) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.isBLSPublicKeyBanned(
        _add0x(blsPublicKey)
    );
};

const _executeAsSmartWallet = async (signer, liquidStakingManagerAddress, nodeRunnerAddress, targetContractAddress, encodedFunctionData, ethValue) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.executeAsSmartWallet(
        _add0x(nodeRunnerAddress),
        _add0x(targetContractAddress),
        _add0x(encodedFunctionData),
        ethValue,
        { value: ethValue }
    );
};

const _deRegisterKnotsFromSyndicate = async (signer, liquidStakingManagerAddress, blsPublicKeys) => {

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
    }

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.deRegisterKnotFromSyndicate(
        blsPublicKeys
    );
};

const _restoreFreeFloatingSharesToSmartWalletForRageQuit = async (signer, liquidStakingManagerAddress, smartWalletAddress, blsPublicKeys, amounts) => {

    if(blsPublicKeys.length != amounts.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
    }

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.restoreFreeFloatingSharesToSmartWalletForRageQuit(
        _add0x(smartWalletAddress),
        blsPublicKeys,
        amounts
    );
};

const _updateDaoAddress = async (signer, liquidStakingManagerAddress, newDaoAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.updateDAOAddress(
        _add0x(newDaoAddress)
    );
};

const _updateDaoRevenueCommission = async (signer, liquidStakingManagerAddress, newDaoRevenueCommission) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.updateDAORevenueCommission(
        newDaoRevenueCommission
    );
};

const _updateStakehouseTicker = async (signer, liquidStakingManagerAddress, newStakehouseTicker) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.updateTicker(
        newStakehouseTicker
    );
};

const _updateWhitelisting = async (signer, liquidStakingManagerAddress, newWhitelistingStatus) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.updateWhitelisting(
        newWhitelistingStatus
    );
};

const _updateNodeRunnerWhitelistStatus = async (signer, liquidStakingManagerAddress, nodeRunnerAddress, newWhitelistingStatus) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.updateNodeRunnerWhitelistStatus(
        _add0x(nodeRunnerAddress),
        newWhitelistingStatus
    );
};

const _rotateEOARepresentative = async (signer, liquidStakingManagerAddress, newRepresentativeAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.rotateEOARepresentative(
        _add0x(newRepresentativeAddress)
    );
};

const _rotateEOARepresentativeOfNodeRunner = async (signer, liquidStakingManagerAddress, nodeRunnerAddress, newRepresentativeAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.rotateEOARepresentativeOfNodeRunner(
        _add0x(nodeRunnerAddress),
        _add0x(newRepresentativeAddress)
    );
};

const _withdrawETHForKnot = async (signer, liquidStakingManagerAddress, recipientAddress, blsPublicKey) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.withdrawETHForKnot(
        _add0x(recipientAddress),
        _add0x(blsPublicKey)
    );
};

const _rotateNodeRunnerOfSmartWallet = async (signer, liquidStakingManagerAddress, currentNodeRunner, newNodeRunner, wasCurrentNodeRunnerMalicious) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.rotateNodeRunnerOfSmartWallet(
        _add0x(currentNodeRunner),
        _add0x(newNodeRunner),
        wasCurrentNodeRunnerMalicious
    );
};

const _claimRewardsAsNodeRunner = async (signer, liquidStakingManagerAddress, recipientAddress, blsPublicKeys) => {

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
    }

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.claimRewardsAsNodeRunner(
        _add0x(recipientAddress),
        blsPublicKeys
    );
};

const _registerBLSPublicKeys = async (signer, liquidStakingManagerAddress, blsPublicKeys, blsSignatures, representativeAddress, ethValue) => {

    if(blsPublicKeys.length != blsSignatures.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
        blsSignatures[i] = _add0x(blsSignatures[i]);
    }

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.registerBLSPublicKeys(
        blsPublicKeys,
        blsSignatures,
        _add0x(representativeAddress),
        { value: ethValue }
    );
};

const _isKnotDeregistered = async (signer, liquidStakingManagerAddress, blsPublicKey) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.isKnotDeregistered(
        _add0x(blsPublicKey)
    );
};

const _stake = async (signer, liquidStakingManagerAddress, blsPublicKeys, cipherTexts, aesEncryptorKeys, encryptionSignatures, dataRoots) => {

    const arrayLength = blsPublicKeys.length;
    if(arrayLength != cipherTexts.length || arrayLength != aesEncryptorKeys.length || arrayLength != encryptionSignatures.length || arrayLength != dataRoots.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<arrayLength; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
        cipherTexts[i] = _add0x(cipherTexts[i]);
        aesEncryptorKeys[i] = _add0x(aesEncryptorKeys[i]);
        encryptionSignatures[i].r = _add0x(encryptionSignatures[i].r);
        encryptionSignatures[i].s = _add0x(encryptionSignatures[i].s);
        dataRoots[i] = _add0x(dataRoots[i]);
    }

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.stake(
        blsPublicKeys,
        cipherTexts,
        aesEncryptorKeys,
        encryptionSignatures,
        dataRoots
    );
};

const _mintDerivatives = async (signer, liquidStakingManagerAddress, blsPublicKeys, beaconChainReports, authenticatedReportSignatures) => {

    const arrayLength = blsPublicKeys.length;
    if(arrayLength != authenticatedReports.length || arrayLength != beaconChainReports.length || arrayLength != authenticatedReportSignatures.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
        authenticatedReportSignatures[i].r = Buffer.from(authenticatedReportSignatures[i].r, 'hex');
        authenticatedReportSignatures[i].s = Buffer.from(authenticatedReportSignatures[i].s, 'hex');
    }

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.mintDerivatives(
        blsPublicKeys,
        beaconChainReports,
        authenticatedReportSignatures
    );
};

const _getNetworkFeeRecipient = async (signer, liquidStakingManagerAddress) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.getNetworkFeeRecipient();
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
    _isNodeRunnerBanned,
    _getNumberOfKnots,
    _getDaoCommissionPercentage,
    _isBLSPublicKeyBanned,
    _executeAsSmartWallet,
    _deRegisterKnotsFromSyndicate,
    _restoreFreeFloatingSharesToSmartWalletForRageQuit,
    _updateDaoAddress,
    _updateDaoRevenueCommission,
    _updateStakehouseTicker,
    _updateWhitelisting,
    _updateNodeRunnerWhitelistStatus,
    _rotateEOARepresentative,
    _rotateEOARepresentativeOfNodeRunner,
    _withdrawETHForKnot,
    _rotateNodeRunnerOfSmartWallet,
    _claimRewardsAsNodeRunner,
    _registerBLSPublicKeys,
    _isKnotDeregistered,
    _stake,
    _mintDerivatives,
    _getNetworkFeeRecipient
}
