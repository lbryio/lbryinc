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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "LBRYINC_ACTIONS", function() { return constants_action_types__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var constants_youtube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "YOUTUBE_STATUSES", function() { return constants_youtube__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lbryio", function() { return lbryio__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var rewards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rewards", function() { return rewards__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var redux_reducers_subscriptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscriptionsReducer", function() { return redux_reducers_subscriptions__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var redux_middleware_sync__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userStateSyncMiddleware", function() { return redux_middleware_sync__WEBPACK_IMPORTED_MODULE_5__["userStateSyncMiddleware"]; });

/* harmony import */ var redux_actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doGenerateAuthToken", function() { return redux_actions_auth__WEBPACK_IMPORTED_MODULE_6__["doGenerateAuthToken"]; });

/* harmony import */ var redux_actions_rewards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doRewardList", function() { return redux_actions_rewards__WEBPACK_IMPORTED_MODULE_7__["doRewardList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doClaimRewardType", function() { return redux_actions_rewards__WEBPACK_IMPORTED_MODULE_7__["doClaimRewardType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doClaimEligiblePurchaseRewards", function() { return redux_actions_rewards__WEBPACK_IMPORTED_MODULE_7__["doClaimEligiblePurchaseRewards"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doClaimRewardClearError", function() { return redux_actions_rewards__WEBPACK_IMPORTED_MODULE_7__["doClaimRewardClearError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchRewardedContent", function() { return redux_actions_rewards__WEBPACK_IMPORTED_MODULE_7__["doFetchRewardedContent"]; });

/* harmony import */ var redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doChannelSubscribe", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_8__["doChannelSubscribe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doChannelUnsubscribe", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_8__["doChannelUnsubscribe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doChannelSubscriptionEnableNotifications", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_8__["doChannelSubscriptionEnableNotifications"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doChannelSubscriptionDisableNotifications", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_8__["doChannelSubscriptionDisableNotifications"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doCheckSubscription", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_8__["doCheckSubscription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doCheckSubscriptions", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_8__["doCheckSubscriptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doCheckSubscriptionsInit", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_8__["doCheckSubscriptionsInit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doCompleteFirstRun", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_8__["doCompleteFirstRun"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchMySubscriptions", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_8__["doFetchMySubscriptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchRecommendedSubscriptions", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_8__["doFetchRecommendedSubscriptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doRemoveUnreadSubscription", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_8__["doRemoveUnreadSubscription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doRemoveUnreadSubscriptions", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_8__["doRemoveUnreadSubscriptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doSetViewMode", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_8__["doSetViewMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doShowSuggestedSubs", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_8__["doShowSuggestedSubs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUpdateUnreadSubscriptions", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_8__["doUpdateUnreadSubscriptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSubscriptionLatest", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_8__["setSubscriptionLatest"]; });

/* harmony import */ var redux_actions_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchInviteStatus", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_9__["doFetchInviteStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doInstallNew", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_9__["doInstallNew"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doAuthenticate", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_9__["doAuthenticate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserFetch", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_9__["doUserFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserEmailNew", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_9__["doUserEmailNew"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserCheckEmailVerified", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_9__["doUserCheckEmailVerified"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserEmailToVerify", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_9__["doUserEmailToVerify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserEmailVerifyFailure", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_9__["doUserEmailVerifyFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserEmailVerify", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_9__["doUserEmailVerify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserPhoneNew", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_9__["doUserPhoneNew"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserPhoneReset", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_9__["doUserPhoneReset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserPhoneVerifyFailure", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_9__["doUserPhoneVerifyFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserPhoneVerify", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_9__["doUserPhoneVerify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchAccessToken", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_9__["doFetchAccessToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserResendVerificationEmail", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_9__["doUserResendVerificationEmail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserIdentityVerify", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_9__["doUserIdentityVerify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserInviteNew", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_9__["doUserInviteNew"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doClaimYoutubeChannels", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_9__["doClaimYoutubeChannels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doCheckYoutubeTransfer", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_9__["doCheckYoutubeTransfer"]; });

/* harmony import */ var redux_actions_cost_info__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchCostInfoForUri", function() { return redux_actions_cost_info__WEBPACK_IMPORTED_MODULE_10__["doFetchCostInfoForUri"]; });

/* harmony import */ var redux_actions_blacklist__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doBlackListedOutpointsSubscribe", function() { return redux_actions_blacklist__WEBPACK_IMPORTED_MODULE_11__["doBlackListedOutpointsSubscribe"]; });

/* harmony import */ var redux_actions_filtered__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFilteredOutpointsSubscribe", function() { return redux_actions_filtered__WEBPACK_IMPORTED_MODULE_12__["doFilteredOutpointsSubscribe"]; });

/* harmony import */ var redux_actions_homepage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(26);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchFeaturedUris", function() { return redux_actions_homepage__WEBPACK_IMPORTED_MODULE_13__["doFetchFeaturedUris"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchTrendingUris", function() { return redux_actions_homepage__WEBPACK_IMPORTED_MODULE_13__["doFetchTrendingUris"]; });

/* harmony import */ var redux_actions_stats__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchViewCount", function() { return redux_actions_stats__WEBPACK_IMPORTED_MODULE_14__["doFetchViewCount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchSubCount", function() { return redux_actions_stats__WEBPACK_IMPORTED_MODULE_14__["doFetchSubCount"]; });

/* harmony import */ var redux_actions_sync__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doCheckSync", function() { return redux_actions_sync__WEBPACK_IMPORTED_MODULE_15__["doCheckSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doGetSync", function() { return redux_actions_sync__WEBPACK_IMPORTED_MODULE_15__["doGetSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doSetSync", function() { return redux_actions_sync__WEBPACK_IMPORTED_MODULE_15__["doSetSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doSetDefaultAccount", function() { return redux_actions_sync__WEBPACK_IMPORTED_MODULE_15__["doSetDefaultAccount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doSyncApply", function() { return redux_actions_sync__WEBPACK_IMPORTED_MODULE_15__["doSyncApply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doResetSync", function() { return redux_actions_sync__WEBPACK_IMPORTED_MODULE_15__["doResetSync"]; });

/* harmony import */ var redux_reducers_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return redux_reducers_auth__WEBPACK_IMPORTED_MODULE_16__["authReducer"]; });

/* harmony import */ var redux_reducers_rewards__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rewardsReducer", function() { return redux_reducers_rewards__WEBPACK_IMPORTED_MODULE_17__["rewardsReducer"]; });

/* harmony import */ var redux_reducers_user__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return redux_reducers_user__WEBPACK_IMPORTED_MODULE_18__["userReducer"]; });

/* harmony import */ var redux_reducers_cost_info__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "costInfoReducer", function() { return redux_reducers_cost_info__WEBPACK_IMPORTED_MODULE_19__["costInfoReducer"]; });

/* harmony import */ var redux_reducers_blacklist__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(33);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blacklistReducer", function() { return redux_reducers_blacklist__WEBPACK_IMPORTED_MODULE_20__["blacklistReducer"]; });

/* harmony import */ var redux_reducers_filtered__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filteredReducer", function() { return redux_reducers_filtered__WEBPACK_IMPORTED_MODULE_21__["filteredReducer"]; });

/* harmony import */ var redux_reducers_homepage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "homepageReducer", function() { return redux_reducers_homepage__WEBPACK_IMPORTED_MODULE_22__["homepageReducer"]; });

/* harmony import */ var redux_reducers_stats__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "statsReducer", function() { return redux_reducers_stats__WEBPACK_IMPORTED_MODULE_23__["statsReducer"]; });

/* harmony import */ var redux_reducers_sync__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "syncReducer", function() { return redux_reducers_sync__WEBPACK_IMPORTED_MODULE_24__["syncReducer"]; });

/* harmony import */ var redux_selectors_auth__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(38);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAuthToken", function() { return redux_selectors_auth__WEBPACK_IMPORTED_MODULE_25__["selectAuthToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIsAuthenticating", function() { return redux_selectors_auth__WEBPACK_IMPORTED_MODULE_25__["selectIsAuthenticating"]; });

/* harmony import */ var redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectClaimRewardError", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_26__["makeSelectClaimRewardError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectIsRewardClaimPending", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_26__["makeSelectIsRewardClaimPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectRewardAmountByType", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_26__["makeSelectRewardAmountByType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectRewardByType", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_26__["makeSelectRewardByType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUnclaimedRewardsByType", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_26__["selectUnclaimedRewardsByType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectClaimedRewardsById", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_26__["selectClaimedRewardsById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectClaimedRewards", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_26__["selectClaimedRewards"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectClaimedRewardsByTransactionId", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_26__["selectClaimedRewardsByTransactionId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUnclaimedRewards", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_26__["selectUnclaimedRewards"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFetchingRewards", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_26__["selectFetchingRewards"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUnclaimedRewardValue", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_26__["selectUnclaimedRewardValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectClaimsPendingByType", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_26__["selectClaimsPendingByType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectClaimErrorsByType", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_26__["selectClaimErrorsByType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectRewardContentClaimIds", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_26__["selectRewardContentClaimIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectReferralReward", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_26__["selectReferralReward"]; });

/* harmony import */ var redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectIsNew", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_27__["makeSelectIsNew"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectIsSubscribed", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_27__["makeSelectIsSubscribed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectUnreadByChannel", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_27__["makeSelectUnreadByChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEnabledChannelNotifications", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_27__["selectEnabledChannelNotifications"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSubscriptions", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_27__["selectSubscriptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIsFetchingSubscriptions", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_27__["selectIsFetchingSubscriptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectViewMode", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_27__["selectViewMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSuggested", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_27__["selectSuggested"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIsFetchingSuggested", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_27__["selectIsFetchingSuggested"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSuggestedChannels", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_27__["selectSuggestedChannels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFirstRunCompleted", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_27__["selectFirstRunCompleted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectShowSuggestedSubs", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_27__["selectShowSuggestedSubs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSubscriptionsBeingFetched", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_27__["selectSubscriptionsBeingFetched"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUnreadByChannel", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_27__["selectUnreadByChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUnreadAmount", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_27__["selectUnreadAmount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUnreadSubscriptions", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_27__["selectUnreadSubscriptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSubscriptionClaims", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_27__["selectSubscriptionClaims"]; });

/* harmony import */ var redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAuthenticationIsPending", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectAuthenticationIsPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserIsPending", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectUserIsPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUser", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserEmail", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectUserEmail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserPhone", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectUserPhone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserCountryCode", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectUserCountryCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEmailToVerify", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectEmailToVerify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPhoneToVerify", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectPhoneToVerify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserIsRewardApproved", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectUserIsRewardApproved"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEmailNewIsPending", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectEmailNewIsPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEmailNewErrorMessage", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectEmailNewErrorMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPhoneNewErrorMessage", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectPhoneNewErrorMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPhoneNewIsPending", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectPhoneNewIsPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEmailVerifyIsPending", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectEmailVerifyIsPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEmailVerifyErrorMessage", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectEmailVerifyErrorMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPhoneVerifyErrorMessage", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectPhoneVerifyErrorMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPhoneVerifyIsPending", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectPhoneVerifyIsPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIdentityVerifyIsPending", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectIdentityVerifyIsPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIdentityVerifyErrorMessage", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectIdentityVerifyErrorMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserIsVerificationCandidate", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectUserIsVerificationCandidate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAccessToken", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectAccessToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserInviteStatusIsPending", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectUserInviteStatusIsPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserInvitesRemaining", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectUserInvitesRemaining"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserInvitees", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectUserInvitees"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserInviteStatusFailed", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectUserInviteStatusFailed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserInviteNewIsPending", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectUserInviteNewIsPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserInviteNewErrorMessage", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectUserInviteNewErrorMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserInviteReferralLink", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectUserInviteReferralLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserVerifiedEmail", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectUserVerifiedEmail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectYoutubeChannels", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectYoutubeChannels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectYouTubeImportPending", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectYouTubeImportPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectYouTubeImportError", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectYouTubeImportError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectYouTubeImportVideosComplete", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_28__["selectYouTubeImportVideosComplete"]; });

/* harmony import */ var redux_selectors_cost_info__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectFetchingCostInfoForUri", function() { return redux_selectors_cost_info__WEBPACK_IMPORTED_MODULE_29__["makeSelectFetchingCostInfoForUri"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectCostInfoForUri", function() { return redux_selectors_cost_info__WEBPACK_IMPORTED_MODULE_29__["makeSelectCostInfoForUri"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllCostInfoByUri", function() { return redux_selectors_cost_info__WEBPACK_IMPORTED_MODULE_29__["selectAllCostInfoByUri"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFetchingCostInfo", function() { return redux_selectors_cost_info__WEBPACK_IMPORTED_MODULE_29__["selectFetchingCostInfo"]; });

/* harmony import */ var redux_selectors_blacklist__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectBlackListedOutpoints", function() { return redux_selectors_blacklist__WEBPACK_IMPORTED_MODULE_30__["selectBlackListedOutpoints"]; });

/* harmony import */ var redux_selectors_filtered__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(41);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFilteredOutpoints", function() { return redux_selectors_filtered__WEBPACK_IMPORTED_MODULE_31__["selectFilteredOutpoints"]; });

/* harmony import */ var redux_selectors_homepage__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(42);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFeaturedUris", function() { return redux_selectors_homepage__WEBPACK_IMPORTED_MODULE_32__["selectFeaturedUris"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFetchingFeaturedUris", function() { return redux_selectors_homepage__WEBPACK_IMPORTED_MODULE_32__["selectFetchingFeaturedUris"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTrendingUris", function() { return redux_selectors_homepage__WEBPACK_IMPORTED_MODULE_32__["selectTrendingUris"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFetchingTrendingUris", function() { return redux_selectors_homepage__WEBPACK_IMPORTED_MODULE_32__["selectFetchingTrendingUris"]; });

/* harmony import */ var redux_selectors_stats__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectViewCountForUri", function() { return redux_selectors_stats__WEBPACK_IMPORTED_MODULE_33__["makeSelectViewCountForUri"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectSubCountForUri", function() { return redux_selectors_stats__WEBPACK_IMPORTED_MODULE_33__["makeSelectSubCountForUri"]; });

/* harmony import */ var redux_selectors_sync__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(44);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectHasSyncedWallet", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_34__["selectHasSyncedWallet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSyncData", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_34__["selectSyncData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSyncHash", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_34__["selectSyncHash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSetSyncErrorMessage", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_34__["selectSetSyncErrorMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectGetSyncErrorMessage", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_34__["selectGetSyncErrorMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectGetSyncIsPending", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_34__["selectGetSyncIsPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSetSyncIsPending", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_34__["selectSetSyncIsPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSyncApplyIsPending", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_34__["selectSyncApplyIsPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectHashChanged", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_34__["selectHashChanged"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSyncApplyErrorMessage", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_34__["selectSyncApplyErrorMessage"]; });





 // middleware

 // constants

 // Lbryio and rewards

 // actions










 // reducers










 // selectors












/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERATE_AUTH_TOKEN_FAILURE", function() { return GENERATE_AUTH_TOKEN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERATE_AUTH_TOKEN_STARTED", function() { return GENERATE_AUTH_TOKEN_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERATE_AUTH_TOKEN_SUCCESS", function() { return GENERATE_AUTH_TOKEN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATION_STARTED", function() { return AUTHENTICATION_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATION_SUCCESS", function() { return AUTHENTICATION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATION_FAILURE", function() { return AUTHENTICATION_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_EMAIL_DECLINE", function() { return USER_EMAIL_DECLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_EMAIL_NEW_STARTED", function() { return USER_EMAIL_NEW_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_EMAIL_NEW_SUCCESS", function() { return USER_EMAIL_NEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_EMAIL_NEW_EXISTS", function() { return USER_EMAIL_NEW_EXISTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_EMAIL_NEW_FAILURE", function() { return USER_EMAIL_NEW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_EMAIL_VERIFY_SET", function() { return USER_EMAIL_VERIFY_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_EMAIL_VERIFY_STARTED", function() { return USER_EMAIL_VERIFY_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_EMAIL_VERIFY_SUCCESS", function() { return USER_EMAIL_VERIFY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_EMAIL_VERIFY_FAILURE", function() { return USER_EMAIL_VERIFY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_EMAIL_VERIFY_RETRY", function() { return USER_EMAIL_VERIFY_RETRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PHONE_RESET", function() { return USER_PHONE_RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PHONE_NEW_STARTED", function() { return USER_PHONE_NEW_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PHONE_NEW_SUCCESS", function() { return USER_PHONE_NEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PHONE_NEW_FAILURE", function() { return USER_PHONE_NEW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PHONE_VERIFY_STARTED", function() { return USER_PHONE_VERIFY_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PHONE_VERIFY_SUCCESS", function() { return USER_PHONE_VERIFY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PHONE_VERIFY_FAILURE", function() { return USER_PHONE_VERIFY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_IDENTITY_VERIFY_STARTED", function() { return USER_IDENTITY_VERIFY_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_IDENTITY_VERIFY_SUCCESS", function() { return USER_IDENTITY_VERIFY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_IDENTITY_VERIFY_FAILURE", function() { return USER_IDENTITY_VERIFY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_FETCH_STARTED", function() { return USER_FETCH_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_FETCH_SUCCESS", function() { return USER_FETCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_FETCH_FAILURE", function() { return USER_FETCH_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_INVITE_STATUS_FETCH_STARTED", function() { return USER_INVITE_STATUS_FETCH_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_INVITE_STATUS_FETCH_SUCCESS", function() { return USER_INVITE_STATUS_FETCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_INVITE_STATUS_FETCH_FAILURE", function() { return USER_INVITE_STATUS_FETCH_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_INVITE_NEW_STARTED", function() { return USER_INVITE_NEW_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_INVITE_NEW_SUCCESS", function() { return USER_INVITE_NEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_INVITE_NEW_FAILURE", function() { return USER_INVITE_NEW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ACCESS_TOKEN_SUCCESS", function() { return FETCH_ACCESS_TOKEN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_YOUTUBE_IMPORT_STARTED", function() { return USER_YOUTUBE_IMPORT_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_YOUTUBE_IMPORT_FAILURE", function() { return USER_YOUTUBE_IMPORT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_YOUTUBE_IMPORT_SUCCESS", function() { return USER_YOUTUBE_IMPORT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_FEATURED_CONTENT_STARTED", function() { return FETCH_FEATURED_CONTENT_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_FEATURED_CONTENT_COMPLETED", function() { return FETCH_FEATURED_CONTENT_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRENDING_CONTENT_STARTED", function() { return FETCH_TRENDING_CONTENT_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRENDING_CONTENT_COMPLETED", function() { return FETCH_TRENDING_CONTENT_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOLVE_URIS_STARTED", function() { return RESOLVE_URIS_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOLVE_URIS_COMPLETED", function() { return RESOLVE_URIS_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CHANNEL_CLAIMS_STARTED", function() { return FETCH_CHANNEL_CLAIMS_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CHANNEL_CLAIMS_COMPLETED", function() { return FETCH_CHANNEL_CLAIMS_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CHANNEL_CLAIM_COUNT_STARTED", function() { return FETCH_CHANNEL_CLAIM_COUNT_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CHANNEL_CLAIM_COUNT_COMPLETED", function() { return FETCH_CHANNEL_CLAIM_COUNT_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CLAIM_LIST_MINE_STARTED", function() { return FETCH_CLAIM_LIST_MINE_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CLAIM_LIST_MINE_COMPLETED", function() { return FETCH_CLAIM_LIST_MINE_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABANDON_CLAIM_STARTED", function() { return ABANDON_CLAIM_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABANDON_CLAIM_SUCCEEDED", function() { return ABANDON_CLAIM_SUCCEEDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CHANNEL_LIST_STARTED", function() { return FETCH_CHANNEL_LIST_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CHANNEL_LIST_COMPLETED", function() { return FETCH_CHANNEL_LIST_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_CHANNEL_STARTED", function() { return CREATE_CHANNEL_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_CHANNEL_COMPLETED", function() { return CREATE_CHANNEL_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUBLISH_STARTED", function() { return PUBLISH_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUBLISH_COMPLETED", function() { return PUBLISH_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUBLISH_FAILED", function() { return PUBLISH_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PLAYING_URI", function() { return SET_PLAYING_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CONTENT_POSITION", function() { return SET_CONTENT_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CONTENT_LAST_VIEWED", function() { return SET_CONTENT_LAST_VIEWED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_CONTENT_HISTORY_URI", function() { return CLEAR_CONTENT_HISTORY_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_CONTENT_HISTORY_ALL", function() { return CLEAR_CONTENT_HISTORY_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL_SUBSCRIBE", function() { return CHANNEL_SUBSCRIBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL_UNSUBSCRIBE", function() { return CHANNEL_UNSUBSCRIBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS", function() { return CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS", function() { return CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAS_FETCHED_SUBSCRIPTIONS", function() { return HAS_FETCHED_SUBSCRIPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SUBSCRIPTION_LATEST", function() { return SET_SUBSCRIPTION_LATEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SUBSCRIPTION_UNREADS", function() { return UPDATE_SUBSCRIPTION_UNREADS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_SUBSCRIPTION_UNREADS", function() { return REMOVE_SUBSCRIPTION_UNREADS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_SUBSCRIPTION_STARTED", function() { return CHECK_SUBSCRIPTION_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_SUBSCRIPTION_COMPLETED", function() { return CHECK_SUBSCRIPTION_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_SUBSCRIPTIONS_SUBSCRIBE", function() { return CHECK_SUBSCRIPTIONS_SUBSCRIBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SUBSCRIPTIONS_START", function() { return FETCH_SUBSCRIPTIONS_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SUBSCRIPTIONS_FAIL", function() { return FETCH_SUBSCRIPTIONS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SUBSCRIPTIONS_SUCCESS", function() { return FETCH_SUBSCRIPTIONS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_VIEW_MODE", function() { return SET_VIEW_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SUGGESTED_SUBSCRIPTIONS_START", function() { return GET_SUGGESTED_SUBSCRIPTIONS_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS", function() { return GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SUGGESTED_SUBSCRIPTIONS_FAIL", function() { return GET_SUGGESTED_SUBSCRIPTIONS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBSCRIPTION_FIRST_RUN_COMPLETED", function() { return SUBSCRIPTION_FIRST_RUN_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_SUGGESTED_SUBSCRIPTIONS", function() { return VIEW_SUGGESTED_SUBSCRIPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_BLACK_LISTED_CONTENT_STARTED", function() { return FETCH_BLACK_LISTED_CONTENT_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_BLACK_LISTED_CONTENT_COMPLETED", function() { return FETCH_BLACK_LISTED_CONTENT_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_BLACK_LISTED_CONTENT_FAILED", function() { return FETCH_BLACK_LISTED_CONTENT_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLACK_LISTED_CONTENT_SUBSCRIBE", function() { return BLACK_LISTED_CONTENT_SUBSCRIBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_FILTERED_CONTENT_STARTED", function() { return FETCH_FILTERED_CONTENT_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_FILTERED_CONTENT_COMPLETED", function() { return FETCH_FILTERED_CONTENT_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_FILTERED_CONTENT_FAILED", function() { return FETCH_FILTERED_CONTENT_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTERED_CONTENT_SUBSCRIBE", function() { return FILTERED_CONTENT_SUBSCRIBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_COST_INFO_STARTED", function() { return FETCH_COST_INFO_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_COST_INFO_COMPLETED", function() { return FETCH_COST_INFO_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VIEW_COUNT_STARTED", function() { return FETCH_VIEW_COUNT_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VIEW_COUNT_FAILED", function() { return FETCH_VIEW_COUNT_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VIEW_COUNT_COMPLETED", function() { return FETCH_VIEW_COUNT_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SUB_COUNT_STARTED", function() { return FETCH_SUB_COUNT_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SUB_COUNT_FAILED", function() { return FETCH_SUB_COUNT_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SUB_COUNT_COMPLETED", function() { return FETCH_SUB_COUNT_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SYNC_STARTED", function() { return GET_SYNC_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SYNC_COMPLETED", function() { return GET_SYNC_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SYNC_FAILED", function() { return GET_SYNC_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SYNC_STARTED", function() { return SET_SYNC_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SYNC_FAILED", function() { return SET_SYNC_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SYNC_COMPLETED", function() { return SET_SYNC_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DEFAULT_ACCOUNT", function() { return SET_DEFAULT_ACCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYNC_APPLY_STARTED", function() { return SYNC_APPLY_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYNC_APPLY_COMPLETED", function() { return SYNC_APPLY_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYNC_APPLY_FAILED", function() { return SYNC_APPLY_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYNC_RESET", function() { return SYNC_RESET; });
// User
var GENERATE_AUTH_TOKEN_FAILURE = 'GENERATE_AUTH_TOKEN_FAILURE';
var GENERATE_AUTH_TOKEN_STARTED = 'GENERATE_AUTH_TOKEN_STARTED';
var GENERATE_AUTH_TOKEN_SUCCESS = 'GENERATE_AUTH_TOKEN_SUCCESS';
var AUTHENTICATION_STARTED = 'AUTHENTICATION_STARTED';
var AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
var AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE';
var USER_EMAIL_DECLINE = 'USER_EMAIL_DECLINE';
var USER_EMAIL_NEW_STARTED = 'USER_EMAIL_NEW_STARTED';
var USER_EMAIL_NEW_SUCCESS = 'USER_EMAIL_NEW_SUCCESS';
var USER_EMAIL_NEW_EXISTS = 'USER_EMAIL_NEW_EXISTS';
var USER_EMAIL_NEW_FAILURE = 'USER_EMAIL_NEW_FAILURE';
var USER_EMAIL_VERIFY_SET = 'USER_EMAIL_VERIFY_SET';
var USER_EMAIL_VERIFY_STARTED = 'USER_EMAIL_VERIFY_STARTED';
var USER_EMAIL_VERIFY_SUCCESS = 'USER_EMAIL_VERIFY_SUCCESS';
var USER_EMAIL_VERIFY_FAILURE = 'USER_EMAIL_VERIFY_FAILURE';
var USER_EMAIL_VERIFY_RETRY = 'USER_EMAIL_VERIFY_RETRY';
var USER_PHONE_RESET = 'USER_PHONE_RESET';
var USER_PHONE_NEW_STARTED = 'USER_PHONE_NEW_STARTED';
var USER_PHONE_NEW_SUCCESS = 'USER_PHONE_NEW_SUCCESS';
var USER_PHONE_NEW_FAILURE = 'USER_PHONE_NEW_FAILURE';
var USER_PHONE_VERIFY_STARTED = 'USER_PHONE_VERIFY_STARTED';
var USER_PHONE_VERIFY_SUCCESS = 'USER_PHONE_VERIFY_SUCCESS';
var USER_PHONE_VERIFY_FAILURE = 'USER_PHONE_VERIFY_FAILURE';
var USER_IDENTITY_VERIFY_STARTED = 'USER_IDENTITY_VERIFY_STARTED';
var USER_IDENTITY_VERIFY_SUCCESS = 'USER_IDENTITY_VERIFY_SUCCESS';
var USER_IDENTITY_VERIFY_FAILURE = 'USER_IDENTITY_VERIFY_FAILURE';
var USER_FETCH_STARTED = 'USER_FETCH_STARTED';
var USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';
var USER_FETCH_FAILURE = 'USER_FETCH_FAILURE';
var USER_INVITE_STATUS_FETCH_STARTED = 'USER_INVITE_STATUS_FETCH_STARTED';
var USER_INVITE_STATUS_FETCH_SUCCESS = 'USER_INVITE_STATUS_FETCH_SUCCESS';
var USER_INVITE_STATUS_FETCH_FAILURE = 'USER_INVITE_STATUS_FETCH_FAILURE';
var USER_INVITE_NEW_STARTED = 'USER_INVITE_NEW_STARTED';
var USER_INVITE_NEW_SUCCESS = 'USER_INVITE_NEW_SUCCESS';
var USER_INVITE_NEW_FAILURE = 'USER_INVITE_NEW_FAILURE';
var FETCH_ACCESS_TOKEN_SUCCESS = 'FETCH_ACCESS_TOKEN_SUCCESS';
var USER_YOUTUBE_IMPORT_STARTED = 'USER_YOUTUBE_IMPORT_STARTED';
var USER_YOUTUBE_IMPORT_FAILURE = 'USER_YOUTUBE_IMPORT_FAILURE';
var USER_YOUTUBE_IMPORT_SUCCESS = 'USER_YOUTUBE_IMPORT_SUCCESS'; // Claims

var FETCH_FEATURED_CONTENT_STARTED = 'FETCH_FEATURED_CONTENT_STARTED';
var FETCH_FEATURED_CONTENT_COMPLETED = 'FETCH_FEATURED_CONTENT_COMPLETED';
var FETCH_TRENDING_CONTENT_STARTED = 'FETCH_TRENDING_CONTENT_STARTED';
var FETCH_TRENDING_CONTENT_COMPLETED = 'FETCH_TRENDING_CONTENT_COMPLETED';
var RESOLVE_URIS_STARTED = 'RESOLVE_URIS_STARTED';
var RESOLVE_URIS_COMPLETED = 'RESOLVE_URIS_COMPLETED';
var FETCH_CHANNEL_CLAIMS_STARTED = 'FETCH_CHANNEL_CLAIMS_STARTED';
var FETCH_CHANNEL_CLAIMS_COMPLETED = 'FETCH_CHANNEL_CLAIMS_COMPLETED';
var FETCH_CHANNEL_CLAIM_COUNT_STARTED = 'FETCH_CHANNEL_CLAIM_COUNT_STARTED';
var FETCH_CHANNEL_CLAIM_COUNT_COMPLETED = 'FETCH_CHANNEL_CLAIM_COUNT_COMPLETED';
var FETCH_CLAIM_LIST_MINE_STARTED = 'FETCH_CLAIM_LIST_MINE_STARTED';
var FETCH_CLAIM_LIST_MINE_COMPLETED = 'FETCH_CLAIM_LIST_MINE_COMPLETED';
var ABANDON_CLAIM_STARTED = 'ABANDON_CLAIM_STARTED';
var ABANDON_CLAIM_SUCCEEDED = 'ABANDON_CLAIM_SUCCEEDED';
var FETCH_CHANNEL_LIST_STARTED = 'FETCH_CHANNEL_LIST_STARTED';
var FETCH_CHANNEL_LIST_COMPLETED = 'FETCH_CHANNEL_LIST_COMPLETED';
var CREATE_CHANNEL_STARTED = 'CREATE_CHANNEL_STARTED';
var CREATE_CHANNEL_COMPLETED = 'CREATE_CHANNEL_COMPLETED';
var PUBLISH_STARTED = 'PUBLISH_STARTED';
var PUBLISH_COMPLETED = 'PUBLISH_COMPLETED';
var PUBLISH_FAILED = 'PUBLISH_FAILED';
var SET_PLAYING_URI = 'SET_PLAYING_URI';
var SET_CONTENT_POSITION = 'SET_CONTENT_POSITION';
var SET_CONTENT_LAST_VIEWED = 'SET_CONTENT_LAST_VIEWED';
var CLEAR_CONTENT_HISTORY_URI = 'CLEAR_CONTENT_HISTORY_URI';
var CLEAR_CONTENT_HISTORY_ALL = 'CLEAR_CONTENT_HISTORY_ALL'; // Subscriptions

var CHANNEL_SUBSCRIBE = 'CHANNEL_SUBSCRIBE';
var CHANNEL_UNSUBSCRIBE = 'CHANNEL_UNSUBSCRIBE';
var CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS = 'CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS';
var CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS = 'CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS';
var HAS_FETCHED_SUBSCRIPTIONS = 'HAS_FETCHED_SUBSCRIPTIONS';
var SET_SUBSCRIPTION_LATEST = 'SET_SUBSCRIPTION_LATEST';
var UPDATE_SUBSCRIPTION_UNREADS = 'UPDATE_SUBSCRIPTION_UNREADS';
var REMOVE_SUBSCRIPTION_UNREADS = 'REMOVE_SUBSCRIPTION_UNREADS';
var CHECK_SUBSCRIPTION_STARTED = 'CHECK_SUBSCRIPTION_STARTED';
var CHECK_SUBSCRIPTION_COMPLETED = 'CHECK_SUBSCRIPTION_COMPLETED';
var CHECK_SUBSCRIPTIONS_SUBSCRIBE = 'CHECK_SUBSCRIPTIONS_SUBSCRIBE';
var FETCH_SUBSCRIPTIONS_START = 'FETCH_SUBSCRIPTIONS_START';
var FETCH_SUBSCRIPTIONS_FAIL = 'FETCH_SUBSCRIPTIONS_FAIL';
var FETCH_SUBSCRIPTIONS_SUCCESS = 'FETCH_SUBSCRIPTIONS_SUCCESS';
var SET_VIEW_MODE = 'SET_VIEW_MODE';
var GET_SUGGESTED_SUBSCRIPTIONS_START = 'GET_SUGGESTED_SUBSCRIPTIONS_START';
var GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS = 'GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS';
var GET_SUGGESTED_SUBSCRIPTIONS_FAIL = 'GET_SUGGESTED_SUBSCRIPTIONS_FAIL';
var SUBSCRIPTION_FIRST_RUN_COMPLETED = 'SUBSCRIPTION_FIRST_RUN_COMPLETED';
var VIEW_SUGGESTED_SUBSCRIPTIONS = 'VIEW_SUGGESTED_SUBSCRIPTIONS'; // Blacklist

var FETCH_BLACK_LISTED_CONTENT_STARTED = 'FETCH_BLACK_LISTED_CONTENT_STARTED';
var FETCH_BLACK_LISTED_CONTENT_COMPLETED = 'FETCH_BLACK_LISTED_CONTENT_COMPLETED';
var FETCH_BLACK_LISTED_CONTENT_FAILED = 'FETCH_BLACK_LISTED_CONTENT_FAILED';
var BLACK_LISTED_CONTENT_SUBSCRIBE = 'BLACK_LISTED_CONTENT_SUBSCRIBE'; // Filtered list

var FETCH_FILTERED_CONTENT_STARTED = 'FETCH_FILTERED_CONTENT_STARTED';
var FETCH_FILTERED_CONTENT_COMPLETED = 'FETCH_FILTERED_CONTENT_COMPLETED';
var FETCH_FILTERED_CONTENT_FAILED = 'FETCH_FILTERED_CONTENT_FAILED';
var FILTERED_CONTENT_SUBSCRIBE = 'FILTERED_CONTENT_SUBSCRIBE'; // Cost Info

var FETCH_COST_INFO_STARTED = 'FETCH_COST_INFO_STARTED';
var FETCH_COST_INFO_COMPLETED = 'FETCH_COST_INFO_COMPLETED'; // Stats

var FETCH_VIEW_COUNT_STARTED = 'FETCH_VIEW_COUNT_STARTED';
var FETCH_VIEW_COUNT_FAILED = 'FETCH_VIEW_COUNT_FAILED';
var FETCH_VIEW_COUNT_COMPLETED = 'FETCH_VIEW_COUNT_COMPLETED';
var FETCH_SUB_COUNT_STARTED = 'FETCH_SUB_COUNT_STARTED';
var FETCH_SUB_COUNT_FAILED = 'FETCH_SUB_COUNT_FAILED';
var FETCH_SUB_COUNT_COMPLETED = 'FETCH_SUB_COUNT_COMPLETED'; // Cross-device Sync

var GET_SYNC_STARTED = 'GET_SYNC_STARTED';
var GET_SYNC_COMPLETED = 'GET_SYNC_COMPLETED';
var GET_SYNC_FAILED = 'GET_SYNC_FAILED';
var SET_SYNC_STARTED = 'SET_SYNC_STARTED';
var SET_SYNC_FAILED = 'SET_SYNC_FAILED';
var SET_SYNC_COMPLETED = 'SET_SYNC_COMPLETED';
var SET_DEFAULT_ACCOUNT = 'SET_DEFAULT_ACCOUNT';
var SYNC_APPLY_STARTED = 'SYNC_APPLY_STARTED';
var SYNC_APPLY_COMPLETED = 'SYNC_APPLY_COMPLETED';
var SYNC_APPLY_FAILED = 'SYNC_APPLY_FAILED';
var SYNC_RESET = 'SYNC_RESET';

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOT_TRANSFERRED", function() { return NOT_TRANSFERRED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PENDING_TRANSFER", function() { return PENDING_TRANSFER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPLETED_TRANSFER", function() { return COMPLETED_TRANSFER; });
var NOT_TRANSFERRED = 'not_transferred';
var PENDING_TRANSFER = 'pending_transfer';
var COMPLETED_TRANSFER = 'completed_transfer';

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Lbryio = {
  enabled: true,
  authenticationPromise: null,
  exchangePromise: null,
  exchangeLastFetched: null,
  CONNECTION_STRING: 'https://api.lbry.com/'
};
var EXCHANGE_RATE_TIMEOUT = 20 * 60 * 1000; // We can't use env's because they aren't passed into node_modules

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
      var error;

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
    var fullParams = _objectSpread({
      auth_token: token
    }, params);

    Object.keys(fullParams).forEach(function (key) {
      var value = fullParams[key];

      if (_typeof(value) === 'object') {
        fullParams[key] = JSON.stringify(value);
      }
    });
    var qs = querystring__WEBPACK_IMPORTED_MODULE_2___default.a.stringify(fullParams);
    var url = "".concat(Lbryio.CONNECTION_STRING).concat(resource, "/").concat(action, "?").concat(qs);
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
      url = "".concat(Lbryio.CONNECTION_STRING).concat(resource, "/").concat(action);
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
        } // check that token works


        return Lbryio.getCurrentUser().then(function (user) {
          return user;
        })["catch"](function () {
          return false;
        });
      }).then(function (user) {
        if (user) {
          return user;
        }

        return lbry_redux__WEBPACK_IMPORTED_MODULE_1__["Lbry"].status().then(function (status) {
          if (Lbryio.overrides.setAuthToken) {
            return Lbryio.overrides.setAuthToken(status);
          } // simply call the logic to create a new user, and obtain the auth token


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
                  type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GENERATE_AUTH_TOKEN_SUCCESS"],
                  data: {
                    authToken: response.auth_token
                  }
                });
              }

              Lbryio.authToken = response.auth_token;
              res(response);
            })["catch"](function (error) {
              return rej(error);
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
        var rates = {
          LBC_USD: LBC_USD,
          LBC_BTC: LBC_BTC,
          BTC_USD: BTC_USD
        };
        resolve(rates);
      })["catch"](reject);
    });
    Lbryio.exchangeLastFetched = Date.now();
  }

  return Lbryio.exchangePromise;
}; // Allow overriding lbryio methods
// The desktop app will need to use it for getAuthToken because we use electron's ipcRenderer


Lbryio.overrides = {};

Lbryio.setOverride = function (methodName, newMethod) {
  Lbryio.overrides[methodName] = newMethod;
};

/* harmony default export */ __webpack_exports__["default"] = (Lbryio);

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var rewards = {};
rewards.TYPE_NEW_DEVELOPER = 'new_developer';
rewards.TYPE_NEW_USER = 'new_user';
rewards.TYPE_CONFIRM_EMAIL = 'email_provided';
rewards.TYPE_FIRST_CHANNEL = 'new_channel';
rewards.TYPE_FIRST_STREAM = 'first_stream';
rewards.TYPE_MANY_DOWNLOADS = 'many_downloads';
rewards.TYPE_FIRST_PUBLISH = 'first_publish';
rewards.TYPE_FEATURED_DOWNLOAD = 'featured_download';
rewards.TYPE_REFERRAL = 'referral';
rewards.TYPE_REWARD_CODE = 'reward_code';
rewards.TYPE_SUBSCRIPTION = 'subscription';
rewards.YOUTUBE_CREATOR = 'youtube_creator';
rewards.TYPE_DAILY_VIEW = 'daily_view';

rewards.claimReward = function (type, rewardParams) {
  function requestReward(resolve, reject, params) {
    if (!lbryio__WEBPACK_IMPORTED_MODULE_1__["default"].enabled) {
      reject(new Error(__('Rewards are not enabled.')));
      return;
    }

    lbryio__WEBPACK_IMPORTED_MODULE_1__["default"].call('reward', 'new', params, 'post').then(function (reward) {
      var message = reward.reward_notification || "You have claimed a ".concat(reward.reward_amount, " LBC reward."); // Display global notice

      var action = Object(lbry_redux__WEBPACK_IMPORTED_MODULE_0__["doToast"])({
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
    lbry_redux__WEBPACK_IMPORTED_MODULE_0__["Lbry"].address_unused().then(function (address) {
      var params = _objectSpread({
        reward_type: type,
        wallet_address: address
      }, rewardParams);

      switch (type) {
        case rewards.TYPE_FIRST_CHANNEL:
          lbry_redux__WEBPACK_IMPORTED_MODULE_0__["Lbry"].claim_list().then(function (claims) {
            var claim = claims.find(function (foundClaim) {
              return foundClaim.name.length && foundClaim.name[0] === '@' && foundClaim.txid.length && foundClaim.type === 'claim';
            });

            if (claim) {
              params.transaction_id = claim.txid;
              requestReward(resolve, reject, params);
            } else {
              reject(new Error(__('Please create a channel identity first.')));
            }
          })["catch"](reject);
          break;

        case rewards.TYPE_FIRST_PUBLISH:
          lbry_redux__WEBPACK_IMPORTED_MODULE_0__["Lbry"].claim_list().then(function (claims) {
            var claim = claims.find(function (foundClaim) {
              return foundClaim.name.length && foundClaim.name[0] !== '@' && foundClaim.txid.length && foundClaim.type === 'claim';
            });

            if (claim) {
              params.transaction_id = claim.txid;
              requestReward(resolve, reject, params);
            } else {
              reject(claims.length ? new Error(__('Please publish something and wait for confirmation by the network to claim this reward.')) : new Error(__('Please publish something to claim this reward.')));
            }
          })["catch"](reject);
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

/* harmony default export */ __webpack_exports__["default"] = (rewards);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var constants_subscriptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var util_redux_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
var _handleActions;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var defaultState = {
  enabledChannelNotifications: [],
  subscriptions: [],
  latest: {},
  unread: {},
  suggested: {},
  loading: false,
  viewMode: constants_subscriptions__WEBPACK_IMPORTED_MODULE_2__["VIEW_ALL"],
  loadingSuggested: false,
  firstRunCompleted: false,
  showSuggestedSubs: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(util_redux_utils__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["CHANNEL_SUBSCRIBE"], function (state, action) {
  var newSubscription = action.data;
  var newSubscriptions = state.subscriptions.slice();
  newSubscriptions.unshift(newSubscription);
  return _objectSpread({}, state, {
    subscriptions: newSubscriptions
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["CHANNEL_UNSUBSCRIBE"], function (state, action) {
  var subscriptionToRemove = action.data;
  var newSubscriptions = state.subscriptions.slice().filter(function (subscription) {
    return subscription.channelName !== subscriptionToRemove.channelName;
  }); // Check if we need to remove it from the 'unread' state

  var unread = state.unread;

  if (unread[subscriptionToRemove.uri]) {
    delete unread[subscriptionToRemove.uri];
  }

  return _objectSpread({}, state, {
    unread: _objectSpread({}, unread),
    subscriptions: newSubscriptions
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SET_SUBSCRIPTION_LATEST"], function (state, action) {
  var _action$data = action.data,
      subscription = _action$data.subscription,
      uri = _action$data.uri;
  var newLatest = Object.assign({}, state.latest);
  newLatest[subscription.uri] = uri;
  return _objectSpread({}, state, {
    latest: newLatest
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_SUBSCRIPTION_UNREADS"], function (state, action) {
  var _action$data2 = action.data,
      channel = _action$data2.channel,
      uris = _action$data2.uris,
      type = _action$data2.type;
  return _objectSpread({}, state, {
    unread: _objectSpread({}, state.unread, _defineProperty({}, channel, {
      uris: uris,
      type: type
    }))
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_SUBSCRIPTION_UNREADS"], function (state, action) {
  var _action$data3 = action.data,
      channel = _action$data3.channel,
      uris = _action$data3.uris; // If no channel is passed in, remove all unreads

  var newUnread;

  if (channel) {
    newUnread = _objectSpread({}, state.unread);

    if (!uris) {
      delete newUnread[channel];
    } else {
      newUnread[channel].uris = uris;
    }
  } else {
    newUnread = {};
  }

  return _objectSpread({}, state, {
    unread: _objectSpread({}, newUnread)
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS"], function (state, action) {
  var channelName = action.data;
  var newEnabledChannelNotifications = state.enabledChannelNotifications.slice();

  if (channelName && channelName.trim().length > 0 && newEnabledChannelNotifications.indexOf(channelName) === -1) {
    newEnabledChannelNotifications.push(channelName);
  }

  return _objectSpread({}, state, {
    enabledChannelNotifications: newEnabledChannelNotifications
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS"], function (state, action) {
  var channelName = action.data;
  var newEnabledChannelNotifications = state.enabledChannelNotifications.slice();
  var index = newEnabledChannelNotifications.indexOf(channelName);

  if (index > -1) {
    newEnabledChannelNotifications.splice(index, 1);
  }

  return _objectSpread({}, state, {
    enabledChannelNotifications: newEnabledChannelNotifications
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SUBSCRIPTIONS_START"], function (state) {
  return _objectSpread({}, state, {
    loading: true
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SUBSCRIPTIONS_FAIL"], function (state) {
  return _objectSpread({}, state, {
    loading: false
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SUBSCRIPTIONS_SUCCESS"], function (state, action) {
  return _objectSpread({}, state, {
    loading: false,
    subscriptions: action.data
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SET_VIEW_MODE"], function (state, action) {
  return _objectSpread({}, state, {
    viewMode: action.data
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SUGGESTED_SUBSCRIPTIONS_START"], function (state) {
  return _objectSpread({}, state, {
    loadingSuggested: true
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS"], function (state, action) {
  return _objectSpread({}, state, {
    suggested: action.data,
    loadingSuggested: false
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SUGGESTED_SUBSCRIPTIONS_FAIL"], function (state) {
  return _objectSpread({}, state, {
    loadingSuggested: false
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SUBSCRIPTION_FIRST_RUN_COMPLETED"], function (state) {
  return _objectSpread({}, state, {
    firstRunCompleted: true
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["VIEW_SUGGESTED_SUBSCRIPTIONS"], function (state) {
  return _objectSpread({}, state, {
    showSuggestedSubs: true
  });
}), _defineProperty(_handleActions, lbry_redux__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].USER_STATE_POPULATE, function (state, action) {
  var subscriptions = action.data.subscriptions;
  var newSubscriptions;

  if (!subscriptions) {
    newSubscriptions = state.subscriptions;
  } else {
    var parsedSubscriptions = subscriptions.map(function (uri) {
      var _parseURI = Object(lbry_redux__WEBPACK_IMPORTED_MODULE_1__["parseURI"])(uri),
          channelName = _parseURI.channelName;

      return {
        uri: uri,
        channelName: "@".concat(channelName)
      };
    });

    if (!state.subscriptions || !state.subscriptions.length) {
      newSubscriptions = parsedSubscriptions;
    } else {
      var map = {};
      newSubscriptions = parsedSubscriptions.concat(state.subscriptions).filter(function (sub) {
        return map[sub.uri] ? false : map[sub.uri] = true;
      }, {});
    }
  }

  return _objectSpread({}, state, {
    subscriptions: newSubscriptions
  });
}), _handleActions), defaultState));

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_ALL", function() { return VIEW_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_LATEST_FIRST", function() { return VIEW_LATEST_FIRST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWNLOADING", function() { return DOWNLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWNLOADED", function() { return DOWNLOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFY_ONLY", function() { return NOTIFY_ONLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUGGESTED_TOP_BID", function() { return SUGGESTED_TOP_BID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUGGESTED_TOP_SUBSCRIBED", function() { return SUGGESTED_TOP_SUBSCRIBED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUGGESTED_FEATURED", function() { return SUGGESTED_FEATURED; });
var VIEW_ALL = 'view_all';
var VIEW_LATEST_FIRST = 'view_latest_first'; // Types for unreads

var DOWNLOADING = 'DOWNLOADING';
var DOWNLOADED = 'DOWNLOADED';
var NOTIFY_ONLY = 'NOTIFY_ONLY;'; // Suggested types

var SUGGESTED_TOP_BID = 'top_bid';
var SUGGESTED_TOP_SUBSCRIBED = 'top_subscribed';
var SUGGESTED_FEATURED = 'featured';

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleActions", function() { return handleActions; });
// util for creating reducers
// based off of redux-actions
// https://redux-actions.js.org/docs/api/handleAction.html#handleactions
// eslint-disable-next-line import/prefer-default-export
var handleActions = function handleActions(actionMap, defaultState) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    var handler = actionMap[action.type];

    if (handler) {
      var newState = handler(state, action);
      return Object.assign({}, state, newState);
    } // just return the original state if no handler
    // returning a copy here breaks redux-persist


    return state;
  };
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userStateSyncMiddleware", function() { return userStateSyncMiddleware; });
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var persistShape = {
  version: '0',
  shared: {}
};
function userStateSyncMiddleware() {
  return function (_ref) {
    var getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (action.type === constants_action_types__WEBPACK_IMPORTED_MODULE_2__["CHANNEL_SUBSCRIBE"] || action.type === constants_action_types__WEBPACK_IMPORTED_MODULE_2__["CHANNEL_UNSUBSCRIBE"] || action.type === lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].TOGGLE_TAG_FOLLOW) {
          var newShape = _objectSpread({}, persistShape);

          var state = getState();
          var subscriptions = Object(redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_3__["selectSubscriptions"])(state).map(function (_ref2) {
            var uri = _ref2.uri;
            return uri;
          });
          var tags = Object(lbry_redux__WEBPACK_IMPORTED_MODULE_0__["selectFollowedTags"])(state);
          newShape.shared.subscriptions = subscriptions;
          newShape.shared.tags = tags;
          var uri = action.data.uri;

          if (action.type === constants_action_types__WEBPACK_IMPORTED_MODULE_2__["CHANNEL_SUBSCRIBE"]) {
            var newSubscriptions = subscriptions.slice();
            newSubscriptions.push(uri);
            newShape.shared.subscriptions = newSubscriptions;
          } else if (action.type === constants_action_types__WEBPACK_IMPORTED_MODULE_2__["CHANNEL_UNSUBSCRIBE"]) {
            var _newSubscriptions = subscriptions.slice();

            _newSubscriptions = _newSubscriptions.filter(function (subscribedUri) {
              return subscribedUri !== uri;
            });
            newShape.shared.subscriptions = _newSubscriptions;
          } else {
            var toggledTag = action.data.name;
            var followedTags = Object(lbry_redux__WEBPACK_IMPORTED_MODULE_0__["selectFollowedTags"])(state).map(function (_ref3) {
              var name = _ref3.name;
              return name;
            });
            var isFollowing = Object(lbry_redux__WEBPACK_IMPORTED_MODULE_0__["makeSelectIsFollowingTag"])(toggledTag)(state);
            var newTags = followedTags.slice();

            if (isFollowing) {
              newTags = newTags.filter(function (followedTag) {
                return followedTag.name !== toggledTag;
              });
            } else {
              newTags.push(toggledTag);
            }

            newShape.shared.tags = newTags;
          }

          lbryio__WEBPACK_IMPORTED_MODULE_1__["default"].call('user_settings', 'set', {
            settings: newShape
          });
        }

        return next(action);
      };
    };
  };
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSubscriptions", function() { return selectSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsFetchingSubscriptions", function() { return selectIsFetchingSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectViewMode", function() { return selectViewMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSuggested", function() { return selectSuggested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsFetchingSuggested", function() { return selectIsFetchingSuggested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSuggestedChannels", function() { return selectSuggestedChannels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFirstRunCompleted", function() { return selectFirstRunCompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectShowSuggestedSubs", function() { return selectShowSuggestedSubs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSubscriptionsBeingFetched", function() { return selectSubscriptionsBeingFetched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUnreadByChannel", function() { return selectUnreadByChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUnreadAmount", function() { return selectUnreadAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUnreadSubscriptions", function() { return selectUnreadSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectUnreadByChannel", function() { return makeSelectUnreadByChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSubscriptionClaims", function() { return selectSubscriptionClaims; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectIsSubscribed", function() { return makeSelectIsSubscribed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectIsNew", function() { return makeSelectIsNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEnabledChannelNotifications", function() { return selectEnabledChannelNotifications; });
/* harmony import */ var constants_subscriptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var util_swap_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // Returns the entire subscriptions state

var selectState = function selectState(state) {
  return state.subscriptions || {};
}; // Returns the list of channel uris a user is subscribed to


var selectSubscriptions = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, function (state) {
  return state.subscriptions;
}); // Fetching list of users subscriptions

var selectIsFetchingSubscriptions = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, function (state) {
  return state.loading;
}); // The current view mode on the subscriptions page

var selectViewMode = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, function (state) {
  return state.viewMode;
}); // Suggested subscriptions from internal apis

var selectSuggested = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, function (state) {
  return state.suggested;
});
var selectIsFetchingSuggested = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, function (state) {
  return state.loadingSuggested;
});
var selectSuggestedChannels = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectSubscriptions, selectSuggested, function (userSubscriptions, suggested) {
  if (!suggested) {
    return null;
  } // Swap the key/value because we will use the uri for everything, this just makes it easier
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


  var topSubscribedSuggestions = Object(util_swap_json__WEBPACK_IMPORTED_MODULE_3__["swapKeyAndValue"])(suggested[constants_subscriptions__WEBPACK_IMPORTED_MODULE_0__["SUGGESTED_TOP_SUBSCRIBED"]]);
  var featuredSuggestions = Object(util_swap_json__WEBPACK_IMPORTED_MODULE_3__["swapKeyAndValue"])(suggested[constants_subscriptions__WEBPACK_IMPORTED_MODULE_0__["SUGGESTED_FEATURED"]]); // Make sure there are no duplicates
  // If a uri isn't already in the suggested object, add it

  var suggestedChannels = _objectSpread({}, topSubscribedSuggestions);

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
var selectFirstRunCompleted = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, function (state) {
  return state.firstRunCompleted;
});
var selectShowSuggestedSubs = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, function (state) {
  return state.showSuggestedSubs;
}); // Fetching any claims that are a part of a users subscriptions

var selectSubscriptionsBeingFetched = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectSubscriptions, lbry_redux__WEBPACK_IMPORTED_MODULE_2__["selectAllFetchingChannelClaims"], function (subscriptions, fetchingChannelClaims) {
  var fetchingSubscriptionMap = {};
  subscriptions.forEach(function (sub) {
    var isFetching = fetchingChannelClaims && fetchingChannelClaims[sub.uri];

    if (isFetching) {
      fetchingSubscriptionMap[sub.uri] = true;
    }
  });
  return fetchingSubscriptionMap;
});
var selectUnreadByChannel = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, function (state) {
  return state.unread;
}); // Returns the current total of unread subscriptions

var selectUnreadAmount = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectUnreadByChannel, function (unreadByChannel) {
  var unreadChannels = Object.keys(unreadByChannel);
  var badges = 0;

  if (!unreadChannels.length) {
    return badges;
  }

  unreadChannels.forEach(function (channel) {
    badges += unreadByChannel[channel].uris.length;
  });
  return badges;
}); // Returns the uris with channels as an array with the channel with the newest content first
// If you just want the `unread` state, use selectUnread

var selectUnreadSubscriptions = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectUnreadAmount, selectUnreadByChannel, lbry_redux__WEBPACK_IMPORTED_MODULE_2__["selectClaimsByUri"], function (unreadAmount, unreadByChannel, claimsByUri) {
  // determine which channel has the newest content
  var unreadList = [];

  if (!unreadAmount) {
    return unreadList;
  }

  var channelUriList = Object.keys(unreadByChannel); // There is only one channel with unread notifications

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
}); // Returns all unread subscriptions for a uri passed in

var makeSelectUnreadByChannel = function makeSelectUnreadByChannel(uri) {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectUnreadByChannel, function (unread) {
    return unread[uri];
  });
}; // Returns the first page of claims for every channel a user is subscribed to

var selectSubscriptionClaims = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(lbry_redux__WEBPACK_IMPORTED_MODULE_2__["selectAllClaimsByChannel"], lbry_redux__WEBPACK_IMPORTED_MODULE_2__["selectClaimsById"], selectSubscriptions, selectUnreadByChannel, function (channelIds, allClaims, savedSubscriptions, unreadByChannel) {
  // no claims loaded yet
  if (!Object.keys(channelIds).length) {
    return [];
  }

  var fetchedSubscriptions = [];
  savedSubscriptions.forEach(function (subscription) {
    var channelClaims = []; // if subscribed channel has content

    if (channelIds[subscription.uri] && channelIds[subscription.uri]['1']) {
      // This will need to be more robust, we will want to be able to load more than the first page
      // Strip out any ids that will be shown as notifications
      var pageOneChannelIds = channelIds[subscription.uri]['1']; // we have the channel ids and the corresponding claims
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
}); // Returns true if a user is subscribed to the channel associated with the uri passed in
// Accepts content or channel uris

var makeSelectIsSubscribed = function makeSelectIsSubscribed(uri) {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectSubscriptions, Object(lbry_redux__WEBPACK_IMPORTED_MODULE_2__["makeSelectChannelForClaimUri"])(uri, true), function (subscriptions, channelUri) {
    if (channelUri) {
      return subscriptions.some(function (sub) {
        return sub.uri === channelUri;
      });
    } // If we couldn't get a channel uri from the claim uri, the uri passed in might be a channel already


    var _parseURI = Object(lbry_redux__WEBPACK_IMPORTED_MODULE_2__["parseURI"])(uri),
        isChannel = _parseURI.isChannel;

    if (isChannel) {
      var uriWithPrefix = uri.startsWith('lbry://') ? uri : "lbry://".concat(uri);
      return subscriptions.some(function (sub) {
        return sub.uri === uriWithPrefix;
      });
    }

    return false;
  });
};
var makeSelectIsNew = function makeSelectIsNew(uri) {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(makeSelectIsSubscribed(uri), Object(lbry_redux__WEBPACK_IMPORTED_MODULE_2__["makeSelectChannelForClaimUri"])(uri), selectUnreadByChannel, function (isSubscribed, channel, unreadByChannel) {
    if (!isSubscribed) {
      return false;
    }

    var unreadForChannel = unreadByChannel["lbry://".concat(channel)];

    if (unreadForChannel) {
      return unreadForChannel.uris.includes(uri);
    }

    return false; // If they are subscribed, check to see if this uri is in the list of unreads
  });
};
var selectEnabledChannelNotifications = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, function (state) {
  return state.enabledChannelNotifications;
});

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swapKeyAndValue", function() { return swapKeyAndValue; });
function swapKeyAndValue(dict) {
  var ret = {}; // eslint-disable-next-line no-restricted-syntax

  for (var key in dict) {
    if (dict.hasOwnProperty(key)) {
      ret[dict[key]] = key;
    }
  }

  return ret;
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doGenerateAuthToken", function() { return doGenerateAuthToken; });
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


function doGenerateAuthToken(installationId) {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GENERATE_AUTH_TOKEN_STARTED"]
    });
    lbryio__WEBPACK_IMPORTED_MODULE_1__["default"].call('user', 'new', {
      auth_token: '',
      language: 'en',
      app_id: installationId
    }, 'post').then(function (response) {
      if (!response.auth_token) {
        dispatch({
          type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GENERATE_AUTH_TOKEN_FAILURE"]
        });
      } else {
        dispatch({
          type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GENERATE_AUTH_TOKEN_SUCCESS"],
          data: {
            authToken: response.auth_token
          }
        });
      }
    })["catch"](function () {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GENERATE_AUTH_TOKEN_FAILURE"]
      });
    });
  };
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRewardList", function() { return doRewardList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doClaimRewardType", function() { return doClaimRewardType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doClaimEligiblePurchaseRewards", function() { return doClaimEligiblePurchaseRewards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doClaimRewardClearError", function() { return doClaimRewardClearError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchRewardedContent", function() { return doFetchRewardedContent; });
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var redux_selectors_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var redux_actions_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var rewards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);






function doRewardList() {
  return function (dispatch) {
    dispatch({
      type: lbry_redux__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].FETCH_REWARDS_STARTED
    });
    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('reward', 'list', {
      multiple_rewards_per_type: true
    }).then(function (userRewards) {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].FETCH_REWARDS_COMPLETED,
        data: {
          userRewards: userRewards
        }
      });
    })["catch"](function () {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].FETCH_REWARDS_COMPLETED,
        data: {
          userRewards: []
        }
      });
    });
  };
}
function doClaimRewardType(rewardType) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (dispatch, getState) {
    var state = getState();
    var userIsRewardApproved = Object(redux_selectors_user__WEBPACK_IMPORTED_MODULE_3__["selectUserIsRewardApproved"])(state);
    var unclaimedRewards = Object(redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_2__["selectUnclaimedRewards"])(state);
    var reward = rewardType === rewards__WEBPACK_IMPORTED_MODULE_5__["default"].TYPE_REWARD_CODE ? {
      reward_type: rewards__WEBPACK_IMPORTED_MODULE_5__["default"].TYPE_REWARD_CODE
    } : unclaimedRewards.find(function (ur) {
      return ur.reward_type === rewardType;
    }); // Try to claim the email reward right away, even if we haven't called reward_list yet

    if (rewardType !== rewards__WEBPACK_IMPORTED_MODULE_5__["default"].TYPE_REWARD_CODE || rewardType !== rewards__WEBPACK_IMPORTED_MODULE_5__["default"].TYPE_CONFIRM_EMAIL || rewardType !== rewards__WEBPACK_IMPORTED_MODULE_5__["default"].TYPE_DAILY_VIEW) {
      if (!reward || reward.transaction_id) {
        // already claimed or doesn't exist, do nothing
        return;
      }
    }

    if (!userIsRewardApproved && rewardType !== rewards__WEBPACK_IMPORTED_MODULE_5__["default"].TYPE_CONFIRM_EMAIL && rewardType !== rewards__WEBPACK_IMPORTED_MODULE_5__["default"].TYPE_REWARD_CODE) {
      if (!options || !options.failSilently && rewards__WEBPACK_IMPORTED_MODULE_5__["default"].callbacks.rewardApprovalRequested) {
        rewards__WEBPACK_IMPORTED_MODULE_5__["default"].callbacks.rewardApprovalRequested();
      }

      return;
    } // Set `claim_code` so the api knows which reward to give if there are multiple of the same type


    var params = options.params || {};
    params.claim_code = reward.claim_code;
    dispatch({
      type: lbry_redux__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].CLAIM_REWARD_STARTED,
      data: {
        reward: reward
      }
    });

    var success = function success(successReward) {
      // Temporary timeout to ensure the sdk has the correct balance after claiming a reward
      setTimeout(function () {
        dispatch(Object(lbry_redux__WEBPACK_IMPORTED_MODULE_1__["doUpdateBalance"])()).then(function () {
          dispatch({
            type: lbry_redux__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].CLAIM_REWARD_SUCCESS,
            data: {
              reward: successReward
            }
          });

          if (successReward.reward_type === rewards__WEBPACK_IMPORTED_MODULE_5__["default"].TYPE_NEW_USER && rewards__WEBPACK_IMPORTED_MODULE_5__["default"].callbacks.claimFirstRewardSuccess) {
            rewards__WEBPACK_IMPORTED_MODULE_5__["default"].callbacks.claimFirstRewardSuccess();
          } else if (successReward.reward_type === rewards__WEBPACK_IMPORTED_MODULE_5__["default"].TYPE_REFERRAL) {
            dispatch(Object(redux_actions_user__WEBPACK_IMPORTED_MODULE_4__["doFetchInviteStatus"])());
          }

          dispatch(doRewardList());

          if (options.callback) {
            options.callback();
          }
        });
      }, 1000);
    };

    var failure = function failure(error) {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].CLAIM_REWARD_FAILURE,
        data: {
          reward: reward,
          error: !options || !options.failSilently ? error : undefined
        }
      });

      if (options.notifyError) {
        dispatch(Object(lbry_redux__WEBPACK_IMPORTED_MODULE_1__["doToast"])({
          message: error.message,
          isError: true
        }));
      }

      if (options.callback) {
        options.callback(error);
      }
    };

    return rewards__WEBPACK_IMPORTED_MODULE_5__["default"].claimReward(rewardType, params).then(success, failure);
  };
}
function doClaimEligiblePurchaseRewards() {
  return function (dispatch, getState) {
    var state = getState();
    var unclaimedRewards = Object(redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_2__["selectUnclaimedRewards"])(state);
    var userIsRewardApproved = Object(redux_selectors_user__WEBPACK_IMPORTED_MODULE_3__["selectUserIsRewardApproved"])(state);

    if (!userIsRewardApproved || !lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].enabled) {
      return;
    }

    if (unclaimedRewards.find(function (ur) {
      return ur.reward_type === rewards__WEBPACK_IMPORTED_MODULE_5__["default"].TYPE_FIRST_STREAM;
    })) {
      dispatch(doClaimRewardType(rewards__WEBPACK_IMPORTED_MODULE_5__["default"].TYPE_FIRST_STREAM));
    } else {
      [rewards__WEBPACK_IMPORTED_MODULE_5__["default"].TYPE_MANY_DOWNLOADS, rewards__WEBPACK_IMPORTED_MODULE_5__["default"].TYPE_FEATURED_DOWNLOAD, rewards__WEBPACK_IMPORTED_MODULE_5__["default"].TYPE_DAILY_VIEW].forEach(function (type) {
        dispatch(doClaimRewardType(type, {
          failSilently: true
        }));
      });
    }
  };
}
function doClaimRewardClearError(reward) {
  return function (dispatch) {
    dispatch({
      type: lbry_redux__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].CLAIM_REWARD_CLEAR_ERROR,
      data: {
        reward: reward
      }
    });
  };
}
function doFetchRewardedContent() {
  return function (dispatch) {
    var success = function success(nameToClaimId) {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].FETCH_REWARD_CONTENT_COMPLETED,
        data: {
          claimIds: Object.values(nameToClaimId),
          success: true
        }
      });
    };

    var failure = function failure() {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].FETCH_REWARD_CONTENT_COMPLETED,
        data: {
          claimIds: [],
          success: false
        }
      });
    };

    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('reward', 'list_featured').then(success, failure);
  };
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUnclaimedRewardsByType", function() { return selectUnclaimedRewardsByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectClaimedRewardsById", function() { return selectClaimedRewardsById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectClaimedRewards", function() { return selectClaimedRewards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectClaimedRewardsByTransactionId", function() { return selectClaimedRewardsByTransactionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUnclaimedRewards", function() { return selectUnclaimedRewards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFetchingRewards", function() { return selectFetchingRewards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUnclaimedRewardValue", function() { return selectUnclaimedRewardValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectClaimsPendingByType", function() { return selectClaimsPendingByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectIsRewardClaimPending", function() { return makeSelectIsRewardClaimPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectClaimErrorsByType", function() { return selectClaimErrorsByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectClaimRewardError", function() { return makeSelectClaimRewardError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectRewardByType", function() { return makeSelectRewardByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectRewardAmountByType", function() { return makeSelectRewardAmountByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRewardContentClaimIds", function() { return selectRewardContentClaimIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectReferralReward", function() { return selectReferralReward; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rewards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);



var selectState = function selectState(state) {
  return state.rewards || {};
};

var selectUnclaimedRewardsByType = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.unclaimedRewardsByType;
});
var selectClaimedRewardsById = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.claimedRewardsById;
});
var selectClaimedRewards = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectClaimedRewardsById, function (byId) {
  return Object.values(byId) || [];
});
var selectClaimedRewardsByTransactionId = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectClaimedRewards, function (rewards) {
  return rewards.reduce(function (mapParam, reward) {
    var map = mapParam;
    map[reward.transaction_id] = reward;
    return map;
  }, {});
});
var selectUnclaimedRewards = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.unclaimedRewards;
});
var selectFetchingRewards = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return !!state.fetching;
});
var selectUnclaimedRewardValue = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUnclaimedRewards, function (rewards) {
  return rewards.reduce(function (sum, reward) {
    return sum + reward.reward_amount;
  }, 0);
});
var selectClaimsPendingByType = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.claimPendingByType;
});

var selectIsClaimRewardPending = function selectIsClaimRewardPending(state, props) {
  return selectClaimsPendingByType(state, props)[props.reward_type];
};

var makeSelectIsRewardClaimPending = function makeSelectIsRewardClaimPending() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIsClaimRewardPending, function (isClaiming) {
    return isClaiming;
  });
};
var selectClaimErrorsByType = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.claimErrorsByType;
});

var selectClaimRewardError = function selectClaimRewardError(state, props) {
  return selectClaimErrorsByType(state, props)[props.reward_type];
};

var makeSelectClaimRewardError = function makeSelectClaimRewardError() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectClaimRewardError, function (errorMessage) {
    return errorMessage;
  });
};

var selectRewardByType = function selectRewardByType(state, rewardType) {
  return selectUnclaimedRewards(state).find(function (reward) {
    return reward.reward_type === rewardType;
  });
};

var makeSelectRewardByType = function makeSelectRewardByType() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectRewardByType, function (reward) {
    return reward;
  });
};
var makeSelectRewardAmountByType = function makeSelectRewardAmountByType() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectRewardByType, function (reward) {
    return reward ? reward.reward_amount : 0;
  });
};
var selectRewardContentClaimIds = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.rewardedContentClaimIds;
});
var selectReferralReward = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUnclaimedRewards, function (unclaimedRewards) {
  return unclaimedRewards.filter(function (reward) {
    return reward.reward_type === rewards__WEBPACK_IMPORTED_MODULE_1__["default"].TYPE_REFERRAL;
  })[0];
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthenticationIsPending", function() { return selectAuthenticationIsPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserIsPending", function() { return selectUserIsPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUser", function() { return selectUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserEmail", function() { return selectUserEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserPhone", function() { return selectUserPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserCountryCode", function() { return selectUserCountryCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEmailToVerify", function() { return selectEmailToVerify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPhoneToVerify", function() { return selectPhoneToVerify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectYoutubeChannels", function() { return selectYoutubeChannels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserIsRewardApproved", function() { return selectUserIsRewardApproved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEmailNewIsPending", function() { return selectEmailNewIsPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEmailNewErrorMessage", function() { return selectEmailNewErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPhoneNewErrorMessage", function() { return selectPhoneNewErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEmailVerifyIsPending", function() { return selectEmailVerifyIsPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEmailVerifyErrorMessage", function() { return selectEmailVerifyErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPhoneNewIsPending", function() { return selectPhoneNewIsPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPhoneVerifyIsPending", function() { return selectPhoneVerifyIsPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPhoneVerifyErrorMessage", function() { return selectPhoneVerifyErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIdentityVerifyIsPending", function() { return selectIdentityVerifyIsPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIdentityVerifyErrorMessage", function() { return selectIdentityVerifyErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserVerifiedEmail", function() { return selectUserVerifiedEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserIsVerificationCandidate", function() { return selectUserIsVerificationCandidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAccessToken", function() { return selectAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserInviteStatusIsPending", function() { return selectUserInviteStatusIsPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserInvitesRemaining", function() { return selectUserInvitesRemaining; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserInvitees", function() { return selectUserInvitees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserInviteStatusFailed", function() { return selectUserInviteStatusFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserInviteNewIsPending", function() { return selectUserInviteNewIsPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserInviteNewErrorMessage", function() { return selectUserInviteNewErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserInviteReferralLink", function() { return selectUserInviteReferralLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectYouTubeImportPending", function() { return selectYouTubeImportPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectYouTubeImportError", function() { return selectYouTubeImportError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectYouTubeImportVideosComplete", function() { return selectYouTubeImportVideosComplete; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);

var selectState = function selectState(state) {
  return state.user || {};
};
var selectAuthenticationIsPending = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.authenticationIsPending;
});
var selectUserIsPending = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.userIsPending;
});
var selectUser = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.user;
});
var selectUserEmail = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUser, function (user) {
  return user ? user.primary_email : null;
});
var selectUserPhone = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUser, function (user) {
  return user ? user.phone_number : null;
});
var selectUserCountryCode = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUser, function (user) {
  return user ? user.country_code : null;
});
var selectEmailToVerify = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectUserEmail, function (state, userEmail) {
  return state.emailToVerify || userEmail;
});
var selectPhoneToVerify = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectUserPhone, function (state, userPhone) {
  return state.phoneToVerify || userPhone;
});
var selectYoutubeChannels = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUser, function (user) {
  return user ? user.youtube_channels : null;
});
var selectUserIsRewardApproved = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUser, function (user) {
  return user && user.is_reward_approved;
});
var selectEmailNewIsPending = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.emailNewIsPending;
});
var selectEmailNewErrorMessage = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.emailNewErrorMessage;
});
var selectPhoneNewErrorMessage = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.phoneNewErrorMessage;
});
var selectEmailVerifyIsPending = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.emailVerifyIsPending;
});
var selectEmailVerifyErrorMessage = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.emailVerifyErrorMessage;
});
var selectPhoneNewIsPending = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.phoneNewIsPending;
});
var selectPhoneVerifyIsPending = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.phoneVerifyIsPending;
});
var selectPhoneVerifyErrorMessage = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.phoneVerifyErrorMessage;
});
var selectIdentityVerifyIsPending = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.identityVerifyIsPending;
});
var selectIdentityVerifyErrorMessage = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.identityVerifyErrorMessage;
});
var selectUserVerifiedEmail = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUser, function (user) {
  return user && user.has_verified_email;
});
var selectUserIsVerificationCandidate = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUser, function (user) {
  return user && (!user.has_verified_email || !user.is_identity_verified);
});
var selectAccessToken = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.accessToken;
});
var selectUserInviteStatusIsPending = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.inviteStatusIsPending;
});
var selectUserInvitesRemaining = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.invitesRemaining;
});
var selectUserInvitees = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.invitees;
});
var selectUserInviteStatusFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUserInvitesRemaining, function () {
  return selectUserInvitesRemaining === null;
});
var selectUserInviteNewIsPending = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.inviteNewIsPending;
});
var selectUserInviteNewErrorMessage = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.inviteNewErrorMessage;
});
var selectUserInviteReferralLink = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.referralLink;
});
var selectYouTubeImportPending = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.youtubeChannelImportPending;
});
var selectYouTubeImportError = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.youtubeChannelImportErrorMessage;
});
var selectYouTubeImportVideosComplete = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  var total = state.youtubeChannelImportTotal;
  var complete = state.youtubeChannelImportComplete || 0;

  if (total) {
    return [complete, total];
  }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchInviteStatus", function() { return doFetchInviteStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doInstallNew", function() { return doInstallNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doAuthenticate", function() { return doAuthenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserFetch", function() { return doUserFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserCheckEmailVerified", function() { return doUserCheckEmailVerified; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserPhoneReset", function() { return doUserPhoneReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserPhoneNew", function() { return doUserPhoneNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserPhoneVerifyFailure", function() { return doUserPhoneVerifyFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserPhoneVerify", function() { return doUserPhoneVerify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserEmailToVerify", function() { return doUserEmailToVerify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserEmailNew", function() { return doUserEmailNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserResendVerificationEmail", function() { return doUserResendVerificationEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserEmailVerifyFailure", function() { return doUserEmailVerifyFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserEmailVerify", function() { return doUserEmailVerify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchAccessToken", function() { return doFetchAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserIdentityVerify", function() { return doUserIdentityVerify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserInviteNew", function() { return doUserInviteNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doClaimYoutubeChannels", function() { return doClaimYoutubeChannels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCheckYoutubeTransfer", function() { return doCheckYoutubeTransfer; });
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var redux_actions_rewards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var redux_selectors_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var rewards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function doFetchInviteStatus() {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_INVITE_STATUS_FETCH_STARTED"]
    });
    Promise.all([lbryio__WEBPACK_IMPORTED_MODULE_5__["default"].call('user', 'invite_status'), lbryio__WEBPACK_IMPORTED_MODULE_5__["default"].call('user_referral_code', 'list')]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          status = _ref2[0],
          code = _ref2[1];

      dispatch(Object(redux_actions_rewards__WEBPACK_IMPORTED_MODULE_2__["doRewardList"])());
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_INVITE_STATUS_FETCH_SUCCESS"],
        data: {
          invitesRemaining: status.invites_remaining ? status.invites_remaining : 0,
          invitees: status.invitees,
          referralLink: "".concat(lbryio__WEBPACK_IMPORTED_MODULE_5__["default"].CONNECTION_STRING, "user/refer?r=").concat(code)
        }
      });
    })["catch"](function (error) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_INVITE_STATUS_FETCH_FAILURE"],
        data: {
          error: error
        }
      });
    });
  };
}
function doInstallNew(appVersion) {
  var os = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var payload = {
    app_version: appVersion
  };
  lbry_redux__WEBPACK_IMPORTED_MODULE_0__["Lbry"].status().then(function (status) {
    payload.app_id = status.installation_id;
    payload.node_id = status.lbry_id;
    lbry_redux__WEBPACK_IMPORTED_MODULE_0__["Lbry"].version().then(function (version) {
      payload.daemon_version = version.lbrynet_version;
      payload.operating_system = os || version.os_system;
      payload.platform = version.platform;
      lbryio__WEBPACK_IMPORTED_MODULE_5__["default"].call('install', 'new', payload);
    });
  });
} // TODO: Call doInstallNew separately so we don't have to pass appVersion and os_system params?

function doAuthenticate(appVersion) {
  var os = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["AUTHENTICATION_STARTED"]
    });
    lbryio__WEBPACK_IMPORTED_MODULE_5__["default"].authenticate().then(function (user) {
      // analytics.setUser(user);
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["AUTHENTICATION_SUCCESS"],
        data: {
          user: user
        }
      });
      dispatch(Object(redux_actions_rewards__WEBPACK_IMPORTED_MODULE_2__["doRewardList"])());
      dispatch(doFetchInviteStatus());
      doInstallNew(appVersion, os);
    })["catch"](function (error) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["AUTHENTICATION_FAILURE"],
        data: {
          error: error
        }
      });
    });
  };
}
function doUserFetch() {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_FETCH_STARTED"]
    });
    lbryio__WEBPACK_IMPORTED_MODULE_5__["default"].getCurrentUser().then(function (user) {
      dispatch(Object(redux_actions_rewards__WEBPACK_IMPORTED_MODULE_2__["doRewardList"])());
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_FETCH_SUCCESS"],
        data: {
          user: user
        }
      });
    })["catch"](function (error) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_FETCH_FAILURE"],
        data: {
          error: error
        }
      });
    });
  };
}
function doUserCheckEmailVerified() {
  // This will happen in the background so we don't need loading booleans
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_5__["default"].getCurrentUser().then(function (user) {
      if (user.has_verified_email) {
        dispatch(Object(redux_actions_rewards__WEBPACK_IMPORTED_MODULE_2__["doRewardList"])());
        dispatch({
          type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_FETCH_SUCCESS"],
          data: {
            user: user
          }
        });
      }
    });
  };
}
function doUserPhoneReset() {
  return {
    type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_PHONE_RESET"]
  };
}
function doUserPhoneNew(phone, countryCode) {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_PHONE_NEW_STARTED"],
      data: {
        phone: phone,
        country_code: countryCode
      }
    });

    var success = function success() {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_PHONE_NEW_SUCCESS"],
        data: {
          phone: phone
        }
      });
    };

    var failure = function failure(error) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_PHONE_NEW_FAILURE"],
        data: {
          error: error
        }
      });
    };

    lbryio__WEBPACK_IMPORTED_MODULE_5__["default"].call('user', 'phone_number_new', {
      phone_number: phone,
      country_code: countryCode
    }, 'post').then(success, failure);
  };
}
function doUserPhoneVerifyFailure(error) {
  return {
    type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_PHONE_VERIFY_FAILURE"],
    data: {
      error: error
    }
  };
}
function doUserPhoneVerify(verificationCode) {
  return function (dispatch, getState) {
    var phoneNumber = Object(redux_selectors_user__WEBPACK_IMPORTED_MODULE_3__["selectPhoneToVerify"])(getState());
    var countryCode = Object(redux_selectors_user__WEBPACK_IMPORTED_MODULE_3__["selectUserCountryCode"])(getState());
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_PHONE_VERIFY_STARTED"],
      code: verificationCode
    });
    lbryio__WEBPACK_IMPORTED_MODULE_5__["default"].call('user', 'phone_number_confirm', {
      verification_code: verificationCode,
      phone_number: phoneNumber,
      country_code: countryCode
    }, 'post').then(function (user) {
      if (user.is_identity_verified) {
        dispatch({
          type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_PHONE_VERIFY_SUCCESS"],
          data: {
            user: user
          }
        });
        dispatch(Object(redux_actions_rewards__WEBPACK_IMPORTED_MODULE_2__["doClaimRewardType"])(rewards__WEBPACK_IMPORTED_MODULE_4__["default"].TYPE_NEW_USER));
      }
    })["catch"](function (error) {
      return dispatch(doUserPhoneVerifyFailure(error));
    });
  };
}
function doUserEmailToVerify(email) {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_EMAIL_VERIFY_SET"],
      data: {
        email: email
      }
    });
  };
}
function doUserEmailNew(email) {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_EMAIL_NEW_STARTED"],
      email: email
    });

    var success = function success() {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_EMAIL_NEW_SUCCESS"],
        data: {
          email: email
        }
      });
      dispatch(doUserFetch());
    };

    var failure = function failure(error) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_EMAIL_NEW_FAILURE"],
        data: {
          error: error
        }
      });
    };

    lbryio__WEBPACK_IMPORTED_MODULE_5__["default"].call('user_email', 'new', {
      email: email,
      send_verification_email: true
    }, 'post')["catch"](function (error) {
      if (error.response && error.response.status === 409) {
        return lbryio__WEBPACK_IMPORTED_MODULE_5__["default"].call('user_email', 'resend_token', {
          email: email,
          only_if_expired: true
        }, 'post').then(success, failure);
      }

      throw error;
    }).then(success, failure);
  };
}
function doUserResendVerificationEmail(email) {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_EMAIL_VERIFY_RETRY"],
      email: email
    });

    var success = function success() {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_EMAIL_NEW_SUCCESS"],
        data: {
          email: email
        }
      });
      dispatch(doUserFetch());
    };

    var failure = function failure(error) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_EMAIL_NEW_FAILURE"],
        data: {
          error: error
        }
      });
    };

    lbryio__WEBPACK_IMPORTED_MODULE_5__["default"].call('user_email', 'resend_token', {
      email: email
    }, 'post')["catch"](function (error) {
      if (error.response && error.response.status === 409) {
        throw error;
      }
    }).then(success, failure);
  };
}
function doUserEmailVerifyFailure(error) {
  return {
    type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_EMAIL_VERIFY_FAILURE"],
    data: {
      error: error
    }
  };
}
function doUserEmailVerify(verificationToken, recaptcha) {
  return function (dispatch, getState) {
    var email = Object(redux_selectors_user__WEBPACK_IMPORTED_MODULE_3__["selectEmailToVerify"])(getState());
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_EMAIL_VERIFY_STARTED"],
      code: verificationToken,
      recaptcha: recaptcha
    });
    lbryio__WEBPACK_IMPORTED_MODULE_5__["default"].call('user_email', 'confirm', {
      verification_token: verificationToken,
      email: email,
      recaptcha: recaptcha
    }, 'post').then(function (userEmail) {
      if (userEmail.is_verified) {
        dispatch({
          type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_EMAIL_VERIFY_SUCCESS"],
          data: {
            email: email
          }
        });
        dispatch(doUserFetch());
      } else {
        throw new Error('Your email is still not verified.'); // shouldn't happen
      }
    })["catch"](function (error) {
      return dispatch(doUserEmailVerifyFailure(error));
    });
  };
}
function doFetchAccessToken() {
  return function (dispatch) {
    var success = function success(token) {
      return dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_ACCESS_TOKEN_SUCCESS"],
        data: {
          token: token
        }
      });
    };

    lbryio__WEBPACK_IMPORTED_MODULE_5__["default"].getAuthToken().then(success);
  };
}
function doUserIdentityVerify(stripeToken) {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_IDENTITY_VERIFY_STARTED"],
      token: stripeToken
    });
    lbryio__WEBPACK_IMPORTED_MODULE_5__["default"].call('user', 'verify_identity', {
      stripe_token: stripeToken
    }, 'post').then(function (user) {
      if (user.is_identity_verified) {
        dispatch({
          type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_IDENTITY_VERIFY_SUCCESS"],
          data: {
            user: user
          }
        });
        dispatch(Object(redux_actions_rewards__WEBPACK_IMPORTED_MODULE_2__["doClaimRewardType"])(rewards__WEBPACK_IMPORTED_MODULE_4__["default"].TYPE_NEW_USER));
      } else {
        throw new Error('Your identity is still not verified. This should not happen.'); // shouldn't happen
      }
    })["catch"](function (error) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_IDENTITY_VERIFY_FAILURE"],
        data: {
          error: error.toString()
        }
      });
    });
  };
}
function doUserInviteNew(email) {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_INVITE_NEW_STARTED"]
    });
    lbryio__WEBPACK_IMPORTED_MODULE_5__["default"].call('user', 'invite', {
      email: email
    }, 'post').then(function () {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_INVITE_NEW_SUCCESS"],
        data: {
          email: email
        }
      });
      dispatch(Object(lbry_redux__WEBPACK_IMPORTED_MODULE_0__["doToast"])({
        message: __('Invite sent to %s', email)
      }));
      dispatch(doFetchInviteStatus());
    })["catch"](function (error) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_INVITE_NEW_FAILURE"],
        data: {
          error: error
        }
      });
    });
  };
}
function doClaimYoutubeChannels() {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_YOUTUBE_IMPORT_STARTED"]
    });
    var transferResponse;
    return lbry_redux__WEBPACK_IMPORTED_MODULE_0__["Lbry"].address_list().then(function (addressList) {
      return addressList.sort(function (a, b) {
        return a.used_times - b.used_times;
      })[0];
    }).then(function (address) {
      return lbryio__WEBPACK_IMPORTED_MODULE_5__["default"].call('yt', 'transfer', {
        address: address.address,
        public_key: address.pubkey
      }).then(function (response) {
        if (response && response.length) {
          transferResponse = response;
          return Promise.all(response.map(function (channelMeta) {
            if (channelMeta && channelMeta.channel && channelMeta.channel.channel_certificate) {
              return lbry_redux__WEBPACK_IMPORTED_MODULE_0__["Lbry"].channel_import({
                channel_data: channelMeta.channel.channel_certificate
              });
            }

            return null;
          })).then(function () {
            var actions = [{
              type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_YOUTUBE_IMPORT_SUCCESS"],
              data: transferResponse
            }];
            actions.push(doUserFetch());
            actions.push(Object(lbry_redux__WEBPACK_IMPORTED_MODULE_0__["doFetchChannelListMine"])());
            dispatch(lbry_redux__WEBPACK_IMPORTED_MODULE_0__["batchActions"].apply(void 0, actions));
          });
        }
      });
    })["catch"](function (error) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_YOUTUBE_IMPORT_FAILURE"],
        data: String(error)
      });
    });
  };
}
function doCheckYoutubeTransfer() {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_YOUTUBE_IMPORT_STARTED"]
    });
    return lbryio__WEBPACK_IMPORTED_MODULE_5__["default"].call('yt', 'transfer').then(function (response) {
      if (response && response.length) {
        dispatch({
          type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_YOUTUBE_IMPORT_SUCCESS"],
          data: response
        });
      } else {
        throw new Error();
      }
    })["catch"](function (error) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_YOUTUBE_IMPORT_FAILURE"],
        data: String(error)
      });
    });
  };
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSetViewMode", function() { return doSetViewMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSubscriptionLatest", function() { return setSubscriptionLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUpdateUnreadSubscriptions", function() { return doUpdateUnreadSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveUnreadSubscriptions", function() { return doRemoveUnreadSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveUnreadSubscription", function() { return doRemoveUnreadSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCheckSubscription", function() { return doCheckSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doChannelSubscribe", function() { return doChannelSubscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doChannelUnsubscribe", function() { return doChannelUnsubscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCheckSubscriptions", function() { return doCheckSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchMySubscriptions", function() { return doFetchMySubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCheckSubscriptionsInit", function() { return doCheckSubscriptionsInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchRecommendedSubscriptions", function() { return doFetchRecommendedSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCompleteFirstRun", function() { return doCompleteFirstRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doShowSuggestedSubs", function() { return doShowSuggestedSubs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doChannelSubscriptionEnableNotifications", function() { return doChannelSubscriptionEnableNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doChannelSubscriptionDisableNotifications", function() { return doChannelSubscriptionDisableNotifications; });
/* harmony import */ var constants_claim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var redux_actions_rewards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var constants_subscriptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var rewards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var CHECK_SUBSCRIPTIONS_INTERVAL = 15 * 60 * 1000;
var SUBSCRIPTION_DOWNLOAD_LIMIT = 1;
var doSetViewMode = function doSetViewMode(viewMode) {
  return function (dispatch) {
    return dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_4__["SET_VIEW_MODE"],
      data: viewMode
    });
  };
};
var setSubscriptionLatest = function setSubscriptionLatest(subscription, uri) {
  return function (dispatch) {
    return dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_4__["SET_SUBSCRIPTION_LATEST"],
      data: {
        subscription: subscription,
        uri: uri
      }
    });
  };
}; // Populate a channels unread subscriptions or update the type

var doUpdateUnreadSubscriptions = function doUpdateUnreadSubscriptions(channelUri, uris, type) {
  return function (dispatch, getState) {
    var state = getState();
    var unreadByChannel = Object(redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_2__["selectUnreadByChannel"])(state);
    var currentUnreadForChannel = unreadByChannel[channelUri];
    var newUris = [];
    var newType = null;

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
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_4__["UPDATE_SUBSCRIPTION_UNREADS"],
      data: {
        channel: channelUri,
        uris: newUris,
        type: newType
      }
    });
  };
}; // Remove multiple files (or all) from a channels unread subscriptions

var doRemoveUnreadSubscriptions = function doRemoveUnreadSubscriptions(channelUri, readUris) {
  return function (dispatch, getState) {
    var state = getState();
    var unreadByChannel = Object(redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_2__["selectUnreadByChannel"])(state); // If no channel is passed in, remove all unread subscriptions from all channels

    if (!channelUri) {
      return dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_4__["REMOVE_SUBSCRIPTION_UNREADS"],
        data: {
          channel: null
        }
      });
    }

    var currentChannelUnread = unreadByChannel[channelUri];

    if (!currentChannelUnread || !currentChannelUnread.uris) {
      // Channel passed in doesn't have any unreads
      return null;
    } // For each uri passed in, remove it from the list of unread uris
    // If no uris are passed in, remove them all


    var newUris;

    if (readUris) {
      var urisToRemoveMap = readUris.reduce(function (acc, val) {
        return _objectSpread({}, acc, _defineProperty({}, val, true));
      }, {});
      var filteredUris = currentChannelUnread.uris.filter(function (uri) {
        return !urisToRemoveMap[uri];
      });
      newUris = filteredUris.length ? filteredUris : null;
    } else {
      newUris = null;
    }

    return dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_4__["REMOVE_SUBSCRIPTION_UNREADS"],
      data: {
        channel: channelUri,
        uris: newUris
      }
    });
  };
}; // Remove a single file from a channels unread subscriptions

var doRemoveUnreadSubscription = function doRemoveUnreadSubscription(channelUri, readUri) {
  return function (dispatch) {
    dispatch(doRemoveUnreadSubscriptions(channelUri, [readUri]));
  };
};
var doCheckSubscription = function doCheckSubscription(subscriptionUri, shouldNotify) {
  return function (dispatch, getState) {
    // no dispatching FETCH_CHANNEL_CLAIMS_STARTED; causes loading issues on <SubscriptionsPage>
    var state = getState();
    var shouldAutoDownload = false; // makeSelectClientSetting(SETTINGS.AUTO_DOWNLOAD)(state);

    var savedSubscription = state.subscriptions.subscriptions.find(function (sub) {
      return sub.uri === subscriptionUri;
    });
    var subscriptionLatest = state.subscriptions.latest[subscriptionUri];

    if (!savedSubscription) {
      throw Error("Trying to find new content for ".concat(subscriptionUri, " but it doesn't exist in your subscriptions"));
    } // We may be duplicating calls here. Can this logic be baked into doFetchClaimsByChannel?


    lbry_redux__WEBPACK_IMPORTED_MODULE_3__["Lbry"].claim_search({
      channel: subscriptionUri,
      valid_channel_signature: true,
      order_by: ['release_time'],
      page: 1,
      page_size: constants_claim__WEBPACK_IMPORTED_MODULE_0__["PAGE_SIZE"]
    }).then(function (claimListByChannel) {
      var claimsInChannel = claimListByChannel.items; // may happen if subscribed to an abandoned channel or an empty channel

      if (!claimsInChannel || !claimsInChannel.length) {
        return;
      } // Determine if the latest subscription currently saved is actually the latest subscription


      var latestIndex = claimsInChannel.findIndex(function (claim) {
        return claim.permanent_url === subscriptionLatest;
      }); // If latest is -1, it is a newly subscribed channel or there have been 10+ claims published since last viewed

      var latestIndexToNotify = latestIndex === -1 ? 10 : latestIndex; // If latest is 0, nothing has changed
      // Do not download/notify about new content, it would download/notify 10 claims per channel

      if (latestIndex !== 0 && subscriptionLatest) {
        var downloadCount = 0;
        var newUnread = [];
        claimsInChannel.slice(0, latestIndexToNotify).forEach(function (claim) {
          var uri = claim.permanent_url;
          var shouldDownload = shouldAutoDownload && Boolean(downloadCount < SUBSCRIPTION_DOWNLOAD_LIMIT && !claim.value.fee); // Add the new content to the list of "un-read" subscriptions

          if (shouldNotify) {
            newUnread.push(uri);
          }

          if (shouldDownload) {
            downloadCount += 1;
            dispatch(Object(lbry_redux__WEBPACK_IMPORTED_MODULE_3__["doPurchaseUri"])(uri, {
              cost: 0
            }, true));
          }
        });
        dispatch(doUpdateUnreadSubscriptions(subscriptionUri, newUnread, downloadCount > 0 ? constants_subscriptions__WEBPACK_IMPORTED_MODULE_5__["DOWNLOADING"] : constants_subscriptions__WEBPACK_IMPORTED_MODULE_5__["NOTIFY_ONLY"]));
      } // Set the latest piece of content for a channel
      // This allows the app to know if there has been new content since it was last set


      var latest = claimsInChannel[0];
      dispatch(setSubscriptionLatest({
        channelName: latest.signing_channel.name,
        uri: latest.signing_channel.permanent_url
      }, latest.permanent_url)); // calling FETCH_CHANNEL_CLAIMS_COMPLETED after not calling STARTED
      // means it will delete a non-existant fetchingChannelClaims[uri]

      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_4__["FETCH_CHANNEL_CLAIMS_COMPLETED"],
        data: {
          uri: subscriptionUri,
          claims: claimsInChannel || [],
          page: 1
        }
      });
    });
  };
};
var doChannelSubscribe = function doChannelSubscribe(subscription) {
  return function (dispatch, getState) {
    var _getState = getState(),
        daemonSettings = _getState.settings.daemonSettings;

    var isSharingData = daemonSettings ? daemonSettings.share_usage_data : true;
    var subscriptionUri = subscription.uri;

    if (!subscriptionUri.startsWith('lbry://')) {
      throw Error("Subscription uris must inclue the \"lbry://\" prefix.\nTried to subscribe to ".concat(subscriptionUri));
    }

    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_4__["CHANNEL_SUBSCRIBE"],
      data: subscription
    }); // if the user isn't sharing data, keep the subscriptions entirely in the app

    if (isSharingData) {
      var _parseURI = Object(lbry_redux__WEBPACK_IMPORTED_MODULE_3__["parseURI"])(subscription.uri),
          channelClaimId = _parseURI.channelClaimId; // They are sharing data, we can store their subscriptions in our internal database


      lbryio__WEBPACK_IMPORTED_MODULE_6__["default"].call('subscription', 'new', {
        channel_name: subscription.channelName,
        claim_id: channelClaimId
      });
      dispatch(Object(redux_actions_rewards__WEBPACK_IMPORTED_MODULE_1__["doClaimRewardType"])(rewards__WEBPACK_IMPORTED_MODULE_7__["default"].TYPE_SUBSCRIPTION, {
        failSilently: true
      }));
    }

    dispatch(doCheckSubscription(subscription.uri, true));
  };
};
var doChannelUnsubscribe = function doChannelUnsubscribe(subscription) {
  return function (dispatch, getState) {
    var _getState2 = getState(),
        daemonSettings = _getState2.settings.daemonSettings;

    var isSharingData = daemonSettings ? daemonSettings.share_usage_data : true;
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_4__["CHANNEL_UNSUBSCRIBE"],
      data: subscription
    });

    if (isSharingData) {
      var _parseURI2 = Object(lbry_redux__WEBPACK_IMPORTED_MODULE_3__["parseURI"])(subscription.uri),
          channelClaimId = _parseURI2.channelClaimId;

      lbryio__WEBPACK_IMPORTED_MODULE_6__["default"].call('subscription', 'delete', {
        claim_id: channelClaimId
      });
    }
  };
};
var doCheckSubscriptions = function doCheckSubscriptions() {
  return function (dispatch, getState) {
    var state = getState();
    var subscriptions = Object(redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_2__["selectSubscriptions"])(state);
    subscriptions.forEach(function (sub) {
      dispatch(doCheckSubscription(sub.uri, true));
    });
  };
};
var doFetchMySubscriptions = function doFetchMySubscriptions() {
  return function (dispatch, getState) {
    var state = getState();
    var reduxSubscriptions = state.subscriptions.subscriptions; // default to true if daemonSettings not found

    var isSharingData = state.settings && state.settings.daemonSettings ? state.settings.daemonSettings.share_usage_data : true;

    if (!isSharingData && isSharingData !== undefined) {
      // They aren't sharing their data, subscriptions will be handled by persisted redux state
      return;
    } // most of this logic comes from scenarios where the db isn't synced with redux
    // this will happen if the user stops sharing data


    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_4__["FETCH_SUBSCRIPTIONS_START"]
    });
    lbryio__WEBPACK_IMPORTED_MODULE_6__["default"].call('subscription', 'list').then(function (dbSubscriptions) {
      var storedSubscriptions = dbSubscriptions || []; // User has no subscriptions in db or redux

      if (!storedSubscriptions.length && (!reduxSubscriptions || !reduxSubscriptions.length)) {
        return [];
      } // There is some mismatch between redux state and db state
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
          var _parseURI3 = Object(lbry_redux__WEBPACK_IMPORTED_MODULE_3__["parseURI"])(sub.uri),
              channelClaimId = _parseURI3.channelClaimId;

          reduxSubMap[channelClaimId] = 1;
        });
        storedSubscriptions.forEach(function (sub) {
          if (!reduxSubMap[sub.claim_id]) {
            var uri = "lbry://".concat(sub.channel_name, "#").concat(sub.claim_id);
            subscriptionsToReturn.push({
              uri: uri,
              channelName: sub.channel_name
            });
          }
        });
        return Promise.all(subsNotInDB.map(function (payload) {
          return lbryio__WEBPACK_IMPORTED_MODULE_6__["default"].call('subscription', 'new', payload);
        })).then(function () {
          return subscriptionsToReturn;
        })["catch"](function () {
          return (// let it fail, we will try again when the navigate to the subscriptions page
            subscriptionsToReturn
          );
        });
      } // DB is already synced, just return the subscriptions in redux


      return reduxSubscriptions;
    }).then(function (subscriptions) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_4__["FETCH_SUBSCRIPTIONS_SUCCESS"],
        data: subscriptions
      });
      dispatch(Object(lbry_redux__WEBPACK_IMPORTED_MODULE_3__["doResolveUris"])(subscriptions.map(function (_ref) {
        var uri = _ref.uri;
        return uri;
      })));
      dispatch(doCheckSubscriptions());
    })["catch"](function () {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_4__["FETCH_SUBSCRIPTIONS_FAIL"]
      });
    });
  };
};
var doCheckSubscriptionsInit = function doCheckSubscriptionsInit() {
  return function (dispatch) {
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
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_4__["CHECK_SUBSCRIPTIONS_SUBSCRIBE"],
      data: {
        checkSubscriptionsTimer: checkSubscriptionsTimer
      }
    });
    setInterval(function () {
      return dispatch(doCheckSubscriptions());
    }, CHECK_SUBSCRIPTIONS_INTERVAL);
  };
};
var doFetchRecommendedSubscriptions = function doFetchRecommendedSubscriptions() {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_4__["GET_SUGGESTED_SUBSCRIPTIONS_START"]
    });
    return lbryio__WEBPACK_IMPORTED_MODULE_6__["default"].call('subscription', 'suggest').then(function (suggested) {
      return dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_4__["GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS"],
        data: suggested
      });
    })["catch"](function (error) {
      return dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_4__["GET_SUGGESTED_SUBSCRIPTIONS_FAIL"],
        error: error
      });
    });
  };
};
var doCompleteFirstRun = function doCompleteFirstRun() {
  return function (dispatch) {
    return dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_4__["SUBSCRIPTION_FIRST_RUN_COMPLETED"]
    });
  };
};
var doShowSuggestedSubs = function doShowSuggestedSubs() {
  return function (dispatch) {
    return dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_4__["VIEW_SUGGESTED_SUBSCRIPTIONS"]
    });
  };
};
var doChannelSubscriptionEnableNotifications = function doChannelSubscriptionEnableNotifications(channelName) {
  return function (dispatch) {
    return dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_4__["CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS"],
      data: channelName
    });
  };
};
var doChannelSubscriptionDisableNotifications = function doChannelSubscriptionDisableNotifications(channelName) {
  return function (dispatch) {
    return dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_4__["CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS"],
      data: channelName
    });
  };
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINIMUM_PUBLISH_BID", function() { return MINIMUM_PUBLISH_BID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL_ANONYMOUS", function() { return CHANNEL_ANONYMOUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL_NEW", function() { return CHANNEL_NEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_SIZE", function() { return PAGE_SIZE; });
var MINIMUM_PUBLISH_BID = 0.00000001;
var CHANNEL_ANONYMOUS = 'anonymous';
var CHANNEL_NEW = 'new';
var PAGE_SIZE = 20;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchCostInfoForUri", function() { return doFetchCostInfoForUri; });
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_2__);


 // eslint-disable-next-line import/prefer-default-export

function doFetchCostInfoForUri(uri) {
  return function (dispatch, getState) {
    var state = getState();
    var claim = Object(lbry_redux__WEBPACK_IMPORTED_MODULE_2__["selectClaimsByUri"])(state)[uri];
    if (!claim) return;

    function resolve(costInfo) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_COST_INFO_COMPLETED"],
        data: {
          uri: uri,
          costInfo: costInfo
        }
      });
    }

    var fee = claim.value ? claim.value.fee : undefined;

    if (fee === undefined) {
      resolve({
        cost: 0,
        includesData: true
      });
    } else if (fee.currency === 'LBC') {
      resolve({
        cost: fee.amount,
        includesData: true
      });
    } else {
      lbryio__WEBPACK_IMPORTED_MODULE_1__["default"].getExchangeRates().then(function (_ref) {
        var LBC_USD = _ref.LBC_USD;
        resolve({
          cost: fee.amount / LBC_USD,
          includesData: true
        });
      });
    }
  };
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchBlackListedOutpoints", function() { return doFetchBlackListedOutpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doBlackListedOutpointsSubscribe", function() { return doBlackListedOutpointsSubscribe; });
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var CHECK_BLACK_LISTED_CONTENT_INTERVAL = 60 * 60 * 1000;
function doFetchBlackListedOutpoints() {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_BLACK_LISTED_CONTENT_STARTED"]
    });

    var success = function success(_ref) {
      var outpoints = _ref.outpoints;
      var splitedOutpoints = [];
      outpoints.forEach(function (outpoint, index) {
        var _outpoint$split = outpoint.split(':'),
            _outpoint$split2 = _slicedToArray(_outpoint$split, 2),
            txid = _outpoint$split2[0],
            nout = _outpoint$split2[1];

        splitedOutpoints[index] = {
          txid: txid,
          nout: Number.parseInt(nout, 10)
        };
      });
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_BLACK_LISTED_CONTENT_COMPLETED"],
        data: {
          outpoints: splitedOutpoints,
          success: true
        }
      });
    };

    var failure = function failure(_ref2) {
      var error = _ref2.error;
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_BLACK_LISTED_CONTENT_FAILED"],
        data: {
          error: error,
          success: false
        }
      });
    };

    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('file', 'list_blocked').then(success, failure);
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
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchFilteredOutpoints", function() { return doFetchFilteredOutpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFilteredOutpointsSubscribe", function() { return doFilteredOutpointsSubscribe; });
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var CHECK_FILTERED_CONTENT_INTERVAL = 60 * 60 * 1000;
function doFetchFilteredOutpoints() {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_FILTERED_CONTENT_STARTED"]
    });

    var success = function success(_ref) {
      var outpoints = _ref.outpoints;
      var formattedOutpoints = outpoints.map(function (outpoint) {
        var _outpoint$split = outpoint.split(':'),
            _outpoint$split2 = _slicedToArray(_outpoint$split, 2),
            txid = _outpoint$split2[0],
            nout = _outpoint$split2[1];

        return {
          txid: txid,
          nout: Number.parseInt(nout, 10)
        };
      });
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_FILTERED_CONTENT_COMPLETED"],
        data: {
          outpoints: formattedOutpoints
        }
      });
    };

    var failure = function failure(_ref2) {
      var error = _ref2.error;
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_FILTERED_CONTENT_FAILED"],
        data: {
          error: error
        }
      });
    };

    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('file', 'list_filtered').then(success, failure);
  };
}
function doFilteredOutpointsSubscribe() {
  return function (dispatch) {
    dispatch(doFetchFilteredOutpoints());
    setInterval(function () {
      return dispatch(doFetchFilteredOutpoints());
    }, CHECK_FILTERED_CONTENT_INTERVAL);
  };
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchFeaturedUris", function() { return doFetchFeaturedUris; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchTrendingUris", function() { return doFetchTrendingUris; });
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }




function doFetchFeaturedUris() {
  var offloadResolve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_FEATURED_CONTENT_STARTED"]
    });

    var success = function success(_ref) {
      var Uris = _ref.Uris;
      var urisToResolve = [];
      Object.keys(Uris).forEach(function (category) {
        urisToResolve = [].concat(_toConsumableArray(urisToResolve), _toConsumableArray(Uris[category]));
      });
      var actions = [{
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_FEATURED_CONTENT_COMPLETED"],
        data: {
          uris: Uris,
          success: true
        }
      }];

      if (urisToResolve.length && !offloadResolve) {
        actions.push(Object(lbry_redux__WEBPACK_IMPORTED_MODULE_1__["doResolveUris"])(urisToResolve));
      }

      dispatch(lbry_redux__WEBPACK_IMPORTED_MODULE_1__["batchActions"].apply(void 0, actions));
    };

    var failure = function failure() {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_FEATURED_CONTENT_COMPLETED"],
        data: {
          uris: {}
        }
      });
    };

    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('file', 'list_homepage').then(success, failure);
  };
}
function doFetchTrendingUris() {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_TRENDING_CONTENT_STARTED"]
    });

    var success = function success(data) {
      var urisToResolve = data.map(function (uri) {
        return uri.url;
      });
      var actions = [Object(lbry_redux__WEBPACK_IMPORTED_MODULE_1__["doResolveUris"])(urisToResolve), {
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_TRENDING_CONTENT_COMPLETED"],
        data: {
          uris: data,
          success: true
        }
      }];
      dispatch(lbry_redux__WEBPACK_IMPORTED_MODULE_1__["batchActions"].apply(void 0, actions));
    };

    var failure = function failure() {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_TRENDING_CONTENT_COMPLETED"],
        data: {
          uris: []
        }
      });
    };

    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('file', 'list_trending').then(success, failure);
  };
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchViewCount", function() { return doFetchViewCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchSubCount", function() { return doFetchSubCount; });
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


var doFetchViewCount = function doFetchViewCount(claimId) {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_VIEW_COUNT_STARTED"]
    });
    return lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('file', 'view_count', {
      claim_id: claimId
    }).then(function (result) {
      var viewCount = result[0];
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_VIEW_COUNT_COMPLETED"],
        data: {
          claimId: claimId,
          viewCount: viewCount
        }
      });
    })["catch"](function (error) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_VIEW_COUNT_FAILED"],
        data: error
      });
    });
  };
};
var doFetchSubCount = function doFetchSubCount(claimId) {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_SUB_COUNT_STARTED"]
    });
    return lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('subscription', 'sub_count', {
      claim_id: claimId
    }).then(function (result) {
      var subCount = result[0];
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_SUB_COUNT_COMPLETED"],
        data: {
          claimId: claimId,
          subCount: subCount
        }
      });
    })["catch"](function (error) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_SUB_COUNT_FAILED"],
        data: error
      });
    });
  };
};

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSetDefaultAccount", function() { return doSetDefaultAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSetSync", function() { return doSetSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doGetSync", function() { return doGetSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSyncApply", function() { return doSyncApply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCheckSync", function() { return doCheckSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doResetSync", function() { return doResetSync; });
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_2__);



function doSetDefaultAccount(success, failure) {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SET_DEFAULT_ACCOUNT"]
    });
    lbry_redux__WEBPACK_IMPORTED_MODULE_2__["Lbry"].account_list().then(function (accountList) {
      var accounts = accountList.lbc_mainnet;
      var defaultId;

      for (var i = 0; i < accounts.length; ++i) {
        if (accounts[i].satoshis > 0) {
          defaultId = accounts[i].id;
          break;
        }
      } // In a case where there's no balance on either account
      // assume the second (which is created after sync) as default


      if (!defaultId && accounts.length > 1) {
        defaultId = accounts[1].id;
      } // Set the default account


      if (defaultId) {
        lbry_redux__WEBPACK_IMPORTED_MODULE_2__["Lbry"].account_set({
          account_id: defaultId,
          "default": true
        }).then(function () {
          if (success) {
            success();
          }
        })["catch"](function (err) {
          if (failure) {
            failure(err);
          }
        });
      } else if (failure) {
        // no default account to set
        failure('Could not set a default account'); // fail
      }
    })["catch"](function (err) {
      if (failure) {
        failure(err);
      }
    });
  };
}
function doSetSync(oldHash, newHash, data, password) {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SET_SYNC_STARTED"]
    });
    lbryio__WEBPACK_IMPORTED_MODULE_1__["default"].call('sync', 'set', {
      old_hash: oldHash,
      new_hash: newHash,
      data: data
    }, 'post').then(function (response) {
      if (!response.hash) {
        return dispatch({
          type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SET_SYNC_FAILED"],
          data: {
            error: 'No hash returned for sync/set.'
          }
        });
      }

      if (oldHash && newHash !== oldHash) {
        dispatch(doSetDefaultAccount(function () {
          if (password !== undefined) {
            lbry_redux__WEBPACK_IMPORTED_MODULE_2__["Lbry"].account_unlock({
              password: password
            });
            dispatch(Object(lbry_redux__WEBPACK_IMPORTED_MODULE_2__["doFetchChannelListMine"])());
          }
        }));
      }

      return dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SET_SYNC_COMPLETED"],
        data: {
          syncHash: response.hash
        }
      });
    })["catch"](function (error) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SET_SYNC_FAILED"],
        data: {
          error: error
        }
      });
    });
  };
}
function doGetSync() {
  var password = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SYNC_STARTED"]
    });
    var data = {};
    lbry_redux__WEBPACK_IMPORTED_MODULE_2__["Lbry"].sync_hash().then(function (hash) {
      lbryio__WEBPACK_IMPORTED_MODULE_1__["default"].call('sync', 'get', {
        hash: hash
      }, 'post').then(function (response) {
        var syncHash = response.hash;
        data.syncHash = syncHash;
        data.syncData = response.data;
        data.hasSyncedWallet = true;

        if (response.changed) {
          return lbry_redux__WEBPACK_IMPORTED_MODULE_2__["Lbry"].sync_apply({
            password: password,
            data: response.data
          }).then(function (_ref) {
            var walletHash = _ref.hash,
                walletData = _ref.data;
            dispatch({
              type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SYNC_COMPLETED"],
              data: data
            });

            if (walletHash !== syncHash) {
              // different local hash, need to synchronise
              dispatch(doSetSync(syncHash, walletHash, walletData, password));
            }
          });
        }

        dispatch({
          type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SYNC_COMPLETED"],
          data: data
        });
      })["catch"](function () {
        if (data.hasSyncedWallet) {
          dispatch({
            type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SYNC_FAILED"],
            data: {
              error: 'Error getting synced wallet'
            }
          });
        } else {
          // user doesn't have a synced wallet
          dispatch({
            type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SYNC_COMPLETED"],
            data: {
              hasSyncedWallet: false,
              syncHash: null
            }
          }); // call sync_apply to get data to sync
          // first time sync. use any string for old hash

          lbry_redux__WEBPACK_IMPORTED_MODULE_2__["Lbry"].sync_apply({
            password: password
          }).then(function (_ref2) {
            var walletHash = _ref2.hash,
                syncApplyData = _ref2.data;
            return dispatch(doSetSync('', walletHash, syncApplyData, password));
          });
        }
      });
    });
  };
}
function doSyncApply(syncHash, syncData, password) {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_APPLY_STARTED"]
    });
    lbry_redux__WEBPACK_IMPORTED_MODULE_2__["Lbry"].sync_apply({
      password: password,
      data: syncData
    }).then(function (_ref3) {
      var walletHash = _ref3.hash,
          walletData = _ref3.data;
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_APPLY_COMPLETED"]
      });

      if (walletHash !== syncHash) {
        // different local hash, need to synchronise
        dispatch(doSetSync(syncHash, walletHash, walletData));
      }
    })["catch"](function () {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_APPLY_FAILED"],
        data: {
          error: 'Invalid password specified. Please enter the password for your previously synchronised wallet.'
        }
      });
    });
  };
}
function doCheckSync() {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SYNC_STARTED"]
    });
    lbry_redux__WEBPACK_IMPORTED_MODULE_2__["Lbry"].sync_hash().then(function (hash) {
      lbryio__WEBPACK_IMPORTED_MODULE_1__["default"].call('sync', 'get', {
        hash: hash
      }, 'post').then(function (response) {
        var data = {
          hasSyncedWallet: true,
          syncHash: response.hash,
          syncData: response.data,
          hashChanged: response.changed
        };
        dispatch({
          type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SYNC_COMPLETED"],
          data: data
        });
      })["catch"](function () {
        // user doesn't have a synced wallet
        dispatch({
          type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SYNC_COMPLETED"],
          data: {
            hasSyncedWallet: false,
            syncHash: null
          }
        });
      });
    });
  };
}
function doResetSync() {
  return function (dispatch) {
    return new Promise(function (resolve) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_RESET"]
      });
      resolve();
    });
  };
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var reducers = {};
var defaultState = {
  authenticating: false
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GENERATE_AUTH_TOKEN_FAILURE"]] = function (state) {
  return Object.assign({}, state, {
    authToken: null,
    authenticating: false
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GENERATE_AUTH_TOKEN_STARTED"]] = function (state) {
  return Object.assign({}, state, {
    authenticating: true
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GENERATE_AUTH_TOKEN_SUCCESS"]] = function (state, action) {
  return Object.assign({}, state, {
    authToken: action.data.authToken,
    authenticating: false
  });
};

function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rewardsReducer", function() { return rewardsReducer; });
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var reducers = {};
var defaultState = {
  fetching: false,
  claimedRewardsById: {},
  // id => reward
  unclaimedRewards: [],
  claimPendingByType: {},
  claimErrorsByType: {},
  rewardedContentClaimIds: []
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].FETCH_REWARDS_STARTED] = function (state) {
  return Object.assign({}, state, {
    fetching: true
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].FETCH_REWARDS_COMPLETED] = function (state, action) {
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
  var newClaimErrorsByType = Object.assign({}, state.claimErrorsByType); // Currently, for multiple rewards of the same type, they will both show "claiming" when one is beacuse we track this by `reward_type`
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

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].CLAIM_REWARD_STARTED] = function (state, action) {
  var reward = action.data.reward;
  return setClaimRewardState(state, reward, true, '');
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].CLAIM_REWARD_SUCCESS] = function (state, action) {
  var reward = action.data.reward;
  var unclaimedRewards = state.unclaimedRewards;
  var index = unclaimedRewards.findIndex(function (ur) {
    return ur.claim_code === reward.claim_code;
  });
  unclaimedRewards.splice(index, 1);
  var claimedRewardsById = state.claimedRewardsById;
  claimedRewardsById[reward.id] = reward;

  var newState = _objectSpread({}, state, {
    unclaimedRewards: _toConsumableArray(unclaimedRewards),
    claimedRewardsById: _objectSpread({}, claimedRewardsById)
  });

  return setClaimRewardState(newState, reward, false, '');
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].CLAIM_REWARD_FAILURE] = function (state, action) {
  var _action$data = action.data,
      reward = _action$data.reward,
      error = _action$data.error;
  return setClaimRewardState(state, reward, false, error ? error.message : '');
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].CLAIM_REWARD_CLEAR_ERROR] = function (state, action) {
  var reward = action.data.reward;
  return setClaimRewardState(state, reward, state.claimPendingByType[reward.reward_type], '');
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].FETCH_REWARD_CONTENT_COMPLETED] = function (state, action) {
  var claimIds = action.data.claimIds;
  return Object.assign({}, state, {
    rewardedContentClaimIds: claimIds
  });
};

function rewardsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

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
  user: undefined,
  youtubeChannelImportPending: false,
  youtubeChannelImportErrorMessage: ''
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["AUTHENTICATION_STARTED"]] = function (state) {
  return Object.assign({}, state, {
    authenticationIsPending: true,
    userIsPending: true,
    user: defaultState.user
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["AUTHENTICATION_SUCCESS"]] = function (state, action) {
  return Object.assign({}, state, {
    authenticationIsPending: false,
    userIsPending: false,
    user: action.data.user
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["AUTHENTICATION_FAILURE"]] = function (state) {
  return Object.assign({}, state, {
    authenticationIsPending: false,
    userIsPending: false,
    user: null
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_FETCH_STARTED"]] = function (state) {
  return Object.assign({}, state, {
    userIsPending: true
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_FETCH_SUCCESS"]] = function (state, action) {
  return Object.assign({}, state, {
    userIsPending: false,
    user: action.data.user,
    emailToVerify: action.data.user.has_verified_email ? null : state.emailToVerify
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_FETCH_FAILURE"]] = function (state) {
  return Object.assign({}, state, {
    userIsPending: true,
    user: null
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_PHONE_NEW_STARTED"]] = function (state, action) {
  var user = Object.assign({}, state.user);
  user.country_code = action.data.country_code;
  return Object.assign({}, state, {
    phoneNewIsPending: true,
    phoneNewErrorMessage: '',
    user: user
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_PHONE_NEW_SUCCESS"]] = function (state, action) {
  return Object.assign({}, state, {
    phoneToVerify: action.data.phone,
    phoneNewIsPending: false
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_PHONE_RESET"]] = function (state) {
  return Object.assign({}, state, {
    phoneToVerify: null
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_PHONE_NEW_FAILURE"]] = function (state, action) {
  return Object.assign({}, state, {
    phoneNewIsPending: false,
    phoneNewErrorMessage: action.data.error
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_PHONE_VERIFY_STARTED"]] = function (state) {
  return Object.assign({}, state, {
    phoneVerifyIsPending: true,
    phoneVerifyErrorMessage: ''
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_PHONE_VERIFY_SUCCESS"]] = function (state, action) {
  return Object.assign({}, state, {
    phoneToVerify: '',
    phoneVerifyIsPending: false,
    user: action.data.user
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_PHONE_VERIFY_FAILURE"]] = function (state, action) {
  return Object.assign({}, state, {
    phoneVerifyIsPending: false,
    phoneVerifyErrorMessage: action.data.error
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_EMAIL_NEW_STARTED"]] = function (state) {
  return Object.assign({}, state, {
    emailNewIsPending: true,
    emailNewErrorMessage: ''
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_EMAIL_NEW_SUCCESS"]] = function (state, action) {
  var user = Object.assign({}, state.user);
  user.primary_email = action.data.email;
  return Object.assign({}, state, {
    emailToVerify: action.data.email,
    emailNewIsPending: false,
    user: user
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_EMAIL_NEW_EXISTS"]] = function (state, action) {
  return Object.assign({}, state, {
    emailToVerify: action.data.email,
    emailNewIsPending: false
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_EMAIL_NEW_FAILURE"]] = function (state, action) {
  return Object.assign({}, state, {
    emailNewIsPending: false,
    emailNewErrorMessage: action.data.error
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_EMAIL_VERIFY_STARTED"]] = function (state) {
  return Object.assign({}, state, {
    emailVerifyIsPending: true,
    emailVerifyErrorMessage: ''
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_EMAIL_VERIFY_SUCCESS"]] = function (state, action) {
  var user = Object.assign({}, state.user);
  user.primary_email = action.data.email;
  return Object.assign({}, state, {
    emailToVerify: '',
    emailVerifyIsPending: false,
    user: user
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_EMAIL_VERIFY_FAILURE"]] = function (state, action) {
  return Object.assign({}, state, {
    emailVerifyIsPending: false,
    emailVerifyErrorMessage: action.data.error
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_EMAIL_VERIFY_SET"]] = function (state, action) {
  return Object.assign({}, state, {
    emailToVerify: action.data.email
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_IDENTITY_VERIFY_STARTED"]] = function (state) {
  return Object.assign({}, state, {
    identityVerifyIsPending: true,
    identityVerifyErrorMessage: ''
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_IDENTITY_VERIFY_SUCCESS"]] = function (state, action) {
  return Object.assign({}, state, {
    identityVerifyIsPending: false,
    identityVerifyErrorMessage: '',
    user: action.data.user
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_IDENTITY_VERIFY_FAILURE"]] = function (state, action) {
  return Object.assign({}, state, {
    identityVerifyIsPending: false,
    identityVerifyErrorMessage: action.data.error
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_ACCESS_TOKEN_SUCCESS"]] = function (state, action) {
  var token = action.data.token;
  return Object.assign({}, state, {
    accessToken: token
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_INVITE_STATUS_FETCH_STARTED"]] = function (state) {
  return Object.assign({}, state, {
    inviteStatusIsPending: true
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_INVITE_STATUS_FETCH_SUCCESS"]] = function (state, action) {
  return Object.assign({}, state, {
    inviteStatusIsPending: false,
    invitesRemaining: action.data.invitesRemaining,
    invitees: action.data.invitees,
    referralLink: action.data.referralLink
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_INVITE_NEW_STARTED"]] = function (state) {
  return Object.assign({}, state, {
    inviteNewIsPending: true,
    inviteNewErrorMessage: ''
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_INVITE_NEW_SUCCESS"]] = function (state) {
  return Object.assign({}, state, {
    inviteNewIsPending: false,
    inviteNewErrorMessage: ''
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_INVITE_NEW_FAILURE"]] = function (state, action) {
  return Object.assign({}, state, {
    inviteNewIsPending: false,
    inviteNewErrorMessage: action.data.error.message
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_INVITE_STATUS_FETCH_FAILURE"]] = function (state) {
  return Object.assign({}, state, {
    inviteStatusIsPending: false,
    invitesRemaining: null,
    invitees: null
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_YOUTUBE_IMPORT_STARTED"]] = function (state) {
  return Object.assign({}, state, {
    youtubeChannelImportPending: true,
    youtubeChannelImportErrorMessage: ''
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_YOUTUBE_IMPORT_SUCCESS"]] = function (state, action) {
  var total = action.data.reduce(function (acc, value) {
    return acc + value.total_published_videos;
  }, 0);
  var complete = action.data.reduce(function (acc, value) {
    return acc + value.total_transferred;
  }, 0);
  return Object.assign({}, state, {
    youtubeChannelImportPending: false,
    youtubeChannelImportErrorMessage: '',
    youtubeChannelImportTotal: total,
    youtubeChannelImportComplete: complete
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["USER_YOUTUBE_IMPORT_FAILURE"]] = function (state, action) {
  return Object.assign({}, state, {
    youtubeChannelImportPending: false,
    youtubeChannelImportErrorMessage: action.data
  });
};

function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "costInfoReducer", function() { return costInfoReducer; });
/* harmony import */ var util_redux_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
var _handleActions;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var defaultState = {
  fetching: {},
  byUri: {}
};
var costInfoReducer = Object(util_redux_utils__WEBPACK_IMPORTED_MODULE_0__["handleActions"])((_handleActions = {}, _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_COST_INFO_STARTED"], function (state, action) {
  var uri = action.data.uri;
  var newFetching = Object.assign({}, state.fetching);
  newFetching[uri] = true;
  return _objectSpread({}, state, {
    fetching: newFetching
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_COST_INFO_COMPLETED"], function (state, action) {
  var _action$data = action.data,
      uri = _action$data.uri,
      costInfo = _action$data.costInfo;
  var newByUri = Object.assign({}, state.byUri);
  var newFetching = Object.assign({}, state.fetching);
  newByUri[uri] = costInfo;
  delete newFetching[uri];
  return _objectSpread({}, state, {
    byUri: newByUri,
    fetching: newFetching
  });
}), _handleActions), defaultState);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blacklistReducer", function() { return blacklistReducer; });
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var util_redux_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
var _handleActions;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var defaultState = {
  fetchingBlackListedOutpoints: false,
  fetchingBlackListedOutpointsSucceed: undefined,
  blackListedOutpoints: undefined
};
var blacklistReducer = Object(util_redux_utils__WEBPACK_IMPORTED_MODULE_1__["handleActions"])((_handleActions = {}, _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_BLACK_LISTED_CONTENT_STARTED"], function (state) {
  return _objectSpread({}, state, {
    fetchingBlackListedOutpoints: true
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_BLACK_LISTED_CONTENT_COMPLETED"], function (state, action) {
  var _action$data = action.data,
      outpoints = _action$data.outpoints,
      success = _action$data.success;
  return _objectSpread({}, state, {
    fetchingBlackListedOutpoints: false,
    fetchingBlackListedOutpointsSucceed: success,
    blackListedOutpoints: outpoints
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_BLACK_LISTED_CONTENT_FAILED"], function (state, action) {
  var _action$data2 = action.data,
      error = _action$data2.error,
      success = _action$data2.success;
  return _objectSpread({}, state, {
    fetchingBlackListedOutpoints: false,
    fetchingBlackListedOutpointsSucceed: success,
    fetchingBlackListedOutpointsError: error
  });
}), _handleActions), defaultState);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filteredReducer", function() { return filteredReducer; });
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var util_redux_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
var _handleActions;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var defaultState = {
  loading: false,
  filteredOutpoints: undefined
};
var filteredReducer = Object(util_redux_utils__WEBPACK_IMPORTED_MODULE_1__["handleActions"])((_handleActions = {}, _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_FILTERED_CONTENT_STARTED"], function (state) {
  return _objectSpread({}, state, {
    loading: true
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_FILTERED_CONTENT_COMPLETED"], function (state, action) {
  var outpoints = action.data.outpoints;
  return _objectSpread({}, state, {
    loading: false,
    filteredOutpoints: outpoints
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_FILTERED_CONTENT_FAILED"], function (state, action) {
  var error = action.data.error;
  return _objectSpread({}, state, {
    loading: false,
    fetchingFilteredOutpointsError: error
  });
}), _handleActions), defaultState);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homepageReducer", function() { return homepageReducer; });
/* harmony import */ var util_redux_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
var _handleActions;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var defaultState = {
  fetchingFeaturedContent: false,
  fetchingFeaturedContentFailed: false,
  featuredUris: undefined,
  fetchingTrendingContent: false,
  fetchingTrendingContentFailed: false,
  trendingUris: undefined
};
var homepageReducer = Object(util_redux_utils__WEBPACK_IMPORTED_MODULE_0__["handleActions"])((_handleActions = {}, _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_FEATURED_CONTENT_STARTED"], function (state) {
  return _objectSpread({}, state, {
    fetchingFeaturedContent: true
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_FEATURED_CONTENT_COMPLETED"], function (state, action) {
  var _action$data = action.data,
      uris = _action$data.uris,
      success = _action$data.success;
  return _objectSpread({}, state, {
    fetchingFeaturedContent: false,
    fetchingFeaturedContentFailed: !success,
    featuredUris: uris
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_TRENDING_CONTENT_STARTED"], function (state) {
  return _objectSpread({}, state, {
    fetchingTrendingContent: true
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_TRENDING_CONTENT_COMPLETED"], function (state, action) {
  var _action$data2 = action.data,
      uris = _action$data2.uris,
      success = _action$data2.success;
  return _objectSpread({}, state, {
    fetchingTrendingContent: false,
    fetchingTrendingContentFailed: !success,
    trendingUris: uris
  });
}), _handleActions), defaultState);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statsReducer", function() { return statsReducer; });
/* harmony import */ var util_redux_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
var _handleActions;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var defaultState = {
  fetchingViewCount: false,
  viewCountError: undefined,
  viewCountById: {},
  fetchingSubCount: false,
  subCountError: undefined,
  subCountById: {}
};
var statsReducer = Object(util_redux_utils__WEBPACK_IMPORTED_MODULE_0__["handleActions"])((_handleActions = {}, _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_VIEW_COUNT_STARTED"], function (state) {
  return _objectSpread({}, state, {
    fetchingViewCount: true
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_VIEW_COUNT_FAILED"], function (state, action) {
  return _objectSpread({}, state, {
    viewCountError: action.data
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_VIEW_COUNT_COMPLETED"], function (state, action) {
  var _action$data = action.data,
      claimId = _action$data.claimId,
      viewCount = _action$data.viewCount;

  var viewCountById = _objectSpread({}, state.viewCountById, _defineProperty({}, claimId, viewCount));

  return _objectSpread({}, state, {
    fetchingViewCount: false,
    viewCountById: viewCountById
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_SUB_COUNT_STARTED"], function (state) {
  return _objectSpread({}, state, {
    fetchingSubCount: true
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_SUB_COUNT_FAILED"], function (state, action) {
  return _objectSpread({}, state, {
    subCountError: action.data
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_SUB_COUNT_COMPLETED"], function (state, action) {
  var _action$data2 = action.data,
      claimId = _action$data2.claimId,
      subCount = _action$data2.subCount;

  var subCountById = _objectSpread({}, state.subCountById, _defineProperty({}, claimId, subCount));

  return _objectSpread({}, state, {
    fetchingSubCount: false,
    subCountById: subCountById
  });
}), _handleActions), defaultState);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncReducer", function() { return syncReducer; });
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var reducers = {};
var defaultState = {
  hasSyncedWallet: false,
  syncHash: null,
  syncData: null,
  setSyncErrorMessage: null,
  getSyncErrorMessage: null,
  syncApplyErrorMessage: '',
  syncApplyIsPending: false,
  getSyncIsPending: false,
  setSyncIsPending: false,
  hashChanged: false
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SYNC_STARTED"]] = function (state) {
  return Object.assign({}, state, {
    getSyncIsPending: true,
    getSyncErrorMessage: null
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SYNC_COMPLETED"]] = function (state, action) {
  return Object.assign({}, state, {
    syncHash: action.data.syncHash,
    syncData: action.data.syncData,
    hasSyncedWallet: action.data.hasSyncedWallet,
    getSyncIsPending: false,
    hashChanged: action.data.hashChanged
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SYNC_FAILED"]] = function (state, action) {
  return Object.assign({}, state, {
    getSyncIsPending: false,
    getSyncErrorMessage: action.data.error
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SET_SYNC_STARTED"]] = function (state) {
  return Object.assign({}, state, {
    setSyncIsPending: true,
    setSyncErrorMessage: null
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SET_SYNC_FAILED"]] = function (state, action) {
  return Object.assign({}, state, {
    setSyncIsPending: false,
    setSyncErrorMessage: action.data.error
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SET_SYNC_COMPLETED"]] = function (state, action) {
  return Object.assign({}, state, {
    setSyncIsPending: false,
    setSyncErrorMessage: null,
    hasSyncedWallet: true,
    // sync was successful, so the user has a synced wallet at this point
    syncHash: action.data.syncHash
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_APPLY_STARTED"]] = function (state) {
  return Object.assign({}, state, {
    syncApplyIsPending: true,
    syncApplyErrorMessage: ''
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_APPLY_COMPLETED"]] = function (state) {
  return Object.assign({}, state, {
    syncApplyIsPending: false,
    syncApplyErrorMessage: ''
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_APPLY_FAILED"]] = function (state, action) {
  return Object.assign({}, state, {
    syncApplyIsPending: false,
    syncApplyErrorMessage: action.data.error
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_RESET"]] = function () {
  return defaultState;
};

function syncReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthToken", function() { return selectAuthToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsAuthenticating", function() { return selectIsAuthenticating; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);


var selectState = function selectState(state) {
  return state.auth || {};
};

var selectAuthToken = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.authToken;
});
var selectIsAuthenticating = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.authenticating;
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllCostInfoByUri", function() { return selectAllCostInfoByUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectCostInfoForUri", function() { return makeSelectCostInfoForUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFetchingCostInfo", function() { return selectFetchingCostInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectFetchingCostInfoForUri", function() { return makeSelectFetchingCostInfoForUri; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);

var selectState = function selectState(state) {
  return state.costInfo || {};
};
var selectAllCostInfoByUri = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.byUri || {};
});
var makeSelectCostInfoForUri = function makeSelectCostInfoForUri(uri) {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAllCostInfoByUri, function (costInfos) {
    return costInfos && costInfos[uri];
  });
};
var selectFetchingCostInfo = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.fetching || {};
});
var makeSelectFetchingCostInfoForUri = function makeSelectFetchingCostInfoForUri(uri) {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFetchingCostInfo, function (fetchingByUri) {
    return fetchingByUri && fetchingByUri[uri];
  });
};

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBlackListedOutpoints", function() { return selectBlackListedOutpoints; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);

var selectState = function selectState(state) {
  return state.blacklist || {};
};
var selectBlackListedOutpoints = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.blackListedOutpoints;
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilteredOutpoints", function() { return selectFilteredOutpoints; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);

var selectState = function selectState(state) {
  return state.filtered || {};
};
var selectFilteredOutpoints = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.filteredOutpoints;
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFeaturedUris", function() { return selectFeaturedUris; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFetchingFeaturedUris", function() { return selectFetchingFeaturedUris; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTrendingUris", function() { return selectTrendingUris; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFetchingTrendingUris", function() { return selectFetchingTrendingUris; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);


var selectState = function selectState(state) {
  return state.homepage || {};
};

var selectFeaturedUris = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.featuredUris;
});
var selectFetchingFeaturedUris = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.fetchingFeaturedContent;
});
var selectTrendingUris = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.trendingUris;
});
var selectFetchingTrendingUris = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.fetchingTrendingContent;
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectViewCount", function() { return selectViewCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSubCount", function() { return selectSubCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectViewCountForUri", function() { return makeSelectViewCountForUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectSubCountForUri", function() { return makeSelectSubCountForUri; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_1__);



var selectState = function selectState(state) {
  return state.stats || {};
};

var selectViewCount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.viewCountById;
});
var selectSubCount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.subCountById;
});
var makeSelectViewCountForUri = function makeSelectViewCountForUri(uri) {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(Object(lbry_redux__WEBPACK_IMPORTED_MODULE_1__["makeSelectClaimForUri"])(uri), selectViewCount, function (claim, viewCountById) {
    return viewCountById[claim.claim_id] || 0;
  });
};
var makeSelectSubCountForUri = function makeSelectSubCountForUri(uri) {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(Object(lbry_redux__WEBPACK_IMPORTED_MODULE_1__["makeSelectClaimForUri"])(uri), selectSubCount, function (claim, subCountById) {
    return subCountById[claim.claim_id] || 0;
  });
};

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHasSyncedWallet", function() { return selectHasSyncedWallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSyncHash", function() { return selectSyncHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSyncData", function() { return selectSyncData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSetSyncErrorMessage", function() { return selectSetSyncErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectGetSyncErrorMessage", function() { return selectGetSyncErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectGetSyncIsPending", function() { return selectGetSyncIsPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSetSyncIsPending", function() { return selectSetSyncIsPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHashChanged", function() { return selectHashChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSyncApplyIsPending", function() { return selectSyncApplyIsPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSyncApplyErrorMessage", function() { return selectSyncApplyErrorMessage; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);


var selectState = function selectState(state) {
  return state.sync || {};
};

var selectHasSyncedWallet = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.hasSyncedWallet;
});
var selectSyncHash = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.syncHash;
});
var selectSyncData = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.syncData;
});
var selectSetSyncErrorMessage = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.setSyncErrorMessage;
});
var selectGetSyncErrorMessage = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.getSyncErrorMessage;
});
var selectGetSyncIsPending = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.getSyncIsPending;
});
var selectSetSyncIsPending = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.setSyncIsPending;
});
var selectHashChanged = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.hashChanged;
});
var selectSyncApplyIsPending = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.syncApplyIsPending;
});
var selectSyncApplyErrorMessage = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.syncApplyErrorMessage;
});

/***/ })
/******/ ]);
});