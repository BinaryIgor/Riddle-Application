let modalTemplate = 
	`<div class="modal">
		<div class="modal-content">
			<span class="close">&times;</span>
			<h2 id="modalTitleHeader"></h2>
			<p id="modalTextParagraph"></p>
		</div>
	</div>`;

let signInTemplate =
	`<h1>Riddle</h1>
	<input type="text" placeholder="username/email"></input>
	<input type="password" placeholder="password"></input>
	<button id="signInButton">Sign In</button>
	<a href="#sign-up">New? Sign Up.</a>`
	+ modalTemplate;
	
let signUpTemplate = 
	`<h1>Sign Up</h1>
	<input type="email" placeholder="email"></input>
	<input type="text" placeholder="name"></input>
	<input type="password" placeholder="password"></input>
	<button id="signUpButton">Sign Up</button>`
	+ modalTemplate;

export const templates = {
	signInTemplate: signInTemplate,
	signUpTemplate: signUpTemplate
};