export function HttpConnection() {
	
	const methods = {
		get: "GET",
		put: "PUT",
		post: "POST",
		delete: "DELETE"
	};
	
	const headersKeys = {
		contentType: "Content-type",
		authorization: "Authorization"
	};
	
	const headersValues = {
		jsonContentType: "application/json",
		multipartContentType: "multipart/form-data",
		tokenPrefix: "Bearer "	
	};
	
	const responseTypes = {
		text: "text",
		blob: "blob",
		json: "json"
	};
	
	const goodStatusMinValue = 200;
	const goodStatusMaxValue = 299;

	function execute(url, method, data, token) {
		return new Promise((resolve, reject) => {
			let httpRequest = new XMLHttpRequest();
			httpRequest.onload = function() {
				if (this.status >= goodStatusMinValue && this.status <= goodStatusMaxValue) {
					resolve(this.response);
				} else {
					reject(new Error(this.response));
				}
			};
			httpRequest.onerror = function() {
				reject(new Error(this.response));
			};
			httpRequest.open(method, url, true);
			if (token && token.length > 0) {
				httpRequest.setRequestHeader(headersKeys.authorization, headersValues.tokenPrefix + token);
			}
			if (data && data.length > 0) {
				httpRequest.send(data);
			} else {
				httpRequest.send();
			}
		});
	};
	
	this.executeGet = (url, token = "") => execute(url, methods.get, "", token);
	this.executePost = (url, data, token = "") => execute(url, methods.post, data, token);
	this.executePut = (url, data, token = "") => execute(url, methods.put, data, token);	
	this.executeDelete = (url, token = "") => execute(url, methods.get, "", token);
};