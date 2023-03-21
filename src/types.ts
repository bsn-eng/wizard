export enum ValidatorLifecycleStatuses {
    init,
    credentialsRegistered,
    depositCompleted,
    derivativesMinted,
    exited,
  }
  
export type ValidatorT = {
  id: string;
  lifecycleStatus: ValidatorLifecycleStatuses;
  depositTxHash: string;
  totalDETHMinted: string;
  totalSLOT: string;
  sETHMinted: string;
  mintFromBlockNumber?: number;
  stakeHouseMetadata?: {
    id: string;
    sETH: string;
    sETHExchangeRate: string;
    sETHTicker: string;
  };
  knotMetadata?: {
    isPartOfIndex: boolean;
  };
};
  
export type FinalisedBeaconChainReportT = {  
  blsPublicKey: string;
  withdrawalCredentials: string;
  slashed: boolean;
  activeBalance: string;
  effectiveBalance: string;
  exitEpoch: string;
  activationEpoch: string;
  withdrawalEpoch: string;
  currentCheckpointEpoch: number;
};

export type AuthenticatedBalanceReportT = {
  report: {
    blsPublicKey: string;
    withdrawalCredentials: string;
    slashed: boolean;
    activeBalance: string;
    effectiveBalance: string;
    exitEpoch: string;
    activationEpoch: string;
    withdrawalEpoch: string;
    currentCheckpointEpoch: number;
  };
  deadline: number;
  v: number;
  r: string;
  s: string;
  error?: {
    msg: string;
  }
};
