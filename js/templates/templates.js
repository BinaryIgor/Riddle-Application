import {STRINGS} from "../constants/constants.js";

let modal = 
	`<div class="modal">
		<div class="modal-content">
			<span class="close">&times;</span>
			<h2 id="modalTitleHeader"></h2>
			<p id="modalTextParagraph"></p>
		</div>
	</div>`;

let signIn =
	`<div class="flex-container-full-screen">
		<h1>Riddle</h1>
		<form class="center-full-width">
			<input type="text" placeholder="${STRINGS.NAME_EMAIL}"></input>
			</br>
			<input type="password" placeholder="${STRINGS.PASSWORD}"></input>
			</br>
			<button id="signInButton">${STRINGS.SIGN_IN}</button>
		</form>
		<a href="#sign-up">${STRINGS.NEW_SIGN_UP}</a>
	</div>`
	+ modal;
	
let signUp = 
	`<div class="flex-container-full-screen">
		<h1>Sign Up</h1>
		<form class="center-full-width">
			<input type="email" placeholder="${STRINGS.EMAIL}"></input>
			</br>
			<input type="text" placeholder="${STRINGS.NAME}"></input>
			</br>
			<input type="password" placeholder="${STRINGS.PASSWORD}"></input>
			</br>
			<button id="signUpButton">${STRINGS.SIGN_UP}</button>
		</form>
	</div>`
	+ modal;
		
let mainPage = 
	`<div class="flex-container-full-screen">
		<div class="tile">${STRINGS.RANKING}</div>
		<div class="tile">${STRINGS.GAMES}</div>
		<div class="tile">${STRINGS.PROFILE}</div>
	</div>`;
		
		
let profile =
	`<div class="grid-container-two-columns full-screen">
		<img class="profile-img"></img>
		<input style="grid-column: 1 / span 2" type="file"></input>
		<input type="email"></input>
		<button>${STRINGS.EDIT}</button>
		<input type="text"></input>
		<button>${STRINGS.EDIT}</button>
		<input type="password"></input>
		<button>${STRINGS.EDIT}</button>
		<p>${STRINGS.RANKING}</p>
		<p id="rankingParagraph"></p>
	</div>`;
		
export const templates = {
	signIn: signIn,
	signUp: signUp,
	mainPage: mainPage,
	profile: profile
};