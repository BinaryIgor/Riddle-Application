export const CONSTANTS = {
	MIN_EMAIL_LENGTH: 7,
	MIN_USERNAME_LENGTH: 3,
	MIN_PASSWORD_LENGTH: 6
};

export const STRINGS = {
	INVALID_SIGN_IN_USER: "Invalid name/email or password.",
	INVALID_EMAIL: "Email has to have at least " + CONSTANTS.MIN_EMAIL_LENGTH + " characters and contains both '@' and '.' characters.",
	INVALID_USERNAME: "Username has to have at least " + CONSTANTS.MIN_USERNAME_LENGTH + " characters.",
	INVALID_PASSWORD: "Password has to have at least " + CONSTANTS.MIN_PASSWORD_LENGTH + " characters.",
	SIGN_UP_SUCCESS_TITLE: "You have successfully signed up!",
	SIGN_UP_SUCCESS_TEXT: "Check your email for activating link.",
	NAME_EMAIL: "name/email",
	SIGN_IN: "Sign In",
	SIGN_UP: "Sign Up",
	NEW_SIGN_UP: "New? Sign up.",
	EMAIL: "email",
	NAME: "name",
	PASSWORD: "password",
	RANKING: "Ranking",
	GAMES: "Games",
	PROFILE: "Profile"
};

export const ROUTES = {
	SIGN_IN: "sign-in",
	SIGN_UP: "sign-up",
	MAIN_PAGE: "main-page"
};