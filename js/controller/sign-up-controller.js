import {executeGetRequest} from "../service/http-service.js";

export class SignUpController {
	init() {
		let inputs = document.querySelectorAll("input");
		let signUpInputs = {email: inputs[0], username: inputs[1], password: inputs[2]};	
		document.getElementById("signUpButton").onclick = () => {
			let user = {email: signUpInputs.email.value, username: signUpInputs.username.value, password: signUpInputs.password.value};
			console.log(user);
		}
	}
};
