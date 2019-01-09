import * as LBRYINC_ACTIONS from 'constants/action_types';
import Lbryio from 'lbryio';
import rewards from 'rewards';

// constants
export { LBRYINC_ACTIONS };

// Lbryio and rewards
export { Lbryio, rewards };

// actions
export { doGenerateAuthToken } from 'redux/actions/auth';
export {
  doRewardList,
  doClaimRewardType,
  doClaimEligiblePurchaseRewards,
  doClaimRewardClearError,
  doFetchRewardedContent,
} from 'redux/actions/rewards';
export {
  doFetchInviteStatus,
  doInstallNew,
  doAuthenticate,
  doUserFetch,
  doUserEmailNew,
  doUserCheckEmailVerified,
  doUserEmailToVerify,
  doUserEmailVerifyFailure,
  doUserEmailVerify,
  doUserPhoneNew,
  doUserPhoneReset,
  doUserPhoneVerifyFailure,
  doUserPhoneVerify,
  doFetchAccessToken,
  doUserResendVerificationEmail,
  doUserIdentityVerify,
  doUserInviteNew,
} from 'redux/actions/user';

// reducers
export { authReducer } from 'redux/reducers/auth';
export { rewardsReducer } from 'redux/reducers/rewards';
export { userReducer } from 'redux/reducers/user';

// selectors
export { selectAuthToken, selectIsAuthenticating } from 'redux/selectors/auth';
export {
  makeSelectClaimRewardError,
  makeSelectIsRewardClaimPending,
  makeSelectRewardAmountByType,
  makeSelectRewardByType,
  selectUnclaimedRewardsByType,
  selectClaimedRewardsById,
  selectClaimedRewards,
  selectClaimedRewardsByTransactionId,
  selectUnclaimedRewards,
  selectFetchingRewards,
  selectUnclaimedRewardValue,
  selectClaimsPendingByType,
  selectIsClaimRewardPending,
  selectClaimErrorsByType,
  selectClaimRewardError,
  selectRewardByType,
  selectRewardContentClaimIds,
} from 'redux/selectors/rewards';
export {
  selectAuthenticationIsPending,
  selectUserIsPending,
  selectUser,
  selectUserEmail,
  selectUserPhone,
  selectUserCountryCode,
  selectEmailToVerify,
  selectPhoneToVerify,
  selectUserIsRewardApproved,
  selectEmailNewIsPending,
  selectEmailNewErrorMessage,
  selectPhoneNewErrorMessage,
  selectPhoneNewIsPending,
  selectEmailVerifyIsPending,
  selectEmailVerifyErrorMessage,
  selectPhoneVerifyErrorMessage,
  selectPhoneVerifyIsPending,
  selectIdentityVerifyIsPending,
  selectIdentityVerifyErrorMessage,
  selectUserIsVerificationCandidate,
  selectAccessToken,
  selectUserInviteStatusIsPending,
  selectUserInvitesRemaining,
  selectUserInvitees,
  selectUserInviteStatusFailed,
  selectUserInviteNewIsPending,
  selectUserInviteNewErrorMessage,
} from 'redux/selectors/user';
