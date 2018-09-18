export function UserActivation(currentUrl, httpConnectionWithEndpoints) {
	
	const _currentUrl = currentUrl;
	const _httpConnectionWithEndpoints = httpConnectionWithEndpoints;
	let _activationData = {};
	
	this.can = () => {
		let urlParams = _currentUrl.params();
		if (Object.keys(urlParams).length < 2) {
			return false;
		}
		let id = urlParams["id"];
		let toActivateHash = urlParams["activate"];
		if (!id || id < 1) {
			return false;
		}
		if (!toActivateHash || toActivateHash.length < 1) {
			return false;
		}
		_activationData = {id: id, hash: toActivateHash};
		return true;
	};
	
	this.activate = () {
		if (Object.keys(_activationData).length < 1) {
			throw "can() method has to be called first and return a positive result";
		}
		return httpConnectionWithEndpoints.executePost("signUpActivate", _activationData);
	};
}