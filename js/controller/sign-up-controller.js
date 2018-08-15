import {STRINGS} from "../constants/constants.js";
import {ENDPOINTS} from "../constants/constants.js";
import {executePostRequest} from "../service/http-service.js";
import {signUpUserValidator} from "../service/validator-service.js";

function onSignUpButtonClickListener() {
	let user = {email: this.signUpInputs.email.value, name: this.signUpInputs.name.value, password: this.signUpInputs.password.value};
	if (!signUpUserValidator.validateEmail(user.email)) {
		this.modalController.setTitle(STRINGS.INVALID_EMAIL);
	} else if (!signUpUserValidator.validateName(user.name)) {
		this.modalController.setTitle(STRINGS.INVALID_USERNAME);
	} else if (!signUpUserValidator.validatePassword(user.password)) {
		this.modalController.setTitle(STRINGS.INVALID_PASSWORD);
	} else {
		signUp.call(this, user);
		return;
	}
	this.modalController.showModal();
};

function signUp(user) {
	executePostRequest(ENDPOINTS.SIGN_UP, user).then(response => {
		clearInputs.call(this);
		this.modalController.setTitle(STRINGS.SIGN_UP_SUCCESS_TITLE);
		this.modalController.setText(STRINGS.SIGN_UP_SUCCESS_TEXT);
		this.modalController.showModal();
	}).catch(exception => {
		this.modalController.setTitle(STRINGS.SIGN_UP_FAILURE_TITLE);
		this.modalController.setText(exception);
		this.modalController.showModal();
	});
};

function clearInputs() {
	let inputs = this.signUpInputs;
	inputs.email.value = inputs.name.value = inputs.password.value = "";
}

export class SignUpController {
	constructor(modalController) {
		this.modalController = modalController;
	}
	
	init() {
		this.form = document.querySelector("form");
		this.form.addEventListener("submit", function(event) {event.preventDefault();});
		let inputs = this.form.getElementsByTagName("input");
		this.signUpInputs = {email: inputs[0], name: inputs[1], password: inputs[2]};
		document.getElementById("signUpButton").onclick = () => onSignUpButtonClickListener.call(this);
		this.modalController.init();
	}
};
