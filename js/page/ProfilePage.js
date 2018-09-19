export function ProfilePage(router, parentDom, strings, inputModal) { 
	
	const template = 
		`<div class="flex-container-full-screen">
		<img class="profile-img"></img>
		<div class="center-full-width">
			<input type="file"></input>
			<button style="display: none">${strings.value("save")}</button>
			</br>
			<input type="email" readonly></input>
			<button>${strings.value("edit")}</button>
			</br>
			<input type="text" readonly></input>
			<button>${strings.value("edit")}</button>
			</br>
			<input type="password" readonly></input>
			<button>${strings.value("edit")}</button>
		</div>
		${inputModal.template()}
	</div>`;
	const name = "profile";
	
	const _router = router;
	const _parentDom = parentDom;
	const _strings = strings;
	const _inputModal = inputModal;
	let _image = {}, _inputs = [], _buttons = [];
	
	this.enter = () => {
		_inputModalController.bind();
		_image = document.querySelector("img");
		_image.src = "images/background.jpg";
		let inputs = document.querySelectorAll("input");
		_inputs = {image: inputs[0], email: inputs[1], name: inputs[2], password: inputs[3]};
		let buttons = document.querySelectorAll("button");
		_buttons ={save: buttons[0], editEmail: buttons[1], editName: buttons[2], editPassword: buttons[3]};
		_inputs.image.onchange = function() {
			_image.src = URL.createObjectURL(this.files[0]);
			_buttons.save.style.display = "inline";
		};
	}
	
	this.name = () => name;
};
