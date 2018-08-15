import {CONSTANTS} from '../constants/constants.js'; 

function validateString(string, minLength) {
	return string && string.length >= minLength;
}

function validateUsername(username) {
	return validateString(username, CONSTANTS.MIN_USERNAME_LENGTH);
}

function validateEmail(email) {
	let validBase = validateString(email, CONSTANTS.MIN_EMAIL_LENGTH);
	return validBase && email.indexOf("@") > 0 && email.indexOf(".") > 1;
}

function validatePassword(password) {
	return validateString(password, CONSTANTS.MIN_PASSWORD_LENGTH);
}

export function validateSignInUser(user) {
	return (validateEmail(user.nameEmail) || validateUsername(user.nameEmail)) && validatePassword(user.password);
}

export const signUpUserValidator = {
	validateEmail: (email) => {return validateEmail(email)}, 
	validateName: (name) => {return validateUsername(name)},
	validatePassword: (password) => {return validatePassword(password)}
};

export function isNotNullAndHaveDefinedFields(object) {
	if (!object) {
		return false;
	}
	let keys = Object.keys(object);
	if (keys.length < 1) {
		return false;
	}
	for (let key of keys) {
		if (!object[key]) {
			return false;
		}
	}
	return true;
};
 
