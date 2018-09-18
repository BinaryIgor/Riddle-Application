export function SigningUp(httpConnectionWithEndpoints, strings) {
	
	const _httpConnectionWithEndpoints = httpConnectionWithEndpoints;
	const _strings = strings;
	
	this.perform = (name, email, password) => {
		if (name.length < 3) {
			throw strings.valueWithParam("invalidUsername", 3);
		}
		if (email.length < 6 || email.indexOf("@a") < 1) {
			throw strings.valueWithParam("invalidEmail", 6);
		}
		if (password.length < 6) {
			throw strings.valueWithParam("invalidPassword", 6);
		}
		return httpConnectionWithEndpoints.executePost("signUp", JSON.stringify({name: name, email: email, password: password}));
	};
};