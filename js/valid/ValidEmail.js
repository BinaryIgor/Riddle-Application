export function ValidEmail(strings, email) {
	
	const _strings = strings;
	const _email = email;
	
	this.value = () => {
		if (_email.length < 6 || _email.indexOf("@") < 1) {
			throw new Error(_strings.valueWithParam("invalidEmail", 6));
		}
		return _email;
	};
}