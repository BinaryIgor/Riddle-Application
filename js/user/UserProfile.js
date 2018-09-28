import {ValidName} from "../valid/ValidName.js";
import {ValidEmail} from "../valid/ValidEmail.js";
import {ValidPassword} from "../valid/ValidPassword.js";

export function UserProfile(authenticatedHttpConnectionWithEndpoints, strings) {
	
	const _authenticatedHttpConnectionWithEndpoints = authenticatedHttpConnectionWithEndpoints;
	const _strings = strings;
	
	this.profile = () => _authenticatedHttpConnectionWithEndpoints.executeGet("userProfile");
	
	this.saveImage = (image) => {
		throw new Error("Not implemented yet!");
	};
	
	this.saveEmail = (email) => {
		return new Promise((resolve, reject) => {
			let validEmail = new ValidEmail(_strings, email);
			resolve(_authenticatedHttpConnectionWithEndpoints.executePost("userProfile", JSON.stringify({email: validEmail.value()})));
		});
	};
	
	this.saveName = (name) => {
		return new Promise((resolve, reject) => {
			let validName = new ValidName(_strings, name);
			resolve(_authenticatedHttpConnectionWithEndpoints.executePost("userProfile", JSON.stringify({name: validName.value()})));
		});
	};
	
	this.savePassword = (password) => {
		return new Promise((resolve, reject) => {
			let validPassword = new ValidPassword(_strings, password);
			resolve(_authenticatedHttpConnectionWithEndpoints.executePost("userProfile", JSON.stringify({password: validPassword.value()})));
		});
	};
}