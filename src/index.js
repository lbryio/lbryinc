import * as LBRYINC_ACTIONS from 'constants/action_types';
import Lbryio from 'lbryio';
import rewards from 'rewards';
import subscriptionsReducer from 'redux/reducers/subscriptions';

// middleware
export { userStateSyncMiddleware } from 'redux/middleware/sync';

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
  doChannelSubscribe,
  doChannelUnsubscribe,
  doChannelSubscriptionEnableNotifications,
  doChannelSubscriptionDisableNotifications,
  doCheckSubscription,
  doCheckSubscriptions,
  doCheckSubscriptionsInit,
  doCompleteFirstRun,
  doFetchMySubscriptions,
  doFetchRecommendedSubscriptions,
  doRemoveUnreadSubscription,
  doRemoveUnreadSubscriptions,
  doSetViewMode,
  doShowSuggestedSubs,
  doUpdateUnreadSubscriptions,
  setSubscriptionLatest,
} from 'redux/actions/subscriptions';
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
export { doFetchCostInfoForUri } from 'redux/actions/cost_info';
export { doBlackListedOutpointsSubscribe } from 'redux/actions/blacklist';
export { doFilteredOutpointsSubscribe } from 'redux/actions/filtered';
export { doFetchFeaturedUris, doFetchTrendingUris } from 'redux/actions/homepage';
export { doFetchViewCount } from 'redux/actions/stats';
export {
  doCheckSync,
  doGetSync,
  doSetSync,
  doSetDefaultAccount,
  doSyncApply,
} from 'redux/actions/sync';

// reducers
export { authReducer } from 'redux/reducers/auth';
export { rewardsReducer } from 'redux/reducers/rewards';
export { subscriptionsReducer };
export { userReducer } from 'redux/reducers/user';
export { costInfoReducer } from 'redux/reducers/cost_info';
export { blacklistReducer } from 'redux/reducers/blacklist';
export { filteredReducer } from 'redux/reducers/filtered';
export { homepageReducer } from 'redux/reducers/homepage';
export { statsReducer } from 'redux/reducers/stats';
export { syncReducer } from 'redux/reducers/sync';

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
  selectClaimErrorsByType,
  selectRewardContentClaimIds,
  selectReferralReward,
} from 'redux/selectors/rewards';
export {
  makeSelectIsNew,
  makeSelectIsSubscribed,
  makeSelectUnreadByChannel,
  selectEnabledChannelNotifications,
  selectSubscriptions,
  selectIsFetchingSubscriptions,
  selectViewMode,
  selectSuggested,
  selectIsFetchingSuggested,
  selectSuggestedChannels,
  selectFirstRunCompleted,
  selectShowSuggestedSubs,
  selectSubscriptionsBeingFetched,
  selectUnreadByChannel,
  selectUnreadAmount,
  selectUnreadSubscriptions,
  selectSubscriptionClaims,
} from 'redux/selectors/subscriptions';
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
  selectUserInviteReferralLink,
  selectUserVerifiedEmail,
  selectYoutubeChannels,
} from 'redux/selectors/user';
export {
  makeSelectFetchingCostInfoForUri,
  makeSelectCostInfoForUri,
  selectAllCostInfoByUri,
  selectFetchingCostInfo,
} from 'redux/selectors/cost_info';
export { selectBlackListedOutpoints } from 'redux/selectors/blacklist';
export { selectFilteredOutpoints } from 'redux/selectors/filtered';
export {
  selectFeaturedUris,
  selectFetchingFeaturedUris,
  selectTrendingUris,
  selectFetchingTrendingUris,
} from 'redux/selectors/homepage';
export { makeSelectViewCountForUri } from 'redux/selectors/stats';
export {
  selectHasSyncedWallet,
  selectSyncData,
  selectSyncHash,
  selectSetSyncErrorMessage,
  selectGetSyncIsPending,
  selectSetSyncIsPending,
  selectSyncApplyIsPending,
  selectHashChanged,
  selectSyncApplyErrorMessage,
} from 'redux/selectors/sync';
