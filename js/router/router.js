export function Router() {
	
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
			onHashChanged.call(scope);
		});
		onHashChanged();
	};
	
	function onHashChanged() {
		let goToRoute = false;
		for (let i = 0; i < _routes.length; i++) {
			let route = _routes[i];
			console.log(route.name());
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
	
	this.push = (routeName) => {
		location.href = "#" + routeName;
	};
	
	this.replace = (routeName) => {
		history.replaceState(null, null, "index.html#" + routeName);
		onHashChanged();
	};
};