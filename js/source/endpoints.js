export function Endpoints(base) {
	
	const _base = base;
	const endpoints = new Map();
	endpoints.set("signIn",  _base + "user/sign-in");
	endpoints.set("signUp", _base + "user/sign-up");
	endpoints.set("signUpActivate",  _base + "user/activate");
	endpoints.set("refreshToken", _base + "user/token-refresh");
	endpoints.set("ranking", _base + "");
	endpoints.set("userProfile", _base + "user/profile");
	
	this.value = (key) => {
		let value = endpoints.get(key);
		if (!value) {
			throw `There is no endpoint associated with ${key}`;
		}
		return value;
	};
	
	this.valueWith = (key, param) => {
		let value = this.value(key);
		return `${value}/${param}`;
	};
};
