export const CONSTANTS = {
		MIN_EMAIL_LENGTH: 7,
		MIN_USERNAME_LENGTH: 3,
		MIN_PASSWORD_LENGTH: 6
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
