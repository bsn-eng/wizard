const { gql, request } = require('graphql-request');
const { _getChainSpecificConstants, _extractChainID } = require('./constants');
const { _add0x } = require('./utils');

const _getValidatorFromSubgraph = async (signer, blsPublicKey) => {

    const chainID = await _extractChainID(signer);
	const { lsdUrls } = _getChainSpecificConstants(chainID);

    const lookupQuery = gql`
        query Knot($blsPublicKey: String!) {
            lsdvalidators(where:{
              id: $blsPublicKey
            }) {
              smartWallet {
                id
                nodeRunner {
                  id
                }
                liquidStakingNetwork {
                  id
                  ticker
                  feeRecipientAndSyndicate
                }
              }
              status
            }
        }
	`;

    const response = await request(
		lsdUrls.SUBGRAPH_ENDPOINT,
		lookupQuery,
        {
            blsPublicKey: _add0x(blsPublicKey.toLowerCase())
        }
	);

    if (!response || !response.lsdvalidators) {
		throw new Error('Invalid response getting the validators indexes');
	}

    return response.lsdvalidators[0];
};

const _getValidatorDetails = async (signer, blsPublicKey) => {
    
    try {
        const res = await _getValidatorFromSubgraph(signer, blsPublicKey);

        const feeRecipient = res.smartWallet.liquidStakingNetwork.feeRecipientAndSyndicate;
        const smartWallet = res.smartWallet.id;
        const nodeRunner = res.smartWallet.nodeRunner.id;
        const lsd = res.smartWallet.liquidStakingNetwork.ticker;
        const status = res.status;
        const liquidStakingManager = res.smartWallet.liquidStakingNetwork.id;

        return {
            liquidStakingManager, feeRecipient, nodeRunner, smartWallet, status, lsd
        };
    }
    catch(e) {
        return;
    }
};

module.exports = {
    _getValidatorDetails
};
