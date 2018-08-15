import {ROUTES} from "../constants/constants.js";
import {executePostRequest} from "../service/http-service.js";
import {validateSignInUser} from "../service/validator-service.js";
import {isNotNullAndHaveDefinedFields} from "../service/validator-service.js";
import {getCurrentUrlParams} from "../service/parser-service.js";
import {STRINGS} from "../constants/constants.js";
import {ENDPOINTS} from "../constants/constants.js";
import {URL_PARAMS_KEYS} from "../constants/constants.js";

function showNotValidUserModal(modalController) {
	modalController.setTitle(STRINGS.INVALID_SIGN_IN_USER);
	modalController.showModal();
};

function activateUser(urlParams, modalController) {
	let id = urlParams[URL_PARAMS_KEYS.ID];
	let toActivateHash = urlParams[URL_PARAMS_KEYS.ACTIVATE];
	let activator = {id: id, hash: toActivateHash};
	console.log(JSON.stringify(activator));
	if (!isNotNullAndHaveDefinedFields(activator)) {
		return;
	}
	executePostRequest(ENDPOINTS.SIGN_UP_ACTIVATE, activator)
		.then(response => {
			if(response) {
				let username = JSON.parse(response).name;
				if (!username) {
					onActivationUserFailure(response);
				}
				modalController.setTitle(STRINGS.SIGN_UP_ACTIVATION_SUCCESS_TITLE(username));
				modalController.setText(STRINGS.SIGN_UP_ACTIVATION_SUCCESS_TEXT);
				modalController.showModal();
				//temporary hack!
				history.replaceState(null, null, "index.html");
			} else {
				onActivationUserFailure(response, modalController);
			}
		})
		.catch(exception => {
			onActivationUserFailure(exception, modalController);
		});
};

function onActivationUserFailure(response, modalController) {
	modalController.setTitle(STRINGS.SIGN_UP_ACTIVATION_FAILURE_TITLE);
	modalController.setText(response);
	modalController.showModal();
};

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
		let signInInputs = {nameEmail: inputs[0], password: inputs[1]};
		document.getElementById("signInButton").onclick = () => {
			let user = {nameEmail: signInInputs.nameEmail.value, password: signInInputs.password.value};
			if (validateSignInUser(user) || true) {
				console.log(user);
				location.href = "#" + ROUTES.MAIN_PAGE;
			} else {
				showNotValidUserModal(this.modalController);
			}
		}
		this.modalController.init();
		let urlParams = getCurrentUrlParams();
		if (isNotNullAndHaveDefinedFields(urlParams)) {
			activateUser(urlParams, this.modalController);
		}
	}
};