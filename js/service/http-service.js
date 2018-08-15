const HTTP_METHODS = {
	GET: "GET",
	PUT: "PUT",
	POST: "POST",
	DELETE: "DELETE"
};
const HTTP_HEADERS_KEYS = {
	CONTENT_TYPE: "Content-type",
	AUTHORIZATION: "Authorization"
};	
const HTTP_HEADERS_VALUES = {
	JSON: "application/json",
	MULTIPART: "multipart/form-data",
	BEARER: "Bearer "	
};
const REQUEST_STATE_READY = 4;
const HTTP_STATUS_OK_MIN = 200;
const HTTP_STATUS_OK_MAX = 299;

function executeRequest(url, method, data) {
	return new Promise((resolve, reject) => {
		let xmlHttpRequest = new XMLHttpRequest();
		xmlHttpRequest.onload = function() {
			if (this.status >= HTTP_STATUS_OK_MIN && this.status <= HTTP_STATUS_OK_MAX) {
				resolve(this.responseText);
			} else {
				reject(this.responseText);
			}
		};
		xmlHttpRequest.onerror = function() {
			reject(this.responseText);
		};
		xmlHttpRequest.open(method, url, true);
		if (data) {
			xmlHttpRequest.send(JSON.stringify(data));
		} else {
			xmlHttpRequest.send();
		}
	});
}

export function executeGetRequest(url) {
	return executeRequest(url, HTTP_METHODS.GET, null);
}

export function executePostRequest(url, data) {
	return executeRequest(url, HTTP_METHODS.POST, data);
}

export function executePutRequest(url, data) {
	return executeRequest(url, HTTP_METHODS.PUT, data);
}

export function executeDeleteRequest(url) {
	return executeRequest(url, HTTP_METHODS.DELETE, null);
}

