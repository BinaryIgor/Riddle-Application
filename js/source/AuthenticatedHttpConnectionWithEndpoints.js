export function AuthenticatedHttpConnectionWithEndpoints(tokens, httpConnectionWithEndpoints) {

	const _tokens = tokens;
	const _httpConnectionWithEndpoints = httpConnectionWithEndpoints;
	let _tokensData = {};
	
	this.executeGet = (endpointKey) => {
		if (Object.keys(_tokensData).length < 1) {
			_tokensData = _tokens.readTokens();
		}
		return _httpConnectionWithEndpoints.executeGet(endpointKey, _tokensData.accessToken);
	};
	
	this.executePost = (endpointKey, data) => {
		if (Object.keys(_tokensData).length < 1) {
			_tokensData = _tokens.readTokens();
		}
		return _httpConnectionWithEndpoints.executePost(endpointKey, data, _tokensData.accessToken);
	};
	
	this.executePut = (endpointKey, data) => {
		if (Object.keys(_tokensData).length < 1) {
			_tokensData = _tokens.readTokens();
		}
		return _httpConnectionWithEndpoints.executePut(endpointKey, data, _tokensData.accessToken);
	};
	
	this.executeDelete = (endpointKey, token) => {
		if (Object.keys(_tokensData).length < 1) {
			_tokensData = _tokens.readTokens();
		}
		return _httpConnectionWithEndpoints.executeDelete(endpointKey, "", _tokensData.accessToken);
	};
}