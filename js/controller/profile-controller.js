import {STRINGS} from "../constants/constants.js";
import {ENDPOINTS} from "../constants/constants.js";
import {executeGetRequest} from "../service/http-service.js";
import {signUpUserValidator} from "../service/validator-service.js";

const mockedProfile = {
	email: "ceigor94@gmail.com",
	name: "Ceigor",
	password: "123456"
};

export class ProfileController {
	constructor(inputModalController) {
		this.inputModalController = inputModalController;
	}
	
	init() {
		this.inputModalController.init();
		let profileImage = document.querySelector("img");
		profileImage.src = "images/background.jpg";
		let inputs = document.querySelectorAll("input");
		console.log(`Have ${inputs.length} inputs`);
		let buttons = document.querySelectorAll("button");
		console.log(`Have ${buttons.length} buttons`);
		inputs[0].onchange = function() {
			profileImage.src = URL.createObjectURL(this.files[0]);
			buttons[0].style.display = "inline";
		};
		executeGetRequest(ENDPOINTS.CURRENT_USER_PROFILE).then(response => {
			inputs[1].value = mockedProfile.email;
			inputs[2].value = mockedProfile.name;
			inputs[3].value = mockedProfile.password;
		}).catch((exception) => console.log(exception));
		buttons[1].onclick = () => this.inputModalController.showModal();
	}
};
