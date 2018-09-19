export function Tokens() {
	
	const accessTokenKey = "accessToken";
	const refreshTokenKey = "refreshToken";
	const expirationDateKey = "expirationDate";
	
	this.save = (tokensData) => {
		sessionStorage.setItem(accessTokenKey, tokensData.accessToken.value);
		sessionStorage.setItem(refreshTokenKey, tokensData.refreshToken.value);
		sessionStorage.setItem(expirationDateKey, tokensData.accessToken.expirationDate);
	};
	
	this.saveAccessToken = (accessToken) => {
		sessionStorage.setItem(accessTokenKey, accessToken.value);
		sessionStorage.setItem(expirationDateKey, accessToken.expirationDate);
	};
	
	this.delete = () => {
		sessionStorage.removeItem(accessTokenKey);
		sessionStorage.removeItem(refreshTokenKey);
		sessionStorage.removeItem(expirationDate);
	};
	
	this.readTokens = () => {
		let accessToken = sessionStorage.getItem(accessTokenKey);
		let expirationDate = sessionStorage.getItem(expirationDateKey);
		let refreshToken = sessionStorage.getItem(refreshTokenKey);
		if(!accessToken || !expirationDate || !refreshToken) {
			throw "incomplete tokens data!";
		}
		return {
			accessToken: accessToken,
			expirationDate: expirationDate,
			refreshToken: refreshToken
		};
	};
};