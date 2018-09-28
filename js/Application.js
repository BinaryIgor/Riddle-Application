import {Router} from "./router/Router.js";
import {Endpoints} from "./source/Endpoints.js";
import {Strings} from "./source/Strings.js";
import {HttpConnection} from "./source/HttpConnection.js";
import {HttpConnectionWithEndpoints} from "./source/HttpConnectionWithEndpoints.js";
import {AuthenticatedHttpConnectionWithEndpoints} from "./source/AuthenticatedHttpConnectionWithEndpoints.js";
import {Tokens} from "./storage/Tokens.js";
import {CurrentUrl} from "./url/CurrentUrl.js";
import {ToActivateUser} from "./user/ToActivateUser.js";
import {UserProfile} from "./user/UserProfile.js";
import {Modal} from "./modal/Modal.js";
import {InputModal} from "./modal/InputModal.js";
import {SignUpPage} from "./page/SignUpPage.js";
import {SignInPage} from "./page/SignInPage.js";
import {MainPage} from "./page/MainPage.js";
import {ProfilePage} from "./page/ProfilePage.js";


const endpoints = new Endpoints("http://localhost:8000/riddle/");
const strings = new Strings();
const httpConnection = new HttpConnection();
const httpConnectionWithEndpoints = new HttpConnectionWithEndpoints(httpConnection, endpoints);

const currentUrl = new CurrentUrl();
const toActivateUser = new ToActivateUser(currentUrl, httpConnectionWithEndpoints);

const tokens = new Tokens();
const authenticatedHttpConnectionWithEndpoints = new AuthenticatedHttpConnectionWithEndpoints(tokens, httpConnectionWithEndpoints);

const modal = new Modal();
const inputModal = new InputModal(strings);

const router = new Router();

const profilePage = new ProfilePage(router, strings, modal, new UserProfile(authenticatedHttpConnectionWithEndpoints, strings));
router.add(profilePage);

const mainPage = new MainPage(router, profilePage.name(), strings, tokens);
router.add(mainPage);

const signUpPage = new SignUpPage(router, modal, strings, httpConnectionWithEndpoints);
router.add(signUpPage);

const signInPage = new SignInPage(router, mainPage.name(), signUpPage.name(), modal, strings, httpConnectionWithEndpoints, toActivateUser, tokens);
router.addDefault(signInPage);

router.start();