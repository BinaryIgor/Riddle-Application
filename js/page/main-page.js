export function MainPage(router, signInPage, strings, tokens) {
	
	const template = `<div class="flex-container-full-screen">
		<div class="tile">${strings.ranking}</div>
		<div class="tile">${strings.games}</div>
		<div class="tile">${strings.profile}</div>
		<div class="tile">${strings.sign_out}</div>
	</div>`;
	
	this.name = "index.html";
	let _router = router;
	let _signInPage = signInPage;
	
	this.init = (rootElement) => {
		rootElement.innerHTML = template;
		let _tiles = document.getElementsByClassName("tile");
		//tiles[0].onclick = () => location.href = "#" + ROUTES.RANKING;
		//tiles[1].onclick = () => location.href = "#" + ROUTES.GAMES;
		_tiles[2].onclick = () => router.push(signInPage.name);
		_tiles[3].onclick = () => {
			tokens.delete();
			router.replace(signInPage.name);
		};
		
	}
};
