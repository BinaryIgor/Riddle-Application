export function Router(defaultRoute, routes, rootElement) {
	
	let _defaultRote = defaultRoute;
	let _routes = routes;
	let _rootElement = rootElement;
	
	this.start = () =>  {
		let scope = this;
		window.addEventListener('hashchange', function(event) {
			onHashChanged.call(scope);
		});
		onHashChanged();
	}
	
	function onHashChanged() {
		let goToRoute = false;
		for (let i = 0; i < _routes.length; i++) {
			let route = _routes[i];
			goToRoute = location.hash.length > 0 && route.name == location.hash.substr(1);
			if (goToRoute) {
				route.init(_rootElement);
				break;
			}
		}
		if (!goToRoute) {
			_defaultRote.init(_rootElement);
		}
	}
	
	this.push = (routeName) => {
		location.href = "#" + routeName;
	}
	
	this.replace = (routeName) => {
		history.replaceState(null, null, "index.html#" + routeName);
		onHashChanged();
	}
};