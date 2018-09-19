export function Strings() {

	const strings = new Map();
	strings.set("invalidSignInUser", "Invalid name/email or password.");
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
	
	const stringsWithParams = new Map();
	stringsWithParams.set("invalidUsername", (requiredLength) => `Email has to have at least {$requiredLength} characters and contains both '@' and '.' characters.`);
	stringsWithParams.set("invalidEmail", (requiredLength) => `Username has to have at least ${requiredLength} characters.`);
	stringsWithParams.set("invalidPassword", (requiredLength) => `Password has to have at least  ${requiredLength} characters.`);
	
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

