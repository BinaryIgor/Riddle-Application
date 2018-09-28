import {ValidName} from "../valid/ValidName.js";
import {ValidEmail} from "../valid/ValidEmail.js";
import {ValidPassword} from "../valid/ValidPassword.js";

export function ToSignInUser(httpConnectionWithEndpoints, strings, nameOrEmail, password) {
	
	const _httpConnectionWithEndpoints = httpConnectionWithEndpoints;
	const _strings = strings;
	const _nameOrEmail = nameOrEmail;
	const _password = password;
	
	this.signIn = () => {
		return new Promise((resolve, reject) => {
			let validNameOrEmail = _nameOrEmail.indexOf("@") >= 0 ? new ValidEmail(_strings, _nameOrEmail) : new ValidName(_strings, _nameOrEmail);
			let validPassword = new ValidPassword(_strings, _password);
			resolve(httpConnectionWithEndpoints.executePost("signIn", JSON.stringify({nameOrEmail: validNameOrEmail.value(),
				password: validPassword.value()})));
		});
	};
};