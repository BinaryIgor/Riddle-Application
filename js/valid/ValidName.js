export function ValidName(strings, name) {
	
	const _strings = strings;
	const _name = name;
	
	this.value = () => {
		if (_name.length < 3) {
			throw new Error(_strings.valueWithParam("invalidUsername", 3));
		}
		return _name;
	};
}