import {executeGetRequest} from "../service/http-service.js";

function onSignUpButtonClickListener(signUpInputs, modalController) {
	let user = {email: signUpInputs.email.value, username: signUpInputs.username.value, password: signUpInputs.password.value};
	modalController.setTitle("You have successfully signed up!");
	modalController.setText(JSON.stringify(user));
	modalController.showModal();
};


export class SignUpController {
	constructor(modalController) {
		this.modalController = modalController;
	}
	
	init() {
		let inputs = document.querySelectorAll("input");
		let signUpInputs = {email: inputs[0], username: inputs[1], password: inputs[2]};	
		document.getElementById("signUpButton").onclick = () => onSignUpButtonClickListener(signUpInputs, this.modalController);
		this.modalController.init();
	}
};
