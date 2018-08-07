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
		router.init();
		
	})
	.catch(error => console.log(error));
}

let rootElement = document.getElementById("rootElement");
init();