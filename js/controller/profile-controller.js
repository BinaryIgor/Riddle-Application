import {STRINGS} from "../constants/constants.js";
import {ENDPOINTS} from "../constants/constants.js";
import {executeGetRequest} from "../service/http-service.js";
import {signUpUserValidator} from "../service/validator-service.js";

export class ProfileController {
	constructor(inputModalController) {
		this.inputModalController = inputModalController;
	}
	
	init() {
		this.inputModalController.init();
		this.profileImage = document.querySelector("img");
		this.profileImage.src = "images/background.jpg";
		let inputs = document.querySelectorAll("input");
		this.inputs = {image: inputs[0], email: inputs[1], name: inputs[2], password: inputs[3]};
		let buttons = document.querySelectorAll("button");
		this.buttons ={save: buttons[0], editEmail: buttons[1], editName: buttons[2], editPassword: buttons[3]};
		this.inputs.image.onchange = function() {
			profileImage.src = URL.createObjectURL(this.files[0]);
			this.buttons.save.style.display = "inline";
		};
		executeGetRequest(ENDPOINTS.CURRENT_USER_PROFILE).then(response => {
			this.inputs.email.value = response.email;
			this.inputs.name.value = response.name;
			this.inputs.password.value = response.password;
		}).catch((exception) => console.log(exception));
		this.buttons.editEmail.onclick = () => this.inputModalController.showModal();
	}
};
