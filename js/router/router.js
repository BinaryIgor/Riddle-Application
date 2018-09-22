export function Router(pageName = "index.html") {
	
	const _pageName = pageName;
	let _defaultRoute = {};
	const _routes = [];
	
	this.addDefault = (defaultRoute) => {
		_defaultRoute = defaultRoute;
	};
	
	this.add = (route) => {
		_routes.push(route);
	};
	
	this.start = () =>  {
		let scope = this;
		window.addEventListener('hashchange', function(event) {
			hashChanged.call(scope);
		});
		hashChanged();
	};
	
	function hashChanged() {
		let goToRoute = false;
		for (let i = 0; i < _routes.length; i++) {
			let route = _routes[i];
			goToRoute = location.hash.length > 0 && route.name() == location.hash.substr(1);
			if (goToRoute) {
				route.enter();
				break;
			}
		}
		if (!goToRoute) {
			_defaultRoute.enter();
		}
	};
	
	this.push = (routeName) => location.href = "#" + routeName;
	
	this.pushDefault = () => this.push(_defaultRoute.name());
	
	this.replace = (routeName) => {
		let previousHash = location.hash.substr(1);
		history.replaceState(null, null, pageName + "#" + routeName);
		if (previousHash != routeName) {
			hashChanged();
		}
	};
	
	this.replaceWithDefault = () => this.replace(_defaultRoute.name());
};