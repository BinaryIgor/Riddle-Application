import {ROUTES} from "../constants/constants.js";
import {Router} from "../router/router.js";
import {executePostRequest} from "../service/http-service.js";
import {validateSignInUser} from "../service/validator-service.js";
import {isNotNullAndHaveDefinedFields} from "../service/validator-service.js";
import {saveTokensData} from "../service/session-storage-service.js";
import {getCurrentUrlParams} from "../service/parser-service.js";
import {STRINGS} from "../constants/constants.js";
import {ENDPOINTS} from "../constants/constants.js";
import {URL_PARAMS_KEYS} from "../constants/constants.js";

export class SignInController {
	constructor(modalController) {
		this.modalController = modalController;
	}
	init() {
		let form = document.querySelector("form");
		form.addEventListener("submit", function(event) {
			event.preventDefault();
		});
		let inputs = form.getElementsByTagName("input");
		this.signInInputs = {nameEmail: inputs[0], password: inputs[1]};
		document.getElementById("signInButton").onclick = () => onSignInButtonClickListener.call(this);
		this.modalController.init();
		let urlParams = getCurrentUrlParams();
		if (isNotNullAndHaveDefinedFields(urlParams)) {
			activateUser.call(this, urlParams);
		}
	}
};

function onSignInButtonClickListener() {
	let user = {nameEmail: this.signInInputs.nameEmail.value, password: this.signInInputs.password.value};
	if (validateSignInUser(user)) {
		signIn.call(this, user);
	} else {
		this.modalController.setTitle(STRINGS.INVALID_SIGN_IN_USER);
		this.modalController.showModal();
	}
};

function signIn(user) {
	executePostRequest(ENDPOINTS.SIGN_IN, user)
		.then(tokensData => {
			console.log(tokensData);
			saveTokensData(tokensData);
			Router.getInstance().replaceRoute(ROUTES.MAIN_PAGE);
		})
		.catch(exception => {
			this.modalController.setTitle(STRINGS.SIGN_IN_FAILURE_TITLE);
			this.modalController.showModal();
		});
};

function activateUser(urlParams) {
	let id = urlParams[URL_PARAMS_KEYS.ID];
	let toActivateHash = urlParams[URL_PARAMS_KEYS.ACTIVATE];
	let activator = {id: id, hash: toActivateHash};
	console.log(JSON.stringify(activator));
	if (!isNotNullAndHaveDefinedFields(activator)) {
		return;
	}
	executePostRequest(ENDPOINTS.SIGN_UP_ACTIVATE, activator)
		.then(response => onActivateUserSuccess.call(this, response))
		.catch(exception => onActivationUserFailure.call(this, exception));
};

function onActivateUserSuccess(response) {
	if(response) {
		let username = JSON.parse(response).name;
		if (!username) {
			onActivationUserFailure(response);
		}
		this.modalController.setTitle(STRINGS.SIGN_UP_ACTIVATION_SUCCESS_TITLE(username));
		this.modalController.setText(STRINGS.SIGN_UP_ACTIVATION_SUCCESS_TEXT);
		this.modalController.showModal();
		//temporary hack!
		history.replaceState(null, null, "index.html");
	} else {
		onActivationUserFailure.call(this, response);
	}
};

function onActivationUserFailure(response) {
	this.modalController.setTitle(STRINGS.SIGN_UP_ACTIVATION_FAILURE_TITLE);
	this.modalController.setText(response);
	this.modalController.showModal();
};
