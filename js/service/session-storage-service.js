import {SESSION_STORAGE_KEYS} from "../constants/constants.js";

export function saveTokensData(tokensData) {
	sessionStorage.setItem(SESSION_STORAGE_KEYS.ACCESS_TOKEN, tokensData.accessToken.value);
	sessionStorage.setItem(SESSION_STORAGE_KEYS.REFRESH_TOKEN, tokensData.refreshToken.value);
	sessionStorage.setItem(SESSION_STORAGE_KEYS.EXPIRATION_DATE, tokensData.accessToken.expirationDate);
};
	
export function saveAccessToken(accessToken) {
	sessionStorage.setItem(SESSION_STORAGE_KEYS.ACCESS_TOKEN, accessToken.value);
	sessionStorage.setItem(SESSION_STORAGE_KEYS.EXPIRATION_DATE, accessToken.expirationDate);
};
	
export function deleteTokensData() {
	sessionStorage.removeItem(SESSION_STORAGE_KEYS.ACCESS_TOKEN);
	sessionStorage.removeItem(SESSION_STORAGE_KEYS.REFRESH_TOKEN);
	sessionStorage.removeItem(SESSION_STORAGE_KEYS.EXPIRATION_DATE);
};
	
export function getTokensData() {
	let accessToken = sessionStorage.getItem(SESSION_STORAGE_KEYS.ACCESS_TOKEN);
	let expirationDate = sessionStorage.getItem(SESSION_STORAGE_KEYS.EXPIRATION_DATE);
	let refreshToken = sessionStorage.getItem(SESSION_STORAGE_KEYS.REFRESH_TOKEN);
	if(!accessToken || !expirationDate || !refreshToken) {
		return null;
	}
	return {
		accessToken: accessToken,
		expirationDate: expirationDate,
		refreshToken: refreshToken
	};
};