import {ROUTES} from "./constants/constants.js";
import {Router, Route} from "./router/router.js";
import {templates} from "./templates/templates.js";
import {ModalController} from "./controller/modal-controller.js";
import {SignUpController} from "./controller/sign-up-controller.js";
import {SignInController} from "./controller/sign-in-controller.js";
import {MainPageController} from "./controller/main-page-controller.js";


function init() {
	let routes = [];
	let modalController = new ModalController();
	routes.push(new Route(ROUTES.SIGN_IN, templates.signIn, new SignInController(modalController), true));
	routes.push(new Route(ROUTES.SIGN_UP, templates.signUp, new SignUpController(modalController)));
	routes.push(new Route(ROUTES.MAIN_PAGE, templates.mainPage, new MainPageController()));
	let router = new Router(routes, rootElement);
	router.init();
}

let rootElement = document.getElementById("rootElement");
init();