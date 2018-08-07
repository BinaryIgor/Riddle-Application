let signInTemplate =
	`<h1>Riddle</h1>
	<input type="text" placeholder="username/email"></input>
	<input type="password" placeholder="password"></input>
	<button id="signInButton">Sign In</button>
	<a href="#sign-up">New? Sign Up.</a>`;
let signUpTemplate = 
`<h1>Sign Up</h1>
<input type="email" placeholder="email"></input>
<input type="text" placeholder="name"></input>
<input type="password" placeholder="password"></input>
<button id="signUpButton">Sign Up</button>`;

export const templates = {
	signInTemplate: signInTemplate,
	signUpTemplate: signUpTemplate
};