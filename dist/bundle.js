(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
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
exports.selectUserInviteNewErrorMessage = exports.selectUserInviteNewIsPending = exports.selectUserInviteStatusFailed = exports.selectUserInvitees = exports.selectUserInvitesRemaining = undefined;
exports.selectUserInviteStatusIsPending = exports.selectAccessToken = exports.selectUserIsVerificationCandidate = exports.selectIdentityVerifyErrorMessage = exports.selectIdentityVerifyIsPending = exports.selectPhoneVerifyIsPending = exports.selectPhoneVerifyErrorMessage = exports.selectEmailVerifyErrorMessage = exports.selectEmailVerifyIsPending = exports.selectPhoneNewIsPending = exports.selectPhoneNewErrorMessage = exports.selectEmailNewErrorMessage = exports.selectEmailNewIsPending = exports.selectUserIsRewardApproved = exports.selectPhoneToVerify = exports.selectEmailToVerify = exports.selectUserCountryCode = exports.selectUserPhone = exports.selectUserEmail = exports.selectUser = exports.selectUserIsPending = exports.selectAuthenticationIsPending = exports.selectSubscriptionClaims = exports.selectUnreadSubscriptions = exports.selectUnreadAmount = exports.selectUnreadByChannel = exports.selectSubscriptionsBeingFetched = exports.selectShowSuggestedSubs = exports.selectFirstRunCompleted = exports.selectSuggestedChannels = exports.selectIsFetchingSuggested = exports.selectSuggested = exports.selectViewMode = exports.selectIsFetchingSubscriptions = exports.selectSubscriptions = exports.makeSelectUnreadByChannel = exports.makeSelectIsSubscribed = exports.makeSelectIsNew = exports.selectRewardContentClaimIds = exports.selectRewardByType = exports.selectClaimRewardError = exports.selectClaimErrorsByType = exports.selectIsClaimRewardPending = exports.selectClaimsPendingByType = exports.selectUnclaimedRewardValue = exports.selectFetchingRewards = exports.selectUnclaimedRewards = exports.selectClaimedRewardsByTransactionId = exports.selectClaimedRewards = exports.selectClaimedRewardsById = exports.selectUnclaimedRewardsByType = exports.makeSelectRewardByType = exports.makeSelectRewardAmountByType = exports.makeSelectIsRewardClaimPending = exports.makeSelectClaimRewardError = exports.selectIsAuthenticating = exports.selectAuthToken = exports.userReducer = exports.subscriptionsReducer = exports.rewardsReducer = exports.authReducer = exports.doUserInviteNew = exports.doUserIdentityVerify = exports.doUserResendVerificationEmail = exports.doFetchAccessToken = exports.doUserPhoneVerify = exports.doUserPhoneVerifyFailure = exports.doUserPhoneReset = exports.doUserPhoneNew = exports.doUserEmailVerify = exports.doUserEmailVerifyFailure = exports.doUserEmailToVerify = exports.doUserEmailNew = exports.doUserFetch = exports.doAuthenticate = exports.doInstallNew = exports.doFetchInviteStatus = exports.setSubscriptionLatest = exports.doUpdateUnreadSubscriptions = exports.doShowSuggestedSubs = exports.doSetViewMode = exports.doRemoveUnreadSubscriptions = exports.doRemoveUnreadSubscription = exports.doFetchRecommendedSubscriptions = exports.doFetchMySubscriptions = exports.doCompleteFirstRun = exports.doCheckSubscriptionsInit = exports.doCheckSubscriptions = exports.doCheckSubscription = exports.doChannelUnsubscribe = exports.doChannelSubscribe = exports.doFetchRewardedContent = exports.doClaimRewardClearError = exports.doClaimEligiblePurchaseRewards = exports.doClaimRewardType = exports.doRewardList = exports.doGenerateAuthToken = exports.rewards = exports.Lbryio = exports.LBRYINC_ACTIONS = undefined;

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

var _subscriptions = __webpack_require__(13);

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

var _user = __webpack_require__(23);

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

var _auth2 = __webpack_require__(24);

Object.defineProperty(exports, 'authReducer', {
  enumerable: true,
  get: function get() {
    return _auth2.authReducer;
  }
});

var _rewards2 = __webpack_require__(25);

Object.defineProperty(exports, 'rewardsReducer', {
  enumerable: true,
  get: function get() {
    return _rewards2.rewardsReducer;
  }
});

var _user2 = __webpack_require__(26);

Object.defineProperty(exports, 'userReducer', {
  enumerable: true,
  get: function get() {
    return _user2.userReducer;
  }
});

var _auth3 = __webpack_require__(27);

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

var _subscriptions2 = __webpack_require__(15);

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

var _user3 = __webpack_require__(11);

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

var _action_types = __webpack_require__(2);

var LBRYINC_ACTIONS = _interopRequireWildcard(_action_types);

var _lbryio = __webpack_require__(3);

var _lbryio2 = _interopRequireDefault(_lbryio);

var _rewards4 = __webpack_require__(12);

var _rewards5 = _interopRequireDefault(_rewards4);

var _subscriptions3 = __webpack_require__(28);

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lbryRedux = __webpack_require__(4);

var _auth = __webpack_require__(1);

var _querystring = __webpack_require__(5);

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lbryio = {
  enabled: true,
  authenticationPromise: null
};

// We can't use env's because they aren't passed into node_modules
var CONNECTION_STRING = 'https://api.lbry.io/';
Lbryio.setLocalApi = function (endpoint) {
  CONNECTION_STRING = endpoint.replace(/\/*$/, '/'); // exactly one slash at the end;
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
    var url = '' + CONNECTION_STRING + resource + '/' + action + '?' + qs;

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
      url = '' + CONNECTION_STRING + resource + '/' + action;
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
        return Lbryio.getCurrentUser().then(function () {
          return true;
        }).catch(function () {
          return false;
        });
      }).then(function (isTokenValid) {
        if (isTokenValid) {
          return reject;
        }

        return _lbryRedux.Lbry.status().then(function (status) {
          if (Lbryio.overrides.setAuthToken) {
            return Lbryio.overrides.setAuthToken(status);
          }

          var _window2 = window,
              store = _window2.store;

          if (store) {
            store.dispatch((0, _auth.doGenerateAuthToken)(status.installation_id));
            return resolve();
          }

          return reject();
        });
      }).then(Lbryio.getCurrentUser).then(resolve, reject);
    });
  }

  return Lbryio.authenticationPromise;
};

Lbryio.getStripeToken = function () {
  return CONNECTION_STRING.startsWith('http://localhost:') ? 'pk_test_NoL1JWL7i1ipfhVId5KfDZgo' : 'pk_live_e8M4dRNnCCbmpZzduEUZBgJO';
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
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
exports.selectTransactionListFilter = exports.selectWalletUnlockResult = exports.selectWalletUnlockSucceeded = exports.selectWalletUnlockPending = exports.selectWalletDecryptResult = exports.selectWalletDecryptSucceeded = exports.selectWalletDecryptPending = exports.selectWalletEncryptResult = exports.selectWalletEncryptSucceeded = exports.selectWalletEncryptPending = exports.selectWalletState = exports.selectWalletIsEncrypted = exports.selectBlocks = exports.selectDraftTransactionError = exports.selectDraftTransactionAddress = exports.selectDraftTransactionAmount = exports.selectDraftTransaction = exports.selectGettingNewAddress = exports.selectReceiveAddress = exports.selectIsSendingSupport = exports.selectIsFetchingTransactions = exports.selectHasTransactions = exports.selectRecentTransactions = exports.selectTransactionItems = exports.selectTransactionsById = exports.selectBalance = exports.makeSelectBlockDate = exports.selectSearchSuggestions = exports.selectSearchBarFocused = exports.selectWunderBarAddress = exports.selectSearchUrisByQuery = exports.selectIsSearching = exports.selectSearchValue = exports.selectSearchQuery = exports.makeSelectSearchUris = exports.selectSearchState = exports.selectActiveHistoryEntry = exports.selectHistoryStack = exports.selectHistoryIndex = exports.selectIsForwardDisabled = exports.selectIsBackDisabled = exports.selectPathAfterAuth = exports.selectPageTitle = exports.selectHeaderLinks = exports.selectCurrentParams = exports.selectCurrentPage = exports.selectCurrentPath = exports.makeSelectCurrentParam = exports.computePageFromPath = exports.selectFileListPublishedSort = exports.selectFileListDownloadedSort = exports.selectSearchDownloadUris = exports.selectTotalDownloadProgress = exports.selectDownloadingFileInfos = exports.selectFileInfosDownloaded = exports.selectUrisLoading = exports.selectDownloadingByOutpoint = exports.selectIsFetchingFileListDownloadedOrPublished = exports.selectIsFetchingFileList = exports.selectFileInfosByOutpoint = exports.makeSelectLoadingForUri = exports.makeSelectDownloadingForUri = exports.makeSelectFileInfoForUri = exports.selectFetchingCostInfo = exports.selectCostForCurrentPageUri = exports.selectAllCostInfoByUri = exports.makeSelectCostInfoForUri = exports.makeSelectFetchingCostInfoForUri = exports.selectChannelClaimCounts = exports.selectPlayingUri = exports.selectFetchingTrendingUris = exports.selectTrendingUris = exports.selectFetchingFeaturedUris = exports.selectFeaturedUris = exports.selectResolvingUris = exports.selectMyChannelClaims = exports.selectFetchingMyChannels = exports.selectMyClaimsOutpoints = exports.selectAllMyClaimsByOutpoint = exports.selectMyClaimsWithoutChannels = exports.selectMyClaims = undefined;
exports.selectPendingClaims = exports.selectIsFetchingClaimListMine = exports.selectAllFetchingChannelClaims = exports.selectMyActiveClaims = exports.selectAbandoningIds = exports.selectMyClaimsRaw = exports.selectAllClaimsByChannel = exports.selectClaimsByUri = exports.selectClaimsById = exports.selectPendingById = exports.makeSelectPendingByUri = exports.makeSelectClaimIsPending = exports.makeSelectChannelForClaimUri = exports.makeSelectRecommendedContentForUri = exports.makeSelectNsfwCountForChannel = exports.makeSelectNsfwCountFromUris = exports.makeSelectTotalPagesForChannel = exports.makeSelectTotalItemsForChannel = exports.makeSelectIsUriResolving = exports.makeSelectContentTypeForUri = exports.makeSelectTitleForUri = exports.makeSelectMetadataForUri = exports.makeSelectClaimsInChannelForPage = exports.makeSelectClaimsInChannelForCurrentPage = exports.makeSelectFetchingChannelClaims = exports.makeSelectClaimIsMine = exports.makeSelectClaimForUri = exports.selectError = exports.selectToast = exports.selectBlackListedOutpoints = exports.blacklistReducer = exports.walletReducer = exports.searchReducer = exports.notificationsReducer = exports.fileInfoReducer = exports.costInfoReducer = exports.claimsReducer = exports.creditsToString = exports.formatFullPrice = exports.formatCredits = exports.toQueryString = exports.parseQueryParams = exports.batchActions = exports.doUpdateBlockHeight = exports.doSetTransactionListFilter = exports.doWalletStatus = exports.doWalletUnlock = exports.doWalletDecrypt = exports.doWalletEncrypt = exports.doSendTip = exports.doSetDraftTransactionAddress = exports.doSetDraftTransactionAmount = exports.doSendDraftTransaction = exports.doCheckAddressIsMine = exports.doGetNewAddress = exports.doFetchBlock = exports.doFetchTransactions = exports.doBalanceSubscribe = exports.doUpdateBalance = exports.doBlackListedOutpointsSubscribe = exports.doBlurSearchInput = exports.doFocusSearchInput = exports.doUpdateSearchQuery = exports.doSearch = exports.doSetFileListSort = exports.doFetchFileInfosAndPublishedClaims = exports.doFileList = exports.doFetchFileInfo = exports.doFetchCostInfoForUri = exports.doFetchTrendingUris = exports.doFetchFeaturedUris = exports.doResolveUri = exports.doResolveUris = exports.doAbandonClaim = exports.doFetchClaimListMine = exports.doFetchClaimCountByChannel = exports.doFetchClaimsByChannel = exports.doDismissError = exports.doError = exports.doDismissToast = exports.doToast = exports.convertToShareLink = exports.isNameValid = exports.isURIClaimable = exports.isURIValid = exports.normalizeURI = exports.buildURI = exports.parseURI = exports.regexAddress = exports.regexInvalidURI = exports.Lbryapi = exports.Lbry = exports.PAGES = exports.SORT_OPTIONS = exports.TRANSACTIONS = exports.SETTINGS = exports.SEARCH_TYPES = exports.THUMBNAIL_STATUSES = exports.ACTIONS = exports.Toast = undefined;

var _Notification = __webpack_require__(1);

Object.defineProperty(exports, 'Toast', {
  enumerable: true,
  get: function get() {
    return _Notification.Toast;
  }
});

var _lbryURI = __webpack_require__(3);

Object.defineProperty(exports, 'regexInvalidURI', {
  enumerable: true,
  get: function get() {
    return _lbryURI.regexInvalidURI;
  }
});
Object.defineProperty(exports, 'regexAddress', {
  enumerable: true,
  get: function get() {
    return _lbryURI.regexAddress;
  }
});
Object.defineProperty(exports, 'parseURI', {
  enumerable: true,
  get: function get() {
    return _lbryURI.parseURI;
  }
});
Object.defineProperty(exports, 'buildURI', {
  enumerable: true,
  get: function get() {
    return _lbryURI.buildURI;
  }
});
Object.defineProperty(exports, 'normalizeURI', {
  enumerable: true,
  get: function get() {
    return _lbryURI.normalizeURI;
  }
});
Object.defineProperty(exports, 'isURIValid', {
  enumerable: true,
  get: function get() {
    return _lbryURI.isURIValid;
  }
});
Object.defineProperty(exports, 'isURIClaimable', {
  enumerable: true,
  get: function get() {
    return _lbryURI.isURIClaimable;
  }
});
Object.defineProperty(exports, 'isNameValid', {
  enumerable: true,
  get: function get() {
    return _lbryURI.isNameValid;
  }
});
Object.defineProperty(exports, 'convertToShareLink', {
  enumerable: true,
  get: function get() {
    return _lbryURI.convertToShareLink;
  }
});

var _notifications = __webpack_require__(4);

Object.defineProperty(exports, 'doToast', {
  enumerable: true,
  get: function get() {
    return _notifications.doToast;
  }
});
Object.defineProperty(exports, 'doDismissToast', {
  enumerable: true,
  get: function get() {
    return _notifications.doDismissToast;
  }
});
Object.defineProperty(exports, 'doError', {
  enumerable: true,
  get: function get() {
    return _notifications.doError;
  }
});
Object.defineProperty(exports, 'doDismissError', {
  enumerable: true,
  get: function get() {
    return _notifications.doDismissError;
  }
});

var _claims = __webpack_require__(8);

Object.defineProperty(exports, 'doFetchClaimsByChannel', {
  enumerable: true,
  get: function get() {
    return _claims.doFetchClaimsByChannel;
  }
});
Object.defineProperty(exports, 'doFetchClaimCountByChannel', {
  enumerable: true,
  get: function get() {
    return _claims.doFetchClaimCountByChannel;
  }
});
Object.defineProperty(exports, 'doFetchClaimListMine', {
  enumerable: true,
  get: function get() {
    return _claims.doFetchClaimListMine;
  }
});
Object.defineProperty(exports, 'doAbandonClaim', {
  enumerable: true,
  get: function get() {
    return _claims.doAbandonClaim;
  }
});
Object.defineProperty(exports, 'doResolveUris', {
  enumerable: true,
  get: function get() {
    return _claims.doResolveUris;
  }
});
Object.defineProperty(exports, 'doResolveUri', {
  enumerable: true,
  get: function get() {
    return _claims.doResolveUri;
  }
});
Object.defineProperty(exports, 'doFetchFeaturedUris', {
  enumerable: true,
  get: function get() {
    return _claims.doFetchFeaturedUris;
  }
});
Object.defineProperty(exports, 'doFetchTrendingUris', {
  enumerable: true,
  get: function get() {
    return _claims.doFetchTrendingUris;
  }
});

var _cost_info = __webpack_require__(29);

Object.defineProperty(exports, 'doFetchCostInfoForUri', {
  enumerable: true,
  get: function get() {
    return _cost_info.doFetchCostInfoForUri;
  }
});

var _file_info = __webpack_require__(30);

Object.defineProperty(exports, 'doFetchFileInfo', {
  enumerable: true,
  get: function get() {
    return _file_info.doFetchFileInfo;
  }
});
Object.defineProperty(exports, 'doFileList', {
  enumerable: true,
  get: function get() {
    return _file_info.doFileList;
  }
});
Object.defineProperty(exports, 'doFetchFileInfosAndPublishedClaims', {
  enumerable: true,
  get: function get() {
    return _file_info.doFetchFileInfosAndPublishedClaims;
  }
});
Object.defineProperty(exports, 'doSetFileListSort', {
  enumerable: true,
  get: function get() {
    return _file_info.doSetFileListSort;
  }
});

var _search = __webpack_require__(32);

Object.defineProperty(exports, 'doSearch', {
  enumerable: true,
  get: function get() {
    return _search.doSearch;
  }
});
Object.defineProperty(exports, 'doUpdateSearchQuery', {
  enumerable: true,
  get: function get() {
    return _search.doUpdateSearchQuery;
  }
});
Object.defineProperty(exports, 'doFocusSearchInput', {
  enumerable: true,
  get: function get() {
    return _search.doFocusSearchInput;
  }
});
Object.defineProperty(exports, 'doBlurSearchInput', {
  enumerable: true,
  get: function get() {
    return _search.doBlurSearchInput;
  }
});

var _blacklist = __webpack_require__(34);

Object.defineProperty(exports, 'doBlackListedOutpointsSubscribe', {
  enumerable: true,
  get: function get() {
    return _blacklist.doBlackListedOutpointsSubscribe;
  }
});

var _wallet = __webpack_require__(25);

Object.defineProperty(exports, 'doUpdateBalance', {
  enumerable: true,
  get: function get() {
    return _wallet.doUpdateBalance;
  }
});
Object.defineProperty(exports, 'doBalanceSubscribe', {
  enumerable: true,
  get: function get() {
    return _wallet.doBalanceSubscribe;
  }
});
Object.defineProperty(exports, 'doFetchTransactions', {
  enumerable: true,
  get: function get() {
    return _wallet.doFetchTransactions;
  }
});
Object.defineProperty(exports, 'doFetchBlock', {
  enumerable: true,
  get: function get() {
    return _wallet.doFetchBlock;
  }
});
Object.defineProperty(exports, 'doGetNewAddress', {
  enumerable: true,
  get: function get() {
    return _wallet.doGetNewAddress;
  }
});
Object.defineProperty(exports, 'doCheckAddressIsMine', {
  enumerable: true,
  get: function get() {
    return _wallet.doCheckAddressIsMine;
  }
});
Object.defineProperty(exports, 'doSendDraftTransaction', {
  enumerable: true,
  get: function get() {
    return _wallet.doSendDraftTransaction;
  }
});
Object.defineProperty(exports, 'doSetDraftTransactionAmount', {
  enumerable: true,
  get: function get() {
    return _wallet.doSetDraftTransactionAmount;
  }
});
Object.defineProperty(exports, 'doSetDraftTransactionAddress', {
  enumerable: true,
  get: function get() {
    return _wallet.doSetDraftTransactionAddress;
  }
});
Object.defineProperty(exports, 'doSendTip', {
  enumerable: true,
  get: function get() {
    return _wallet.doSendTip;
  }
});
Object.defineProperty(exports, 'doWalletEncrypt', {
  enumerable: true,
  get: function get() {
    return _wallet.doWalletEncrypt;
  }
});
Object.defineProperty(exports, 'doWalletDecrypt', {
  enumerable: true,
  get: function get() {
    return _wallet.doWalletDecrypt;
  }
});
Object.defineProperty(exports, 'doWalletUnlock', {
  enumerable: true,
  get: function get() {
    return _wallet.doWalletUnlock;
  }
});
Object.defineProperty(exports, 'doWalletStatus', {
  enumerable: true,
  get: function get() {
    return _wallet.doWalletStatus;
  }
});
Object.defineProperty(exports, 'doSetTransactionListFilter', {
  enumerable: true,
  get: function get() {
    return _wallet.doSetTransactionListFilter;
  }
});
Object.defineProperty(exports, 'doUpdateBlockHeight', {
  enumerable: true,
  get: function get() {
    return _wallet.doUpdateBlockHeight;
  }
});

var _batchActions = __webpack_require__(24);

Object.defineProperty(exports, 'batchActions', {
  enumerable: true,
  get: function get() {
    return _batchActions.batchActions;
  }
});

var _query_params = __webpack_require__(20);

Object.defineProperty(exports, 'parseQueryParams', {
  enumerable: true,
  get: function get() {
    return _query_params.parseQueryParams;
  }
});
Object.defineProperty(exports, 'toQueryString', {
  enumerable: true,
  get: function get() {
    return _query_params.toQueryString;
  }
});

var _formatCredits = __webpack_require__(28);

Object.defineProperty(exports, 'formatCredits', {
  enumerable: true,
  get: function get() {
    return _formatCredits.formatCredits;
  }
});
Object.defineProperty(exports, 'formatFullPrice', {
  enumerable: true,
  get: function get() {
    return _formatCredits.formatFullPrice;
  }
});
Object.defineProperty(exports, 'creditsToString', {
  enumerable: true,
  get: function get() {
    return _formatCredits.creditsToString;
  }
});

var _claims2 = __webpack_require__(35);

Object.defineProperty(exports, 'claimsReducer', {
  enumerable: true,
  get: function get() {
    return _claims2.claimsReducer;
  }
});

var _cost_info2 = __webpack_require__(36);

Object.defineProperty(exports, 'costInfoReducer', {
  enumerable: true,
  get: function get() {
    return _cost_info2.costInfoReducer;
  }
});

var _file_info2 = __webpack_require__(37);

Object.defineProperty(exports, 'fileInfoReducer', {
  enumerable: true,
  get: function get() {
    return _file_info2.fileInfoReducer;
  }
});

var _notifications2 = __webpack_require__(40);

Object.defineProperty(exports, 'notificationsReducer', {
  enumerable: true,
  get: function get() {
    return _notifications2.notificationsReducer;
  }
});

var _search2 = __webpack_require__(42);

Object.defineProperty(exports, 'searchReducer', {
  enumerable: true,
  get: function get() {
    return _search2.searchReducer;
  }
});

var _wallet2 = __webpack_require__(43);

Object.defineProperty(exports, 'walletReducer', {
  enumerable: true,
  get: function get() {
    return _wallet2.walletReducer;
  }
});

var _blacklist2 = __webpack_require__(44);

Object.defineProperty(exports, 'blacklistReducer', {
  enumerable: true,
  get: function get() {
    return _blacklist2.blacklistReducer;
  }
});

var _blacklist3 = __webpack_require__(45);

Object.defineProperty(exports, 'selectBlackListedOutpoints', {
  enumerable: true,
  get: function get() {
    return _blacklist3.selectBlackListedOutpoints;
  }
});

var _notifications3 = __webpack_require__(46);

Object.defineProperty(exports, 'selectToast', {
  enumerable: true,
  get: function get() {
    return _notifications3.selectToast;
  }
});
Object.defineProperty(exports, 'selectError', {
  enumerable: true,
  get: function get() {
    return _notifications3.selectError;
  }
});

var _claims3 = __webpack_require__(17);

Object.defineProperty(exports, 'makeSelectClaimForUri', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectClaimForUri;
  }
});
Object.defineProperty(exports, 'makeSelectClaimIsMine', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectClaimIsMine;
  }
});
Object.defineProperty(exports, 'makeSelectFetchingChannelClaims', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectFetchingChannelClaims;
  }
});
Object.defineProperty(exports, 'makeSelectClaimsInChannelForCurrentPage', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectClaimsInChannelForCurrentPage;
  }
});
Object.defineProperty(exports, 'makeSelectClaimsInChannelForPage', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectClaimsInChannelForPage;
  }
});
Object.defineProperty(exports, 'makeSelectMetadataForUri', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectMetadataForUri;
  }
});
Object.defineProperty(exports, 'makeSelectTitleForUri', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectTitleForUri;
  }
});
Object.defineProperty(exports, 'makeSelectContentTypeForUri', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectContentTypeForUri;
  }
});
Object.defineProperty(exports, 'makeSelectIsUriResolving', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectIsUriResolving;
  }
});
Object.defineProperty(exports, 'makeSelectTotalItemsForChannel', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectTotalItemsForChannel;
  }
});
Object.defineProperty(exports, 'makeSelectTotalPagesForChannel', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectTotalPagesForChannel;
  }
});
Object.defineProperty(exports, 'makeSelectNsfwCountFromUris', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectNsfwCountFromUris;
  }
});
Object.defineProperty(exports, 'makeSelectNsfwCountForChannel', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectNsfwCountForChannel;
  }
});
Object.defineProperty(exports, 'makeSelectRecommendedContentForUri', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectRecommendedContentForUri;
  }
});
Object.defineProperty(exports, 'makeSelectChannelForClaimUri', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectChannelForClaimUri;
  }
});
Object.defineProperty(exports, 'makeSelectClaimIsPending', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectClaimIsPending;
  }
});
Object.defineProperty(exports, 'makeSelectPendingByUri', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectPendingByUri;
  }
});
Object.defineProperty(exports, 'selectPendingById', {
  enumerable: true,
  get: function get() {
    return _claims3.selectPendingById;
  }
});
Object.defineProperty(exports, 'selectClaimsById', {
  enumerable: true,
  get: function get() {
    return _claims3.selectClaimsById;
  }
});
Object.defineProperty(exports, 'selectClaimsByUri', {
  enumerable: true,
  get: function get() {
    return _claims3.selectClaimsByUri;
  }
});
Object.defineProperty(exports, 'selectAllClaimsByChannel', {
  enumerable: true,
  get: function get() {
    return _claims3.selectAllClaimsByChannel;
  }
});
Object.defineProperty(exports, 'selectMyClaimsRaw', {
  enumerable: true,
  get: function get() {
    return _claims3.selectMyClaimsRaw;
  }
});
Object.defineProperty(exports, 'selectAbandoningIds', {
  enumerable: true,
  get: function get() {
    return _claims3.selectAbandoningIds;
  }
});
Object.defineProperty(exports, 'selectMyActiveClaims', {
  enumerable: true,
  get: function get() {
    return _claims3.selectMyActiveClaims;
  }
});
Object.defineProperty(exports, 'selectAllFetchingChannelClaims', {
  enumerable: true,
  get: function get() {
    return _claims3.selectAllFetchingChannelClaims;
  }
});
Object.defineProperty(exports, 'selectIsFetchingClaimListMine', {
  enumerable: true,
  get: function get() {
    return _claims3.selectIsFetchingClaimListMine;
  }
});
Object.defineProperty(exports, 'selectPendingClaims', {
  enumerable: true,
  get: function get() {
    return _claims3.selectPendingClaims;
  }
});
Object.defineProperty(exports, 'selectMyClaims', {
  enumerable: true,
  get: function get() {
    return _claims3.selectMyClaims;
  }
});
Object.defineProperty(exports, 'selectMyClaimsWithoutChannels', {
  enumerable: true,
  get: function get() {
    return _claims3.selectMyClaimsWithoutChannels;
  }
});
Object.defineProperty(exports, 'selectAllMyClaimsByOutpoint', {
  enumerable: true,
  get: function get() {
    return _claims3.selectAllMyClaimsByOutpoint;
  }
});
Object.defineProperty(exports, 'selectMyClaimsOutpoints', {
  enumerable: true,
  get: function get() {
    return _claims3.selectMyClaimsOutpoints;
  }
});
Object.defineProperty(exports, 'selectFetchingMyChannels', {
  enumerable: true,
  get: function get() {
    return _claims3.selectFetchingMyChannels;
  }
});
Object.defineProperty(exports, 'selectMyChannelClaims', {
  enumerable: true,
  get: function get() {
    return _claims3.selectMyChannelClaims;
  }
});
Object.defineProperty(exports, 'selectResolvingUris', {
  enumerable: true,
  get: function get() {
    return _claims3.selectResolvingUris;
  }
});
Object.defineProperty(exports, 'selectFeaturedUris', {
  enumerable: true,
  get: function get() {
    return _claims3.selectFeaturedUris;
  }
});
Object.defineProperty(exports, 'selectFetchingFeaturedUris', {
  enumerable: true,
  get: function get() {
    return _claims3.selectFetchingFeaturedUris;
  }
});
Object.defineProperty(exports, 'selectTrendingUris', {
  enumerable: true,
  get: function get() {
    return _claims3.selectTrendingUris;
  }
});
Object.defineProperty(exports, 'selectFetchingTrendingUris', {
  enumerable: true,
  get: function get() {
    return _claims3.selectFetchingTrendingUris;
  }
});
Object.defineProperty(exports, 'selectPlayingUri', {
  enumerable: true,
  get: function get() {
    return _claims3.selectPlayingUri;
  }
});
Object.defineProperty(exports, 'selectChannelClaimCounts', {
  enumerable: true,
  get: function get() {
    return _claims3.selectChannelClaimCounts;
  }
});

var _cost_info3 = __webpack_require__(47);

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
Object.defineProperty(exports, 'selectCostForCurrentPageUri', {
  enumerable: true,
  get: function get() {
    return _cost_info3.selectCostForCurrentPageUri;
  }
});
Object.defineProperty(exports, 'selectFetchingCostInfo', {
  enumerable: true,
  get: function get() {
    return _cost_info3.selectFetchingCostInfo;
  }
});

var _file_info3 = __webpack_require__(31);

Object.defineProperty(exports, 'makeSelectFileInfoForUri', {
  enumerable: true,
  get: function get() {
    return _file_info3.makeSelectFileInfoForUri;
  }
});
Object.defineProperty(exports, 'makeSelectDownloadingForUri', {
  enumerable: true,
  get: function get() {
    return _file_info3.makeSelectDownloadingForUri;
  }
});
Object.defineProperty(exports, 'makeSelectLoadingForUri', {
  enumerable: true,
  get: function get() {
    return _file_info3.makeSelectLoadingForUri;
  }
});
Object.defineProperty(exports, 'selectFileInfosByOutpoint', {
  enumerable: true,
  get: function get() {
    return _file_info3.selectFileInfosByOutpoint;
  }
});
Object.defineProperty(exports, 'selectIsFetchingFileList', {
  enumerable: true,
  get: function get() {
    return _file_info3.selectIsFetchingFileList;
  }
});
Object.defineProperty(exports, 'selectIsFetchingFileListDownloadedOrPublished', {
  enumerable: true,
  get: function get() {
    return _file_info3.selectIsFetchingFileListDownloadedOrPublished;
  }
});
Object.defineProperty(exports, 'selectDownloadingByOutpoint', {
  enumerable: true,
  get: function get() {
    return _file_info3.selectDownloadingByOutpoint;
  }
});
Object.defineProperty(exports, 'selectUrisLoading', {
  enumerable: true,
  get: function get() {
    return _file_info3.selectUrisLoading;
  }
});
Object.defineProperty(exports, 'selectFileInfosDownloaded', {
  enumerable: true,
  get: function get() {
    return _file_info3.selectFileInfosDownloaded;
  }
});
Object.defineProperty(exports, 'selectDownloadingFileInfos', {
  enumerable: true,
  get: function get() {
    return _file_info3.selectDownloadingFileInfos;
  }
});
Object.defineProperty(exports, 'selectTotalDownloadProgress', {
  enumerable: true,
  get: function get() {
    return _file_info3.selectTotalDownloadProgress;
  }
});
Object.defineProperty(exports, 'selectSearchDownloadUris', {
  enumerable: true,
  get: function get() {
    return _file_info3.selectSearchDownloadUris;
  }
});
Object.defineProperty(exports, 'selectFileListDownloadedSort', {
  enumerable: true,
  get: function get() {
    return _file_info3.selectFileListDownloadedSort;
  }
});
Object.defineProperty(exports, 'selectFileListPublishedSort', {
  enumerable: true,
  get: function get() {
    return _file_info3.selectFileListPublishedSort;
  }
});

var _navigation = __webpack_require__(18);

Object.defineProperty(exports, 'computePageFromPath', {
  enumerable: true,
  get: function get() {
    return _navigation.computePageFromPath;
  }
});
Object.defineProperty(exports, 'makeSelectCurrentParam', {
  enumerable: true,
  get: function get() {
    return _navigation.makeSelectCurrentParam;
  }
});
Object.defineProperty(exports, 'selectCurrentPath', {
  enumerable: true,
  get: function get() {
    return _navigation.selectCurrentPath;
  }
});
Object.defineProperty(exports, 'selectCurrentPage', {
  enumerable: true,
  get: function get() {
    return _navigation.selectCurrentPage;
  }
});
Object.defineProperty(exports, 'selectCurrentParams', {
  enumerable: true,
  get: function get() {
    return _navigation.selectCurrentParams;
  }
});
Object.defineProperty(exports, 'selectHeaderLinks', {
  enumerable: true,
  get: function get() {
    return _navigation.selectHeaderLinks;
  }
});
Object.defineProperty(exports, 'selectPageTitle', {
  enumerable: true,
  get: function get() {
    return _navigation.selectPageTitle;
  }
});
Object.defineProperty(exports, 'selectPathAfterAuth', {
  enumerable: true,
  get: function get() {
    return _navigation.selectPathAfterAuth;
  }
});
Object.defineProperty(exports, 'selectIsBackDisabled', {
  enumerable: true,
  get: function get() {
    return _navigation.selectIsBackDisabled;
  }
});
Object.defineProperty(exports, 'selectIsForwardDisabled', {
  enumerable: true,
  get: function get() {
    return _navigation.selectIsForwardDisabled;
  }
});
Object.defineProperty(exports, 'selectHistoryIndex', {
  enumerable: true,
  get: function get() {
    return _navigation.selectHistoryIndex;
  }
});
Object.defineProperty(exports, 'selectHistoryStack', {
  enumerable: true,
  get: function get() {
    return _navigation.selectHistoryStack;
  }
});
Object.defineProperty(exports, 'selectActiveHistoryEntry', {
  enumerable: true,
  get: function get() {
    return _navigation.selectActiveHistoryEntry;
  }
});

var _search3 = __webpack_require__(21);

Object.defineProperty(exports, 'makeSelectSearchUris', {
  enumerable: true,
  get: function get() {
    return _search3.makeSelectSearchUris;
  }
});
Object.defineProperty(exports, 'selectSearchQuery', {
  enumerable: true,
  get: function get() {
    return _search3.selectSearchQuery;
  }
});
Object.defineProperty(exports, 'selectSearchValue', {
  enumerable: true,
  get: function get() {
    return _search3.selectSearchValue;
  }
});
Object.defineProperty(exports, 'selectIsSearching', {
  enumerable: true,
  get: function get() {
    return _search3.selectIsSearching;
  }
});
Object.defineProperty(exports, 'selectSearchUrisByQuery', {
  enumerable: true,
  get: function get() {
    return _search3.selectSearchUrisByQuery;
  }
});
Object.defineProperty(exports, 'selectWunderBarAddress', {
  enumerable: true,
  get: function get() {
    return _search3.selectWunderBarAddress;
  }
});
Object.defineProperty(exports, 'selectSearchBarFocused', {
  enumerable: true,
  get: function get() {
    return _search3.selectSearchBarFocused;
  }
});
Object.defineProperty(exports, 'selectSearchSuggestions', {
  enumerable: true,
  get: function get() {
    return _search3.selectSearchSuggestions;
  }
});

var _wallet3 = __webpack_require__(26);

Object.defineProperty(exports, 'makeSelectBlockDate', {
  enumerable: true,
  get: function get() {
    return _wallet3.makeSelectBlockDate;
  }
});
Object.defineProperty(exports, 'selectBalance', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectBalance;
  }
});
Object.defineProperty(exports, 'selectTransactionsById', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectTransactionsById;
  }
});
Object.defineProperty(exports, 'selectTransactionItems', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectTransactionItems;
  }
});
Object.defineProperty(exports, 'selectRecentTransactions', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectRecentTransactions;
  }
});
Object.defineProperty(exports, 'selectHasTransactions', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectHasTransactions;
  }
});
Object.defineProperty(exports, 'selectIsFetchingTransactions', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectIsFetchingTransactions;
  }
});
Object.defineProperty(exports, 'selectIsSendingSupport', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectIsSendingSupport;
  }
});
Object.defineProperty(exports, 'selectReceiveAddress', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectReceiveAddress;
  }
});
Object.defineProperty(exports, 'selectGettingNewAddress', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectGettingNewAddress;
  }
});
Object.defineProperty(exports, 'selectDraftTransaction', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectDraftTransaction;
  }
});
Object.defineProperty(exports, 'selectDraftTransactionAmount', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectDraftTransactionAmount;
  }
});
Object.defineProperty(exports, 'selectDraftTransactionAddress', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectDraftTransactionAddress;
  }
});
Object.defineProperty(exports, 'selectDraftTransactionError', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectDraftTransactionError;
  }
});
Object.defineProperty(exports, 'selectBlocks', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectBlocks;
  }
});
Object.defineProperty(exports, 'selectWalletIsEncrypted', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectWalletIsEncrypted;
  }
});
Object.defineProperty(exports, 'selectWalletState', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectWalletState;
  }
});
Object.defineProperty(exports, 'selectWalletEncryptPending', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectWalletEncryptPending;
  }
});
Object.defineProperty(exports, 'selectWalletEncryptSucceeded', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectWalletEncryptSucceeded;
  }
});
Object.defineProperty(exports, 'selectWalletEncryptResult', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectWalletEncryptResult;
  }
});
Object.defineProperty(exports, 'selectWalletDecryptPending', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectWalletDecryptPending;
  }
});
Object.defineProperty(exports, 'selectWalletDecryptSucceeded', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectWalletDecryptSucceeded;
  }
});
Object.defineProperty(exports, 'selectWalletDecryptResult', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectWalletDecryptResult;
  }
});
Object.defineProperty(exports, 'selectWalletUnlockPending', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectWalletUnlockPending;
  }
});
Object.defineProperty(exports, 'selectWalletUnlockSucceeded', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectWalletUnlockSucceeded;
  }
});
Object.defineProperty(exports, 'selectWalletUnlockResult', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectWalletUnlockResult;
  }
});
Object.defineProperty(exports, 'selectTransactionListFilter', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectTransactionListFilter;
  }
});

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _thumbnail_upload_statuses = __webpack_require__(48);

var THUMBNAIL_STATUSES = _interopRequireWildcard(_thumbnail_upload_statuses);

var _search4 = __webpack_require__(22);

var SEARCH_TYPES = _interopRequireWildcard(_search4);

var _settings = __webpack_require__(49);

var SETTINGS = _interopRequireWildcard(_settings);

var _transaction_types = __webpack_require__(27);

var TRANSACTIONS = _interopRequireWildcard(_transaction_types);

var _sort_options = __webpack_require__(38);

var SORT_OPTIONS = _interopRequireWildcard(_sort_options);

var _pages = __webpack_require__(39);

var PAGES = _interopRequireWildcard(_pages);

var _lbry = __webpack_require__(9);

var _lbry2 = _interopRequireDefault(_lbry);

var _lbryapi = __webpack_require__(12);

var _lbryapi2 = _interopRequireDefault(_lbryapi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// constants
exports.ACTIONS = ACTIONS;
exports.THUMBNAIL_STATUSES = THUMBNAIL_STATUSES;
exports.SEARCH_TYPES = SEARCH_TYPES;
exports.SETTINGS = SETTINGS;
exports.TRANSACTIONS = TRANSACTIONS;
exports.SORT_OPTIONS = SORT_OPTIONS;
exports.PAGES = PAGES;

// common

exports.Lbry = _lbry2.default;
exports.Lbryapi = _lbryapi2.default;
exports.selectSearchState = _search3.selectState;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
  Toasts:
    - First-in, first-out queue
    - Simple messages that are shown in response to user interactions
    - Never saved
    - If they are the result of errors, use the isError flag when creating
    - For errors that should interrupt user behavior, use Error
*/
/*:: export type ToastParams = {
  message: string,
  title?: string,
  linkText?: string,
  linkTarget?: string,
  isError?: boolean,
};*/ // @flow

/*:: export type Toast = {
  id: string,
  params: ToastParams,
};*/


/*
  Notifications:
    - List of notifications based on user interactions/app notifications
    - Always saved, but can be manually deleted
    - Can happen in the background, or because of user interaction (ex: publish confirmed)
*/
/*:: export type DoToast = {
  type: ACTIONS.CREATE_TOAST,
  data: Toast,
};*/
/*:: export type Notification = {
  id: string, // Unique id
  dateCreated: number,
  isRead: boolean, // Used to display "new" notifications that a user hasn't seen yet
  source?: string, // The type/area an notification is from. Used for sorting (ex: publishes, transactions)
  // We may want to use priority/isDismissed in the future to specify how urgent a notification is
  // and if the user should see it immediately
  // isDissmied: boolean,
  // priority?: number
};*/
/*:: export type DoNotification = {
  type: ACTIONS.CREATE_NOTIFICATION,
  data: Notification,
};*/
/*:: export type DoEditNotification = {
  type: ACTIONS.EDIT_NOTIFICATION,
  data: {
    id: string,
    isRead: boolean,
    // In the future we can add `isDismissed` if we decide to show notifications as they come in
    // Similar to Facebook's notifications in the corner of the screen
    // isDismissed: boolean,
  },
};*/


/*
  Errors:
    - First-in, first-out queue
    - Errors that should interupt user behavior
    - For errors that can be shown without interrupting a user, use Toast with the isError flag
*/
/*:: export type DoDeleteNotification = {
  type: ACTIONS.DELETE_NOTIFICATION,
  data: {
    id: string, // The id to delete
  },
};*/
/*:: export type Error = {
  title: string,
  text: string,
};*/
/*:: export type DoError = {
  type: ACTIONS.CREATE_ERROR,
  data: Error,
};*/


/*
  NotificationState
*/
/*:: export type DoDismissError = {
  type: ACTIONS.DISMISS_ERROR,
};*/
/*:: export type NotificationState = {
  notifications: Array<Notification>,
  errors: Array<Error>,
  toasts: Array<Toast>,
};*/

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var WINDOW_FOCUSED = exports.WINDOW_FOCUSED = 'WINDOW_FOCUSED';
var DAEMON_READY = exports.DAEMON_READY = 'DAEMON_READY';
var DAEMON_VERSION_MATCH = exports.DAEMON_VERSION_MATCH = 'DAEMON_VERSION_MATCH';
var DAEMON_VERSION_MISMATCH = exports.DAEMON_VERSION_MISMATCH = 'DAEMON_VERSION_MISMATCH';
var VOLUME_CHANGED = exports.VOLUME_CHANGED = 'VOLUME_CHANGED';

// Navigation
var CHANGE_AFTER_AUTH_PATH = exports.CHANGE_AFTER_AUTH_PATH = 'CHANGE_AFTER_AUTH_PATH';
var WINDOW_SCROLLED = exports.WINDOW_SCROLLED = 'WINDOW_SCROLLED';
var HISTORY_NAVIGATE = exports.HISTORY_NAVIGATE = 'HISTORY_NAVIGATE';

// Upgrades
var UPGRADE_CANCELLED = exports.UPGRADE_CANCELLED = 'UPGRADE_CANCELLED';
var DOWNLOAD_UPGRADE = exports.DOWNLOAD_UPGRADE = 'DOWNLOAD_UPGRADE';
var UPGRADE_DOWNLOAD_STARTED = exports.UPGRADE_DOWNLOAD_STARTED = 'UPGRADE_DOWNLOAD_STARTED';
var UPGRADE_DOWNLOAD_COMPLETED = exports.UPGRADE_DOWNLOAD_COMPLETED = 'UPGRADE_DOWNLOAD_COMPLETED';
var UPGRADE_DOWNLOAD_PROGRESSED = exports.UPGRADE_DOWNLOAD_PROGRESSED = 'UPGRADE_DOWNLOAD_PROGRESSED';
var CHECK_UPGRADE_AVAILABLE = exports.CHECK_UPGRADE_AVAILABLE = 'CHECK_UPGRADE_AVAILABLE';
var CHECK_UPGRADE_START = exports.CHECK_UPGRADE_START = 'CHECK_UPGRADE_START';
var CHECK_UPGRADE_SUCCESS = exports.CHECK_UPGRADE_SUCCESS = 'CHECK_UPGRADE_SUCCESS';
var CHECK_UPGRADE_FAIL = exports.CHECK_UPGRADE_FAIL = 'CHECK_UPGRADE_FAIL';
var CHECK_UPGRADE_SUBSCRIBE = exports.CHECK_UPGRADE_SUBSCRIBE = 'CHECK_UPGRADE_SUBSCRIBE';
var UPDATE_VERSION = exports.UPDATE_VERSION = 'UPDATE_VERSION';
var UPDATE_REMOTE_VERSION = exports.UPDATE_REMOTE_VERSION = 'UPDATE_REMOTE_VERSION';
var SKIP_UPGRADE = exports.SKIP_UPGRADE = 'SKIP_UPGRADE';
var START_UPGRADE = exports.START_UPGRADE = 'START_UPGRADE';
var AUTO_UPDATE_DECLINED = exports.AUTO_UPDATE_DECLINED = 'AUTO_UPDATE_DECLINED';
var AUTO_UPDATE_DOWNLOADED = exports.AUTO_UPDATE_DOWNLOADED = 'AUTO_UPDATE_DOWNLOADED';
var CLEAR_UPGRADE_TIMER = exports.CLEAR_UPGRADE_TIMER = 'CLEAR_UPGRADE_TIMER';

// Wallet
var GET_NEW_ADDRESS_STARTED = exports.GET_NEW_ADDRESS_STARTED = 'GET_NEW_ADDRESS_STARTED';
var GET_NEW_ADDRESS_COMPLETED = exports.GET_NEW_ADDRESS_COMPLETED = 'GET_NEW_ADDRESS_COMPLETED';
var FETCH_TRANSACTIONS_STARTED = exports.FETCH_TRANSACTIONS_STARTED = 'FETCH_TRANSACTIONS_STARTED';
var FETCH_TRANSACTIONS_COMPLETED = exports.FETCH_TRANSACTIONS_COMPLETED = 'FETCH_TRANSACTIONS_COMPLETED';
var UPDATE_BALANCE = exports.UPDATE_BALANCE = 'UPDATE_BALANCE';
var CHECK_ADDRESS_IS_MINE_STARTED = exports.CHECK_ADDRESS_IS_MINE_STARTED = 'CHECK_ADDRESS_IS_MINE_STARTED';
var CHECK_ADDRESS_IS_MINE_COMPLETED = exports.CHECK_ADDRESS_IS_MINE_COMPLETED = 'CHECK_ADDRESS_IS_MINE_COMPLETED';
var SEND_TRANSACTION_STARTED = exports.SEND_TRANSACTION_STARTED = 'SEND_TRANSACTION_STARTED';
var SEND_TRANSACTION_COMPLETED = exports.SEND_TRANSACTION_COMPLETED = 'SEND_TRANSACTION_COMPLETED';
var SEND_TRANSACTION_FAILED = exports.SEND_TRANSACTION_FAILED = 'SEND_TRANSACTION_FAILED';
var FETCH_BLOCK_SUCCESS = exports.FETCH_BLOCK_SUCCESS = 'FETCH_BLOCK_SUCCESS';
var SUPPORT_TRANSACTION_STARTED = exports.SUPPORT_TRANSACTION_STARTED = 'SUPPORT_TRANSACTION_STARTED';
var SUPPORT_TRANSACTION_COMPLETED = exports.SUPPORT_TRANSACTION_COMPLETED = 'SUPPORT_TRANSACTION_COMPLETED';
var SUPPORT_TRANSACTION_FAILED = exports.SUPPORT_TRANSACTION_FAILED = 'SUPPORT_TRANSACTION_FAILED';
var WALLET_ENCRYPT_START = exports.WALLET_ENCRYPT_START = 'WALLET_ENCRYPT_START';
var WALLET_ENCRYPT_COMPLETED = exports.WALLET_ENCRYPT_COMPLETED = 'WALLET_ENCRYPT_COMPLETED';
var WALLET_ENCRYPT_FAILED = exports.WALLET_ENCRYPT_FAILED = 'WALLET_ENCRYPT_FAILED';
var WALLET_UNLOCK_START = exports.WALLET_UNLOCK_START = 'WALLET_UNLOCK_START';
var WALLET_UNLOCK_COMPLETED = exports.WALLET_UNLOCK_COMPLETED = 'WALLET_UNLOCK_COMPLETED';
var WALLET_UNLOCK_FAILED = exports.WALLET_UNLOCK_FAILED = 'WALLET_UNLOCK_FAILED';
var WALLET_DECRYPT_START = exports.WALLET_DECRYPT_START = 'WALLET_DECRYPT_START';
var WALLET_DECRYPT_COMPLETED = exports.WALLET_DECRYPT_COMPLETED = 'WALLET_DECRYPT_COMPLETED';
var WALLET_DECRYPT_FAILED = exports.WALLET_DECRYPT_FAILED = 'WALLET_DECRYPT_FAILED';
var WALLET_LOCK_START = exports.WALLET_LOCK_START = 'WALLET_LOCK_START';
var WALLET_LOCK_COMPLETED = exports.WALLET_LOCK_COMPLETED = 'WALLET_LOCK_COMPLETED';
var WALLET_LOCK_FAILED = exports.WALLET_LOCK_FAILED = 'WALLET_LOCK_FAILED';
var WALLET_STATUS_START = exports.WALLET_STATUS_START = 'WALLET_STATUS_START';
var WALLET_STATUS_COMPLETED = exports.WALLET_STATUS_COMPLETED = 'WALLET_STATUS_COMPLETED';
var SET_TRANSACTION_LIST_FILTER = exports.SET_TRANSACTION_LIST_FILTER = 'SET_TRANSACTION_LIST_FILTER';
var UPDATE_CURRENT_HEIGHT = exports.UPDATE_CURRENT_HEIGHT = 'UPDATE_CURRENT_HEIGHT';

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
var FETCH_BLACK_LISTED_CONTENT_STARTED = exports.FETCH_BLACK_LISTED_CONTENT_STARTED = 'FETCH_BLACK_LISTED_CONTENT_STARTED';
var FETCH_BLACK_LISTED_CONTENT_COMPLETED = exports.FETCH_BLACK_LISTED_CONTENT_COMPLETED = 'FETCH_BLACK_LISTED_CONTENT_COMPLETED';
var FETCH_BLACK_LISTED_CONTENT_FAILED = exports.FETCH_BLACK_LISTED_CONTENT_FAILED = 'FETCH_BLACK_LISTED_CONTENT_FAILED';
var BLACK_LISTED_CONTENT_SUBSCRIBE = exports.BLACK_LISTED_CONTENT_SUBSCRIBE = 'BLACK_LISTED_CONTENT_SUBSCRIBE';
var SET_PLAYING_URI = exports.SET_PLAYING_URI = 'SET_PLAYING_URI';
var SET_CONTENT_POSITION = exports.SET_CONTENT_POSITION = 'SET_CONTENT_POSITION';
var SET_CONTENT_LAST_VIEWED = exports.SET_CONTENT_LAST_VIEWED = 'SET_CONTENT_LAST_VIEWED';
var CLEAR_CONTENT_HISTORY_URI = exports.CLEAR_CONTENT_HISTORY_URI = 'CLEAR_CONTENT_HISTORY_URI';
var CLEAR_CONTENT_HISTORY_ALL = exports.CLEAR_CONTENT_HISTORY_ALL = 'CLEAR_CONTENT_HISTORY_ALL';

// Files
var FILE_LIST_STARTED = exports.FILE_LIST_STARTED = 'FILE_LIST_STARTED';
var FILE_LIST_SUCCEEDED = exports.FILE_LIST_SUCCEEDED = 'FILE_LIST_SUCCEEDED';
var FETCH_FILE_INFO_STARTED = exports.FETCH_FILE_INFO_STARTED = 'FETCH_FILE_INFO_STARTED';
var FETCH_FILE_INFO_COMPLETED = exports.FETCH_FILE_INFO_COMPLETED = 'FETCH_FILE_INFO_COMPLETED';
var FETCH_COST_INFO_STARTED = exports.FETCH_COST_INFO_STARTED = 'FETCH_COST_INFO_STARTED';
var FETCH_COST_INFO_COMPLETED = exports.FETCH_COST_INFO_COMPLETED = 'FETCH_COST_INFO_COMPLETED';
var LOADING_VIDEO_STARTED = exports.LOADING_VIDEO_STARTED = 'LOADING_VIDEO_STARTED';
var LOADING_VIDEO_COMPLETED = exports.LOADING_VIDEO_COMPLETED = 'LOADING_VIDEO_COMPLETED';
var LOADING_VIDEO_FAILED = exports.LOADING_VIDEO_FAILED = 'LOADING_VIDEO_FAILED';
var DOWNLOADING_STARTED = exports.DOWNLOADING_STARTED = 'DOWNLOADING_STARTED';
var DOWNLOADING_PROGRESSED = exports.DOWNLOADING_PROGRESSED = 'DOWNLOADING_PROGRESSED';
var DOWNLOADING_COMPLETED = exports.DOWNLOADING_COMPLETED = 'DOWNLOADING_COMPLETED';
var DOWNLOADING_CANCELED = exports.DOWNLOADING_CANCELED = 'DOWNLOADING_CANCELED';
var PLAY_VIDEO_STARTED = exports.PLAY_VIDEO_STARTED = 'PLAY_VIDEO_STARTED';
var FETCH_AVAILABILITY_STARTED = exports.FETCH_AVAILABILITY_STARTED = 'FETCH_AVAILABILITY_STARTED';
var FETCH_AVAILABILITY_COMPLETED = exports.FETCH_AVAILABILITY_COMPLETED = 'FETCH_AVAILABILITY_COMPLETED';
var FILE_DELETE = exports.FILE_DELETE = 'FILE_DELETE';
var SET_FILE_LIST_SORT = exports.SET_FILE_LIST_SORT = 'SET_FILE_LIST_SORT';

// Search
var SEARCH_START = exports.SEARCH_START = 'SEARCH_START';
var SEARCH_SUCCESS = exports.SEARCH_SUCCESS = 'SEARCH_SUCCESS';
var SEARCH_FAIL = exports.SEARCH_FAIL = 'SEARCH_FAIL';
var UPDATE_SEARCH_QUERY = exports.UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY';
var UPDATE_SEARCH_SUGGESTIONS = exports.UPDATE_SEARCH_SUGGESTIONS = 'UPDATE_SEARCH_SUGGESTIONS';
var SEARCH_FOCUS = exports.SEARCH_FOCUS = 'SEARCH_FOCUS';
var SEARCH_BLUR = exports.SEARCH_BLUR = 'SEARCH_BLUR';

// Settings
var DAEMON_SETTINGS_RECEIVED = exports.DAEMON_SETTINGS_RECEIVED = 'DAEMON_SETTINGS_RECEIVED';
var CLIENT_SETTING_CHANGED = exports.CLIENT_SETTING_CHANGED = 'CLIENT_SETTING_CHANGED';
var UPDATE_IS_NIGHT = exports.UPDATE_IS_NIGHT = 'UPDATE_IS_NIGHT';

// User
var AUTHENTICATION_STARTED = exports.AUTHENTICATION_STARTED = 'AUTHENTICATION_STARTED';
var AUTHENTICATION_SUCCESS = exports.AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
var AUTHENTICATION_FAILURE = exports.AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE';
var USER_EMAIL_DECLINE = exports.USER_EMAIL_DECLINE = 'USER_EMAIL_DECLINE';
var USER_EMAIL_NEW_STARTED = exports.USER_EMAIL_NEW_STARTED = 'USER_EMAIL_NEW_STARTED';
var USER_EMAIL_NEW_SUCCESS = exports.USER_EMAIL_NEW_SUCCESS = 'USER_EMAIL_NEW_SUCCESS';
var USER_EMAIL_NEW_EXISTS = exports.USER_EMAIL_NEW_EXISTS = 'USER_EMAIL_NEW_EXISTS';
var USER_EMAIL_NEW_FAILURE = exports.USER_EMAIL_NEW_FAILURE = 'USER_EMAIL_NEW_FAILURE';
var USER_EMAIL_VERIFY_SET = exports.USER_EMAIL_VERIFY_SET = 'USER_EMAIL_VERIFY_SET';
var USER_EMAIL_VERIFY_STARTED = exports.USER_EMAIL_VERIFY_STARTED = 'USER_EMAIL_VERIFY_STARTED';
var USER_EMAIL_VERIFY_SUCCESS = exports.USER_EMAIL_VERIFY_SUCCESS = 'USER_EMAIL_VERIFY_SUCCESS';
var USER_EMAIL_VERIFY_FAILURE = exports.USER_EMAIL_VERIFY_FAILURE = 'USER_EMAIL_VERIFY_FAILURE';
var USER_EMAIL_VERIFY_RETRY = exports.USER_EMAIL_VERIFY_RETRY = 'USER_EMAIL_VERIFY_RETRY';
var USER_PHONE_RESET = exports.USER_PHONE_RESET = 'USER_PHONE_RESET';
var USER_PHONE_NEW_STARTED = exports.USER_PHONE_NEW_STARTED = 'USER_PHONE_NEW_STARTED';
var USER_PHONE_NEW_SUCCESS = exports.USER_PHONE_NEW_SUCCESS = 'USER_PHONE_NEW_SUCCESS';
var USER_PHONE_NEW_FAILURE = exports.USER_PHONE_NEW_FAILURE = 'USER_PHONE_NEW_FAILURE';
var USER_PHONE_VERIFY_STARTED = exports.USER_PHONE_VERIFY_STARTED = 'USER_PHONE_VERIFY_STARTED';
var USER_PHONE_VERIFY_SUCCESS = exports.USER_PHONE_VERIFY_SUCCESS = 'USER_PHONE_VERIFY_SUCCESS';
var USER_PHONE_VERIFY_FAILURE = exports.USER_PHONE_VERIFY_FAILURE = 'USER_PHONE_VERIFY_FAILURE';
var USER_IDENTITY_VERIFY_STARTED = exports.USER_IDENTITY_VERIFY_STARTED = 'USER_IDENTITY_VERIFY_STARTED';
var USER_IDENTITY_VERIFY_SUCCESS = exports.USER_IDENTITY_VERIFY_SUCCESS = 'USER_IDENTITY_VERIFY_SUCCESS';
var USER_IDENTITY_VERIFY_FAILURE = exports.USER_IDENTITY_VERIFY_FAILURE = 'USER_IDENTITY_VERIFY_FAILURE';
var USER_FETCH_STARTED = exports.USER_FETCH_STARTED = 'USER_FETCH_STARTED';
var USER_FETCH_SUCCESS = exports.USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';
var USER_FETCH_FAILURE = exports.USER_FETCH_FAILURE = 'USER_FETCH_FAILURE';
var USER_INVITE_STATUS_FETCH_STARTED = exports.USER_INVITE_STATUS_FETCH_STARTED = 'USER_INVITE_STATUS_FETCH_STARTED';
var USER_INVITE_STATUS_FETCH_SUCCESS = exports.USER_INVITE_STATUS_FETCH_SUCCESS = 'USER_INVITE_STATUS_FETCH_SUCCESS';
var USER_INVITE_STATUS_FETCH_FAILURE = exports.USER_INVITE_STATUS_FETCH_FAILURE = 'USER_INVITE_STATUS_FETCH_FAILURE';
var USER_INVITE_NEW_STARTED = exports.USER_INVITE_NEW_STARTED = 'USER_INVITE_NEW_STARTED';
var USER_INVITE_NEW_SUCCESS = exports.USER_INVITE_NEW_SUCCESS = 'USER_INVITE_NEW_SUCCESS';
var USER_INVITE_NEW_FAILURE = exports.USER_INVITE_NEW_FAILURE = 'USER_INVITE_NEW_FAILURE';
var FETCH_ACCESS_TOKEN_SUCCESS = exports.FETCH_ACCESS_TOKEN_SUCCESS = 'FETCH_ACCESS_TOKEN_SUCCESS';

// Rewards
var FETCH_REWARDS_STARTED = exports.FETCH_REWARDS_STARTED = 'FETCH_REWARDS_STARTED';
var FETCH_REWARDS_COMPLETED = exports.FETCH_REWARDS_COMPLETED = 'FETCH_REWARDS_COMPLETED';
var CLAIM_REWARD_STARTED = exports.CLAIM_REWARD_STARTED = 'CLAIM_REWARD_STARTED';
var CLAIM_REWARD_SUCCESS = exports.CLAIM_REWARD_SUCCESS = 'CLAIM_REWARD_SUCCESS';
var CLAIM_REWARD_FAILURE = exports.CLAIM_REWARD_FAILURE = 'CLAIM_REWARD_FAILURE';
var CLAIM_REWARD_CLEAR_ERROR = exports.CLAIM_REWARD_CLEAR_ERROR = 'CLAIM_REWARD_CLEAR_ERROR';
var FETCH_REWARD_CONTENT_COMPLETED = exports.FETCH_REWARD_CONTENT_COMPLETED = 'FETCH_REWARD_CONTENT_COMPLETED';

// Language
var DOWNLOAD_LANGUAGE_SUCCEEDED = exports.DOWNLOAD_LANGUAGE_SUCCEEDED = 'DOWNLOAD_LANGUAGE_SUCCEEDED';
var DOWNLOAD_LANGUAGE_FAILED = exports.DOWNLOAD_LANGUAGE_FAILED = 'DOWNLOAD_LANGUAGE_FAILED';

// ShapeShift
var GET_SUPPORTED_COINS_START = exports.GET_SUPPORTED_COINS_START = 'GET_SUPPORTED_COINS_START';
var GET_SUPPORTED_COINS_SUCCESS = exports.GET_SUPPORTED_COINS_SUCCESS = 'GET_SUPPORTED_COINS_SUCCESS';
var GET_SUPPORTED_COINS_FAIL = exports.GET_SUPPORTED_COINS_FAIL = 'GET_SUPPORTED_COINS_FAIL';
var GET_COIN_STATS_START = exports.GET_COIN_STATS_START = 'GET_COIN_STATS_START';
var GET_COIN_STATS_SUCCESS = exports.GET_COIN_STATS_SUCCESS = 'GET_COIN_STATS_SUCCESS';
var GET_COIN_STATS_FAIL = exports.GET_COIN_STATS_FAIL = 'GET_COIN_STATS_FAIL';
var PREPARE_SHAPE_SHIFT_START = exports.PREPARE_SHAPE_SHIFT_START = 'PREPARE_SHAPE_SHIFT_START';
var PREPARE_SHAPE_SHIFT_SUCCESS = exports.PREPARE_SHAPE_SHIFT_SUCCESS = 'PREPARE_SHAPE_SHIFT_SUCCESS';
var PREPARE_SHAPE_SHIFT_FAIL = exports.PREPARE_SHAPE_SHIFT_FAIL = 'PREPARE_SHAPE_SHIFT_FAIL';
var GET_ACTIVE_SHIFT_START = exports.GET_ACTIVE_SHIFT_START = 'GET_ACTIVE_SHIFT_START';
var GET_ACTIVE_SHIFT_SUCCESS = exports.GET_ACTIVE_SHIFT_SUCCESS = 'GET_ACTIVE_SHIFT_SUCCESS';
var GET_ACTIVE_SHIFT_FAIL = exports.GET_ACTIVE_SHIFT_FAIL = 'GET_ACTIVE_SHIFT_FAIL';
var CLEAR_SHAPE_SHIFT = exports.CLEAR_SHAPE_SHIFT = 'CLEAR_SHAPE_SHIFT';

// Subscriptions
var CHANNEL_SUBSCRIBE = exports.CHANNEL_SUBSCRIBE = 'CHANNEL_SUBSCRIBE';
var CHANNEL_UNSUBSCRIBE = exports.CHANNEL_UNSUBSCRIBE = 'CHANNEL_UNSUBSCRIBE';
var HAS_FETCHED_SUBSCRIPTIONS = exports.HAS_FETCHED_SUBSCRIPTIONS = 'HAS_FETCHED_SUBSCRIPTIONS';
var SET_SUBSCRIPTION_LATEST = exports.SET_SUBSCRIPTION_LATEST = 'SET_SUBSCRIPTION_LATEST';
var SET_SUBSCRIPTION_NOTIFICATION = exports.SET_SUBSCRIPTION_NOTIFICATION = 'SET_SUBSCRIPTION_NOTIFICATION';
var SET_SUBSCRIPTION_NOTIFICATIONS = exports.SET_SUBSCRIPTION_NOTIFICATIONS = 'SET_SUBSCRIPTION_NOTIFICATIONS';
var CHECK_SUBSCRIPTION_STARTED = exports.CHECK_SUBSCRIPTION_STARTED = 'CHECK_SUBSCRIPTION_STARTED';
var CHECK_SUBSCRIPTION_COMPLETED = exports.CHECK_SUBSCRIPTION_COMPLETED = 'CHECK_SUBSCRIPTION_COMPLETED';
var CHECK_SUBSCRIPTIONS_SUBSCRIBE = exports.CHECK_SUBSCRIPTIONS_SUBSCRIBE = 'CHECK_SUBSCRIPTIONS_SUBSCRIBE';

// Publishing
var CLEAR_PUBLISH = exports.CLEAR_PUBLISH = 'CLEAR_PUBLISH';
var UPDATE_PUBLISH_FORM = exports.UPDATE_PUBLISH_FORM = 'UPDATE_PUBLISH_FORM';
var PUBLISH_START = exports.PUBLISH_START = 'PUBLISH_START';
var PUBLISH_SUCCESS = exports.PUBLISH_SUCCESS = 'PUBLISH_SUCCESS';
var PUBLISH_FAIL = exports.PUBLISH_FAIL = 'PUBLISH_FAIL';
var CLEAR_PUBLISH_ERROR = exports.CLEAR_PUBLISH_ERROR = 'CLEAR_PUBLISH_ERROR';
var REMOVE_PENDING_PUBLISH = exports.REMOVE_PENDING_PUBLISH = 'REMOVE_PENDING_PUBLISH';
var DO_PREPARE_EDIT = exports.DO_PREPARE_EDIT = 'DO_PREPARE_EDIT';

// Notifications
var CREATE_NOTIFICATION = exports.CREATE_NOTIFICATION = 'CREATE_NOTIFICATION';
var EDIT_NOTIFICATION = exports.EDIT_NOTIFICATION = 'EDIT_NOTIFICATION';
var DELETE_NOTIFICATION = exports.DELETE_NOTIFICATION = 'DELETE_NOTIFICATION';
var CREATE_TOAST = exports.CREATE_TOAST = 'CREATE_TOAST';
var DISMISS_TOAST = exports.DISMISS_TOAST = 'DISMISS_TOAST';
var CREATE_ERROR = exports.CREATE_ERROR = 'CREATE_ERROR';
var DISMISS_ERROR = exports.DISMISS_ERROR = 'DISMISS_ERROR';

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.parseURI = parseURI;
exports.buildURI = buildURI;
exports.normalizeURI = normalizeURI;
exports.isURIValid = isURIValid;
exports.isNameValid = isNameValid;
exports.isURIClaimable = isURIClaimable;
exports.convertToShareLink = convertToShareLink;
var channelNameMinLength = 1;
var claimIdMaxLength = 40;

var regexInvalidURI = exports.regexInvalidURI = /[^A-Za-z0-9-]/g;
var regexAddress = exports.regexAddress = /^b(?=[^0OIl]{32,33})[0-9A-Za-z]{32,33}$/;

/**
 * Parses a LBRY name into its component parts. Throws errors with user-friendly
 * messages for invalid names.
 *
 * N.B. that "name" indicates the value in the name position of the URI. For
 * claims for channel content, this will actually be the channel name, and
 * the content name is in the path (e.g. lbry://@channel/content)
 *
 * In most situations, you'll want to use the contentName and channelName keys
 * and ignore the name key.
 *
 * Returns a dictionary with keys:
 *   - name (string): The value in the "name" position in the URI. Note that this
 *                    could be either content name or channel name; see above.
 *   - path (string, if persent)
 *   - claimSequence (int, if present)
 *   - bidPosition (int, if present)
 *   - claimId (string, if present)
 *   - isChannel (boolean)
 *   - contentName (string): For anon claims, the name; for channel claims, the path
 *   - channelName (string, if present): Channel name without @
 */
function parseURI(URI) {
  var requireProto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  // Break into components. Empty sub-matches are converted to null
  var componentsRegex = new RegExp('^((?:lbry://)?)' + // protocol
  '([^:$#/]*)' + // claim name (stops at the first separator or end)
  '([:$#]?)([^/]*)' + // modifier separator, modifier (stops at the first path separator or end)
  '(/?)(.*)' // path separator, path
  );

  var _componentsRegex$exec = componentsRegex.exec(URI).slice(1).map(function (match) {
    return match || null;
  }),
      _componentsRegex$exec2 = _slicedToArray(_componentsRegex$exec, 6),
      proto = _componentsRegex$exec2[0],
      claimName = _componentsRegex$exec2[1],
      modSep = _componentsRegex$exec2[2],
      modVal = _componentsRegex$exec2[3],
      pathSep = _componentsRegex$exec2[4],
      path = _componentsRegex$exec2[5];

  var contentName = void 0;

  // Validate protocol
  if (requireProto && !proto) {
    throw new Error(__('LBRY URIs must include a protocol prefix (lbry://).'));
  }

  // Validate and process name
  if (!claimName) {
    throw new Error(__('URI does not include name.'));
  }

  var isChannel = claimName.startsWith('@');
  var channelName = isChannel ? claimName.slice(1) : claimName;

  if (isChannel) {
    if (!channelName) {
      throw new Error(__('No channel name after @.'));
    }

    if (channelName.length < channelNameMinLength) {
      throw new Error(__('Channel names must be at least %s characters.', channelNameMinLength));
    }

    contentName = path;
  }

  var nameBadChars = (channelName || claimName).match(regexInvalidURI);
  if (nameBadChars) {
    throw new Error(__('Invalid character %s in name: %s.', nameBadChars.length === 1 ? '' : 's', nameBadChars.join(', ')));
  }

  // Validate and process modifier (claim ID, bid position or claim sequence)
  var claimId = void 0;
  var claimSequence = void 0;
  var bidPosition = void 0;
  if (modSep) {
    if (!modVal) {
      throw new Error(__('No modifier provided after separator %s.', modSep));
    }

    if (modSep === '#') {
      claimId = modVal;
    } else if (modSep === ':') {
      claimSequence = modVal;
    } else if (modSep === '$') {
      bidPosition = modVal;
    }
  }

  if (claimId && (claimId.length > claimIdMaxLength || !claimId.match(/^[0-9a-f]+$/))) {
    throw new Error(__('Invalid claim ID %s.', claimId));
  }

  if (claimSequence && !claimSequence.match(/^-?[1-9][0-9]*$/)) {
    throw new Error(__('Claim sequence must be a number.'));
  }

  if (bidPosition && !bidPosition.match(/^-?[1-9][0-9]*$/)) {
    throw new Error(__('Bid position must be a number.'));
  }

  // Validate and process path
  if (path) {
    if (!isChannel) {
      throw new Error(__('Only channel URIs may have a path.'));
    }

    var pathBadChars = path.match(regexInvalidURI);
    if (pathBadChars) {
      throw new Error(__('Invalid character in path: %s', pathBadChars.join(', ')));
    }

    contentName = path;
  } else if (pathSep) {
    throw new Error(__('No path provided after /'));
  }

  return _extends({
    claimName: claimName,
    path: path,
    isChannel: isChannel
  }, contentName ? { contentName: contentName } : {}, channelName ? { channelName: channelName } : {}, claimSequence ? { claimSequence: parseInt(claimSequence, 10) } : {}, bidPosition ? { bidPosition: parseInt(bidPosition, 10) } : {}, claimId ? { claimId: claimId } : {}, path ? { path: path } : {});
}

/**
 * Takes an object in the same format returned by parse() and builds a URI.
 *
 * The channelName key will accept names with or without the @ prefix.
 */
function buildURI(URIObj) {
  var includeProto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var protoDefault = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'lbry://';
  var claimId = URIObj.claimId,
      claimSequence = URIObj.claimSequence,
      bidPosition = URIObj.bidPosition,
      contentName = URIObj.contentName,
      channelName = URIObj.channelName;
  var claimName = URIObj.claimName,
      path = URIObj.path;


  if (channelName) {
    var channelNameFormatted = channelName.startsWith('@') ? channelName : '@' + channelName;
    if (!claimName) {
      claimName = channelNameFormatted;
    } else if (claimName !== channelNameFormatted) {
      throw new Error(__('Received a channel content URI, but claim name and channelName do not match. "name" represents the value in the name position of the URI (lbry://name...), which for channel content will be the channel name. In most cases, to construct a channel URI you should just pass channelName and contentName.'));
    }
  }

  if (contentName) {
    if (!claimName) {
      claimName = contentName;
    } else if (!path) {
      path = contentName;
    }
    if (path && path !== contentName) {
      throw new Error(__('Path and contentName do not match. Only one is required; most likely you wanted contentName.'));
    }
  }

  return (includeProto ? protoDefault : '') + claimName + (claimId ? '#' + claimId : '') + (claimSequence ? ':' + claimSequence : '') + (bidPosition ? '' + bidPosition : '') + (path ? '/' + path : '');
}

/* Takes a parseable LBRY URI and converts it to standard, canonical format */
function normalizeURI(URI) {
  var _parseURI = parseURI(URI),
      claimName = _parseURI.claimName,
      path = _parseURI.path,
      bidPosition = _parseURI.bidPosition,
      claimSequence = _parseURI.claimSequence,
      claimId = _parseURI.claimId;

  return buildURI({ claimName: claimName, path: path, claimSequence: claimSequence, bidPosition: bidPosition, claimId: claimId });
}

function isURIValid(URI) {
  var parts = void 0;
  try {
    parts = parseURI(normalizeURI(URI));
  } catch (error) {
    return false;
  }
  return parts && parts.claimName;
}

function isNameValid(claimName) {
  var checkCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var regexp = new RegExp('^[a-z0-9-]+$', checkCase ? '' : 'i');
  return regexp.test(claimName);
}

function isURIClaimable(URI) {
  var parts = void 0;
  try {
    parts = parseURI(normalizeURI(URI));
  } catch (error) {
    return false;
  }
  return parts && parts.claimName && !parts.claimId && !parts.bidPosition && !parts.claimSequence && !parts.isChannel && !parts.path;
}

function convertToShareLink(URI) {
  var _parseURI2 = parseURI(URI),
      claimName = _parseURI2.claimName,
      path = _parseURI2.path,
      bidPosition = _parseURI2.bidPosition,
      claimSequence = _parseURI2.claimSequence,
      claimId = _parseURI2.claimId;

  return buildURI({ claimName: claimName, path: path, claimSequence: claimSequence, bidPosition: bidPosition, claimId: claimId }, true, 'https://open.lbry.io/');
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doToast = doToast;
exports.doDismissToast = doDismissToast;
exports.doError = doError;
exports.doDismissError = doDismissError;

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _v = __webpack_require__(5);

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// @flow
/*:: import type { ToastParams } from 'types/Notification';*/
function doToast(params /*: ToastParams*/) {
  if (!params) {
    throw Error("'params' object is required to create a toast notification");
  }

  return {
    type: ACTIONS.CREATE_TOAST,
    data: {
      id: (0, _v2.default)(),
      params: params
    }
  };
}

function doDismissToast() {
  return {
    type: ACTIONS.DISMISS_TOAST
  };
}

function doError(error /*: string | {}*/) {
  return {
    type: ACTIONS.CREATE_ERROR,
    data: {
      error: error
    }
  };
}

function doDismissError() {
  return {
    type: ACTIONS.DISMISS_ERROR
  };
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(6);
var bytesToUuid = __webpack_require__(7);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && msCrypto.getRandomValues.bind(msCrypto));
if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.doResolveUris = doResolveUris;
exports.doResolveUri = doResolveUri;
exports.doFetchClaimListMine = doFetchClaimListMine;
exports.doAbandonClaim = doAbandonClaim;
exports.doFetchFeaturedUris = doFetchFeaturedUris;
exports.doFetchTrendingUris = doFetchTrendingUris;
exports.doFetchClaimsByChannel = doFetchClaimsByChannel;
exports.doFetchClaimCountByChannel = doFetchClaimCountByChannel;

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _lbry = __webpack_require__(9);

var _lbry2 = _interopRequireDefault(_lbry);

var _lbryapi = __webpack_require__(12);

var _lbryapi2 = _interopRequireDefault(_lbryapi);

var _lbryURI = __webpack_require__(3);

var _notifications = __webpack_require__(4);

var _claims = __webpack_require__(17);

var _batchActions = __webpack_require__(24);

var _wallet = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function doResolveUris(uris) {
  return function (dispatch, getState) {
    var normalizedUris = uris.map(_lbryURI.normalizeURI);
    var state = getState();

    // Filter out URIs that are already resolving
    var resolvingUris = (0, _claims.selectResolvingUris)(state);
    var urisToResolve = normalizedUris.filter(function (uri) {
      return !resolvingUris.includes(uri);
    });

    if (urisToResolve.length === 0) {
      return;
    }

    dispatch({
      type: ACTIONS.RESOLVE_URIS_STARTED,
      data: { uris: normalizedUris }
    });

    var resolveInfo = {};
    _lbry2.default.resolve({ uris: urisToResolve }).then(function (result) {
      Object.entries(result).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            uri = _ref2[0],
            uriResolveInfo = _ref2[1];

        var fallbackResolveInfo = {
          claim: null,
          claimsInChannel: null,
          certificate: null
        };

        var _ref3 = uriResolveInfo && !uriResolveInfo.error ? uriResolveInfo : fallbackResolveInfo,
            claim = _ref3.claim,
            certificate = _ref3.certificate,
            claimsInChannel = _ref3.claims_in_channel;

        resolveInfo[uri] = { claim: claim, certificate: certificate, claimsInChannel: claimsInChannel };
      });

      dispatch({
        type: ACTIONS.RESOLVE_URIS_COMPLETED,
        data: { resolveInfo: resolveInfo }
      });
    });
  };
}

function doResolveUri(uri) {
  return doResolveUris([uri]);
}

function doFetchClaimListMine() {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.FETCH_CLAIM_LIST_MINE_STARTED
    });

    _lbry2.default.claim_list_mine().then(function (claims) {
      dispatch({
        type: ACTIONS.FETCH_CLAIM_LIST_MINE_COMPLETED,
        data: {
          claims: claims
        }
      });
    });
  };
}

function doAbandonClaim(txid, nout) {
  return function (dispatch, getState) {
    var state = getState();
    var myClaims = (0, _claims.selectMyClaimsRaw)(state);

    var _myClaims$find = myClaims.find(function (claim) {
      return claim.txid === txid && claim.nout === nout;
    }),
        claimId = _myClaims$find.claim_id;

    dispatch({
      type: ACTIONS.ABANDON_CLAIM_STARTED,
      data: {
        claimId: claimId
      }
    });

    var errorCallback = function errorCallback() {
      dispatch((0, _notifications.doToast)({
        message: 'Transaction failed',
        isError: true
      }));
    };

    var successCallback = function successCallback(results) {
      if (results.success === true) {
        dispatch({
          type: ACTIONS.ABANDON_CLAIM_SUCCEEDED,
          data: {
            claimId: claimId
          }
        });
        dispatch((0, _notifications.doToast)({
          message: 'Successfully abandoned your claim'
        }));

        // After abandoning, call claim_list_mine to show the claim as abandoned
        // Also fetch transactions to show the new abandon transaction
        dispatch(doFetchClaimListMine());
        dispatch((0, _wallet.doFetchTransactions)());
      } else {
        dispatch((0, _notifications.doToast)({
          message: 'Error abandoning claim',
          isError: true
        }));
      }
    };

    _lbry2.default.claim_abandon({
      txid: txid,
      nout: nout
    }).then(successCallback, errorCallback);
  };
}

function doFetchFeaturedUris() {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.FETCH_FEATURED_CONTENT_STARTED
    });

    var success = function success(_ref4) {
      var Uris = _ref4.Uris;

      var urisToResolve = [];
      Object.keys(Uris).forEach(function (category) {
        urisToResolve = [].concat(_toConsumableArray(urisToResolve), _toConsumableArray(Uris[category]));
      });

      var actions = [doResolveUris(urisToResolve), {
        type: ACTIONS.FETCH_FEATURED_CONTENT_COMPLETED,
        data: {
          uris: Uris,
          success: true
        }
      }];
      dispatch(_batchActions.batchActions.apply(undefined, actions));
    };

    var failure = function failure() {
      dispatch({
        type: ACTIONS.FETCH_FEATURED_CONTENT_COMPLETED,
        data: {
          uris: {}
        }
      });
    };

    _lbryapi2.default.call('file', 'list_homepage').then(success, failure);
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
      var actions = [doResolveUris(urisToResolve), {
        type: ACTIONS.FETCH_TRENDING_CONTENT_COMPLETED,
        data: {
          uris: data,
          success: true
        }
      }];
      dispatch(_batchActions.batchActions.apply(undefined, actions));
    };

    var failure = function failure() {
      dispatch({
        type: ACTIONS.FETCH_TRENDING_CONTENT_COMPLETED,
        data: {
          uris: []
        }
      });
    };

    _lbryapi2.default.call('file', 'list_trending').then(success, failure);
  };
}

function doFetchClaimsByChannel(uri, page) {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.FETCH_CHANNEL_CLAIMS_STARTED,
      data: { uri: uri, page: page }
    });

    _lbry2.default.claim_list_by_channel({ uri: uri, page: page || 1 }).then(function (result) {
      var claimResult = result[uri] || {};
      var claimsInChannel = claimResult.claims_in_channel,
          returnedPage = claimResult.returned_page;


      dispatch({
        type: ACTIONS.FETCH_CHANNEL_CLAIMS_COMPLETED,
        data: {
          uri: uri,
          claims: claimsInChannel || [],
          page: returnedPage || undefined
        }
      });
    });
  };
}

function doFetchClaimCountByChannel(uri) {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.FETCH_CHANNEL_CLAIM_COUNT_STARTED,
      data: { uri: uri }
    });

    _lbry2.default.claim_list_by_channel({ uri: uri }).then(function (result) {
      var claimResult = result[uri];
      var totalClaims = claimResult ? claimResult.claims_in_channel : 0;

      dispatch({
        type: ACTIONS.FETCH_CHANNEL_CLAIM_COUNT_COMPLETED,
        data: {
          uri: uri,
          totalClaims: totalClaims
        }
      });
    });
  };
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(10);

var CHECK_DAEMON_STARTED_TRY_NUMBER = 200; // @flow


var Lbry = {
  isConnected: false,
  daemonConnectionString: 'http://localhost:5279',
  pendingPublishTimeout: 20 * 60 * 1000
};

function checkAndParse(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  }
  return response.json().then(function (json) {
    var error = void 0;
    if (json.error) {
      error = new Error(json.error);
    } else {
      error = new Error('Protocol error with unknown response signature');
    }
    return Promise.reject(error);
  });
}

function apiCall(method /*: string*/, params /*: ?{}*/, resolve /*: Function*/, reject /*: Function*/) {
  var counter = new Date().getTime();
  var options = {
    method: 'POST',
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: method,
      params: params,
      id: counter
    })
  };

  return fetch(Lbry.daemonConnectionString, options).then(checkAndParse).then(function (response) {
    var error = response.error || response.result && response.result.error;

    if (error) {
      return reject(error);
    }
    return resolve(response.result);
  }).catch(reject);
}

var daemonCallWithResult = function daemonCallWithResult(name) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new Promise(function (resolve, reject) {
    apiCall(name, params, function (result) {
      resolve(result);
    }, reject);
  });
};

// blobs
Lbry.blob_delete = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('blob_delete', params);
};
Lbry.blob_list = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('blob_list', params);
};

// core
Lbry.status = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('status', params);
};
Lbry.version = function () {
  return daemonCallWithResult('version', {});
};
Lbry.file_delete = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('file_delete', params);
};
Lbry.file_set_status = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('file_set_status', params);
};

// claims
Lbry.claim_list_by_channel = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('claim_list_by_channel', params);
};

// wallet
Lbry.account_balance = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('account_balance', params);
};
Lbry.account_decrypt = function () {
  return daemonCallWithResult('account_decrypt', {});
};
Lbry.account_encrypt = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('account_encrypt', params);
};
Lbry.address_is_mine = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('address_is_mine', params);
};
Lbry.wallet_lock = function () {
  return daemonCallWithResult('wallet_lock', {});
};
Lbry.address_unused = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('address_unused', params);
};
Lbry.wallet_send = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('wallet_send', params);
};
Lbry.account_unlock = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('account_unlock', params);
};
Lbry.address_unused = function () {
  return daemonCallWithResult('address_unused', {});
};
Lbry.claim_tip = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('claim_tip', params);
};

// transactions
Lbry.transaction_list = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('transaction_list', params);
};

Lbry.connectPromise = null;
Lbry.connect = function () {
  if (Lbry.connectPromise === null) {
    Lbry.connectPromise = new Promise(function (resolve, reject) {
      var tryNum = 0;
      // Check every half second to see if the daemon is accepting connections
      function checkDaemonStarted() {
        tryNum += 1;
        Lbry.status().then(resolve).catch(function () {
          if (tryNum <= CHECK_DAEMON_STARTED_TRY_NUMBER) {
            setTimeout(checkDaemonStarted, tryNum < 50 ? 400 : 1000);
          } else {
            reject(new Error('Unable to connect to LBRY'));
          }
        });
      }

      checkDaemonStarted();
    });
  }

  return Lbry.connectPromise;
};

Lbry.getMediaType = function (contentType, extname) {
  if (extname) {
    var formats = [[/^(mp4|m4v|webm|flv|f4v|ogv)$/i, 'video'], [/^(mp3|m4a|aac|wav|flac|ogg|opus)$/i, 'audio'], [/^(html|htm|xml|pdf|odf|doc|docx|md|markdown|txt|epub|org)$/i, 'document'], [/^(stl|obj|fbx|gcode)$/i, '3D-file']];
    var res = formats.reduce(function (ret, testpair) {
      switch (testpair[0].test(ret)) {
        case true:
          return testpair[1];
        default:
          return ret;
      }
    }, extname);
    return res === extname ? 'unknown' : res;
  } else if (contentType) {
    return (/^[^/]+/.exec(contentType)[0]
    );
  }
  return 'unknown';
};

/**
 * Wrappers for API methods to simulate missing or future behavior. Unlike the old-style stubs,
 * these are designed to be transparent wrappers around the corresponding API methods.
 */

/**
 * Returns results from the file_list API method, plus dummy entries for pending publishes.
 * (If a real publish with the same name is found, the pending publish will be ignored and removed.)
 */
Lbry.file_list = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    apiCall('file_list', params, function (fileInfos) {
      resolve(fileInfos);
    }, reject);
  });
};

Lbry.claim_list_mine = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    apiCall('claim_list_mine', params, function (claims) {
      resolve(claims);
    }, reject);
  });
};

Lbry.get = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    apiCall('get', params, function (streamInfo) {
      resolve(streamInfo);
    }, reject);
  });
};

Lbry.resolve = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    apiCall('resolve', params, function (data) {
      if ('uri' in params) {
        // If only a single URI was requested, don't nest the results in an object
        resolve(data && data[params.uri] ? data[params.uri] : {});
      } else {
        resolve(data || {});
      }
    }, reject);
  });
};

var lbryProxy = new Proxy(Lbry, {
  get: function get(target, name) {
    if (name in target) {
      return target[name];
    }

    return function () {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve, reject) {
        apiCall(name, params, resolve, reject);
      });
    };
  }
});

exports.default = lbryProxy;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */




(function(scope) {
  if (scope['Proxy']) {
    return;
  }
  let lastRevokeFn = null;

  /**
   * @param {*} o
   * @return {boolean} whether this is probably a (non-null) Object
   */
  function isObject(o) {
    return o ? (typeof o == 'object' || typeof o == 'function') : false;
  }

  /**
   * @constructor
   * @param {!Object} target
   * @param {{apply, construct, get, set}} handler
   */
  scope.Proxy = function(target, handler) {
    if (!isObject(target) || !isObject(handler)) {
      throw new TypeError('Cannot create proxy with a non-object as target or handler');
    }

    // Construct revoke function, and set lastRevokeFn so that Proxy.revocable can steal it.
    // The caller might get the wrong revoke function if a user replaces or wraps scope.Proxy
    // to call itself, but that seems unlikely especially when using the polyfill.
    let throwRevoked = function() {};
    lastRevokeFn = function() {
      throwRevoked = function(trap) {
        throw new TypeError(`Cannot perform '${trap}' on a proxy that has been revoked`);
      };
    };

    // Fail on unsupported traps: Chrome doesn't do this, but ensure that users of the polyfill
    // are a bit more careful. Copy the internal parts of handler to prevent user changes.
    let unsafeHandler = handler;
    handler = {'get': null, 'set': null, 'apply': null, 'construct': null};
    for (let k in unsafeHandler) {
      if (!(k in handler)) {
        throw new TypeError(`Proxy polyfill does not support trap '${k}'`);
      }
      handler[k] = unsafeHandler[k];
    }
    if (typeof unsafeHandler == 'function') {
      // Allow handler to be a function (which has an 'apply' method). This matches what is
      // probably a bug in native versions. It treats the apply call as a trap to be configured.
      handler.apply = unsafeHandler.apply.bind(unsafeHandler);
    }

    // Define proxy as this, or a Function (if either it's callable, or apply is set).
    // TODO(samthor): Closure compiler doesn't know about 'construct', attempts to rename it.
    let proxy = this;
    let isMethod = false;
    let targetIsFunction = typeof target == 'function';
    if (handler.apply || handler['construct'] || targetIsFunction) {
      proxy = function Proxy() {
        let usingNew = (this && this.constructor === proxy);
        throwRevoked(usingNew ? 'construct' : 'apply');

        if (usingNew && handler['construct']) {
          return handler['construct'].call(this, target, arguments);
        } else if (!usingNew && handler.apply) {
          return handler.apply(target, this, arguments);
        } else if (targetIsFunction) {
          // since the target was a function, fallback to calling it directly.
          if (usingNew) {
            // inspired by answers to https://stackoverflow.com/q/1606797
            let all = Array.prototype.slice.call(arguments);
            all.unshift(target);  // pass class as first arg to constructor, although irrelevant
            // nb. cast to convince Closure compiler that this is a constructor
            let f = /** @type {!Function} */ (target.bind.apply(target, all));
            return new f();
          }
          return target.apply(this, arguments);
        }
        throw new TypeError(usingNew ? 'not a constructor' : 'not a function');
      };
      isMethod = true;
    }

    // Create default getters/setters. Create different code paths as handler.get/handler.set can't
    // change after creation.
    let getter = handler.get ? function(prop) {
      throwRevoked('get');
      return handler.get(this, prop, proxy);
    } : function(prop) {
      throwRevoked('get');
      return this[prop];
    };
    let setter = handler.set ? function(prop, value) {
      throwRevoked('set');
      let status = handler.set(this, prop, value, proxy);
      if (!status) {
        // TODO(samthor): If the calling code is in strict mode, throw TypeError.
        // It's (sometimes) possible to work this out, if this code isn't strict- try to load the
        // callee, and if it's available, that code is non-strict. However, this isn't exhaustive.
      }
    } : function(prop, value) {
      throwRevoked('set');
      this[prop] = value;
    };

    // Clone direct properties (i.e., not part of a prototype).
    let propertyNames = Object.getOwnPropertyNames(target);
    let propertyMap = {};
    propertyNames.forEach(function(prop) {
      if (isMethod && prop in proxy) {
        return;  // ignore properties already here, e.g. 'bind', 'prototype' etc
      }
      let real = Object.getOwnPropertyDescriptor(target, prop);
      let desc = {
        enumerable: !!real.enumerable,
        get: getter.bind(target, prop),
        set: setter.bind(target, prop),
      };
      Object.defineProperty(proxy, prop, desc);
      propertyMap[prop] = true;
    });

    // Set the prototype, or clone all prototype methods (always required if a getter is provided).
    // TODO(samthor): We don't allow prototype methods to be set. It's (even more) awkward.
    // An alternative here would be to _just_ clone methods to keep behavior consistent.
    let prototypeOk = true;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(proxy, Object.getPrototypeOf(target));
    } else if (proxy.__proto__) {
      proxy.__proto__ = target.__proto__;
    } else {
      prototypeOk = false;
    }
    if (handler.get || !prototypeOk) {
      for (let k in target) {
        if (propertyMap[k]) {
          continue;
        }
        Object.defineProperty(proxy, k, {get: getter.bind(target, k)});
      }
    }

    // The Proxy polyfill cannot handle adding new properties. Seal the target and proxy.
    Object.seal(target);
    Object.seal(proxy);

    return proxy;  // nb. if isMethod is true, proxy != this
  };

  scope.Proxy.revocable = function(target, handler) {
    let p = new scope.Proxy(target, handler);
    return {'proxy': p, 'revoke': lastRevokeFn};
  };

  scope.Proxy['revocable'] = scope.Proxy.revocable;
  scope['Proxy'] = scope.Proxy;
})(typeof module !== 'undefined' && module['exports'] ? global : window);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _querystring = __webpack_require__(14);

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lbryapi = {
  enabled: true,
  exchangePromise: null,
  exchangeLastFetched: null
};

var CONNECTION_STRING = process.env.LBRY_APP_API_URL ? process.env.LBRY_APP_API_URL.replace(/\/*$/, '/') // exactly one slash at the end
: 'https://api.lbry.io/';

var EXCHANGE_RATE_TIMEOUT = 20 * 60 * 1000;

Lbryapi.getExchangeRates = function () {
  if (!Lbryapi.exchangeLastFetched || Date.now() - Lbryapi.exchangeLastFetched > EXCHANGE_RATE_TIMEOUT) {
    Lbryapi.exchangePromise = new Promise(function (resolve, reject) {
      Lbryapi.call('lbc', 'exchange_rate', {}, 'get', true).then(function (_ref) {
        var LBC_USD = _ref.lbc_usd,
            LBC_BTC = _ref.lbc_btc,
            BTC_USD = _ref.btc_usd;

        var rates = { LBC_USD: LBC_USD, LBC_BTC: LBC_BTC, BTC_USD: BTC_USD };
        resolve(rates);
      }).catch(reject);
    });
    Lbryapi.exchangeLastFetched = Date.now();
  }
  return Lbryapi.exchangePromise;
};

Lbryapi.call = function (resource, action) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'get';

  if (!Lbryapi.enabled) {
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

  var fullParams = _extends({}, params);
  var qs = _querystring2.default.stringify(fullParams);
  var url = '' + CONNECTION_STRING + resource + '/' + action + '?' + qs;

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
    url = '' + CONNECTION_STRING + resource + '/' + action;
  }

  return makeRequest(url, options).then(function (response) {
    return response.data;
  });
};

exports.default = Lbryapi;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)))

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(15);
exports.encode = exports.stringify = __webpack_require__(16);


/***/ }),
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectChannelForClaimUri = exports.makeSelectRecommendedContentForUri = exports.makeSelectNsfwCountForChannel = exports.makeSelectNsfwCountFromUris = exports.makeSelectTotalPagesForChannel = exports.makeSelectTotalItemsForChannel = exports.selectChannelClaimCounts = exports.selectPlayingUri = exports.selectFetchingTrendingUris = exports.selectTrendingUris = exports.selectFetchingFeaturedUris = exports.selectFeaturedUris = exports.makeSelectIsUriResolving = exports.selectResolvingUris = exports.selectMyChannelClaims = exports.selectFetchingMyChannels = exports.selectMyClaimsOutpoints = exports.selectAllMyClaimsByOutpoint = exports.selectMyClaimsWithoutChannels = exports.selectMyClaims = exports.selectIsFetchingClaimListMine = exports.makeSelectContentTypeForUri = exports.makeSelectTitleForUri = exports.makeSelectMetadataForUri = exports.makeSelectClaimsInChannelForCurrentPage = exports.makeSelectClaimsInChannelForPage = exports.makeSelectFetchingChannelClaims = exports.selectAllFetchingChannelClaims = exports.makeSelectClaimIsMine = exports.selectMyActiveClaims = exports.selectAbandoningIds = exports.selectMyClaimsRaw = exports.makeSelectClaimForUri = exports.makeSelectPendingByUri = exports.makeSelectClaimIsPending = exports.selectPendingClaims = exports.selectPendingById = exports.selectAllClaimsByChannel = exports.selectClaimsByUri = exports.selectClaimsById = undefined;

var _lbryURI = __webpack_require__(3);

var _navigation = __webpack_require__(18);

var _search = __webpack_require__(21);

var _reselect = __webpack_require__(19);

var _claim = __webpack_require__(23);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var selectState = function selectState(state) {
  return state.claims || {};
};

var selectClaimsById = exports.selectClaimsById = (0, _reselect.createSelector)(selectState, function (state) {
  return state.byId || {};
});

var selectClaimsByUri = exports.selectClaimsByUri = (0, _reselect.createSelector)(selectState, selectClaimsById, function (state, byId) {
  var byUri = state.claimsByUri || {};
  var claims = {};

  Object.keys(byUri).forEach(function (uri) {
    var claimId = byUri[uri];

    // NOTE returning a null claim allows us to differentiate between an
    // undefined (never fetched claim) and one which just doesn't exist. Not
    // the cleanest solution but couldn't think of anything better right now
    if (claimId === null) {
      claims[uri] = null;
    } else {
      claims[uri] = byId[claimId];
    }
  });

  return claims;
});

var selectAllClaimsByChannel = exports.selectAllClaimsByChannel = (0, _reselect.createSelector)(selectState, function (state) {
  return state.claimsByChannel || {};
});

var selectPendingById = exports.selectPendingById = (0, _reselect.createSelector)(selectState, function (state) {
  return state.pendingById || {};
});

var selectPendingClaims = exports.selectPendingClaims = (0, _reselect.createSelector)(selectState, function (state) {
  return Object.values(state.pendingById || []);
});

var makeSelectClaimIsPending = exports.makeSelectClaimIsPending = function makeSelectClaimIsPending(uri) {
  return (0, _reselect.createSelector)(selectPendingById, function (pendingById) {
    var _parseURI = (0, _lbryURI.parseURI)(uri),
        claimId = _parseURI.claimId;

    return Boolean(pendingById[claimId]);
  });
};

var makeSelectPendingByUri = exports.makeSelectPendingByUri = function makeSelectPendingByUri(uri) {
  return (0, _reselect.createSelector)(selectPendingById, function (pendingById) {
    var _parseURI2 = (0, _lbryURI.parseURI)(uri),
        claimId = _parseURI2.claimId;

    return pendingById[claimId];
  });
};

var makeSelectClaimForUri = exports.makeSelectClaimForUri = function makeSelectClaimForUri(uri) {
  return (0, _reselect.createSelector)(selectClaimsByUri, selectPendingById, function (byUri, pendingById) {
    // Check if a claim is pending first
    // It won't be in claimsByUri because resolving it will return nothing
    var _parseURI3 = (0, _lbryURI.parseURI)(uri),
        claimId = _parseURI3.claimId;

    var pendingClaim = pendingById[claimId];
    if (pendingClaim) {
      return pendingClaim;
    }

    return byUri && byUri[(0, _lbryURI.normalizeURI)(uri)];
  });
};

var selectMyClaimsRaw = exports.selectMyClaimsRaw = (0, _reselect.createSelector)(selectState, function (state) {
  return state.myClaims;
});

var selectAbandoningIds = exports.selectAbandoningIds = (0, _reselect.createSelector)(selectState, function (state) {
  return Object.keys(state.abandoningById || {});
});

var selectMyActiveClaims = exports.selectMyActiveClaims = (0, _reselect.createSelector)(selectMyClaimsRaw, selectAbandoningIds, function (claims, abandoningIds) {
  return new Set(claims && claims.map(function (claim) {
    return claim.claim_id;
  }).filter(function (claimId) {
    return Object.keys(abandoningIds).indexOf(claimId) === -1;
  }));
});

var makeSelectClaimIsMine = exports.makeSelectClaimIsMine = function makeSelectClaimIsMine(rawUri) {
  var uri = (0, _lbryURI.normalizeURI)(rawUri);
  return (0, _reselect.createSelector)(selectClaimsByUri, selectMyActiveClaims, function (claims, myClaims) {
    return claims && claims[uri] && claims[uri].claim_id && myClaims.has(claims[uri].claim_id);
  });
};

var selectAllFetchingChannelClaims = exports.selectAllFetchingChannelClaims = (0, _reselect.createSelector)(selectState, function (state) {
  return state.fetchingChannelClaims || {};
});

var makeSelectFetchingChannelClaims = exports.makeSelectFetchingChannelClaims = function makeSelectFetchingChannelClaims(uri) {
  return (0, _reselect.createSelector)(selectAllFetchingChannelClaims, function (fetching) {
    return fetching && fetching[uri];
  });
};

var makeSelectClaimsInChannelForPage = exports.makeSelectClaimsInChannelForPage = function makeSelectClaimsInChannelForPage(uri, page) {
  return (0, _reselect.createSelector)(selectClaimsById, selectAllClaimsByChannel, function (byId, allClaims) {
    var byChannel = allClaims[uri] || {};
    var claimIds = byChannel[page || 1];

    if (!claimIds) return claimIds;

    return claimIds.map(function (claimId) {
      return byId[claimId];
    });
  });
};

var makeSelectClaimsInChannelForCurrentPage = exports.makeSelectClaimsInChannelForCurrentPage = function makeSelectClaimsInChannelForCurrentPage(uri) {
  var pageSelector = (0, _navigation.makeSelectCurrentParam)('page');

  return (0, _reselect.createSelector)(selectClaimsById, selectAllClaimsByChannel, pageSelector, function (byId, allClaims, page) {
    var byChannel = allClaims[uri] || {};
    var claimIds = byChannel[page || 1];

    if (!claimIds) return claimIds;

    return claimIds.map(function (claimId) {
      return byId[claimId];
    });
  });
};

var makeSelectMetadataForUri = exports.makeSelectMetadataForUri = function makeSelectMetadataForUri(uri) {
  return (0, _reselect.createSelector)(makeSelectClaimForUri(uri), function (claim) {
    var metadata = claim && claim.value && claim.value.stream && claim.value.stream.metadata;

    return metadata || (claim === undefined ? undefined : null);
  });
};

var makeSelectTitleForUri = exports.makeSelectTitleForUri = function makeSelectTitleForUri(uri) {
  return (0, _reselect.createSelector)(makeSelectMetadataForUri(uri), function (metadata) {
    return metadata && metadata.title;
  });
};

var makeSelectContentTypeForUri = exports.makeSelectContentTypeForUri = function makeSelectContentTypeForUri(uri) {
  return (0, _reselect.createSelector)(makeSelectClaimForUri(uri), function (claim) {
    var source = claim && claim.value && claim.value.stream && claim.value.stream.source;
    return source ? source.contentType : undefined;
  });
};

var selectIsFetchingClaimListMine = exports.selectIsFetchingClaimListMine = (0, _reselect.createSelector)(selectState, function (state) {
  return state.isFetchingClaimListMine;
});

var selectMyClaims = exports.selectMyClaims = (0, _reselect.createSelector)(selectMyActiveClaims, selectClaimsById, selectAbandoningIds, selectPendingClaims, function (myClaimIds, byId, abandoningIds, pendingClaims) {
  var claims = [];

  myClaimIds.forEach(function (id) {
    var claim = byId[id];

    if (claim && abandoningIds.indexOf(id) === -1) claims.push(claim);
  });

  return [].concat(claims, _toConsumableArray(pendingClaims));
});

var selectMyClaimsWithoutChannels = exports.selectMyClaimsWithoutChannels = (0, _reselect.createSelector)(selectMyClaims, function (myClaims) {
  return myClaims.filter(function (claim) {
    return !claim.name.match(/^@/);
  });
});

var selectAllMyClaimsByOutpoint = exports.selectAllMyClaimsByOutpoint = (0, _reselect.createSelector)(selectMyClaimsRaw, function (claims) {
  return new Set(claims && claims.length ? claims.map(function (claim) {
    return claim.txid + ':' + claim.nout;
  }) : null);
});

var selectMyClaimsOutpoints = exports.selectMyClaimsOutpoints = (0, _reselect.createSelector)(selectMyClaims, function (myClaims) {
  var outpoints = [];

  myClaims.forEach(function (claim) {
    return outpoints.push(claim.txid + ':' + claim.nout);
  });

  return outpoints;
});

var selectFetchingMyChannels = exports.selectFetchingMyChannels = (0, _reselect.createSelector)(selectState, function (state) {
  return state.fetchingMyChannels;
});

var selectMyChannelClaims = exports.selectMyChannelClaims = (0, _reselect.createSelector)(selectState, selectClaimsById, function (state, byId) {
  var ids = state.myChannelClaims || [];
  var claims = [];

  ids.forEach(function (id) {
    if (byId[id]) {
      // I'm not sure why this check is necessary, but it ought to be a quick fix for https://github.com/lbryio/lbry-desktop/issues/544
      claims.push(byId[id]);
    }
  });

  return claims;
});

var selectResolvingUris = exports.selectResolvingUris = (0, _reselect.createSelector)(selectState, function (state) {
  return state.resolvingUris || [];
});

var makeSelectIsUriResolving = exports.makeSelectIsUriResolving = function makeSelectIsUriResolving(uri) {
  return (0, _reselect.createSelector)(selectResolvingUris, function (resolvingUris) {
    return resolvingUris && resolvingUris.indexOf(uri) !== -1;
  });
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

var selectPlayingUri = exports.selectPlayingUri = (0, _reselect.createSelector)(selectState, function (state) {
  return state.playingUri;
});

var selectChannelClaimCounts = exports.selectChannelClaimCounts = (0, _reselect.createSelector)(selectState, function (state) {
  return state.channelClaimCounts || {};
});

var makeSelectTotalItemsForChannel = exports.makeSelectTotalItemsForChannel = function makeSelectTotalItemsForChannel(uri) {
  return (0, _reselect.createSelector)(selectChannelClaimCounts, function (byUri) {
    return byUri && byUri[uri];
  });
};

var makeSelectTotalPagesForChannel = exports.makeSelectTotalPagesForChannel = function makeSelectTotalPagesForChannel(uri) {
  var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return (0, _reselect.createSelector)(selectChannelClaimCounts, function (byUri) {
    return byUri && byUri[uri] && Math.ceil(byUri[uri] / pageSize);
  });
};

var makeSelectNsfwCountFromUris = exports.makeSelectNsfwCountFromUris = function makeSelectNsfwCountFromUris(uris) {
  return (0, _reselect.createSelector)(selectClaimsByUri, function (claims) {
    return uris.reduce(function (acc, uri) {
      var claim = claims[uri];
      if ((0, _claim.isClaimNsfw)(claim)) {
        return acc + 1;
      }
      return acc;
    }, 0);
  });
};

var makeSelectNsfwCountForChannel = exports.makeSelectNsfwCountForChannel = function makeSelectNsfwCountForChannel(uri) {
  var pageSelector = (0, _navigation.makeSelectCurrentParam)('page');

  return (0, _reselect.createSelector)(selectClaimsById, selectAllClaimsByChannel, pageSelector, function (byId, allClaims, page) {
    var byChannel = allClaims[uri] || {};
    var claimIds = byChannel[page || 1];

    if (!claimIds) return 0;

    return claimIds.reduce(function (acc, claimId) {
      var claim = byId[claimId];
      if ((0, _claim.isClaimNsfw)(claim)) {
        return acc + 1;
      }
      return acc;
    }, 0);
  });
};

var makeSelectRecommendedContentForUri = exports.makeSelectRecommendedContentForUri = function makeSelectRecommendedContentForUri(uri) {
  return (0, _reselect.createSelector)(makeSelectClaimForUri(uri), _search.selectSearchUrisByQuery, function (claim, searchUrisByQuery) {
    var atVanityURI = !uri.includes('#');

    var recommendedContent = void 0;
    if (claim) {
      // If we are at a vanity uri, build the full uri so we can properly filter
      var currentUri = atVanityURI ? (0, _lbryURI.buildURI)({ claimId: claim.claim_id, claimName: claim.name }) : uri;

      var title = claim.value.stream.metadata.title;


      var searchUris = searchUrisByQuery[title.replace(/\//, ' ')];
      if (searchUris) {
        searchUris = searchUris.filter(function (searchUri) {
          return searchUri !== currentUri;
        });
        recommendedContent = searchUris;
      }
    }

    return recommendedContent;
  });
};

// Returns the associated channel uri for a given claim uri
var makeSelectChannelForClaimUri = exports.makeSelectChannelForClaimUri = function makeSelectChannelForClaimUri(uri) {
  var includePrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return (0, _reselect.createSelector)(makeSelectClaimForUri(uri), function (claim) {
    if (!claim) {
      return null;
    }

    var channelName = claim.channel_name,
        value = claim.value;

    var channelClaimId = value && value.publisherSignature && value.publisherSignature.certificateId;

    return channelName && channelClaimId ? (0, _lbryURI.buildURI)({ channelName: channelName, claimId: channelClaimId }, includePrefix) : null;
  });
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectPageTitle = exports.selectActiveHistoryEntry = exports.selectHistoryStack = exports.selectHistoryIndex = exports.selectIsHome = exports.selectIsForwardDisabled = exports.selectIsBackDisabled = exports.selectPathAfterAuth = exports.makeSelectCurrentParam = exports.selectCurrentParams = exports.selectCurrentPage = exports.computePageFromPath = exports.selectCurrentPath = exports.selectState = undefined;

var _reselect = __webpack_require__(19);

var _query_params = __webpack_require__(20);

var selectState = exports.selectState = function selectState(state) {
  return state.navigation || {};
};

var selectCurrentPath = exports.selectCurrentPath = (0, _reselect.createSelector)(selectState, function (state) {
  return state.currentPath;
});

var computePageFromPath = exports.computePageFromPath = function computePageFromPath(path) {
  return path.replace(/^\//, '').split('?')[0];
};

var selectCurrentPage = exports.selectCurrentPage = (0, _reselect.createSelector)(selectCurrentPath, function (path) {
  return computePageFromPath(path);
});

var selectCurrentParams = exports.selectCurrentParams = (0, _reselect.createSelector)(selectCurrentPath, function (path) {
  if (path === undefined) return {};
  if (!path.match(/\?/)) return {};

  return (0, _query_params.parseQueryParams)(path.split('?')[1]);
});

var makeSelectCurrentParam = exports.makeSelectCurrentParam = function makeSelectCurrentParam(param) {
  return (0, _reselect.createSelector)(selectCurrentParams, function (params) {
    return params ? params[param] : undefined;
  });
};

var selectPathAfterAuth = exports.selectPathAfterAuth = (0, _reselect.createSelector)(selectState, function (state) {
  return state.pathAfterAuth;
});

var selectIsBackDisabled = exports.selectIsBackDisabled = (0, _reselect.createSelector)(selectState, function (state) {
  return state.index === 0;
});

var selectIsForwardDisabled = exports.selectIsForwardDisabled = (0, _reselect.createSelector)(selectState, function (state) {
  return state.index === state.stack.length - 1;
});

var selectIsHome = exports.selectIsHome = (0, _reselect.createSelector)(selectCurrentPage, function (page) {
  return page === 'discover';
});

var selectHistoryIndex = exports.selectHistoryIndex = (0, _reselect.createSelector)(selectState, function (state) {
  return state.index;
});

var selectHistoryStack = exports.selectHistoryStack = (0, _reselect.createSelector)(selectState, function (state) {
  return state.stack;
});

// returns current page attributes (scrollY, path)
var selectActiveHistoryEntry = exports.selectActiveHistoryEntry = (0, _reselect.createSelector)(selectState, function (state) {
  return state.stack[state.index];
});

var selectPageTitle = exports.selectPageTitle = (0, _reselect.createSelector)(selectCurrentPage, function (page) {
  switch (page) {
    default:
      return '';
  }
});

/***/ }),
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.parseQueryParams = parseQueryParams;
exports.toQueryString = toQueryString;
function parseQueryParams(queryString) {
  if (queryString === '') return {};
  var parts = queryString.split('?').pop().split('&').map(function (p) {
    return p.split('=');
  });

  var params = {};
  parts.forEach(function (array) {
    var _array = _slicedToArray(array, 2),
        first = _array[0],
        second = _array[1];

    params[first] = second;
  });
  return params;
}

function toQueryString(params) {
  if (!params) return '';

  var parts = [];
  Object.keys(params).forEach(function (key) {
    if (Object.prototype.hasOwnProperty.call(params, key) && params[key]) {
      parts.push(key + '=' + params[key]);
    }
  });

  return parts.join('&');
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectSearchSuggestions = exports.selectSearchBarFocused = exports.selectWunderBarAddress = exports.makeSelectSearchUris = exports.selectSearchUrisByQuery = exports.selectIsSearching = exports.selectSearchQuery = exports.selectSuggestions = exports.selectSearchValue = exports.selectState = undefined;

var _search = __webpack_require__(22);

var SEARCH_TYPES = _interopRequireWildcard(_search);

var _lbryURI = __webpack_require__(3);

var _navigation = __webpack_require__(18);

var _reselect = __webpack_require__(19);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var selectState = exports.selectState = function selectState(state) {
  return state.search || {};
};

var selectSearchValue = exports.selectSearchValue = (0, _reselect.createSelector)(selectState, function (state) {
  return state.searchQuery;
});

var selectSuggestions = exports.selectSuggestions = (0, _reselect.createSelector)(selectState, function (state) {
  return state.suggestions;
});

var selectSearchQuery = exports.selectSearchQuery = (0, _reselect.createSelector)(_navigation.selectCurrentPage, _navigation.selectCurrentParams, function (page, params) {
  return page === 'search' ? params && params.query : null;
});

var selectIsSearching = exports.selectIsSearching = (0, _reselect.createSelector)(selectState, function (state) {
  return state.searching;
});

var selectSearchUrisByQuery = exports.selectSearchUrisByQuery = (0, _reselect.createSelector)(selectState, function (state) {
  return state.urisByQuery;
});

var makeSelectSearchUris = exports.makeSelectSearchUris = function makeSelectSearchUris(query) {
  return (
    // replace statement below is kind of ugly, and repeated in doSearch action
    (0, _reselect.createSelector)(selectSearchUrisByQuery, function (byQuery) {
      return byQuery[query ? query.replace(/^lbry:\/\//i, '').replace(/\//, ' ') : query];
    })
  );
};

var selectWunderBarAddress = exports.selectWunderBarAddress = (0, _reselect.createSelector)(_navigation.selectCurrentPage, selectSearchQuery, _navigation.selectCurrentParams, function (page, query, params) {
  // only populate the wunderbar address if we are on the file/channel pages
  // or show the search query
  if (page === 'show') {
    return params.uri;
  }
  return query;
});

var selectSearchBarFocused = exports.selectSearchBarFocused = (0, _reselect.createSelector)(selectState, function (state) {
  return state.focused;
});
// export const selectSear

var selectSearchSuggestions = exports.selectSearchSuggestions = (0, _reselect.createSelector)(selectSearchValue, selectSuggestions, function (query, suggestions) {
  if (!query) {
    return [];
  }

  var queryIsPrefix = query === 'lbry:' || query === 'lbry:/' || query === 'lbry://';

  if (query.startsWith('lbry://') && query !== 'lbry://') {
    // If it starts with a prefix, don't show any autocomplete results
    // They are probably typing/pasting in a lbry uri
    return [{
      value: query,
      type: SEARCH_TYPES.FILE
    }];
  } else if (queryIsPrefix) {
    // If it is a prefix, wait until something else comes to figure out what to do
    return [];
  }

  var searchSuggestions = [];
  try {
    var uri = (0, _lbryURI.normalizeURI)(query);

    var _parseURI = (0, _lbryURI.parseURI)(uri),
        claimName = _parseURI.claimName,
        isChannel = _parseURI.isChannel;

    searchSuggestions.push({
      value: claimName,
      type: SEARCH_TYPES.SEARCH
    }, {
      value: uri,
      shorthand: isChannel ? claimName.slice(1) : claimName,
      type: isChannel ? SEARCH_TYPES.CHANNEL : SEARCH_TYPES.FILE
    });
  } catch (e) {
    searchSuggestions.push({
      value: query,
      type: SEARCH_TYPES.SEARCH
    });
  }

  var apiSuggestions = suggestions[query] || [];
  if (apiSuggestions.length) {
    searchSuggestions = searchSuggestions.concat(apiSuggestions.filter(function (suggestion) {
      return suggestion !== query;
    }).map(function (suggestion) {
      // determine if it's a channel
      try {
        var _uri = (0, _lbryURI.normalizeURI)(suggestion);

        var _parseURI2 = (0, _lbryURI.parseURI)(_uri),
            _claimName = _parseURI2.claimName,
            _isChannel = _parseURI2.isChannel;

        return {
          value: _uri,
          shorthand: _isChannel ? _claimName.slice(1) : _claimName,
          type: _isChannel ? SEARCH_TYPES.CHANNEL : SEARCH_TYPES.FILE
        };
      } catch (e) {
        // search result includes some character that isn't valid in claim names
        return {
          value: suggestion,
          type: SEARCH_TYPES.SEARCH
        };
      }
    }));
  }

  return searchSuggestions;
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FILE = exports.FILE = 'file';
var CHANNEL = exports.CHANNEL = 'channel';
var SEARCH = exports.SEARCH = 'search';

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isClaimNsfw = exports.isClaimNsfw = function isClaimNsfw(claim) {
  return claim && claim.value && claim.value.stream && claim.value.stream.metadata.nsfw;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.batchActions = batchActions;
// https://github.com/reactjs/redux/issues/911
function batchActions() {
  for (var _len = arguments.length, actions = Array(_len), _key = 0; _key < _len; _key++) {
    actions[_key] = arguments[_key];
  }

  return {
    type: 'BATCH_ACTIONS',
    actions: actions
  };
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doUpdateBalance = doUpdateBalance;
exports.doBalanceSubscribe = doBalanceSubscribe;
exports.doFetchTransactions = doFetchTransactions;
exports.doFetchBlock = doFetchBlock;
exports.doGetNewAddress = doGetNewAddress;
exports.doCheckAddressIsMine = doCheckAddressIsMine;
exports.doSendDraftTransaction = doSendDraftTransaction;
exports.doSetDraftTransactionAmount = doSetDraftTransactionAmount;
exports.doSetDraftTransactionAddress = doSetDraftTransactionAddress;
exports.doSendTip = doSendTip;
exports.doWalletEncrypt = doWalletEncrypt;
exports.doWalletUnlock = doWalletUnlock;
exports.doWalletLock = doWalletLock;
exports.doWalletDecrypt = doWalletDecrypt;
exports.doWalletStatus = doWalletStatus;
exports.doSetTransactionListFilter = doSetTransactionListFilter;
exports.doUpdateBlockHeight = doUpdateBlockHeight;

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _lbry = __webpack_require__(9);

var _lbry2 = _interopRequireDefault(_lbry);

var _notifications = __webpack_require__(4);

var _wallet = __webpack_require__(26);

var _formatCredits = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function doUpdateBalance() {
  return function (dispatch, getState) {
    var _getState = getState(),
        balanceInStore = _getState.wallet.balance;

    _lbry2.default.account_balance().then(function (balance) {
      if (balanceInStore !== balance) {
        dispatch({
          type: ACTIONS.UPDATE_BALANCE,
          data: {
            balance: balance
          }
        });
      }
    });
  };
}

function doBalanceSubscribe() {
  return function (dispatch) {
    dispatch(doUpdateBalance());
    setInterval(function () {
      return dispatch(doUpdateBalance());
    }, 5000);
  };
}

function doFetchTransactions() {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.FETCH_TRANSACTIONS_STARTED
    });

    _lbry2.default.transaction_list().then(function (results) {
      dispatch({
        type: ACTIONS.FETCH_TRANSACTIONS_COMPLETED,
        data: {
          transactions: results
        }
      });
    });
  };
}

function doFetchBlock(height) {
  return function (dispatch) {
    _lbry2.default.block_show({ height: height }).then(function (block) {
      dispatch({
        type: ACTIONS.FETCH_BLOCK_SUCCESS,
        data: { block: block }
      });
    });
  };
}

function doGetNewAddress() {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.GET_NEW_ADDRESS_STARTED
    });

    // Removed localStorage use, since address is expected to be stored in redux store
    _lbry2.default.address_unused().then(function (address) {
      dispatch({
        type: ACTIONS.GET_NEW_ADDRESS_COMPLETED,
        data: { address: address }
      });
    });
  };
}

function doCheckAddressIsMine(address) {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.CHECK_ADDRESS_IS_MINE_STARTED
    });

    _lbry2.default.address_is_mine({ address: address }).then(function (isMine) {
      if (!isMine) dispatch(doGetNewAddress());

      dispatch({
        type: ACTIONS.CHECK_ADDRESS_IS_MINE_COMPLETED
      });
    });
  };
}

function doSendDraftTransaction(address, amount) {
  return function (dispatch, getState) {
    var state = getState();
    var balance = (0, _wallet.selectBalance)(state);

    if (balance - amount <= 0) {
      dispatch((0, _notifications.doToast)({
        title: 'Insufficient credits',
        message: 'Insufficient credits'
      }));
      return;
    }

    dispatch({
      type: ACTIONS.SEND_TRANSACTION_STARTED
    });

    var successCallback = function successCallback(response) {
      if (response.txid) {
        dispatch({
          type: ACTIONS.SEND_TRANSACTION_COMPLETED
        });
        dispatch((0, _notifications.doToast)({
          message: 'You sent ' + amount + ' LBC',
          linkText: 'History',
          linkTarget: '/wallet'
        }));
      } else {
        dispatch({
          type: ACTIONS.SEND_TRANSACTION_FAILED,
          data: { error: response }
        });
        dispatch((0, _notifications.doToast)({
          message: 'Transaction failed',
          isError: true
        }));
      }
    };

    var errorCallback = function errorCallback(error) {
      dispatch({
        type: ACTIONS.SEND_TRANSACTION_FAILED,
        data: { error: error.message }
      });
      dispatch((0, _notifications.doToast)({
        message: 'Transaction failed',
        isError: true
      }));
    };

    _lbry2.default.wallet_send({
      address: address,
      amount: (0, _formatCredits.creditsToString)(amount)
    }).then(successCallback, errorCallback);
  };
}

function doSetDraftTransactionAmount(amount) {
  return {
    type: ACTIONS.SET_DRAFT_TRANSACTION_AMOUNT,
    data: { amount: amount }
  };
}

function doSetDraftTransactionAddress(address) {
  return {
    type: ACTIONS.SET_DRAFT_TRANSACTION_ADDRESS,
    data: { address: address }
  };
}

function doSendTip(amount, claimId, uri, successCallback, errorCallback) {
  return function (dispatch, getState) {
    var state = getState();
    var balance = (0, _wallet.selectBalance)(state);

    if (balance - amount <= 0) {
      dispatch((0, _notifications.doToast)({
        message: 'Insufficient credits',
        isError: true
      }));
      return;
    }

    var success = function success() {
      dispatch((0, _notifications.doToast)({
        message: __('You sent ' + amount + ' LBC as a tip, Mahalo!'),
        linkText: __('History'),
        linkTarget: __('/wallet')
      }));

      dispatch({
        type: ACTIONS.SUPPORT_TRANSACTION_COMPLETED
      });

      if (successCallback) {
        successCallback();
      }
    };

    var error = function error(err) {
      dispatch((0, _notifications.doToast)({
        message: __('There was an error sending support funds.'),
        isError: true
      }));

      dispatch({
        type: ACTIONS.SUPPORT_TRANSACTION_FAILED,
        data: {
          error: err
        }
      });

      if (errorCallback) {
        errorCallback();
      }
    };

    dispatch({
      type: ACTIONS.SUPPORT_TRANSACTION_STARTED
    });

    _lbry2.default.claim_tip({
      claim_id: claimId,
      amount: (0, _formatCredits.creditsToString)(amount)
    }).then(success, error);
  };
}

function doWalletEncrypt(newPassword) {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.WALLET_ENCRYPT_START
    });

    _lbry2.default.account_encrypt({ new_password: newPassword }).then(function (result) {
      if (result === true) {
        dispatch({
          type: ACTIONS.WALLET_ENCRYPT_COMPLETED,
          result: result
        });
      } else {
        dispatch({
          type: ACTIONS.WALLET_ENCRYPT_FAILED,
          result: result
        });
      }
    });
  };
}

function doWalletUnlock(password) {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.WALLET_UNLOCK_START
    });

    _lbry2.default.account_unlock({ password: password }).then(function (result) {
      if (result === true) {
        dispatch({
          type: ACTIONS.WALLET_UNLOCK_COMPLETED,
          result: result
        });
      } else {
        dispatch({
          type: ACTIONS.WALLET_UNLOCK_FAILED,
          result: result
        });
      }
    });
  };
}

function doWalletLock() {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.WALLET_LOCK_START
    });

    _lbry2.default.wallet_lock().then(function (result) {
      if (result === true) {
        dispatch({
          type: ACTIONS.WALLET_LOCK_COMPLETED,
          result: result
        });
      } else {
        dispatch({
          type: ACTIONS.WALLET_LOCK_FAILED,
          result: result
        });
      }
    });
  };
}

function doWalletDecrypt() {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.WALLET_DECRYPT_START
    });

    _lbry2.default.account_decrypt().then(function (result) {
      if (result === true) {
        dispatch({
          type: ACTIONS.WALLET_DECRYPT_COMPLETED,
          result: result
        });
      } else {
        dispatch({
          type: ACTIONS.WALLET_DECRYPT_FAILED,
          result: result
        });
      }
    });
  };
}

function doWalletStatus() {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.WALLET_STATUS_START
    });

    _lbry2.default.status().then(function (status) {
      if (status && status.wallet) {
        dispatch({
          type: ACTIONS.WALLET_STATUS_COMPLETED,
          result: status.wallet.is_encrypted
        });
      }
    });
  };
}

function doSetTransactionListFilter(filterOption) {
  return {
    type: ACTIONS.SET_TRANSACTION_LIST_FILTER,
    data: filterOption
  };
}

function doUpdateBlockHeight() {
  return function (dispatch) {
    return _lbry2.default.status().then(function (status) {
      if (status.wallet) {
        dispatch({
          type: ACTIONS.UPDATE_CURRENT_HEIGHT,
          data: status.wallet.blocks
        });
      }
    });
  };
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectTransactionListFilter = exports.makeSelectBlockDate = exports.selectCurrentHeight = exports.selectBlocks = exports.selectDraftTransactionError = exports.selectDraftTransactionAddress = exports.selectDraftTransactionAmount = exports.selectDraftTransaction = exports.selectGettingNewAddress = exports.selectReceiveAddress = exports.selectIsSendingSupport = exports.selectIsFetchingTransactions = exports.selectHasTransactions = exports.selectRecentTransactions = exports.selectTransactionItems = exports.selectTransactionsById = exports.selectBalance = exports.selectWalletLockResult = exports.selectWalletLockSucceeded = exports.selectWalletLockPending = exports.selectWalletUnlockResult = exports.selectWalletUnlockSucceeded = exports.selectWalletUnlockPending = exports.selectWalletDecryptResult = exports.selectWalletDecryptSucceeded = exports.selectWalletDecryptPending = exports.selectWalletEncryptResult = exports.selectWalletEncryptSucceeded = exports.selectWalletEncryptPending = exports.selectWalletIsEncrypted = exports.selectWalletState = exports.selectState = undefined;

var _reselect = __webpack_require__(19);

var _transaction_types = __webpack_require__(27);

var TRANSACTIONS = _interopRequireWildcard(_transaction_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var selectState = exports.selectState = function selectState(state) {
  return state.wallet || {};
};

var selectWalletState = exports.selectWalletState = selectState;

var selectWalletIsEncrypted = exports.selectWalletIsEncrypted = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletIsEncrypted;
});

var selectWalletEncryptPending = exports.selectWalletEncryptPending = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletEncryptPending;
});

var selectWalletEncryptSucceeded = exports.selectWalletEncryptSucceeded = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletEncryptSucceded;
});

var selectWalletEncryptResult = exports.selectWalletEncryptResult = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletEncryptResult;
});

var selectWalletDecryptPending = exports.selectWalletDecryptPending = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletDecryptPending;
});

var selectWalletDecryptSucceeded = exports.selectWalletDecryptSucceeded = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletDecryptSucceded;
});

var selectWalletDecryptResult = exports.selectWalletDecryptResult = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletDecryptResult;
});

var selectWalletUnlockPending = exports.selectWalletUnlockPending = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletUnlockPending;
});

var selectWalletUnlockSucceeded = exports.selectWalletUnlockSucceeded = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletUnlockSucceded;
});

var selectWalletUnlockResult = exports.selectWalletUnlockResult = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletUnlockResult;
});

var selectWalletLockPending = exports.selectWalletLockPending = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletLockPending;
});

var selectWalletLockSucceeded = exports.selectWalletLockSucceeded = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletLockSucceded;
});

var selectWalletLockResult = exports.selectWalletLockResult = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletLockResult;
});

var selectBalance = exports.selectBalance = (0, _reselect.createSelector)(selectState, function (state) {
  return state.balance;
});

var selectTransactionsById = exports.selectTransactionsById = (0, _reselect.createSelector)(selectState, function (state) {
  return state.transactions;
});

var selectTransactionItems = exports.selectTransactionItems = (0, _reselect.createSelector)(selectTransactionsById, function (byId) {
  var items = [];

  Object.keys(byId).forEach(function (txid) {
    var tx = byId[txid];

    // ignore dust/fees
    // it is fee only txn if all infos are also empty
    if (Math.abs(tx.value) === Math.abs(tx.fee) && tx.claim_info.length === 0 && tx.support_info.length === 0 && tx.update_info.length === 0 && tx.abandon_info.length === 0) {
      return;
    }

    var append = [];

    append.push.apply(append, _toConsumableArray(tx.claim_info.map(function (item) {
      return Object.assign({}, tx, item, {
        type: item.claim_name[0] === '@' ? TRANSACTIONS.CHANNEL : TRANSACTIONS.PUBLISH
      });
    })));
    append.push.apply(append, _toConsumableArray(tx.support_info.map(function (item) {
      return Object.assign({}, tx, item, {
        type: !item.is_tip ? TRANSACTIONS.SUPPORT : TRANSACTIONS.TIP
      });
    })));
    append.push.apply(append, _toConsumableArray(tx.update_info.map(function (item) {
      return Object.assign({}, tx, item, { type: TRANSACTIONS.UPDATE });
    })));
    append.push.apply(append, _toConsumableArray(tx.abandon_info.map(function (item) {
      return Object.assign({}, tx, item, { type: TRANSACTIONS.ABANDON });
    })));

    if (!append.length) {
      append.push(Object.assign({}, tx, {
        type: tx.value < 0 ? TRANSACTIONS.SPEND : TRANSACTIONS.RECEIVE
      }));
    }

    items.push.apply(items, _toConsumableArray(append.map(function (item) {
      // value on transaction, amount on outpoint
      // amount is always positive, but should match sign of value
      var amount = parseFloat(item.balance_delta ? item.balance_delta : item.value);

      return {
        txid: txid,
        timestamp: tx.timestamp,
        date: tx.timestamp ? new Date(Number(tx.timestamp) * 1000) : null,
        amount: amount,
        fee: amount < 0 ? -1 * tx.fee / append.length : 0,
        claim_id: item.claim_id,
        claim_name: item.claim_name,
        type: item.type || TRANSACTIONS.SPEND,
        nout: item.nout,
        confirmations: tx.confirmations
      };
    })));
  });

  return items.sort(function (tx1, tx2) {
    if (!tx1.timestamp && !tx2.timestamp) {
      return 0;
    } else if (!tx1.timestamp && tx2.timestamp) {
      return -1;
    } else if (tx1.timestamp && !tx2.timestamp) {
      return 1;
    }

    return tx2.timestamp - tx1.timestamp;
  });
});

var selectRecentTransactions = exports.selectRecentTransactions = (0, _reselect.createSelector)(selectTransactionItems, function (transactions) {
  var threshold = new Date();
  threshold.setDate(threshold.getDate() - 7);
  return transactions.filter(function (transaction) {
    if (!transaction.date) {
      return true; // pending transaction
    }

    return transaction.date > threshold;
  });
});

var selectHasTransactions = exports.selectHasTransactions = (0, _reselect.createSelector)(selectTransactionItems, function (transactions) {
  return transactions && transactions.length > 0;
});

var selectIsFetchingTransactions = exports.selectIsFetchingTransactions = (0, _reselect.createSelector)(selectState, function (state) {
  return state.fetchingTransactions;
});

var selectIsSendingSupport = exports.selectIsSendingSupport = (0, _reselect.createSelector)(selectState, function (state) {
  return state.sendingSupport;
});

var selectReceiveAddress = exports.selectReceiveAddress = (0, _reselect.createSelector)(selectState, function (state) {
  return state.receiveAddress;
});

var selectGettingNewAddress = exports.selectGettingNewAddress = (0, _reselect.createSelector)(selectState, function (state) {
  return state.gettingNewAddress;
});

var selectDraftTransaction = exports.selectDraftTransaction = (0, _reselect.createSelector)(selectState, function (state) {
  return state.draftTransaction || {};
});

var selectDraftTransactionAmount = exports.selectDraftTransactionAmount = (0, _reselect.createSelector)(selectDraftTransaction, function (draft) {
  return draft.amount;
});

var selectDraftTransactionAddress = exports.selectDraftTransactionAddress = (0, _reselect.createSelector)(selectDraftTransaction, function (draft) {
  return draft.address;
});

var selectDraftTransactionError = exports.selectDraftTransactionError = (0, _reselect.createSelector)(selectDraftTransaction, function (draft) {
  return draft.error;
});

var selectBlocks = exports.selectBlocks = (0, _reselect.createSelector)(selectState, function (state) {
  return state.blocks;
});

var selectCurrentHeight = exports.selectCurrentHeight = (0, _reselect.createSelector)(selectState, function (state) {
  return state.latestBlock;
});

var makeSelectBlockDate = exports.makeSelectBlockDate = function makeSelectBlockDate(block) {
  return (0, _reselect.createSelector)(selectBlocks, selectCurrentHeight, function (blocks, latestBlock) {
    // If we have the block data, look at the actual date,
    // If not, try to simulate it based on 2.5 minute blocks
    // Adding this on 11/7/2018 because caling block_show for every claim is causing
    // performance issues.
    if (blocks && blocks[block]) {
      return new Date(blocks[block].time * 1000);
    }

    // Pending claim
    if (block < 1) {
      return null;
    }

    var difference = latestBlock - block;
    var msSincePublish = difference * 2.5 * 60 * 1000; // Number of blocks * 2.5 minutes in ms
    var publishDate = Date.now() - msSincePublish;
    return new Date(publishDate);
  });
};

var selectTransactionListFilter = exports.selectTransactionListFilter = (0, _reselect.createSelector)(selectState, function (state) {
  return state.transactionListFilter || '';
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// eslint-disable-next-line import/prefer-default-export
var ALL = exports.ALL = 'all';
var SPEND = exports.SPEND = 'spend';
var RECEIVE = exports.RECEIVE = 'receive';
var PUBLISH = exports.PUBLISH = 'publish';
var CHANNEL = exports.CHANNEL = 'channel';
var TIP = exports.TIP = 'tip';
var SUPPORT = exports.SUPPORT = 'support';
var UPDATE = exports.UPDATE = 'update';
var ABANDON = exports.ABANDON = 'abandon';

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatCredits = formatCredits;
exports.formatFullPrice = formatFullPrice;
exports.creditsToString = creditsToString;
function formatCredits(amount, precision) {
  if (Number.isNaN(parseFloat(amount))) return '0';
  return parseFloat(amount).toFixed(precision || 1).replace(/\.?0+$/, '');
}

function formatFullPrice(amount) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var formated = '';

  var quantity = amount.toString().split('.');
  var fraction = quantity[1];

  if (fraction) {
    var decimals = fraction.split('');
    var first = decimals.filter(function (number) {
      return number !== '0';
    })[0];
    var index = decimals.indexOf(first);

    // Set format fraction
    formated = '.' + fraction.substring(0, index + precision);
  }

  return parseFloat(quantity[0] + formated);
}

function creditsToString(amount) {
  var creditString = parseFloat(amount).toFixed(8);
  return creditString;
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doFetchCostInfoForUri = doFetchCostInfoForUri;

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _lbryapi = __webpack_require__(12);

var _lbryapi2 = _interopRequireDefault(_lbryapi);

var _claims = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// eslint-disable-next-line import/prefer-default-export
function doFetchCostInfoForUri(uri) {
  return function (dispatch, getState) {
    var state = getState();
    var claim = (0, _claims.selectClaimsByUri)(state)[uri];

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
      _lbryapi2.default.getExchangeRates().then(function (_ref) {
        var LBC_USD = _ref.LBC_USD;

        resolve({ cost: fee.amount / LBC_USD, includesData: true });
      });
    }
  };
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doFetchFileInfo = doFetchFileInfo;
exports.doFileList = doFileList;
exports.doFetchFileInfosAndPublishedClaims = doFetchFileInfosAndPublishedClaims;
exports.doSetFileListSort = doSetFileListSort;

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _lbry = __webpack_require__(9);

var _lbry2 = _interopRequireDefault(_lbry);

var _claims = __webpack_require__(8);

var _claims2 = __webpack_require__(17);

var _file_info = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function doFetchFileInfo(uri) {
  return function (dispatch, getState) {
    var state = getState();
    var claim = (0, _claims2.selectClaimsByUri)(state)[uri];
    var outpoint = claim ? claim.txid + ':' + claim.nout : null;
    var alreadyFetching = !!(0, _file_info.selectUrisLoading)(state)[uri];

    if (!alreadyFetching) {
      dispatch({
        type: ACTIONS.FETCH_FILE_INFO_STARTED,
        data: {
          outpoint: outpoint
        }
      });

      _lbry2.default.file_list({ outpoint: outpoint, full_status: true }).then(function (fileInfos) {
        dispatch({
          type: ACTIONS.FETCH_FILE_INFO_COMPLETED,
          data: {
            outpoint: outpoint,
            fileInfo: fileInfos && fileInfos.length ? fileInfos[0] : null
          }
        });
      });
    }
  };
}

function doFileList() {
  return function (dispatch, getState) {
    var state = getState();
    var isFetching = (0, _file_info.selectIsFetchingFileList)(state);

    if (!isFetching) {
      dispatch({
        type: ACTIONS.FILE_LIST_STARTED
      });

      _lbry2.default.file_list().then(function (fileInfos) {
        dispatch({
          type: ACTIONS.FILE_LIST_SUCCEEDED,
          data: {
            fileInfos: fileInfos
          }
        });
      });
    }
  };
}

function doFetchFileInfosAndPublishedClaims() {
  return function (dispatch, getState) {
    var state = getState();
    var isFetchingClaimListMine = (0, _claims2.selectIsFetchingClaimListMine)(state);
    var isFetchingFileInfo = (0, _file_info.selectIsFetchingFileList)(state);

    if (!isFetchingClaimListMine) dispatch((0, _claims.doFetchClaimListMine)());
    if (!isFetchingFileInfo) dispatch(doFileList());
  };
}

function doSetFileListSort(page, value) {
  return {
    type: ACTIONS.SET_FILE_LIST_SORT,
    data: { page: page, value: value }
  };
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectFileListDownloadedSort = exports.selectFileListPublishedSort = exports.selectSearchDownloadUris = exports.selectTotalDownloadProgress = exports.selectDownloadingFileInfos = exports.selectFileInfosDownloaded = exports.makeSelectLoadingForUri = exports.selectUrisLoading = exports.makeSelectDownloadingForUri = exports.selectDownloadingByOutpoint = exports.makeSelectFileInfoForUri = exports.selectIsFetchingFileListDownloadedOrPublished = exports.selectIsFetchingFileList = exports.selectFileInfosByOutpoint = exports.selectState = undefined;

var _claims = __webpack_require__(17);

var _reselect = __webpack_require__(19);

var _lbryURI = __webpack_require__(3);

var selectState = exports.selectState = function selectState(state) {
  return state.fileInfo || {};
};

var selectFileInfosByOutpoint = exports.selectFileInfosByOutpoint = (0, _reselect.createSelector)(selectState, function (state) {
  return state.byOutpoint || {};
});

var selectIsFetchingFileList = exports.selectIsFetchingFileList = (0, _reselect.createSelector)(selectState, function (state) {
  return state.isFetchingFileList;
});

var selectIsFetchingFileListDownloadedOrPublished = exports.selectIsFetchingFileListDownloadedOrPublished = (0, _reselect.createSelector)(selectIsFetchingFileList, _claims.selectIsFetchingClaimListMine, function (isFetchingFileList, isFetchingClaimListMine) {
  return isFetchingFileList || isFetchingClaimListMine;
});

var makeSelectFileInfoForUri = exports.makeSelectFileInfoForUri = function makeSelectFileInfoForUri(uri) {
  return (0, _reselect.createSelector)(_claims.selectClaimsByUri, selectFileInfosByOutpoint, function (claims, byOutpoint) {
    var claim = claims[uri];
    var outpoint = claim ? claim.txid + ':' + claim.nout : undefined;
    return outpoint ? byOutpoint[outpoint] : undefined;
  });
};

var selectDownloadingByOutpoint = exports.selectDownloadingByOutpoint = (0, _reselect.createSelector)(selectState, function (state) {
  return state.downloadingByOutpoint || {};
});

var makeSelectDownloadingForUri = exports.makeSelectDownloadingForUri = function makeSelectDownloadingForUri(uri) {
  return (0, _reselect.createSelector)(selectDownloadingByOutpoint, makeSelectFileInfoForUri(uri), function (byOutpoint, fileInfo) {
    if (!fileInfo) return false;
    return byOutpoint[fileInfo.outpoint];
  });
};

var selectUrisLoading = exports.selectUrisLoading = (0, _reselect.createSelector)(selectState, function (state) {
  return state.urisLoading || {};
});

var makeSelectLoadingForUri = exports.makeSelectLoadingForUri = function makeSelectLoadingForUri(uri) {
  return (0, _reselect.createSelector)(selectUrisLoading, function (byUri) {
    return byUri && byUri[uri];
  });
};

var selectFileInfosDownloaded = exports.selectFileInfosDownloaded = (0, _reselect.createSelector)(selectFileInfosByOutpoint, _claims.selectMyClaims, function (byOutpoint, myClaims) {
  return Object.values(byOutpoint).filter(function (fileInfo) {
    var myClaimIds = myClaims.map(function (claim) {
      return claim.claim_id;
    });

    return fileInfo && myClaimIds.indexOf(fileInfo.claim_id) === -1 && (fileInfo.completed || fileInfo.written_bytes);
  });
});

// export const selectFileInfoForUri = (state, props) => {
//   const claims = selectClaimsByUri(state),
//     claim = claims[props.uri],
//     fileInfos = selectAllFileInfos(state),
//     outpoint = claim ? `${claim.txid}:${claim.nout}` : undefined;

//   return outpoint && fileInfos ? fileInfos[outpoint] : undefined;
// };

var selectDownloadingFileInfos = exports.selectDownloadingFileInfos = (0, _reselect.createSelector)(selectDownloadingByOutpoint, selectFileInfosByOutpoint, function (downloadingByOutpoint, fileInfosByOutpoint) {
  var outpoints = Object.keys(downloadingByOutpoint);
  var fileInfos = [];

  outpoints.forEach(function (outpoint) {
    var fileInfo = fileInfosByOutpoint[outpoint];

    if (fileInfo) fileInfos.push(fileInfo);
  });

  return fileInfos;
});

var selectTotalDownloadProgress = exports.selectTotalDownloadProgress = (0, _reselect.createSelector)(selectDownloadingFileInfos, function (fileInfos) {
  var progress = [];

  fileInfos.forEach(function (fileInfo) {
    progress.push(fileInfo.written_bytes / fileInfo.total_bytes * 100);
  });

  var totalProgress = progress.reduce(function (a, b) {
    return a + b;
  }, 0);

  if (fileInfos.length > 0) return totalProgress / fileInfos.length / 100.0;
  return -1;
});

var selectSearchDownloadUris = exports.selectSearchDownloadUris = function selectSearchDownloadUris(query) {
  return (0, _reselect.createSelector)(selectFileInfosDownloaded, _claims.selectClaimsById, function (fileInfos, claimsById) {
    if (!query || !fileInfos.length) {
      return null;
    }

    var queryParts = query.toLowerCase().split(' ');
    var searchQueryDictionary = {};
    queryParts.forEach(function (subQuery) {
      searchQueryDictionary[subQuery] = subQuery;
    });

    var arrayContainsQueryPart = function arrayContainsQueryPart(array) {
      for (var i = 0; i < array.length; i += 1) {
        var subQuery = array[i];
        if (searchQueryDictionary[subQuery]) {
          return true;
        }
      }
      return false;
    };

    var downloadResultsFromQuery = [];
    fileInfos.forEach(function (fileInfo) {
      var channelName = fileInfo.channel_name,
          claimName = fileInfo.claim_name,
          metadata = fileInfo.metadata;
      var author = metadata.author,
          description = metadata.description,
          title = metadata.title;


      if (channelName) {
        var lowerCaseChannel = channelName.toLowerCase();
        var strippedOutChannelName = lowerCaseChannel.slice(1); // trim off the @
        if (searchQueryDictionary[channelName] || searchQueryDictionary[strippedOutChannelName]) {
          downloadResultsFromQuery.push(fileInfo);
          return;
        }
      }

      var nameParts = claimName.toLowerCase().split('-');
      if (arrayContainsQueryPart(nameParts)) {
        downloadResultsFromQuery.push(fileInfo);
        return;
      }

      var titleParts = title.toLowerCase().split(' ');
      if (arrayContainsQueryPart(titleParts)) {
        downloadResultsFromQuery.push(fileInfo);
        return;
      }

      if (author) {
        var authorParts = author.toLowerCase().split(' ');
        if (arrayContainsQueryPart(authorParts)) {
          downloadResultsFromQuery.push(fileInfo);
          return;
        }
      }

      if (description) {
        var descriptionParts = description.toLowerCase().split(' ');
        if (arrayContainsQueryPart(descriptionParts)) {
          downloadResultsFromQuery.push(fileInfo);
        }
      }
    });

    return downloadResultsFromQuery.length ? downloadResultsFromQuery.map(function (fileInfo) {
      var channelName = fileInfo.channel_name,
          claimId = fileInfo.claim_id,
          claimName = fileInfo.claim_name;


      var uriParams = {};

      if (channelName) {
        var claim = claimsById[claimId];
        if (claim && claim.value) {
          uriParams.claimId = claim.value.publisherSignature.certificateId;
        } else {
          uriParams.claimId = claimId;
        }
        uriParams.channelName = channelName;
        uriParams.contentName = claimName;
      } else {
        uriParams.claimId = claimId;
        uriParams.claimName = claimName;
      }

      var uri = (0, _lbryURI.buildURI)(uriParams);
      return uri;
    }) : null;
  });
};

var selectFileListPublishedSort = exports.selectFileListPublishedSort = (0, _reselect.createSelector)(selectState, function (state) {
  return state.fileListPublishedSort;
});

var selectFileListDownloadedSort = exports.selectFileListDownloadedSort = (0, _reselect.createSelector)(selectState, function (state) {
  return state.fileListDownloadedSort;
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doBlurSearchInput = exports.doFocusSearchInput = exports.doUpdateSearchQuery = exports.getSearchSuggestions = exports.doSearch = undefined;

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _lbryURI = __webpack_require__(3);

var _claims = __webpack_require__(8);

var _search = __webpack_require__(21);

var _batchActions = __webpack_require__(24);

var _handleFetch = __webpack_require__(33);

var _handleFetch2 = _interopRequireDefault(_handleFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// @flow
var DEFAULTSEARCHRESULTSIZE = 10;
var DEFAULTSEARCHRESULTFROM = 0;
/*:: type Dispatch = (action: any) => any;*/
/*:: type GetState = () => {};*/
var doSearch = exports.doSearch = function doSearch(rawQuery) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULTSEARCHRESULTSIZE;
  var from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULTSEARCHRESULTFROM;
  var isBackgroundSearch = arguments[3];
  return function (dispatch /*: Dispatch*/, getState /*: GetState*/) {
    var state = getState();
    var query = rawQuery.replace(/^lbry:\/\//i, '').replace(/\//, ' ');

    if (!query) {
      dispatch({
        type: ACTIONS.SEARCH_FAIL
      });
      return;
    }

    // If we have already searched for something, we don't need to do anything
    var urisForQuery = (0, _search.makeSelectSearchUris)(query)(state);
    if (urisForQuery && !!urisForQuery.length) {
      return;
    }

    dispatch({
      type: ACTIONS.SEARCH_START
    });

    // If the user is on the file page with a pre-populated uri and they select
    // the search option without typing anything, searchQuery will be empty
    // We need to populate it so the input is filled on the search page
    // isBackgroundSearch means the search is happening in the background, don't update the search query
    if (!state.search.searchQuery && !isBackgroundSearch) {
      dispatch({
        type: ACTIONS.UPDATE_SEARCH_QUERY,
        data: { searchQuery: query }
      });
    }

    var encodedQuery = encodeURIComponent(query);
    fetch('https://lighthouse.lbry.io/search?s=' + encodedQuery + '&size=' + size + '&from=' + from).then(_handleFetch2.default).then(function (data) {
      var uris = [];
      var actions = [];

      data.forEach(function (result) {
        var uri = (0, _lbryURI.buildURI)({
          claimName: result.name,
          claimId: result.claimId
        });
        actions.push((0, _claims.doResolveUri)(uri));
        uris.push(uri);
      });

      actions.push({
        type: ACTIONS.SEARCH_SUCCESS,
        data: {
          query: query,
          uris: uris
        }
      });
      dispatch(_batchActions.batchActions.apply(undefined, actions));
    }).catch(function () {
      dispatch({
        type: ACTIONS.SEARCH_FAIL
      });
    });
  };
};

var getSearchSuggestions = exports.getSearchSuggestions = function getSearchSuggestions(value /*: string*/) {
  return function (dispatch /*: Dispatch*/, getState /*: GetState*/) {
    var query = value.trim();

    // strip out any basic stuff for more accurate search results
    var searchValue = query.replace(/lbry:\/\//g, '').replace(/-/g, ' ');
    if (searchValue.includes('#')) {
      // This should probably be more robust, but I think it's fine for now
      // Remove everything after # to get rid of the claim id
      searchValue = searchValue.substring(0, searchValue.indexOf('#'));
    }

    var suggestions = (0, _search.selectSuggestions)(getState());
    if (suggestions[searchValue]) {
      return;
    }

    fetch('https://lighthouse.lbry.io/autocomplete?s=' + searchValue).then(_handleFetch2.default).then(function (apiSuggestions) {
      dispatch({
        type: ACTIONS.UPDATE_SEARCH_SUGGESTIONS,
        data: {
          query: searchValue,
          suggestions: apiSuggestions
        }
      });
    }).catch(function () {
      // If the fetch fails, do nothing
      // Basic search suggestions are already populated at this point
    });
  };
};

var doUpdateSearchQuery = exports.doUpdateSearchQuery = function doUpdateSearchQuery(query /*: string*/, shouldSkipSuggestions /*: ?boolean*/) {
  return function (dispatch /*: Dispatch*/) {
    dispatch({
      type: ACTIONS.UPDATE_SEARCH_QUERY,
      data: { query: query }
    });

    // Don't fetch new suggestions if the user just added a space
    if (!query.endsWith(' ') || !shouldSkipSuggestions) {
      dispatch(getSearchSuggestions(query));
    }
  };
};

var doFocusSearchInput = exports.doFocusSearchInput = function doFocusSearchInput() {
  return function (dispatch /*: Dispatch*/) {
    return dispatch({
      type: ACTIONS.SEARCH_FOCUS
    });
  };
};

var doBlurSearchInput = exports.doBlurSearchInput = function doBlurSearchInput() {
  return function (dispatch /*: Dispatch*/) {
    return dispatch({
      type: ACTIONS.SEARCH_BLUR
    });
  };
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handleFetchResponse;
function handleFetchResponse(response) {
  return response.status === 200 ? Promise.resolve(response.json()) : Promise.reject(new Error(response.statusText));
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.doFetchBlackListedOutpoints = doFetchBlackListedOutpoints;
exports.doBlackListedOutpointsSubscribe = doBlackListedOutpointsSubscribe;

var _lbryapi = __webpack_require__(12);

var _lbryapi2 = _interopRequireDefault(_lbryapi);

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

    _lbryapi2.default.call('file', 'list_blocked').then(success, failure);
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.claimsReducer = claimsReducer;

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _lbryURI = __webpack_require__(3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var reducers = {};

var defaultState = {
  channelClaimCounts: {}
};

reducers[ACTIONS.RESOLVE_URIS_COMPLETED] = function (state, action) {
  var resolveInfo = action.data.resolveInfo;

  var byUri = Object.assign({}, state.claimsByUri);
  var byId = Object.assign({}, state.byId);
  var channelClaimCounts = Object.assign({}, state.channelClaimCounts);

  Object.entries(resolveInfo).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        uri = _ref2[0],
        _ref2$ = _ref2[1],
        certificate = _ref2$.certificate,
        claimsInChannel = _ref2$.claimsInChannel;

    if (certificate && !Number.isNaN(claimsInChannel)) {
      channelClaimCounts[uri] = claimsInChannel;
    }
  });

  Object.entries(resolveInfo).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        uri = _ref4[0],
        _ref4$ = _ref4[1],
        certificate = _ref4$.certificate,
        claim = _ref4$.claim;

    if (claim) {
      byId[claim.claim_id] = claim;
      byUri[uri] = claim.claim_id;
    } else if (claim === undefined && certificate !== undefined) {
      byId[certificate.claim_id] = certificate;
      // Don't point URI at the channel certificate unless it actually is
      // a channel URI. This is brittle.
      if (!uri.split(certificate.name)[1].match(/\//)) {
        byUri[uri] = certificate.claim_id;
      } else {
        byUri[uri] = null;
      }
    } else {
      byUri[uri] = null;
    }
  });

  return Object.assign({}, state, {
    byId: byId,
    claimsByUri: byUri,
    channelClaimCounts: channelClaimCounts,
    resolvingUris: (state.resolvingUris || []).filter(function (uri) {
      return !resolveInfo[uri];
    })
  });
};

reducers[ACTIONS.FETCH_CLAIM_LIST_MINE_STARTED] = function (state) {
  return Object.assign({}, state, {
    isFetchingClaimListMine: true
  });
};

reducers[ACTIONS.FETCH_CLAIM_LIST_MINE_COMPLETED] = function (state, action) {
  var claims = action.data.claims;

  var byId = Object.assign({}, state.byId);
  var byUri = Object.assign({}, state.claimsByUri);
  var pendingById = Object.assign({}, state.pendingById);

  claims.forEach(function (claim) {
    var uri = (0, _lbryURI.buildURI)({ claimName: claim.name, claimId: claim.claim_id });

    if (claim.type && claim.type.match(/claim|update/)) {
      if (claim.confirmations < 1) {
        pendingById[claim.claim_id] = claim;
        delete byId[claim.claim_id];
        delete byUri[claim.claim_id];
      } else {
        byId[claim.claim_id] = claim;
        byUri[uri] = claim.claim_id;
      }
    }
  });

  // Remove old pending publishes
  Object.values(pendingById).filter(function (pendingClaim) {
    return byId[pendingClaim.claim_id];
  }).forEach(function (pendingClaim) {
    delete pendingById[pendingClaim.claim_id];
  });

  return Object.assign({}, state, {
    isFetchingClaimListMine: false,
    myClaims: claims,
    byId: byId,
    claimsByUri: byUri,
    pendingById: pendingById
  });
};

reducers[ACTIONS.FETCH_CHANNEL_LIST_STARTED] = function (state) {
  return Object.assign({}, state, { fetchingMyChannels: true });
};

reducers[ACTIONS.FETCH_CHANNEL_LIST_COMPLETED] = function (state, action) {
  var claims = action.data.claims;

  var myChannelClaims = new Set(state.myChannelClaims);
  var byId = Object.assign({}, state.byId);

  claims.forEach(function (claim) {
    myChannelClaims.add(claim.claim_id);
    byId[claim.claim_id] = claim;
  });

  return Object.assign({}, state, {
    byId: byId,
    fetchingMyChannels: false,
    myChannelClaims: myChannelClaims
  });
};

reducers[ACTIONS.FETCH_CHANNEL_CLAIMS_STARTED] = function (state, action) {
  var _action$data = action.data,
      uri = _action$data.uri,
      page = _action$data.page;

  var fetchingChannelClaims = Object.assign({}, state.fetchingChannelClaims);

  fetchingChannelClaims[uri] = page;

  return Object.assign({}, state, {
    fetchingChannelClaims: fetchingChannelClaims
  });
};

reducers[ACTIONS.FETCH_CHANNEL_CLAIMS_COMPLETED] = function (state, action) {
  var _action$data2 = action.data,
      uri = _action$data2.uri,
      claims = _action$data2.claims,
      page = _action$data2.page;


  var claimsByChannel = Object.assign({}, state.claimsByChannel);
  var byChannel = Object.assign({}, claimsByChannel[uri]);
  var allClaimIds = new Set(byChannel.all);
  var currentPageClaimIds = [];
  var byId = Object.assign({}, state.byId);
  var fetchingChannelClaims = Object.assign({}, state.fetchingChannelClaims);
  var claimsByUri = Object.assign({}, state.claimsByUri);

  if (claims !== undefined) {
    claims.forEach(function (claim) {
      allClaimIds.add(claim.claim_id);
      currentPageClaimIds.push(claim.claim_id);
      byId[claim.claim_id] = claim;
      claimsByUri['lbry://' + claim.name + '#' + claim.claim_id] = claim.claim_id;
    });
  }

  byChannel.all = allClaimIds;
  byChannel[page] = currentPageClaimIds;
  claimsByChannel[uri] = byChannel;
  delete fetchingChannelClaims[uri];

  return Object.assign({}, state, {
    claimsByChannel: claimsByChannel,
    byId: byId,
    fetchingChannelClaims: fetchingChannelClaims,
    claimsByUri: claimsByUri
  });
};

reducers[ACTIONS.ABANDON_CLAIM_STARTED] = function (state, action) {
  var claimId = action.data.claimId;

  var abandoningById = Object.assign({}, state.abandoningById);

  abandoningById[claimId] = true;

  return Object.assign({}, state, {
    abandoningById: abandoningById
  });
};

reducers[ACTIONS.ABANDON_CLAIM_SUCCEEDED] = function (state, action) {
  var claimId = action.data.claimId;

  var byId = Object.assign({}, state.byId);
  var claimsByUri = Object.assign({}, state.claimsByUri);

  Object.keys(claimsByUri).forEach(function (uri) {
    if (claimsByUri[uri] === claimId) {
      delete claimsByUri[uri];
    }
  });

  delete byId[claimId];

  return Object.assign({}, state, {
    byId: byId,
    claimsByUri: claimsByUri
  });
};

reducers[ACTIONS.CREATE_CHANNEL_COMPLETED] = function (state, action) {
  var channelClaim = action.data.channelClaim;

  var byId = Object.assign({}, state.byId);
  var myChannelClaims = new Set(state.myChannelClaims);

  byId[channelClaim.claim_id] = channelClaim;
  myChannelClaims.add(channelClaim.claim_id);

  return Object.assign({}, state, {
    byId: byId,
    myChannelClaims: myChannelClaims
  });
};

reducers[ACTIONS.FETCH_FEATURED_CONTENT_STARTED] = function (state) {
  return Object.assign({}, state, {
    fetchingFeaturedContent: true
  });
};

reducers[ACTIONS.FETCH_FEATURED_CONTENT_COMPLETED] = function (state, action) {
  var _action$data3 = action.data,
      uris = _action$data3.uris,
      success = _action$data3.success;


  return Object.assign({}, state, {
    fetchingFeaturedContent: false,
    fetchingFeaturedContentFailed: !success,
    featuredUris: uris
  });
};

reducers[ACTIONS.FETCH_TRENDING_CONTENT_STARTED] = function (state) {
  return Object.assign({}, state, {
    fetchingTrendingContent: true
  });
};

reducers[ACTIONS.FETCH_TRENDING_CONTENT_COMPLETED] = function (state, action) {
  var _action$data4 = action.data,
      uris = _action$data4.uris,
      success = _action$data4.success;


  return Object.assign({}, state, {
    fetchingTrendingContent: false,
    fetchingTrendingContentFailed: !success,
    trendingUris: uris
  });
};

reducers[ACTIONS.RESOLVE_URIS_STARTED] = function (state, action) {
  var uris = action.data.uris;


  var oldResolving = state.resolvingUris || [];
  var newResolving = Object.assign([], oldResolving);

  uris.forEach(function (uri) {
    if (!newResolving.includes(uri)) {
      newResolving.push(uri);
    }
  });

  return Object.assign({}, state, {
    resolvingUris: newResolving
  });
};

reducers[ACTIONS.FETCH_CHANNEL_CLAIM_COUNT_COMPLETED] = function (state, action) {
  var channelClaimCounts = Object.assign({}, state.channelClaimCounts);
  var _action$data5 = action.data,
      uri = _action$data5.uri,
      totalClaims = _action$data5.totalClaims;


  channelClaimCounts[uri] = totalClaims;

  return Object.assign({}, state, {
    channelClaimCounts: channelClaimCounts
  });
};

function claimsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  var handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.costInfoReducer = costInfoReducer;

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var reducers = {};
var defaultState = {};

reducers[ACTIONS.FETCH_COST_INFO_STARTED] = function (state, action) {
  var uri = action.data.uri;

  var newFetching = Object.assign({}, state.fetching);
  newFetching[uri] = true;

  return Object.assign({}, state, {
    fetching: newFetching
  });
};

reducers[ACTIONS.FETCH_COST_INFO_COMPLETED] = function (state, action) {
  var _action$data = action.data,
      uri = _action$data.uri,
      costInfo = _action$data.costInfo;

  var newByUri = Object.assign({}, state.byUri);
  var newFetching = Object.assign({}, state.fetching);

  newByUri[uri] = costInfo;
  delete newFetching[uri];

  return Object.assign({}, state, {
    byUri: newByUri,
    fetching: newFetching
  });
};

function costInfoReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  var handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.fileInfoReducer = fileInfoReducer;

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _sort_options = __webpack_require__(38);

var SORT_OPTIONS = _interopRequireWildcard(_sort_options);

var _pages = __webpack_require__(39);

var PAGES = _interopRequireWildcard(_pages);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducers = {};
var defaultState = {
  fileListPublishedSort: SORT_OPTIONS.DATE_NEW,
  fileListDownloadedSort: SORT_OPTIONS.DATE_NEW
};

reducers[ACTIONS.FILE_LIST_STARTED] = function (state) {
  return Object.assign({}, state, {
    isFetchingFileList: true
  });
};

reducers[ACTIONS.FILE_LIST_SUCCEEDED] = function (state, action) {
  var fileInfos = action.data.fileInfos;

  var newByOutpoint = Object.assign({}, state.byOutpoint);
  var pendingByOutpoint = Object.assign({}, state.pendingByOutpoint);

  fileInfos.forEach(function (fileInfo) {
    var outpoint = fileInfo.outpoint;


    if (outpoint) newByOutpoint[fileInfo.outpoint] = fileInfo;
  });

  return Object.assign({}, state, {
    isFetchingFileList: false,
    byOutpoint: newByOutpoint,
    pendingByOutpoint: pendingByOutpoint
  });
};

reducers[ACTIONS.FETCH_FILE_INFO_STARTED] = function (state, action) {
  var outpoint = action.data.outpoint;

  var newFetching = Object.assign({}, state.fetching);

  newFetching[outpoint] = true;

  return Object.assign({}, state, {
    fetching: newFetching
  });
};

reducers[ACTIONS.FETCH_FILE_INFO_COMPLETED] = function (state, action) {
  var _action$data = action.data,
      fileInfo = _action$data.fileInfo,
      outpoint = _action$data.outpoint;


  var newByOutpoint = Object.assign({}, state.byOutpoint);
  var newFetching = Object.assign({}, state.fetching);

  newByOutpoint[outpoint] = fileInfo;
  delete newFetching[outpoint];

  return Object.assign({}, state, {
    byOutpoint: newByOutpoint,
    fetching: newFetching
  });
};

reducers[ACTIONS.DOWNLOADING_STARTED] = function (state, action) {
  var _action$data2 = action.data,
      uri = _action$data2.uri,
      outpoint = _action$data2.outpoint,
      fileInfo = _action$data2.fileInfo;


  var newByOutpoint = Object.assign({}, state.byOutpoint);
  var newDownloading = Object.assign({}, state.downloadingByOutpoint);
  var newLoading = Object.assign({}, state.urisLoading);

  newDownloading[outpoint] = true;
  newByOutpoint[outpoint] = fileInfo;
  delete newLoading[uri];

  return Object.assign({}, state, {
    downloadingByOutpoint: newDownloading,
    urisLoading: newLoading,
    byOutpoint: newByOutpoint
  });
};

reducers[ACTIONS.DOWNLOADING_PROGRESSED] = function (state, action) {
  var _action$data3 = action.data,
      outpoint = _action$data3.outpoint,
      fileInfo = _action$data3.fileInfo;


  var newByOutpoint = Object.assign({}, state.byOutpoint);
  var newDownloading = Object.assign({}, state.downloadingByOutpoint);

  newByOutpoint[outpoint] = fileInfo;
  newDownloading[outpoint] = true;

  return Object.assign({}, state, {
    byOutpoint: newByOutpoint,
    downloadingByOutpoint: newDownloading
  });
};

reducers[ACTIONS.DOWNLOADING_CANCELED] = function (state, action) {
  var outpoint = action.data.outpoint;


  var newDownloading = Object.assign({}, state.downloadingByOutpoint);
  delete newDownloading[outpoint];

  return Object.assign({}, state, {
    downloadingByOutpoint: newDownloading
  });
};

reducers[ACTIONS.DOWNLOADING_COMPLETED] = function (state, action) {
  var _action$data4 = action.data,
      outpoint = _action$data4.outpoint,
      fileInfo = _action$data4.fileInfo;


  var newByOutpoint = Object.assign({}, state.byOutpoint);
  var newDownloading = Object.assign({}, state.downloadingByOutpoint);

  newByOutpoint[outpoint] = fileInfo;
  delete newDownloading[outpoint];

  return Object.assign({}, state, {
    byOutpoint: newByOutpoint,
    downloadingByOutpoint: newDownloading
  });
};

reducers[ACTIONS.FILE_DELETE] = function (state, action) {
  var outpoint = action.data.outpoint;


  var newByOutpoint = Object.assign({}, state.byOutpoint);
  var downloadingByOutpoint = Object.assign({}, state.downloadingByOutpoint);

  delete newByOutpoint[outpoint];
  delete downloadingByOutpoint[outpoint];

  return Object.assign({}, state, {
    byOutpoint: newByOutpoint,
    downloadingByOutpoint: downloadingByOutpoint
  });
};

reducers[ACTIONS.LOADING_VIDEO_STARTED] = function (state, action) {
  var uri = action.data.uri;


  var newLoading = Object.assign({}, state.urisLoading);
  newLoading[uri] = true;

  var newErrors = _extends({}, state.errors);
  if (uri in newErrors) delete newErrors[uri];

  return Object.assign({}, state, {
    urisLoading: newLoading,
    errors: _extends({}, newErrors)
  });
};

reducers[ACTIONS.LOADING_VIDEO_FAILED] = function (state, action) {
  var uri = action.data.uri;


  var newLoading = Object.assign({}, state.urisLoading);
  delete newLoading[uri];

  var newErrors = _extends({}, state.errors);
  newErrors[uri] = true;

  return Object.assign({}, state, {
    urisLoading: newLoading,
    errors: _extends({}, newErrors)
  });
};

reducers[ACTIONS.FETCH_DATE] = function (state, action) {
  var time = action.data.time;

  if (time) {
    return Object.assign({}, state, {
      publishedDate: time
    });
  }
  return null;
};

reducers[ACTIONS.SET_FILE_LIST_SORT] = function (state, action) {
  var _pageSortStates;

  var pageSortStates = (_pageSortStates = {}, _defineProperty(_pageSortStates, PAGES.PUBLISHED, 'fileListPublishedSort'), _defineProperty(_pageSortStates, PAGES.DOWNLOADED, 'fileListDownloadedSort'), _pageSortStates);
  var pageSortState = pageSortStates[action.data.page];
  var value = action.data.value;


  return Object.assign({}, state, _defineProperty({}, pageSortState, value));
};

function fileInfoReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  var handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DATE_NEW = exports.DATE_NEW = 'dateNew';
var DATE_OLD = exports.DATE_OLD = 'dateOld';
var TITLE = exports.TITLE = 'title';
var FILENAME = exports.FILENAME = 'filename';

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var AUTH = exports.AUTH = 'auth';
var BACKUP = exports.BACKUP = 'backup';
var CHANNEL = exports.CHANNEL = 'channel';
var DISCOVER = exports.DISCOVER = 'discover';
var FILE = exports.FILE = 'file';
var DOWNLOADED = exports.DOWNLOADED = 'downloaded';
var PUBLISHED = exports.PUBLISHED = 'published';
var GET_CREDITS = exports.GET_CREDITS = 'getcredits';
var HELP = exports.HELP = 'help';
var INVITE = exports.INVITE = 'invite';
var PUBLISH = exports.PUBLISH = 'publish';
var REPORT = exports.REPORT = 'report';
var REWARDS = exports.REWARDS = 'rewards';
var SEARCH = exports.SEARCH = 'search';
var SEND_CREDITS = exports.SEND_CREDITS = 'send';
var SETTINGS = exports.SETTINGS = 'settings';
var SHOW = exports.SHOW = 'show';
var SUBSCRIPTIONS = exports.SUBSCRIPTIONS = 'subscriptions';
var TRANSACTION_HISTORY = exports.TRANSACTION_HISTORY = 'history';
var HISTORY = exports.HISTORY = 'user_history';
var WALLET = exports.WALLET = 'wallet';

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notificationsReducer = undefined;

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _reduxUtils = __webpack_require__(41);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @flow
/*:: import type {
  NotificationState,
  DoToast,
  DoNotification,
  DoEditNotification,
  DoDeleteNotification,
} from 'types/Notification';*/


var defaultState /*: NotificationState*/ = {
  notifications: [],
  toasts: [],
  errors: []
};

var notificationsReducer = (0, _reduxUtils.handleActions)((_handleActions = {}, _defineProperty(_handleActions, ACTIONS.CREATE_TOAST, function (state /*: NotificationState*/, action /*: DoToast*/) {
  var toast = action.data;
  var newToasts = state.toasts.slice();
  newToasts.push(toast);

  return _extends({}, state, {
    toasts: newToasts
  });
}), _defineProperty(_handleActions, ACTIONS.DISMISS_TOAST, function (state /*: NotificationState*/) {
  var newToasts = state.toasts.slice();
  newToasts.shift();

  return _extends({}, state, {
    toasts: newToasts
  });
}), _defineProperty(_handleActions, ACTIONS.CREATE_NOTIFICATION, function (state /*: NotificationState*/, action /*: DoNotification*/) {
  var notification = action.data;
  var newNotifications = state.notifications.slice();
  newNotifications.push(notification);

  return _extends({}, state, {
    notifications: newNotifications
  });
}), _defineProperty(_handleActions, ACTIONS.EDIT_NOTIFICATION, function (state /*: NotificationState*/, action /*: DoEditNotification*/) {
  var notification = action.data.notification;

  var notifications = state.notifications.slice();

  notifications = notifications.map(function (pastNotification) {
    return pastNotification.id === notification.id ? notification : pastNotification;
  });

  return _extends({}, state, {
    notifications: notifications
  });
}), _defineProperty(_handleActions, ACTIONS.DELETE_NOTIFICATION, function (state /*: NotificationState*/, action /*: DoDeleteNotification*/) {
  var id = action.data.id;

  var newNotifications = state.notifications.slice();
  newNotifications = newNotifications.filter(function (notification) {
    return notification.id !== id;
  });

  return _extends({}, state, {
    notifications: newNotifications
  });
}), _defineProperty(_handleActions, ACTIONS.CREATE_ERROR, function (state /*: NotificationState*/, action /*: DoToast*/) {
  var error = action.data;
  var newErrors = state.errors.slice();
  newErrors.push(error);

  return _extends({}, state, {
    errors: newErrors
  });
}), _defineProperty(_handleActions, ACTIONS.DISMISS_ERROR, function (state /*: NotificationState*/) {
  var newErrors = state.errors.slice();
  newErrors.shift();

  return _extends({}, state, {
    errors: newErrors
  });
}), _handleActions), defaultState);

exports.notificationsReducer = notificationsReducer;

/***/ }),
/* 41 */
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchReducer = undefined;

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // @flow


var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _reduxUtils = __webpack_require__(41);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*:: type SearchSuccess = {
  type: ACTIONS.SEARCH_SUCCESS,
  data: {
    query: string,
    uris: Array<string>,
  },
};*/
/*:: type UpdateSearchQuery = {
  type: ACTIONS.UPDATE_SEARCH_QUERY,
  data: {
    query: string,
  },
};*/
/*:: type SearchSuggestion = {
  value: string,
  shorthand: string,
  type: string,
};*/
/*:: type UpdateSearchSuggestions = {
  type: ACTIONS.UPDATE_SEARCH_SUGGESTIONS,
  data: {
    query: string,
    suggestions: Array<SearchSuggestion>,
  },
};*/
/*:: type SearchState = {
  isActive: boolean,
  searchQuery: string,
  suggestions: Array<SearchSuggestion>,
  urisByQuery: {},
};*/
/*:: type HistoryNavigate = {
  type: ACTIONS.HISTORY_NAVIGATE,
  data: {
    url: string,
    index?: number,
    scrollY?: number,
  },
};*/


var defaultState = {
  isActive: false, // does the user have any typed text in the search input
  focused: false, // is the search input focused
  searchQuery: '', // needs to be an empty string for input focusing
  suggestions: {},
  urisByQuery: {}
};

var searchReducer = exports.searchReducer = (0, _reduxUtils.handleActions)((_handleActions = {}, _defineProperty(_handleActions, ACTIONS.SEARCH_START, function (state /*: SearchState*/) /*: SearchState*/ {
  return _extends({}, state, {
    searching: true
  });
}), _defineProperty(_handleActions, ACTIONS.SEARCH_SUCCESS, function (state /*: SearchState*/, action /*: SearchSuccess*/) /*: SearchState*/ {
  var _action$data = action.data,
      query = _action$data.query,
      uris = _action$data.uris;


  return _extends({}, state, {
    searching: false,
    urisByQuery: Object.assign({}, state.urisByQuery, _defineProperty({}, query, uris))
  });
}), _defineProperty(_handleActions, ACTIONS.SEARCH_FAIL, function (state /*: SearchState*/) /*: SearchState*/ {
  return _extends({}, state, {
    searching: false
  });
}), _defineProperty(_handleActions, ACTIONS.UPDATE_SEARCH_QUERY, function (state /*: SearchState*/, action /*: UpdateSearchQuery*/) /*: SearchState*/ {
  return _extends({}, state, {
    searchQuery: action.data.query,
    isActive: true
  });
}), _defineProperty(_handleActions, ACTIONS.UPDATE_SEARCH_SUGGESTIONS, function (state /*: SearchState*/, action /*: UpdateSearchSuggestions*/) /*: SearchState*/ {
  return _extends({}, state, {
    suggestions: _extends({}, state.suggestions, _defineProperty({}, action.data.query, action.data.suggestions))
  });
}), _defineProperty(_handleActions, ACTIONS.HISTORY_NAVIGATE, function (state /*: SearchState*/, action /*: HistoryNavigate*/) /*: SearchState*/ {
  var url = action.data.url;

  return _extends({}, state, {
    searchQuery: url.indexOf('/search') === 0 ? url.slice(14) : '',
    isActive: url.indexOf('/search') === 0,
    suggestions: {}
  });
}), _defineProperty(_handleActions, ACTIONS.DISMISS_NOTIFICATION, function (state /*: SearchState*/) /*: SearchState*/ {
  return _extends({}, state, {
    isActive: false
  });
}), _defineProperty(_handleActions, ACTIONS.SEARCH_FOCUS, function (state /*: SearchState*/) /*: SearchState*/ {
  return _extends({}, state, {
    focused: true
  });
}), _defineProperty(_handleActions, ACTIONS.SEARCH_BLUR, function (state /*: SearchState*/) /*: SearchState*/ {
  return _extends({}, state, {
    focused: false
  });
}), _handleActions), defaultState);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.walletReducer = walletReducer;

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var reducers = {}; // @flow

var buildDraftTransaction = function buildDraftTransaction() {
  return {
    amount: undefined,
    address: undefined
  };
};

// TODO: Split into common success and failure types
// See details in https://github.com/lbryio/lbry/issues/1307
/*:: type ActionResult = {
  type: any,
  result: any,
};*/
/*:: type WalletState = {
  balance: any,
  blocks: any,
  latestBlock: number,
  transactions: any,
  fetchingTransactions: boolean,
  gettingNewAddress: boolean,
  draftTransaction: any,
  sendingSupport: boolean,
  walletIsEncrypted: boolean,
  walletEncryptPending: boolean,
  walletEncryptSucceded: ?boolean,
  walletEncryptResult: ?boolean,
  walletDecryptPending: boolean,
  walletDecryptSucceded: ?boolean,
  walletDecryptResult: ?boolean,
  walletUnlockPending: boolean,
  walletUnlockSucceded: ?boolean,
  walletUnlockResult: ?boolean,
  walletLockPending: boolean,
  walletLockSucceded: ?boolean,
  walletLockResult: ?boolean,
};*/


var defaultState = {
  balance: undefined,
  blocks: {},
  latestBlock: undefined,
  transactions: {},
  fetchingTransactions: false,
  gettingNewAddress: false,
  draftTransaction: buildDraftTransaction(),
  sendingSupport: false,
  walletIsEncrypted: false,
  walletEncryptPending: false,
  walletEncryptSucceded: null,
  walletEncryptResult: null,
  walletDecryptPending: false,
  walletDecryptSucceded: null,
  walletDecryptResult: null,
  walletUnlockPending: false,
  walletUnlockSucceded: null,
  walletUnlockResult: null,
  walletLockPending: false,
  walletLockSucceded: null,
  walletLockResult: null,
  transactionListFilter: 'all'
};

reducers[ACTIONS.FETCH_TRANSACTIONS_STARTED] = function (state /*: WalletState*/) {
  return Object.assign({}, state, {
    fetchingTransactions: true
  });
};

reducers[ACTIONS.FETCH_TRANSACTIONS_COMPLETED] = function (state /*: WalletState*/, action) {
  var byId = Object.assign({}, state.transactions);

  var transactions = action.data.transactions;


  transactions.forEach(function (transaction) {
    byId[transaction.txid] = transaction;
  });

  return Object.assign({}, state, {
    transactions: byId,
    fetchingTransactions: false
  });
};

reducers[ACTIONS.GET_NEW_ADDRESS_STARTED] = function (state /*: WalletState*/) {
  return Object.assign({}, state, {
    gettingNewAddress: true
  });
};

reducers[ACTIONS.GET_NEW_ADDRESS_COMPLETED] = function (state /*: WalletState*/, action) {
  var address = action.data.address;

  // Say no to localStorage!

  return Object.assign({}, state, {
    gettingNewAddress: false,
    receiveAddress: address
  });
};

reducers[ACTIONS.UPDATE_BALANCE] = function (state /*: WalletState*/, action) {
  return Object.assign({}, state, {
    balance: action.data.balance
  });
};

reducers[ACTIONS.CHECK_ADDRESS_IS_MINE_STARTED] = function (state /*: WalletState*/) {
  return Object.assign({}, state, {
    checkingAddressOwnership: true
  });
};

reducers[ACTIONS.CHECK_ADDRESS_IS_MINE_COMPLETED] = function (state /*: WalletState*/) {
  return Object.assign({}, state, {
    checkingAddressOwnership: false
  });
};

reducers[ACTIONS.SET_DRAFT_TRANSACTION_AMOUNT] = function (state /*: WalletState*/, action) {
  var oldDraft = state.draftTransaction;
  var newDraft = Object.assign({}, oldDraft, {
    amount: parseFloat(action.data.amount)
  });

  return Object.assign({}, state, {
    draftTransaction: newDraft
  });
};

reducers[ACTIONS.SET_DRAFT_TRANSACTION_ADDRESS] = function (state /*: WalletState*/, action) {
  var oldDraft = state.draftTransaction;
  var newDraft = Object.assign({}, oldDraft, {
    address: action.data.address
  });

  return Object.assign({}, state, {
    draftTransaction: newDraft
  });
};

reducers[ACTIONS.SEND_TRANSACTION_STARTED] = function (state /*: WalletState*/) {
  var newDraftTransaction = Object.assign({}, state.draftTransaction, {
    sending: true
  });

  return Object.assign({}, state, {
    draftTransaction: newDraftTransaction
  });
};

reducers[ACTIONS.SEND_TRANSACTION_COMPLETED] = function (state /*: WalletState*/) {
  return Object.assign({}, state, {
    draftTransaction: buildDraftTransaction()
  });
};

reducers[ACTIONS.SEND_TRANSACTION_FAILED] = function (state /*: WalletState*/, action) {
  var newDraftTransaction = Object.assign({}, state.draftTransaction, {
    sending: false,
    error: action.data.error
  });

  return Object.assign({}, state, {
    draftTransaction: newDraftTransaction
  });
};

reducers[ACTIONS.SUPPORT_TRANSACTION_STARTED] = function (state /*: WalletState*/) {
  return Object.assign({}, state, {
    sendingSupport: true
  });
};

reducers[ACTIONS.SUPPORT_TRANSACTION_COMPLETED] = function (state /*: WalletState*/) {
  return Object.assign({}, state, {
    sendingSupport: false
  });
};

reducers[ACTIONS.SUPPORT_TRANSACTION_FAILED] = function (state /*: WalletState*/, action) {
  return Object.assign({}, state, {
    error: action.data.error,
    sendingSupport: false
  });
};

reducers[ACTIONS.FETCH_BLOCK_SUCCESS] = function (state /*: WalletState*/, action) {
  var _action$data = action.data,
      block = _action$data.block,
      height = _action$data.block.height;

  var blocks = Object.assign({}, state.blocks);

  blocks[height] = block;

  return Object.assign({}, state, { blocks: blocks });
};

reducers[ACTIONS.WALLET_STATUS_COMPLETED] = function (state /*: WalletState*/, action) {
  return Object.assign({}, state, {
    walletIsEncrypted: action.result
  });
};

reducers[ACTIONS.WALLET_ENCRYPT_START] = function (state /*: WalletState*/) {
  return Object.assign({}, state, {
    walletEncryptPending: true,
    walletEncryptSucceded: null,
    walletEncryptResult: null
  });
};

reducers[ACTIONS.WALLET_ENCRYPT_COMPLETED] = function (state /*: WalletState*/, action /*: ActionResult*/) {
  return Object.assign({}, state, {
    walletEncryptPending: false,
    walletEncryptSucceded: true,
    walletEncryptResult: action.result
  });
};

reducers[ACTIONS.WALLET_ENCRYPT_FAILED] = function (state /*: WalletState*/, action /*: ActionResult*/) {
  return Object.assign({}, state, {
    walletEncryptPending: false,
    walletEncryptSucceded: false,
    walletEncryptResult: action.result
  });
};

reducers[ACTIONS.WALLET_DECRYPT_START] = function (state /*: WalletState*/) {
  return Object.assign({}, state, {
    walletDecryptPending: true,
    walletDecryptSucceded: null,
    walletDecryptResult: null
  });
};

reducers[ACTIONS.WALLET_DECRYPT_COMPLETED] = function (state /*: WalletState*/, action /*: ActionResult*/) {
  return Object.assign({}, state, {
    walletDecryptPending: false,
    walletDecryptSucceded: true,
    walletDecryptResult: action.result
  });
};

reducers[ACTIONS.WALLET_DECRYPT_FAILED] = function (state /*: WalletState*/, action /*: ActionResult*/) {
  return Object.assign({}, state, {
    walletDecryptPending: false,
    walletDecryptSucceded: false,
    walletDecryptResult: action.result
  });
};

reducers[ACTIONS.WALLET_UNLOCK_START] = function (state /*: WalletState*/) {
  return Object.assign({}, state, {
    walletUnlockPending: true,
    walletUnlockSucceded: null,
    walletUnlockResult: null
  });
};

reducers[ACTIONS.WALLET_UNLOCK_COMPLETED] = function (state /*: WalletState*/, action /*: ActionResult*/) {
  return Object.assign({}, state, {
    walletUnlockPending: false,
    walletUnlockSucceded: true,
    walletUnlockResult: action.result
  });
};

reducers[ACTIONS.WALLET_UNLOCK_FAILED] = function (state /*: WalletState*/, action /*: ActionResult*/) {
  return Object.assign({}, state, {
    walletUnlockPending: false,
    walletUnlockSucceded: false,
    walletUnlockResult: action.result
  });
};

reducers[ACTIONS.WALLET_LOCK_START] = function (state /*: WalletState*/) {
  return Object.assign({}, state, {
    walletLockPending: false,
    walletLockSucceded: null,
    walletLockResult: null
  });
};

reducers[ACTIONS.WALLET_LOCK_COMPLETED] = function (state /*: WalletState*/, action /*: ActionResult*/) {
  return Object.assign({}, state, {
    walletLockPending: false,
    walletLockSucceded: true,
    walletLockResult: action.result
  });
};

reducers[ACTIONS.WALLET_LOCK_FAILED] = function (state /*: WalletState*/, action /*: ActionResult*/) {
  return Object.assign({}, state, {
    walletLockPending: false,
    walletLockSucceded: false,
    walletLockResult: action.result
  });
};

reducers[ACTIONS.SET_TRANSACTION_LIST_FILTER] = function (state /*: WalletState*/, action /*: {}*/) {
  return Object.assign({}, state, {
    transactionListFilter: action.data
  });
};

reducers[ACTIONS.UPDATE_CURRENT_HEIGHT] = function (state /*: WalletState*/, action /*: { data: number }*/) {
  return Object.assign({}, state, {
    latestBlock: action.data
  });
};

function walletReducer() {
  var state /*: WalletState*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action /*: ActionResult*/ = arguments[1];

  var handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

/***/ }),
/* 44 */
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

var _reduxUtils = __webpack_require__(41);

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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectBlackListedOutpoints = exports.selectState = undefined;

var _reselect = __webpack_require__(19);

var selectState = exports.selectState = function selectState(state) {
  return state.blacklist || {};
};

var selectBlackListedOutpoints = exports.selectBlackListedOutpoints = (0, _reselect.createSelector)(selectState, function (state) {
  return state.blackListedOutpoints;
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectError = exports.selectToast = exports.selectState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reselect = __webpack_require__(19);

var selectState = exports.selectState = function selectState(state) {
  return state.notifications || {};
};

var selectToast = exports.selectToast = (0, _reselect.createSelector)(selectState, function (state) {
  if (state.toasts.length) {
    var _state$toasts$ = state.toasts[0],
        id = _state$toasts$.id,
        params = _state$toasts$.params;

    return _extends({
      id: id
    }, params);
  }

  return null;
});

var selectError = exports.selectError = (0, _reselect.createSelector)(selectState, function (state) {
  if (state.errors.length) {
    var error = state.errors[0].error;

    return {
      error: error
    };
  }

  return null;
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectFetchingCostInfoForUri = exports.selectFetchingCostInfo = exports.selectCostForCurrentPageUri = exports.makeSelectCostInfoForUri = exports.selectAllCostInfoByUri = exports.selectState = undefined;

var _reselect = __webpack_require__(19);

var _navigation = __webpack_require__(18);

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

var selectCostForCurrentPageUri = exports.selectCostForCurrentPageUri = (0, _reselect.createSelector)(selectAllCostInfoByUri, _navigation.selectCurrentParams, function (costInfo, params) {
  return params.uri && costInfo[params.uri] ? costInfo[params.uri].cost : undefined;
});

var selectFetchingCostInfo = exports.selectFetchingCostInfo = (0, _reselect.createSelector)(selectState, function (state) {
  return state.fetching || {};
});

var makeSelectFetchingCostInfoForUri = exports.makeSelectFetchingCostInfoForUri = function makeSelectFetchingCostInfoForUri(uri) {
  return (0, _reselect.createSelector)(selectFetchingCostInfo, function (fetchingByUri) {
    return fetchingByUri && fetchingByUri[uri];
  });
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_DOWN = exports.API_DOWN = 'apiDown';
var READY = exports.READY = 'ready';
var IN_PROGRESS = exports.IN_PROGRESS = 'inProgress';
var COMPLETE = exports.COMPLETE = 'complete';
var MANUAL = exports.MANUAL = 'manual';

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* hardcoded names still exist for these in reducers/settings.js - only discovered when debugging */
/* Many SETTINGS are stored in the localStorage by their name -
    be careful about changing the value of a SETTINGS constant, as doing so can invalidate existing SETTINGS */
var CREDIT_REQUIRED_ACKNOWLEDGED = exports.CREDIT_REQUIRED_ACKNOWLEDGED = 'credit_required_acknowledged';
var NEW_USER_ACKNOWLEDGED = exports.NEW_USER_ACKNOWLEDGED = 'welcome_acknowledged';
var EMAIL_COLLECTION_ACKNOWLEDGED = exports.EMAIL_COLLECTION_ACKNOWLEDGED = 'email_collection_acknowledged';
var LANGUAGE = exports.LANGUAGE = 'language';
var SHOW_NSFW = exports.SHOW_NSFW = 'showNsfw';
var SHOW_UNAVAILABLE = exports.SHOW_UNAVAILABLE = 'showUnavailable';
var INSTANT_PURCHASE_ENABLED = exports.INSTANT_PURCHASE_ENABLED = 'instantPurchaseEnabled';
var INSTANT_PURCHASE_MAX = exports.INSTANT_PURCHASE_MAX = 'instantPurchaseMax';
var THEME = exports.THEME = 'theme';
var THEMES = exports.THEMES = 'themes';
var AUTOMATIC_DARK_MODE_ENABLED = exports.AUTOMATIC_DARK_MODE_ENABLED = 'automaticDarkModeEnabled';

// mobile settings
var BACKGROUND_PLAY_ENABLED = exports.BACKGROUND_PLAY_ENABLED = 'backgroundPlayEnabled';
var FOREGROUND_NOTIFICATION_ENABLED = exports.FOREGROUND_NOTIFICATION_ENABLED = 'foregroundNotificationEnabled';
var KEEP_DAEMON_RUNNING = exports.KEEP_DAEMON_RUNNING = 'keepDaemonRunning';

/***/ })
/******/ ]);
});

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

var _user = __webpack_require__(11);

var _rewards2 = __webpack_require__(12);

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
    };

    _rewards3.default.claimReward(rewardType, options.params).then(success, failure);
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
exports.selectRewardContentClaimIds = exports.makeSelectRewardAmountByType = exports.makeSelectRewardByType = exports.makeSelectClaimRewardError = exports.selectClaimErrorsByType = exports.makeSelectIsRewardClaimPending = exports.selectClaimsPendingByType = exports.selectUnclaimedRewardValue = exports.selectFetchingRewards = exports.selectUnclaimedRewards = exports.selectClaimedRewardsByTransactionId = exports.selectClaimedRewards = exports.selectClaimedRewardsById = exports.selectUnclaimedRewardsByType = undefined;

var _reselect = __webpack_require__(10);

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
exports.selectUserInviteNewErrorMessage = exports.selectUserInviteNewIsPending = exports.selectUserInviteStatusFailed = exports.selectUserInvitees = exports.selectUserInvitesRemaining = exports.selectUserInviteStatusIsPending = exports.selectAccessToken = exports.selectUserIsVerificationCandidate = exports.selectIdentityVerifyErrorMessage = exports.selectIdentityVerifyIsPending = exports.selectPhoneVerifyErrorMessage = exports.selectPhoneVerifyIsPending = exports.selectPhoneNewIsPending = exports.selectEmailVerifyErrorMessage = exports.selectEmailVerifyIsPending = exports.selectPhoneNewErrorMessage = exports.selectEmailNewErrorMessage = exports.selectEmailNewIsPending = exports.selectUserIsRewardApproved = exports.selectPhoneToVerify = exports.selectEmailToVerify = exports.selectUserCountryCode = exports.selectUserPhone = exports.selectUserEmail = exports.selectUser = exports.selectUserIsPending = exports.selectAuthenticationIsPending = exports.selectState = undefined;

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

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doShowSuggestedSubs = exports.doCompleteFirstRun = exports.doFetchRecommendedSubscriptions = exports.doCheckSubscriptionsInit = exports.doCheckSubscriptions = exports.doChannelUnsubscribe = exports.doChannelSubscribe = exports.doCheckSubscription = exports.doRemoveUnreadSubscription = exports.doRemoveUnreadSubscriptions = exports.doUpdateUnreadSubscriptions = exports.setSubscriptionLatest = exports.doFetchMySubscriptions = exports.doSetViewMode = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _claim = __webpack_require__(14);

var _rewards = __webpack_require__(8);

var _subscriptions = __webpack_require__(15);

var _lbryRedux = __webpack_require__(4);

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _subscriptions2 = __webpack_require__(16);

var NOTIFICATION_TYPES = _interopRequireWildcard(_subscriptions2);

var _lbryio = __webpack_require__(3);

var _lbryio2 = _interopRequireDefault(_lbryio);

var _rewards2 = __webpack_require__(12);

var _rewards3 = _interopRequireDefault(_rewards2);

var _bluebird = __webpack_require__(18);

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

//import * as SETTINGS from 'constants/settings';
//import { makeSelectClientSetting } from 'redux/selectors/settings';


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
          var _parseURI = (0, _lbryRedux.parseURI)(sub.uri),
              claimId = _parseURI.claimId;

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

    var newUris /*:Array*/ = [];
    var newType /*:String*/ = null;

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
      return;
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

    dispatch({
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
    var shouldAutoDownload = false; //makeSelectClientSetting(SETTINGS.AUTO_DOWNLOAD)(state);
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
      var _parseURI2 = (0, _lbryRedux.parseURI)(subscription.uri),
          claimId = _parseURI2.claimId;
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
      var _parseURI3 = (0, _lbryRedux.parseURI)(subscription.uri),
          claimId = _parseURI3.claimId;

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

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectIsNew = exports.makeSelectIsSubscribed = exports.selectSubscriptionClaims = exports.makeSelectUnreadByChannel = exports.selectUnreadSubscriptions = exports.selectUnreadAmount = exports.selectUnreadByChannel = exports.selectSubscriptionsBeingFetched = exports.selectShowSuggestedSubs = exports.selectFirstRunCompleted = exports.selectSuggestedChannels = exports.selectIsFetchingSuggested = exports.selectSuggested = exports.selectViewMode = exports.selectIsFetchingSubscriptions = exports.selectSubscriptions = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _subscriptions = __webpack_require__(16);

var _reselect = __webpack_require__(10);

var _lbryRedux = __webpack_require__(4);

var _swapJson = __webpack_require__(17);

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

/***/ }),
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(19), __webpack_require__(20), __webpack_require__(21).setImmediate))

/***/ }),
/* 19 */
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
/* 20 */
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
/* 21 */
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
__webpack_require__(22);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20)))

/***/ }),
/* 22 */
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20), __webpack_require__(19)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doFetchInviteStatus = doFetchInviteStatus;
exports.doInstallNew = doInstallNew;
exports.doAuthenticate = doAuthenticate;
exports.doUserFetch = doUserFetch;
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

var _user = __webpack_require__(11);

var _rewards2 = __webpack_require__(12);

var _rewards3 = _interopRequireDefault(_rewards2);

var _lbryio = __webpack_require__(3);

var _lbryio2 = _interopRequireDefault(_lbryio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function doFetchInviteStatus() {
  return function (dispatch) {
    dispatch({
      type: _lbryRedux.ACTIONS.USER_INVITE_STATUS_FETCH_STARTED
    });

    _lbryio2.default.call('user', 'invite_status').then(function (status) {
      dispatch({
        type: _lbryRedux.ACTIONS.USER_INVITE_STATUS_FETCH_SUCCESS,
        data: {
          invitesRemaining: status.invites_remaining ? status.invites_remaining : 0,
          invitees: status.invitees
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
/* 24 */
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
/* 25 */
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
    return ur.reward_type === reward.reward_type;
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
/* 26 */
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
    invitees: action.data.invitees
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
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // @flow


var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _subscriptions = __webpack_require__(16);

var _reduxUtils = __webpack_require__(29);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*:: import type {
  SubscriptionState,
  Subscription,
  DoChannelSubscribe,
  DoChannelUnsubscribe,
  SetSubscriptionLatest,
  DoUpdateSubscriptionUnreads,
  DoRemoveSubscriptionUnreads,
  FetchedSubscriptionsSucess,
  SetViewMode,
  GetSuggestedSubscriptionsSuccess,
} from 'types/subscription';*/


var defaultState /*: SubscriptionState*/ = {
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

/***/ }),
/* 29 */
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

/***/ })
/******/ ]);
});