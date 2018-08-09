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
	`<h1>Riddle</h1>
	<input type="text" placeholder="${STRINGS.NAME_EMAIL}"></input>
	<input type="password" placeholder="${STRINGS.PASSWORD}"></input>
	<button id="signInButton">${STRINGS.SIGN_IN}</button>
	<a href="#sign-up">${STRINGS.NEW_SIGN_UP}</a>`
	+ modal;
	
let signUp = 
	`<h1>Sign Up</h1>
	<input type="email" placeholder="${STRINGS.EMAIL}"></input>
	<input type="text" placeholder="${STRINGS.NAME}"></input>
	<input type="password" placeholder="${STRINGS.PASSWORD}"></input>
	<button id="signUpButton">${STRINGS.SIGN_UP}</button>`
	+ modal;
		
let mainPage = 
	`<div class="tile">${STRINGS.RANKING}</div>
	<div class="tile">${STRINGS.GAMES}</div>
	<div class="tile">${STRINGS.PROFILE}</div>`;
		
export const templates = {
	signIn: signIn,
	signUp: signUp,
	mainPage: mainPage
};