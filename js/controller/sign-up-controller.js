import {STRINGS} from "../constants/constants.js";
import {executeGetRequest} from "../service/http-service.js";
import {signUpUserValidator} from "../service/validator-service.js";

function onSignUpButtonClickListener(signUpInputs, modalController) {
	let user = {email: signUpInputs.email.value, name: signUpInputs.name.value, password: signUpInputs.password.value};
	if (!signUpUserValidator.validateEmail(user.email)) {
		modalController.setTitle(STRINGS.INVALID_EMAIL);
	} else if (!signUpUserValidator.validateName(user.name)) {
		modalController.setTitle(STRINGS.INVALID_USERNAME);
	} else if (!signUpUserValidator.validatePassword(user.password)) {
		modalController.setTitle(STRINGS.INVALID_PASSWORD);
	} else {
		modalController.setTitle(STRINGS.SIGN_UP_SUCCESS_TITLE);
		modalController.setText(STRINGS.SIGN_UP_SUCCESS_TEXT);
	}
	modalController.showModal();
};


export class SignUpController {
	constructor(modalController) {
		this.modalController = modalController;
	}
	
	init() {
		let form = document.querySelector("form");
		let inputs = form.getElementsByTagName("input");
		let signUpInputs = {email: inputs[0], name: inputs[1], password: inputs[2]};
		document.getElementById("signUpButton").onclick = () => onSignUpButtonClickListener(signUpInputs, this.modalController);
		this.modalController.init();
	}
};
