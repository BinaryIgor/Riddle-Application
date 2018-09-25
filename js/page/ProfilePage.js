export function ProfilePage(router, strings, modal, authenticatedHttpConnectionWithEndpoints) { 
	
	const template = 
		`<div class="flex-container-full-screen-no-wrap">
			<img class="profile-img"></img>
			<input type="file"></input>
			<button style="display: none">${strings.value("save")}</button>
			<div class="tile" id="email"></div>
				<form class="center-full-width" style="display: none">
					<input type="email" placeholder="${strings.value("newEmail")}"></input>
					</br>
					<button>${strings.value("save")}</button>
					</br>
				</form>
			<div class="tile" id="name"></div>
				<form class="center-full-width" style="display: none">
					<input type="text" placeholder="${strings.value("newName")}"></input>
					</br>
					<button>${strings.value("save")}</button>
					</br>
				</form>
			<div class="tile" id="password">?</div>
				<form class="center-full-width" style="display: none">
					<input type="password" placeholder="${strings.value("oldPassword")}"></input>
					</br>
					<input type="password" placeholder="${strings.value("newPassword")}"></input>
					</br>
					<button>${strings.value("save")}</button>
					</br>
			</form>
			${modal.template()}
		</div>`;

	const name = "profile";
	
	const _router = router;
	const _strings = strings;
	const _modal = modal;
	const _authenticatedHttpConnectionWithEndpoints = authenticatedHttpConnectionWithEndpoints;
	let _image = {}, _tiles = [], _forms = [], _inputs = [], _buttons = [];
	let _profileImgRotation = 90;
	let _profile = {};
	
	this.enter = () => {
		document.body.innerHTML = template;
		_modal.bind();
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
	
	//TODO multipart response for getting image needed
	function userProfile() {
		_authenticatedHttpConnectionWithEndpoints.executeGet("userProfile").then(profile => {
			if (!profile) {
				_modal.show(strings.value("requestFailureTitle") , strings.value("noContent"));
				return;
			}
			_profile = JSON.parse(profile);
			_tiles.email.appendChild(document.createTextNode(_profile.email));
			_tiles.name.appendChild(document.createTextNode(_profile.name));
			_image.src = "images/background.jpg";
		}).catch(exception => _modal.show(strings.value("requestFailureTitle"), exception.message));
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
