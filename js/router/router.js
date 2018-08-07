export class Router {
	constructor(routes, rootElement) {
		this.routes = routes;
		this.rootElement = rootElement;
	}
	init(onHashChangedListener) {
		let scope = this;
		window.addEventListener('hashchange', function(event) {
			scope.hasChanged(scope, scope.routes);
			onHashChangedListener();
		});
		this.hasChanged();
	}
	hasChanged() {
		for (let i = 0; i < this.routes.length; i++) {
			let route = this.routes[i];
			let goToRoute = (window.location.hash.length > 0 && route.isActiveRoute(window.location.hash.substr(1))) || 
				(window.location.hash.length < 1 && route.defaultRoute);
			if (goToRoute) {
				rootElement.innerHTML = route.htmlTemplate;
				break;
			}
		}
	}
};
export class Route {
	constructor(name, htmlTemplate, defaultRoute) {
		this.name = name;
		this.htmlTemplate = htmlTemplate;
		this.defaultRoute = defaultRoute;
	}
	isActiveRoute(hashedPath) {
		return hashedPath.replace('#', '') == this.name;
	}
}