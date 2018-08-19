export const Router = (function() {
	let instance;

	function createInstance(routes, rootElement) {
		if (instance) {
			throw "Instance already exists";
		}
		instance = new RouterClass(routes, rootElement);
	}
	
	function getInstance() {
		if (!instance) {
			throw "Instance does not exist";
		}
		return instance;
	}
	
	return {
		createInstance: (routes, rootElement) => createInstance(routes, rootElement),
		getInstance: () => {return getInstance();}
	};
})();


class RouterClass {
	constructor(routes, rootElement) {
		this.routes = routes;
		this.rootElement = rootElement;
	}
	
	init() {
		let scope = this;
		window.addEventListener('hashchange', function(event) {
			scope.onHashChanged(scope, scope.routes);
		});
		this.onHashChanged();
	}
	
	onHashChanged() {
		for (let i = 0; i < this.routes.length; i++) {
			let route = this.routes[i];
			let goToRoute = (location.hash.length > 0 && route.isActiveRoute(location.hash.substr(1))) || 
				(window.location.hash.length < 1 && route.defaultRoute);
			if (goToRoute) {
				this.rootElement.innerHTML = route.htmlTemplate;
				route.controller.init();
				break;
			}
		}
	}
	
	pushRoute(routeName) {
		location.href = "#" + routeName;
	}
	
	replaceRoute(routeName) {
		history.replaceState(null, null, "index.html#" + routeName);
		this.onHashChanged();
	}
};

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