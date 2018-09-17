export function strings() {
	
	const _minEmailLength = 7;
	const _minUsernameLength = 3;
	const _minPasswordLength = 6;
	
	const strings = new Map();
	strings.set("invalidSignInUser", "Invalid name/email or password.");
	strings.set("invalidEmail", `Email has to have at least {$_minEmailLength} characters and contains both '@' and '.' characters.`);
	strings.set("invalidUsername", `Username has to have at least ${_minUsernameLength} characters.`);
	strings.set("invalidPassword", `Password has to have at least  ${_minPasswordLength} characters.`);
	strings.set("signUpSuccessTitle", "You have successfully signed up!");
	strings.set("signUpFailureTitle", "You failed to sign up.");
	strings.set("signUpSuccessText", "Check your email for activating link.");
	strings.set("welcome", "Welcome"); 
	strings.set("signUpActivationSuccessText", "Your account is ready to use");
	strings.set("signUpActivationFauilureTitle", "Your account has not been activated");
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
	
	this.value = (key) {
		let value = strings.get(key);
		if (!value) {
			throw `string associated with ${key} does not exist`;
		}
		return value;
	};

}

