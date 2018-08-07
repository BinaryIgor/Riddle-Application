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
const HTTP_STATUS_OK = 200;
const HTTP_STATUS_CREATED = 201;

function executeRequest(url, method, data) {
	return new Promise(resolve => {
		let xmlHttpRequest = new XMLHttpRequest();
		xmlHttpRequest.onreadystatechange = function() {
			if(this.readyState != REQUEST_STATE_READY) {
				return;
			}
			if (this.status == HTTP_STATUS_OK || this.status == HTTP_STATUS_CREATED) {
				resolve(this.responseText);
			} else {
				throw this.responseText;
			}
		};
		xmlHttpRequest.open(method, url, true);
		if (data) {
			xmlHttpRequest.send(data);
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

