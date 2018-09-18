export function Router(defaultRoute, routes) {
	
	const _defaultRote = defaultRoute;
	const _routes = routes;
	
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
				route.render();
				break;
			}
		}
		if (!goToRoute) {
			_defaultRoute.render();
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