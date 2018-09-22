export function ProfilePage(router, strings, inputModal) { 
	
	const template = 
		`<div class="flex-container-full-screen">
			<img class="profile-img"></img>
			<input type="file"></input>
			<button style="display: none">${strings.value("save")}</button>
			<div class="tile" id="email"></div>
				<form class="center-full-width" style="display: none">
					<input type="email"></input>
					</br>
					<button>${strings.value("save")}</button>
				</form>
			<div class="tile" id="name"></div>
				<form class="center-full-width" style="display: none">
					<input type="text"></input>
					</br>
					<button>${strings.value("save")}</button>
				</form>
			<div class="tile" id="password"></div>
				<form class="center-full-width" style="display: none">
					<input type="password"></input>
					</br>
					<button>${strings.value("save")}</button>
			</form>
			${inputModal.template()}
		</div>`;

	const name = "profile";
	
	const _router = router;
	const _strings = strings;
	const _inputModal = inputModal;
	let _image = {}, _tiles = [], _forms = [], _inputs = [], _buttons = [];
	let _profileImgRotation = 90;
	
	this.enter = () => {
		document.body.innerHTML = template;
		_inputModal.bind();
		_image = document.getElementsByClassName("profile-img")[0];
		let tiles = document.getElementsByClassName("tile");
		_tiles = {email: tiles[0], name: tiles[1], password: tiles[2]};
		let forms = document.querySelectorAll("form");
		_forms = {email: forms[0], name: forms[1], password: forms[2]};
		let inputs = document.querySelectorAll("input");
		_inputs = {image: inputs[0], email: inputs[1], name: inputs[2], password: inputs[3]};
		let buttons = document.querySelectorAll("button");
		_buttons = {save: buttons[0], editEmail: buttons[1], editName: buttons[2], editPassword: buttons[3]};
		_inputs.image.onchange = function() {
			_image.src = URL.createObjectURL(this.files[0]);
			_buttons.save.style.display = "inline";
		};
		userProfile();
		_tiles.email.onclick = () => hideOrShow(_forms.email);
		_tiles.name.onclick = () => hideOrShow(_forms.name);
		_tiles.password.onclick = () => hideOrShow(_forms.password);
	};
	
	function userProfile() {
		let profile = {email: "Mocked@gmail.com", name: "Mock",  password: "dadafa3454e", image: "images/background.jpg"};
		_image.src = profile.image;
		_tiles.email.appendChild(document.createTextNode(profile.email));
		_inputs.email.value = profile.email;
		_tiles.name.appendChild(document.createTextNode(profile.name));
		_inputs.name.value = profile.name;
		_tiles.password.appendChild(document.createTextNode("passs"));
		_inputs.password.value = profile.password;
	};
	
	function hideOrShow(element) {
		if (element.style.display == "none") {
			element.style.display = "block";
		} else {
			element.style.display = "none";
		}
	};
	
	this.name = () => name;
};
