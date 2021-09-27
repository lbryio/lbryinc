(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lbry-redux"));
	else if(typeof define === 'function' && define.amd)
		define(["lbry-redux"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("lbry-redux")) : factory(root["lbry-redux"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__5__) {
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
/* harmony import */ var constants_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ERRORS", function() { return constants_errors__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lbryio", function() { return lbryio__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var util_transifex_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doTransifexUpload", function() { return util_transifex_upload__WEBPACK_IMPORTED_MODULE_4__["doTransifexUpload"]; });

/* harmony import */ var redux_actions_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doGenerateAuthToken", function() { return redux_actions_auth__WEBPACK_IMPORTED_MODULE_5__["doGenerateAuthToken"]; });

/* harmony import */ var redux_actions_cost_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchCostInfoForUri", function() { return redux_actions_cost_info__WEBPACK_IMPORTED_MODULE_6__["doFetchCostInfoForUri"]; });

/* harmony import */ var redux_actions_blacklist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doBlackListedOutpointsSubscribe", function() { return redux_actions_blacklist__WEBPACK_IMPORTED_MODULE_7__["doBlackListedOutpointsSubscribe"]; });

/* harmony import */ var redux_actions_filtered__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFilteredOutpointsSubscribe", function() { return redux_actions_filtered__WEBPACK_IMPORTED_MODULE_8__["doFilteredOutpointsSubscribe"]; });

/* harmony import */ var redux_actions_homepage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchFeaturedUris", function() { return redux_actions_homepage__WEBPACK_IMPORTED_MODULE_9__["doFetchFeaturedUris"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchTrendingUris", function() { return redux_actions_homepage__WEBPACK_IMPORTED_MODULE_9__["doFetchTrendingUris"]; });

/* harmony import */ var redux_actions_stats__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchViewCount", function() { return redux_actions_stats__WEBPACK_IMPORTED_MODULE_10__["doFetchViewCount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchSubCount", function() { return redux_actions_stats__WEBPACK_IMPORTED_MODULE_10__["doFetchSubCount"]; });

/* harmony import */ var redux_actions_sync__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doCheckSync", function() { return redux_actions_sync__WEBPACK_IMPORTED_MODULE_11__["doCheckSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doGetSync", function() { return redux_actions_sync__WEBPACK_IMPORTED_MODULE_11__["doGetSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doSetSync", function() { return redux_actions_sync__WEBPACK_IMPORTED_MODULE_11__["doSetSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doSetDefaultAccount", function() { return redux_actions_sync__WEBPACK_IMPORTED_MODULE_11__["doSetDefaultAccount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doSyncApply", function() { return redux_actions_sync__WEBPACK_IMPORTED_MODULE_11__["doSyncApply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doResetSync", function() { return redux_actions_sync__WEBPACK_IMPORTED_MODULE_11__["doResetSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doSyncEncryptAndDecrypt", function() { return redux_actions_sync__WEBPACK_IMPORTED_MODULE_11__["doSyncEncryptAndDecrypt"]; });

/* harmony import */ var redux_actions_web__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUpdateUploadProgress", function() { return redux_actions_web__WEBPACK_IMPORTED_MODULE_12__["doUpdateUploadProgress"]; });

/* harmony import */ var redux_reducers_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return redux_reducers_auth__WEBPACK_IMPORTED_MODULE_13__["authReducer"]; });

/* harmony import */ var redux_reducers_cost_info__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "costInfoReducer", function() { return redux_reducers_cost_info__WEBPACK_IMPORTED_MODULE_14__["costInfoReducer"]; });

/* harmony import */ var redux_reducers_blacklist__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(26);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blacklistReducer", function() { return redux_reducers_blacklist__WEBPACK_IMPORTED_MODULE_15__["blacklistReducer"]; });

/* harmony import */ var redux_reducers_filtered__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filteredReducer", function() { return redux_reducers_filtered__WEBPACK_IMPORTED_MODULE_16__["filteredReducer"]; });

/* harmony import */ var redux_reducers_homepage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "homepageReducer", function() { return redux_reducers_homepage__WEBPACK_IMPORTED_MODULE_17__["homepageReducer"]; });

/* harmony import */ var redux_reducers_stats__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "statsReducer", function() { return redux_reducers_stats__WEBPACK_IMPORTED_MODULE_18__["statsReducer"]; });

/* harmony import */ var redux_reducers_sync__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "syncReducer", function() { return redux_reducers_sync__WEBPACK_IMPORTED_MODULE_19__["syncReducer"]; });

/* harmony import */ var redux_reducers_web__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webReducer", function() { return redux_reducers_web__WEBPACK_IMPORTED_MODULE_20__["webReducer"]; });

/* harmony import */ var redux_selectors_auth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAuthToken", function() { return redux_selectors_auth__WEBPACK_IMPORTED_MODULE_21__["selectAuthToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIsAuthenticating", function() { return redux_selectors_auth__WEBPACK_IMPORTED_MODULE_21__["selectIsAuthenticating"]; });

/* harmony import */ var redux_selectors_cost_info__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectFetchingCostInfoForUri", function() { return redux_selectors_cost_info__WEBPACK_IMPORTED_MODULE_22__["makeSelectFetchingCostInfoForUri"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectCostInfoForUri", function() { return redux_selectors_cost_info__WEBPACK_IMPORTED_MODULE_22__["makeSelectCostInfoForUri"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllCostInfoByUri", function() { return redux_selectors_cost_info__WEBPACK_IMPORTED_MODULE_22__["selectAllCostInfoByUri"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFetchingCostInfo", function() { return redux_selectors_cost_info__WEBPACK_IMPORTED_MODULE_22__["selectFetchingCostInfo"]; });

/* harmony import */ var redux_selectors_blacklist__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectBlackListedOutpoints", function() { return redux_selectors_blacklist__WEBPACK_IMPORTED_MODULE_23__["selectBlackListedOutpoints"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectBlacklistedOutpointMap", function() { return redux_selectors_blacklist__WEBPACK_IMPORTED_MODULE_23__["selectBlacklistedOutpointMap"]; });

/* harmony import */ var redux_selectors_filtered__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFilteredOutpoints", function() { return redux_selectors_filtered__WEBPACK_IMPORTED_MODULE_24__["selectFilteredOutpoints"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFilteredOutpointMap", function() { return redux_selectors_filtered__WEBPACK_IMPORTED_MODULE_24__["selectFilteredOutpointMap"]; });

/* harmony import */ var redux_selectors_homepage__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFeaturedUris", function() { return redux_selectors_homepage__WEBPACK_IMPORTED_MODULE_25__["selectFeaturedUris"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFetchingFeaturedUris", function() { return redux_selectors_homepage__WEBPACK_IMPORTED_MODULE_25__["selectFetchingFeaturedUris"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTrendingUris", function() { return redux_selectors_homepage__WEBPACK_IMPORTED_MODULE_25__["selectTrendingUris"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFetchingTrendingUris", function() { return redux_selectors_homepage__WEBPACK_IMPORTED_MODULE_25__["selectFetchingTrendingUris"]; });

/* harmony import */ var redux_selectors_stats__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(38);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectViewCount", function() { return redux_selectors_stats__WEBPACK_IMPORTED_MODULE_26__["selectViewCount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectViewCountForUri", function() { return redux_selectors_stats__WEBPACK_IMPORTED_MODULE_26__["makeSelectViewCountForUri"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectSubCountForUri", function() { return redux_selectors_stats__WEBPACK_IMPORTED_MODULE_26__["makeSelectSubCountForUri"]; });

/* harmony import */ var redux_selectors_sync__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectHasSyncedWallet", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_27__["selectHasSyncedWallet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSyncData", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_27__["selectSyncData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSyncHash", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_27__["selectSyncHash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSetSyncErrorMessage", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_27__["selectSetSyncErrorMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectGetSyncErrorMessage", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_27__["selectGetSyncErrorMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectGetSyncIsPending", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_27__["selectGetSyncIsPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSetSyncIsPending", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_27__["selectSetSyncIsPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSyncApplyIsPending", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_27__["selectSyncApplyIsPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectHashChanged", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_27__["selectHashChanged"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSyncApplyErrorMessage", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_27__["selectSyncApplyErrorMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSyncApplyPasswordError", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_27__["selectSyncApplyPasswordError"]; });

/* harmony import */ var redux_selectors_web__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCurrentUploads", function() { return redux_selectors_web__WEBPACK_IMPORTED_MODULE_28__["selectCurrentUploads"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUploadCount", function() { return redux_selectors_web__WEBPACK_IMPORTED_MODULE_28__["selectUploadCount"]; });





 // constants

 // utils

 // actions








 // reducers








 // selectors










/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYNC_APPLY_BAD_PASSWORD", function() { return SYNC_APPLY_BAD_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYNC_RESET", function() { return SYNC_RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_UPLOAD_PROGRESS", function() { return UPDATE_UPLOAD_PROGRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERATE_AUTH_TOKEN_FAILURE", function() { return GENERATE_AUTH_TOKEN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERATE_AUTH_TOKEN_STARTED", function() { return GENERATE_AUTH_TOKEN_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERATE_AUTH_TOKEN_SUCCESS", function() { return GENERATE_AUTH_TOKEN_SUCCESS; });
// Claims
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
var SYNC_APPLY_BAD_PASSWORD = 'SYNC_APPLY_BAD_PASSWORD';
var SYNC_RESET = 'SYNC_RESET'; // Lbry.tv

var UPDATE_UPLOAD_PROGRESS = 'UPDATE_UPLOAD_PROGRESS'; // User

var GENERATE_AUTH_TOKEN_FAILURE = 'GENERATE_AUTH_TOKEN_FAILURE';
var GENERATE_AUTH_TOKEN_STARTED = 'GENERATE_AUTH_TOKEN_STARTED';
var GENERATE_AUTH_TOKEN_SUCCESS = 'GENERATE_AUTH_TOKEN_SUCCESS';

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YOUTUBE_SYNC_NOT_TRANSFERRED", function() { return YOUTUBE_SYNC_NOT_TRANSFERRED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YOUTUBE_SYNC_PENDING", function() { return YOUTUBE_SYNC_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YOUTUBE_SYNC_PENDING_EMAIL", function() { return YOUTUBE_SYNC_PENDING_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YOUTUBE_SYNC_PENDING_TRANSFER", function() { return YOUTUBE_SYNC_PENDING_TRANSFER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YOUTUBE_SYNC_COMPLETED_TRANSFER", function() { return YOUTUBE_SYNC_COMPLETED_TRANSFER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YOUTUBE_SYNC_QUEUED", function() { return YOUTUBE_SYNC_QUEUED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YOUTUBE_SYNC_SYNCING", function() { return YOUTUBE_SYNC_SYNCING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YOUTUBE_SYNC_SYNCED", function() { return YOUTUBE_SYNC_SYNCED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YOUTUBE_SYNC_FAILED", function() { return YOUTUBE_SYNC_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YOUTUBE_SYNC_PENDINGUPGRADE", function() { return YOUTUBE_SYNC_PENDINGUPGRADE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YOUTUBE_SYNC_ABANDONDED", function() { return YOUTUBE_SYNC_ABANDONDED; });
var YOUTUBE_SYNC_NOT_TRANSFERRED = 'not_transferred';
var YOUTUBE_SYNC_PENDING = 'pending';
var YOUTUBE_SYNC_PENDING_EMAIL = 'pendingemail';
var YOUTUBE_SYNC_PENDING_TRANSFER = 'pending_transfer';
var YOUTUBE_SYNC_COMPLETED_TRANSFER = 'completed_transfer';
var YOUTUBE_SYNC_QUEUED = 'queued';
var YOUTUBE_SYNC_SYNCING = 'syncing';
var YOUTUBE_SYNC_SYNCED = 'synced';
var YOUTUBE_SYNC_FAILED = 'failed';
var YOUTUBE_SYNC_PENDINGUPGRADE = 'pendingupgrade';
var YOUTUBE_SYNC_ABANDONDED = 'abandoned';

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALREADY_CLAIMED", function() { return ALREADY_CLAIMED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REFERRER_NOT_FOUND", function() { return REFERRER_NOT_FOUND; });
var ALREADY_CLAIMED = 'once the invite reward has been claimed the referrer cannot be changed';
var REFERRER_NOT_FOUND = 'A lbry.tv account could not be found for the referrer you provided.';

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
var EXCHANGE_RATE_TIMEOUT = 20 * 60 * 1000;
var INTERNAL_APIS_DOWN = 'internal_apis_down';
Lbryio.fetchingUser = false; // We can't use env's because they aren't passed into node_modules

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

    if (response.status === 500) {
      return Promise.reject(INTERNAL_APIS_DOWN);
    }

    if (response) return response.json().then(function (json) {
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

  return Lbryio.getTokens().then(function (tokens) {
    // TOKENS = { auth_token, access_token }
    var fullParams = _objectSpread({}, params);

    var headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    console.log('USER ME TOKENS', tokens); // TODO refactor this
    // Send both tokens to userMe
    // delete auth token after success

    if (action === 'me') {
      // when we support transition from auth to access, bring this in
      if (tokens && tokens.access_token) {
        headers.Authorization = "Bearer ".concat(tokens.access_token);
      }

      if (tokens && tokens.auth_token) {
        fullParams.auth_token = tokens.auth_token;
      }
    } else if (tokens && tokens.access_token) {
      headers.Authorization = "Bearer ".concat(tokens.access_token);
    } else {
      fullParams.auth_token = tokens.auth_token;
    }

    Object.keys(fullParams).forEach(function (key) {
      var value = fullParams[key];

      if (_typeof(value) === 'object') {
        fullParams[key] = JSON.stringify(value);
      }
    });
    var qs = querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(fullParams);
    var url = "".concat(Lbryio.CONNECTION_STRING).concat(resource, "/").concat(action, "?").concat(qs);
    var options = {
      method: 'GET',
      headers: headers
    };

    if (method === 'post') {
      options = {
        method: 'POST',
        headers: headers,
        body: qs
      };
      url = "".concat(Lbryio.CONNECTION_STRING).concat(resource, "/").concat(action);
    }

    return makeRequest(url, options).then(function (response) {
      return response.data;
    });
  });
};

Lbryio.getAuthToken = function () {
  return new Promise(function (resolve) {
    Lbryio.overrides.getAuthToken().then(function (token) {
      resolve(token);
    });
  });
};

Lbryio.getTokens = function () {
  return new Promise(function (resolve) {
    Lbryio.overrides.getTokens().then(function (tokens) {
      resolve(tokens);
    });
  });
};

Lbryio.deleteAuthToken = function () {
  return new Promise(function (resolve) {
    Lbryio.overrides.deleteAuthToken().then(function () {
      resolve(true);
    });
  });
};

Lbryio.fetchCurrentUser = function () {
  return Lbryio.call('user', 'me')["catch"](function (e) {
    return {
      error: {
        message: e.message
      }
    };
  });
};

Lbryio.fetchUser =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(domain, language) {
    var user, tokens;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (Lbryio.fetchingUser) {
              _context.next = 20;
              break;
            }

            Lbryio.fetchingUser = true;
            _context.next = 4;
            return Lbryio.getTokens(domain, language);

          case 4:
            tokens = _context.sent;
            console.log('tokens', tokens);

            if (!(!tokens.auth_token && !tokens.access_token)) {
              _context.next = 12;
              break;
            }

            _context.next = 9;
            return Lbryio.fetchNewUser();

          case 9:
            user = _context.sent;
            _context.next = 15;
            break;

          case 12:
            _context.next = 14;
            return Lbryio.fetchCurrentUser();

          case 14:
            user = _context.sent;

          case 15:
            if (!tokens.access_token) {
              _context.next = 19;
              break;
            }

            if (!tokens.auth_token) {
              _context.next = 19;
              break;
            }

            _context.next = 19;
            return Lbryio.deleteAuthToken();

          case 19:
            return _context.abrupt("return", user);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

Lbryio.fetchNewUser =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(domain, language) {
    var status, appId, userResponse;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return lbry_redux__WEBPACK_IMPORTED_MODULE_0__["Lbry"].status();

          case 3:
            status = _context2.sent;
            appId = domain && domain !== 'lbry.tv' ? (domain.replace(/[.]/gi, '') + status.installation_id).slice(0, 66) : status.installation_id;
            _context2.next = 7;
            return Lbryio.call('user', 'new', {
              auth_token: '',
              language: language || 'en',
              app_id: appId
            }, 'post');

          case 7:
            userResponse = _context2.sent;

            if (userResponse.auth_token) {
              _context2.next = 12;
              break;
            }

            throw new Error('auth_token was not set in the response');

          case 12:
            _context2.next = 14;
            return Lbryio.overrides.setAuthToken(userResponse.auth_token);

          case 14:
            return _context2.abrupt("return", userResponse);

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](0);
            console.log('error', _context2.t0.message);
            return _context2.abrupt("return", {
              error: {
                message: _context2.t0.message
              }
            });

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 17]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

Lbryio.getStripeToken = function () {
  return Lbryio.CONNECTION_STRING.startsWith('http://localhost:') ? 'pk_test_NoL1JWL7i1ipfhVId5KfDZgo' : 'pk_live_e8M4dRNnCCbmpZzduEUZBgJO';
};

Lbryio.getExchangeRates = function () {
  if (!Lbryio.exchangeLastFetched || Date.now() - Lbryio.exchangeLastFetched > EXCHANGE_RATE_TIMEOUT) {
    Lbryio.exchangePromise = new Promise(function (resolve, reject) {
      Lbryio.call('lbc', 'exchange_rate', {}, 'get', true).then(function (_ref3) {
        var LBC_USD = _ref3.lbc_usd,
            LBC_BTC = _ref3.lbc_btc,
            BTC_USD = _ref3.btc_usd;
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
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(7);
exports.encode = exports.stringify = __webpack_require__(8);


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
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doTransifexUpload", function() { return doTransifexUpload; });
var apiBaseUrl = 'https://www.transifex.com/api/2/project';
var resource = 'app-strings';
function doTransifexUpload(contents, project, token, success, fail) {
  var url = "".concat(apiBaseUrl, "/").concat(project, "/resources/");
  var updateUrl = "".concat(apiBaseUrl, "/").concat(project, "/resource/").concat(resource, "/content/");
  var headers = {
    Authorization: "Basic ".concat(Buffer.from("api:".concat(token)).toString('base64')),
    'Content-Type': 'application/json'
  };
  var req = {
    accept_translations: true,
    i18n_type: 'KEYVALUEJSON',
    name: resource,
    slug: resource,
    content: contents
  };

  function handleResponse(text) {
    var json;

    try {
      // transifex api returns Python dicts for some reason.
      // Any way to get the api to return valid JSON?
      json = JSON.parse(text);
    } catch (e) {// ignore
    }

    if (success) {
      success(json || text);
    }
  }

  function handleError(err) {
    if (fail) {
      fail(err.message ? err.message : 'Could not upload strings resource to Transifex');
    }
  } // check if the resource exists


  fetch(updateUrl, {
    headers: headers
  }).then(function (response) {
    return response.json();
  }).then(function () {
    // perform an update
    fetch(updateUrl, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({
        content: contents
      })
    }).then(function (response) {
      if (response.status !== 200 && response.status !== 201) {
        throw new Error('failed to update transifex');
      }

      return response.text();
    }).then(handleResponse)["catch"](handleError);
  })["catch"](function () {
    // resource doesn't exist, create a fresh resource
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(req)
    }).then(function (response) {
      if (response.status !== 200 && response.status !== 201) {
        throw new Error('failed to upload to transifex');
      }

      return response.text();
    }).then(handleResponse)["catch"](handleError);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10).Buffer))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(12)
var ieee754 = __webpack_require__(13)
var isArray = __webpack_require__(14)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

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
	g = g || new Function("return this")();
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


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doGenerateAuthToken", function() { return doGenerateAuthToken; });
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchCostInfoForUri", function() { return doFetchCostInfoForUri; });
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchBlackListedOutpoints", function() { return doFetchBlackListedOutpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doBlackListedOutpointsSubscribe", function() { return doBlackListedOutpointsSubscribe; });
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
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
      var splitOutpoints = [];

      if (outpoints) {
        outpoints.forEach(function (outpoint, index) {
          var _outpoint$split = outpoint.split(':'),
              _outpoint$split2 = _slicedToArray(_outpoint$split, 2),
              txid = _outpoint$split2[0],
              nout = _outpoint$split2[1];

          splitOutpoints[index] = {
            txid: txid,
            nout: Number.parseInt(nout, 10)
          };
        });
      }

      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_BLACK_LISTED_CONTENT_COMPLETED"],
        data: {
          outpoints: splitOutpoints,
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

    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('file', 'list_blocked', {
      auth_token: ''
    }).then(success, failure);
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchFilteredOutpoints", function() { return doFetchFilteredOutpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFilteredOutpointsSubscribe", function() { return doFilteredOutpointsSubscribe; });
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
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
      var formattedOutpoints = [];

      if (outpoints) {
        formattedOutpoints = outpoints.map(function (outpoint) {
          var _outpoint$split = outpoint.split(':'),
              _outpoint$split2 = _slicedToArray(_outpoint$split, 2),
              txid = _outpoint$split2[0],
              nout = _outpoint$split2[1];

          return {
            txid: txid,
            nout: Number.parseInt(nout, 10)
          };
        });
      }

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

    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('file', 'list_filtered', {
      auth_token: ''
    }).then(success, failure);
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchFeaturedUris", function() { return doFetchFeaturedUris; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchTrendingUris", function() { return doFetchTrendingUris; });
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchViewCount", function() { return doFetchViewCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchSubCount", function() { return doFetchSubCount; });
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


var doFetchViewCount = function doFetchViewCount(claimIdCsv) {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_VIEW_COUNT_STARTED"]
    });
    return lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('file', 'view_count', {
      claim_id: claimIdCsv
    }).then(function (result) {
      var viewCounts = result;
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_VIEW_COUNT_COMPLETED"],
        data: {
          claimIdCsv: claimIdCsv,
          viewCounts: viewCounts
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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSetDefaultAccount", function() { return doSetDefaultAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSetSync", function() { return doSetSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doGetSync", function() { return doGetSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSyncApply", function() { return doSyncApply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCheckSync", function() { return doCheckSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doResetSync", function() { return doResetSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSyncEncryptAndDecrypt", function() { return doSyncEncryptAndDecrypt; });
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_2__);



var NO_WALLET_ERROR = 'no wallet found for this user';
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
function doSetSync(oldHash, newHash, data) {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SET_SYNC_STARTED"]
    });
    return lbryio__WEBPACK_IMPORTED_MODULE_1__["default"].call('sync', 'set', {
      old_hash: oldHash,
      new_hash: newHash,
      data: data
    }, 'post').then(function (response) {
      if (!response.hash) {
        throw Error('No hash returned for sync/set.');
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
function doGetSync(passedPassword, callback) {
  var password = passedPassword === null || passedPassword === undefined ? '' : passedPassword;

  function handleCallback(error, hasNewData) {
    if (callback) {
      if (typeof callback !== 'function') {
        throw new Error('Second argument passed to "doGetSync" must be a function');
      }

      callback(error, hasNewData);
    }
  }

  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SYNC_STARTED"]
    });
    var data = {};
    lbry_redux__WEBPACK_IMPORTED_MODULE_2__["Lbry"].wallet_status().then(function (status) {
      if (status.is_locked) {
        return lbry_redux__WEBPACK_IMPORTED_MODULE_2__["Lbry"].wallet_unlock({
          password: password
        });
      } // Wallet is already unlocked


      return true;
    }).then(function (isUnlocked) {
      if (isUnlocked) {
        return lbry_redux__WEBPACK_IMPORTED_MODULE_2__["Lbry"].sync_hash();
      }

      data.unlockFailed = true;
      throw new Error();
    }).then(function (hash) {
      return lbryio__WEBPACK_IMPORTED_MODULE_1__["default"].call('sync', 'get', {
        hash: hash
      }, 'post');
    }).then(function (response) {
      var syncHash = response.hash;
      data.syncHash = syncHash;
      data.syncData = response.data;
      data.changed = response.changed;
      data.hasSyncedWallet = true;

      if (response.changed) {
        return lbry_redux__WEBPACK_IMPORTED_MODULE_2__["Lbry"].sync_apply({
          password: password,
          data: response.data,
          blocking: true
        });
      }
    }).then(function (response) {
      if (!response) {
        dispatch({
          type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SYNC_COMPLETED"],
          data: data
        });
        handleCallback(null, data.changed);
        return;
      }

      var walletHash = response.hash,
          walletData = response.data;

      if (walletHash !== data.syncHash) {
        // different local hash, need to synchronise
        dispatch(doSetSync(data.syncHash, walletHash, walletData));
      }

      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SYNC_COMPLETED"],
        data: data
      });
      handleCallback(null, data.changed);
    })["catch"](function (syncAttemptError) {
      if (data.unlockFailed) {
        dispatch({
          type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SYNC_FAILED"],
          data: {
            error: syncAttemptError
          }
        });

        if (password !== '') {
          dispatch({
            type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_APPLY_BAD_PASSWORD"]
          });
        }

        handleCallback(syncAttemptError);
      } else if (data.hasSyncedWallet) {
        var error = syncAttemptError && syncAttemptError.message || 'Error getting synced wallet';
        dispatch({
          type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SYNC_FAILED"],
          data: {
            error: error
          }
        }); // Temp solution until we have a bad password error code
        // Don't fail on blank passwords so we don't show a "password error" message
        // before users have ever entered a password

        if (password !== '') {
          dispatch({
            type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_APPLY_BAD_PASSWORD"]
          });
        }

        handleCallback(error);
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

        if (syncAttemptError.message === NO_WALLET_ERROR) {
          lbry_redux__WEBPACK_IMPORTED_MODULE_2__["Lbry"].sync_apply({
            password: password
          }).then(function (_ref) {
            var walletHash = _ref.hash,
                syncApplyData = _ref.data;
            dispatch(doSetSync('', walletHash, syncApplyData, password));
            handleCallback();
          })["catch"](function (syncApplyError) {
            handleCallback(syncApplyError);
          });
        }
      }
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
    }).then(function (_ref2) {
      var walletHash = _ref2.hash,
          walletData = _ref2.data;
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
function doSyncEncryptAndDecrypt(oldPassword, newPassword, encrypt) {
  return function (dispatch) {
    var data = {};
    return lbry_redux__WEBPACK_IMPORTED_MODULE_2__["Lbry"].sync_hash().then(function (hash) {
      return lbryio__WEBPACK_IMPORTED_MODULE_1__["default"].call('sync', 'get', {
        hash: hash
      }, 'post');
    }).then(function (syncGetResponse) {
      data.oldHash = syncGetResponse.hash;
      return lbry_redux__WEBPACK_IMPORTED_MODULE_2__["Lbry"].sync_apply({
        password: oldPassword,
        data: syncGetResponse.data
      });
    }).then(function () {
      if (encrypt) {
        dispatch(Object(lbry_redux__WEBPACK_IMPORTED_MODULE_2__["doWalletEncrypt"])(newPassword));
      } else {
        dispatch(Object(lbry_redux__WEBPACK_IMPORTED_MODULE_2__["doWalletDecrypt"])());
      }
    }).then(function () {
      return lbry_redux__WEBPACK_IMPORTED_MODULE_2__["Lbry"].sync_apply({
        password: newPassword
      });
    }).then(function (syncApplyResponse) {
      if (syncApplyResponse.hash !== data.oldHash) {
        return dispatch(doSetSync(data.oldHash, syncApplyResponse.hash, syncApplyResponse.data));
      }
    })["catch"](console.error);
  };
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUpdateUploadProgress", function() { return doUpdateUploadProgress; });
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var doUpdateUploadProgress = function doUpdateUploadProgress(progress, params, xhr) {
  return function (dispatch) {
    return dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_UPLOAD_PROGRESS"],
      data: {
        progress: progress,
        params: params,
        xhr: xhr
      }
    });
  };
};

/***/ }),
/* 23 */
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
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "costInfoReducer", function() { return costInfoReducer; });
/* harmony import */ var util_redux_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
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
/* 25 */
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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blacklistReducer", function() { return blacklistReducer; });
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var util_redux_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filteredReducer", function() { return filteredReducer; });
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var util_redux_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
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
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homepageReducer", function() { return homepageReducer; });
/* harmony import */ var util_redux_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statsReducer", function() { return statsReducer; });
/* harmony import */ var util_redux_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
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
      claimIdCsv = _action$data.claimIdCsv,
      viewCounts = _action$data.viewCounts;
  var viewCountById = Object.assign({}, state.viewCountById);
  var claimIds = claimIdCsv.split(',');

  if (claimIds.length === viewCounts.length) {
    claimIds.forEach(function (claimId, index) {
      viewCountById[claimId] = viewCounts[index];
    });
  }

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
/* 30 */
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
  syncApplyPasswordError: false,
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
    syncApplyPasswordError: false,
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

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_APPLY_BAD_PASSWORD"]] = function (state) {
  return Object.assign({}, state, {
    syncApplyPasswordError: true
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
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webReducer", function() { return webReducer; });
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/*
test mock:
  currentUploads: {
    'test#upload': {
      progress: 50,
      params: {
        name: 'steve',
        thumbnail_url: 'https://dev2.spee.ch/4/KMNtoSZ009fawGz59VG8PrID.jpeg',
      },
    },
  },
 */

var reducers = {};
var defaultState = {
  currentUploads: {}
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_UPLOAD_PROGRESS"]] = function (state, action) {
  var _action$data = action.data,
      progress = _action$data.progress,
      params = _action$data.params,
      xhr = _action$data.xhr;
  var key = params.channel ? "".concat(params.name, "#").concat(params.channel) : "".concat(params.name, "#anonymous");
  var currentUploads;

  if (!progress) {
    currentUploads = Object.assign({}, state.currentUploads);
    Object.keys(currentUploads).forEach(function (k) {
      if (k === key) {
        delete currentUploads[key];
      }
    });
  } else {
    currentUploads = Object.assign({}, state.currentUploads);
    currentUploads[key] = {
      progress: progress,
      params: params,
      xhr: xhr
    };
  }

  return _objectSpread({}, state, {
    currentUploads: currentUploads
  });
};

function webReducer() {
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthToken", function() { return selectAuthToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsAuthenticating", function() { return selectIsAuthenticating; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
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
/* 33 */
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
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllCostInfoByUri", function() { return selectAllCostInfoByUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectCostInfoForUri", function() { return makeSelectCostInfoForUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFetchingCostInfo", function() { return selectFetchingCostInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectFetchingCostInfoForUri", function() { return makeSelectFetchingCostInfoForUri; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
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
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBlackListedOutpoints", function() { return selectBlackListedOutpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBlacklistedOutpointMap", function() { return selectBlacklistedOutpointMap; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);

var selectState = function selectState(state) {
  return state.blacklist || {};
};
var selectBlackListedOutpoints = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.blackListedOutpoints;
});
var selectBlacklistedOutpointMap = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBlackListedOutpoints, function (outpoints) {
  return outpoints ? outpoints.reduce(function (acc, val) {
    var outpoint = "".concat(val.txid, ":").concat(val.nout);
    acc[outpoint] = 1;
    return acc;
  }, {}) : {};
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilteredOutpoints", function() { return selectFilteredOutpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilteredOutpointMap", function() { return selectFilteredOutpointMap; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);

var selectState = function selectState(state) {
  return state.filtered || {};
};
var selectFilteredOutpoints = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.filteredOutpoints;
});
var selectFilteredOutpointMap = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFilteredOutpoints, function (outpoints) {
  return outpoints ? outpoints.reduce(function (acc, val) {
    var outpoint = "".concat(val.txid, ":").concat(val.nout);
    acc[outpoint] = 1;
    return acc;
  }, {}) : {};
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFeaturedUris", function() { return selectFeaturedUris; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFetchingFeaturedUris", function() { return selectFetchingFeaturedUris; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTrendingUris", function() { return selectTrendingUris; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFetchingTrendingUris", function() { return selectFetchingTrendingUris; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
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
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectViewCount", function() { return selectViewCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSubCount", function() { return selectSubCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectViewCountForUri", function() { return makeSelectViewCountForUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectSubCountForUri", function() { return makeSelectSubCountForUri; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
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
    return claim ? viewCountById[claim.claim_id] || 0 : 0;
  });
};
var makeSelectSubCountForUri = function makeSelectSubCountForUri(uri) {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(Object(lbry_redux__WEBPACK_IMPORTED_MODULE_1__["makeSelectClaimForUri"])(uri), selectSubCount, function (claim, subCountById) {
    return claim ? subCountById[claim.claim_id] || 0 : 0;
  });
};

/***/ }),
/* 39 */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSyncApplyPasswordError", function() { return selectSyncApplyPasswordError; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
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
var selectSyncApplyPasswordError = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.syncApplyPasswordError;
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentUploads", function() { return selectCurrentUploads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUploadCount", function() { return selectUploadCount; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);


var selectState = function selectState(state) {
  return state.web || {};
};

var selectCurrentUploads = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.currentUploads;
});
var selectUploadCount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCurrentUploads, function (currentUploads) {
  return currentUploads && Object.keys(currentUploads).length;
});

/***/ })
/******/ ]);
});