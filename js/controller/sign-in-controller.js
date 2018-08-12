import {ROUTES} from "../constants/constants.js";
import {executeGetRequest} from "../service/http-service.js";
import {validateSignInUser} from "../service/validator-service.js";
import {STRINGS} from "../constants/constants.js";

function showNotValidUserModal(modalController) {
	modalController.setTitle(STRINGS.INVALID_SIGN_IN_USER);
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
	}
};