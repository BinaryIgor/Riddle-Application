//TODO validate token lifetime nad refresh it accordingly
export function AuthenticatedHttpConnectionWithEndpoints(tokens, httpConnectionWithEndpoints) {

	const _tokens = tokens;
	const _httpConnectionWithEndpoints = httpConnectionWithEndpoints;
	
	this.executeGet = (endpointKey) => {
		let tokensData = _tokens.tokens();
		return _httpConnectionWithEndpoints.executeGet(endpointKey, tokensData.accessToken);
	};
	
	this.executePost = (endpointKey, data) => {
		let tokensData = _tokens.tokens();
		return _httpConnectionWithEndpoints.executePost(endpointKey, data, tokensData.accessToken);
	};
	
	this.executePut = (endpointKey, data) => {
		let tokensData = _tokens.tokens();
		return _httpConnectionWithEndpoints.executePut(endpointKey, data, tokensData.accessToken);
	};
	
	this.executeDelete = (endpointKey, token) => {
		let tokensData = _tokens.tokens();
		return _httpConnectionWithEndpoints.executeDelete(endpointKey, "", tokensData.accessToken);
	};
}