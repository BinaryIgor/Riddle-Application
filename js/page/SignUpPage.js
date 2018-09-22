export function SignUpPage(router, modal, strings, signingUp) {
	
	const template = 
		`<div class="flex-container-full-screen">
		<h1>Sign Up</h1>
		<form class="center-full-width">
			<input type="email" placeholder="${strings.value("email")}"></input>
			</br>
			<input type="text" placeholder="${strings.value("name")}"></input>
			</br>
			<input type="password" placeholder="${strings.value("password")}"></input>
			</br>
			<button id="signUpButton">${strings.value("signUp")}</button>
		</form>
		${modal.template()}
	</div>`; 
	const name = "sign-up";
	
	const _router = router;
	const _modal = modal;
	const _strings = strings;
	const _signingUp = signingUp;
	let _inputs;
	
	this.enter = () => {
		document.body.innerHTML = template;
		let form = document.querySelector("form");
		form.addEventListener("submit", function(event) {event.preventDefault();});
		let inputs = form.getElementsByTagName("input");
		_inputs = {email: inputs[0], name: inputs[1], password: inputs[2]};
		document.getElementById("signUpButton").onclick = () => signUpButtonClicked();
		_modal.bind();
	};

	function signUpButtonClicked() {
		signingUp.perform(_inputs.email.value, _inputs.name.value, _inputs.password.value)
			.then(response => {
				_inputs.email.value = _inputs.name.value = _inputs.password.value = "";
				_modal.show(strings.value("signUpSuccessTitle"), strings.value("signUpSuccessText"));
			}).catch(exception => _modal.show(strings.value("signUpFailureTitle"), exception.message));
	};
	
	this.name = () => name;
	
};

