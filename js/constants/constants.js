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
	PROFILE: "Profile",
	EDIT: "Edit"
};

export const ROUTES = {
	SIGN_IN: "sign-in",
	SIGN_UP: "sign-up",
	MAIN_PAGE: "main-page",
	PROFILE: "profile"
};

const ENDPOINTS_BASE = "https://jsonplaceholder.typicode.com/posts";
export const ENDPOINTS = {
	SIGN_IN: ENDPOINTS_BASE + "",
	SIGN_UP: ENDPOINTS_BASE + "",
	REFRESH_TOKEN: ENDPOINTS_BASE + "",
	RANKING: ENDPOINTS_BASE + "",
	CURRENT_USER_PROFILE: ENDPOINTS_BASE + "",
	userProfile: (id) => {return ENDPOINTS_BASE + ""}	
};
