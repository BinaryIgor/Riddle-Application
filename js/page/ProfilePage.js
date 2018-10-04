export function ProfilePage(router, strings, modal, userProfile, tokens) { 
	
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
	const _userProfile = userProfile;
	const _tokens = tokens;
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
		for (let form of forms) {
			form.addEventListener("submit", function(event) {
				event.preventDefault();
			});
		}
		let inputs = document.querySelectorAll("input");
		_inputs = {image: inputs[0], email: inputs[1], name: inputs[2], password: inputs[3]};
		let buttons = document.querySelectorAll("button");
		_buttons = {saveImage: buttons[0], saveEmail: buttons[1], saveName: buttons[2], savePassword: buttons[3]};
		_inputs.image.onchange = function() {
			_image.src = URL.createObjectURL(this.files[0]);
			_buttons.save.style.display = "inline";
		};
		getProfile();
		_tiles.email.onclick = () => hideOrShow(_forms.email);
		_tiles.name.onclick = () => hideOrShow(_forms.name);
		_tiles.password.onclick = () => hideOrShow(_forms.password);
		_buttons.saveEmail.onclick = () => saveEmail();
		_buttons.saveName.onclick = () => saveName();
		_buttons.savePassword.onclick = () => savePassword();
	};
	
	//TODO multipart response for getting needed image
	function getProfile() {
		_userProfile.profile().then(profile => {
			if (!profile) {
				_modal.show(strings.value("requestFailureTitle") , strings.value("noContent"));
				return;
			}
			_profile = JSON.parse(profile);
			renderProfile();
		}).catch(exception => _modal.show(strings.value("requestFailureTitle"), exception.message));
	};
	
	function renderProfile() {
		let children = _tiles.email.childNodes;
		if (children.length < 1) {
			_tiles.email.appendChild(document.createTextNode(_profile.email));
		} else {
			_tiles.email.replaceChild(document.createTextNode(_profile.email), children[0]);
		}
		children = _tiles.name.childNodes;
		if (children.length < 1) {
			_tiles.name.appendChild(document.createTextNode(_profile.name));
		} else {
			_tiles.name.replaceChild(document.createTextNode(_profile.name), children[0]);
		}
		_image.src = "images/background.jpg";
		_inputs.name.value = "";
		_inputs.email.value = "";
		_inputs.password.value = "";
	}
	
	function saveEmail() {
		_userProfile.saveEmail(_inputs.email.value).then(response => {
			getProfile();
			_modal.show(strings.value("editEmailSuccess"));
		}).catch(exception => _modal.show(strings.value("editProfileFailure"), exception.message));
	};
	
	function saveName() {
		_userProfile.saveName(_inputs.name.value).then(response => {
			let tokensData = JSON.parse(response);
			_tokens.save(tokensData);
			getProfile();
			_modal.show(strings.value("editNameSuccess"));
		}).catch(exception => _modal.show(strings.value("editProfileFailure"), exception.message));
	};
	
	function savePassword() {
		_userProfile.savePassword(_inputs.password.value).then(response => {
			getProfile();
			_modal.show(strings.value("editPasswordSuccess"));
		}).catch(exception => _modal.show(strings.value("editProfileFailure"), exception.message));
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
