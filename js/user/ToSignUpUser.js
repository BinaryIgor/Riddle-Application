import {ValidName} from "../valid/ValidName.js";
import {ValidEmail} from "../valid/ValidEmail.js";
import {ValidPassword} from "../valid/ValidPassword.js";

export function ToSignUpUser(httpConnectionWithEndpoints, strings, email, name, password) {
	
	const _httpConnectionWithEndpoints = httpConnectionWithEndpoints;
	const _strings = strings;
	const _email = email;
	const _name = name;
	const _password = password;
	
	this.signUp = () => {
		return new Promise((resolve, reject) => {
			let validEmail = new ValidEmail(_strings, _email);
			let validName = new ValidName(_strings, _name);
			let validPassword = new ValidPassword(_strings, _password);
			resolve(httpConnectionWithEndpoints.executePost("signUp", JSON.stringify({email: validEmail.value(),
				name: validName.value(), password: validPassword.value()})));
		});
	};
};