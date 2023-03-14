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

export type BalanceReportT = {
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

type BlsPublicKeyWith0x = { _blsPublicKeyWith0x: string };
type BlsPublicKeyWithout0x = { _blsPublicKeyWithout0x: string };

type HexString = BlsPublicKeyWith0x | BlsPublicKeyWithout0x;

function createBlsPublicKeyWith0x(s: string): BlsPublicKeyWith0x {
  if (s.length !== 98 || !s.startsWith('0x')) {
    throw new Error('Invalid hex string');
  }
  return { _blsPublicKeyWith0x: s };
}

function createBlsPublicKeyWithout0x(s: string): BlsPublicKeyWithout0x {
  if (s.length !== 96) {
    throw new Error('Invalid hex string');
  }
  if (s.startsWith('0x')) {
    throw new Error('Invalid string length');
  }
  return { _blsPublicKeyWithout0x: `0x${s}` };
}

function isBlsPublicKeyWith0x(s: string): s is BlsPublicKeyWith0x {
  return s.length === 98 && s.startsWith('0x');
}

function isBlsPublicKeyWithout0x(s: string): s is BlsPublicKeyWithout0x {
  return s.length === 96 && !s.startsWith('0x');
}
