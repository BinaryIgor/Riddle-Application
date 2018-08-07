import {executeGetRequest} from "../service/http-service.js";

export class SignInController {
	init() {
		let inputs = document.querySelectorAll("input");
		let signInInputs = {usernameEmail: inputs[0], password: inputs[1]};
		document.getElementById("signInButton").onclick = () => {
			let user = {usernameEmail: signInInputs.usernameEmail.value, password: signInInputs.password.value};
			console.log(user);
		}
	}
};