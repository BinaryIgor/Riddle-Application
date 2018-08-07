import {Router, Route} from "../router/router.js";
import {executeGetRequest} from "../service/http-service.js";

function init() {
	let routes = [];
	executeGetRequest('templates/sign-in.html')
	.then(htmlTemplate => {
		routes.push(new Route("sign-in", htmlTemplate, true));
		return executeGetRequest('templates/sign-up.html');
	})
	.then(htmlTemplate => {
		routes.push(new Route("sign-up", htmlTemplate)); 
		let router = new Router(routes, rootElement);
		router.init(() => onHashChangeListener());
		let inputs = document.querySelectorAll("input");
		signInInputs = {usernameEmail: inputs[0], password: inputs[1]};
		document.getElementById("signInButton").onclick = () => onSignInButtonClickListener();
	})
	.catch(error => console.log(error));
}

function onHashChangeListener() {
	console.log("Hash has changed!");
	if(signUpInputs) {
		return;
	}
	let inputs = document.querySelectorAll("input");
	signUpInputs = {email: inputs[0], username: inputs[1], password: inputs[2]};
	document.getElementById("signUpButton").onclick = () => onSignUpButtonClickListener();
}


function onSignInButtonClickListener() {
	let user = {usernameEmail: signInInputs.usernameEmail.value, password: signInInputs.password.value};
	console.log(user);
}

function onSignUpButtonClickListener() {
	let user = {email: signUpInputs.email.value, username: signUpInputs.username.value, password: signUpInputs.password.value};
	console.log(user);
}

let rootElement = document.getElementById("rootElement");
var signInInputs, signUpInputs;
init();