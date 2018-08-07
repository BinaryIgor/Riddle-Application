export function renderElement(type, properties, ...children) {
	let dom = document.createElement(type);
	if (properties) {
		Object.assign(dom, properties);
	}
	for (let child of children) {
		if (typeof child == "string") {
			dom.appendChild(document.createTextNode(child));
		} else {
			dom.appendChild(child);
		}
	}
	return dom;
}