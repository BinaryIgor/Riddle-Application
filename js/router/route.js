export class Route {
	constructor(name, htmlTemplate, controller, defaultRoute) {
		this.name = name;
		this.htmlTemplate = htmlTemplate;
		this.controller = controller;
		this.defaultRoute = defaultRoute;
	}
	
	isActiveRoute(hashedPath) {
		return hashedPath == this.name;
	}
}