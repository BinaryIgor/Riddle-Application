export function SignInPage(modal, strings) {
	
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
	
	const _modal = modal;
	const _strings = strings; 
	let signInInputs = {};
	
	this.load = (parent) => {
		parent.innerHTML = template;
		let form = document.querySelector("form");
			form.addEventListener("submit", function(event) {
			event.preventDefault();
		});
		let inputs = form.getElementsByTagName("input");
		signInInputs = {nameOrEmail: inputs[0], password: inputs[1]};
		document.getElementById("signInButton").onclick = () => onSignInButtonClicked();
		_modal.init();
		let urlParams = currentUrlParams();
		if (isNotNullAndHaveDefinedFields(urlParams)) {
			activateUser.call(this, urlParams);
		}
	};

	function signInButtonClicked() {
		let user = {nameOrEmail: this.signInInputs.nameOrEmail.value, password: this.signInInputs.password.value};
		console.log(JSON.stringify(user));
		if (validateSignInUser(user)) {
			signIn.call(this, user);
		} else {
			this.modalController.setTitle(STRINGS.INVALID_SIGN_IN_USER);
			this.modalController.showModal();
		}
	};

	function signIn(user) {
		executePostRequest(ENDPOINTS.SIGN_IN, user)
		.then(tokensData => {
			if (!tokensData) {
				_modal.setTitle(STRINGS.SIGN_IN_FAILURE_TITLE);
				this.modalController.setText(STRINGS.SIGN_IN_FAILURE_USER_DOES_NOT_EXIST);
				this.modalController.showModal();
				return;
			}
			console.log(tokensData);
			saveTokensData(tokensData);
			Router.getInstance().replaceRoute(ROUTES.MAIN_PAGE);
		})
		.catch(exception => {
			this.modalController.setTitle(STRINGS.SIGN_IN_FAILURE_TITLE);
			this.modalController.setText(exception);
			this.modalController.showModal();
		});
	};

function activateUser(urlParams) {
	let id = urlParams[URL_PARAMS_KEYS.ID];
	let toActivateHash = urlParams[URL_PARAMS_KEYS.ACTIVATE];
	let activator = {id: id, hash: toActivateHash};
	console.log(JSON.stringify(activator));
	if (!isNotNullAndHaveDefinedFields(activator)) {
		return;
	}
	executePostRequest(ENDPOINTS.SIGN_UP_ACTIVATE, activator)
		.then(response => onActivateUserSuccess.call(this, response))
		.catch(exception => onActivationUserFailure.call(this, exception));
};

function onActivateUserSuccess(response) {
	if(response) {
		let username = response.name;
		if (!username) {
			onActivationUserFailure(response);
		}
		this.modalController.setTitle(STRINGS.SIGN_UP_ACTIVATION_SUCCESS_TITLE(username));
		this.modalController.setText(STRINGS.SIGN_UP_ACTIVATION_SUCCESS_TEXT);
		this.modalController.showModal();
		//temporary hack!	
		history.replaceState(null, null, "index.html");
	} else {
		onActivationUserFailure.call(this, response);
	}
};

function onActivationUserFailure(response) {
	this.modalController.setTitle(STRINGS.SIGN_UP_ACTIVATION_FAILURE_TITLE);
	this.modalController.setText(response);
	this.modalController.showModal();
};
