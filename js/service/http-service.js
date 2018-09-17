import {getTokensData} from "./session-storage-service.js";
import {saveTokensData} from "./session-storage-service.js";
import {hasDatePassed} from "./comparator-service.js";
import {ENDPOINTS} from "../constants/constants.js";

const HTTP_METHODS = {
	GET: "GET",
	PUT: "PUT",
	POST: "POST",
	DELETE: "DELETE"
};
const HTTP_HEADERS_KEYS = {
	CONTENT_TYPE: "Content-type",
	AUTHORIZATION: "Authorization"
};	
const HTTP_HEADERS_VALUES = {
	JSON: "application/json",
	MULTIPART: "multipart/form-data",
	TOKEN_PREFIX: "Bearer "	
};
const HTTP_STATUS_OK_MIN = 200;
const HTTP_STATUS_OK_MAX = 299;
var tokensData;

function executeRequest(url, method, data, addToken) {
	return new Promise((resolve, reject) => {
		let httpRequest = new XMLHttpRequest();
		if (Object.keys(tokensData).length > 0) {
			httpRequest.setRequestHeader(HTTP_HEADERS_KEYS.AUTHORIZATION, HTTP_HEADERS_VALUES.BEARER + tokensData.accessToken);
		}
		httpRequest.onload = function() {
			if (this.status >= HTTP_STATUS_OK_MIN && this.status <= HTTP_STATUS_OK_MAX) {
				console.log("response " + this.response);
				resolve(this.responseText ? JSON.parse(this.responseText) : this.responseText);
			} else {
				console.log("response " + this.response);
				reject(this.responseText);
			}
		};
		httpRequest.onerror = function() {
			console.log("response " + this.responseText);
			reject(this.responseText);
		};
		httpRequest.open(method, url, true);
		if (Object.keys(data).length > 0) {
			httpRequest.send(JSON.stringify(data));
		} else {
			httpRequest.send();
		}
	});
};

function executeTokenAwareRequest(url, method, data) {
	if (!tokensData) {
		tokensData = getTokensData();
	}
	if (hasDatePassed(tokensData.expirationDate, 1000)) {
		return executeGetRequest(ENDPOINTS.REFRESH_TOKEN).then(accessToken => {
			saveAccessToken(accessToken);
			tokensData = getTokensData();
			return executeRequest(url, method, data, true);
		});
	}
	return executeRequest(url, method, data, true);
};


export function executeGetRequest(url) {
	return executeRequest(url, HTTP_METHODS.GET, null);
};

export function executeTokenAwareGetRequest(url) {
	return executeTokenAwareRequest(url, HTTP_METHODS.GET, null);
};

export function executePostRequest(url, data) {
	return executeRequest(url, HTTP_METHODS.POST, data);
};

export function executeTokenAwarePostRequest(url, data) {
	return executeTokenAwareRequest(url, HTTP_METHODS.POST, data);
};

export function executePutRequest(url, data) {
	return executeRequest(url, HTTP_METHODS.PUT, data);
};

export function executeTokenAwarePutRequest(url, data) {
	return executeTokenAwareRequest(url, HTTP_METHODS.PUT, data);
};

export function executeDeleteRequest(url) {
	return executeRequest(url, HTTP_METHODS.DELETE, null);
};

export function executeTokenAwareDeleteRequest(url) {
	return executeTokenAwareRequest(url, HTTP_METHODS.DELETE);
};
