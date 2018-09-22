export function SigningIn(httpConnectionWithEndpoints, strings) {
	
	const _httpConnectionWithEndpoints = httpConnectionWithEndpoints;
	const _strings = strings;
	
	this.perform = (nameOrEmail, password) => {
		return new Promise((resolve, reject) => {
			if(nameOrEmail.length < 4) {
				reject(new Error(strings.valueWithParam("invalidSignInUser", 4)));
			} else if (password.length < 6) {
				reject(new Error(strings.valueWithParam("invalidPassword", 6)));
			} else {
				resolve(httpConnectionWithEndpoints.executePost("signIn", JSON.stringify({nameOrEmail: nameOrEmail, password: password})));
			}
		});
	};
};