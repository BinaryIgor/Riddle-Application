export function SigningIn(httpConnectionWithEndpoints, strings) {
	
	const _httpConnectionWithEndpoints = httpConnectionWithEndpoints;
	const _strings = strings;
	
	this.perform = (nameOrEmail, password) => {
		let invalidUser = (!nameOrEmail || nameOrEmail.length < 4) || 
			(!password || password.length < 6);
		if (invalidUser) {
			throw strings.value("invalidSignInUser");
		}
		return httpConnectionWithEndpoints.executePost("signIn", JSON.stringify({nameOrEmail: nameOrEmail, password: password}));
	};
};