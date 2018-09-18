export function SignInPage(parentDom, router, nextPage, modal, strings, signingIn, userActivation) {

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
		<a href="#sign-up">${strings.value("newSignUp")}</a>
		${modal.template()}
	</div>`; 
	
	const _parentDom = parentDom;
	const _router = router;
	const _nextPage = nextPage;
	const _modal = modal;
	const _strings = strings;
	const _signingUp = signingUp;
	const _userActivation = userActivation;
	let _signInInputs = {};
	
	this.render = () => {
		_parentDom.innerHTML = template;
		let form = document.querySelector("form");
			form.addEventListener("submit", function(event) {
			event.preventDefault();
		});
		let inputs = form.getElementsByTagName("input");
		_signInInputs = {nameOrEmail: inputs[0], password: inputs[1]};
		document.getElementById("signInButton").onclick = () => onSignInButtonClicked();
		_modal.bind();
		if (_userActivation.can()) {
			_userActivation.activate().then(response => userActivated(response))
			.catch(exception => _modal.show(strings.value("signUpActivationFailureTitle"), exception));
		}
	};

	function signInButtonClicked() {
		user.signIn({_signInInputs.nameOrEmail.value, _signInInputs.password.value}).then(tokensData => {
			if (!tokensData) {
				_modal.show(strings.value("signInFailureTitle"), strings.value("signInFilureUserDoesNotExist"));
				return;
			}
			tokens.save(tokensData);
			router.replace(nextPage);
		})
		.catch(exception => _modal.show(strings.value("signInFailureTitle", exception));
	};


	function userActivated(response) {
		let username = response.name;
		if (!username) {
			_modal.show(strings.value("signUpActivationFailureTitle"), response);
			return;
		}
		_modal.show(strings.value("signUpActivationSuccessTitile"), strings.value("signUpActivationSuccessText"));
		//temporary hack!	
		history.replaceState(null, null, "index.html");
	};
};