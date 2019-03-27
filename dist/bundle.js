(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lbry-redux"));
	else if(typeof define === 'function' && define.amd)
		define(["lbry-redux"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("lbry-redux")) : factory(root["lbry-redux"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectViewCountForUri = exports.selectFetchingTrendingUris = exports.selectTrendingUris = exports.selectFetchingFeaturedUris = exports.selectFeaturedUris = exports.selectBlackListedOutpoints = exports.selectFetchingCostInfo = exports.selectAllCostInfoByUri = exports.makeSelectCostInfoForUri = exports.makeSelectFetchingCostInfoForUri = exports.selectUserInviteReferralLink = exports.selectUserInviteNewErrorMessage = exports.selectUserInviteNewIsPending = exports.selectUserInviteStatusFailed = exports.selectUserInvitees = exports.selectUserInvitesRemaining = exports.selectUserInviteStatusIsPending = exports.selectAccessToken = exports.selectUserIsVerificationCandidate = exports.selectIdentityVerifyErrorMessage = exports.selectIdentityVerifyIsPending = exports.selectPhoneVerifyIsPending = exports.selectPhoneVerifyErrorMessage = exports.selectEmailVerifyErrorMessage = exports.selectEmailVerifyIsPending = exports.selectPhoneNewIsPending = exports.selectPhoneNewErrorMessage = exports.selectEmailNewErrorMessage = exports.selectEmailNewIsPending = exports.selectUserIsRewardApproved = undefined;
exports.selectPhoneToVerify = exports.selectEmailToVerify = exports.selectUserCountryCode = exports.selectUserPhone = exports.selectUserEmail = exports.selectUser = exports.selectUserIsPending = exports.selectAuthenticationIsPending = exports.selectSubscriptionClaims = exports.selectUnreadSubscriptions = exports.selectUnreadAmount = exports.selectUnreadByChannel = exports.selectSubscriptionsBeingFetched = exports.selectShowSuggestedSubs = exports.selectFirstRunCompleted = exports.selectSuggestedChannels = exports.selectIsFetchingSuggested = exports.selectSuggested = exports.selectViewMode = exports.selectIsFetchingSubscriptions = exports.selectSubscriptions = exports.selectEnabledChannelNotifications = exports.makeSelectUnreadByChannel = exports.makeSelectIsSubscribed = exports.makeSelectIsNew = exports.selectReferralReward = exports.selectRewardContentClaimIds = exports.selectRewardByType = exports.selectClaimRewardError = exports.selectClaimErrorsByType = exports.selectIsClaimRewardPending = exports.selectClaimsPendingByType = exports.selectUnclaimedRewardValue = exports.selectFetchingRewards = exports.selectUnclaimedRewards = exports.selectClaimedRewardsByTransactionId = exports.selectClaimedRewards = exports.selectClaimedRewardsById = exports.selectUnclaimedRewardsByType = exports.makeSelectRewardByType = exports.makeSelectRewardAmountByType = exports.makeSelectIsRewardClaimPending = exports.makeSelectClaimRewardError = exports.selectIsAuthenticating = exports.selectAuthToken = exports.statsReducer = exports.homepageReducer = exports.blacklistReducer = exports.costInfoReducer = exports.userReducer = exports.subscriptionsReducer = exports.rewardsReducer = exports.authReducer = exports.doFetchViewCount = exports.doFetchTrendingUris = exports.doFetchFeaturedUris = exports.doBlackListedOutpointsSubscribe = exports.doFetchCostInfoForUri = exports.doUserInviteNew = exports.doUserIdentityVerify = exports.doUserResendVerificationEmail = exports.doFetchAccessToken = exports.doUserPhoneVerify = exports.doUserPhoneVerifyFailure = exports.doUserPhoneReset = exports.doUserPhoneNew = exports.doUserEmailVerify = exports.doUserEmailVerifyFailure = exports.doUserEmailToVerify = exports.doUserCheckEmailVerified = exports.doUserEmailNew = exports.doUserFetch = exports.doAuthenticate = exports.doInstallNew = exports.doFetchInviteStatus = exports.setSubscriptionLatest = exports.doUpdateUnreadSubscriptions = exports.doShowSuggestedSubs = exports.doSetViewMode = exports.doRemoveUnreadSubscriptions = exports.doRemoveUnreadSubscription = exports.doFetchRecommendedSubscriptions = exports.doFetchMySubscriptions = exports.doCompleteFirstRun = exports.doCheckSubscriptionsInit = exports.doCheckSubscriptions = exports.doCheckSubscription = exports.doChannelSubscriptionDisableNotifications = exports.doChannelSubscriptionEnableNotifications = exports.doChannelUnsubscribe = exports.doChannelSubscribe = exports.doFetchRewardedContent = exports.doClaimRewardClearError = exports.doClaimEligiblePurchaseRewards = exports.doClaimRewardType = exports.doRewardList = exports.doGenerateAuthToken = exports.rewards = exports.Lbryio = exports.LBRYINC_ACTIONS = undefined;

var _auth = __webpack_require__(1);

Object.defineProperty(exports, 'doGenerateAuthToken', {
  enumerable: true,
  get: function get() {
    return _auth.doGenerateAuthToken;
  }
});

var _rewards = __webpack_require__(8);

Object.defineProperty(exports, 'doRewardList', {
  enumerable: true,
  get: function get() {
    return _rewards.doRewardList;
  }
});
Object.defineProperty(exports, 'doClaimRewardType', {
  enumerable: true,
  get: function get() {
    return _rewards.doClaimRewardType;
  }
});
Object.defineProperty(exports, 'doClaimEligiblePurchaseRewards', {
  enumerable: true,
  get: function get() {
    return _rewards.doClaimEligiblePurchaseRewards;
  }
});
Object.defineProperty(exports, 'doClaimRewardClearError', {
  enumerable: true,
  get: function get() {
    return _rewards.doClaimRewardClearError;
  }
});
Object.defineProperty(exports, 'doFetchRewardedContent', {
  enumerable: true,
  get: function get() {
    return _rewards.doFetchRewardedContent;
  }
});

var _subscriptions = __webpack_require__(19);

Object.defineProperty(exports, 'doChannelSubscribe', {
  enumerable: true,
  get: function get() {
    return _subscriptions.doChannelSubscribe;
  }
});
Object.defineProperty(exports, 'doChannelUnsubscribe', {
  enumerable: true,
  get: function get() {
    return _subscriptions.doChannelUnsubscribe;
  }
});
Object.defineProperty(exports, 'doChannelSubscriptionEnableNotifications', {
  enumerable: true,
  get: function get() {
    return _subscriptions.doChannelSubscriptionEnableNotifications;
  }
});
Object.defineProperty(exports, 'doChannelSubscriptionDisableNotifications', {
  enumerable: true,
  get: function get() {
    return _subscriptions.doChannelSubscriptionDisableNotifications;
  }
});
Object.defineProperty(exports, 'doCheckSubscription', {
  enumerable: true,
  get: function get() {
    return _subscriptions.doCheckSubscription;
  }
});
Object.defineProperty(exports, 'doCheckSubscriptions', {
  enumerable: true,
  get: function get() {
    return _subscriptions.doCheckSubscriptions;
  }
});
Object.defineProperty(exports, 'doCheckSubscriptionsInit', {
  enumerable: true,
  get: function get() {
    return _subscriptions.doCheckSubscriptionsInit;
  }
});
Object.defineProperty(exports, 'doCompleteFirstRun', {
  enumerable: true,
  get: function get() {
    return _subscriptions.doCompleteFirstRun;
  }
});
Object.defineProperty(exports, 'doFetchMySubscriptions', {
  enumerable: true,
  get: function get() {
    return _subscriptions.doFetchMySubscriptions;
  }
});
Object.defineProperty(exports, 'doFetchRecommendedSubscriptions', {
  enumerable: true,
  get: function get() {
    return _subscriptions.doFetchRecommendedSubscriptions;
  }
});
Object.defineProperty(exports, 'doRemoveUnreadSubscription', {
  enumerable: true,
  get: function get() {
    return _subscriptions.doRemoveUnreadSubscription;
  }
});
Object.defineProperty(exports, 'doRemoveUnreadSubscriptions', {
  enumerable: true,
  get: function get() {
    return _subscriptions.doRemoveUnreadSubscriptions;
  }
});
Object.defineProperty(exports, 'doSetViewMode', {
  enumerable: true,
  get: function get() {
    return _subscriptions.doSetViewMode;
  }
});
Object.defineProperty(exports, 'doShowSuggestedSubs', {
  enumerable: true,
  get: function get() {
    return _subscriptions.doShowSuggestedSubs;
  }
});
Object.defineProperty(exports, 'doUpdateUnreadSubscriptions', {
  enumerable: true,
  get: function get() {
    return _subscriptions.doUpdateUnreadSubscriptions;
  }
});
Object.defineProperty(exports, 'setSubscriptionLatest', {
  enumerable: true,
  get: function get() {
    return _subscriptions.setSubscriptionLatest;
  }
});

var _user = __webpack_require__(13);

Object.defineProperty(exports, 'doFetchInviteStatus', {
  enumerable: true,
  get: function get() {
    return _user.doFetchInviteStatus;
  }
});
Object.defineProperty(exports, 'doInstallNew', {
  enumerable: true,
  get: function get() {
    return _user.doInstallNew;
  }
});
Object.defineProperty(exports, 'doAuthenticate', {
  enumerable: true,
  get: function get() {
    return _user.doAuthenticate;
  }
});
Object.defineProperty(exports, 'doUserFetch', {
  enumerable: true,
  get: function get() {
    return _user.doUserFetch;
  }
});
Object.defineProperty(exports, 'doUserEmailNew', {
  enumerable: true,
  get: function get() {
    return _user.doUserEmailNew;
  }
});
Object.defineProperty(exports, 'doUserCheckEmailVerified', {
  enumerable: true,
  get: function get() {
    return _user.doUserCheckEmailVerified;
  }
});
Object.defineProperty(exports, 'doUserEmailToVerify', {
  enumerable: true,
  get: function get() {
    return _user.doUserEmailToVerify;
  }
});
Object.defineProperty(exports, 'doUserEmailVerifyFailure', {
  enumerable: true,
  get: function get() {
    return _user.doUserEmailVerifyFailure;
  }
});
Object.defineProperty(exports, 'doUserEmailVerify', {
  enumerable: true,
  get: function get() {
    return _user.doUserEmailVerify;
  }
});
Object.defineProperty(exports, 'doUserPhoneNew', {
  enumerable: true,
  get: function get() {
    return _user.doUserPhoneNew;
  }
});
Object.defineProperty(exports, 'doUserPhoneReset', {
  enumerable: true,
  get: function get() {
    return _user.doUserPhoneReset;
  }
});
Object.defineProperty(exports, 'doUserPhoneVerifyFailure', {
  enumerable: true,
  get: function get() {
    return _user.doUserPhoneVerifyFailure;
  }
});
Object.defineProperty(exports, 'doUserPhoneVerify', {
  enumerable: true,
  get: function get() {
    return _user.doUserPhoneVerify;
  }
});
Object.defineProperty(exports, 'doFetchAccessToken', {
  enumerable: true,
  get: function get() {
    return _user.doFetchAccessToken;
  }
});
Object.defineProperty(exports, 'doUserResendVerificationEmail', {
  enumerable: true,
  get: function get() {
    return _user.doUserResendVerificationEmail;
  }
});
Object.defineProperty(exports, 'doUserIdentityVerify', {
  enumerable: true,
  get: function get() {
    return _user.doUserIdentityVerify;
  }
});
Object.defineProperty(exports, 'doUserInviteNew', {
  enumerable: true,
  get: function get() {
    return _user.doUserInviteNew;
  }
});

var _cost_info = __webpack_require__(24);

Object.defineProperty(exports, 'doFetchCostInfoForUri', {
  enumerable: true,
  get: function get() {
    return _cost_info.doFetchCostInfoForUri;
  }
});

var _blacklist = __webpack_require__(25);

Object.defineProperty(exports, 'doBlackListedOutpointsSubscribe', {
  enumerable: true,
  get: function get() {
    return _blacklist.doBlackListedOutpointsSubscribe;
  }
});

var _homepage = __webpack_require__(26);

Object.defineProperty(exports, 'doFetchFeaturedUris', {
  enumerable: true,
  get: function get() {
    return _homepage.doFetchFeaturedUris;
  }
});
Object.defineProperty(exports, 'doFetchTrendingUris', {
  enumerable: true,
  get: function get() {
    return _homepage.doFetchTrendingUris;
  }
});

var _stats = __webpack_require__(27);

Object.defineProperty(exports, 'doFetchViewCount', {
  enumerable: true,
  get: function get() {
    return _stats.doFetchViewCount;
  }
});

var _auth2 = __webpack_require__(28);

Object.defineProperty(exports, 'authReducer', {
  enumerable: true,
  get: function get() {
    return _auth2.authReducer;
  }
});

var _rewards2 = __webpack_require__(29);

Object.defineProperty(exports, 'rewardsReducer', {
  enumerable: true,
  get: function get() {
    return _rewards2.rewardsReducer;
  }
});

var _user2 = __webpack_require__(30);

Object.defineProperty(exports, 'userReducer', {
  enumerable: true,
  get: function get() {
    return _user2.userReducer;
  }
});

var _cost_info2 = __webpack_require__(31);

Object.defineProperty(exports, 'costInfoReducer', {
  enumerable: true,
  get: function get() {
    return _cost_info2.costInfoReducer;
  }
});

var _blacklist2 = __webpack_require__(33);

Object.defineProperty(exports, 'blacklistReducer', {
  enumerable: true,
  get: function get() {
    return _blacklist2.blacklistReducer;
  }
});

var _homepage2 = __webpack_require__(34);

Object.defineProperty(exports, 'homepageReducer', {
  enumerable: true,
  get: function get() {
    return _homepage2.homepageReducer;
  }
});

var _stats2 = __webpack_require__(35);

Object.defineProperty(exports, 'statsReducer', {
  enumerable: true,
  get: function get() {
    return _stats2.statsReducer;
  }
});

var _auth3 = __webpack_require__(36);

Object.defineProperty(exports, 'selectAuthToken', {
  enumerable: true,
  get: function get() {
    return _auth3.selectAuthToken;
  }
});
Object.defineProperty(exports, 'selectIsAuthenticating', {
  enumerable: true,
  get: function get() {
    return _auth3.selectIsAuthenticating;
  }
});

var _rewards3 = __webpack_require__(9);

Object.defineProperty(exports, 'makeSelectClaimRewardError', {
  enumerable: true,
  get: function get() {
    return _rewards3.makeSelectClaimRewardError;
  }
});
Object.defineProperty(exports, 'makeSelectIsRewardClaimPending', {
  enumerable: true,
  get: function get() {
    return _rewards3.makeSelectIsRewardClaimPending;
  }
});
Object.defineProperty(exports, 'makeSelectRewardAmountByType', {
  enumerable: true,
  get: function get() {
    return _rewards3.makeSelectRewardAmountByType;
  }
});
Object.defineProperty(exports, 'makeSelectRewardByType', {
  enumerable: true,
  get: function get() {
    return _rewards3.makeSelectRewardByType;
  }
});
Object.defineProperty(exports, 'selectUnclaimedRewardsByType', {
  enumerable: true,
  get: function get() {
    return _rewards3.selectUnclaimedRewardsByType;
  }
});
Object.defineProperty(exports, 'selectClaimedRewardsById', {
  enumerable: true,
  get: function get() {
    return _rewards3.selectClaimedRewardsById;
  }
});
Object.defineProperty(exports, 'selectClaimedRewards', {
  enumerable: true,
  get: function get() {
    return _rewards3.selectClaimedRewards;
  }
});
Object.defineProperty(exports, 'selectClaimedRewardsByTransactionId', {
  enumerable: true,
  get: function get() {
    return _rewards3.selectClaimedRewardsByTransactionId;
  }
});
Object.defineProperty(exports, 'selectUnclaimedRewards', {
  enumerable: true,
  get: function get() {
    return _rewards3.selectUnclaimedRewards;
  }
});
Object.defineProperty(exports, 'selectFetchingRewards', {
  enumerable: true,
  get: function get() {
    return _rewards3.selectFetchingRewards;
  }
});
Object.defineProperty(exports, 'selectUnclaimedRewardValue', {
  enumerable: true,
  get: function get() {
    return _rewards3.selectUnclaimedRewardValue;
  }
});
Object.defineProperty(exports, 'selectClaimsPendingByType', {
  enumerable: true,
  get: function get() {
    return _rewards3.selectClaimsPendingByType;
  }
});
Object.defineProperty(exports, 'selectIsClaimRewardPending', {
  enumerable: true,
  get: function get() {
    return _rewards3.selectIsClaimRewardPending;
  }
});
Object.defineProperty(exports, 'selectClaimErrorsByType', {
  enumerable: true,
  get: function get() {
    return _rewards3.selectClaimErrorsByType;
  }
});
Object.defineProperty(exports, 'selectClaimRewardError', {
  enumerable: true,
  get: function get() {
    return _rewards3.selectClaimRewardError;
  }
});
Object.defineProperty(exports, 'selectRewardByType', {
  enumerable: true,
  get: function get() {
    return _rewards3.selectRewardByType;
  }
});
Object.defineProperty(exports, 'selectRewardContentClaimIds', {
  enumerable: true,
  get: function get() {
    return _rewards3.selectRewardContentClaimIds;
  }
});
Object.defineProperty(exports, 'selectReferralReward', {
  enumerable: true,
  get: function get() {
    return _rewards3.selectReferralReward;
  }
});

var _subscriptions2 = __webpack_require__(21);

Object.defineProperty(exports, 'makeSelectIsNew', {
  enumerable: true,
  get: function get() {
    return _subscriptions2.makeSelectIsNew;
  }
});
Object.defineProperty(exports, 'makeSelectIsSubscribed', {
  enumerable: true,
  get: function get() {
    return _subscriptions2.makeSelectIsSubscribed;
  }
});
Object.defineProperty(exports, 'makeSelectUnreadByChannel', {
  enumerable: true,
  get: function get() {
    return _subscriptions2.makeSelectUnreadByChannel;
  }
});
Object.defineProperty(exports, 'selectEnabledChannelNotifications', {
  enumerable: true,
  get: function get() {
    return _subscriptions2.selectEnabledChannelNotifications;
  }
});
Object.defineProperty(exports, 'selectSubscriptions', {
  enumerable: true,
  get: function get() {
    return _subscriptions2.selectSubscriptions;
  }
});
Object.defineProperty(exports, 'selectIsFetchingSubscriptions', {
  enumerable: true,
  get: function get() {
    return _subscriptions2.selectIsFetchingSubscriptions;
  }
});
Object.defineProperty(exports, 'selectViewMode', {
  enumerable: true,
  get: function get() {
    return _subscriptions2.selectViewMode;
  }
});
Object.defineProperty(exports, 'selectSuggested', {
  enumerable: true,
  get: function get() {
    return _subscriptions2.selectSuggested;
  }
});
Object.defineProperty(exports, 'selectIsFetchingSuggested', {
  enumerable: true,
  get: function get() {
    return _subscriptions2.selectIsFetchingSuggested;
  }
});
Object.defineProperty(exports, 'selectSuggestedChannels', {
  enumerable: true,
  get: function get() {
    return _subscriptions2.selectSuggestedChannels;
  }
});
Object.defineProperty(exports, 'selectFirstRunCompleted', {
  enumerable: true,
  get: function get() {
    return _subscriptions2.selectFirstRunCompleted;
  }
});
Object.defineProperty(exports, 'selectShowSuggestedSubs', {
  enumerable: true,
  get: function get() {
    return _subscriptions2.selectShowSuggestedSubs;
  }
});
Object.defineProperty(exports, 'selectSubscriptionsBeingFetched', {
  enumerable: true,
  get: function get() {
    return _subscriptions2.selectSubscriptionsBeingFetched;
  }
});
Object.defineProperty(exports, 'selectUnreadByChannel', {
  enumerable: true,
  get: function get() {
    return _subscriptions2.selectUnreadByChannel;
  }
});
Object.defineProperty(exports, 'selectUnreadAmount', {
  enumerable: true,
  get: function get() {
    return _subscriptions2.selectUnreadAmount;
  }
});
Object.defineProperty(exports, 'selectUnreadSubscriptions', {
  enumerable: true,
  get: function get() {
    return _subscriptions2.selectUnreadSubscriptions;
  }
});
Object.defineProperty(exports, 'selectSubscriptionClaims', {
  enumerable: true,
  get: function get() {
    return _subscriptions2.selectSubscriptionClaims;
  }
});

var _user3 = __webpack_require__(12);

Object.defineProperty(exports, 'selectAuthenticationIsPending', {
  enumerable: true,
  get: function get() {
    return _user3.selectAuthenticationIsPending;
  }
});
Object.defineProperty(exports, 'selectUserIsPending', {
  enumerable: true,
  get: function get() {
    return _user3.selectUserIsPending;
  }
});
Object.defineProperty(exports, 'selectUser', {
  enumerable: true,
  get: function get() {
    return _user3.selectUser;
  }
});
Object.defineProperty(exports, 'selectUserEmail', {
  enumerable: true,
  get: function get() {
    return _user3.selectUserEmail;
  }
});
Object.defineProperty(exports, 'selectUserPhone', {
  enumerable: true,
  get: function get() {
    return _user3.selectUserPhone;
  }
});
Object.defineProperty(exports, 'selectUserCountryCode', {
  enumerable: true,
  get: function get() {
    return _user3.selectUserCountryCode;
  }
});
Object.defineProperty(exports, 'selectEmailToVerify', {
  enumerable: true,
  get: function get() {
    return _user3.selectEmailToVerify;
  }
});
Object.defineProperty(exports, 'selectPhoneToVerify', {
  enumerable: true,
  get: function get() {
    return _user3.selectPhoneToVerify;
  }
});
Object.defineProperty(exports, 'selectUserIsRewardApproved', {
  enumerable: true,
  get: function get() {
    return _user3.selectUserIsRewardApproved;
  }
});
Object.defineProperty(exports, 'selectEmailNewIsPending', {
  enumerable: true,
  get: function get() {
    return _user3.selectEmailNewIsPending;
  }
});
Object.defineProperty(exports, 'selectEmailNewErrorMessage', {
  enumerable: true,
  get: function get() {
    return _user3.selectEmailNewErrorMessage;
  }
});
Object.defineProperty(exports, 'selectPhoneNewErrorMessage', {
  enumerable: true,
  get: function get() {
    return _user3.selectPhoneNewErrorMessage;
  }
});
Object.defineProperty(exports, 'selectPhoneNewIsPending', {
  enumerable: true,
  get: function get() {
    return _user3.selectPhoneNewIsPending;
  }
});
Object.defineProperty(exports, 'selectEmailVerifyIsPending', {
  enumerable: true,
  get: function get() {
    return _user3.selectEmailVerifyIsPending;
  }
});
Object.defineProperty(exports, 'selectEmailVerifyErrorMessage', {
  enumerable: true,
  get: function get() {
    return _user3.selectEmailVerifyErrorMessage;
  }
});
Object.defineProperty(exports, 'selectPhoneVerifyErrorMessage', {
  enumerable: true,
  get: function get() {
    return _user3.selectPhoneVerifyErrorMessage;
  }
});
Object.defineProperty(exports, 'selectPhoneVerifyIsPending', {
  enumerable: true,
  get: function get() {
    return _user3.selectPhoneVerifyIsPending;
  }
});
Object.defineProperty(exports, 'selectIdentityVerifyIsPending', {
  enumerable: true,
  get: function get() {
    return _user3.selectIdentityVerifyIsPending;
  }
});
Object.defineProperty(exports, 'selectIdentityVerifyErrorMessage', {
  enumerable: true,
  get: function get() {
    return _user3.selectIdentityVerifyErrorMessage;
  }
});
Object.defineProperty(exports, 'selectUserIsVerificationCandidate', {
  enumerable: true,
  get: function get() {
    return _user3.selectUserIsVerificationCandidate;
  }
});
Object.defineProperty(exports, 'selectAccessToken', {
  enumerable: true,
  get: function get() {
    return _user3.selectAccessToken;
  }
});
Object.defineProperty(exports, 'selectUserInviteStatusIsPending', {
  enumerable: true,
  get: function get() {
    return _user3.selectUserInviteStatusIsPending;
  }
});
Object.defineProperty(exports, 'selectUserInvitesRemaining', {
  enumerable: true,
  get: function get() {
    return _user3.selectUserInvitesRemaining;
  }
});
Object.defineProperty(exports, 'selectUserInvitees', {
  enumerable: true,
  get: function get() {
    return _user3.selectUserInvitees;
  }
});
Object.defineProperty(exports, 'selectUserInviteStatusFailed', {
  enumerable: true,
  get: function get() {
    return _user3.selectUserInviteStatusFailed;
  }
});
Object.defineProperty(exports, 'selectUserInviteNewIsPending', {
  enumerable: true,
  get: function get() {
    return _user3.selectUserInviteNewIsPending;
  }
});
Object.defineProperty(exports, 'selectUserInviteNewErrorMessage', {
  enumerable: true,
  get: function get() {
    return _user3.selectUserInviteNewErrorMessage;
  }
});
Object.defineProperty(exports, 'selectUserInviteReferralLink', {
  enumerable: true,
  get: function get() {
    return _user3.selectUserInviteReferralLink;
  }
});

var _cost_info3 = __webpack_require__(37);

Object.defineProperty(exports, 'makeSelectFetchingCostInfoForUri', {
  enumerable: true,
  get: function get() {
    return _cost_info3.makeSelectFetchingCostInfoForUri;
  }
});
Object.defineProperty(exports, 'makeSelectCostInfoForUri', {
  enumerable: true,
  get: function get() {
    return _cost_info3.makeSelectCostInfoForUri;
  }
});
Object.defineProperty(exports, 'selectAllCostInfoByUri', {
  enumerable: true,
  get: function get() {
    return _cost_info3.selectAllCostInfoByUri;
  }
});
Object.defineProperty(exports, 'selectFetchingCostInfo', {
  enumerable: true,
  get: function get() {
    return _cost_info3.selectFetchingCostInfo;
  }
});

var _blacklist3 = __webpack_require__(38);

Object.defineProperty(exports, 'selectBlackListedOutpoints', {
  enumerable: true,
  get: function get() {
    return _blacklist3.selectBlackListedOutpoints;
  }
});

var _homepage3 = __webpack_require__(39);

Object.defineProperty(exports, 'selectFeaturedUris', {
  enumerable: true,
  get: function get() {
    return _homepage3.selectFeaturedUris;
  }
});
Object.defineProperty(exports, 'selectFetchingFeaturedUris', {
  enumerable: true,
  get: function get() {
    return _homepage3.selectFetchingFeaturedUris;
  }
});
Object.defineProperty(exports, 'selectTrendingUris', {
  enumerable: true,
  get: function get() {
    return _homepage3.selectTrendingUris;
  }
});
Object.defineProperty(exports, 'selectFetchingTrendingUris', {
  enumerable: true,
  get: function get() {
    return _homepage3.selectFetchingTrendingUris;
  }
});

var _stats3 = __webpack_require__(40);

Object.defineProperty(exports, 'makeSelectViewCountForUri', {
  enumerable: true,
  get: function get() {
    return _stats3.makeSelectViewCountForUri;
  }
});

var _action_types = __webpack_require__(2);

var LBRYINC_ACTIONS = _interopRequireWildcard(_action_types);

var _lbryio = __webpack_require__(3);

var _lbryio2 = _interopRequireDefault(_lbryio);

var _rewards4 = __webpack_require__(11);

var _rewards5 = _interopRequireDefault(_rewards4);

var _subscriptions3 = __webpack_require__(41);

var _subscriptions4 = _interopRequireDefault(_subscriptions3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// constants
exports.LBRYINC_ACTIONS = LBRYINC_ACTIONS;

// Lbryio and rewards

exports.Lbryio = _lbryio2.default;
exports.rewards = _rewards5.default;

// actions

exports.subscriptionsReducer = _subscriptions4.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doGenerateAuthToken = doGenerateAuthToken;

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _lbryio = __webpack_require__(3);

var _lbryio2 = _interopRequireDefault(_lbryio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function doGenerateAuthToken(installationId) {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.GENERATE_AUTH_TOKEN_STARTED
    });

    _lbryio2.default.call('user', 'new', {
      auth_token: '',
      language: 'en',
      app_id: installationId
    }, 'post').then(function (response) {
      if (!response.auth_token) {
        dispatch({
          type: ACTIONS.GENERATE_AUTH_TOKEN_FAILURE
        });
      } else {
        dispatch({
          type: ACTIONS.GENERATE_AUTH_TOKEN_SUCCESS,
          data: { authToken: response.auth_token }
        });
      }
    }).catch(function () {
      dispatch({
        type: ACTIONS.GENERATE_AUTH_TOKEN_FAILURE
      });
    });
  };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Auth Token
var GENERATE_AUTH_TOKEN_FAILURE = exports.GENERATE_AUTH_TOKEN_FAILURE = 'GENERATE_AUTH_TOKEN_FAILURE';
var GENERATE_AUTH_TOKEN_STARTED = exports.GENERATE_AUTH_TOKEN_STARTED = 'GENERATE_AUTH_TOKEN_STARTED';
var GENERATE_AUTH_TOKEN_SUCCESS = exports.GENERATE_AUTH_TOKEN_SUCCESS = 'GENERATE_AUTH_TOKEN_SUCCESS';

// Claims
var FETCH_FEATURED_CONTENT_STARTED = exports.FETCH_FEATURED_CONTENT_STARTED = 'FETCH_FEATURED_CONTENT_STARTED';
var FETCH_FEATURED_CONTENT_COMPLETED = exports.FETCH_FEATURED_CONTENT_COMPLETED = 'FETCH_FEATURED_CONTENT_COMPLETED';
var FETCH_TRENDING_CONTENT_STARTED = exports.FETCH_TRENDING_CONTENT_STARTED = 'FETCH_TRENDING_CONTENT_STARTED';
var FETCH_TRENDING_CONTENT_COMPLETED = exports.FETCH_TRENDING_CONTENT_COMPLETED = 'FETCH_TRENDING_CONTENT_COMPLETED';
var RESOLVE_URIS_STARTED = exports.RESOLVE_URIS_STARTED = 'RESOLVE_URIS_STARTED';
var RESOLVE_URIS_COMPLETED = exports.RESOLVE_URIS_COMPLETED = 'RESOLVE_URIS_COMPLETED';
var FETCH_CHANNEL_CLAIMS_STARTED = exports.FETCH_CHANNEL_CLAIMS_STARTED = 'FETCH_CHANNEL_CLAIMS_STARTED';
var FETCH_CHANNEL_CLAIMS_COMPLETED = exports.FETCH_CHANNEL_CLAIMS_COMPLETED = 'FETCH_CHANNEL_CLAIMS_COMPLETED';
var FETCH_CHANNEL_CLAIM_COUNT_STARTED = exports.FETCH_CHANNEL_CLAIM_COUNT_STARTED = 'FETCH_CHANNEL_CLAIM_COUNT_STARTED';
var FETCH_CHANNEL_CLAIM_COUNT_COMPLETED = exports.FETCH_CHANNEL_CLAIM_COUNT_COMPLETED = 'FETCH_CHANNEL_CLAIM_COUNT_COMPLETED';
var FETCH_CLAIM_LIST_MINE_STARTED = exports.FETCH_CLAIM_LIST_MINE_STARTED = 'FETCH_CLAIM_LIST_MINE_STARTED';
var FETCH_CLAIM_LIST_MINE_COMPLETED = exports.FETCH_CLAIM_LIST_MINE_COMPLETED = 'FETCH_CLAIM_LIST_MINE_COMPLETED';
var ABANDON_CLAIM_STARTED = exports.ABANDON_CLAIM_STARTED = 'ABANDON_CLAIM_STARTED';
var ABANDON_CLAIM_SUCCEEDED = exports.ABANDON_CLAIM_SUCCEEDED = 'ABANDON_CLAIM_SUCCEEDED';
var FETCH_CHANNEL_LIST_STARTED = exports.FETCH_CHANNEL_LIST_STARTED = 'FETCH_CHANNEL_LIST_STARTED';
var FETCH_CHANNEL_LIST_COMPLETED = exports.FETCH_CHANNEL_LIST_COMPLETED = 'FETCH_CHANNEL_LIST_COMPLETED';
var CREATE_CHANNEL_STARTED = exports.CREATE_CHANNEL_STARTED = 'CREATE_CHANNEL_STARTED';
var CREATE_CHANNEL_COMPLETED = exports.CREATE_CHANNEL_COMPLETED = 'CREATE_CHANNEL_COMPLETED';
var PUBLISH_STARTED = exports.PUBLISH_STARTED = 'PUBLISH_STARTED';
var PUBLISH_COMPLETED = exports.PUBLISH_COMPLETED = 'PUBLISH_COMPLETED';
var PUBLISH_FAILED = exports.PUBLISH_FAILED = 'PUBLISH_FAILED';
var SET_PLAYING_URI = exports.SET_PLAYING_URI = 'SET_PLAYING_URI';
var SET_CONTENT_POSITION = exports.SET_CONTENT_POSITION = 'SET_CONTENT_POSITION';
var SET_CONTENT_LAST_VIEWED = exports.SET_CONTENT_LAST_VIEWED = 'SET_CONTENT_LAST_VIEWED';
var CLEAR_CONTENT_HISTORY_URI = exports.CLEAR_CONTENT_HISTORY_URI = 'CLEAR_CONTENT_HISTORY_URI';
var CLEAR_CONTENT_HISTORY_ALL = exports.CLEAR_CONTENT_HISTORY_ALL = 'CLEAR_CONTENT_HISTORY_ALL';

// Subscriptions
var CHANNEL_SUBSCRIBE = exports.CHANNEL_SUBSCRIBE = 'CHANNEL_SUBSCRIBE';
var CHANNEL_UNSUBSCRIBE = exports.CHANNEL_UNSUBSCRIBE = 'CHANNEL_UNSUBSCRIBE';
var CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS = exports.CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS = 'CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS';
var CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS = exports.CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS = 'CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS';
var HAS_FETCHED_SUBSCRIPTIONS = exports.HAS_FETCHED_SUBSCRIPTIONS = 'HAS_FETCHED_SUBSCRIPTIONS';
var SET_SUBSCRIPTION_LATEST = exports.SET_SUBSCRIPTION_LATEST = 'SET_SUBSCRIPTION_LATEST';
var UPDATE_SUBSCRIPTION_UNREADS = exports.UPDATE_SUBSCRIPTION_UNREADS = 'UPDATE_SUBSCRIPTION_UNREADS';
var REMOVE_SUBSCRIPTION_UNREADS = exports.REMOVE_SUBSCRIPTION_UNREADS = 'REMOVE_SUBSCRIPTION_UNREADS';
var CHECK_SUBSCRIPTION_STARTED = exports.CHECK_SUBSCRIPTION_STARTED = 'CHECK_SUBSCRIPTION_STARTED';
var CHECK_SUBSCRIPTION_COMPLETED = exports.CHECK_SUBSCRIPTION_COMPLETED = 'CHECK_SUBSCRIPTION_COMPLETED';
var CHECK_SUBSCRIPTIONS_SUBSCRIBE = exports.CHECK_SUBSCRIPTIONS_SUBSCRIBE = 'CHECK_SUBSCRIPTIONS_SUBSCRIBE';
var FETCH_SUBSCRIPTIONS_START = exports.FETCH_SUBSCRIPTIONS_START = 'FETCH_SUBSCRIPTIONS_START';
var FETCH_SUBSCRIPTIONS_FAIL = exports.FETCH_SUBSCRIPTIONS_FAIL = 'FETCH_SUBSCRIPTIONS_FAIL';
var FETCH_SUBSCRIPTIONS_SUCCESS = exports.FETCH_SUBSCRIPTIONS_SUCCESS = 'FETCH_SUBSCRIPTIONS_SUCCESS';
var SET_VIEW_MODE = exports.SET_VIEW_MODE = 'SET_VIEW_MODE';
var GET_SUGGESTED_SUBSCRIPTIONS_START = exports.GET_SUGGESTED_SUBSCRIPTIONS_START = 'GET_SUGGESTED_SUBSCRIPTIONS_START';
var GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS = exports.GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS = 'GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS';
var GET_SUGGESTED_SUBSCRIPTIONS_FAIL = exports.GET_SUGGESTED_SUBSCRIPTIONS_FAIL = 'GET_SUGGESTED_SUBSCRIPTIONS_FAIL';
var SUBSCRIPTION_FIRST_RUN_COMPLETED = exports.SUBSCRIPTION_FIRST_RUN_COMPLETED = 'SUBSCRIPTION_FIRST_RUN_COMPLETED';
var VIEW_SUGGESTED_SUBSCRIPTIONS = exports.VIEW_SUGGESTED_SUBSCRIPTIONS = 'VIEW_SUGGESTED_SUBSCRIPTIONS';

// Blacklist
var FETCH_BLACK_LISTED_CONTENT_STARTED = exports.FETCH_BLACK_LISTED_CONTENT_STARTED = 'FETCH_BLACK_LISTED_CONTENT_STARTED';
var FETCH_BLACK_LISTED_CONTENT_COMPLETED = exports.FETCH_BLACK_LISTED_CONTENT_COMPLETED = 'FETCH_BLACK_LISTED_CONTENT_COMPLETED';
var FETCH_BLACK_LISTED_CONTENT_FAILED = exports.FETCH_BLACK_LISTED_CONTENT_FAILED = 'FETCH_BLACK_LISTED_CONTENT_FAILED';
var BLACK_LISTED_CONTENT_SUBSCRIBE = exports.BLACK_LISTED_CONTENT_SUBSCRIBE = 'BLACK_LISTED_CONTENT_SUBSCRIBE';

// Cost Info
var FETCH_COST_INFO_STARTED = exports.FETCH_COST_INFO_STARTED = 'FETCH_COST_INFO_STARTED';
var FETCH_COST_INFO_COMPLETED = exports.FETCH_COST_INFO_COMPLETED = 'FETCH_COST_INFO_COMPLETED';

// File Stats
var FETCH_VIEW_COUNT_STARTED = exports.FETCH_VIEW_COUNT_STARTED = 'FETCH_VIEW_COUNT_STARTED';
var FETCH_VIEW_COUNT_FAILED = exports.FETCH_VIEW_COUNT_FAILED = 'FETCH_VIEW_COUNT_FAILED';
var FETCH_VIEW_COUNT_COMPLETED = exports.FETCH_VIEW_COUNT_COMPLETED = 'FETCH_VIEW_COUNT_COMPLETED';

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _lbryRedux = __webpack_require__(4);

var _querystring = __webpack_require__(5);

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Lbryio = {
  enabled: true,
  authenticationPromise: null,
  exchangePromise: null,
  exchangeLastFetched: null,
  CONNECTION_STRING: 'https://api.lbry.com/'
};

var EXCHANGE_RATE_TIMEOUT = 20 * 60 * 1000;

// We can't use env's because they aren't passed into node_modules
Lbryio.setLocalApi = function (endpoint) {
  Lbryio.CONNECTION_STRING = endpoint.replace(/\/*$/, '/'); // exactly one slash at the end;
};

Lbryio.call = function (resource, action) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'get';

  if (!Lbryio.enabled) {
    return Promise.reject(new Error(__('LBRY internal API is disabled')));
  }

  if (!(method === 'get' || method === 'post')) {
    return Promise.reject(new Error(__('Invalid method')));
  }

  function checkAndParse(response) {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }
    return response.json().then(function (json) {
      var error = void 0;
      if (json.error) {
        error = new Error(json.error);
      } else {
        error = new Error('Unknown API error signature');
      }
      error.response = response; // This is primarily a hack used in actions/user.js
      return Promise.reject(error);
    });
  }

  function makeRequest(url, options) {
    return fetch(url, options).then(checkAndParse);
  }

  return Lbryio.getAuthToken().then(function (token) {
    var fullParams = _extends({ auth_token: token }, params);
    var qs = _querystring2.default.stringify(fullParams);
    var url = '' + Lbryio.CONNECTION_STRING + resource + '/' + action + '?' + qs;

    var options = {
      method: 'GET'
    };

    if (method === 'post') {
      options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: qs
      };
      url = '' + Lbryio.CONNECTION_STRING + resource + '/' + action;
    }

    return makeRequest(url, options).then(function (response) {
      return response.data;
    });
  });
};

Lbryio.authToken = null;

Lbryio.getAuthToken = function () {
  return new Promise(function (resolve) {
    if (Lbryio.authToken) {
      resolve(Lbryio.authToken);
    } else if (Lbryio.overrides.getAuthToken) {
      Lbryio.overrides.getAuthToken().then(function (token) {
        resolve(token);
      });
    } else {
      var _window = window,
          store = _window.store;

      if (store) {
        var state = store.getState();
        var token = state.auth ? state.auth.authToken : null;
        Lbryio.authToken = token;
        resolve(token);
      }

      resolve(null);
    }
  });
};

Lbryio.getCurrentUser = function () {
  return Lbryio.call('user', 'me');
};

Lbryio.authenticate = function () {
  if (!Lbryio.enabled) {
    return new Promise(function (resolve) {
      resolve({
        id: 1,
        language: 'en',
        primary_email: 'disabled@lbry.io',
        has_verified_email: true,
        is_identity_verified: true,
        is_reward_approved: false
      });
    });
  }

  if (Lbryio.authenticationPromise === null) {
    Lbryio.authenticationPromise = new Promise(function (resolve, reject) {
      Lbryio.getAuthToken().then(function (token) {
        if (!token || token.length > 60) {
          return false;
        }

        // check that token works
        return Lbryio.getCurrentUser().then(function (user) {
          return user;
        }).catch(function () {
          return false;
        });
      }).then(function (user) {
        if (user) {
          return user;
        }

        return _lbryRedux.Lbry.status().then(function (status) {
          if (Lbryio.overrides.setAuthToken) {
            return Lbryio.overrides.setAuthToken(status);
          }

          // simply call the logic to create a new user, and obtain the auth token
          return new Promise(function (res, rej) {
            Lbryio.call('user', 'new', {
              auth_token: '',
              language: 'en',
              app_id: status.installation_id
            }, 'post').then(function (response) {
              if (!response.auth_token) {
                throw new Error('auth_token was not set in the response');
              }

              var _window2 = window,
                  store = _window2.store;

              if (store) {
                store.dispatch({
                  type: ACTIONS.GENERATE_AUTH_TOKEN_SUCCESS,
                  data: { authToken: response.auth_token }
                });
              }

              Lbryio.authToken = response.auth_token;
              res(response);
            }).catch(function () {
              return rej();
            });
          });
        });
      }).then(function (user) {
        if (!user) {
          return Lbryio.getCurrentUser();
        }
        return user;
      }).then(resolve, reject);
    });
  }

  return Lbryio.authenticationPromise;
};

Lbryio.getStripeToken = function () {
  return Lbryio.CONNECTION_STRING.startsWith('http://localhost:') ? 'pk_test_NoL1JWL7i1ipfhVId5KfDZgo' : 'pk_live_e8M4dRNnCCbmpZzduEUZBgJO';
};

Lbryio.getExchangeRates = function () {
  if (!Lbryio.exchangeLastFetched || Date.now() - Lbryio.exchangeLastFetched > EXCHANGE_RATE_TIMEOUT) {
    Lbryio.exchangePromise = new Promise(function (resolve, reject) {
      Lbryio.call('lbc', 'exchange_rate', {}, 'get', true).then(function (_ref) {
        var LBC_USD = _ref.lbc_usd,
            LBC_BTC = _ref.lbc_btc,
            BTC_USD = _ref.btc_usd;

        var rates = { LBC_USD: LBC_USD, LBC_BTC: LBC_BTC, BTC_USD: BTC_USD };
        resolve(rates);
      }).catch(reject);
    });
    Lbryio.exchangeLastFetched = Date.now();
  }
  return Lbryio.exchangePromise;
};

// Allow overriding lbryio methods
// The desktop app will need to use it for getAuthToken because we use electron's ipcRenderer
Lbryio.overrides = {};
Lbryio.setOverride = function (methodName, newMethod) {
  Lbryio.overrides[methodName] = newMethod;
};

exports.default = Lbryio;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(6);
exports.encode = exports.stringify = __webpack_require__(7);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doRewardList = doRewardList;
exports.doClaimRewardType = doClaimRewardType;
exports.doClaimEligiblePurchaseRewards = doClaimEligiblePurchaseRewards;
exports.doClaimRewardClearError = doClaimRewardClearError;
exports.doFetchRewardedContent = doFetchRewardedContent;

var _lbryio = __webpack_require__(3);

var _lbryio2 = _interopRequireDefault(_lbryio);

var _lbryRedux = __webpack_require__(4);

var _rewards = __webpack_require__(9);

var _user = __webpack_require__(12);

var _user2 = __webpack_require__(13);

var _rewards2 = __webpack_require__(11);

var _rewards3 = _interopRequireDefault(_rewards2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function doRewardList() {
  return function (dispatch) {
    dispatch({
      type: _lbryRedux.ACTIONS.FETCH_REWARDS_STARTED
    });

    _lbryio2.default.call('reward', 'list', { multiple_rewards_per_type: true }).then(function (userRewards) {
      dispatch({
        type: _lbryRedux.ACTIONS.FETCH_REWARDS_COMPLETED,
        data: { userRewards: userRewards }
      });
    }).catch(function () {
      dispatch({
        type: _lbryRedux.ACTIONS.FETCH_REWARDS_COMPLETED,
        data: { userRewards: [] }
      });
    });
  };
}

function doClaimRewardType(rewardType) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return function (dispatch, getState) {
    var state = getState();
    var userIsRewardApproved = (0, _user.selectUserIsRewardApproved)(state);
    var unclaimedRewards = (0, _rewards.selectUnclaimedRewards)(state);
    var reward = rewardType === _rewards3.default.TYPE_REWARD_CODE ? { reward_type: _rewards3.default.TYPE_REWARD_CODE } : unclaimedRewards.find(function (ur) {
      return ur.reward_type === rewardType;
    });

    if (rewardType !== _rewards3.default.TYPE_REWARD_CODE) {
      if (!reward || reward.transaction_id) {
        // already claimed or doesn't exist, do nothing
        return;
      }
    }

    if (!userIsRewardApproved && rewardType !== _rewards3.default.TYPE_CONFIRM_EMAIL) {
      if (!options || !options.failSilently && _rewards3.default.callbacks.rewardApprovalRequested) {
        _rewards3.default.callbacks.rewardApprovalRequested();
      }

      return;
    }

    // Set `claim_code` so the api knows which reward to give if there are multiple of the same type
    var params = options.params || {};
    params.claim_code = reward.claim_code;

    dispatch({
      type: _lbryRedux.ACTIONS.CLAIM_REWARD_STARTED,
      data: { reward: reward }
    });

    var success = function success(successReward) {
      dispatch({
        type: _lbryRedux.ACTIONS.CLAIM_REWARD_SUCCESS,
        data: {
          reward: successReward
        }
      });
      if (successReward.reward_type === _rewards3.default.TYPE_NEW_USER && _rewards3.default.callbacks.claimFirstRewardSuccess) {
        _rewards3.default.callbacks.claimFirstRewardSuccess();
      } else if (successReward.reward_type === _rewards3.default.TYPE_REFERRAL) {
        dispatch((0, _user2.doFetchInviteStatus)());
      }

      dispatch(doRewardList());
    };

    var failure = function failure(error) {
      dispatch({
        type: _lbryRedux.ACTIONS.CLAIM_REWARD_FAILURE,
        data: {
          reward: reward,
          error: !options || !options.failSilently ? error : undefined
        }
      });

      if (options.notifyError) {
        dispatch((0, _lbryRedux.doToast)({ message: error.message, isError: true }));
      }
    };

    _rewards3.default.claimReward(rewardType, params).then(success, failure);
  };
}

function doClaimEligiblePurchaseRewards() {
  return function (dispatch, getState) {
    var state = getState();
    var unclaimedRewards = (0, _rewards.selectUnclaimedRewards)(state);
    var userIsRewardApproved = (0, _user.selectUserIsRewardApproved)(state);

    if (!userIsRewardApproved || !_lbryio2.default.enabled) {
      return;
    }

    if (unclaimedRewards.find(function (ur) {
      return ur.reward_type === _rewards3.default.TYPE_FIRST_STREAM;
    })) {
      dispatch(doClaimRewardType(_rewards3.default.TYPE_FIRST_STREAM));
    } else {
      [_rewards3.default.TYPE_MANY_DOWNLOADS, _rewards3.default.TYPE_FEATURED_DOWNLOAD].forEach(function (type) {
        dispatch(doClaimRewardType(type, { failSilently: true }));
      });
    }
  };
}

function doClaimRewardClearError(reward) {
  return function (dispatch) {
    dispatch({
      type: _lbryRedux.ACTIONS.CLAIM_REWARD_CLEAR_ERROR,
      data: { reward: reward }
    });
  };
}

function doFetchRewardedContent() {
  return function (dispatch) {
    var success = function success(nameToClaimId) {
      dispatch({
        type: _lbryRedux.ACTIONS.FETCH_REWARD_CONTENT_COMPLETED,
        data: {
          claimIds: Object.values(nameToClaimId),
          success: true
        }
      });
    };

    var failure = function failure() {
      dispatch({
        type: _lbryRedux.ACTIONS.FETCH_REWARD_CONTENT_COMPLETED,
        data: {
          claimIds: [],
          success: false
        }
      });
    };

    _lbryio2.default.call('reward', 'list_featured').then(success, failure);
  };
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectReferralReward = exports.selectRewardContentClaimIds = exports.makeSelectRewardAmountByType = exports.makeSelectRewardByType = exports.makeSelectClaimRewardError = exports.selectClaimErrorsByType = exports.makeSelectIsRewardClaimPending = exports.selectClaimsPendingByType = exports.selectUnclaimedRewardValue = exports.selectFetchingRewards = exports.selectUnclaimedRewards = exports.selectClaimedRewardsByTransactionId = exports.selectClaimedRewards = exports.selectClaimedRewardsById = exports.selectUnclaimedRewardsByType = undefined;

var _reselect = __webpack_require__(10);

var _rewards = __webpack_require__(11);

var _rewards2 = _interopRequireDefault(_rewards);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectState = function selectState(state) {
  return state.rewards || {};
};

var selectUnclaimedRewardsByType = exports.selectUnclaimedRewardsByType = (0, _reselect.createSelector)(selectState, function (state) {
  return state.unclaimedRewardsByType;
});

var selectClaimedRewardsById = exports.selectClaimedRewardsById = (0, _reselect.createSelector)(selectState, function (state) {
  return state.claimedRewardsById;
});

var selectClaimedRewards = exports.selectClaimedRewards = (0, _reselect.createSelector)(selectClaimedRewardsById, function (byId) {
  return Object.values(byId) || [];
});

var selectClaimedRewardsByTransactionId = exports.selectClaimedRewardsByTransactionId = (0, _reselect.createSelector)(selectClaimedRewards, function (rewards) {
  return rewards.reduce(function (mapParam, reward) {
    var map = mapParam;
    map[reward.transaction_id] = reward;
    return map;
  }, {});
});

var selectUnclaimedRewards = exports.selectUnclaimedRewards = (0, _reselect.createSelector)(selectState, function (state) {
  return state.unclaimedRewards;
});

var selectFetchingRewards = exports.selectFetchingRewards = (0, _reselect.createSelector)(selectState, function (state) {
  return !!state.fetching;
});

var selectUnclaimedRewardValue = exports.selectUnclaimedRewardValue = (0, _reselect.createSelector)(selectUnclaimedRewards, function (rewards) {
  return rewards.reduce(function (sum, reward) {
    return sum + reward.reward_amount;
  }, 0);
});

var selectClaimsPendingByType = exports.selectClaimsPendingByType = (0, _reselect.createSelector)(selectState, function (state) {
  return state.claimPendingByType;
});

var selectIsClaimRewardPending = function selectIsClaimRewardPending(state, props) {
  return selectClaimsPendingByType(state, props)[props.reward_type];
};

var makeSelectIsRewardClaimPending = exports.makeSelectIsRewardClaimPending = function makeSelectIsRewardClaimPending() {
  return (0, _reselect.createSelector)(selectIsClaimRewardPending, function (isClaiming) {
    return isClaiming;
  });
};

var selectClaimErrorsByType = exports.selectClaimErrorsByType = (0, _reselect.createSelector)(selectState, function (state) {
  return state.claimErrorsByType;
});

var selectClaimRewardError = function selectClaimRewardError(state, props) {
  return selectClaimErrorsByType(state, props)[props.reward_type];
};

var makeSelectClaimRewardError = exports.makeSelectClaimRewardError = function makeSelectClaimRewardError() {
  return (0, _reselect.createSelector)(selectClaimRewardError, function (errorMessage) {
    return errorMessage;
  });
};

var selectRewardByType = function selectRewardByType(state, rewardType) {
  return selectUnclaimedRewards(state).find(function (reward) {
    return reward.reward_type === rewardType;
  });
};

var makeSelectRewardByType = exports.makeSelectRewardByType = function makeSelectRewardByType() {
  return (0, _reselect.createSelector)(selectRewardByType, function (reward) {
    return reward;
  });
};

var makeSelectRewardAmountByType = exports.makeSelectRewardAmountByType = function makeSelectRewardAmountByType() {
  return (0, _reselect.createSelector)(selectRewardByType, function (reward) {
    return reward ? reward.reward_amount : 0;
  });
};

var selectRewardContentClaimIds = exports.selectRewardContentClaimIds = (0, _reselect.createSelector)(selectState, function (state) {
  return state.rewardedContentClaimIds;
});

var selectReferralReward = exports.selectReferralReward = (0, _reselect.createSelector)(selectUnclaimedRewards, function (unclaimedRewards) {
  return unclaimedRewards.filter(function (reward) {
    return reward.reward_type === _rewards2.default.TYPE_REFERRAL;
  })[0];
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = defaultMemoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lbryRedux = __webpack_require__(4);

var _lbryio = __webpack_require__(3);

var _lbryio2 = _interopRequireDefault(_lbryio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rewards = {};

rewards.TYPE_NEW_DEVELOPER = 'new_developer';
rewards.TYPE_NEW_USER = 'new_user';
rewards.TYPE_CONFIRM_EMAIL = 'verified_email';
rewards.TYPE_FIRST_CHANNEL = 'new_channel';
rewards.TYPE_FIRST_STREAM = 'first_stream';
rewards.TYPE_MANY_DOWNLOADS = 'many_downloads';
rewards.TYPE_FIRST_PUBLISH = 'first_publish';
rewards.TYPE_FEATURED_DOWNLOAD = 'featured_download';
rewards.TYPE_REFERRAL = 'referral';
rewards.TYPE_REWARD_CODE = 'reward_code';
rewards.TYPE_SUBSCRIPTION = 'subscription';
rewards.YOUTUBE_CREATOR = 'youtube_creator';

rewards.claimReward = function (type, rewardParams) {
  function requestReward(resolve, reject, params) {
    if (!_lbryio2.default.enabled) {
      reject(new Error(__('Rewards are not enabled.')));
      return;
    }

    _lbryio2.default.call('reward', 'new', params, 'post').then(function (reward) {
      var message = reward.reward_notification || 'You have claimed a ' + reward.reward_amount + ' LBC reward.';

      // Display global notice
      var action = (0, _lbryRedux.doToast)({
        message: message,
        linkText: __('Show All'),
        linkTarget: '/rewards'
      });
      window.store.dispatch(action);

      if (rewards.callbacks.claimRewardSuccess) {
        rewards.callbacks.claimRewardSuccess();
      }

      resolve(reward);
    }, reject);
  }

  return new Promise(function (resolve, reject) {
    _lbryRedux.Lbry.address_unused().then(function (address) {
      var params = _extends({
        reward_type: type,
        wallet_address: address
      }, rewardParams);

      switch (type) {
        case rewards.TYPE_FIRST_CHANNEL:
          _lbryRedux.Lbry.claim_list_mine().then(function (claims) {
            var claim = claims.find(function (foundClaim) {
              return foundClaim.name.length && foundClaim.name[0] === '@' && foundClaim.txid.length && foundClaim.type === 'claim';
            });
            if (claim) {
              params.transaction_id = claim.txid;
              requestReward(resolve, reject, params);
            } else {
              reject(new Error(__('Please create a channel identity first.')));
            }
          }).catch(reject);
          break;

        case rewards.TYPE_FIRST_PUBLISH:
          _lbryRedux.Lbry.claim_list_mine().then(function (claims) {
            var claim = claims.find(function (foundClaim) {
              return foundClaim.name.length && foundClaim.name[0] !== '@' && foundClaim.txid.length && foundClaim.type === 'claim';
            });
            if (claim) {
              params.transaction_id = claim.txid;
              requestReward(resolve, reject, params);
            } else {
              reject(claims.length ? new Error(__('Please publish something and wait for confirmation by the network to claim this reward.')) : new Error(__('Please publish something to claim this reward.')));
            }
          }).catch(reject);
          break;

        case rewards.TYPE_FIRST_STREAM:
        case rewards.TYPE_NEW_USER:
        default:
          requestReward(resolve, reject, params);
      }
    });
  });
};
rewards.callbacks = {
  // Set any callbacks that require code not found in this project
  claimRewardSuccess: null,
  claimFirstRewardSuccess: null,
  rewardApprovalRequired: null
};

rewards.setCallback = function (name, method) {
  rewards.callbacks[name] = method;
};

exports.default = rewards;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectUserInviteReferralLink = exports.selectUserInviteNewErrorMessage = exports.selectUserInviteNewIsPending = exports.selectUserInviteStatusFailed = exports.selectUserInvitees = exports.selectUserInvitesRemaining = exports.selectUserInviteStatusIsPending = exports.selectAccessToken = exports.selectUserIsVerificationCandidate = exports.selectIdentityVerifyErrorMessage = exports.selectIdentityVerifyIsPending = exports.selectPhoneVerifyErrorMessage = exports.selectPhoneVerifyIsPending = exports.selectPhoneNewIsPending = exports.selectEmailVerifyErrorMessage = exports.selectEmailVerifyIsPending = exports.selectPhoneNewErrorMessage = exports.selectEmailNewErrorMessage = exports.selectEmailNewIsPending = exports.selectUserIsRewardApproved = exports.selectPhoneToVerify = exports.selectEmailToVerify = exports.selectUserCountryCode = exports.selectUserPhone = exports.selectUserEmail = exports.selectUser = exports.selectUserIsPending = exports.selectAuthenticationIsPending = exports.selectState = undefined;

var _reselect = __webpack_require__(10);

var selectState = exports.selectState = function selectState(state) {
  return state.user || {};
};

var selectAuthenticationIsPending = exports.selectAuthenticationIsPending = (0, _reselect.createSelector)(selectState, function (state) {
  return state.authenticationIsPending;
});

var selectUserIsPending = exports.selectUserIsPending = (0, _reselect.createSelector)(selectState, function (state) {
  return state.userIsPending;
});

var selectUser = exports.selectUser = (0, _reselect.createSelector)(selectState, function (state) {
  return state.user;
});

var selectUserEmail = exports.selectUserEmail = (0, _reselect.createSelector)(selectUser, function (user) {
  return user ? user.primary_email : null;
});

var selectUserPhone = exports.selectUserPhone = (0, _reselect.createSelector)(selectUser, function (user) {
  return user ? user.phone_number : null;
});

var selectUserCountryCode = exports.selectUserCountryCode = (0, _reselect.createSelector)(selectUser, function (user) {
  return user ? user.country_code : null;
});

var selectEmailToVerify = exports.selectEmailToVerify = (0, _reselect.createSelector)(selectState, selectUserEmail, function (state, userEmail) {
  return state.emailToVerify || userEmail;
});

var selectPhoneToVerify = exports.selectPhoneToVerify = (0, _reselect.createSelector)(selectState, selectUserPhone, function (state, userPhone) {
  return state.phoneToVerify || userPhone;
});

var selectUserIsRewardApproved = exports.selectUserIsRewardApproved = (0, _reselect.createSelector)(selectUser, function (user) {
  return user && user.is_reward_approved;
});

var selectEmailNewIsPending = exports.selectEmailNewIsPending = (0, _reselect.createSelector)(selectState, function (state) {
  return state.emailNewIsPending;
});

var selectEmailNewErrorMessage = exports.selectEmailNewErrorMessage = (0, _reselect.createSelector)(selectState, function (state) {
  return state.emailNewErrorMessage;
});

var selectPhoneNewErrorMessage = exports.selectPhoneNewErrorMessage = (0, _reselect.createSelector)(selectState, function (state) {
  return state.phoneNewErrorMessage;
});

var selectEmailVerifyIsPending = exports.selectEmailVerifyIsPending = (0, _reselect.createSelector)(selectState, function (state) {
  return state.emailVerifyIsPending;
});

var selectEmailVerifyErrorMessage = exports.selectEmailVerifyErrorMessage = (0, _reselect.createSelector)(selectState, function (state) {
  return state.emailVerifyErrorMessage;
});

var selectPhoneNewIsPending = exports.selectPhoneNewIsPending = (0, _reselect.createSelector)(selectState, function (state) {
  return state.phoneNewIsPending;
});

var selectPhoneVerifyIsPending = exports.selectPhoneVerifyIsPending = (0, _reselect.createSelector)(selectState, function (state) {
  return state.phoneVerifyIsPending;
});

var selectPhoneVerifyErrorMessage = exports.selectPhoneVerifyErrorMessage = (0, _reselect.createSelector)(selectState, function (state) {
  return state.phoneVerifyErrorMessage;
});

var selectIdentityVerifyIsPending = exports.selectIdentityVerifyIsPending = (0, _reselect.createSelector)(selectState, function (state) {
  return state.identityVerifyIsPending;
});

var selectIdentityVerifyErrorMessage = exports.selectIdentityVerifyErrorMessage = (0, _reselect.createSelector)(selectState, function (state) {
  return state.identityVerifyErrorMessage;
});

var selectUserIsVerificationCandidate = exports.selectUserIsVerificationCandidate = (0, _reselect.createSelector)(selectUser, function (user) {
  return user && (!user.has_verified_email || !user.is_identity_verified);
});

var selectAccessToken = exports.selectAccessToken = (0, _reselect.createSelector)(selectState, function (state) {
  return state.accessToken;
});

var selectUserInviteStatusIsPending = exports.selectUserInviteStatusIsPending = (0, _reselect.createSelector)(selectState, function (state) {
  return state.inviteStatusIsPending;
});

var selectUserInvitesRemaining = exports.selectUserInvitesRemaining = (0, _reselect.createSelector)(selectState, function (state) {
  return state.invitesRemaining;
});

var selectUserInvitees = exports.selectUserInvitees = (0, _reselect.createSelector)(selectState, function (state) {
  return state.invitees;
});

var selectUserInviteStatusFailed = exports.selectUserInviteStatusFailed = (0, _reselect.createSelector)(selectUserInvitesRemaining, function () {
  return selectUserInvitesRemaining === null;
});

var selectUserInviteNewIsPending = exports.selectUserInviteNewIsPending = (0, _reselect.createSelector)(selectState, function (state) {
  return state.inviteNewIsPending;
});

var selectUserInviteNewErrorMessage = exports.selectUserInviteNewErrorMessage = (0, _reselect.createSelector)(selectState, function (state) {
  return state.inviteNewErrorMessage;
});

var selectUserInviteReferralLink = exports.selectUserInviteReferralLink = (0, _reselect.createSelector)(selectState, function (state) {
  return state.referralLink;
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.doFetchInviteStatus = doFetchInviteStatus;
exports.doInstallNew = doInstallNew;
exports.doAuthenticate = doAuthenticate;
exports.doUserFetch = doUserFetch;
exports.doUserCheckEmailVerified = doUserCheckEmailVerified;
exports.doUserPhoneReset = doUserPhoneReset;
exports.doUserPhoneNew = doUserPhoneNew;
exports.doUserPhoneVerifyFailure = doUserPhoneVerifyFailure;
exports.doUserPhoneVerify = doUserPhoneVerify;
exports.doUserEmailToVerify = doUserEmailToVerify;
exports.doUserEmailNew = doUserEmailNew;
exports.doUserResendVerificationEmail = doUserResendVerificationEmail;
exports.doUserEmailVerifyFailure = doUserEmailVerifyFailure;
exports.doUserEmailVerify = doUserEmailVerify;
exports.doFetchAccessToken = doFetchAccessToken;
exports.doUserIdentityVerify = doUserIdentityVerify;
exports.doUserInviteNew = doUserInviteNew;

var _lbryRedux = __webpack_require__(4);

var _rewards = __webpack_require__(8);

var _user = __webpack_require__(12);

var _rewards2 = __webpack_require__(11);

var _rewards3 = _interopRequireDefault(_rewards2);

var _lbryio = __webpack_require__(3);

var _lbryio2 = _interopRequireDefault(_lbryio);

var _bluebird = __webpack_require__(14);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function doFetchInviteStatus() {
  return function (dispatch) {
    dispatch({
      type: _lbryRedux.ACTIONS.USER_INVITE_STATUS_FETCH_STARTED
    });

    _bluebird2.default.all([_lbryio2.default.call('user', 'invite_status'), _lbryio2.default.call('user_referral_code', 'list')]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          status = _ref2[0],
          code = _ref2[1];

      dispatch((0, _rewards.doRewardList)());

      dispatch({
        type: _lbryRedux.ACTIONS.USER_INVITE_STATUS_FETCH_SUCCESS,
        data: {
          invitesRemaining: status.invites_remaining ? status.invites_remaining : 0,
          invitees: status.invitees,
          referralLink: _lbryio2.default.CONNECTION_STRING + 'user/refer?r=' + code
        }
      });
    }).catch(function (error) {
      dispatch({
        type: _lbryRedux.ACTIONS.USER_INVITE_STATUS_FETCH_FAILURE,
        data: { error: error }
      });
    });
  };
}

function doInstallNew(appVersion) {
  var os = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var payload = { app_version: appVersion };
  _lbryRedux.Lbry.status().then(function (status) {
    payload.app_id = status.installation_id;
    payload.node_id = status.lbry_id;
    _lbryRedux.Lbry.version().then(function (version) {
      payload.daemon_version = version.lbrynet_version;
      payload.operating_system = os || version.os_system;
      payload.platform = version.platform;
      _lbryio2.default.call('install', 'new', payload);
    });
  });
}

// TODO: Call doInstallNew separately so we don't have to pass appVersion and os_system params?
function doAuthenticate(appVersion) {
  var os = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  return function (dispatch) {
    dispatch({
      type: _lbryRedux.ACTIONS.AUTHENTICATION_STARTED
    });

    _lbryio2.default.authenticate().then(function (user) {
      // analytics.setUser(user);
      dispatch({
        type: _lbryRedux.ACTIONS.AUTHENTICATION_SUCCESS,
        data: { user: user }
      });
      dispatch((0, _rewards.doRewardList)());
      dispatch(doFetchInviteStatus());
      doInstallNew(appVersion, os);
    }).catch(function (error) {
      dispatch({
        type: _lbryRedux.ACTIONS.AUTHENTICATION_FAILURE,
        data: { error: error }
      });
    });
  };
}

function doUserFetch() {
  return function (dispatch) {
    dispatch({
      type: _lbryRedux.ACTIONS.USER_FETCH_STARTED
    });
    _lbryio2.default.getCurrentUser().then(function (user) {
      // analytics.setUser(user);
      dispatch((0, _rewards.doRewardList)());

      dispatch({
        type: _lbryRedux.ACTIONS.USER_FETCH_SUCCESS,
        data: { user: user }
      });
    }).catch(function (error) {
      dispatch({
        type: _lbryRedux.ACTIONS.USER_FETCH_FAILURE,
        data: { error: error }
      });
    });
  };
}

function doUserCheckEmailVerified() {
  // This will happen in the background so we don't need loading booleans
  return function (dispatch) {
    _lbryio2.default.getCurrentUser().then(function (user) {
      if (user.has_verified_email) {
        dispatch((0, _rewards.doRewardList)());

        dispatch({
          type: _lbryRedux.ACTIONS.USER_FETCH_SUCCESS,
          data: { user: user }
        });
      }
    });
  };
}

function doUserPhoneReset() {
  return {
    type: _lbryRedux.ACTIONS.USER_PHONE_RESET
  };
}

function doUserPhoneNew(phone, countryCode) {
  return function (dispatch) {
    dispatch({
      type: _lbryRedux.ACTIONS.USER_PHONE_NEW_STARTED,
      data: { phone: phone, country_code: countryCode }
    });

    var success = function success() {
      dispatch({
        type: _lbryRedux.ACTIONS.USER_PHONE_NEW_SUCCESS,
        data: { phone: phone }
      });
    };

    var failure = function failure(error) {
      dispatch({
        type: _lbryRedux.ACTIONS.USER_PHONE_NEW_FAILURE,
        data: { error: error }
      });
    };

    _lbryio2.default.call('user', 'phone_number_new', { phone_number: phone, country_code: countryCode }, 'post').then(success, failure);
  };
}

function doUserPhoneVerifyFailure(error) {
  return {
    type: _lbryRedux.ACTIONS.USER_PHONE_VERIFY_FAILURE,
    data: { error: error }
  };
}

function doUserPhoneVerify(verificationCode) {
  return function (dispatch, getState) {
    var phoneNumber = (0, _user.selectPhoneToVerify)(getState());
    var countryCode = (0, _user.selectUserCountryCode)(getState());

    dispatch({
      type: _lbryRedux.ACTIONS.USER_PHONE_VERIFY_STARTED,
      code: verificationCode
    });

    _lbryio2.default.call('user', 'phone_number_confirm', {
      verification_code: verificationCode,
      phone_number: phoneNumber,
      country_code: countryCode
    }, 'post').then(function (user) {
      if (user.is_identity_verified) {
        dispatch({
          type: _lbryRedux.ACTIONS.USER_PHONE_VERIFY_SUCCESS,
          data: { user: user }
        });
        dispatch((0, _rewards.doClaimRewardType)(_rewards3.default.TYPE_NEW_USER));
      }
    }).catch(function (error) {
      return dispatch(doUserPhoneVerifyFailure(error));
    });
  };
}

function doUserEmailToVerify(email) {
  return function (dispatch) {
    dispatch({
      type: _lbryRedux.ACTIONS.USER_EMAIL_VERIFY_SET,
      data: { email: email }
    });
  };
}

function doUserEmailNew(email) {
  return function (dispatch) {
    dispatch({
      type: _lbryRedux.ACTIONS.USER_EMAIL_NEW_STARTED,
      email: email
    });

    var success = function success() {
      dispatch({
        type: _lbryRedux.ACTIONS.USER_EMAIL_NEW_SUCCESS,
        data: { email: email }
      });
      dispatch(doUserFetch());
    };

    var failure = function failure(error) {
      dispatch({
        type: _lbryRedux.ACTIONS.USER_EMAIL_NEW_FAILURE,
        data: { error: error }
      });
    };

    _lbryio2.default.call('user_email', 'new', { email: email, send_verification_email: true }, 'post').catch(function (error) {
      if (error.response && error.response.status === 409) {
        return _lbryio2.default.call('user_email', 'resend_token', { email: email, only_if_expired: true }, 'post').then(success, failure);
      }
      throw error;
    }).then(success, failure);
  };
}

function doUserResendVerificationEmail(email) {
  return function (dispatch) {
    dispatch({
      type: _lbryRedux.ACTIONS.USER_EMAIL_VERIFY_RETRY,
      email: email
    });

    var success = function success() {
      dispatch({
        type: _lbryRedux.ACTIONS.USER_EMAIL_NEW_SUCCESS,
        data: { email: email }
      });
      dispatch(doUserFetch());
    };

    var failure = function failure(error) {
      dispatch({
        type: _lbryRedux.ACTIONS.USER_EMAIL_NEW_FAILURE,
        data: { error: error }
      });
    };

    _lbryio2.default.call('user_email', 'resend_token', { email: email }, 'post').catch(function (error) {
      if (error.response && error.response.status === 409) {
        throw error;
      }
    }).then(success, failure);
  };
}

function doUserEmailVerifyFailure(error) {
  return {
    type: _lbryRedux.ACTIONS.USER_EMAIL_VERIFY_FAILURE,
    data: { error: error }
  };
}

function doUserEmailVerify(verificationToken, recaptcha) {
  return function (dispatch, getState) {
    var email = (0, _user.selectEmailToVerify)(getState());

    dispatch({
      type: _lbryRedux.ACTIONS.USER_EMAIL_VERIFY_STARTED,
      code: verificationToken,
      recaptcha: recaptcha
    });

    _lbryio2.default.call('user_email', 'confirm', {
      verification_token: verificationToken,
      email: email,
      recaptcha: recaptcha
    }, 'post').then(function (userEmail) {
      if (userEmail.is_verified) {
        dispatch({
          type: _lbryRedux.ACTIONS.USER_EMAIL_VERIFY_SUCCESS,
          data: { email: email }
        });
        dispatch(doUserFetch());
      } else {
        throw new Error('Your email is still not verified.'); // shouldn't happen
      }
    }).catch(function (error) {
      return dispatch(doUserEmailVerifyFailure(error));
    });
  };
}

function doFetchAccessToken() {
  return function (dispatch) {
    var success = function success(token) {
      return dispatch({
        type: _lbryRedux.ACTIONS.FETCH_ACCESS_TOKEN_SUCCESS,
        data: { token: token }
      });
    };
    _lbryio2.default.getAuthToken().then(success);
  };
}

function doUserIdentityVerify(stripeToken) {
  return function (dispatch) {
    dispatch({
      type: _lbryRedux.ACTIONS.USER_IDENTITY_VERIFY_STARTED,
      token: stripeToken
    });

    _lbryio2.default.call('user', 'verify_identity', { stripe_token: stripeToken }, 'post').then(function (user) {
      if (user.is_identity_verified) {
        dispatch({
          type: _lbryRedux.ACTIONS.USER_IDENTITY_VERIFY_SUCCESS,
          data: { user: user }
        });
        dispatch((0, _rewards.doClaimRewardType)(_rewards3.default.TYPE_NEW_USER));
      } else {
        throw new Error('Your identity is still not verified. This should not happen.'); // shouldn't happen
      }
    }).catch(function (error) {
      dispatch({
        type: _lbryRedux.ACTIONS.USER_IDENTITY_VERIFY_FAILURE,
        data: { error: error.toString() }
      });
    });
  };
}

function doUserInviteNew(email) {
  return function (dispatch) {
    dispatch({
      type: _lbryRedux.ACTIONS.USER_INVITE_NEW_STARTED
    });

    _lbryio2.default.call('user', 'invite', { email: email }, 'post').then(function () {
      dispatch({
        type: _lbryRedux.ACTIONS.USER_INVITE_NEW_SUCCESS,
        data: { email: email }
      });

      dispatch((0, _lbryRedux.doToast)({
        message: __('Invite sent to %s', email)
      }));

      dispatch(doFetchInviteStatus());
    }).catch(function (error) {
      dispatch({
        type: _lbryRedux.ACTIONS.USER_INVITE_NEW_FAILURE,
        data: { error: error }
      });
    });
  };
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global, setImmediate) {/* @preserve
 * The MIT License (MIT)
 * 
 * Copyright (c) 2013-2017 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
/**
 * bluebird build version 3.5.1
 * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
*/
!function(e){if(true)module.exports=e();else { var f; }}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var SomePromiseArray = Promise._SomePromiseArray;
function any(promises) {
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    ret.setHowMany(1);
    ret.setUnwrap();
    ret.init();
    return promise;
}

Promise.any = function (promises) {
    return any(promises);
};

Promise.prototype.any = function () {
    return any(this);
};

};

},{}],2:[function(_dereq_,module,exports){
"use strict";
var firstLineError;
try {throw new Error(); } catch (e) {firstLineError = e;}
var schedule = _dereq_("./schedule");
var Queue = _dereq_("./queue");
var util = _dereq_("./util");

function Async() {
    this._customScheduler = false;
    this._isTickUsed = false;
    this._lateQueue = new Queue(16);
    this._normalQueue = new Queue(16);
    this._haveDrainedQueues = false;
    this._trampolineEnabled = true;
    var self = this;
    this.drainQueues = function () {
        self._drainQueues();
    };
    this._schedule = schedule;
}

Async.prototype.setScheduler = function(fn) {
    var prev = this._schedule;
    this._schedule = fn;
    this._customScheduler = true;
    return prev;
};

Async.prototype.hasCustomScheduler = function() {
    return this._customScheduler;
};

Async.prototype.enableTrampoline = function() {
    this._trampolineEnabled = true;
};

Async.prototype.disableTrampolineIfNecessary = function() {
    if (util.hasDevTools) {
        this._trampolineEnabled = false;
    }
};

Async.prototype.haveItemsQueued = function () {
    return this._isTickUsed || this._haveDrainedQueues;
};


Async.prototype.fatalError = function(e, isNode) {
    if (isNode) {
        process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) +
            "\n");
        process.exit(2);
    } else {
        this.throwLater(e);
    }
};

Async.prototype.throwLater = function(fn, arg) {
    if (arguments.length === 1) {
        arg = fn;
        fn = function () { throw arg; };
    }
    if (typeof setTimeout !== "undefined") {
        setTimeout(function() {
            fn(arg);
        }, 0);
    } else try {
        this._schedule(function() {
            fn(arg);
        });
    } catch (e) {
        throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
};

function AsyncInvokeLater(fn, receiver, arg) {
    this._lateQueue.push(fn, receiver, arg);
    this._queueTick();
}

function AsyncInvoke(fn, receiver, arg) {
    this._normalQueue.push(fn, receiver, arg);
    this._queueTick();
}

function AsyncSettlePromises(promise) {
    this._normalQueue._pushOne(promise);
    this._queueTick();
}

if (!util.hasDevTools) {
    Async.prototype.invokeLater = AsyncInvokeLater;
    Async.prototype.invoke = AsyncInvoke;
    Async.prototype.settlePromises = AsyncSettlePromises;
} else {
    Async.prototype.invokeLater = function (fn, receiver, arg) {
        if (this._trampolineEnabled) {
            AsyncInvokeLater.call(this, fn, receiver, arg);
        } else {
            this._schedule(function() {
                setTimeout(function() {
                    fn.call(receiver, arg);
                }, 100);
            });
        }
    };

    Async.prototype.invoke = function (fn, receiver, arg) {
        if (this._trampolineEnabled) {
            AsyncInvoke.call(this, fn, receiver, arg);
        } else {
            this._schedule(function() {
                fn.call(receiver, arg);
            });
        }
    };

    Async.prototype.settlePromises = function(promise) {
        if (this._trampolineEnabled) {
            AsyncSettlePromises.call(this, promise);
        } else {
            this._schedule(function() {
                promise._settlePromises();
            });
        }
    };
}

Async.prototype._drainQueue = function(queue) {
    while (queue.length() > 0) {
        var fn = queue.shift();
        if (typeof fn !== "function") {
            fn._settlePromises();
            continue;
        }
        var receiver = queue.shift();
        var arg = queue.shift();
        fn.call(receiver, arg);
    }
};

Async.prototype._drainQueues = function () {
    this._drainQueue(this._normalQueue);
    this._reset();
    this._haveDrainedQueues = true;
    this._drainQueue(this._lateQueue);
};

Async.prototype._queueTick = function () {
    if (!this._isTickUsed) {
        this._isTickUsed = true;
        this._schedule(this.drainQueues);
    }
};

Async.prototype._reset = function () {
    this._isTickUsed = false;
};

module.exports = Async;
module.exports.firstLineError = firstLineError;

},{"./queue":26,"./schedule":29,"./util":36}],3:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, tryConvertToPromise, debug) {
var calledBind = false;
var rejectThis = function(_, e) {
    this._reject(e);
};

var targetRejected = function(e, context) {
    context.promiseRejectionQueued = true;
    context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
};

var bindingResolved = function(thisArg, context) {
    if (((this._bitField & 50397184) === 0)) {
        this._resolveCallback(context.target);
    }
};

var bindingRejected = function(e, context) {
    if (!context.promiseRejectionQueued) this._reject(e);
};

Promise.prototype.bind = function (thisArg) {
    if (!calledBind) {
        calledBind = true;
        Promise.prototype._propagateFrom = debug.propagateFromFunction();
        Promise.prototype._boundValue = debug.boundValueFunction();
    }
    var maybePromise = tryConvertToPromise(thisArg);
    var ret = new Promise(INTERNAL);
    ret._propagateFrom(this, 1);
    var target = this._target();
    ret._setBoundTo(maybePromise);
    if (maybePromise instanceof Promise) {
        var context = {
            promiseRejectionQueued: false,
            promise: ret,
            target: target,
            bindingPromise: maybePromise
        };
        target._then(INTERNAL, targetRejected, undefined, ret, context);
        maybePromise._then(
            bindingResolved, bindingRejected, undefined, ret, context);
        ret._setOnCancel(maybePromise);
    } else {
        ret._resolveCallback(target);
    }
    return ret;
};

Promise.prototype._setBoundTo = function (obj) {
    if (obj !== undefined) {
        this._bitField = this._bitField | 2097152;
        this._boundTo = obj;
    } else {
        this._bitField = this._bitField & (~2097152);
    }
};

Promise.prototype._isBound = function () {
    return (this._bitField & 2097152) === 2097152;
};

Promise.bind = function (thisArg, value) {
    return Promise.resolve(value).bind(thisArg);
};
};

},{}],4:[function(_dereq_,module,exports){
"use strict";
var old;
if (typeof Promise !== "undefined") old = Promise;
function noConflict() {
    try { if (Promise === bluebird) Promise = old; }
    catch (e) {}
    return bluebird;
}
var bluebird = _dereq_("./promise")();
bluebird.noConflict = noConflict;
module.exports = bluebird;

},{"./promise":22}],5:[function(_dereq_,module,exports){
"use strict";
var cr = Object.create;
if (cr) {
    var callerCache = cr(null);
    var getterCache = cr(null);
    callerCache[" size"] = getterCache[" size"] = 0;
}

module.exports = function(Promise) {
var util = _dereq_("./util");
var canEvaluate = util.canEvaluate;
var isIdentifier = util.isIdentifier;

var getMethodCaller;
var getGetter;
if (false) { var getCompiled, makeGetter, makeMethodCaller; }

function ensureMethod(obj, methodName) {
    var fn;
    if (obj != null) fn = obj[methodName];
    if (typeof fn !== "function") {
        var message = "Object " + util.classString(obj) + " has no method '" +
            util.toString(methodName) + "'";
        throw new Promise.TypeError(message);
    }
    return fn;
}

function caller(obj) {
    var methodName = this.pop();
    var fn = ensureMethod(obj, methodName);
    return fn.apply(obj, this);
}
Promise.prototype.call = function (methodName) {
    var args = [].slice.call(arguments, 1);;
    if (false) { var maybeCaller; }
    args.push(methodName);
    return this._then(caller, undefined, undefined, args, undefined);
};

function namedGetter(obj) {
    return obj[this];
}
function indexedGetter(obj) {
    var index = +this;
    if (index < 0) index = Math.max(0, index + obj.length);
    return obj[index];
}
Promise.prototype.get = function (propertyName) {
    var isIndex = (typeof propertyName === "number");
    var getter;
    if (!isIndex) {
        if (canEvaluate) {
            var maybeGetter = getGetter(propertyName);
            getter = maybeGetter !== null ? maybeGetter : namedGetter;
        } else {
            getter = namedGetter;
        }
    } else {
        getter = indexedGetter;
    }
    return this._then(getter, undefined, undefined, propertyName, undefined);
};
};

},{"./util":36}],6:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, PromiseArray, apiRejection, debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var async = Promise._async;

Promise.prototype["break"] = Promise.prototype.cancel = function() {
    if (!debug.cancellation()) return this._warn("cancellation is disabled");

    var promise = this;
    var child = promise;
    while (promise._isCancellable()) {
        if (!promise._cancelBy(child)) {
            if (child._isFollowing()) {
                child._followee().cancel();
            } else {
                child._cancelBranched();
            }
            break;
        }

        var parent = promise._cancellationParent;
        if (parent == null || !parent._isCancellable()) {
            if (promise._isFollowing()) {
                promise._followee().cancel();
            } else {
                promise._cancelBranched();
            }
            break;
        } else {
            if (promise._isFollowing()) promise._followee().cancel();
            promise._setWillBeCancelled();
            child = promise;
            promise = parent;
        }
    }
};

Promise.prototype._branchHasCancelled = function() {
    this._branchesRemainingToCancel--;
};

Promise.prototype._enoughBranchesHaveCancelled = function() {
    return this._branchesRemainingToCancel === undefined ||
           this._branchesRemainingToCancel <= 0;
};

Promise.prototype._cancelBy = function(canceller) {
    if (canceller === this) {
        this._branchesRemainingToCancel = 0;
        this._invokeOnCancel();
        return true;
    } else {
        this._branchHasCancelled();
        if (this._enoughBranchesHaveCancelled()) {
            this._invokeOnCancel();
            return true;
        }
    }
    return false;
};

Promise.prototype._cancelBranched = function() {
    if (this._enoughBranchesHaveCancelled()) {
        this._cancel();
    }
};

Promise.prototype._cancel = function() {
    if (!this._isCancellable()) return;
    this._setCancelled();
    async.invoke(this._cancelPromises, this, undefined);
};

Promise.prototype._cancelPromises = function() {
    if (this._length() > 0) this._settlePromises();
};

Promise.prototype._unsetOnCancel = function() {
    this._onCancelField = undefined;
};

Promise.prototype._isCancellable = function() {
    return this.isPending() && !this._isCancelled();
};

Promise.prototype.isCancellable = function() {
    return this.isPending() && !this.isCancelled();
};

Promise.prototype._doInvokeOnCancel = function(onCancelCallback, internalOnly) {
    if (util.isArray(onCancelCallback)) {
        for (var i = 0; i < onCancelCallback.length; ++i) {
            this._doInvokeOnCancel(onCancelCallback[i], internalOnly);
        }
    } else if (onCancelCallback !== undefined) {
        if (typeof onCancelCallback === "function") {
            if (!internalOnly) {
                var e = tryCatch(onCancelCallback).call(this._boundValue());
                if (e === errorObj) {
                    this._attachExtraTrace(e.e);
                    async.throwLater(e.e);
                }
            }
        } else {
            onCancelCallback._resultCancelled(this);
        }
    }
};

Promise.prototype._invokeOnCancel = function() {
    var onCancelCallback = this._onCancel();
    this._unsetOnCancel();
    async.invoke(this._doInvokeOnCancel, this, onCancelCallback);
};

Promise.prototype._invokeInternalOnCancel = function() {
    if (this._isCancellable()) {
        this._doInvokeOnCancel(this._onCancel(), true);
        this._unsetOnCancel();
    }
};

Promise.prototype._resultCancelled = function() {
    this.cancel();
};

};

},{"./util":36}],7:[function(_dereq_,module,exports){
"use strict";
module.exports = function(NEXT_FILTER) {
var util = _dereq_("./util");
var getKeys = _dereq_("./es5").keys;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;

function catchFilter(instances, cb, promise) {
    return function(e) {
        var boundTo = promise._boundValue();
        predicateLoop: for (var i = 0; i < instances.length; ++i) {
            var item = instances[i];

            if (item === Error ||
                (item != null && item.prototype instanceof Error)) {
                if (e instanceof item) {
                    return tryCatch(cb).call(boundTo, e);
                }
            } else if (typeof item === "function") {
                var matchesPredicate = tryCatch(item).call(boundTo, e);
                if (matchesPredicate === errorObj) {
                    return matchesPredicate;
                } else if (matchesPredicate) {
                    return tryCatch(cb).call(boundTo, e);
                }
            } else if (util.isObject(e)) {
                var keys = getKeys(item);
                for (var j = 0; j < keys.length; ++j) {
                    var key = keys[j];
                    if (item[key] != e[key]) {
                        continue predicateLoop;
                    }
                }
                return tryCatch(cb).call(boundTo, e);
            }
        }
        return NEXT_FILTER;
    };
}

return catchFilter;
};

},{"./es5":13,"./util":36}],8:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var longStackTraces = false;
var contextStack = [];

Promise.prototype._promiseCreated = function() {};
Promise.prototype._pushContext = function() {};
Promise.prototype._popContext = function() {return null;};
Promise._peekContext = Promise.prototype._peekContext = function() {};

function Context() {
    this._trace = new Context.CapturedTrace(peekContext());
}
Context.prototype._pushContext = function () {
    if (this._trace !== undefined) {
        this._trace._promiseCreated = null;
        contextStack.push(this._trace);
    }
};

Context.prototype._popContext = function () {
    if (this._trace !== undefined) {
        var trace = contextStack.pop();
        var ret = trace._promiseCreated;
        trace._promiseCreated = null;
        return ret;
    }
    return null;
};

function createContext() {
    if (longStackTraces) return new Context();
}

function peekContext() {
    var lastIndex = contextStack.length - 1;
    if (lastIndex >= 0) {
        return contextStack[lastIndex];
    }
    return undefined;
}
Context.CapturedTrace = null;
Context.create = createContext;
Context.deactivateLongStackTraces = function() {};
Context.activateLongStackTraces = function() {
    var Promise_pushContext = Promise.prototype._pushContext;
    var Promise_popContext = Promise.prototype._popContext;
    var Promise_PeekContext = Promise._peekContext;
    var Promise_peekContext = Promise.prototype._peekContext;
    var Promise_promiseCreated = Promise.prototype._promiseCreated;
    Context.deactivateLongStackTraces = function() {
        Promise.prototype._pushContext = Promise_pushContext;
        Promise.prototype._popContext = Promise_popContext;
        Promise._peekContext = Promise_PeekContext;
        Promise.prototype._peekContext = Promise_peekContext;
        Promise.prototype._promiseCreated = Promise_promiseCreated;
        longStackTraces = false;
    };
    longStackTraces = true;
    Promise.prototype._pushContext = Context.prototype._pushContext;
    Promise.prototype._popContext = Context.prototype._popContext;
    Promise._peekContext = Promise.prototype._peekContext = peekContext;
    Promise.prototype._promiseCreated = function() {
        var ctx = this._peekContext();
        if (ctx && ctx._promiseCreated == null) ctx._promiseCreated = this;
    };
};
return Context;
};

},{}],9:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, Context) {
var getDomain = Promise._getDomain;
var async = Promise._async;
var Warning = _dereq_("./errors").Warning;
var util = _dereq_("./util");
var canAttachTrace = util.canAttachTrace;
var unhandledRejectionHandled;
var possiblyUnhandledRejection;
var bluebirdFramePattern =
    /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;
var nodeFramePattern = /\((?:timers\.js):\d+:\d+\)/;
var parseLinePattern = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;
var stackFramePattern = null;
var formatStack = null;
var indentStackFrames = false;
var printWarning;
var debugging = !!(util.env("BLUEBIRD_DEBUG") != 0 &&
                        (true ||
                         util.env("BLUEBIRD_DEBUG") ||
                         util.env("NODE_ENV") === "development"));

var warnings = !!(util.env("BLUEBIRD_WARNINGS") != 0 &&
    (debugging || util.env("BLUEBIRD_WARNINGS")));

var longStackTraces = !!(util.env("BLUEBIRD_LONG_STACK_TRACES") != 0 &&
    (debugging || util.env("BLUEBIRD_LONG_STACK_TRACES")));

var wForgottenReturn = util.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 &&
    (warnings || !!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));

Promise.prototype.suppressUnhandledRejections = function() {
    var target = this._target();
    target._bitField = ((target._bitField & (~1048576)) |
                      524288);
};

Promise.prototype._ensurePossibleRejectionHandled = function () {
    if ((this._bitField & 524288) !== 0) return;
    this._setRejectionIsUnhandled();
    var self = this;
    setTimeout(function() {
        self._notifyUnhandledRejection();
    }, 1);
};

Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
    fireRejectionEvent("rejectionHandled",
                                  unhandledRejectionHandled, undefined, this);
};

Promise.prototype._setReturnedNonUndefined = function() {
    this._bitField = this._bitField | 268435456;
};

Promise.prototype._returnedNonUndefined = function() {
    return (this._bitField & 268435456) !== 0;
};

Promise.prototype._notifyUnhandledRejection = function () {
    if (this._isRejectionUnhandled()) {
        var reason = this._settledValue();
        this._setUnhandledRejectionIsNotified();
        fireRejectionEvent("unhandledRejection",
                                      possiblyUnhandledRejection, reason, this);
    }
};

Promise.prototype._setUnhandledRejectionIsNotified = function () {
    this._bitField = this._bitField | 262144;
};

Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
    this._bitField = this._bitField & (~262144);
};

Promise.prototype._isUnhandledRejectionNotified = function () {
    return (this._bitField & 262144) > 0;
};

Promise.prototype._setRejectionIsUnhandled = function () {
    this._bitField = this._bitField | 1048576;
};

Promise.prototype._unsetRejectionIsUnhandled = function () {
    this._bitField = this._bitField & (~1048576);
    if (this._isUnhandledRejectionNotified()) {
        this._unsetUnhandledRejectionIsNotified();
        this._notifyUnhandledRejectionIsHandled();
    }
};

Promise.prototype._isRejectionUnhandled = function () {
    return (this._bitField & 1048576) > 0;
};

Promise.prototype._warn = function(message, shouldUseOwnTrace, promise) {
    return warn(message, shouldUseOwnTrace, promise || this);
};

Promise.onPossiblyUnhandledRejection = function (fn) {
    var domain = getDomain();
    possiblyUnhandledRejection =
        typeof fn === "function" ? (domain === null ?
                                            fn : util.domainBind(domain, fn))
                                 : undefined;
};

Promise.onUnhandledRejectionHandled = function (fn) {
    var domain = getDomain();
    unhandledRejectionHandled =
        typeof fn === "function" ? (domain === null ?
                                            fn : util.domainBind(domain, fn))
                                 : undefined;
};

var disableLongStackTraces = function() {};
Promise.longStackTraces = function () {
    if (async.haveItemsQueued() && !config.longStackTraces) {
        throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    if (!config.longStackTraces && longStackTracesIsSupported()) {
        var Promise_captureStackTrace = Promise.prototype._captureStackTrace;
        var Promise_attachExtraTrace = Promise.prototype._attachExtraTrace;
        config.longStackTraces = true;
        disableLongStackTraces = function() {
            if (async.haveItemsQueued() && !config.longStackTraces) {
                throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
            }
            Promise.prototype._captureStackTrace = Promise_captureStackTrace;
            Promise.prototype._attachExtraTrace = Promise_attachExtraTrace;
            Context.deactivateLongStackTraces();
            async.enableTrampoline();
            config.longStackTraces = false;
        };
        Promise.prototype._captureStackTrace = longStackTracesCaptureStackTrace;
        Promise.prototype._attachExtraTrace = longStackTracesAttachExtraTrace;
        Context.activateLongStackTraces();
        async.disableTrampolineIfNecessary();
    }
};

Promise.hasLongStackTraces = function () {
    return config.longStackTraces && longStackTracesIsSupported();
};

var fireDomEvent = (function() {
    try {
        if (typeof CustomEvent === "function") {
            var event = new CustomEvent("CustomEvent");
            util.global.dispatchEvent(event);
            return function(name, event) {
                var domEvent = new CustomEvent(name.toLowerCase(), {
                    detail: event,
                    cancelable: true
                });
                return !util.global.dispatchEvent(domEvent);
            };
        } else if (typeof Event === "function") {
            var event = new Event("CustomEvent");
            util.global.dispatchEvent(event);
            return function(name, event) {
                var domEvent = new Event(name.toLowerCase(), {
                    cancelable: true
                });
                domEvent.detail = event;
                return !util.global.dispatchEvent(domEvent);
            };
        } else {
            var event = document.createEvent("CustomEvent");
            event.initCustomEvent("testingtheevent", false, true, {});
            util.global.dispatchEvent(event);
            return function(name, event) {
                var domEvent = document.createEvent("CustomEvent");
                domEvent.initCustomEvent(name.toLowerCase(), false, true,
                    event);
                return !util.global.dispatchEvent(domEvent);
            };
        }
    } catch (e) {}
    return function() {
        return false;
    };
})();

var fireGlobalEvent = (function() {
    if (util.isNode) {
        return function() {
            return process.emit.apply(process, arguments);
        };
    } else {
        if (!util.global) {
            return function() {
                return false;
            };
        }
        return function(name) {
            var methodName = "on" + name.toLowerCase();
            var method = util.global[methodName];
            if (!method) return false;
            method.apply(util.global, [].slice.call(arguments, 1));
            return true;
        };
    }
})();

function generatePromiseLifecycleEventObject(name, promise) {
    return {promise: promise};
}

var eventToObjectGenerator = {
    promiseCreated: generatePromiseLifecycleEventObject,
    promiseFulfilled: generatePromiseLifecycleEventObject,
    promiseRejected: generatePromiseLifecycleEventObject,
    promiseResolved: generatePromiseLifecycleEventObject,
    promiseCancelled: generatePromiseLifecycleEventObject,
    promiseChained: function(name, promise, child) {
        return {promise: promise, child: child};
    },
    warning: function(name, warning) {
        return {warning: warning};
    },
    unhandledRejection: function (name, reason, promise) {
        return {reason: reason, promise: promise};
    },
    rejectionHandled: generatePromiseLifecycleEventObject
};

var activeFireEvent = function (name) {
    var globalEventFired = false;
    try {
        globalEventFired = fireGlobalEvent.apply(null, arguments);
    } catch (e) {
        async.throwLater(e);
        globalEventFired = true;
    }

    var domEventFired = false;
    try {
        domEventFired = fireDomEvent(name,
                    eventToObjectGenerator[name].apply(null, arguments));
    } catch (e) {
        async.throwLater(e);
        domEventFired = true;
    }

    return domEventFired || globalEventFired;
};

Promise.config = function(opts) {
    opts = Object(opts);
    if ("longStackTraces" in opts) {
        if (opts.longStackTraces) {
            Promise.longStackTraces();
        } else if (!opts.longStackTraces && Promise.hasLongStackTraces()) {
            disableLongStackTraces();
        }
    }
    if ("warnings" in opts) {
        var warningsOption = opts.warnings;
        config.warnings = !!warningsOption;
        wForgottenReturn = config.warnings;

        if (util.isObject(warningsOption)) {
            if ("wForgottenReturn" in warningsOption) {
                wForgottenReturn = !!warningsOption.wForgottenReturn;
            }
        }
    }
    if ("cancellation" in opts && opts.cancellation && !config.cancellation) {
        if (async.haveItemsQueued()) {
            throw new Error(
                "cannot enable cancellation after promises are in use");
        }
        Promise.prototype._clearCancellationData =
            cancellationClearCancellationData;
        Promise.prototype._propagateFrom = cancellationPropagateFrom;
        Promise.prototype._onCancel = cancellationOnCancel;
        Promise.prototype._setOnCancel = cancellationSetOnCancel;
        Promise.prototype._attachCancellationCallback =
            cancellationAttachCancellationCallback;
        Promise.prototype._execute = cancellationExecute;
        propagateFromFunction = cancellationPropagateFrom;
        config.cancellation = true;
    }
    if ("monitoring" in opts) {
        if (opts.monitoring && !config.monitoring) {
            config.monitoring = true;
            Promise.prototype._fireEvent = activeFireEvent;
        } else if (!opts.monitoring && config.monitoring) {
            config.monitoring = false;
            Promise.prototype._fireEvent = defaultFireEvent;
        }
    }
    return Promise;
};

function defaultFireEvent() { return false; }

Promise.prototype._fireEvent = defaultFireEvent;
Promise.prototype._execute = function(executor, resolve, reject) {
    try {
        executor(resolve, reject);
    } catch (e) {
        return e;
    }
};
Promise.prototype._onCancel = function () {};
Promise.prototype._setOnCancel = function (handler) { ; };
Promise.prototype._attachCancellationCallback = function(onCancel) {
    ;
};
Promise.prototype._captureStackTrace = function () {};
Promise.prototype._attachExtraTrace = function () {};
Promise.prototype._clearCancellationData = function() {};
Promise.prototype._propagateFrom = function (parent, flags) {
    ;
    ;
};

function cancellationExecute(executor, resolve, reject) {
    var promise = this;
    try {
        executor(resolve, reject, function(onCancel) {
            if (typeof onCancel !== "function") {
                throw new TypeError("onCancel must be a function, got: " +
                                    util.toString(onCancel));
            }
            promise._attachCancellationCallback(onCancel);
        });
    } catch (e) {
        return e;
    }
}

function cancellationAttachCancellationCallback(onCancel) {
    if (!this._isCancellable()) return this;

    var previousOnCancel = this._onCancel();
    if (previousOnCancel !== undefined) {
        if (util.isArray(previousOnCancel)) {
            previousOnCancel.push(onCancel);
        } else {
            this._setOnCancel([previousOnCancel, onCancel]);
        }
    } else {
        this._setOnCancel(onCancel);
    }
}

function cancellationOnCancel() {
    return this._onCancelField;
}

function cancellationSetOnCancel(onCancel) {
    this._onCancelField = onCancel;
}

function cancellationClearCancellationData() {
    this._cancellationParent = undefined;
    this._onCancelField = undefined;
}

function cancellationPropagateFrom(parent, flags) {
    if ((flags & 1) !== 0) {
        this._cancellationParent = parent;
        var branchesRemainingToCancel = parent._branchesRemainingToCancel;
        if (branchesRemainingToCancel === undefined) {
            branchesRemainingToCancel = 0;
        }
        parent._branchesRemainingToCancel = branchesRemainingToCancel + 1;
    }
    if ((flags & 2) !== 0 && parent._isBound()) {
        this._setBoundTo(parent._boundTo);
    }
}

function bindingPropagateFrom(parent, flags) {
    if ((flags & 2) !== 0 && parent._isBound()) {
        this._setBoundTo(parent._boundTo);
    }
}
var propagateFromFunction = bindingPropagateFrom;

function boundValueFunction() {
    var ret = this._boundTo;
    if (ret !== undefined) {
        if (ret instanceof Promise) {
            if (ret.isFulfilled()) {
                return ret.value();
            } else {
                return undefined;
            }
        }
    }
    return ret;
}

function longStackTracesCaptureStackTrace() {
    this._trace = new CapturedTrace(this._peekContext());
}

function longStackTracesAttachExtraTrace(error, ignoreSelf) {
    if (canAttachTrace(error)) {
        var trace = this._trace;
        if (trace !== undefined) {
            if (ignoreSelf) trace = trace._parent;
        }
        if (trace !== undefined) {
            trace.attachExtraTrace(error);
        } else if (!error.__stackCleaned__) {
            var parsed = parseStackAndMessage(error);
            util.notEnumerableProp(error, "stack",
                parsed.message + "\n" + parsed.stack.join("\n"));
            util.notEnumerableProp(error, "__stackCleaned__", true);
        }
    }
}

function checkForgottenReturns(returnValue, promiseCreated, name, promise,
                               parent) {
    if (returnValue === undefined && promiseCreated !== null &&
        wForgottenReturn) {
        if (parent !== undefined && parent._returnedNonUndefined()) return;
        if ((promise._bitField & 65535) === 0) return;

        if (name) name = name + " ";
        var handlerLine = "";
        var creatorLine = "";
        if (promiseCreated._trace) {
            var traceLines = promiseCreated._trace.stack.split("\n");
            var stack = cleanStack(traceLines);
            for (var i = stack.length - 1; i >= 0; --i) {
                var line = stack[i];
                if (!nodeFramePattern.test(line)) {
                    var lineMatches = line.match(parseLinePattern);
                    if (lineMatches) {
                        handlerLine  = "at " + lineMatches[1] +
                            ":" + lineMatches[2] + ":" + lineMatches[3] + " ";
                    }
                    break;
                }
            }

            if (stack.length > 0) {
                var firstUserLine = stack[0];
                for (var i = 0; i < traceLines.length; ++i) {

                    if (traceLines[i] === firstUserLine) {
                        if (i > 0) {
                            creatorLine = "\n" + traceLines[i - 1];
                        }
                        break;
                    }
                }

            }
        }
        var msg = "a promise was created in a " + name +
            "handler " + handlerLine + "but was not returned from it, " +
            "see http://goo.gl/rRqMUw" +
            creatorLine;
        promise._warn(msg, true, promiseCreated);
    }
}

function deprecated(name, replacement) {
    var message = name +
        " is deprecated and will be removed in a future version.";
    if (replacement) message += " Use " + replacement + " instead.";
    return warn(message);
}

function warn(message, shouldUseOwnTrace, promise) {
    if (!config.warnings) return;
    var warning = new Warning(message);
    var ctx;
    if (shouldUseOwnTrace) {
        promise._attachExtraTrace(warning);
    } else if (config.longStackTraces && (ctx = Promise._peekContext())) {
        ctx.attachExtraTrace(warning);
    } else {
        var parsed = parseStackAndMessage(warning);
        warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
    }

    if (!activeFireEvent("warning", warning)) {
        formatAndLogError(warning, "", true);
    }
}

function reconstructStack(message, stacks) {
    for (var i = 0; i < stacks.length - 1; ++i) {
        stacks[i].push("From previous event:");
        stacks[i] = stacks[i].join("\n");
    }
    if (i < stacks.length) {
        stacks[i] = stacks[i].join("\n");
    }
    return message + "\n" + stacks.join("\n");
}

function removeDuplicateOrEmptyJumps(stacks) {
    for (var i = 0; i < stacks.length; ++i) {
        if (stacks[i].length === 0 ||
            ((i + 1 < stacks.length) && stacks[i][0] === stacks[i+1][0])) {
            stacks.splice(i, 1);
            i--;
        }
    }
}

function removeCommonRoots(stacks) {
    var current = stacks[0];
    for (var i = 1; i < stacks.length; ++i) {
        var prev = stacks[i];
        var currentLastIndex = current.length - 1;
        var currentLastLine = current[currentLastIndex];
        var commonRootMeetPoint = -1;

        for (var j = prev.length - 1; j >= 0; --j) {
            if (prev[j] === currentLastLine) {
                commonRootMeetPoint = j;
                break;
            }
        }

        for (var j = commonRootMeetPoint; j >= 0; --j) {
            var line = prev[j];
            if (current[currentLastIndex] === line) {
                current.pop();
                currentLastIndex--;
            } else {
                break;
            }
        }
        current = prev;
    }
}

function cleanStack(stack) {
    var ret = [];
    for (var i = 0; i < stack.length; ++i) {
        var line = stack[i];
        var isTraceLine = "    (No stack trace)" === line ||
            stackFramePattern.test(line);
        var isInternalFrame = isTraceLine && shouldIgnore(line);
        if (isTraceLine && !isInternalFrame) {
            if (indentStackFrames && line.charAt(0) !== " ") {
                line = "    " + line;
            }
            ret.push(line);
        }
    }
    return ret;
}

function stackFramesAsArray(error) {
    var stack = error.stack.replace(/\s+$/g, "").split("\n");
    for (var i = 0; i < stack.length; ++i) {
        var line = stack[i];
        if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
            break;
        }
    }
    if (i > 0 && error.name != "SyntaxError") {
        stack = stack.slice(i);
    }
    return stack;
}

function parseStackAndMessage(error) {
    var stack = error.stack;
    var message = error.toString();
    stack = typeof stack === "string" && stack.length > 0
                ? stackFramesAsArray(error) : ["    (No stack trace)"];
    return {
        message: message,
        stack: error.name == "SyntaxError" ? stack : cleanStack(stack)
    };
}

function formatAndLogError(error, title, isSoft) {
    if (typeof console !== "undefined") {
        var message;
        if (util.isObject(error)) {
            var stack = error.stack;
            message = title + formatStack(stack, error);
        } else {
            message = title + String(error);
        }
        if (typeof printWarning === "function") {
            printWarning(message, isSoft);
        } else if (typeof console.log === "function" ||
            typeof console.log === "object") {
            console.log(message);
        }
    }
}

function fireRejectionEvent(name, localHandler, reason, promise) {
    var localEventFired = false;
    try {
        if (typeof localHandler === "function") {
            localEventFired = true;
            if (name === "rejectionHandled") {
                localHandler(promise);
            } else {
                localHandler(reason, promise);
            }
        }
    } catch (e) {
        async.throwLater(e);
    }

    if (name === "unhandledRejection") {
        if (!activeFireEvent(name, reason, promise) && !localEventFired) {
            formatAndLogError(reason, "Unhandled rejection ");
        }
    } else {
        activeFireEvent(name, promise);
    }
}

function formatNonError(obj) {
    var str;
    if (typeof obj === "function") {
        str = "[function " +
            (obj.name || "anonymous") +
            "]";
    } else {
        str = obj && typeof obj.toString === "function"
            ? obj.toString() : util.toString(obj);
        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
        if (ruselessToString.test(str)) {
            try {
                var newStr = JSON.stringify(obj);
                str = newStr;
            }
            catch(e) {

            }
        }
        if (str.length === 0) {
            str = "(empty array)";
        }
    }
    return ("(<" + snip(str) + ">, no stack trace)");
}

function snip(str) {
    var maxChars = 41;
    if (str.length < maxChars) {
        return str;
    }
    return str.substr(0, maxChars - 3) + "...";
}

function longStackTracesIsSupported() {
    return typeof captureStackTrace === "function";
}

var shouldIgnore = function() { return false; };
var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
function parseLineInfo(line) {
    var matches = line.match(parseLineInfoRegex);
    if (matches) {
        return {
            fileName: matches[1],
            line: parseInt(matches[2], 10)
        };
    }
}

function setBounds(firstLineError, lastLineError) {
    if (!longStackTracesIsSupported()) return;
    var firstStackLines = firstLineError.stack.split("\n");
    var lastStackLines = lastLineError.stack.split("\n");
    var firstIndex = -1;
    var lastIndex = -1;
    var firstFileName;
    var lastFileName;
    for (var i = 0; i < firstStackLines.length; ++i) {
        var result = parseLineInfo(firstStackLines[i]);
        if (result) {
            firstFileName = result.fileName;
            firstIndex = result.line;
            break;
        }
    }
    for (var i = 0; i < lastStackLines.length; ++i) {
        var result = parseLineInfo(lastStackLines[i]);
        if (result) {
            lastFileName = result.fileName;
            lastIndex = result.line;
            break;
        }
    }
    if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName ||
        firstFileName !== lastFileName || firstIndex >= lastIndex) {
        return;
    }

    shouldIgnore = function(line) {
        if (bluebirdFramePattern.test(line)) return true;
        var info = parseLineInfo(line);
        if (info) {
            if (info.fileName === firstFileName &&
                (firstIndex <= info.line && info.line <= lastIndex)) {
                return true;
            }
        }
        return false;
    };
}

function CapturedTrace(parent) {
    this._parent = parent;
    this._promisesCreated = 0;
    var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
    captureStackTrace(this, CapturedTrace);
    if (length > 32) this.uncycle();
}
util.inherits(CapturedTrace, Error);
Context.CapturedTrace = CapturedTrace;

CapturedTrace.prototype.uncycle = function() {
    var length = this._length;
    if (length < 2) return;
    var nodes = [];
    var stackToIndex = {};

    for (var i = 0, node = this; node !== undefined; ++i) {
        nodes.push(node);
        node = node._parent;
    }
    length = this._length = i;
    for (var i = length - 1; i >= 0; --i) {
        var stack = nodes[i].stack;
        if (stackToIndex[stack] === undefined) {
            stackToIndex[stack] = i;
        }
    }
    for (var i = 0; i < length; ++i) {
        var currentStack = nodes[i].stack;
        var index = stackToIndex[currentStack];
        if (index !== undefined && index !== i) {
            if (index > 0) {
                nodes[index - 1]._parent = undefined;
                nodes[index - 1]._length = 1;
            }
            nodes[i]._parent = undefined;
            nodes[i]._length = 1;
            var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;

            if (index < length - 1) {
                cycleEdgeNode._parent = nodes[index + 1];
                cycleEdgeNode._parent.uncycle();
                cycleEdgeNode._length =
                    cycleEdgeNode._parent._length + 1;
            } else {
                cycleEdgeNode._parent = undefined;
                cycleEdgeNode._length = 1;
            }
            var currentChildLength = cycleEdgeNode._length + 1;
            for (var j = i - 2; j >= 0; --j) {
                nodes[j]._length = currentChildLength;
                currentChildLength++;
            }
            return;
        }
    }
};

CapturedTrace.prototype.attachExtraTrace = function(error) {
    if (error.__stackCleaned__) return;
    this.uncycle();
    var parsed = parseStackAndMessage(error);
    var message = parsed.message;
    var stacks = [parsed.stack];

    var trace = this;
    while (trace !== undefined) {
        stacks.push(cleanStack(trace.stack.split("\n")));
        trace = trace._parent;
    }
    removeCommonRoots(stacks);
    removeDuplicateOrEmptyJumps(stacks);
    util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
    util.notEnumerableProp(error, "__stackCleaned__", true);
};

var captureStackTrace = (function stackDetection() {
    var v8stackFramePattern = /^\s*at\s*/;
    var v8stackFormatter = function(stack, error) {
        if (typeof stack === "string") return stack;

        if (error.name !== undefined &&
            error.message !== undefined) {
            return error.toString();
        }
        return formatNonError(error);
    };

    if (typeof Error.stackTraceLimit === "number" &&
        typeof Error.captureStackTrace === "function") {
        Error.stackTraceLimit += 6;
        stackFramePattern = v8stackFramePattern;
        formatStack = v8stackFormatter;
        var captureStackTrace = Error.captureStackTrace;

        shouldIgnore = function(line) {
            return bluebirdFramePattern.test(line);
        };
        return function(receiver, ignoreUntil) {
            Error.stackTraceLimit += 6;
            captureStackTrace(receiver, ignoreUntil);
            Error.stackTraceLimit -= 6;
        };
    }
    var err = new Error();

    if (typeof err.stack === "string" &&
        err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
        stackFramePattern = /@/;
        formatStack = v8stackFormatter;
        indentStackFrames = true;
        return function captureStackTrace(o) {
            o.stack = new Error().stack;
        };
    }

    var hasStackAfterThrow;
    try { throw new Error(); }
    catch(e) {
        hasStackAfterThrow = ("stack" in e);
    }
    if (!("stack" in err) && hasStackAfterThrow &&
        typeof Error.stackTraceLimit === "number") {
        stackFramePattern = v8stackFramePattern;
        formatStack = v8stackFormatter;
        return function captureStackTrace(o) {
            Error.stackTraceLimit += 6;
            try { throw new Error(); }
            catch(e) { o.stack = e.stack; }
            Error.stackTraceLimit -= 6;
        };
    }

    formatStack = function(stack, error) {
        if (typeof stack === "string") return stack;

        if ((typeof error === "object" ||
            typeof error === "function") &&
            error.name !== undefined &&
            error.message !== undefined) {
            return error.toString();
        }
        return formatNonError(error);
    };

    return null;

})([]);

if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
    printWarning = function (message) {
        console.warn(message);
    };
    if (util.isNode && process.stderr.isTTY) {
        printWarning = function(message, isSoft) {
            var color = isSoft ? "\u001b[33m" : "\u001b[31m";
            console.warn(color + message + "\u001b[0m\n");
        };
    } else if (!util.isNode && typeof (new Error().stack) === "string") {
        printWarning = function(message, isSoft) {
            console.warn("%c" + message,
                        isSoft ? "color: darkorange" : "color: red");
        };
    }
}

var config = {
    warnings: warnings,
    longStackTraces: false,
    cancellation: false,
    monitoring: false
};

if (longStackTraces) Promise.longStackTraces();

return {
    longStackTraces: function() {
        return config.longStackTraces;
    },
    warnings: function() {
        return config.warnings;
    },
    cancellation: function() {
        return config.cancellation;
    },
    monitoring: function() {
        return config.monitoring;
    },
    propagateFromFunction: function() {
        return propagateFromFunction;
    },
    boundValueFunction: function() {
        return boundValueFunction;
    },
    checkForgottenReturns: checkForgottenReturns,
    setBounds: setBounds,
    warn: warn,
    deprecated: deprecated,
    CapturedTrace: CapturedTrace,
    fireDomEvent: fireDomEvent,
    fireGlobalEvent: fireGlobalEvent
};
};

},{"./errors":12,"./util":36}],10:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
function returner() {
    return this.value;
}
function thrower() {
    throw this.reason;
}

Promise.prototype["return"] =
Promise.prototype.thenReturn = function (value) {
    if (value instanceof Promise) value.suppressUnhandledRejections();
    return this._then(
        returner, undefined, undefined, {value: value}, undefined);
};

Promise.prototype["throw"] =
Promise.prototype.thenThrow = function (reason) {
    return this._then(
        thrower, undefined, undefined, {reason: reason}, undefined);
};

Promise.prototype.catchThrow = function (reason) {
    if (arguments.length <= 1) {
        return this._then(
            undefined, thrower, undefined, {reason: reason}, undefined);
    } else {
        var _reason = arguments[1];
        var handler = function() {throw _reason;};
        return this.caught(reason, handler);
    }
};

Promise.prototype.catchReturn = function (value) {
    if (arguments.length <= 1) {
        if (value instanceof Promise) value.suppressUnhandledRejections();
        return this._then(
            undefined, returner, undefined, {value: value}, undefined);
    } else {
        var _value = arguments[1];
        if (_value instanceof Promise) _value.suppressUnhandledRejections();
        var handler = function() {return _value;};
        return this.caught(value, handler);
    }
};
};

},{}],11:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseReduce = Promise.reduce;
var PromiseAll = Promise.all;

function promiseAllThis() {
    return PromiseAll(this);
}

function PromiseMapSeries(promises, fn) {
    return PromiseReduce(promises, fn, INTERNAL, INTERNAL);
}

Promise.prototype.each = function (fn) {
    return PromiseReduce(this, fn, INTERNAL, 0)
              ._then(promiseAllThis, undefined, undefined, this, undefined);
};

Promise.prototype.mapSeries = function (fn) {
    return PromiseReduce(this, fn, INTERNAL, INTERNAL);
};

Promise.each = function (promises, fn) {
    return PromiseReduce(promises, fn, INTERNAL, 0)
              ._then(promiseAllThis, undefined, undefined, promises, undefined);
};

Promise.mapSeries = PromiseMapSeries;
};


},{}],12:[function(_dereq_,module,exports){
"use strict";
var es5 = _dereq_("./es5");
var Objectfreeze = es5.freeze;
var util = _dereq_("./util");
var inherits = util.inherits;
var notEnumerableProp = util.notEnumerableProp;

function subError(nameProperty, defaultMessage) {
    function SubError(message) {
        if (!(this instanceof SubError)) return new SubError(message);
        notEnumerableProp(this, "message",
            typeof message === "string" ? message : defaultMessage);
        notEnumerableProp(this, "name", nameProperty);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        } else {
            Error.call(this);
        }
    }
    inherits(SubError, Error);
    return SubError;
}

var _TypeError, _RangeError;
var Warning = subError("Warning", "warning");
var CancellationError = subError("CancellationError", "cancellation error");
var TimeoutError = subError("TimeoutError", "timeout error");
var AggregateError = subError("AggregateError", "aggregate error");
try {
    _TypeError = TypeError;
    _RangeError = RangeError;
} catch(e) {
    _TypeError = subError("TypeError", "type error");
    _RangeError = subError("RangeError", "range error");
}

var methods = ("join pop push shift unshift slice filter forEach some " +
    "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

for (var i = 0; i < methods.length; ++i) {
    if (typeof Array.prototype[methods[i]] === "function") {
        AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
    }
}

es5.defineProperty(AggregateError.prototype, "length", {
    value: 0,
    configurable: false,
    writable: true,
    enumerable: true
});
AggregateError.prototype["isOperational"] = true;
var level = 0;
AggregateError.prototype.toString = function() {
    var indent = Array(level * 4 + 1).join(" ");
    var ret = "\n" + indent + "AggregateError of:" + "\n";
    level++;
    indent = Array(level * 4 + 1).join(" ");
    for (var i = 0; i < this.length; ++i) {
        var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
        var lines = str.split("\n");
        for (var j = 0; j < lines.length; ++j) {
            lines[j] = indent + lines[j];
        }
        str = lines.join("\n");
        ret += str + "\n";
    }
    level--;
    return ret;
};

function OperationalError(message) {
    if (!(this instanceof OperationalError))
        return new OperationalError(message);
    notEnumerableProp(this, "name", "OperationalError");
    notEnumerableProp(this, "message", message);
    this.cause = message;
    this["isOperational"] = true;

    if (message instanceof Error) {
        notEnumerableProp(this, "message", message.message);
        notEnumerableProp(this, "stack", message.stack);
    } else if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    }

}
inherits(OperationalError, Error);

var errorTypes = Error["__BluebirdErrorTypes__"];
if (!errorTypes) {
    errorTypes = Objectfreeze({
        CancellationError: CancellationError,
        TimeoutError: TimeoutError,
        OperationalError: OperationalError,
        RejectionError: OperationalError,
        AggregateError: AggregateError
    });
    es5.defineProperty(Error, "__BluebirdErrorTypes__", {
        value: errorTypes,
        writable: false,
        enumerable: false,
        configurable: false
    });
}

module.exports = {
    Error: Error,
    TypeError: _TypeError,
    RangeError: _RangeError,
    CancellationError: errorTypes.CancellationError,
    OperationalError: errorTypes.OperationalError,
    TimeoutError: errorTypes.TimeoutError,
    AggregateError: errorTypes.AggregateError,
    Warning: Warning
};

},{"./es5":13,"./util":36}],13:[function(_dereq_,module,exports){
var isES5 = (function(){
    "use strict";
    return this === undefined;
})();

if (isES5) {
    module.exports = {
        freeze: Object.freeze,
        defineProperty: Object.defineProperty,
        getDescriptor: Object.getOwnPropertyDescriptor,
        keys: Object.keys,
        names: Object.getOwnPropertyNames,
        getPrototypeOf: Object.getPrototypeOf,
        isArray: Array.isArray,
        isES5: isES5,
        propertyIsWritable: function(obj, prop) {
            var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
            return !!(!descriptor || descriptor.writable || descriptor.set);
        }
    };
} else {
    var has = {}.hasOwnProperty;
    var str = {}.toString;
    var proto = {}.constructor.prototype;

    var ObjectKeys = function (o) {
        var ret = [];
        for (var key in o) {
            if (has.call(o, key)) {
                ret.push(key);
            }
        }
        return ret;
    };

    var ObjectGetDescriptor = function(o, key) {
        return {value: o[key]};
    };

    var ObjectDefineProperty = function (o, key, desc) {
        o[key] = desc.value;
        return o;
    };

    var ObjectFreeze = function (obj) {
        return obj;
    };

    var ObjectGetPrototypeOf = function (obj) {
        try {
            return Object(obj).constructor.prototype;
        }
        catch (e) {
            return proto;
        }
    };

    var ArrayIsArray = function (obj) {
        try {
            return str.call(obj) === "[object Array]";
        }
        catch(e) {
            return false;
        }
    };

    module.exports = {
        isArray: ArrayIsArray,
        keys: ObjectKeys,
        names: ObjectKeys,
        defineProperty: ObjectDefineProperty,
        getDescriptor: ObjectGetDescriptor,
        freeze: ObjectFreeze,
        getPrototypeOf: ObjectGetPrototypeOf,
        isES5: isES5,
        propertyIsWritable: function() {
            return true;
        }
    };
}

},{}],14:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseMap = Promise.map;

Promise.prototype.filter = function (fn, options) {
    return PromiseMap(this, fn, options, INTERNAL);
};

Promise.filter = function (promises, fn, options) {
    return PromiseMap(promises, fn, options, INTERNAL);
};
};

},{}],15:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, tryConvertToPromise, NEXT_FILTER) {
var util = _dereq_("./util");
var CancellationError = Promise.CancellationError;
var errorObj = util.errorObj;
var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);

function PassThroughHandlerContext(promise, type, handler) {
    this.promise = promise;
    this.type = type;
    this.handler = handler;
    this.called = false;
    this.cancelPromise = null;
}

PassThroughHandlerContext.prototype.isFinallyHandler = function() {
    return this.type === 0;
};

function FinallyHandlerCancelReaction(finallyHandler) {
    this.finallyHandler = finallyHandler;
}

FinallyHandlerCancelReaction.prototype._resultCancelled = function() {
    checkCancel(this.finallyHandler);
};

function checkCancel(ctx, reason) {
    if (ctx.cancelPromise != null) {
        if (arguments.length > 1) {
            ctx.cancelPromise._reject(reason);
        } else {
            ctx.cancelPromise._cancel();
        }
        ctx.cancelPromise = null;
        return true;
    }
    return false;
}

function succeed() {
    return finallyHandler.call(this, this.promise._target()._settledValue());
}
function fail(reason) {
    if (checkCancel(this, reason)) return;
    errorObj.e = reason;
    return errorObj;
}
function finallyHandler(reasonOrValue) {
    var promise = this.promise;
    var handler = this.handler;

    if (!this.called) {
        this.called = true;
        var ret = this.isFinallyHandler()
            ? handler.call(promise._boundValue())
            : handler.call(promise._boundValue(), reasonOrValue);
        if (ret === NEXT_FILTER) {
            return ret;
        } else if (ret !== undefined) {
            promise._setReturnedNonUndefined();
            var maybePromise = tryConvertToPromise(ret, promise);
            if (maybePromise instanceof Promise) {
                if (this.cancelPromise != null) {
                    if (maybePromise._isCancelled()) {
                        var reason =
                            new CancellationError("late cancellation observer");
                        promise._attachExtraTrace(reason);
                        errorObj.e = reason;
                        return errorObj;
                    } else if (maybePromise.isPending()) {
                        maybePromise._attachCancellationCallback(
                            new FinallyHandlerCancelReaction(this));
                    }
                }
                return maybePromise._then(
                    succeed, fail, undefined, this, undefined);
            }
        }
    }

    if (promise.isRejected()) {
        checkCancel(this);
        errorObj.e = reasonOrValue;
        return errorObj;
    } else {
        checkCancel(this);
        return reasonOrValue;
    }
}

Promise.prototype._passThrough = function(handler, type, success, fail) {
    if (typeof handler !== "function") return this.then();
    return this._then(success,
                      fail,
                      undefined,
                      new PassThroughHandlerContext(this, type, handler),
                      undefined);
};

Promise.prototype.lastly =
Promise.prototype["finally"] = function (handler) {
    return this._passThrough(handler,
                             0,
                             finallyHandler,
                             finallyHandler);
};


Promise.prototype.tap = function (handler) {
    return this._passThrough(handler, 1, finallyHandler);
};

Promise.prototype.tapCatch = function (handlerOrPredicate) {
    var len = arguments.length;
    if(len === 1) {
        return this._passThrough(handlerOrPredicate,
                                 1,
                                 undefined,
                                 finallyHandler);
    } else {
         var catchInstances = new Array(len - 1),
            j = 0, i;
        for (i = 0; i < len - 1; ++i) {
            var item = arguments[i];
            if (util.isObject(item)) {
                catchInstances[j++] = item;
            } else {
                return Promise.reject(new TypeError(
                    "tapCatch statement predicate: "
                    + "expecting an object but got " + util.classString(item)
                ));
            }
        }
        catchInstances.length = j;
        var handler = arguments[i];
        return this._passThrough(catchFilter(catchInstances, handler, this),
                                 1,
                                 undefined,
                                 finallyHandler);
    }

};

return PassThroughHandlerContext;
};

},{"./catch_filter":7,"./util":36}],16:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          apiRejection,
                          INTERNAL,
                          tryConvertToPromise,
                          Proxyable,
                          debug) {
var errors = _dereq_("./errors");
var TypeError = errors.TypeError;
var util = _dereq_("./util");
var errorObj = util.errorObj;
var tryCatch = util.tryCatch;
var yieldHandlers = [];

function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
    for (var i = 0; i < yieldHandlers.length; ++i) {
        traceParent._pushContext();
        var result = tryCatch(yieldHandlers[i])(value);
        traceParent._popContext();
        if (result === errorObj) {
            traceParent._pushContext();
            var ret = Promise.reject(errorObj.e);
            traceParent._popContext();
            return ret;
        }
        var maybePromise = tryConvertToPromise(result, traceParent);
        if (maybePromise instanceof Promise) return maybePromise;
    }
    return null;
}

function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
    if (debug.cancellation()) {
        var internal = new Promise(INTERNAL);
        var _finallyPromise = this._finallyPromise = new Promise(INTERNAL);
        this._promise = internal.lastly(function() {
            return _finallyPromise;
        });
        internal._captureStackTrace();
        internal._setOnCancel(this);
    } else {
        var promise = this._promise = new Promise(INTERNAL);
        promise._captureStackTrace();
    }
    this._stack = stack;
    this._generatorFunction = generatorFunction;
    this._receiver = receiver;
    this._generator = undefined;
    this._yieldHandlers = typeof yieldHandler === "function"
        ? [yieldHandler].concat(yieldHandlers)
        : yieldHandlers;
    this._yieldedPromise = null;
    this._cancellationPhase = false;
}
util.inherits(PromiseSpawn, Proxyable);

PromiseSpawn.prototype._isResolved = function() {
    return this._promise === null;
};

PromiseSpawn.prototype._cleanup = function() {
    this._promise = this._generator = null;
    if (debug.cancellation() && this._finallyPromise !== null) {
        this._finallyPromise._fulfill();
        this._finallyPromise = null;
    }
};

PromiseSpawn.prototype._promiseCancelled = function() {
    if (this._isResolved()) return;
    var implementsReturn = typeof this._generator["return"] !== "undefined";

    var result;
    if (!implementsReturn) {
        var reason = new Promise.CancellationError(
            "generator .return() sentinel");
        Promise.coroutine.returnSentinel = reason;
        this._promise._attachExtraTrace(reason);
        this._promise._pushContext();
        result = tryCatch(this._generator["throw"]).call(this._generator,
                                                         reason);
        this._promise._popContext();
    } else {
        this._promise._pushContext();
        result = tryCatch(this._generator["return"]).call(this._generator,
                                                          undefined);
        this._promise._popContext();
    }
    this._cancellationPhase = true;
    this._yieldedPromise = null;
    this._continue(result);
};

PromiseSpawn.prototype._promiseFulfilled = function(value) {
    this._yieldedPromise = null;
    this._promise._pushContext();
    var result = tryCatch(this._generator.next).call(this._generator, value);
    this._promise._popContext();
    this._continue(result);
};

PromiseSpawn.prototype._promiseRejected = function(reason) {
    this._yieldedPromise = null;
    this._promise._attachExtraTrace(reason);
    this._promise._pushContext();
    var result = tryCatch(this._generator["throw"])
        .call(this._generator, reason);
    this._promise._popContext();
    this._continue(result);
};

PromiseSpawn.prototype._resultCancelled = function() {
    if (this._yieldedPromise instanceof Promise) {
        var promise = this._yieldedPromise;
        this._yieldedPromise = null;
        promise.cancel();
    }
};

PromiseSpawn.prototype.promise = function () {
    return this._promise;
};

PromiseSpawn.prototype._run = function () {
    this._generator = this._generatorFunction.call(this._receiver);
    this._receiver =
        this._generatorFunction = undefined;
    this._promiseFulfilled(undefined);
};

PromiseSpawn.prototype._continue = function (result) {
    var promise = this._promise;
    if (result === errorObj) {
        this._cleanup();
        if (this._cancellationPhase) {
            return promise.cancel();
        } else {
            return promise._rejectCallback(result.e, false);
        }
    }

    var value = result.value;
    if (result.done === true) {
        this._cleanup();
        if (this._cancellationPhase) {
            return promise.cancel();
        } else {
            return promise._resolveCallback(value);
        }
    } else {
        var maybePromise = tryConvertToPromise(value, this._promise);
        if (!(maybePromise instanceof Promise)) {
            maybePromise =
                promiseFromYieldHandler(maybePromise,
                                        this._yieldHandlers,
                                        this._promise);
            if (maybePromise === null) {
                this._promiseRejected(
                    new TypeError(
                        "A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a\u000a".replace("%s", String(value)) +
                        "From coroutine:\u000a" +
                        this._stack.split("\n").slice(1, -7).join("\n")
                    )
                );
                return;
            }
        }
        maybePromise = maybePromise._target();
        var bitField = maybePromise._bitField;
        ;
        if (((bitField & 50397184) === 0)) {
            this._yieldedPromise = maybePromise;
            maybePromise._proxy(this, null);
        } else if (((bitField & 33554432) !== 0)) {
            Promise._async.invoke(
                this._promiseFulfilled, this, maybePromise._value()
            );
        } else if (((bitField & 16777216) !== 0)) {
            Promise._async.invoke(
                this._promiseRejected, this, maybePromise._reason()
            );
        } else {
            this._promiseCancelled();
        }
    }
};

Promise.coroutine = function (generatorFunction, options) {
    if (typeof generatorFunction !== "function") {
        throw new TypeError("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var yieldHandler = Object(options).yieldHandler;
    var PromiseSpawn$ = PromiseSpawn;
    var stack = new Error().stack;
    return function () {
        var generator = generatorFunction.apply(this, arguments);
        var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler,
                                      stack);
        var ret = spawn.promise();
        spawn._generator = generator;
        spawn._promiseFulfilled(undefined);
        return ret;
    };
};

Promise.coroutine.addYieldHandler = function(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    yieldHandlers.push(fn);
};

Promise.spawn = function (generatorFunction) {
    debug.deprecated("Promise.spawn()", "Promise.coroutine()");
    if (typeof generatorFunction !== "function") {
        return apiRejection("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var spawn = new PromiseSpawn(generatorFunction, this);
    var ret = spawn.promise();
    spawn._run(Promise.spawn);
    return ret;
};
};

},{"./errors":12,"./util":36}],17:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, PromiseArray, tryConvertToPromise, INTERNAL, async,
         getDomain) {
var util = _dereq_("./util");
var canEvaluate = util.canEvaluate;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var reject;

if (false) { var i, promiseSetters, thenCallbacks, holderClasses, generateHolderClass, promiseSetter, thenCallback; }

Promise.join = function () {
    var last = arguments.length - 1;
    var fn;
    if (last > 0 && typeof arguments[last] === "function") {
        fn = arguments[last];
        if (false) { var domain, bitField, maybePromise, i, callbacks, holder, HolderClass, ret; }
    }
    var args = [].slice.call(arguments);;
    if (fn) args.pop();
    var ret = new PromiseArray(args).promise();
    return fn !== undefined ? ret.spread(fn) : ret;
};

};

},{"./util":36}],18:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          PromiseArray,
                          apiRejection,
                          tryConvertToPromise,
                          INTERNAL,
                          debug) {
var getDomain = Promise._getDomain;
var util = _dereq_("./util");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var async = Promise._async;

function MappingPromiseArray(promises, fn, limit, _filter) {
    this.constructor$(promises);
    this._promise._captureStackTrace();
    var domain = getDomain();
    this._callback = domain === null ? fn : util.domainBind(domain, fn);
    this._preservedValues = _filter === INTERNAL
        ? new Array(this.length())
        : null;
    this._limit = limit;
    this._inFlight = 0;
    this._queue = [];
    async.invoke(this._asyncInit, this, undefined);
}
util.inherits(MappingPromiseArray, PromiseArray);

MappingPromiseArray.prototype._asyncInit = function() {
    this._init$(undefined, -2);
};

MappingPromiseArray.prototype._init = function () {};

MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
    var values = this._values;
    var length = this.length();
    var preservedValues = this._preservedValues;
    var limit = this._limit;

    if (index < 0) {
        index = (index * -1) - 1;
        values[index] = value;
        if (limit >= 1) {
            this._inFlight--;
            this._drainQueue();
            if (this._isResolved()) return true;
        }
    } else {
        if (limit >= 1 && this._inFlight >= limit) {
            values[index] = value;
            this._queue.push(index);
            return false;
        }
        if (preservedValues !== null) preservedValues[index] = value;

        var promise = this._promise;
        var callback = this._callback;
        var receiver = promise._boundValue();
        promise._pushContext();
        var ret = tryCatch(callback).call(receiver, value, index, length);
        var promiseCreated = promise._popContext();
        debug.checkForgottenReturns(
            ret,
            promiseCreated,
            preservedValues !== null ? "Promise.filter" : "Promise.map",
            promise
        );
        if (ret === errorObj) {
            this._reject(ret.e);
            return true;
        }

        var maybePromise = tryConvertToPromise(ret, this._promise);
        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            var bitField = maybePromise._bitField;
            ;
            if (((bitField & 50397184) === 0)) {
                if (limit >= 1) this._inFlight++;
                values[index] = maybePromise;
                maybePromise._proxy(this, (index + 1) * -1);
                return false;
            } else if (((bitField & 33554432) !== 0)) {
                ret = maybePromise._value();
            } else if (((bitField & 16777216) !== 0)) {
                this._reject(maybePromise._reason());
                return true;
            } else {
                this._cancel();
                return true;
            }
        }
        values[index] = ret;
    }
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= length) {
        if (preservedValues !== null) {
            this._filter(values, preservedValues);
        } else {
            this._resolve(values);
        }
        return true;
    }
    return false;
};

MappingPromiseArray.prototype._drainQueue = function () {
    var queue = this._queue;
    var limit = this._limit;
    var values = this._values;
    while (queue.length > 0 && this._inFlight < limit) {
        if (this._isResolved()) return;
        var index = queue.pop();
        this._promiseFulfilled(values[index], index);
    }
};

MappingPromiseArray.prototype._filter = function (booleans, values) {
    var len = values.length;
    var ret = new Array(len);
    var j = 0;
    for (var i = 0; i < len; ++i) {
        if (booleans[i]) ret[j++] = values[i];
    }
    ret.length = j;
    this._resolve(ret);
};

MappingPromiseArray.prototype.preservedValues = function () {
    return this._preservedValues;
};

function map(promises, fn, options, _filter) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }

    var limit = 0;
    if (options !== undefined) {
        if (typeof options === "object" && options !== null) {
            if (typeof options.concurrency !== "number") {
                return Promise.reject(
                    new TypeError("'concurrency' must be a number but it is " +
                                    util.classString(options.concurrency)));
            }
            limit = options.concurrency;
        } else {
            return Promise.reject(new TypeError(
                            "options argument must be an object but it is " +
                             util.classString(options)));
        }
    }
    limit = typeof limit === "number" &&
        isFinite(limit) && limit >= 1 ? limit : 0;
    return new MappingPromiseArray(promises, fn, limit, _filter).promise();
}

Promise.prototype.map = function (fn, options) {
    return map(this, fn, options, null);
};

Promise.map = function (promises, fn, options, _filter) {
    return map(promises, fn, options, _filter);
};


};

},{"./util":36}],19:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, INTERNAL, tryConvertToPromise, apiRejection, debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;

Promise.method = function (fn) {
    if (typeof fn !== "function") {
        throw new Promise.TypeError("expecting a function but got " + util.classString(fn));
    }
    return function () {
        var ret = new Promise(INTERNAL);
        ret._captureStackTrace();
        ret._pushContext();
        var value = tryCatch(fn).apply(this, arguments);
        var promiseCreated = ret._popContext();
        debug.checkForgottenReturns(
            value, promiseCreated, "Promise.method", ret);
        ret._resolveFromSyncValue(value);
        return ret;
    };
};

Promise.attempt = Promise["try"] = function (fn) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    ret._pushContext();
    var value;
    if (arguments.length > 1) {
        debug.deprecated("calling Promise.try with more than 1 argument");
        var arg = arguments[1];
        var ctx = arguments[2];
        value = util.isArray(arg) ? tryCatch(fn).apply(ctx, arg)
                                  : tryCatch(fn).call(ctx, arg);
    } else {
        value = tryCatch(fn)();
    }
    var promiseCreated = ret._popContext();
    debug.checkForgottenReturns(
        value, promiseCreated, "Promise.try", ret);
    ret._resolveFromSyncValue(value);
    return ret;
};

Promise.prototype._resolveFromSyncValue = function (value) {
    if (value === util.errorObj) {
        this._rejectCallback(value.e, false);
    } else {
        this._resolveCallback(value, true);
    }
};
};

},{"./util":36}],20:[function(_dereq_,module,exports){
"use strict";
var util = _dereq_("./util");
var maybeWrapAsError = util.maybeWrapAsError;
var errors = _dereq_("./errors");
var OperationalError = errors.OperationalError;
var es5 = _dereq_("./es5");

function isUntypedError(obj) {
    return obj instanceof Error &&
        es5.getPrototypeOf(obj) === Error.prototype;
}

var rErrorKey = /^(?:name|message|stack|cause)$/;
function wrapAsOperationalError(obj) {
    var ret;
    if (isUntypedError(obj)) {
        ret = new OperationalError(obj);
        ret.name = obj.name;
        ret.message = obj.message;
        ret.stack = obj.stack;
        var keys = es5.keys(obj);
        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!rErrorKey.test(key)) {
                ret[key] = obj[key];
            }
        }
        return ret;
    }
    util.markAsOriginatingFromRejection(obj);
    return obj;
}

function nodebackForPromise(promise, multiArgs) {
    return function(err, value) {
        if (promise === null) return;
        if (err) {
            var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
            promise._attachExtraTrace(wrapped);
            promise._reject(wrapped);
        } else if (!multiArgs) {
            promise._fulfill(value);
        } else {
            var args = [].slice.call(arguments, 1);;
            promise._fulfill(args);
        }
        promise = null;
    };
}

module.exports = nodebackForPromise;

},{"./errors":12,"./es5":13,"./util":36}],21:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var util = _dereq_("./util");
var async = Promise._async;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;

function spreadAdapter(val, nodeback) {
    var promise = this;
    if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
    var ret =
        tryCatch(nodeback).apply(promise._boundValue(), [null].concat(val));
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}

function successAdapter(val, nodeback) {
    var promise = this;
    var receiver = promise._boundValue();
    var ret = val === undefined
        ? tryCatch(nodeback).call(receiver, null)
        : tryCatch(nodeback).call(receiver, null, val);
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}
function errorAdapter(reason, nodeback) {
    var promise = this;
    if (!reason) {
        var newReason = new Error(reason + "");
        newReason.cause = reason;
        reason = newReason;
    }
    var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}

Promise.prototype.asCallback = Promise.prototype.nodeify = function (nodeback,
                                                                     options) {
    if (typeof nodeback == "function") {
        var adapter = successAdapter;
        if (options !== undefined && Object(options).spread) {
            adapter = spreadAdapter;
        }
        this._then(
            adapter,
            errorAdapter,
            undefined,
            this,
            nodeback
        );
    }
    return this;
};
};

},{"./util":36}],22:[function(_dereq_,module,exports){
"use strict";
module.exports = function() {
var makeSelfResolutionError = function () {
    return new TypeError("circular promise resolution chain\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
};
var reflectHandler = function() {
    return new Promise.PromiseInspection(this._target());
};
var apiRejection = function(msg) {
    return Promise.reject(new TypeError(msg));
};
function Proxyable() {}
var UNDEFINED_BINDING = {};
var util = _dereq_("./util");

var getDomain;
if (util.isNode) {
    getDomain = function() {
        var ret = process.domain;
        if (ret === undefined) ret = null;
        return ret;
    };
} else {
    getDomain = function() {
        return null;
    };
}
util.notEnumerableProp(Promise, "_getDomain", getDomain);

var es5 = _dereq_("./es5");
var Async = _dereq_("./async");
var async = new Async();
es5.defineProperty(Promise, "_async", {value: async});
var errors = _dereq_("./errors");
var TypeError = Promise.TypeError = errors.TypeError;
Promise.RangeError = errors.RangeError;
var CancellationError = Promise.CancellationError = errors.CancellationError;
Promise.TimeoutError = errors.TimeoutError;
Promise.OperationalError = errors.OperationalError;
Promise.RejectionError = errors.OperationalError;
Promise.AggregateError = errors.AggregateError;
var INTERNAL = function(){};
var APPLY = {};
var NEXT_FILTER = {};
var tryConvertToPromise = _dereq_("./thenables")(Promise, INTERNAL);
var PromiseArray =
    _dereq_("./promise_array")(Promise, INTERNAL,
                               tryConvertToPromise, apiRejection, Proxyable);
var Context = _dereq_("./context")(Promise);
 /*jshint unused:false*/
var createContext = Context.create;
var debug = _dereq_("./debuggability")(Promise, Context);
var CapturedTrace = debug.CapturedTrace;
var PassThroughHandlerContext =
    _dereq_("./finally")(Promise, tryConvertToPromise, NEXT_FILTER);
var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);
var nodebackForPromise = _dereq_("./nodeback");
var errorObj = util.errorObj;
var tryCatch = util.tryCatch;
function check(self, executor) {
    if (self == null || self.constructor !== Promise) {
        throw new TypeError("the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    if (typeof executor !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(executor));
    }

}

function Promise(executor) {
    if (executor !== INTERNAL) {
        check(this, executor);
    }
    this._bitField = 0;
    this._fulfillmentHandler0 = undefined;
    this._rejectionHandler0 = undefined;
    this._promise0 = undefined;
    this._receiver0 = undefined;
    this._resolveFromExecutor(executor);
    this._promiseCreated();
    this._fireEvent("promiseCreated", this);
}

Promise.prototype.toString = function () {
    return "[object Promise]";
};

Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
    var len = arguments.length;
    if (len > 1) {
        var catchInstances = new Array(len - 1),
            j = 0, i;
        for (i = 0; i < len - 1; ++i) {
            var item = arguments[i];
            if (util.isObject(item)) {
                catchInstances[j++] = item;
            } else {
                return apiRejection("Catch statement predicate: " +
                    "expecting an object but got " + util.classString(item));
            }
        }
        catchInstances.length = j;
        fn = arguments[i];
        return this.then(undefined, catchFilter(catchInstances, fn, this));
    }
    return this.then(undefined, fn);
};

Promise.prototype.reflect = function () {
    return this._then(reflectHandler,
        reflectHandler, undefined, this, undefined);
};

Promise.prototype.then = function (didFulfill, didReject) {
    if (debug.warnings() && arguments.length > 0 &&
        typeof didFulfill !== "function" &&
        typeof didReject !== "function") {
        var msg = ".then() only accepts functions but was passed: " +
                util.classString(didFulfill);
        if (arguments.length > 1) {
            msg += ", " + util.classString(didReject);
        }
        this._warn(msg);
    }
    return this._then(didFulfill, didReject, undefined, undefined, undefined);
};

Promise.prototype.done = function (didFulfill, didReject) {
    var promise =
        this._then(didFulfill, didReject, undefined, undefined, undefined);
    promise._setIsFinal();
};

Promise.prototype.spread = function (fn) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    return this.all()._then(fn, undefined, undefined, APPLY, undefined);
};

Promise.prototype.toJSON = function () {
    var ret = {
        isFulfilled: false,
        isRejected: false,
        fulfillmentValue: undefined,
        rejectionReason: undefined
    };
    if (this.isFulfilled()) {
        ret.fulfillmentValue = this.value();
        ret.isFulfilled = true;
    } else if (this.isRejected()) {
        ret.rejectionReason = this.reason();
        ret.isRejected = true;
    }
    return ret;
};

Promise.prototype.all = function () {
    if (arguments.length > 0) {
        this._warn(".all() was passed arguments but it does not take any");
    }
    return new PromiseArray(this).promise();
};

Promise.prototype.error = function (fn) {
    return this.caught(util.originatesFromRejection, fn);
};

Promise.getNewLibraryCopy = module.exports;

Promise.is = function (val) {
    return val instanceof Promise;
};

Promise.fromNode = Promise.fromCallback = function(fn) {
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    var multiArgs = arguments.length > 1 ? !!Object(arguments[1]).multiArgs
                                         : false;
    var result = tryCatch(fn)(nodebackForPromise(ret, multiArgs));
    if (result === errorObj) {
        ret._rejectCallback(result.e, true);
    }
    if (!ret._isFateSealed()) ret._setAsyncGuaranteed();
    return ret;
};

Promise.all = function (promises) {
    return new PromiseArray(promises).promise();
};

Promise.cast = function (obj) {
    var ret = tryConvertToPromise(obj);
    if (!(ret instanceof Promise)) {
        ret = new Promise(INTERNAL);
        ret._captureStackTrace();
        ret._setFulfilled();
        ret._rejectionHandler0 = obj;
    }
    return ret;
};

Promise.resolve = Promise.fulfilled = Promise.cast;

Promise.reject = Promise.rejected = function (reason) {
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    ret._rejectCallback(reason, true);
    return ret;
};

Promise.setScheduler = function(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    return async.setScheduler(fn);
};

Promise.prototype._then = function (
    didFulfill,
    didReject,
    _,    receiver,
    internalData
) {
    var haveInternalData = internalData !== undefined;
    var promise = haveInternalData ? internalData : new Promise(INTERNAL);
    var target = this._target();
    var bitField = target._bitField;

    if (!haveInternalData) {
        promise._propagateFrom(this, 3);
        promise._captureStackTrace();
        if (receiver === undefined &&
            ((this._bitField & 2097152) !== 0)) {
            if (!((bitField & 50397184) === 0)) {
                receiver = this._boundValue();
            } else {
                receiver = target === this ? undefined : this._boundTo;
            }
        }
        this._fireEvent("promiseChained", this, promise);
    }

    var domain = getDomain();
    if (!((bitField & 50397184) === 0)) {
        var handler, value, settler = target._settlePromiseCtx;
        if (((bitField & 33554432) !== 0)) {
            value = target._rejectionHandler0;
            handler = didFulfill;
        } else if (((bitField & 16777216) !== 0)) {
            value = target._fulfillmentHandler0;
            handler = didReject;
            target._unsetRejectionIsUnhandled();
        } else {
            settler = target._settlePromiseLateCancellationObserver;
            value = new CancellationError("late cancellation observer");
            target._attachExtraTrace(value);
            handler = didReject;
        }

        async.invoke(settler, target, {
            handler: domain === null ? handler
                : (typeof handler === "function" &&
                    util.domainBind(domain, handler)),
            promise: promise,
            receiver: receiver,
            value: value
        });
    } else {
        target._addCallbacks(didFulfill, didReject, promise, receiver, domain);
    }

    return promise;
};

Promise.prototype._length = function () {
    return this._bitField & 65535;
};

Promise.prototype._isFateSealed = function () {
    return (this._bitField & 117506048) !== 0;
};

Promise.prototype._isFollowing = function () {
    return (this._bitField & 67108864) === 67108864;
};

Promise.prototype._setLength = function (len) {
    this._bitField = (this._bitField & -65536) |
        (len & 65535);
};

Promise.prototype._setFulfilled = function () {
    this._bitField = this._bitField | 33554432;
    this._fireEvent("promiseFulfilled", this);
};

Promise.prototype._setRejected = function () {
    this._bitField = this._bitField | 16777216;
    this._fireEvent("promiseRejected", this);
};

Promise.prototype._setFollowing = function () {
    this._bitField = this._bitField | 67108864;
    this._fireEvent("promiseResolved", this);
};

Promise.prototype._setIsFinal = function () {
    this._bitField = this._bitField | 4194304;
};

Promise.prototype._isFinal = function () {
    return (this._bitField & 4194304) > 0;
};

Promise.prototype._unsetCancelled = function() {
    this._bitField = this._bitField & (~65536);
};

Promise.prototype._setCancelled = function() {
    this._bitField = this._bitField | 65536;
    this._fireEvent("promiseCancelled", this);
};

Promise.prototype._setWillBeCancelled = function() {
    this._bitField = this._bitField | 8388608;
};

Promise.prototype._setAsyncGuaranteed = function() {
    if (async.hasCustomScheduler()) return;
    this._bitField = this._bitField | 134217728;
};

Promise.prototype._receiverAt = function (index) {
    var ret = index === 0 ? this._receiver0 : this[
            index * 4 - 4 + 3];
    if (ret === UNDEFINED_BINDING) {
        return undefined;
    } else if (ret === undefined && this._isBound()) {
        return this._boundValue();
    }
    return ret;
};

Promise.prototype._promiseAt = function (index) {
    return this[
            index * 4 - 4 + 2];
};

Promise.prototype._fulfillmentHandlerAt = function (index) {
    return this[
            index * 4 - 4 + 0];
};

Promise.prototype._rejectionHandlerAt = function (index) {
    return this[
            index * 4 - 4 + 1];
};

Promise.prototype._boundValue = function() {};

Promise.prototype._migrateCallback0 = function (follower) {
    var bitField = follower._bitField;
    var fulfill = follower._fulfillmentHandler0;
    var reject = follower._rejectionHandler0;
    var promise = follower._promise0;
    var receiver = follower._receiverAt(0);
    if (receiver === undefined) receiver = UNDEFINED_BINDING;
    this._addCallbacks(fulfill, reject, promise, receiver, null);
};

Promise.prototype._migrateCallbackAt = function (follower, index) {
    var fulfill = follower._fulfillmentHandlerAt(index);
    var reject = follower._rejectionHandlerAt(index);
    var promise = follower._promiseAt(index);
    var receiver = follower._receiverAt(index);
    if (receiver === undefined) receiver = UNDEFINED_BINDING;
    this._addCallbacks(fulfill, reject, promise, receiver, null);
};

Promise.prototype._addCallbacks = function (
    fulfill,
    reject,
    promise,
    receiver,
    domain
) {
    var index = this._length();

    if (index >= 65535 - 4) {
        index = 0;
        this._setLength(0);
    }

    if (index === 0) {
        this._promise0 = promise;
        this._receiver0 = receiver;
        if (typeof fulfill === "function") {
            this._fulfillmentHandler0 =
                domain === null ? fulfill : util.domainBind(domain, fulfill);
        }
        if (typeof reject === "function") {
            this._rejectionHandler0 =
                domain === null ? reject : util.domainBind(domain, reject);
        }
    } else {
        var base = index * 4 - 4;
        this[base + 2] = promise;
        this[base + 3] = receiver;
        if (typeof fulfill === "function") {
            this[base + 0] =
                domain === null ? fulfill : util.domainBind(domain, fulfill);
        }
        if (typeof reject === "function") {
            this[base + 1] =
                domain === null ? reject : util.domainBind(domain, reject);
        }
    }
    this._setLength(index + 1);
    return index;
};

Promise.prototype._proxy = function (proxyable, arg) {
    this._addCallbacks(undefined, undefined, arg, proxyable, null);
};

Promise.prototype._resolveCallback = function(value, shouldBind) {
    if (((this._bitField & 117506048) !== 0)) return;
    if (value === this)
        return this._rejectCallback(makeSelfResolutionError(), false);
    var maybePromise = tryConvertToPromise(value, this);
    if (!(maybePromise instanceof Promise)) return this._fulfill(value);

    if (shouldBind) this._propagateFrom(maybePromise, 2);

    var promise = maybePromise._target();

    if (promise === this) {
        this._reject(makeSelfResolutionError());
        return;
    }

    var bitField = promise._bitField;
    if (((bitField & 50397184) === 0)) {
        var len = this._length();
        if (len > 0) promise._migrateCallback0(this);
        for (var i = 1; i < len; ++i) {
            promise._migrateCallbackAt(this, i);
        }
        this._setFollowing();
        this._setLength(0);
        this._setFollowee(promise);
    } else if (((bitField & 33554432) !== 0)) {
        this._fulfill(promise._value());
    } else if (((bitField & 16777216) !== 0)) {
        this._reject(promise._reason());
    } else {
        var reason = new CancellationError("late cancellation observer");
        promise._attachExtraTrace(reason);
        this._reject(reason);
    }
};

Promise.prototype._rejectCallback =
function(reason, synchronous, ignoreNonErrorWarnings) {
    var trace = util.ensureErrorObject(reason);
    var hasStack = trace === reason;
    if (!hasStack && !ignoreNonErrorWarnings && debug.warnings()) {
        var message = "a promise was rejected with a non-error: " +
            util.classString(reason);
        this._warn(message, true);
    }
    this._attachExtraTrace(trace, synchronous ? hasStack : false);
    this._reject(reason);
};

Promise.prototype._resolveFromExecutor = function (executor) {
    if (executor === INTERNAL) return;
    var promise = this;
    this._captureStackTrace();
    this._pushContext();
    var synchronous = true;
    var r = this._execute(executor, function(value) {
        promise._resolveCallback(value);
    }, function (reason) {
        promise._rejectCallback(reason, synchronous);
    });
    synchronous = false;
    this._popContext();

    if (r !== undefined) {
        promise._rejectCallback(r, true);
    }
};

Promise.prototype._settlePromiseFromHandler = function (
    handler, receiver, value, promise
) {
    var bitField = promise._bitField;
    if (((bitField & 65536) !== 0)) return;
    promise._pushContext();
    var x;
    if (receiver === APPLY) {
        if (!value || typeof value.length !== "number") {
            x = errorObj;
            x.e = new TypeError("cannot .spread() a non-array: " +
                                    util.classString(value));
        } else {
            x = tryCatch(handler).apply(this._boundValue(), value);
        }
    } else {
        x = tryCatch(handler).call(receiver, value);
    }
    var promiseCreated = promise._popContext();
    bitField = promise._bitField;
    if (((bitField & 65536) !== 0)) return;

    if (x === NEXT_FILTER) {
        promise._reject(value);
    } else if (x === errorObj) {
        promise._rejectCallback(x.e, false);
    } else {
        debug.checkForgottenReturns(x, promiseCreated, "",  promise, this);
        promise._resolveCallback(x);
    }
};

Promise.prototype._target = function() {
    var ret = this;
    while (ret._isFollowing()) ret = ret._followee();
    return ret;
};

Promise.prototype._followee = function() {
    return this._rejectionHandler0;
};

Promise.prototype._setFollowee = function(promise) {
    this._rejectionHandler0 = promise;
};

Promise.prototype._settlePromise = function(promise, handler, receiver, value) {
    var isPromise = promise instanceof Promise;
    var bitField = this._bitField;
    var asyncGuaranteed = ((bitField & 134217728) !== 0);
    if (((bitField & 65536) !== 0)) {
        if (isPromise) promise._invokeInternalOnCancel();

        if (receiver instanceof PassThroughHandlerContext &&
            receiver.isFinallyHandler()) {
            receiver.cancelPromise = promise;
            if (tryCatch(handler).call(receiver, value) === errorObj) {
                promise._reject(errorObj.e);
            }
        } else if (handler === reflectHandler) {
            promise._fulfill(reflectHandler.call(receiver));
        } else if (receiver instanceof Proxyable) {
            receiver._promiseCancelled(promise);
        } else if (isPromise || promise instanceof PromiseArray) {
            promise._cancel();
        } else {
            receiver.cancel();
        }
    } else if (typeof handler === "function") {
        if (!isPromise) {
            handler.call(receiver, value, promise);
        } else {
            if (asyncGuaranteed) promise._setAsyncGuaranteed();
            this._settlePromiseFromHandler(handler, receiver, value, promise);
        }
    } else if (receiver instanceof Proxyable) {
        if (!receiver._isResolved()) {
            if (((bitField & 33554432) !== 0)) {
                receiver._promiseFulfilled(value, promise);
            } else {
                receiver._promiseRejected(value, promise);
            }
        }
    } else if (isPromise) {
        if (asyncGuaranteed) promise._setAsyncGuaranteed();
        if (((bitField & 33554432) !== 0)) {
            promise._fulfill(value);
        } else {
            promise._reject(value);
        }
    }
};

Promise.prototype._settlePromiseLateCancellationObserver = function(ctx) {
    var handler = ctx.handler;
    var promise = ctx.promise;
    var receiver = ctx.receiver;
    var value = ctx.value;
    if (typeof handler === "function") {
        if (!(promise instanceof Promise)) {
            handler.call(receiver, value, promise);
        } else {
            this._settlePromiseFromHandler(handler, receiver, value, promise);
        }
    } else if (promise instanceof Promise) {
        promise._reject(value);
    }
};

Promise.prototype._settlePromiseCtx = function(ctx) {
    this._settlePromise(ctx.promise, ctx.handler, ctx.receiver, ctx.value);
};

Promise.prototype._settlePromise0 = function(handler, value, bitField) {
    var promise = this._promise0;
    var receiver = this._receiverAt(0);
    this._promise0 = undefined;
    this._receiver0 = undefined;
    this._settlePromise(promise, handler, receiver, value);
};

Promise.prototype._clearCallbackDataAtIndex = function(index) {
    var base = index * 4 - 4;
    this[base + 2] =
    this[base + 3] =
    this[base + 0] =
    this[base + 1] = undefined;
};

Promise.prototype._fulfill = function (value) {
    var bitField = this._bitField;
    if (((bitField & 117506048) >>> 16)) return;
    if (value === this) {
        var err = makeSelfResolutionError();
        this._attachExtraTrace(err);
        return this._reject(err);
    }
    this._setFulfilled();
    this._rejectionHandler0 = value;

    if ((bitField & 65535) > 0) {
        if (((bitField & 134217728) !== 0)) {
            this._settlePromises();
        } else {
            async.settlePromises(this);
        }
    }
};

Promise.prototype._reject = function (reason) {
    var bitField = this._bitField;
    if (((bitField & 117506048) >>> 16)) return;
    this._setRejected();
    this._fulfillmentHandler0 = reason;

    if (this._isFinal()) {
        return async.fatalError(reason, util.isNode);
    }

    if ((bitField & 65535) > 0) {
        async.settlePromises(this);
    } else {
        this._ensurePossibleRejectionHandled();
    }
};

Promise.prototype._fulfillPromises = function (len, value) {
    for (var i = 1; i < len; i++) {
        var handler = this._fulfillmentHandlerAt(i);
        var promise = this._promiseAt(i);
        var receiver = this._receiverAt(i);
        this._clearCallbackDataAtIndex(i);
        this._settlePromise(promise, handler, receiver, value);
    }
};

Promise.prototype._rejectPromises = function (len, reason) {
    for (var i = 1; i < len; i++) {
        var handler = this._rejectionHandlerAt(i);
        var promise = this._promiseAt(i);
        var receiver = this._receiverAt(i);
        this._clearCallbackDataAtIndex(i);
        this._settlePromise(promise, handler, receiver, reason);
    }
};

Promise.prototype._settlePromises = function () {
    var bitField = this._bitField;
    var len = (bitField & 65535);

    if (len > 0) {
        if (((bitField & 16842752) !== 0)) {
            var reason = this._fulfillmentHandler0;
            this._settlePromise0(this._rejectionHandler0, reason, bitField);
            this._rejectPromises(len, reason);
        } else {
            var value = this._rejectionHandler0;
            this._settlePromise0(this._fulfillmentHandler0, value, bitField);
            this._fulfillPromises(len, value);
        }
        this._setLength(0);
    }
    this._clearCancellationData();
};

Promise.prototype._settledValue = function() {
    var bitField = this._bitField;
    if (((bitField & 33554432) !== 0)) {
        return this._rejectionHandler0;
    } else if (((bitField & 16777216) !== 0)) {
        return this._fulfillmentHandler0;
    }
};

function deferResolve(v) {this.promise._resolveCallback(v);}
function deferReject(v) {this.promise._rejectCallback(v, false);}

Promise.defer = Promise.pending = function() {
    debug.deprecated("Promise.defer", "new Promise");
    var promise = new Promise(INTERNAL);
    return {
        promise: promise,
        resolve: deferResolve,
        reject: deferReject
    };
};

util.notEnumerableProp(Promise,
                       "_makeSelfResolutionError",
                       makeSelfResolutionError);

_dereq_("./method")(Promise, INTERNAL, tryConvertToPromise, apiRejection,
    debug);
_dereq_("./bind")(Promise, INTERNAL, tryConvertToPromise, debug);
_dereq_("./cancel")(Promise, PromiseArray, apiRejection, debug);
_dereq_("./direct_resolve")(Promise);
_dereq_("./synchronous_inspection")(Promise);
_dereq_("./join")(
    Promise, PromiseArray, tryConvertToPromise, INTERNAL, async, getDomain);
Promise.Promise = Promise;
Promise.version = "3.5.1";
_dereq_('./map.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
_dereq_('./call_get.js')(Promise);
_dereq_('./using.js')(Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug);
_dereq_('./timers.js')(Promise, INTERNAL, debug);
_dereq_('./generators.js')(Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug);
_dereq_('./nodeify.js')(Promise);
_dereq_('./promisify.js')(Promise, INTERNAL);
_dereq_('./props.js')(Promise, PromiseArray, tryConvertToPromise, apiRejection);
_dereq_('./race.js')(Promise, INTERNAL, tryConvertToPromise, apiRejection);
_dereq_('./reduce.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
_dereq_('./settle.js')(Promise, PromiseArray, debug);
_dereq_('./some.js')(Promise, PromiseArray, apiRejection);
_dereq_('./filter.js')(Promise, INTERNAL);
_dereq_('./each.js')(Promise, INTERNAL);
_dereq_('./any.js')(Promise);
                                                         
    util.toFastProperties(Promise);                                          
    util.toFastProperties(Promise.prototype);                                
    function fillTypes(value) {                                              
        var p = new Promise(INTERNAL);                                       
        p._fulfillmentHandler0 = value;                                      
        p._rejectionHandler0 = value;                                        
        p._promise0 = value;                                                 
        p._receiver0 = value;                                                
    }                                                                        
    // Complete slack tracking, opt out of field-type tracking and           
    // stabilize map                                                         
    fillTypes({a: 1});                                                       
    fillTypes({b: 2});                                                       
    fillTypes({c: 3});                                                       
    fillTypes(1);                                                            
    fillTypes(function(){});                                                 
    fillTypes(undefined);                                                    
    fillTypes(false);                                                        
    fillTypes(new Promise(INTERNAL));                                        
    debug.setBounds(Async.firstLineError, util.lastLineError);               
    return Promise;                                                          

};

},{"./any.js":1,"./async":2,"./bind":3,"./call_get.js":5,"./cancel":6,"./catch_filter":7,"./context":8,"./debuggability":9,"./direct_resolve":10,"./each.js":11,"./errors":12,"./es5":13,"./filter.js":14,"./finally":15,"./generators.js":16,"./join":17,"./map.js":18,"./method":19,"./nodeback":20,"./nodeify.js":21,"./promise_array":23,"./promisify.js":24,"./props.js":25,"./race.js":27,"./reduce.js":28,"./settle.js":30,"./some.js":31,"./synchronous_inspection":32,"./thenables":33,"./timers.js":34,"./using.js":35,"./util":36}],23:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, tryConvertToPromise,
    apiRejection, Proxyable) {
var util = _dereq_("./util");
var isArray = util.isArray;

function toResolutionValue(val) {
    switch(val) {
    case -2: return [];
    case -3: return {};
    case -6: return new Map();
    }
}

function PromiseArray(values) {
    var promise = this._promise = new Promise(INTERNAL);
    if (values instanceof Promise) {
        promise._propagateFrom(values, 3);
    }
    promise._setOnCancel(this);
    this._values = values;
    this._length = 0;
    this._totalResolved = 0;
    this._init(undefined, -2);
}
util.inherits(PromiseArray, Proxyable);

PromiseArray.prototype.length = function () {
    return this._length;
};

PromiseArray.prototype.promise = function () {
    return this._promise;
};

PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
    var values = tryConvertToPromise(this._values, this._promise);
    if (values instanceof Promise) {
        values = values._target();
        var bitField = values._bitField;
        ;
        this._values = values;

        if (((bitField & 50397184) === 0)) {
            this._promise._setAsyncGuaranteed();
            return values._then(
                init,
                this._reject,
                undefined,
                this,
                resolveValueIfEmpty
           );
        } else if (((bitField & 33554432) !== 0)) {
            values = values._value();
        } else if (((bitField & 16777216) !== 0)) {
            return this._reject(values._reason());
        } else {
            return this._cancel();
        }
    }
    values = util.asArray(values);
    if (values === null) {
        var err = apiRejection(
            "expecting an array or an iterable object but got " + util.classString(values)).reason();
        this._promise._rejectCallback(err, false);
        return;
    }

    if (values.length === 0) {
        if (resolveValueIfEmpty === -5) {
            this._resolveEmptyArray();
        }
        else {
            this._resolve(toResolutionValue(resolveValueIfEmpty));
        }
        return;
    }
    this._iterate(values);
};

PromiseArray.prototype._iterate = function(values) {
    var len = this.getActualLength(values.length);
    this._length = len;
    this._values = this.shouldCopyValues() ? new Array(len) : this._values;
    var result = this._promise;
    var isResolved = false;
    var bitField = null;
    for (var i = 0; i < len; ++i) {
        var maybePromise = tryConvertToPromise(values[i], result);

        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            bitField = maybePromise._bitField;
        } else {
            bitField = null;
        }

        if (isResolved) {
            if (bitField !== null) {
                maybePromise.suppressUnhandledRejections();
            }
        } else if (bitField !== null) {
            if (((bitField & 50397184) === 0)) {
                maybePromise._proxy(this, i);
                this._values[i] = maybePromise;
            } else if (((bitField & 33554432) !== 0)) {
                isResolved = this._promiseFulfilled(maybePromise._value(), i);
            } else if (((bitField & 16777216) !== 0)) {
                isResolved = this._promiseRejected(maybePromise._reason(), i);
            } else {
                isResolved = this._promiseCancelled(i);
            }
        } else {
            isResolved = this._promiseFulfilled(maybePromise, i);
        }
    }
    if (!isResolved) result._setAsyncGuaranteed();
};

PromiseArray.prototype._isResolved = function () {
    return this._values === null;
};

PromiseArray.prototype._resolve = function (value) {
    this._values = null;
    this._promise._fulfill(value);
};

PromiseArray.prototype._cancel = function() {
    if (this._isResolved() || !this._promise._isCancellable()) return;
    this._values = null;
    this._promise._cancel();
};

PromiseArray.prototype._reject = function (reason) {
    this._values = null;
    this._promise._rejectCallback(reason, false);
};

PromiseArray.prototype._promiseFulfilled = function (value, index) {
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
        return true;
    }
    return false;
};

PromiseArray.prototype._promiseCancelled = function() {
    this._cancel();
    return true;
};

PromiseArray.prototype._promiseRejected = function (reason) {
    this._totalResolved++;
    this._reject(reason);
    return true;
};

PromiseArray.prototype._resultCancelled = function() {
    if (this._isResolved()) return;
    var values = this._values;
    this._cancel();
    if (values instanceof Promise) {
        values.cancel();
    } else {
        for (var i = 0; i < values.length; ++i) {
            if (values[i] instanceof Promise) {
                values[i].cancel();
            }
        }
    }
};

PromiseArray.prototype.shouldCopyValues = function () {
    return true;
};

PromiseArray.prototype.getActualLength = function (len) {
    return len;
};

return PromiseArray;
};

},{"./util":36}],24:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var THIS = {};
var util = _dereq_("./util");
var nodebackForPromise = _dereq_("./nodeback");
var withAppended = util.withAppended;
var maybeWrapAsError = util.maybeWrapAsError;
var canEvaluate = util.canEvaluate;
var TypeError = _dereq_("./errors").TypeError;
var defaultSuffix = "Async";
var defaultPromisified = {__isPromisified__: true};
var noCopyProps = [
    "arity",    "length",
    "name",
    "arguments",
    "caller",
    "callee",
    "prototype",
    "__isPromisified__"
];
var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");

var defaultFilter = function(name) {
    return util.isIdentifier(name) &&
        name.charAt(0) !== "_" &&
        name !== "constructor";
};

function propsFilter(key) {
    return !noCopyPropsPattern.test(key);
}

function isPromisified(fn) {
    try {
        return fn.__isPromisified__ === true;
    }
    catch (e) {
        return false;
    }
}

function hasPromisified(obj, key, suffix) {
    var val = util.getDataPropertyOrDefault(obj, key + suffix,
                                            defaultPromisified);
    return val ? isPromisified(val) : false;
}
function checkValid(ret, suffix, suffixRegexp) {
    for (var i = 0; i < ret.length; i += 2) {
        var key = ret[i];
        if (suffixRegexp.test(key)) {
            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
            for (var j = 0; j < ret.length; j += 2) {
                if (ret[j] === keyWithoutAsyncSuffix) {
                    throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                        .replace("%s", suffix));
                }
            }
        }
    }
}

function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
    var keys = util.inheritedDataKeys(obj);
    var ret = [];
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var value = obj[key];
        var passesDefaultFilter = filter === defaultFilter
            ? true : defaultFilter(key, value, obj);
        if (typeof value === "function" &&
            !isPromisified(value) &&
            !hasPromisified(obj, key, suffix) &&
            filter(key, value, obj, passesDefaultFilter)) {
            ret.push(key, value);
        }
    }
    checkValid(ret, suffix, suffixRegexp);
    return ret;
}

var escapeIdentRegex = function(str) {
    return str.replace(/([$])/, "\\$");
};

var makeNodePromisifiedEval;
if (false) { var parameterCount, parameterDeclaration, argumentSequence, switchCaseArgumentOrder; }

function makeNodePromisifiedClosure(callback, receiver, _, fn, __, multiArgs) {
    var defaultThis = (function() {return this;})();
    var method = callback;
    if (typeof method === "string") {
        callback = fn;
    }
    function promisified() {
        var _receiver = receiver;
        if (receiver === THIS) _receiver = this;
        var promise = new Promise(INTERNAL);
        promise._captureStackTrace();
        var cb = typeof method === "string" && this !== defaultThis
            ? this[method] : callback;
        var fn = nodebackForPromise(promise, multiArgs);
        try {
            cb.apply(_receiver, withAppended(arguments, fn));
        } catch(e) {
            promise._rejectCallback(maybeWrapAsError(e), true, true);
        }
        if (!promise._isFateSealed()) promise._setAsyncGuaranteed();
        return promise;
    }
    util.notEnumerableProp(promisified, "__isPromisified__", true);
    return promisified;
}

var makeNodePromisified = canEvaluate
    ? makeNodePromisifiedEval
    : makeNodePromisifiedClosure;

function promisifyAll(obj, suffix, filter, promisifier, multiArgs) {
    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
    var methods =
        promisifiableMethods(obj, suffix, suffixRegexp, filter);

    for (var i = 0, len = methods.length; i < len; i+= 2) {
        var key = methods[i];
        var fn = methods[i+1];
        var promisifiedKey = key + suffix;
        if (promisifier === makeNodePromisified) {
            obj[promisifiedKey] =
                makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
        } else {
            var promisified = promisifier(fn, function() {
                return makeNodePromisified(key, THIS, key,
                                           fn, suffix, multiArgs);
            });
            util.notEnumerableProp(promisified, "__isPromisified__", true);
            obj[promisifiedKey] = promisified;
        }
    }
    util.toFastProperties(obj);
    return obj;
}

function promisify(callback, receiver, multiArgs) {
    return makeNodePromisified(callback, receiver, undefined,
                                callback, null, multiArgs);
}

Promise.promisify = function (fn, options) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    if (isPromisified(fn)) {
        return fn;
    }
    options = Object(options);
    var receiver = options.context === undefined ? THIS : options.context;
    var multiArgs = !!options.multiArgs;
    var ret = promisify(fn, receiver, multiArgs);
    util.copyDescriptors(fn, ret, propsFilter);
    return ret;
};

Promise.promisifyAll = function (target, options) {
    if (typeof target !== "function" && typeof target !== "object") {
        throw new TypeError("the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    options = Object(options);
    var multiArgs = !!options.multiArgs;
    var suffix = options.suffix;
    if (typeof suffix !== "string") suffix = defaultSuffix;
    var filter = options.filter;
    if (typeof filter !== "function") filter = defaultFilter;
    var promisifier = options.promisifier;
    if (typeof promisifier !== "function") promisifier = makeNodePromisified;

    if (!util.isIdentifier(suffix)) {
        throw new RangeError("suffix must be a valid identifier\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }

    var keys = util.inheritedDataKeys(target);
    for (var i = 0; i < keys.length; ++i) {
        var value = target[keys[i]];
        if (keys[i] !== "constructor" &&
            util.isClass(value)) {
            promisifyAll(value.prototype, suffix, filter, promisifier,
                multiArgs);
            promisifyAll(value, suffix, filter, promisifier, multiArgs);
        }
    }

    return promisifyAll(target, suffix, filter, promisifier, multiArgs);
};
};


},{"./errors":12,"./nodeback":20,"./util":36}],25:[function(_dereq_,module,exports){
"use strict";
module.exports = function(
    Promise, PromiseArray, tryConvertToPromise, apiRejection) {
var util = _dereq_("./util");
var isObject = util.isObject;
var es5 = _dereq_("./es5");
var Es6Map;
if (typeof Map === "function") Es6Map = Map;

var mapToEntries = (function() {
    var index = 0;
    var size = 0;

    function extractEntry(value, key) {
        this[index] = value;
        this[index + size] = key;
        index++;
    }

    return function mapToEntries(map) {
        size = map.size;
        index = 0;
        var ret = new Array(map.size * 2);
        map.forEach(extractEntry, ret);
        return ret;
    };
})();

var entriesToMap = function(entries) {
    var ret = new Es6Map();
    var length = entries.length / 2 | 0;
    for (var i = 0; i < length; ++i) {
        var key = entries[length + i];
        var value = entries[i];
        ret.set(key, value);
    }
    return ret;
};

function PropertiesPromiseArray(obj) {
    var isMap = false;
    var entries;
    if (Es6Map !== undefined && obj instanceof Es6Map) {
        entries = mapToEntries(obj);
        isMap = true;
    } else {
        var keys = es5.keys(obj);
        var len = keys.length;
        entries = new Array(len * 2);
        for (var i = 0; i < len; ++i) {
            var key = keys[i];
            entries[i] = obj[key];
            entries[i + len] = key;
        }
    }
    this.constructor$(entries);
    this._isMap = isMap;
    this._init$(undefined, isMap ? -6 : -3);
}
util.inherits(PropertiesPromiseArray, PromiseArray);

PropertiesPromiseArray.prototype._init = function () {};

PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        var val;
        if (this._isMap) {
            val = entriesToMap(this._values);
        } else {
            val = {};
            var keyOffset = this.length();
            for (var i = 0, len = this.length(); i < len; ++i) {
                val[this._values[i + keyOffset]] = this._values[i];
            }
        }
        this._resolve(val);
        return true;
    }
    return false;
};

PropertiesPromiseArray.prototype.shouldCopyValues = function () {
    return false;
};

PropertiesPromiseArray.prototype.getActualLength = function (len) {
    return len >> 1;
};

function props(promises) {
    var ret;
    var castValue = tryConvertToPromise(promises);

    if (!isObject(castValue)) {
        return apiRejection("cannot await properties of a non-object\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    } else if (castValue instanceof Promise) {
        ret = castValue._then(
            Promise.props, undefined, undefined, undefined, undefined);
    } else {
        ret = new PropertiesPromiseArray(castValue).promise();
    }

    if (castValue instanceof Promise) {
        ret._propagateFrom(castValue, 2);
    }
    return ret;
}

Promise.prototype.props = function () {
    return props(this);
};

Promise.props = function (promises) {
    return props(promises);
};
};

},{"./es5":13,"./util":36}],26:[function(_dereq_,module,exports){
"use strict";
function arrayMove(src, srcIndex, dst, dstIndex, len) {
    for (var j = 0; j < len; ++j) {
        dst[j + dstIndex] = src[j + srcIndex];
        src[j + srcIndex] = void 0;
    }
}

function Queue(capacity) {
    this._capacity = capacity;
    this._length = 0;
    this._front = 0;
}

Queue.prototype._willBeOverCapacity = function (size) {
    return this._capacity < size;
};

Queue.prototype._pushOne = function (arg) {
    var length = this.length();
    this._checkCapacity(length + 1);
    var i = (this._front + length) & (this._capacity - 1);
    this[i] = arg;
    this._length = length + 1;
};

Queue.prototype.push = function (fn, receiver, arg) {
    var length = this.length() + 3;
    if (this._willBeOverCapacity(length)) {
        this._pushOne(fn);
        this._pushOne(receiver);
        this._pushOne(arg);
        return;
    }
    var j = this._front + length - 3;
    this._checkCapacity(length);
    var wrapMask = this._capacity - 1;
    this[(j + 0) & wrapMask] = fn;
    this[(j + 1) & wrapMask] = receiver;
    this[(j + 2) & wrapMask] = arg;
    this._length = length;
};

Queue.prototype.shift = function () {
    var front = this._front,
        ret = this[front];

    this[front] = undefined;
    this._front = (front + 1) & (this._capacity - 1);
    this._length--;
    return ret;
};

Queue.prototype.length = function () {
    return this._length;
};

Queue.prototype._checkCapacity = function (size) {
    if (this._capacity < size) {
        this._resizeTo(this._capacity << 1);
    }
};

Queue.prototype._resizeTo = function (capacity) {
    var oldCapacity = this._capacity;
    this._capacity = capacity;
    var front = this._front;
    var length = this._length;
    var moveItemsCount = (front + length) & (oldCapacity - 1);
    arrayMove(this, 0, this, oldCapacity, moveItemsCount);
};

module.exports = Queue;

},{}],27:[function(_dereq_,module,exports){
"use strict";
module.exports = function(
    Promise, INTERNAL, tryConvertToPromise, apiRejection) {
var util = _dereq_("./util");

var raceLater = function (promise) {
    return promise.then(function(array) {
        return race(array, promise);
    });
};

function race(promises, parent) {
    var maybePromise = tryConvertToPromise(promises);

    if (maybePromise instanceof Promise) {
        return raceLater(maybePromise);
    } else {
        promises = util.asArray(promises);
        if (promises === null)
            return apiRejection("expecting an array or an iterable object but got " + util.classString(promises));
    }

    var ret = new Promise(INTERNAL);
    if (parent !== undefined) {
        ret._propagateFrom(parent, 3);
    }
    var fulfill = ret._fulfill;
    var reject = ret._reject;
    for (var i = 0, len = promises.length; i < len; ++i) {
        var val = promises[i];

        if (val === undefined && !(i in promises)) {
            continue;
        }

        Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
    }
    return ret;
}

Promise.race = function (promises) {
    return race(promises, undefined);
};

Promise.prototype.race = function () {
    return race(this, undefined);
};

};

},{"./util":36}],28:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          PromiseArray,
                          apiRejection,
                          tryConvertToPromise,
                          INTERNAL,
                          debug) {
var getDomain = Promise._getDomain;
var util = _dereq_("./util");
var tryCatch = util.tryCatch;

function ReductionPromiseArray(promises, fn, initialValue, _each) {
    this.constructor$(promises);
    var domain = getDomain();
    this._fn = domain === null ? fn : util.domainBind(domain, fn);
    if (initialValue !== undefined) {
        initialValue = Promise.resolve(initialValue);
        initialValue._attachCancellationCallback(this);
    }
    this._initialValue = initialValue;
    this._currentCancellable = null;
    if(_each === INTERNAL) {
        this._eachValues = Array(this._length);
    } else if (_each === 0) {
        this._eachValues = null;
    } else {
        this._eachValues = undefined;
    }
    this._promise._captureStackTrace();
    this._init$(undefined, -5);
}
util.inherits(ReductionPromiseArray, PromiseArray);

ReductionPromiseArray.prototype._gotAccum = function(accum) {
    if (this._eachValues !== undefined && 
        this._eachValues !== null && 
        accum !== INTERNAL) {
        this._eachValues.push(accum);
    }
};

ReductionPromiseArray.prototype._eachComplete = function(value) {
    if (this._eachValues !== null) {
        this._eachValues.push(value);
    }
    return this._eachValues;
};

ReductionPromiseArray.prototype._init = function() {};

ReductionPromiseArray.prototype._resolveEmptyArray = function() {
    this._resolve(this._eachValues !== undefined ? this._eachValues
                                                 : this._initialValue);
};

ReductionPromiseArray.prototype.shouldCopyValues = function () {
    return false;
};

ReductionPromiseArray.prototype._resolve = function(value) {
    this._promise._resolveCallback(value);
    this._values = null;
};

ReductionPromiseArray.prototype._resultCancelled = function(sender) {
    if (sender === this._initialValue) return this._cancel();
    if (this._isResolved()) return;
    this._resultCancelled$();
    if (this._currentCancellable instanceof Promise) {
        this._currentCancellable.cancel();
    }
    if (this._initialValue instanceof Promise) {
        this._initialValue.cancel();
    }
};

ReductionPromiseArray.prototype._iterate = function (values) {
    this._values = values;
    var value;
    var i;
    var length = values.length;
    if (this._initialValue !== undefined) {
        value = this._initialValue;
        i = 0;
    } else {
        value = Promise.resolve(values[0]);
        i = 1;
    }

    this._currentCancellable = value;

    if (!value.isRejected()) {
        for (; i < length; ++i) {
            var ctx = {
                accum: null,
                value: values[i],
                index: i,
                length: length,
                array: this
            };
            value = value._then(gotAccum, undefined, undefined, ctx, undefined);
        }
    }

    if (this._eachValues !== undefined) {
        value = value
            ._then(this._eachComplete, undefined, undefined, this, undefined);
    }
    value._then(completed, completed, undefined, value, this);
};

Promise.prototype.reduce = function (fn, initialValue) {
    return reduce(this, fn, initialValue, null);
};

Promise.reduce = function (promises, fn, initialValue, _each) {
    return reduce(promises, fn, initialValue, _each);
};

function completed(valueOrReason, array) {
    if (this.isFulfilled()) {
        array._resolve(valueOrReason);
    } else {
        array._reject(valueOrReason);
    }
}

function reduce(promises, fn, initialValue, _each) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
    return array.promise();
}

function gotAccum(accum) {
    this.accum = accum;
    this.array._gotAccum(accum);
    var value = tryConvertToPromise(this.value, this.array._promise);
    if (value instanceof Promise) {
        this.array._currentCancellable = value;
        return value._then(gotValue, undefined, undefined, this, undefined);
    } else {
        return gotValue.call(this, value);
    }
}

function gotValue(value) {
    var array = this.array;
    var promise = array._promise;
    var fn = tryCatch(array._fn);
    promise._pushContext();
    var ret;
    if (array._eachValues !== undefined) {
        ret = fn.call(promise._boundValue(), value, this.index, this.length);
    } else {
        ret = fn.call(promise._boundValue(),
                              this.accum, value, this.index, this.length);
    }
    if (ret instanceof Promise) {
        array._currentCancellable = ret;
    }
    var promiseCreated = promise._popContext();
    debug.checkForgottenReturns(
        ret,
        promiseCreated,
        array._eachValues !== undefined ? "Promise.each" : "Promise.reduce",
        promise
    );
    return ret;
}
};

},{"./util":36}],29:[function(_dereq_,module,exports){
"use strict";
var util = _dereq_("./util");
var schedule;
var noAsyncScheduler = function() {
    throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
};
var NativePromise = util.getNativePromise();
if (util.isNode && typeof MutationObserver === "undefined") {
    var GlobalSetImmediate = global.setImmediate;
    var ProcessNextTick = process.nextTick;
    schedule = util.isRecentNode
                ? function(fn) { GlobalSetImmediate.call(global, fn); }
                : function(fn) { ProcessNextTick.call(process, fn); };
} else if (typeof NativePromise === "function" &&
           typeof NativePromise.resolve === "function") {
    var nativePromise = NativePromise.resolve();
    schedule = function(fn) {
        nativePromise.then(fn);
    };
} else if ((typeof MutationObserver !== "undefined") &&
          !(typeof window !== "undefined" &&
            window.navigator &&
            (window.navigator.standalone || window.cordova))) {
    schedule = (function() {
        var div = document.createElement("div");
        var opts = {attributes: true};
        var toggleScheduled = false;
        var div2 = document.createElement("div");
        var o2 = new MutationObserver(function() {
            div.classList.toggle("foo");
            toggleScheduled = false;
        });
        o2.observe(div2, opts);

        var scheduleToggle = function() {
            if (toggleScheduled) return;
            toggleScheduled = true;
            div2.classList.toggle("foo");
        };

        return function schedule(fn) {
            var o = new MutationObserver(function() {
                o.disconnect();
                fn();
            });
            o.observe(div, opts);
            scheduleToggle();
        };
    })();
} else if (typeof setImmediate !== "undefined") {
    schedule = function (fn) {
        setImmediate(fn);
    };
} else if (typeof setTimeout !== "undefined") {
    schedule = function (fn) {
        setTimeout(fn, 0);
    };
} else {
    schedule = noAsyncScheduler;
}
module.exports = schedule;

},{"./util":36}],30:[function(_dereq_,module,exports){
"use strict";
module.exports =
    function(Promise, PromiseArray, debug) {
var PromiseInspection = Promise.PromiseInspection;
var util = _dereq_("./util");

function SettledPromiseArray(values) {
    this.constructor$(values);
}
util.inherits(SettledPromiseArray, PromiseArray);

SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
    this._values[index] = inspection;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
        return true;
    }
    return false;
};

SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
    var ret = new PromiseInspection();
    ret._bitField = 33554432;
    ret._settledValueField = value;
    return this._promiseResolved(index, ret);
};
SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
    var ret = new PromiseInspection();
    ret._bitField = 16777216;
    ret._settledValueField = reason;
    return this._promiseResolved(index, ret);
};

Promise.settle = function (promises) {
    debug.deprecated(".settle()", ".reflect()");
    return new SettledPromiseArray(promises).promise();
};

Promise.prototype.settle = function () {
    return Promise.settle(this);
};
};

},{"./util":36}],31:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, PromiseArray, apiRejection) {
var util = _dereq_("./util");
var RangeError = _dereq_("./errors").RangeError;
var AggregateError = _dereq_("./errors").AggregateError;
var isArray = util.isArray;
var CANCELLATION = {};


function SomePromiseArray(values) {
    this.constructor$(values);
    this._howMany = 0;
    this._unwrap = false;
    this._initialized = false;
}
util.inherits(SomePromiseArray, PromiseArray);

SomePromiseArray.prototype._init = function () {
    if (!this._initialized) {
        return;
    }
    if (this._howMany === 0) {
        this._resolve([]);
        return;
    }
    this._init$(undefined, -5);
    var isArrayResolved = isArray(this._values);
    if (!this._isResolved() &&
        isArrayResolved &&
        this._howMany > this._canPossiblyFulfill()) {
        this._reject(this._getRangeError(this.length()));
    }
};

SomePromiseArray.prototype.init = function () {
    this._initialized = true;
    this._init();
};

SomePromiseArray.prototype.setUnwrap = function () {
    this._unwrap = true;
};

SomePromiseArray.prototype.howMany = function () {
    return this._howMany;
};

SomePromiseArray.prototype.setHowMany = function (count) {
    this._howMany = count;
};

SomePromiseArray.prototype._promiseFulfilled = function (value) {
    this._addFulfilled(value);
    if (this._fulfilled() === this.howMany()) {
        this._values.length = this.howMany();
        if (this.howMany() === 1 && this._unwrap) {
            this._resolve(this._values[0]);
        } else {
            this._resolve(this._values);
        }
        return true;
    }
    return false;

};
SomePromiseArray.prototype._promiseRejected = function (reason) {
    this._addRejected(reason);
    return this._checkOutcome();
};

SomePromiseArray.prototype._promiseCancelled = function () {
    if (this._values instanceof Promise || this._values == null) {
        return this._cancel();
    }
    this._addRejected(CANCELLATION);
    return this._checkOutcome();
};

SomePromiseArray.prototype._checkOutcome = function() {
    if (this.howMany() > this._canPossiblyFulfill()) {
        var e = new AggregateError();
        for (var i = this.length(); i < this._values.length; ++i) {
            if (this._values[i] !== CANCELLATION) {
                e.push(this._values[i]);
            }
        }
        if (e.length > 0) {
            this._reject(e);
        } else {
            this._cancel();
        }
        return true;
    }
    return false;
};

SomePromiseArray.prototype._fulfilled = function () {
    return this._totalResolved;
};

SomePromiseArray.prototype._rejected = function () {
    return this._values.length - this.length();
};

SomePromiseArray.prototype._addRejected = function (reason) {
    this._values.push(reason);
};

SomePromiseArray.prototype._addFulfilled = function (value) {
    this._values[this._totalResolved++] = value;
};

SomePromiseArray.prototype._canPossiblyFulfill = function () {
    return this.length() - this._rejected();
};

SomePromiseArray.prototype._getRangeError = function (count) {
    var message = "Input array must contain at least " +
            this._howMany + " items but contains only " + count + " items";
    return new RangeError(message);
};

SomePromiseArray.prototype._resolveEmptyArray = function () {
    this._reject(this._getRangeError(0));
};

function some(promises, howMany) {
    if ((howMany | 0) !== howMany || howMany < 0) {
        return apiRejection("expecting a positive integer\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    ret.setHowMany(howMany);
    ret.init();
    return promise;
}

Promise.some = function (promises, howMany) {
    return some(promises, howMany);
};

Promise.prototype.some = function (howMany) {
    return some(this, howMany);
};

Promise._SomePromiseArray = SomePromiseArray;
};

},{"./errors":12,"./util":36}],32:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
function PromiseInspection(promise) {
    if (promise !== undefined) {
        promise = promise._target();
        this._bitField = promise._bitField;
        this._settledValueField = promise._isFateSealed()
            ? promise._settledValue() : undefined;
    }
    else {
        this._bitField = 0;
        this._settledValueField = undefined;
    }
}

PromiseInspection.prototype._settledValue = function() {
    return this._settledValueField;
};

var value = PromiseInspection.prototype.value = function () {
    if (!this.isFulfilled()) {
        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    return this._settledValue();
};

var reason = PromiseInspection.prototype.error =
PromiseInspection.prototype.reason = function () {
    if (!this.isRejected()) {
        throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    return this._settledValue();
};

var isFulfilled = PromiseInspection.prototype.isFulfilled = function() {
    return (this._bitField & 33554432) !== 0;
};

var isRejected = PromiseInspection.prototype.isRejected = function () {
    return (this._bitField & 16777216) !== 0;
};

var isPending = PromiseInspection.prototype.isPending = function () {
    return (this._bitField & 50397184) === 0;
};

var isResolved = PromiseInspection.prototype.isResolved = function () {
    return (this._bitField & 50331648) !== 0;
};

PromiseInspection.prototype.isCancelled = function() {
    return (this._bitField & 8454144) !== 0;
};

Promise.prototype.__isCancelled = function() {
    return (this._bitField & 65536) === 65536;
};

Promise.prototype._isCancelled = function() {
    return this._target().__isCancelled();
};

Promise.prototype.isCancelled = function() {
    return (this._target()._bitField & 8454144) !== 0;
};

Promise.prototype.isPending = function() {
    return isPending.call(this._target());
};

Promise.prototype.isRejected = function() {
    return isRejected.call(this._target());
};

Promise.prototype.isFulfilled = function() {
    return isFulfilled.call(this._target());
};

Promise.prototype.isResolved = function() {
    return isResolved.call(this._target());
};

Promise.prototype.value = function() {
    return value.call(this._target());
};

Promise.prototype.reason = function() {
    var target = this._target();
    target._unsetRejectionIsUnhandled();
    return reason.call(target);
};

Promise.prototype._value = function() {
    return this._settledValue();
};

Promise.prototype._reason = function() {
    this._unsetRejectionIsUnhandled();
    return this._settledValue();
};

Promise.PromiseInspection = PromiseInspection;
};

},{}],33:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var util = _dereq_("./util");
var errorObj = util.errorObj;
var isObject = util.isObject;

function tryConvertToPromise(obj, context) {
    if (isObject(obj)) {
        if (obj instanceof Promise) return obj;
        var then = getThen(obj);
        if (then === errorObj) {
            if (context) context._pushContext();
            var ret = Promise.reject(then.e);
            if (context) context._popContext();
            return ret;
        } else if (typeof then === "function") {
            if (isAnyBluebirdPromise(obj)) {
                var ret = new Promise(INTERNAL);
                obj._then(
                    ret._fulfill,
                    ret._reject,
                    undefined,
                    ret,
                    null
                );
                return ret;
            }
            return doThenable(obj, then, context);
        }
    }
    return obj;
}

function doGetThen(obj) {
    return obj.then;
}

function getThen(obj) {
    try {
        return doGetThen(obj);
    } catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

var hasProp = {}.hasOwnProperty;
function isAnyBluebirdPromise(obj) {
    try {
        return hasProp.call(obj, "_promise0");
    } catch (e) {
        return false;
    }
}

function doThenable(x, then, context) {
    var promise = new Promise(INTERNAL);
    var ret = promise;
    if (context) context._pushContext();
    promise._captureStackTrace();
    if (context) context._popContext();
    var synchronous = true;
    var result = util.tryCatch(then).call(x, resolve, reject);
    synchronous = false;

    if (promise && result === errorObj) {
        promise._rejectCallback(result.e, true, true);
        promise = null;
    }

    function resolve(value) {
        if (!promise) return;
        promise._resolveCallback(value);
        promise = null;
    }

    function reject(reason) {
        if (!promise) return;
        promise._rejectCallback(reason, synchronous, true);
        promise = null;
    }
    return ret;
}

return tryConvertToPromise;
};

},{"./util":36}],34:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, debug) {
var util = _dereq_("./util");
var TimeoutError = Promise.TimeoutError;

function HandleWrapper(handle)  {
    this.handle = handle;
}

HandleWrapper.prototype._resultCancelled = function() {
    clearTimeout(this.handle);
};

var afterValue = function(value) { return delay(+this).thenReturn(value); };
var delay = Promise.delay = function (ms, value) {
    var ret;
    var handle;
    if (value !== undefined) {
        ret = Promise.resolve(value)
                ._then(afterValue, null, null, ms, undefined);
        if (debug.cancellation() && value instanceof Promise) {
            ret._setOnCancel(value);
        }
    } else {
        ret = new Promise(INTERNAL);
        handle = setTimeout(function() { ret._fulfill(); }, +ms);
        if (debug.cancellation()) {
            ret._setOnCancel(new HandleWrapper(handle));
        }
        ret._captureStackTrace();
    }
    ret._setAsyncGuaranteed();
    return ret;
};

Promise.prototype.delay = function (ms) {
    return delay(ms, this);
};

var afterTimeout = function (promise, message, parent) {
    var err;
    if (typeof message !== "string") {
        if (message instanceof Error) {
            err = message;
        } else {
            err = new TimeoutError("operation timed out");
        }
    } else {
        err = new TimeoutError(message);
    }
    util.markAsOriginatingFromRejection(err);
    promise._attachExtraTrace(err);
    promise._reject(err);

    if (parent != null) {
        parent.cancel();
    }
};

function successClear(value) {
    clearTimeout(this.handle);
    return value;
}

function failureClear(reason) {
    clearTimeout(this.handle);
    throw reason;
}

Promise.prototype.timeout = function (ms, message) {
    ms = +ms;
    var ret, parent;

    var handleWrapper = new HandleWrapper(setTimeout(function timeoutTimeout() {
        if (ret.isPending()) {
            afterTimeout(ret, message, parent);
        }
    }, ms));

    if (debug.cancellation()) {
        parent = this.then();
        ret = parent._then(successClear, failureClear,
                            undefined, handleWrapper, undefined);
        ret._setOnCancel(handleWrapper);
    } else {
        ret = this._then(successClear, failureClear,
                            undefined, handleWrapper, undefined);
    }

    return ret;
};

};

},{"./util":36}],35:[function(_dereq_,module,exports){
"use strict";
module.exports = function (Promise, apiRejection, tryConvertToPromise,
    createContext, INTERNAL, debug) {
    var util = _dereq_("./util");
    var TypeError = _dereq_("./errors").TypeError;
    var inherits = _dereq_("./util").inherits;
    var errorObj = util.errorObj;
    var tryCatch = util.tryCatch;
    var NULL = {};

    function thrower(e) {
        setTimeout(function(){throw e;}, 0);
    }

    function castPreservingDisposable(thenable) {
        var maybePromise = tryConvertToPromise(thenable);
        if (maybePromise !== thenable &&
            typeof thenable._isDisposable === "function" &&
            typeof thenable._getDisposer === "function" &&
            thenable._isDisposable()) {
            maybePromise._setDisposable(thenable._getDisposer());
        }
        return maybePromise;
    }
    function dispose(resources, inspection) {
        var i = 0;
        var len = resources.length;
        var ret = new Promise(INTERNAL);
        function iterator() {
            if (i >= len) return ret._fulfill();
            var maybePromise = castPreservingDisposable(resources[i++]);
            if (maybePromise instanceof Promise &&
                maybePromise._isDisposable()) {
                try {
                    maybePromise = tryConvertToPromise(
                        maybePromise._getDisposer().tryDispose(inspection),
                        resources.promise);
                } catch (e) {
                    return thrower(e);
                }
                if (maybePromise instanceof Promise) {
                    return maybePromise._then(iterator, thrower,
                                              null, null, null);
                }
            }
            iterator();
        }
        iterator();
        return ret;
    }

    function Disposer(data, promise, context) {
        this._data = data;
        this._promise = promise;
        this._context = context;
    }

    Disposer.prototype.data = function () {
        return this._data;
    };

    Disposer.prototype.promise = function () {
        return this._promise;
    };

    Disposer.prototype.resource = function () {
        if (this.promise().isFulfilled()) {
            return this.promise().value();
        }
        return NULL;
    };

    Disposer.prototype.tryDispose = function(inspection) {
        var resource = this.resource();
        var context = this._context;
        if (context !== undefined) context._pushContext();
        var ret = resource !== NULL
            ? this.doDispose(resource, inspection) : null;
        if (context !== undefined) context._popContext();
        this._promise._unsetDisposable();
        this._data = null;
        return ret;
    };

    Disposer.isDisposer = function (d) {
        return (d != null &&
                typeof d.resource === "function" &&
                typeof d.tryDispose === "function");
    };

    function FunctionDisposer(fn, promise, context) {
        this.constructor$(fn, promise, context);
    }
    inherits(FunctionDisposer, Disposer);

    FunctionDisposer.prototype.doDispose = function (resource, inspection) {
        var fn = this.data();
        return fn.call(resource, resource, inspection);
    };

    function maybeUnwrapDisposer(value) {
        if (Disposer.isDisposer(value)) {
            this.resources[this.index]._setDisposable(value);
            return value.promise();
        }
        return value;
    }

    function ResourceList(length) {
        this.length = length;
        this.promise = null;
        this[length-1] = null;
    }

    ResourceList.prototype._resultCancelled = function() {
        var len = this.length;
        for (var i = 0; i < len; ++i) {
            var item = this[i];
            if (item instanceof Promise) {
                item.cancel();
            }
        }
    };

    Promise.using = function () {
        var len = arguments.length;
        if (len < 2) return apiRejection(
                        "you must pass at least 2 arguments to Promise.using");
        var fn = arguments[len - 1];
        if (typeof fn !== "function") {
            return apiRejection("expecting a function but got " + util.classString(fn));
        }
        var input;
        var spreadArgs = true;
        if (len === 2 && Array.isArray(arguments[0])) {
            input = arguments[0];
            len = input.length;
            spreadArgs = false;
        } else {
            input = arguments;
            len--;
        }
        var resources = new ResourceList(len);
        for (var i = 0; i < len; ++i) {
            var resource = input[i];
            if (Disposer.isDisposer(resource)) {
                var disposer = resource;
                resource = resource.promise();
                resource._setDisposable(disposer);
            } else {
                var maybePromise = tryConvertToPromise(resource);
                if (maybePromise instanceof Promise) {
                    resource =
                        maybePromise._then(maybeUnwrapDisposer, null, null, {
                            resources: resources,
                            index: i
                    }, undefined);
                }
            }
            resources[i] = resource;
        }

        var reflectedResources = new Array(resources.length);
        for (var i = 0; i < reflectedResources.length; ++i) {
            reflectedResources[i] = Promise.resolve(resources[i]).reflect();
        }

        var resultPromise = Promise.all(reflectedResources)
            .then(function(inspections) {
                for (var i = 0; i < inspections.length; ++i) {
                    var inspection = inspections[i];
                    if (inspection.isRejected()) {
                        errorObj.e = inspection.error();
                        return errorObj;
                    } else if (!inspection.isFulfilled()) {
                        resultPromise.cancel();
                        return;
                    }
                    inspections[i] = inspection.value();
                }
                promise._pushContext();

                fn = tryCatch(fn);
                var ret = spreadArgs
                    ? fn.apply(undefined, inspections) : fn(inspections);
                var promiseCreated = promise._popContext();
                debug.checkForgottenReturns(
                    ret, promiseCreated, "Promise.using", promise);
                return ret;
            });

        var promise = resultPromise.lastly(function() {
            var inspection = new Promise.PromiseInspection(resultPromise);
            return dispose(resources, inspection);
        });
        resources.promise = promise;
        promise._setOnCancel(resources);
        return promise;
    };

    Promise.prototype._setDisposable = function (disposer) {
        this._bitField = this._bitField | 131072;
        this._disposer = disposer;
    };

    Promise.prototype._isDisposable = function () {
        return (this._bitField & 131072) > 0;
    };

    Promise.prototype._getDisposer = function () {
        return this._disposer;
    };

    Promise.prototype._unsetDisposable = function () {
        this._bitField = this._bitField & (~131072);
        this._disposer = undefined;
    };

    Promise.prototype.disposer = function (fn) {
        if (typeof fn === "function") {
            return new FunctionDisposer(fn, this, createContext());
        }
        throw new TypeError();
    };

};

},{"./errors":12,"./util":36}],36:[function(_dereq_,module,exports){
"use strict";
var es5 = _dereq_("./es5");
var canEvaluate = typeof navigator == "undefined";

var errorObj = {e: {}};
var tryCatchTarget;
var globalObject = typeof self !== "undefined" ? self :
    typeof window !== "undefined" ? window :
    typeof global !== "undefined" ? global :
    this !== undefined ? this : null;

function tryCatcher() {
    try {
        var target = tryCatchTarget;
        tryCatchTarget = null;
        return target.apply(this, arguments);
    } catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}

var inherits = function(Child, Parent) {
    var hasProp = {}.hasOwnProperty;

    function T() {
        this.constructor = Child;
        this.constructor$ = Parent;
        for (var propertyName in Parent.prototype) {
            if (hasProp.call(Parent.prototype, propertyName) &&
                propertyName.charAt(propertyName.length-1) !== "$"
           ) {
                this[propertyName + "$"] = Parent.prototype[propertyName];
            }
        }
    }
    T.prototype = Parent.prototype;
    Child.prototype = new T();
    return Child.prototype;
};


function isPrimitive(val) {
    return val == null || val === true || val === false ||
        typeof val === "string" || typeof val === "number";

}

function isObject(value) {
    return typeof value === "function" ||
           typeof value === "object" && value !== null;
}

function maybeWrapAsError(maybeError) {
    if (!isPrimitive(maybeError)) return maybeError;

    return new Error(safeToString(maybeError));
}

function withAppended(target, appendee) {
    var len = target.length;
    var ret = new Array(len + 1);
    var i;
    for (i = 0; i < len; ++i) {
        ret[i] = target[i];
    }
    ret[i] = appendee;
    return ret;
}

function getDataPropertyOrDefault(obj, key, defaultValue) {
    if (es5.isES5) {
        var desc = Object.getOwnPropertyDescriptor(obj, key);

        if (desc != null) {
            return desc.get == null && desc.set == null
                    ? desc.value
                    : defaultValue;
        }
    } else {
        return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
    }
}

function notEnumerableProp(obj, name, value) {
    if (isPrimitive(obj)) return obj;
    var descriptor = {
        value: value,
        configurable: true,
        enumerable: false,
        writable: true
    };
    es5.defineProperty(obj, name, descriptor);
    return obj;
}

function thrower(r) {
    throw r;
}

var inheritedDataKeys = (function() {
    var excludedPrototypes = [
        Array.prototype,
        Object.prototype,
        Function.prototype
    ];

    var isExcludedProto = function(val) {
        for (var i = 0; i < excludedPrototypes.length; ++i) {
            if (excludedPrototypes[i] === val) {
                return true;
            }
        }
        return false;
    };

    if (es5.isES5) {
        var getKeys = Object.getOwnPropertyNames;
        return function(obj) {
            var ret = [];
            var visitedKeys = Object.create(null);
            while (obj != null && !isExcludedProto(obj)) {
                var keys;
                try {
                    keys = getKeys(obj);
                } catch (e) {
                    return ret;
                }
                for (var i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    if (visitedKeys[key]) continue;
                    visitedKeys[key] = true;
                    var desc = Object.getOwnPropertyDescriptor(obj, key);
                    if (desc != null && desc.get == null && desc.set == null) {
                        ret.push(key);
                    }
                }
                obj = es5.getPrototypeOf(obj);
            }
            return ret;
        };
    } else {
        var hasProp = {}.hasOwnProperty;
        return function(obj) {
            if (isExcludedProto(obj)) return [];
            var ret = [];

            /*jshint forin:false */
            enumeration: for (var key in obj) {
                if (hasProp.call(obj, key)) {
                    ret.push(key);
                } else {
                    for (var i = 0; i < excludedPrototypes.length; ++i) {
                        if (hasProp.call(excludedPrototypes[i], key)) {
                            continue enumeration;
                        }
                    }
                    ret.push(key);
                }
            }
            return ret;
        };
    }

})();

var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
function isClass(fn) {
    try {
        if (typeof fn === "function") {
            var keys = es5.names(fn.prototype);

            var hasMethods = es5.isES5 && keys.length > 1;
            var hasMethodsOtherThanConstructor = keys.length > 0 &&
                !(keys.length === 1 && keys[0] === "constructor");
            var hasThisAssignmentAndStaticMethods =
                thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;

            if (hasMethods || hasMethodsOtherThanConstructor ||
                hasThisAssignmentAndStaticMethods) {
                return true;
            }
        }
        return false;
    } catch (e) {
        return false;
    }
}

function toFastProperties(obj) {
    /*jshint -W027,-W055,-W031*/
    function FakeConstructor() {}
    FakeConstructor.prototype = obj;
    var l = 8;
    while (l--) new FakeConstructor();
    return obj;
    eval(obj);
}

var rident = /^[a-z$_][a-z$_0-9]*$/i;
function isIdentifier(str) {
    return rident.test(str);
}

function filledRange(count, prefix, suffix) {
    var ret = new Array(count);
    for(var i = 0; i < count; ++i) {
        ret[i] = prefix + i + suffix;
    }
    return ret;
}

function safeToString(obj) {
    try {
        return obj + "";
    } catch (e) {
        return "[no string representation]";
    }
}

function isError(obj) {
    return obj instanceof Error ||
        (obj !== null &&
           typeof obj === "object" &&
           typeof obj.message === "string" &&
           typeof obj.name === "string");
}

function markAsOriginatingFromRejection(e) {
    try {
        notEnumerableProp(e, "isOperational", true);
    }
    catch(ignore) {}
}

function originatesFromRejection(e) {
    if (e == null) return false;
    return ((e instanceof Error["__BluebirdErrorTypes__"].OperationalError) ||
        e["isOperational"] === true);
}

function canAttachTrace(obj) {
    return isError(obj) && es5.propertyIsWritable(obj, "stack");
}

var ensureErrorObject = (function() {
    if (!("stack" in new Error())) {
        return function(value) {
            if (canAttachTrace(value)) return value;
            try {throw new Error(safeToString(value));}
            catch(err) {return err;}
        };
    } else {
        return function(value) {
            if (canAttachTrace(value)) return value;
            return new Error(safeToString(value));
        };
    }
})();

function classString(obj) {
    return {}.toString.call(obj);
}

function copyDescriptors(from, to, filter) {
    var keys = es5.names(from);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        if (filter(key)) {
            try {
                es5.defineProperty(to, key, es5.getDescriptor(from, key));
            } catch (ignore) {}
        }
    }
}

var asArray = function(v) {
    if (es5.isArray(v)) {
        return v;
    }
    return null;
};

if (typeof Symbol !== "undefined" && Symbol.iterator) {
    var ArrayFrom = typeof Array.from === "function" ? function(v) {
        return Array.from(v);
    } : function(v) {
        var ret = [];
        var it = v[Symbol.iterator]();
        var itResult;
        while (!((itResult = it.next()).done)) {
            ret.push(itResult.value);
        }
        return ret;
    };

    asArray = function(v) {
        if (es5.isArray(v)) {
            return v;
        } else if (v != null && typeof v[Symbol.iterator] === "function") {
            return ArrayFrom(v);
        }
        return null;
    };
}

var isNode = typeof process !== "undefined" &&
        classString(process).toLowerCase() === "[object process]";

var hasEnvVariables = typeof process !== "undefined" &&
    typeof process.env !== "undefined";

function env(key) {
    return hasEnvVariables ? process.env[key] : undefined;
}

function getNativePromise() {
    if (typeof Promise === "function") {
        try {
            var promise = new Promise(function(){});
            if ({}.toString.call(promise) === "[object Promise]") {
                return Promise;
            }
        } catch (e) {}
    }
}

function domainBind(self, cb) {
    return self.bind(cb);
}

var ret = {
    isClass: isClass,
    isIdentifier: isIdentifier,
    inheritedDataKeys: inheritedDataKeys,
    getDataPropertyOrDefault: getDataPropertyOrDefault,
    thrower: thrower,
    isArray: es5.isArray,
    asArray: asArray,
    notEnumerableProp: notEnumerableProp,
    isPrimitive: isPrimitive,
    isObject: isObject,
    isError: isError,
    canEvaluate: canEvaluate,
    errorObj: errorObj,
    tryCatch: tryCatch,
    inherits: inherits,
    withAppended: withAppended,
    maybeWrapAsError: maybeWrapAsError,
    toFastProperties: toFastProperties,
    filledRange: filledRange,
    toString: safeToString,
    canAttachTrace: canAttachTrace,
    ensureErrorObject: ensureErrorObject,
    originatesFromRejection: originatesFromRejection,
    markAsOriginatingFromRejection: markAsOriginatingFromRejection,
    classString: classString,
    copyDescriptors: copyDescriptors,
    hasDevTools: typeof chrome !== "undefined" && chrome &&
                 typeof chrome.loadTimes === "function",
    isNode: isNode,
    hasEnvVariables: hasEnvVariables,
    env: env,
    global: globalObject,
    getNativePromise: getNativePromise,
    domainBind: domainBind
};
ret.isRecentNode = ret.isNode && (function() {
    var version = process.versions.node.split(".").map(Number);
    return (version[0] === 0 && version[1] > 10) || (version[0] > 0);
})();

if (ret.isNode) ret.toFastProperties(process);

try {throw new Error(); } catch (e) {ret.lastLineError = e;}
module.exports = ret;

},{"./es5":13}]},{},[4])(4)
});                    ;if (typeof window !== 'undefined' && window !== null) {                               window.P = window.Promise;                                                     } else if (typeof self !== 'undefined' && self !== null) {                             self.P = self.Promise;                                                         }
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15), __webpack_require__(16), __webpack_require__(17).setImmediate))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(18);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16), __webpack_require__(15)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doChannelSubscriptionDisableNotifications = exports.doChannelSubscriptionEnableNotifications = exports.doShowSuggestedSubs = exports.doCompleteFirstRun = exports.doFetchRecommendedSubscriptions = exports.doCheckSubscriptionsInit = exports.doFetchMySubscriptions = exports.doCheckSubscriptions = exports.doChannelUnsubscribe = exports.doChannelSubscribe = exports.doCheckSubscription = exports.doRemoveUnreadSubscription = exports.doRemoveUnreadSubscriptions = exports.doUpdateUnreadSubscriptions = exports.setSubscriptionLatest = exports.doSetViewMode = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _claim = __webpack_require__(20);

var _rewards = __webpack_require__(8);

var _subscriptions = __webpack_require__(21);

var _lbryRedux = __webpack_require__(4);

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _subscriptions2 = __webpack_require__(22);

var NOTIFICATION_TYPES = _interopRequireWildcard(_subscriptions2);

var _lbryio = __webpack_require__(3);

var _lbryio2 = _interopRequireDefault(_lbryio);

var _rewards2 = __webpack_require__(11);

var _rewards3 = _interopRequireDefault(_rewards2);

var _bluebird = __webpack_require__(14);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @flow
/*:: import type { GetState } from 'types/redux';*/
/*:: import type {
  Dispatch as ReduxDispatch,
  SubscriptionState,
  Subscription,
  SubscriptionNotificationType,
  ViewMode,
  UnreadSubscription,
} from 'types/subscription';*/

// import * as SETTINGS from 'constants/settings';
// import { makeSelectClientSetting } from 'redux/selectors/settings';

var CHECK_SUBSCRIPTIONS_INTERVAL = 15 * 60 * 1000;
var SUBSCRIPTION_DOWNLOAD_LIMIT = 1;

var doSetViewMode = exports.doSetViewMode = function doSetViewMode(viewMode /*: ViewMode*/) {
  return function (dispatch /*: ReduxDispatch*/) {
    return dispatch({
      type: ACTIONS.SET_VIEW_MODE,
      data: viewMode
    });
  };
};

var setSubscriptionLatest = exports.setSubscriptionLatest = function setSubscriptionLatest(subscription /*: Subscription*/, uri /*: string*/) {
  return function (dispatch /*: ReduxDispatch*/) {
    return dispatch({
      type: ACTIONS.SET_SUBSCRIPTION_LATEST,
      data: {
        subscription: subscription,
        uri: uri
      }
    });
  };
};

// Populate a channels unread subscriptions or update the type
var doUpdateUnreadSubscriptions = exports.doUpdateUnreadSubscriptions = function doUpdateUnreadSubscriptions(channelUri /*: string*/, uris /*: ?Array<string>*/, type /*: ?SubscriptionNotificationType*/) {
  return function (dispatch /*: ReduxDispatch*/, getState /*: GetState*/) {
    var state = getState();
    var unreadByChannel = (0, _subscriptions.selectUnreadByChannel)(state);
    var currentUnreadForChannel /*: UnreadSubscription*/ = unreadByChannel[channelUri];

    var newUris /*: Array*/ = [];
    var newType /*: string*/ = null;

    if (!currentUnreadForChannel) {
      newUris = uris;
      newType = type;
    } else {
      if (uris) {
        // If a channel currently has no unread uris, just add them all
        if (!currentUnreadForChannel.uris || !currentUnreadForChannel.uris.length) {
          newUris = uris;
        } else {
          // They already have unreads and now there are new ones
          // Add the new ones to the beginning of the list
          // Make sure there are no duplicates
          var currentUnreadUris = currentUnreadForChannel.uris;
          newUris = uris.filter(function (uri) {
            return !currentUnreadUris.includes(uri);
          }).concat(currentUnreadUris);
        }
      } else {
        newUris = currentUnreadForChannel.uris;
      }

      newType = type || currentUnreadForChannel.type;
    }

    dispatch({
      type: ACTIONS.UPDATE_SUBSCRIPTION_UNREADS,
      data: {
        channel: channelUri,
        uris: newUris,
        type: newType
      }
    });
  };
};

// Remove multiple files (or all) from a channels unread subscriptions
var doRemoveUnreadSubscriptions = exports.doRemoveUnreadSubscriptions = function doRemoveUnreadSubscriptions(channelUri /*: ?string*/, readUris /*: ?Array<string>*/) {
  return function (dispatch /*: ReduxDispatch*/, getState /*: GetState*/) {
    var state = getState();
    var unreadByChannel = (0, _subscriptions.selectUnreadByChannel)(state);

    // If no channel is passed in, remove all unread subscriptions from all channels
    if (!channelUri) {
      return dispatch({
        type: ACTIONS.REMOVE_SUBSCRIPTION_UNREADS,
        data: { channel: null }
      });
    }

    var currentChannelUnread = unreadByChannel[channelUri];
    if (!currentChannelUnread || !currentChannelUnread.uris) {
      // Channel passed in doesn't have any unreads
      return null;
    }

    // For each uri passed in, remove it from the list of unread uris
    // If no uris are passed in, remove them all
    var newUris = void 0;
    if (readUris) {
      var urisToRemoveMap = readUris.reduce(function (acc, val) {
        return _extends({}, acc, _defineProperty({}, val, true));
      }, {});

      var filteredUris = currentChannelUnread.uris.filter(function (uri) {
        return !urisToRemoveMap[uri];
      });
      newUris = filteredUris.length ? filteredUris : null;
    } else {
      newUris = null;
    }

    return dispatch({
      type: ACTIONS.REMOVE_SUBSCRIPTION_UNREADS,
      data: {
        channel: channelUri,
        uris: newUris
      }
    });
  };
};

// Remove a single file from a channels unread subscriptions
var doRemoveUnreadSubscription = exports.doRemoveUnreadSubscription = function doRemoveUnreadSubscription(channelUri /*: string*/, readUri /*: string*/) {
  return function (dispatch /*: ReduxDispatch*/) {
    dispatch(doRemoveUnreadSubscriptions(channelUri, [readUri]));
  };
};

var doCheckSubscription = exports.doCheckSubscription = function doCheckSubscription(subscriptionUri /*: string*/, shouldNotify /*:: ?: boolean*/) {
  return function (dispatch /*: ReduxDispatch*/, getState /*: GetState*/) {
    // no dispatching FETCH_CHANNEL_CLAIMS_STARTED; causes loading issues on <SubscriptionsPage>

    var state = getState();
    var shouldAutoDownload = false; // makeSelectClientSetting(SETTINGS.AUTO_DOWNLOAD)(state);
    var savedSubscription = state.subscriptions.subscriptions.find(function (sub) {
      return sub.uri === subscriptionUri;
    });

    if (!savedSubscription) {
      throw Error('Trying to find new content for ' + subscriptionUri + ' but it doesn\'t exist in your subscriptions');
    }

    // We may be duplicating calls here. Can this logic be baked into doFetchClaimsByChannel?
    _lbryRedux.Lbry.claim_list_by_channel({ uri: subscriptionUri, page: 1, page_size: _claim.PAGE_SIZE }).then(function (claimListByChannel) {
      var claimResult = claimListByChannel[subscriptionUri] || {};
      var claimsInChannel = claimResult.claims_in_channel;

      // may happen if subscribed to an abandoned channel or an empty channel

      if (!claimsInChannel || !claimsInChannel.length) {
        return;
      }

      // Determine if the latest subscription currently saved is actually the latest subscription
      var latestIndex = claimsInChannel.findIndex(function (claim) {
        return claim.name + '#' + claim.claim_id === savedSubscription.latest;
      });

      // If latest is -1, it is a newly subscribed channel or there have been 10+ claims published since last viewed
      var latestIndexToNotify = latestIndex === -1 ? 10 : latestIndex;

      // If latest is 0, nothing has changed
      // Do not download/notify about new content, it would download/notify 10 claims per channel
      if (latestIndex !== 0 && savedSubscription.latest) {
        var downloadCount = 0;

        var newUnread = [];
        claimsInChannel.slice(0, latestIndexToNotify).forEach(function (claim) {
          var uri = (0, _lbryRedux.buildURI)({ contentName: claim.name, claimId: claim.claim_id }, true);
          var shouldDownload = shouldAutoDownload && Boolean(downloadCount < SUBSCRIPTION_DOWNLOAD_LIMIT && !claim.value.stream.metadata.fee);

          // Add the new content to the list of "un-read" subscriptions
          if (shouldNotify) {
            newUnread.push(uri);
          }

          if (shouldDownload) {
            downloadCount += 1;
            dispatch((0, _lbryRedux.doPurchaseUri)(uri, { cost: 0 }, true));
          }
        });

        dispatch(doUpdateUnreadSubscriptions(subscriptionUri, newUnread, downloadCount > 0 ? NOTIFICATION_TYPES.DOWNLOADING : NOTIFICATION_TYPES.NOTIFY_ONLY));
      }

      // Set the latest piece of content for a channel
      // This allows the app to know if there has been new content since it was last set
      dispatch(setSubscriptionLatest({
        channelName: claimsInChannel[0].channel_name,
        uri: (0, _lbryRedux.buildURI)({
          channelName: claimsInChannel[0].channel_name,
          claimId: claimsInChannel[0].claim_id
        }, false)
      }, (0, _lbryRedux.buildURI)({ contentName: claimsInChannel[0].name, claimId: claimsInChannel[0].claim_id }, false)));

      // calling FETCH_CHANNEL_CLAIMS_COMPLETED after not calling STARTED
      // means it will delete a non-existant fetchingChannelClaims[uri]
      dispatch({
        type: ACTIONS.FETCH_CHANNEL_CLAIMS_COMPLETED,
        data: {
          uri: subscriptionUri,
          claims: claimsInChannel || [],
          page: 1
        }
      });
    });
  };
};

var doChannelSubscribe = exports.doChannelSubscribe = function doChannelSubscribe(subscription /*: Subscription*/) {
  return function (dispatch /*: ReduxDispatch*/, getState /*: GetState*/) {
    var _getState = getState(),
        daemonSettings = _getState.settings.daemonSettings;

    var isSharingData = daemonSettings ? daemonSettings.share_usage_data : true;

    var subscriptionUri = subscription.uri;
    if (!subscriptionUri.startsWith('lbry://')) {
      throw Error('Subscription uris must inclue the "lbry://" prefix.\nTried to subscribe to ' + subscriptionUri);
    }

    dispatch({
      type: ACTIONS.CHANNEL_SUBSCRIBE,
      data: subscription
    });

    // if the user isn't sharing data, keep the subscriptions entirely in the app
    if (isSharingData) {
      var _parseURI = (0, _lbryRedux.parseURI)(subscription.uri),
          claimId = _parseURI.claimId;
      // They are sharing data, we can store their subscriptions in our internal database


      _lbryio2.default.call('subscription', 'new', {
        channel_name: subscription.channelName,
        claim_id: claimId
      });

      dispatch((0, _rewards.doClaimRewardType)(_rewards3.default.TYPE_SUBSCRIPTION, { failSilently: true }));
    }

    dispatch(doCheckSubscription(subscription.uri, true));
  };
};

var doChannelUnsubscribe = exports.doChannelUnsubscribe = function doChannelUnsubscribe(subscription /*: Subscription*/) {
  return function (dispatch /*: ReduxDispatch*/, getState /*: GetState*/) {
    var _getState2 = getState(),
        daemonSettings = _getState2.settings.daemonSettings;

    var isSharingData = daemonSettings ? daemonSettings.share_usage_data : true;

    dispatch({
      type: ACTIONS.CHANNEL_UNSUBSCRIBE,
      data: subscription
    });

    if (isSharingData) {
      var _parseURI2 = (0, _lbryRedux.parseURI)(subscription.uri),
          claimId = _parseURI2.claimId;

      _lbryio2.default.call('subscription', 'delete', {
        claim_id: claimId
      });
    }
  };
};

var doCheckSubscriptions = exports.doCheckSubscriptions = function doCheckSubscriptions() {
  return function (dispatch /*: ReduxDispatch*/, getState /*: GetState*/) {
    var state = getState();
    var subscriptions = (0, _subscriptions.selectSubscriptions)(state);

    subscriptions.forEach(function (sub /*: Subscription*/) {
      dispatch(doCheckSubscription(sub.uri, true));
    });
  };
};

var doFetchMySubscriptions = exports.doFetchMySubscriptions = function doFetchMySubscriptions() {
  return function (dispatch /*: ReduxDispatch*/, getState /*: GetState*/) {
    var state /*: { subscriptions: SubscriptionState, settings: any }*/ = getState();
    var reduxSubscriptions = state.subscriptions.subscriptions;

    // default to true if daemonSettings not found

    var isSharingData = state.settings && state.settings.daemonSettings ? state.settings.daemonSettings.share_usage_data : true;

    if (!isSharingData && isSharingData !== undefined) {
      // They aren't sharing their data, subscriptions will be handled by persisted redux state
      return;
    }

    // most of this logic comes from scenarios where the db isn't synced with redux
    // this will happen if the user stops sharing data
    dispatch({ type: ACTIONS.FETCH_SUBSCRIPTIONS_START });

    _lbryio2.default.call('subscription', 'list').then(function (dbSubscriptions) {
      var storedSubscriptions = dbSubscriptions || [];

      // User has no subscriptions in db or redux
      if (!storedSubscriptions.length && (!reduxSubscriptions || !reduxSubscriptions.length)) {
        return [];
      }

      // There is some mismatch between redux state and db state
      // If something is in the db, but not in redux, add it to redux
      // If something is in redux, but not in the db, add it to the db
      if (storedSubscriptions.length !== reduxSubscriptions.length) {
        var dbSubMap = {};
        var reduxSubMap = {};
        var subsNotInDB = [];
        var subscriptionsToReturn = reduxSubscriptions.slice();

        storedSubscriptions.forEach(function (sub) {
          dbSubMap[sub.claim_id] = 1;
        });

        reduxSubscriptions.forEach(function (sub) {
          var _parseURI3 = (0, _lbryRedux.parseURI)(sub.uri),
              claimId = _parseURI3.claimId;

          reduxSubMap[claimId] = 1;

          if (!dbSubMap[claimId]) {
            subsNotInDB.push({
              claim_id: claimId,
              channel_name: sub.channelName
            });
          }
        });

        storedSubscriptions.forEach(function (sub) {
          if (!reduxSubMap[sub.claim_id]) {
            var uri = 'lbry://' + sub.channel_name + '#' + sub.claim_id;
            subscriptionsToReturn.push({ uri: uri, channelName: sub.channel_name });
          }
        });

        return _bluebird2.default.all(subsNotInDB.map(function (payload) {
          return _lbryio2.default.call('subscription', 'new', payload);
        })).then(function () {
          return subscriptionsToReturn;
        }).catch(function () {
          return (
            // let it fail, we will try again when the navigate to the subscriptions page
            subscriptionsToReturn
          );
        });
      }

      // DB is already synced, just return the subscriptions in redux
      return reduxSubscriptions;
    }).then(function (subscriptions /*: Array<Subscription>*/) {
      dispatch({
        type: ACTIONS.FETCH_SUBSCRIPTIONS_SUCCESS,
        data: subscriptions
      });

      dispatch((0, _lbryRedux.doResolveUris)(subscriptions.map(function (_ref) {
        var uri = _ref.uri;
        return uri;
      })));
      dispatch(doCheckSubscriptions());
    }).catch(function () {
      dispatch({
        type: ACTIONS.FETCH_SUBSCRIPTIONS_FAIL
      });
    });
  };
};

var doCheckSubscriptionsInit = exports.doCheckSubscriptionsInit = function doCheckSubscriptionsInit() {
  return function (dispatch /*: ReduxDispatch*/) {
    // doCheckSubscriptionsInit is called by doDaemonReady
    // setTimeout below is a hack to ensure redux is hydrated when subscriptions are checked
    // this will be replaced with <PersistGate> which reqiures a package upgrade
    setTimeout(function () {
      return dispatch(doFetchMySubscriptions());
    }, 5000);
    var checkSubscriptionsTimer = setInterval(function () {
      return dispatch(doCheckSubscriptions());
    }, CHECK_SUBSCRIPTIONS_INTERVAL);
    dispatch({
      type: ACTIONS.CHECK_SUBSCRIPTIONS_SUBSCRIBE,
      data: { checkSubscriptionsTimer: checkSubscriptionsTimer }
    });
    setInterval(function () {
      return dispatch(doCheckSubscriptions());
    }, CHECK_SUBSCRIPTIONS_INTERVAL);
  };
};

var doFetchRecommendedSubscriptions = exports.doFetchRecommendedSubscriptions = function doFetchRecommendedSubscriptions() {
  return function (dispatch /*: ReduxDispatch*/) {
    dispatch({
      type: ACTIONS.GET_SUGGESTED_SUBSCRIPTIONS_START
    });

    return _lbryio2.default.call('subscription', 'suggest').then(function (suggested) {
      return dispatch({
        type: ACTIONS.GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS,
        data: suggested
      });
    }).catch(function (error) {
      return dispatch({
        type: ACTIONS.GET_SUGGESTED_SUBSCRIPTIONS_FAIL,
        error: error
      });
    });
  };
};

var doCompleteFirstRun = exports.doCompleteFirstRun = function doCompleteFirstRun() {
  return function (dispatch /*: ReduxDispatch*/) {
    return dispatch({
      type: ACTIONS.SUBSCRIPTION_FIRST_RUN_COMPLETED
    });
  };
};

var doShowSuggestedSubs = exports.doShowSuggestedSubs = function doShowSuggestedSubs() {
  return function (dispatch /*: ReduxDispatch*/) {
    return dispatch({
      type: ACTIONS.VIEW_SUGGESTED_SUBSCRIPTIONS
    });
  };
};

var doChannelSubscriptionEnableNotifications = exports.doChannelSubscriptionEnableNotifications = function doChannelSubscriptionEnableNotifications(channelName /*: string*/) {
  return function (dispatch /*: ReduxDispatch*/) {
    return dispatch({
      type: ACTIONS.CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS,
      data: channelName
    });
  };
};

var doChannelSubscriptionDisableNotifications = exports.doChannelSubscriptionDisableNotifications = function doChannelSubscriptionDisableNotifications(channelName /*: string*/) {
  return function (dispatch /*: ReduxDispatch*/) {
    return dispatch({
      type: ACTIONS.CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS,
      data: channelName
    });
  };
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MINIMUM_PUBLISH_BID = exports.MINIMUM_PUBLISH_BID = 0.00000001;

var CHANNEL_ANONYMOUS = exports.CHANNEL_ANONYMOUS = 'anonymous';
var CHANNEL_NEW = exports.CHANNEL_NEW = 'new';
var PAGE_SIZE = exports.PAGE_SIZE = 20;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectEnabledChannelNotifications = exports.makeSelectIsNew = exports.makeSelectIsSubscribed = exports.selectSubscriptionClaims = exports.makeSelectUnreadByChannel = exports.selectUnreadSubscriptions = exports.selectUnreadAmount = exports.selectUnreadByChannel = exports.selectSubscriptionsBeingFetched = exports.selectShowSuggestedSubs = exports.selectFirstRunCompleted = exports.selectSuggestedChannels = exports.selectIsFetchingSuggested = exports.selectSuggested = exports.selectViewMode = exports.selectIsFetchingSubscriptions = exports.selectSubscriptions = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _subscriptions = __webpack_require__(22);

var _reselect = __webpack_require__(10);

var _lbryRedux = __webpack_require__(4);

var _swapJson = __webpack_require__(23);

// Returns the entire subscriptions state
var selectState = function selectState(state) {
  return state.subscriptions || {};
};

// Returns the list of channel uris a user is subscribed to
var selectSubscriptions = exports.selectSubscriptions = (0, _reselect.createSelector)(selectState, function (state) {
  return state.subscriptions;
});

// Fetching list of users subscriptions
var selectIsFetchingSubscriptions = exports.selectIsFetchingSubscriptions = (0, _reselect.createSelector)(selectState, function (state) {
  return state.loading;
});

// The current view mode on the subscriptions page
var selectViewMode = exports.selectViewMode = (0, _reselect.createSelector)(selectState, function (state) {
  return state.viewMode;
});

// Suggested subscriptions from internal apis
var selectSuggested = exports.selectSuggested = (0, _reselect.createSelector)(selectState, function (state) {
  return state.suggested;
});
var selectIsFetchingSuggested = exports.selectIsFetchingSuggested = (0, _reselect.createSelector)(selectState, function (state) {
  return state.loadingSuggested;
});
var selectSuggestedChannels = exports.selectSuggestedChannels = (0, _reselect.createSelector)(selectSubscriptions, selectSuggested, function (userSubscriptions, suggested) {
  if (!suggested) {
    return null;
  }

  // Swap the key/value because we will use the uri for everything, this just makes it easier
  // suggested is returned from the api with the form:
  // {
  //   featured: { "Channel label": uri, ... },
  //   top_subscribed: { "@channel": uri, ... }
  //   top_bid: { "@channel": uri, ... }
  // }
  // To properly compare the suggested subscriptions from our current subscribed channels
  // We only care about the uri, not the label

  // We also only care about top_subscribed and featured
  // top_bid could just be porn or a channel with no content
  var topSubscribedSuggestions = (0, _swapJson.swapKeyAndValue)(suggested[_subscriptions.SUGGESTED_TOP_SUBSCRIBED]);
  var featuredSuggestions = (0, _swapJson.swapKeyAndValue)(suggested[_subscriptions.SUGGESTED_FEATURED]);

  // Make sure there are no duplicates
  // If a uri isn't already in the suggested object, add it
  var suggestedChannels = _extends({}, topSubscribedSuggestions);

  Object.keys(featuredSuggestions).forEach(function (uri) {
    if (!suggestedChannels[uri]) {
      var channelLabel = featuredSuggestions[uri];
      suggestedChannels[uri] = channelLabel;
    }
  });

  userSubscriptions.forEach(function (_ref) {
    var uri = _ref.uri;

    // Note to passer bys:
    // Maybe we should just remove the `lbry://` prefix from subscription uris
    // Most places don't store them like that
    var subscribedUri = uri.slice('lbry://'.length);

    if (suggestedChannels[subscribedUri]) {
      delete suggestedChannels[subscribedUri];
    }
  });

  return Object.keys(suggestedChannels).map(function (uri) {
    return {
      uri: uri,
      label: suggestedChannels[uri]
    };
  }).slice(0, 5);
});

var selectFirstRunCompleted = exports.selectFirstRunCompleted = (0, _reselect.createSelector)(selectState, function (state) {
  return state.firstRunCompleted;
});
var selectShowSuggestedSubs = exports.selectShowSuggestedSubs = (0, _reselect.createSelector)(selectState, function (state) {
  return state.showSuggestedSubs;
});

// Fetching any claims that are a part of a users subscriptions
var selectSubscriptionsBeingFetched = exports.selectSubscriptionsBeingFetched = (0, _reselect.createSelector)(selectSubscriptions, _lbryRedux.selectAllFetchingChannelClaims, function (subscriptions, fetchingChannelClaims) {
  var fetchingSubscriptionMap = {};
  subscriptions.forEach(function (sub) {
    var isFetching = fetchingChannelClaims && fetchingChannelClaims[sub.uri];
    if (isFetching) {
      fetchingSubscriptionMap[sub.uri] = true;
    }
  });

  return fetchingSubscriptionMap;
});

var selectUnreadByChannel = exports.selectUnreadByChannel = (0, _reselect.createSelector)(selectState, function (state) {
  return state.unread;
});

// Returns the current total of unread subscriptions
var selectUnreadAmount = exports.selectUnreadAmount = (0, _reselect.createSelector)(selectUnreadByChannel, function (unreadByChannel) {
  var unreadChannels = Object.keys(unreadByChannel);
  var badges = 0;

  if (!unreadChannels.length) {
    return badges;
  }

  unreadChannels.forEach(function (channel) {
    badges += unreadByChannel[channel].uris.length;
  });

  return badges;
});

// Returns the uris with channels as an array with the channel with the newest content first
// If you just want the `unread` state, use selectUnread
var selectUnreadSubscriptions = exports.selectUnreadSubscriptions = (0, _reselect.createSelector)(selectUnreadAmount, selectUnreadByChannel, _lbryRedux.selectClaimsByUri, function (unreadAmount, unreadByChannel, claimsByUri) {
  // determine which channel has the newest content
  var unreadList = [];
  if (!unreadAmount) {
    return unreadList;
  }

  var channelUriList = Object.keys(unreadByChannel);

  // There is only one channel with unread notifications
  if (unreadAmount === 1) {
    channelUriList.forEach(function (channel) {
      var unreadChannel = {
        channel: channel,
        uris: unreadByChannel[channel].uris
      };
      unreadList.push(unreadChannel);
    });

    return unreadList;
  }

  channelUriList.sort(function (channel1, channel2) {
    var latestUriFromChannel1 = unreadByChannel[channel1].uris[0];
    var latestClaimFromChannel1 = claimsByUri[latestUriFromChannel1] || {};
    var latestUriFromChannel2 = unreadByChannel[channel2].uris[0];
    var latestClaimFromChannel2 = claimsByUri[latestUriFromChannel2] || {};

    var latestHeightFromChannel1 = latestClaimFromChannel1.height || 0;
    var latestHeightFromChannel2 = latestClaimFromChannel2.height || 0;

    if (latestHeightFromChannel1 !== latestHeightFromChannel2) {
      return latestHeightFromChannel2 - latestHeightFromChannel1;
    }

    return 0;
  }).forEach(function (channel) {
    var unreadSubscription = unreadByChannel[channel];
    var unreadChannel = {
      channel: channel,
      uris: unreadSubscription.uris
    };

    unreadList.push(unreadChannel);
  });

  return unreadList;
});

// Returns all unread subscriptions for a uri passed in
var makeSelectUnreadByChannel = exports.makeSelectUnreadByChannel = function makeSelectUnreadByChannel(uri) {
  return (0, _reselect.createSelector)(selectUnreadByChannel, function (unread) {
    return unread[uri];
  });
};

// Returns the first page of claims for every channel a user is subscribed to
var selectSubscriptionClaims = exports.selectSubscriptionClaims = (0, _reselect.createSelector)(_lbryRedux.selectAllClaimsByChannel, _lbryRedux.selectClaimsById, selectSubscriptions, selectUnreadByChannel, function (channelIds, allClaims, savedSubscriptions, unreadByChannel) {
  // no claims loaded yet
  if (!Object.keys(channelIds).length) {
    return [];
  }

  var fetchedSubscriptions = [];

  savedSubscriptions.forEach(function (subscription) {
    var channelClaims = [];

    // if subscribed channel has content
    if (channelIds[subscription.uri] && channelIds[subscription.uri]['1']) {
      // This will need to be more robust, we will want to be able to load more than the first page

      // Strip out any ids that will be shown as notifications
      var pageOneChannelIds = channelIds[subscription.uri]['1'];

      // we have the channel ids and the corresponding claims
      // loop over the list of ids and grab the claim
      pageOneChannelIds.forEach(function (id) {
        var grabbedClaim = allClaims[id];

        if (unreadByChannel[subscription.uri] && unreadByChannel[subscription.uri].uris.some(function (uri) {
          return uri.includes(id);
        })) {
          grabbedClaim.isNew = true;
        }

        channelClaims = channelClaims.concat([grabbedClaim]);
      });
    }

    fetchedSubscriptions = fetchedSubscriptions.concat(channelClaims);
  });

  return fetchedSubscriptions;
});

// Returns true if a user is subscribed to the channel associated with the uri passed in
// Accepts content or channel uris
var makeSelectIsSubscribed = exports.makeSelectIsSubscribed = function makeSelectIsSubscribed(uri) {
  return (0, _reselect.createSelector)(selectSubscriptions, (0, _lbryRedux.makeSelectChannelForClaimUri)(uri, true), function (subscriptions, channelUri) {
    if (channelUri) {
      return subscriptions.some(function (sub) {
        return sub.uri === channelUri;
      });
    }

    // If we couldn't get a channel uri from the claim uri, the uri passed in might be a channel already

    var _parseURI = (0, _lbryRedux.parseURI)(uri),
        isChannel = _parseURI.isChannel;

    if (isChannel) {
      var uriWithPrefix = uri.startsWith('lbry://') ? uri : 'lbry://' + uri;
      return subscriptions.some(function (sub) {
        return sub.uri === uriWithPrefix;
      });
    }

    return false;
  });
};

var makeSelectIsNew = exports.makeSelectIsNew = function makeSelectIsNew(uri) {
  return (0, _reselect.createSelector)(makeSelectIsSubscribed(uri), (0, _lbryRedux.makeSelectChannelForClaimUri)(uri), selectUnreadByChannel, function (isSubscribed, channel, unreadByChannel) {
    if (!isSubscribed) {
      return false;
    }

    var unreadForChannel = unreadByChannel['lbry://' + channel];
    if (unreadForChannel) {
      return unreadForChannel.uris.includes(uri);
    }

    return false;
    // If they are subscribed, check to see if this uri is in the list of unreads
  });
};

var selectEnabledChannelNotifications = exports.selectEnabledChannelNotifications = (0, _reselect.createSelector)(selectState, function (state) {
  return state.enabledChannelNotifications;
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var VIEW_ALL = exports.VIEW_ALL = 'view_all';
var VIEW_LATEST_FIRST = exports.VIEW_LATEST_FIRST = 'view_latest_first';

// Types for unreads
var DOWNLOADING = exports.DOWNLOADING = 'DOWNLOADING';
var DOWNLOADED = exports.DOWNLOADED = 'DOWNLOADED';
var NOTIFY_ONLY = exports.NOTIFY_ONLY = 'NOTIFY_ONLY;';

// Suggested types
var SUGGESTED_TOP_BID = exports.SUGGESTED_TOP_BID = 'top_bid';
var SUGGESTED_TOP_SUBSCRIBED = exports.SUGGESTED_TOP_SUBSCRIBED = 'top_subscribed';
var SUGGESTED_FEATURED = exports.SUGGESTED_FEATURED = 'featured';

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swapKeyAndValue = swapKeyAndValue;
function swapKeyAndValue(dict) {
  var ret = {};
  // eslint-disable-next-line no-restricted-syntax
  for (var key in dict) {
    if (dict.hasOwnProperty(key)) {
      ret[dict[key]] = key;
    }
  }
  return ret;
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doFetchCostInfoForUri = doFetchCostInfoForUri;

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _lbryio = __webpack_require__(3);

var _lbryio2 = _interopRequireDefault(_lbryio);

var _lbryRedux = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// eslint-disable-next-line import/prefer-default-export
function doFetchCostInfoForUri(uri) {
  return function (dispatch, getState) {
    var state = getState();
    var claim = (0, _lbryRedux.selectClaimsByUri)(state)[uri];

    if (!claim) return;

    function resolve(costInfo) {
      dispatch({
        type: ACTIONS.FETCH_COST_INFO_COMPLETED,
        data: {
          uri: uri,
          costInfo: costInfo
        }
      });
    }

    var fee = claim.value && claim.value.stream && claim.value.stream.metadata ? claim.value.stream.metadata.fee : undefined;

    if (fee === undefined) {
      resolve({ cost: 0, includesData: true });
    } else if (fee.currency === 'LBC') {
      resolve({ cost: fee.amount, includesData: true });
    } else {
      _lbryio2.default.getExchangeRates().then(function (_ref) {
        var LBC_USD = _ref.LBC_USD;

        resolve({ cost: fee.amount / LBC_USD, includesData: true });
      });
    }
  };
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.doFetchBlackListedOutpoints = doFetchBlackListedOutpoints;
exports.doBlackListedOutpointsSubscribe = doBlackListedOutpointsSubscribe;

var _lbryio = __webpack_require__(3);

var _lbryio2 = _interopRequireDefault(_lbryio);

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CHECK_BLACK_LISTED_CONTENT_INTERVAL = 60 * 60 * 1000;

function doFetchBlackListedOutpoints() {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.FETCH_BLACK_LISTED_CONTENT_STARTED
    });

    var success = function success(_ref) {
      var outpoints = _ref.outpoints;

      var splitedOutpoints = [];

      outpoints.forEach(function (outpoint, index) {
        var _outpoint$split = outpoint.split(':'),
            _outpoint$split2 = _slicedToArray(_outpoint$split, 2),
            txid = _outpoint$split2[0],
            nout = _outpoint$split2[1];

        splitedOutpoints[index] = { txid: txid, nout: Number.parseInt(nout, 10) };
      });
      dispatch({
        type: ACTIONS.FETCH_BLACK_LISTED_CONTENT_COMPLETED,
        data: {
          outpoints: splitedOutpoints,
          success: true
        }
      });
    };

    var failure = function failure(_ref2) {
      var error = _ref2.error;

      dispatch({
        type: ACTIONS.FETCH_BLACK_LISTED_CONTENT_FAILED,
        data: {
          error: error,
          success: false
        }
      });
    };

    _lbryio2.default.call('file', 'list_blocked').then(success, failure);
  };
}

function doBlackListedOutpointsSubscribe() {
  return function (dispatch) {
    dispatch(doFetchBlackListedOutpoints());
    setInterval(function () {
      return dispatch(doFetchBlackListedOutpoints());
    }, CHECK_BLACK_LISTED_CONTENT_INTERVAL);
  };
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doFetchFeaturedUris = doFetchFeaturedUris;
exports.doFetchTrendingUris = doFetchTrendingUris;

var _lbryio = __webpack_require__(3);

var _lbryio2 = _interopRequireDefault(_lbryio);

var _lbryRedux = __webpack_require__(4);

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function doFetchFeaturedUris() {
  var offloadResolve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  return function (dispatch) {
    dispatch({
      type: ACTIONS.FETCH_FEATURED_CONTENT_STARTED
    });

    var success = function success(_ref) {
      var Uris = _ref.Uris;

      var urisToResolve = [];
      Object.keys(Uris).forEach(function (category) {
        urisToResolve = [].concat(_toConsumableArray(urisToResolve), _toConsumableArray(Uris[category]));
      });

      var actions = [{
        type: ACTIONS.FETCH_FEATURED_CONTENT_COMPLETED,
        data: {
          uris: Uris,
          success: true
        }
      }];
      if (urisToResolve.length && !offloadResolve) {
        actions.push((0, _lbryRedux.doResolveUris)(urisToResolve));
      }

      dispatch(_lbryRedux.batchActions.apply(undefined, actions));
    };

    var failure = function failure() {
      dispatch({
        type: ACTIONS.FETCH_FEATURED_CONTENT_COMPLETED,
        data: {
          uris: {}
        }
      });
    };

    _lbryio2.default.call('file', 'list_homepage').then(success, failure);
  };
}

function doFetchTrendingUris() {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.FETCH_TRENDING_CONTENT_STARTED
    });

    var success = function success(data) {
      var urisToResolve = data.map(function (uri) {
        return uri.url;
      });
      var actions = [(0, _lbryRedux.doResolveUris)(urisToResolve), {
        type: ACTIONS.FETCH_TRENDING_CONTENT_COMPLETED,
        data: {
          uris: data,
          success: true
        }
      }];
      dispatch(_lbryRedux.batchActions.apply(undefined, actions));
    };

    var failure = function failure() {
      dispatch({
        type: ACTIONS.FETCH_TRENDING_CONTENT_COMPLETED,
        data: {
          uris: []
        }
      });
    };

    _lbryio2.default.call('file', 'list_trending').then(success, failure);
  };
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doFetchViewCount = undefined;

var _lbryio = __webpack_require__(3);

var _lbryio2 = _interopRequireDefault(_lbryio);

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
var doFetchViewCount = exports.doFetchViewCount = function doFetchViewCount(claimId /*: string*/) {
  return function (dispatch) {
    dispatch({ type: ACTIONS.FETCH_VIEW_COUNT_STARTED });

    return _lbryio2.default.call('file', 'view_count', { claim_id: claimId }).then(function (result /*: Array<number>*/) {
      var viewCount = result[0];
      dispatch({ type: ACTIONS.FETCH_VIEW_COUNT_COMPLETED, data: { claimId: claimId, viewCount: viewCount } });
    }).catch(function (error) {
      dispatch({ type: ACTIONS.FETCH_VIEW_COUNT_FAILED, data: error });
    });
  };
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authReducer = authReducer;

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var reducers = {};
var defaultState = {
  authenticating: false
};

reducers[ACTIONS.GENERATE_AUTH_TOKEN_FAILURE] = function (state) {
  return Object.assign({}, state, {
    authToken: null,
    authenticating: false
  });
};

reducers[ACTIONS.GENERATE_AUTH_TOKEN_STARTED] = function (state) {
  return Object.assign({}, state, {
    authenticating: true
  });
};

reducers[ACTIONS.GENERATE_AUTH_TOKEN_SUCCESS] = function (state, action) {
  return Object.assign({}, state, {
    authToken: action.data.authToken,
    authenticating: false
  });
};

function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  var handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.rewardsReducer = rewardsReducer;

var _lbryRedux = __webpack_require__(4);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var reducers = {};
var defaultState = {
  fetching: false,
  claimedRewardsById: {}, // id => reward
  unclaimedRewards: [],
  claimPendingByType: {},
  claimErrorsByType: {},
  rewardedContentClaimIds: []
};

reducers[_lbryRedux.ACTIONS.FETCH_REWARDS_STARTED] = function (state) {
  return Object.assign({}, state, {
    fetching: true
  });
};

reducers[_lbryRedux.ACTIONS.FETCH_REWARDS_COMPLETED] = function (state, action) {
  var userRewards = action.data.userRewards;


  var unclaimedRewards = [];
  var claimedRewards = {};
  userRewards.forEach(function (reward) {
    if (reward.transaction_id) {
      claimedRewards[reward.id] = reward;
    } else {
      unclaimedRewards.push(reward);
    }
  });

  return Object.assign({}, state, {
    claimedRewardsById: claimedRewards,
    unclaimedRewards: unclaimedRewards,
    fetching: false
  });
};

function setClaimRewardState(state, reward, isClaiming) {
  var errorMessage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

  var newClaimPendingByType = Object.assign({}, state.claimPendingByType);
  var newClaimErrorsByType = Object.assign({}, state.claimErrorsByType);

  // Currently, for multiple rewards of the same type, they will both show "claiming" when one is beacuse we track this by `reward_type`
  // To fix this we will need to use `claim_code` instead, and change all selectors to match
  if (isClaiming) {
    newClaimPendingByType[reward.reward_type] = isClaiming;
  } else {
    delete newClaimPendingByType[reward.reward_type];
  }
  if (errorMessage) {
    newClaimErrorsByType[reward.reward_type] = errorMessage;
  } else {
    delete newClaimErrorsByType[reward.reward_type];
  }

  return Object.assign({}, state, {
    claimPendingByType: newClaimPendingByType,
    claimErrorsByType: newClaimErrorsByType
  });
}

reducers[_lbryRedux.ACTIONS.CLAIM_REWARD_STARTED] = function (state, action) {
  var reward = action.data.reward;


  return setClaimRewardState(state, reward, true, '');
};

reducers[_lbryRedux.ACTIONS.CLAIM_REWARD_SUCCESS] = function (state, action) {
  var reward = action.data.reward;
  var unclaimedRewards = state.unclaimedRewards;


  var index = unclaimedRewards.findIndex(function (ur) {
    return ur.claim_code === reward.claim_code;
  });
  unclaimedRewards.splice(index, 1);

  var claimedRewardsById = state.claimedRewardsById;

  claimedRewardsById[reward.id] = reward;

  var newState = _extends({}, state, {
    unclaimedRewards: [].concat(_toConsumableArray(unclaimedRewards)),
    claimedRewardsById: _extends({}, claimedRewardsById)
  });

  return setClaimRewardState(newState, reward, false, '');
};

reducers[_lbryRedux.ACTIONS.CLAIM_REWARD_FAILURE] = function (state, action) {
  var _action$data = action.data,
      reward = _action$data.reward,
      error = _action$data.error;


  return setClaimRewardState(state, reward, false, error ? error.message : '');
};

reducers[_lbryRedux.ACTIONS.CLAIM_REWARD_CLEAR_ERROR] = function (state, action) {
  var reward = action.data.reward;


  return setClaimRewardState(state, reward, state.claimPendingByType[reward.reward_type], '');
};

reducers[_lbryRedux.ACTIONS.FETCH_REWARD_CONTENT_COMPLETED] = function (state, action) {
  var claimIds = action.data.claimIds;


  return Object.assign({}, state, {
    rewardedContentClaimIds: claimIds
  });
};

function rewardsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  var handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userReducer = userReducer;

var _lbryRedux = __webpack_require__(4);

var reducers = {};

var defaultState = {
  authenticationIsPending: false,
  userIsPending: false,
  emailNewIsPending: false,
  emailNewErrorMessage: '',
  emailToVerify: '',
  inviteNewErrorMessage: '',
  inviteNewIsPending: false,
  inviteStatusIsPending: false,
  invitesRemaining: undefined,
  invitees: undefined,
  user: undefined
};

reducers[_lbryRedux.ACTIONS.AUTHENTICATION_STARTED] = function (state) {
  return Object.assign({}, state, {
    authenticationIsPending: true,
    userIsPending: true,
    user: defaultState.user
  });
};

reducers[_lbryRedux.ACTIONS.AUTHENTICATION_SUCCESS] = function (state, action) {
  return Object.assign({}, state, {
    authenticationIsPending: false,
    userIsPending: false,
    user: action.data.user
  });
};

reducers[_lbryRedux.ACTIONS.AUTHENTICATION_FAILURE] = function (state) {
  return Object.assign({}, state, {
    authenticationIsPending: false,
    userIsPending: false,
    user: null
  });
};

reducers[_lbryRedux.ACTIONS.USER_FETCH_STARTED] = function (state) {
  return Object.assign({}, state, {
    userIsPending: true,
    user: defaultState.user
  });
};

reducers[_lbryRedux.ACTIONS.USER_FETCH_SUCCESS] = function (state, action) {
  return Object.assign({}, state, {
    userIsPending: false,
    user: action.data.user
  });
};

reducers[_lbryRedux.ACTIONS.USER_FETCH_FAILURE] = function (state) {
  return Object.assign({}, state, {
    userIsPending: true,
    user: null
  });
};

reducers[_lbryRedux.ACTIONS.USER_PHONE_NEW_STARTED] = function (state, action) {
  var user = Object.assign({}, state.user);
  user.country_code = action.data.country_code;
  return Object.assign({}, state, {
    phoneNewIsPending: true,
    phoneNewErrorMessage: '',
    user: user
  });
};

reducers[_lbryRedux.ACTIONS.USER_PHONE_NEW_SUCCESS] = function (state, action) {
  return Object.assign({}, state, {
    phoneToVerify: action.data.phone,
    phoneNewIsPending: false
  });
};

reducers[_lbryRedux.ACTIONS.USER_PHONE_RESET] = function (state) {
  return Object.assign({}, state, {
    phoneToVerify: null
  });
};

reducers[_lbryRedux.ACTIONS.USER_PHONE_NEW_FAILURE] = function (state, action) {
  return Object.assign({}, state, {
    phoneNewIsPending: false,
    phoneNewErrorMessage: action.data.error
  });
};

reducers[_lbryRedux.ACTIONS.USER_PHONE_VERIFY_STARTED] = function (state) {
  return Object.assign({}, state, {
    phoneVerifyIsPending: true,
    phoneVerifyErrorMessage: ''
  });
};

reducers[_lbryRedux.ACTIONS.USER_PHONE_VERIFY_SUCCESS] = function (state, action) {
  return Object.assign({}, state, {
    phoneToVerify: '',
    phoneVerifyIsPending: false,
    user: action.data.user
  });
};

reducers[_lbryRedux.ACTIONS.USER_PHONE_VERIFY_FAILURE] = function (state, action) {
  return Object.assign({}, state, {
    phoneVerifyIsPending: false,
    phoneVerifyErrorMessage: action.data.error
  });
};

reducers[_lbryRedux.ACTIONS.USER_EMAIL_NEW_STARTED] = function (state) {
  return Object.assign({}, state, {
    emailNewIsPending: true,
    emailNewErrorMessage: ''
  });
};

reducers[_lbryRedux.ACTIONS.USER_EMAIL_NEW_SUCCESS] = function (state, action) {
  var user = Object.assign({}, state.user);
  user.primary_email = action.data.email;
  return Object.assign({}, state, {
    emailToVerify: action.data.email,
    emailNewIsPending: false,
    user: user
  });
};

reducers[_lbryRedux.ACTIONS.USER_EMAIL_NEW_EXISTS] = function (state, action) {
  return Object.assign({}, state, {
    emailToVerify: action.data.email,
    emailNewIsPending: false
  });
};

reducers[_lbryRedux.ACTIONS.USER_EMAIL_NEW_FAILURE] = function (state, action) {
  return Object.assign({}, state, {
    emailNewIsPending: false,
    emailNewErrorMessage: action.data.error
  });
};

reducers[_lbryRedux.ACTIONS.USER_EMAIL_VERIFY_STARTED] = function (state) {
  return Object.assign({}, state, {
    emailVerifyIsPending: true,
    emailVerifyErrorMessage: ''
  });
};

reducers[_lbryRedux.ACTIONS.USER_EMAIL_VERIFY_SUCCESS] = function (state, action) {
  var user = Object.assign({}, state.user);
  user.primary_email = action.data.email;
  return Object.assign({}, state, {
    emailToVerify: '',
    emailVerifyIsPending: false,
    user: user
  });
};

reducers[_lbryRedux.ACTIONS.USER_EMAIL_VERIFY_FAILURE] = function (state, action) {
  return Object.assign({}, state, {
    emailVerifyIsPending: false,
    emailVerifyErrorMessage: action.data.error
  });
};

reducers[_lbryRedux.ACTIONS.USER_EMAIL_VERIFY_SET] = function (state, action) {
  return Object.assign({}, state, {
    emailToVerify: action.data.email
  });
};

reducers[_lbryRedux.ACTIONS.USER_IDENTITY_VERIFY_STARTED] = function (state) {
  return Object.assign({}, state, {
    identityVerifyIsPending: true,
    identityVerifyErrorMessage: ''
  });
};

reducers[_lbryRedux.ACTIONS.USER_IDENTITY_VERIFY_SUCCESS] = function (state, action) {
  return Object.assign({}, state, {
    identityVerifyIsPending: false,
    identityVerifyErrorMessage: '',
    user: action.data.user
  });
};

reducers[_lbryRedux.ACTIONS.USER_IDENTITY_VERIFY_FAILURE] = function (state, action) {
  return Object.assign({}, state, {
    identityVerifyIsPending: false,
    identityVerifyErrorMessage: action.data.error
  });
};

reducers[_lbryRedux.ACTIONS.FETCH_ACCESS_TOKEN_SUCCESS] = function (state, action) {
  var token = action.data.token;


  return Object.assign({}, state, {
    accessToken: token
  });
};

reducers[_lbryRedux.ACTIONS.USER_INVITE_STATUS_FETCH_STARTED] = function (state) {
  return Object.assign({}, state, {
    inviteStatusIsPending: true
  });
};

reducers[_lbryRedux.ACTIONS.USER_INVITE_STATUS_FETCH_SUCCESS] = function (state, action) {
  return Object.assign({}, state, {
    inviteStatusIsPending: false,
    invitesRemaining: action.data.invitesRemaining,
    invitees: action.data.invitees,
    referralLink: action.data.referralLink
  });
};

reducers[_lbryRedux.ACTIONS.USER_INVITE_NEW_STARTED] = function (state) {
  return Object.assign({}, state, {
    inviteNewIsPending: true,
    inviteNewErrorMessage: ''
  });
};

reducers[_lbryRedux.ACTIONS.USER_INVITE_NEW_SUCCESS] = function (state) {
  return Object.assign({}, state, {
    inviteNewIsPending: false,
    inviteNewErrorMessage: ''
  });
};

reducers[_lbryRedux.ACTIONS.USER_INVITE_NEW_FAILURE] = function (state, action) {
  return Object.assign({}, state, {
    inviteNewIsPending: false,
    inviteNewErrorMessage: action.data.error.message
  });
};

reducers[_lbryRedux.ACTIONS.USER_INVITE_STATUS_FETCH_FAILURE] = function (state) {
  return Object.assign({}, state, {
    inviteStatusIsPending: false,
    invitesRemaining: null,
    invitees: null
  });
};

function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  var handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.costInfoReducer = undefined;

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxUtils = __webpack_require__(32);

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultState = {
  fetching: {},
  byUri: {}
};

var costInfoReducer = exports.costInfoReducer = (0, _reduxUtils.handleActions)((_handleActions = {}, _defineProperty(_handleActions, ACTIONS.FETCH_COST_INFO_STARTED, function (state, action) {
  var uri = action.data.uri;

  var newFetching = Object.assign({}, state.fetching);
  newFetching[uri] = true;

  return _extends({}, state, {
    fetching: newFetching
  });
}), _defineProperty(_handleActions, ACTIONS.FETCH_COST_INFO_COMPLETED, function (state, action) {
  var _action$data = action.data,
      uri = _action$data.uri,
      costInfo = _action$data.costInfo;

  var newByUri = Object.assign({}, state.byUri);
  var newFetching = Object.assign({}, state.fetching);

  newByUri[uri] = costInfo;
  delete newFetching[uri];

  return _extends({}, state, {
    byUri: newByUri,
    fetching: newFetching
  });
}), _handleActions), defaultState);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// util for creating reducers
// based off of redux-actions
// https://redux-actions.js.org/docs/api/handleAction.html#handleactions

// eslint-disable-next-line import/prefer-default-export
var handleActions = exports.handleActions = function handleActions(actionMap, defaultState) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    var handler = actionMap[action.type];

    if (handler) {
      var newState = handler(state, action);
      return Object.assign({}, state, newState);
    }

    // just return the original state if no handler
    // returning a copy here breaks redux-persist
    return state;
  };
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blacklistReducer = undefined;

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _reduxUtils = __webpack_require__(32);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultState = {
  fetchingBlackListedOutpoints: false,
  fetchingBlackListedOutpointsSucceed: undefined,
  blackListedOutpoints: undefined
};

var blacklistReducer = exports.blacklistReducer = (0, _reduxUtils.handleActions)((_handleActions = {}, _defineProperty(_handleActions, ACTIONS.FETCH_BLACK_LISTED_CONTENT_STARTED, function (state) {
  return _extends({}, state, {
    fetchingBlackListedOutpoints: true
  });
}), _defineProperty(_handleActions, ACTIONS.FETCH_BLACK_LISTED_CONTENT_COMPLETED, function (state, action) {
  var _action$data = action.data,
      outpoints = _action$data.outpoints,
      success = _action$data.success;

  return _extends({}, state, {
    fetchingBlackListedOutpoints: false,
    fetchingBlackListedOutpointsSucceed: success,
    blackListedOutpoints: outpoints
  });
}), _defineProperty(_handleActions, ACTIONS.FETCH_BLACK_LISTED_CONTENT_FAILED, function (state, action) {
  var _action$data2 = action.data,
      error = _action$data2.error,
      success = _action$data2.success;


  return _extends({}, state, {
    fetchingBlackListedOutpoints: false,
    fetchingBlackListedOutpointsSucceed: success,
    fetchingBlackListedOutpointsError: error
  });
}), _handleActions), defaultState);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homepageReducer = undefined;

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxUtils = __webpack_require__(32);

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultState = {
  fetchingFeaturedContent: false,
  fetchingFeaturedContentFailed: false,
  featuredUris: undefined,
  fetchingTrendingContent: false,
  fetchingTrendingContentFailed: false,
  trendingUris: undefined
};

var homepageReducer = exports.homepageReducer = (0, _reduxUtils.handleActions)((_handleActions = {}, _defineProperty(_handleActions, ACTIONS.FETCH_FEATURED_CONTENT_STARTED, function (state) {
  return _extends({}, state, {
    fetchingFeaturedContent: true
  });
}), _defineProperty(_handleActions, ACTIONS.FETCH_FEATURED_CONTENT_COMPLETED, function (state, action) {
  var _action$data = action.data,
      uris = _action$data.uris,
      success = _action$data.success;


  return _extends({}, state, {
    fetchingFeaturedContent: false,
    fetchingFeaturedContentFailed: !success,
    featuredUris: uris
  });
}), _defineProperty(_handleActions, ACTIONS.FETCH_TRENDING_CONTENT_STARTED, function (state) {
  return _extends({}, state, {
    fetchingTrendingContent: true
  });
}), _defineProperty(_handleActions, ACTIONS.FETCH_TRENDING_CONTENT_COMPLETED, function (state, action) {
  var _action$data2 = action.data,
      uris = _action$data2.uris,
      success = _action$data2.success;


  return _extends({}, state, {
    fetchingTrendingContent: false,
    fetchingTrendingContentFailed: !success,
    trendingUris: uris
  });
}), _handleActions), defaultState);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statsReducer = undefined;

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxUtils = __webpack_require__(32);

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultState = {
  fetchingViewCount: false,
  viewCountError: undefined,
  viewCountById: {}
};

var statsReducer = exports.statsReducer = (0, _reduxUtils.handleActions)((_handleActions = {}, _defineProperty(_handleActions, ACTIONS.FETCH_VIEW_COUNT_STARTED, function (state) {
  return _extends({}, state, { fetchingViewCount: true });
}), _defineProperty(_handleActions, ACTIONS.FETCH_VIEW_COUNT_FAILED, function (state, action) {
  return _extends({}, state, {
    viewCountError: action.data
  });
}), _defineProperty(_handleActions, ACTIONS.FETCH_VIEW_COUNT_COMPLETED, function (state, action) {
  var _action$data = action.data,
      claimId = _action$data.claimId,
      viewCount = _action$data.viewCount;


  var viewCountById = _extends({}, state.viewCountById, _defineProperty({}, claimId, viewCount));
  return _extends({}, state, {
    fetchingViewCount: false,
    viewCountById: viewCountById
  });
}), _handleActions), defaultState);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectIsAuthenticating = exports.selectAuthToken = undefined;

var _reselect = __webpack_require__(10);

var selectState = function selectState(state) {
  return state.auth || {};
};

var selectAuthToken = exports.selectAuthToken = (0, _reselect.createSelector)(selectState, function (state) {
  return state.authToken;
});

var selectIsAuthenticating = exports.selectIsAuthenticating = (0, _reselect.createSelector)(selectState, function (state) {
  return state.authenticating;
});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectFetchingCostInfoForUri = exports.selectFetchingCostInfo = exports.makeSelectCostInfoForUri = exports.selectAllCostInfoByUri = exports.selectState = undefined;

var _reselect = __webpack_require__(10);

var selectState = exports.selectState = function selectState(state) {
  return state.costInfo || {};
};

var selectAllCostInfoByUri = exports.selectAllCostInfoByUri = (0, _reselect.createSelector)(selectState, function (state) {
  return state.byUri || {};
});

var makeSelectCostInfoForUri = exports.makeSelectCostInfoForUri = function makeSelectCostInfoForUri(uri) {
  return (0, _reselect.createSelector)(selectAllCostInfoByUri, function (costInfos) {
    return costInfos && costInfos[uri];
  });
};

var selectFetchingCostInfo = exports.selectFetchingCostInfo = (0, _reselect.createSelector)(selectState, function (state) {
  return state.fetching || {};
});

var makeSelectFetchingCostInfoForUri = exports.makeSelectFetchingCostInfoForUri = function makeSelectFetchingCostInfoForUri(uri) {
  return (0, _reselect.createSelector)(selectFetchingCostInfo, function (fetchingByUri) {
    return fetchingByUri && fetchingByUri[uri];
  });
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectBlackListedOutpoints = exports.selectState = undefined;

var _reselect = __webpack_require__(10);

var selectState = exports.selectState = function selectState(state) {
  return state.blacklist || {};
};

var selectBlackListedOutpoints = exports.selectBlackListedOutpoints = (0, _reselect.createSelector)(selectState, function (state) {
  return state.blackListedOutpoints;
});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectFetchingTrendingUris = exports.selectTrendingUris = exports.selectFetchingFeaturedUris = exports.selectFeaturedUris = undefined;

var _reselect = __webpack_require__(10);

var selectState = function selectState(state) {
  return state.homepage || {};
};

var selectFeaturedUris = exports.selectFeaturedUris = (0, _reselect.createSelector)(selectState, function (state) {
  return state.featuredUris;
});

var selectFetchingFeaturedUris = exports.selectFetchingFeaturedUris = (0, _reselect.createSelector)(selectState, function (state) {
  return state.fetchingFeaturedContent;
});

var selectTrendingUris = exports.selectTrendingUris = (0, _reselect.createSelector)(selectState, function (state) {
  return state.trendingUris;
});

var selectFetchingTrendingUris = exports.selectFetchingTrendingUris = (0, _reselect.createSelector)(selectState, function (state) {
  return state.fetchingTrendingContent;
});

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectViewCountForUri = exports.selectViewCount = undefined;

var _reselect = __webpack_require__(10);

var _lbryRedux = __webpack_require__(4);

var selectState = function selectState(state) {
  return state.stats || {};
};
var selectViewCount = exports.selectViewCount = (0, _reselect.createSelector)(selectState, function (state) {
  return state.viewCountById;
});

var makeSelectViewCountForUri = exports.makeSelectViewCountForUri = function makeSelectViewCountForUri(uri) {
  return (0, _reselect.createSelector)((0, _lbryRedux.makeSelectClaimForUri)(uri), selectViewCount, function (claim, viewCountById) {
    return viewCountById[claim.claim_id] || 0;
  });
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // @flow


var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _subscriptions = __webpack_require__(22);

var _reduxUtils = __webpack_require__(32);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*:: import type {
  SubscriptionState,
  Subscription,
  DoChannelSubscribe,
  DoChannelUnsubscribe,
  DoChannelSubscriptionEnableNotifications,
  DoChannelSubscriptionDisableNotifications,
  SetSubscriptionLatest,
  DoUpdateSubscriptionUnreads,
  DoRemoveSubscriptionUnreads,
  FetchedSubscriptionsSucess,
  SetViewMode,
  GetSuggestedSubscriptionsSuccess,
} from 'types/subscription';*/


var defaultState /*: SubscriptionState*/ = {
  enabledChannelNotifications: [],
  subscriptions: [],
  unread: {},
  suggested: {},
  loading: false,
  viewMode: _subscriptions.VIEW_ALL,
  loadingSuggested: false,
  firstRunCompleted: false,
  showSuggestedSubs: false
};

exports.default = (0, _reduxUtils.handleActions)((_handleActions = {}, _defineProperty(_handleActions, ACTIONS.CHANNEL_SUBSCRIBE, function (state /*: SubscriptionState*/, action /*: DoChannelSubscribe*/) /*: SubscriptionState*/ {
  var newSubscription /*: Subscription*/ = action.data;
  var newSubscriptions /*: Array<Subscription>*/ = state.subscriptions.slice();
  newSubscriptions.unshift(newSubscription);

  return _extends({}, state, {
    subscriptions: newSubscriptions
  });
}), _defineProperty(_handleActions, ACTIONS.CHANNEL_UNSUBSCRIBE, function (state /*: SubscriptionState*/, action /*: DoChannelUnsubscribe*/) /*: SubscriptionState*/ {
  var subscriptionToRemove /*: Subscription*/ = action.data;
  var newSubscriptions = state.subscriptions.slice().filter(function (subscription) {
    return subscription.channelName !== subscriptionToRemove.channelName;
  });

  // Check if we need to remove it from the 'unread' state
  var unread = state.unread;

  if (unread[subscriptionToRemove.uri]) {
    delete unread[subscriptionToRemove.uri];
  }
  return _extends({}, state, {
    unread: _extends({}, unread),
    subscriptions: newSubscriptions
  });
}), _defineProperty(_handleActions, ACTIONS.SET_SUBSCRIPTION_LATEST, function (state /*: SubscriptionState*/, action /*: SetSubscriptionLatest*/) /*: SubscriptionState*/ {
  return _extends({}, state, {
    subscriptions: state.subscriptions.map(function (subscription) {
      return subscription.channelName === action.data.subscription.channelName ? _extends({}, subscription, { latest: action.data.uri }) : subscription;
    })
  });
}), _defineProperty(_handleActions, ACTIONS.UPDATE_SUBSCRIPTION_UNREADS, function (state /*: SubscriptionState*/, action /*: DoUpdateSubscriptionUnreads*/) /*: SubscriptionState*/ {
  var _action$data = action.data,
      channel = _action$data.channel,
      uris = _action$data.uris,
      type = _action$data.type;


  return _extends({}, state, {
    unread: _extends({}, state.unread, _defineProperty({}, channel, {
      uris: uris,
      type: type
    }))
  });
}), _defineProperty(_handleActions, ACTIONS.REMOVE_SUBSCRIPTION_UNREADS, function (state /*: SubscriptionState*/, action /*: DoRemoveSubscriptionUnreads*/) /*: SubscriptionState*/ {
  var _action$data2 = action.data,
      channel = _action$data2.channel,
      uris = _action$data2.uris;

  // If no channel is passed in, remove all unreads

  var newUnread = void 0;
  if (channel) {
    newUnread = _extends({}, state.unread);

    if (!uris) {
      delete newUnread[channel];
    } else {
      newUnread[channel].uris = uris;
    }
  } else {
    newUnread = {};
  }

  return _extends({}, state, {
    unread: _extends({}, newUnread)
  });
}), _defineProperty(_handleActions, ACTIONS.CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS, function (state /*: SubscriptionState*/, action /*: DoChannelSubscriptionEnableNotifications*/) /*: SubscriptionState*/ {
  var channelName = action.data;

  var newEnabledChannelNotifications /*: Array<
                                             string
                                           >*/ = state.enabledChannelNotifications.slice();
  if (channelName && channelName.trim().length > 0 && newEnabledChannelNotifications.indexOf(channelName) === -1) {
    newEnabledChannelNotifications.push(channelName);
  }

  return _extends({}, state, {
    enabledChannelNotifications: newEnabledChannelNotifications
  });
}), _defineProperty(_handleActions, ACTIONS.CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS, function (state /*: SubscriptionState*/, action /*: DoChannelSubscriptionDisableNotifications*/) /*: SubscriptionState*/ {
  var channelName = action.data;

  var newEnabledChannelNotifications /*: Array<
                                             string
                                           >*/ = state.enabledChannelNotifications.slice();
  var index = newEnabledChannelNotifications.indexOf(channelName);
  if (index > -1) {
    newEnabledChannelNotifications.splice(index, 1);
  }

  return _extends({}, state, {
    enabledChannelNotifications: newEnabledChannelNotifications
  });
}), _defineProperty(_handleActions, ACTIONS.FETCH_SUBSCRIPTIONS_START, function (state /*: SubscriptionState*/) /*: SubscriptionState*/ {
  return _extends({}, state, {
    loading: true
  });
}), _defineProperty(_handleActions, ACTIONS.FETCH_SUBSCRIPTIONS_FAIL, function (state /*: SubscriptionState*/) /*: SubscriptionState*/ {
  return _extends({}, state, {
    loading: false
  });
}), _defineProperty(_handleActions, ACTIONS.FETCH_SUBSCRIPTIONS_SUCCESS, function (state /*: SubscriptionState*/, action /*: FetchedSubscriptionsSucess*/) /*: SubscriptionState*/ {
  return _extends({}, state, {
    loading: false,
    subscriptions: action.data
  });
}), _defineProperty(_handleActions, ACTIONS.SET_VIEW_MODE, function (state /*: SubscriptionState*/, action /*: SetViewMode*/) /*: SubscriptionState*/ {
  return _extends({}, state, {
    viewMode: action.data
  });
}), _defineProperty(_handleActions, ACTIONS.GET_SUGGESTED_SUBSCRIPTIONS_START, function (state /*: SubscriptionState*/) /*: SubscriptionState*/ {
  return _extends({}, state, {
    loadingSuggested: true
  });
}), _defineProperty(_handleActions, ACTIONS.GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS, function (state /*: SubscriptionState*/, action /*: GetSuggestedSubscriptionsSuccess*/) /*: SubscriptionState*/ {
  return _extends({}, state, {
    suggested: action.data,
    loadingSuggested: false
  });
}), _defineProperty(_handleActions, ACTIONS.GET_SUGGESTED_SUBSCRIPTIONS_FAIL, function (state /*: SubscriptionState*/) /*: SubscriptionState*/ {
  return _extends({}, state, {
    loadingSuggested: false
  });
}), _defineProperty(_handleActions, ACTIONS.SUBSCRIPTION_FIRST_RUN_COMPLETED, function (state /*: SubscriptionState*/) /*: SubscriptionState*/ {
  return _extends({}, state, {
    firstRunCompleted: true
  });
}), _defineProperty(_handleActions, ACTIONS.VIEW_SUGGESTED_SUBSCRIPTIONS, function (state /*: SubscriptionState*/) /*: SubscriptionState*/ {
  return _extends({}, state, {
    showSuggestedSubs: true
  });
}), _handleActions), defaultState);

/***/ })
/******/ ]);
});