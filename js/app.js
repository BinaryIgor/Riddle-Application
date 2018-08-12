import {ROUTES} from "./constants/constants.js";
import {Router, Route} from "./router/router.js";
import {templates} from "./templates/templates.js";
import {ModalController} from "./controller/modal-controller.js";
import {InputModalController} from "./controller/input-modal-controller.js";
import {SignUpController} from "./controller/sign-up-controller.js";
import {SignInController} from "./controller/sign-in-controller.js";
import {MainPageController} from "./controller/main-page-controller.js";
import {ProfileController} from "./controller/profile-controller.js";


function init() {
	let routes = [];
	let modalController = new ModalController();
	let inputModalController = new InputModalController();
	routes.push(new Route(ROUTES.SIGN_IN, templates.signIn, new SignInController(modalController), true));
	routes.push(new Route(ROUTES.SIGN_UP, templates.signUp, new SignUpController(modalController)));
	routes.push(new Route(ROUTES.MAIN_PAGE, templates.mainPage, new MainPageController()));
	routes.push(new Route(ROUTES.PROFILE, templates.profile, new ProfileController(inputModalController)));
	let router = new Router(routes, document.body);
	router.init();
}

init();