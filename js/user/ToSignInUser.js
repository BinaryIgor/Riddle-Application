export function ToSignInUser(nameOrEmail, password, httpConnection, endpoints, strings) {
	
	const _nameOrEmail = nameOrEmail;
	const _password = password;
	
	this.signIn = () => {
		let invalidUser = (!_nameOrEmail || _nameOrEmail.length < 4) || 
			(!_password || _password.length < 6);
		if (invalidUser) {
			throw strings.value("invalidSignInUser");
		}
		return httpConnection.executePost(endpoints.value("signUp"), {nameOrEmail: _nameOrEmail, password: _password});
	};
};