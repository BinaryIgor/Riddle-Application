export function SigningUp(httpConnectionWithEndpoints, strings) {
	
	const _httpConnectionWithEndpoints = httpConnectionWithEndpoints;
	const _strings = strings;
	
	this.perform = (email, name, password) => {
		return new Promise((resolve, reject) => {
			if (email.length < 6 || email.indexOf("@") < 1) {
				reject(new Error(strings.valueWithParam("invalidEmail", 6)));
			} else if (name.length < 3) {
				reject(new Error(strings.valueWithParam("invalidUsername", 3))); 
			} else if (password.length < 6) {
				reject(new Error(strings.valueWithParam("invalidPassword", 6)));
			} else {
				resolve(httpConnectionWithEndpoints.executePost("signUp", JSON.stringify({name: name, email: email, password: password})));
			}
		});
	};
};