import {Router, Route} from "./router/router.js";
import {templates} from "./templates/templates.js";
import {SignUpController} from "./controller/sign-up-controller.js";
import {SignInController} from "./controller/sign-in-controller.js";


function init() {
	let routes = [];
	routes.push(new Route("sign-in", templates.signInTemplate, new SignInController(), true));
	routes.push(new Route("sign-up", templates.signUpTemplate, new SignUpController()));
	let router = new Router(routes, rootElement);
	router.init();
}

let rootElement = document.getElementById("rootElement");
init();