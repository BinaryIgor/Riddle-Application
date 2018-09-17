function HttpConnection() {
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
	
	const goodStatusMinValue = 200;
	const goodStatusMaxValue = 299;

	function execute(url, method, data, tokensData) {
		return new Promise((resolve, reject) => {
			let httpRequest = new XMLHttpRequest();
			if (Object.keys(tokensData).length > 0) {
				httpRequest.setRequestHeader(headersKeys.authorization, headersValues.tokenPrefix + tokensData.accessToken);
			}
			httpRequest.onload = function() {
				if (this.status >= goodStatusMinValue && this.status <= goodStatusMaxValue) {
					console.log("response " + this.response);
					resolve(this.responseText ? JSON.parse(this.responseText) : this.responseText);
				} else {
					console.log("response " + this.response);
					reject(this.responseText);
				}
			};
			httpRequest.onerror = function() {
				console.log("response " + this.responseText);
				reject(this.responseText);
			};
			httpRequest.open(method, url, true);
			if (Object.keys(data).length > 0) {
				httpRequest.send(JSON.stringify(data));
			} else {
				httpRequest.send();
			}
		});
	};
	
	
	this.executeGet = (url, tokensData = {}) => execute(url, methods.get, {}, tokensData);
	this.executePost = (url, data, tokensData = {}) => execute(url, methods.post, data, tokensData);
	this.executePut = (url, data, tokensData = {}) => execute(url, methods.put, data, tokensData);	
	this.executeDelete = (url, tokensData = {}) => execute(url, methods.get, {}, tokensData);
};