export function SignInPage(router, signInPage, nextPage, modal, strings, signingIn, userActivation, tokens) {

	const template = 
		`<div class="flex-container-full-screen">
		<h1>Riddle</h1>
		<form class="center-full-width">
			<input type="text" placeholder="${strings.value("nameEmail")}"></input>
			</br>
			<input type="password" placeholder="${strings.value("password")}"></input>
			</br>
			<button id="signInButton">${strings.value("signIn")}</button>
		</form>
		<a href="#${signInPage}">${strings.value("newSignUp")}</a>
		${modal.template()}
	</div>`; 
	const name = "sign-in";
	
	const _router = router;
	const _nextPage = nextPage;
	const _modal = modal;
	const _strings = strings;
	const _signingIn = signingIn;
	const _userActivation = userActivation;
	const _tokens = tokens;
	let _signInInputs = {};
	
	this.enter = () => {
		document.body.innerHTML = template;
		let form = document.querySelector("form");
			form.addEventListener("submit", function(event) {
			event.preventDefault();
		});
		let inputs = form.getElementsByTagName("input");
		_signInInputs = {nameOrEmail: inputs[0], password: inputs[1]};
		document.getElementById("signInButton").onclick = () => signInButtonClicked();
		_modal.bind();
		if (_userActivation.can()) {
			_userActivation.activate().then(response => userActivated(response))
			.catch(exception => _modal.show(strings.value("signUpActivationFailureTitle"), exception));
		}
	};

	function signInButtonClicked() {
		_signingIn.perform(_signInInputs.nameOrEmail.value, _signInInputs.password.value).then(response => {
			if (!response) {
				_modal.show(strings.value("signInFailureTitle"), strings.value("signInFailureUserDoesNotExist"));
				return;
			}
			let tokensData = JSON.parse(response); 
			_tokens.save(tokensData);
			_router.replace(_nextPage);
		}).catch(exception => _modal.show(strings.value("signInFailureTitle"), exception.message));
	};


	function userActivated(response) {
		let username = JSON.parse(response).username;
		if (!username) {
			_modal.show(strings.value("signUpActivationFailureTitle"), response);
			return;
		}
		_modal.show(strings.valueWithParam("signUpActivationSuccessTitle", username), strings.value("signUpActivationSuccessText"));
		_router.replace(name);
	};
	
	this.name = () => name;
};