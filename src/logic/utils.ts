import { customErrors } from './constants';
import { getContractInstance } from './contracts';
import _ from 'lodash';
import { BigNumber, Bytes, Signer } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import { AuthenticatedBalanceReportT, FinalisedBeaconChainReportT } from '../types';

export const _add0x = (data: string) => {

	if(!data) {
		throw customErrors.NULL_OR_UNDEFINED_VALUE;
	}

	if(_.isString(data)) {
		return (data.indexOf('0x') !== -1) ? data : '0x'.concat(data);		
	}

	return data;
};

export const _remove0x = (data: string) => {

	if(!data) {
		throw customErrors.NULL_OR_UNDEFINED_VALUE;
	}

	if(_.isString(data)) {
		return (data.indexOf('0x') !== -1) ? data.slice(2) : data;
	}

	return data;
};

export const _getDAOAddress = async (signer: Signer | Provider, liquidStakingManagerAddress: string) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.dao();
};

export const _getSavETHVaultAddress = async (signer: Signer | Provider, liquidStakingManagerAddress: string) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.savETHVault();
};

export const _getFeesAndMEVPoolAddress = async (signer: Signer | Provider, liquidStakingManagerAddress: string) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.stakingFundsVault();
};

export const _getStakehouseTicker = async (signer: Signer | Provider, liquidStakingManagerAddress: string) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.stakehouseTicker();
};

export const _isWhitelistingEnabled = async (signer: Signer | Provider, liquidStakingManagerAddress: string) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.enableWhitelisting();
};

export const _isNodeRunnerWhitelisted = async (signer: Signer | Provider, liquidStakingManagerAddress: string, nodeRunnerAddress: string) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.isNodeRunnerWhitelisted(
        _add0x(nodeRunnerAddress)
    );
};

export const _getSmartWalletRepresentative = async (signer: Signer | Provider, liquidStakingManagerAddress: string, smartWalletAddress: string) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.smartWalletRepresentative(
        _add0x(smartWalletAddress)
    );
};

export const _getSmartWalletOfKnot = async (signer: Signer | Provider, liquidStakingManagerAddress: string, blsPublicKey: string) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.smartWalletOfKnot(
        _add0x(blsPublicKey)
    );
};

export const _getSmartWalletOfNodeRunner = async (signer: Signer | Provider, liquidStakingManagerAddress: string, nodeRunnerAddress: string) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.smartWalletOfNodeRunner(
        _add0x(nodeRunnerAddress)
    );
};

export const _getNodeRunnerOfSmartWallet = async (signer: Signer | Provider, liquidStakingManagerAddress: string, smartWalletAddress: string) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.nodeRunnerOfSmartWallet(
        _add0x(smartWalletAddress)
    )
};

export const _getStakedKnotsOfSmartWallet = async (signer: Signer | Provider, liquidStakingManagerAddress: string, smartWalletAddress: string) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.stakedKnotsOfSmartWallet(
        _add0x(smartWalletAddress)
    );
};

export const _getSmartWalletDormantRepresentative = async (signer: Signer | Provider, liquidStakingManagerAddress: string, smartWalletAddress: string) => {  

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.smartWalletDormantRepresentative(
        _add0x(smartWalletAddress)
    );
};

export const _isNodeRunnerBanned = async (signer: Signer | Provider, liquidStakingManagerAddress: string, nodeRunnerAddress: string) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.bannedNodeRunners(
        _add0x(nodeRunnerAddress)
    )
};

export const _getNumberOfKnots = async (signer: Signer | Provider, liquidStakingManagerAddress: string) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.numberOfKnots();
};

export const _getDaoCommissionPercentage = async (signer: Signer | Provider, liquidStakingManagerAddress: string) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.daoCommissionPercentage();
};

export const _isBLSPublicKeyBanned = async (signer: Signer | Provider, liquidStakingManagerAddress: string, blsPublicKey: string) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.isBLSPublicKeyBanned(
        _add0x(blsPublicKey)
    );
};

export const _deRegisterKnotsFromSyndicate = async (signer: Signer | Provider, liquidStakingManagerAddress: string, blsPublicKeys: Array<string>) => {

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
    }

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.deRegisterKnotFromSyndicate(
        blsPublicKeys
    );
};

export const _updateDaoAddress = async (signer: Signer | Provider, liquidStakingManagerAddress: string, newDaoAddress: string) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.updateDAOAddress(
        _add0x(newDaoAddress)
    );
};

export const _updateDaoRevenueCommission = async (signer: Signer | Provider, liquidStakingManagerAddress: string, newDaoRevenueCommission: BigNumber) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.updateDAORevenueCommission(
        newDaoRevenueCommission
    );
};

export const _updateStakehouseTicker = async (signer: Signer | Provider, liquidStakingManagerAddress: string, newStakehouseTicker: string) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.updateTicker(
        newStakehouseTicker
    );
};

export const _toggleHouseGatekeeper = async (signer: Signer | Provider, liquidStakingManagerAddress: string, enable: boolean) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.toggleHouseGatekeeper(
        enable
    );
};

export const _updateWhitelisting = async (signer: Signer | Provider, liquidStakingManagerAddress: string, newWhitelistingStatus: boolean) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.updateWhitelisting(
        newWhitelistingStatus
    );
};

export const _updateNodeRunnerWhitelistStatus = async (signer: Signer | Provider, liquidStakingManagerAddress: string, nodeRunnerAddresses: Array<string>, newWhitelistingStatus: boolean) => {

    for(let i=0; i<nodeRunnerAddresses.length; ++i) {
        nodeRunnerAddresses[i] = _add0x(nodeRunnerAddresses[i]);
    }

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.updateNodeRunnerWhitelistStatus(
        nodeRunnerAddresses,
        newWhitelistingStatus
    );
};

export const _rotateEOARepresentative = async (signer: Signer | Provider, liquidStakingManagerAddress: string, newRepresentativeAddress: string) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.rotateEOARepresentative(
        _add0x(newRepresentativeAddress)
    );
};

export const _withdrawETHForKnot = async (signer: Signer | Provider, liquidStakingManagerAddress: string, recipientAddress: string, blsPublicKey: string) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.withdrawETHForKnot(
        _add0x(recipientAddress),
        _add0x(blsPublicKey)
    );
};

export const _claimRewardsAsNodeRunner = async (signer: Signer | Provider, liquidStakingManagerAddress: string, recipientAddress: string, blsPublicKeys: Array<string>) => {

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
    }

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.claimRewardsAsNodeRunner(
        _add0x(recipientAddress),
        blsPublicKeys
    );
};

export const _registerBLSPublicKeys = async (signer: Signer | Provider, liquidStakingManagerAddress: string, blsPublicKeys: Array<string>, blsSignatures: Array<string>, representativeAddress: string, ethValue: BigNumber) => {

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

export const _stake = async (signer: Signer | Provider, liquidStakingManagerAddress: string, blsPublicKeys: Array<string>, cipherTexts: Array<string>, aesEncryptorKeys: Array<string>, encryptionSignatures: Array<AuthenticatedBalanceReportT>, dataRoots: Array<string>) => {

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

export const _mintDerivatives = async (signer: Signer | Provider, liquidStakingManagerAddress: string, blsPublicKeys: Array<string>, beaconChainReports: Array<FinalisedBeaconChainReportT>, authenticatedReportSignatures: Array<AuthenticatedBalanceReportT>) => {

    const arrayLength = blsPublicKeys.length;
    if(arrayLength != authenticatedReportSignatures.length || arrayLength != beaconChainReports.length || arrayLength != authenticatedReportSignatures.length) {
        throw new Error(customErrors.UNEQUAL_ARRAY_LENGTH);
    }

    for(let i=0; i<blsPublicKeys.length; ++i) {
        blsPublicKeys[i] = _add0x(blsPublicKeys[i]);
        authenticatedReportSignatures[i].r = (Buffer.from(authenticatedReportSignatures[i].r, 'hex')).toString();
        authenticatedReportSignatures[i].s = (Buffer.from(authenticatedReportSignatures[i].s, 'hex')).toString();
    }

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.mintDerivatives(
        blsPublicKeys,
        beaconChainReports,
        authenticatedReportSignatures
    );
};

export const _getNetworkFeeRecipient = async (signer: Signer | Provider, liquidStakingManagerAddress: string) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.getNetworkFeeRecipient();
};

export const _transferSmartWalletOwnership = async (signer: Signer | Provider, liquidStakingManagerAddress: string, newOwner: string) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.transferSmartWalletOwnership(
        newOwner
    );
};

export const _recoverSigningKey = async (signer: Signer | Provider, liquidStakingManagerAddress: string, safeBoxAddress: string, nodeRunnerAddress: string, blsPublicKey: string, hAesPublicKey: string) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.recoverSigningKey(
        _add0x(safeBoxAddress),
        _add0x(nodeRunnerAddress),
        _add0x(blsPublicKey),
        _add0x(hAesPublicKey)
    );
};

export const _updateSyndicateActivationDistanceInBlocks = async (signer: Signer | Provider, liquidStakingManagerAddress: string, distance: BigNumber) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);

    return contract.updateSyndicateActivationDistanceInBlocks(
        distance
    );
};

export const _getGateKeeperAddress = async (signer: Signer | Provider, liquidStakingManagerAddress: string) => {

    const contract = (await getContractInstance(signer)).liquidStakingManager(liquidStakingManagerAddress);
    
    return contract.gatekeeper();
};

export const _getFrenDelegationBribesByBLS = async (signer: Signer | Provider, bribeVaultAddress: string, blsKey: string) => {
	if(!blsKey) {
		throw customErrors.NULL_OR_UNDEFINED_VALUE;
	}

	const contract = (await getContractInstance(signer)).frenDelegationBribeVault(bribeVaultAddress);

	const bribeDepositData = await contract.deposits(_add0x(blsKey));

	const erc20Contract = (await getContractInstance(signer)).erc20(_add0x(bribeDepositData.token));
	const bribeTokenSymbol = await erc20Contract.symbol();
	const bribeTokenDecimals = await erc20Contract.decimals();

	const newBribeData = {
		id: bribeDepositData.id,
		token: bribeDepositData.token,
		tokenAmount: bribeDepositData.tokenAmount,
		tokenToEthRatio: bribeDepositData.tokenToEthRatio,
		expiration: bribeDepositData.expiration,
		snapshot: bribeDepositData.snapshot,
		tokenName: bribeTokenSymbol,
		tokenDecimals: bribeTokenDecimals
	};

	return newBribeData;
};