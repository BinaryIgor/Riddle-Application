import {STRINGS} from "../constants/constants.js";
import {ENDPOINTS} from "../constants/constants.js";
import {executeGetRequest} from "../service/http-service.js";
import {signUpUserValidator} from "../service/validator-service.js";

export class ProfileController {
	constructor() {
		
	}
	
	init() {
		let profileImage = document.querySelector("img");
		profileImage.src = "images/background.jpg";
		let inputs = document.querySelectorAll("input");
		console.log(`Have ${inputs.length} inputs`);
		let buttons = document.querySelectorAll("buttons");
		console.log(`Have ${buttons.length} buttons`);
		inputs[0].onchange = function() {
			profileImage.src = URL.createObjectURL(this.files[0]);
		};
		executeGetRequest(ENDPOINTS.CURRENT_USER_PROFILE).then(response => {
			console.log("data loaded!");
		}).catch((exception) => console.log(exception));
	}
};
