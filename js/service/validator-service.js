function validateString(string, minLength) {
	return !string && string.length >= minLength;
}

export function validateUsername(username) {
	return validateString(username, 3);
}

export function validateEmail(email) {
	let validBase = validateString(email, 5);
	return validBase && email.indexOf("@") >= 3 && email.indexOf(".") >= 4;
}

export function validatePassword(password) {
	return validateString(password, 10);
}