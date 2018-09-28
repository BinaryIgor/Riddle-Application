export function ValidPassword(strings, password) {
	
	const _strings = strings;
	const _password = password;
	
	this.value = () => {
		if (_password.length < 6) {
			throw new Error(_strings.valueWithParam("invalidPassword", 6));
		}
		return _password;
	}
}