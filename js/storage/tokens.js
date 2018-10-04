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
		sessionStorage.removeItem(expirationDateKey);
	};
	
	this.accessToken = () => sessionStorage.getItem(accessTokenKey);
	
	this.expirationDate = () => sessionStorage.getItem(expirationDateKey);
	
	this.refreshToken = () => sessionStorage.getItem(refreshTokenKey);
	
};