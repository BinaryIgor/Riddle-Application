export function Strings() {

	const strings = new Map();
	strings.set("signUpSuccessTitle", "You have successfully signed up!");
	strings.set("signUpFailureTitle", "You failed to sign up.");
	strings.set("signUpSuccessText", "Check your email for activating link.");
	strings.set("welcome", "Welcome"); 
	strings.set("signUpActivationSuccessText", "Your account is ready to use");
	strings.set("signUpActivationFailureTitle", "Your account has not been activated");
	strings.set("nameEmail", "name/email");
	strings.set("signIn", "Sign In");
	strings.set("signInFailureTitle", "Fail to sign in");
	strings.set("signInFailureUserDoesNotExist", "Given user does not exist");
	strings.set("signUp", "Sign Up");
	strings.set("signOut", "Sign Out");
	strings.set("newSignUp", "New? Sign up.");
	strings.set("email", "email");
	strings.set("name", "name");
	strings.set("password", "password");
	strings.set("ranking", "Ranking");
	strings.set("games", "Games");
	strings.set("profile", "Profile");
	strings.set("edit", "Edit");
	strings.set("save", "Save");
	strings.set("newEmail", "New email");
	strings.set("newName", "New name");
	strings.set("newPassword", "New password");
	strings.set("requestFailureTitle", "Request Failure");
	strings.set("noContent", "No content");
	strings.set("editProfileFailure", "Fail to change profile");
	strings.set("editEmailSuccess", "Email has been changed");
	strings.set("editNameSuccess", "Name has been changed");
	strings.set("editPasswordSuccess", "Password has been changed");
	
	const stringsWithParams = new Map();
	stringsWithParams.set("invalidEmail", (requiredLength) => `Email has to have at least ${requiredLength} characters and contains both '@' and '.' characters.`);
	stringsWithParams.set("invalidUsername", (requiredLength) => `Username has to have at least ${requiredLength} characters.`);
	stringsWithParams.set("invalidPassword", (requiredLength) => `Password has to have at least  ${requiredLength} characters.`);
	stringsWithParams.set("invalidSignInUser", (requiredLength) => `Username/email has to have at least ${requiredLength} characters.`);
	stringsWithParams.set("signUpActivationSuccessTitle", (username) => `Welcome ${username}!`);
	
	this.value = (key) => {
		let value = strings.get(key);
		if (!value) {
			throw `string associated with ${key} does not exist`;
		}
		return value;
	};
	
	this.valueWithParam = (key, param) => {
		let value = stringsWithParams.get(key)
		if (!value) {
			throw `string associated with ${key} does not exist`;
		}
		return value(param);
	};
}

