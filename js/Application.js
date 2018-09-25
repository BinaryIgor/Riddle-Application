import {Router} from "./router/Router.js";
import {Endpoints} from "./source/Endpoints.js";
import {Strings} from "./source/Strings.js";
import {HttpConnection} from "./source/HttpConnection.js";
import {HttpConnectionWithEndpoints} from "./source/HttpConnectionWithEndpoints.js";
import {AuthenticatedHttpConnectionWithEndpoints} from "./source/AuthenticatedHttpConnectionWithEndpoints.js";
import {Tokens} from "./storage/Tokens.js";
import {CurrentUrl} from "./url/CurrentUrl.js";
import {SigningIn} from "./action/SigningIn.js";
import {SigningUp} from "./action/SigningUp.js";
import {UserActivation} from "./action/UserActivation.js";
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

const signingIn = new SigningIn(httpConnectionWithEndpoints, strings);
const signingUp = new SigningUp(httpConnectionWithEndpoints, strings);
const currentUrl = new CurrentUrl();
const userActivation = new UserActivation(currentUrl, httpConnectionWithEndpoints);

const tokens = new Tokens();
const authenticatedHttpConnectionWithEndpoints = new AuthenticatedHttpConnectionWithEndpoints(tokens, httpConnectionWithEndpoints);

const modal = new Modal();
const inputModal = new InputModal(strings);

const router = new Router();

const profilePage = new ProfilePage(router, strings, modal, authenticatedHttpConnectionWithEndpoints);
router.add(profilePage);

const mainPage = new MainPage(router, profilePage.name(), strings, tokens);
router.add(mainPage);

const signUpPage = new SignUpPage(router, modal, strings, signingUp);
router.add(signUpPage);

const signInPage = new SignInPage(router, signUpPage.name(), mainPage.name(), modal, strings, signingIn, userActivation, tokens);
router.addDefault(signInPage);

router.start();