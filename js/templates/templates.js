import {STRINGS} from "../constants/constants.js";

let modal = 
	`<div class="modal">
		<div class="modal-content">
			<span class="close">&times;</span>
			<h2 id="modalTitleHeader"></h2>
			<p id="modalTextParagraph"></p>
		</div>
	</div>`;

let inputModal =
	`<div class="modal">
		<div class="modal-content">
			<span class="close">&times;</span>
			<h2 id="modalTitleHeader"></h2>
			<input id="modalInput" value="ddd"></input>
			<button id="saveButton">${STRINGS.SAVE}</button>
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
		${modal}
	</div>`;
			
		
let profile =
	`<div class="flex-container-full-screen">
		<img class="profile-img"></img>
		<div class="center-full-width">
			<input type="file"></input>
			<button style="display: none">${STRINGS.SAVE}</button>
			</br>
			<input type="email" readonly></input>
			<button>${STRINGS.EDIT}</button>
			</br>
			<input type="text" readonly></input>
			<button>${STRINGS.EDIT}</button>
			</br>
			<input type="password" readonly></input>
			<button>${STRINGS.EDIT}</button>
		</div>
		${inputModal}
	</div>`;
		
export const templates = {
	signIn: signIn,
	signUp: signUp,
	mainPage: mainPage,
	profile: profile
};