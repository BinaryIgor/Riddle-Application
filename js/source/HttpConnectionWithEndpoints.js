export function HttpConnectionWithEndpoints(httpConnection, endpoints) {
	
	const _httpConnection = httpConnection;
	const _endpoints = endpoints;
	
	this.executeGet = (endpointKey, token = "") => _httpConnection.executeGet(_endpoints.value(endpointKey), "", token);
	this.executePost = (endpointKey, data, token = "") => _httpConnection.executePost(_endpoints.value(endpointKey), data, token);
	this.executePut = (endpointKey, data, token = "") => _httpConnection.executePut(_endpoints.value(endpointKey), data, token);	
	this.executeDelete = (endpointKey, token = "") => _httpConnection.executeDelete(_endpoints.value(endpointKey), "", token);
};