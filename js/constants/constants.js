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
	SIGN_UP_FAILURE_TITLE: "You failed to sign up.",
	SIGN_UP_SUCCESS_TEXT: "Check your email for activating link.",
	SIGN_UP_ACTIVATION_SUCCESS_TITLE: username => {return `Welcome ${username}!`}, 
	SIGN_UP_ACTIVATION_SUCCESS_TEXT: "Your account is ready to use",
	SIGN_UP_ACTIVATION_FAILURE_TITLE: "Your account has not been activated",
	NAME_EMAIL: "name/email",
	SIGN_IN: "Sign In",
	SIGN_IN_FAILURE_TITLE: "Fail to sign in",
	SIGN_IN_FAILURE_USER_DOES_NOT_EXIST: "Given user does not exist",
	SIGN_UP: "Sign Up",
	SIGN_OUT: "Sign Out",
	NEW_SIGN_UP: "New? Sign up.",
	EMAIL: "email",
	NAME: "name",
	PASSWORD: "password",
	RANKING: "Ranking",
	GAMES: "Games",
	PROFILE: "Profile",
	EDIT: "Edit",
	SAVE: "Save"
};

export const ROUTES = {
	SIGN_IN: "sign-in",
	SIGN_UP: "sign-up",
	MAIN_PAGE: "main-page",
	PROFILE: "profile"
};

export const SESSION_STORAGE_KEYS = {
	ACCESS_TOKEN: "access token",
	REFRESH_TOKEN: "refresh token",
	EXPIRATION_DATE: "expiration date"
};

const ENDPOINTS_BASE = "http://localhost:9000/riddle/";
export const ENDPOINTS = {
	SIGN_IN: ENDPOINTS_BASE + "user/sign-in",
	SIGN_UP: ENDPOINTS_BASE + "user/sign-up",
	SIGN_UP_ACTIVATE: ENDPOINTS_BASE + "user/activate",
	REFRESH_TOKEN: ENDPOINTS_BASE + "user/token-refresh",
	RANKING: ENDPOINTS_BASE + "",
	CURRENT_USER_PROFILE: ENDPOINTS_BASE + "user/profile",
	userProfile: (id) => {return ENDPOINTS_BASE + "user/profile/" + id;}	
};

export const URL_PARAMS_KEYS = {
	ID: "id",
	ACTIVATE: "activate"
};
