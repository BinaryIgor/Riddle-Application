export function AuthenticatedHttpConnectionWithEndpoints(tokens, httpConnectionWithEndpoints) {

	const _tokens = tokens;
	const _httpConnectionWithEndpoints = httpConnectionWithEndpoints;
	
	this.executeGet = (endpointKey) => executeValidated(() => {
		return _httpConnectionWithEndpoints.executeGet(endpointKey, _tokens.accessToken());
	});
	
	this.executePost = (endpointKey, data) => executeValidated(() => {
		return _httpConnectionWithEndpoints.executePost(endpointKey, data, _tokens.accessToken());
	});
	
	this.executePut = (endpointKey, data) => executeValidated(() => {
		return _httpConnectionWithEndpoints.executePut(endpointKey, data, _tokens.accessToken());
	});
	
	this.executeDelete = (endpointKey, token) => executeValidated(() => {
		return _httpConnectionWithEndpoints.executeDelete(endpointKey, "", _tokens.accessToken());
	});
	
	function executeValidated(toExecute) {
		if (hasAccessExpired()) {
			return _httpConnectionWithEndpoints.executePost("refreshToken", JSON.stringify({value: _tokens.refreshToken()}))
				.then(response => {
					_tokens.saveAccessToken(JSON.parse(response));
					return toExecute();
				});
		}
		return toExecute();
	};
	
	function hasAccessExpired() {
		let difference = _tokens.expirationDate() - (new Date().getTime());
		return difference < 5000;
	}
	
}