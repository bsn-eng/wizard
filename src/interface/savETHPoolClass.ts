import { Signer, Bytes, BigNumber } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import {
    _getIndexOwnedByTheVault,
    _batchDepositETHForStaking,
    _depositETHForStaking,
    _burnLPTokensByBLS,
    _burnLPTokens,
    _burnLPToken,
    _isDETHReadyForWithdrawal,
    _getdETHRequiredToIsolateWithdrawnKnot,
    _depositDETHForStaking,
    _approveProtectedStakingPoolToTransferDETH,
} from '../logic/savETHPool';

export class SavETHPoolSubPackage {

    etherSigner; savETHPoolAddress;

    constructor(signer: Signer | Provider, savETHPoolAddress: string) {
        this.etherSigner = signer;
        this.savETHPoolAddress = savETHPoolAddress;
    }

    getIndexOwnedByTheVault() {
        return _getIndexOwnedByTheVault(this.etherSigner, this.savETHPoolAddress);
    }

    batchDepositETHForStaking(blsPublicKeys: Array<string>, amounts: Array<string | BigNumber>, ethValue: BigNumber) {
        return _batchDepositETHForStaking(this.etherSigner, this.savETHPoolAddress, blsPublicKeys, amounts, ethValue);
    }

    depositETHForStaking(blsPublicKey: string, amount: string | BigNumber, ethValue: BigNumber) {
        return _depositETHForStaking(this.etherSigner, this.savETHPoolAddress, blsPublicKey, amount, ethValue);
    }

    burnLPTokensByBLS(blsPublicKeys: Array<string>, amounts: Array<string | BigNumber>) {
        return _burnLPTokensByBLS(this.etherSigner, this.savETHPoolAddress, blsPublicKeys, amounts);
    }

    burnLPTokens(lpTokens: Array<string>, amounts: Array<string | BigNumber>) {
        return _burnLPTokens(this.etherSigner, this.savETHPoolAddress, lpTokens, amounts);
    }

    burnLPToken(lpToken: string, amount: string | BigNumber) {
        return _burnLPToken(this.etherSigner, this.savETHPoolAddress, lpToken, amount);
    }

    isDETHReadyForWithdrawal(lpToken: string) {
        return _isDETHReadyForWithdrawal(this.etherSigner, this.savETHPoolAddress, lpToken);
    }

    getdETHRequiredToIsolateWithdrawnKnot(blsPublicKey: string) {
        return _getdETHRequiredToIsolateWithdrawnKnot(this.etherSigner, this.savETHPoolAddress, blsPublicKey);
    }

    depositDETHForStaking(blsPublicKey: string, amount: string | BigNumber) {
        return _depositDETHForStaking(this.etherSigner, this.savETHPoolAddress, blsPublicKey, amount);
    }

    approveProtectedStakingPoolToTransferDETH(amount: string | BigNumber) {
        return _approveProtectedStakingPoolToTransferDETH(this.etherSigner, this.savETHPoolAddress, amount);
    }
}
