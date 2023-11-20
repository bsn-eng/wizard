import { Provider } from '@ethersproject/abstract-provider';
import { Signer, Bytes } from 'ethers';
import { gql, request } from 'graphql-request';
import { _getChainSpecificConstants, _extractChainID } from './constants';
import { _add0x } from './utils';
import axios from 'axios';
import { FinalisedBeaconChainReportT } from '../types';

const _getValidatorFromSubgraph = async (signer: Signer | Provider, blsPublicKey: string) => {

    const chainID = await _extractChainID(signer);
    const lsdUrls = _getChainSpecificConstants(chainID).lsdUrls;

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

export const _getValidatorDetails = async (signer: Signer | Provider, blsPublicKey: string) => {
    
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

export const _getFinalisedEpochReportForMultipleBlsKeys = async (signer: Signer | Provider, beaconNodeURL: string, blsPublicKeys: Array <string>, status?: Array <string>) => {
    
  if (status == null) {
      status = ["active"];
  }

  let validStates = ["pending_initialized", "pending_queued", "active_ongoing", "active_exiting", "active_slashed", "exited_unslashed", "exited_slashed", "withdrawal_possible", "withdrawal_done", "active", "pending", "exited", "withdrawal"];
  
  for (let i=0; i<status.length; ++i) {
      if (!validStates.includes(status[i])){
          throw new Error("Error: Invalid validator states");
      }
  }

  const numberOfBLSKeys = blsPublicKeys.length;
  const batchLength = 75;
  let blsKeyToEpochReport: {[key:string]:{
    validatorIndex: string,
    blsPublicKey: string,
    withdrawalCredentials: string,
    slashed: boolean,
    activeBalance: string,
    effectiveBalance: string,
    exitEpoch: string,
    activationEpoch: string,
    withdrawalEpoch: string,
    currentCheckpointEpoch: number 
  }} = {};
  let beaconChainReports: Array<FinalisedBeaconChainReportT> = [];

  const client = axios.create({baseURL: beaconNodeURL});

  let response = await client.get('/eth/v1/beacon/states/head/finality_checkpoints');

  const apiData = response.data;
  const {finalized} = apiData.data;
  const checkpointEpoch = parseInt(finalized.epoch);

  try{
      for (let i = 0; i < Math.ceil(numberOfBLSKeys/batchLength); ++i) {
        let query = "";
        let blsPublicKeysBatch = blsPublicKeys.slice(i*batchLength, Math.min(numberOfBLSKeys, (i+1)*batchLength));
     
        for (let j=0; j<blsPublicKeysBatch.length; ++j) {
          if (j == (blsPublicKeysBatch.length - 1)){
            query = query + "id=" + blsPublicKeysBatch[j];
            for (let k=0; k<status.length; ++k) {
              query = query  + "&status=" + status[k];
            }
          }
          else {
            query = query + "id=" + blsPublicKeysBatch[j] + "&";
          }
        }
        response = await client.get(
          '/eth/v1/beacon/states/finalized/validators?' + query
        );

        let validatorData = [];
        validatorData = response.data.data;

        for (let j=0; j<validatorData.length; ++j) {
          const { balance, validator, index } = validatorData[j];
          const {
            pubkey,
            withdrawal_credentials,
            effective_balance,
            slashed,
            activation_eligibility_epoch,
            exit_epoch,
            withdrawable_epoch
          } = validator

          blsKeyToEpochReport[pubkey] = {
            validatorIndex: index,
            blsPublicKey: pubkey.slice(2),
            withdrawalCredentials: withdrawal_credentials.slice(2),
            slashed,
            activeBalance: balance,
            effectiveBalance: effective_balance,
            exitEpoch: exit_epoch,
            activationEpoch: activation_eligibility_epoch,
            withdrawalEpoch: withdrawable_epoch,
            currentCheckpointEpoch: checkpointEpoch
          };
        }
      }

      const chainID = await _extractChainID(signer);
      const lsdUrls = _getChainSpecificConstants(chainID).lsdUrls;
  
      const lookupQuery = gql`
        query getLastDepositIndex($ids: [String!]) {
          stakehouseAccounts(where:{id_in: $ids}) {
            id
            lastDepositDepositCount
          }
        }
      `;

      const ids =  Object.keys(blsKeyToEpochReport).map(x => x.toLowerCase());

      const lookupResponse = await request(
        lsdUrls.STAKEHOUSE_SUBGRAPH_ENDPOINT,
        lookupQuery,
        {
          ids: ids
        }
      );

      if (!lookupResponse || !lookupResponse.stakehouseAccounts) {
        throw new Error('Invalid response getting lastDepositDepositCount')
      }

      for (let i=0; i<lookupResponse.stakehouseAccounts.length; ++i) {
        beaconChainReports.push({
          ...blsKeyToEpochReport[lookupResponse.stakehouseAccounts[i].id],
          lastDepositIndex: lookupResponse.stakehouseAccounts[i].lastDepositDepositCount
        })
      }
            
      beaconChainReports.sort((a,b) => {
        return blsPublicKeys.indexOf(`0x${a.blsPublicKey}`) - blsPublicKeys.indexOf(`0x${b.blsPublicKey}`);
      })

      return beaconChainReports;

    } catch (e) {
      throw new Error('Error: Failed to get finalised epoch reports');
  }
};
