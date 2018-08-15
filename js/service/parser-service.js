export function getCurrentUrlParams() {
	let url = location.search.substr(1).split('&');
	if (url == ""){
		return {};
	}
	let urlParams = {};
	for (let i = 0; i < url.length; i++){
		let param = url[i].split('=', 2);
		if (param.length == 1) {
			urlParams[param[0]] = "";
		}
		else {
			urlParams[param[0]] = param[1];
		}
	}
	return urlParams;
};