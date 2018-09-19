export function MainPage(router, parentDom, signInPage, strings, tokens) {
	
	const template = `<div class="flex-container-full-screen">
		<div class="tile">${strings.ranking}</div>
		<div class="tile">${strings.games}</div>
		<div class="tile">${strings.profile}</div>
		<div class="tile">${strings.sign_out}</div>
	</div>`;
	const name = "main";
	
	const _router = router;
	const _parentDom = parentDom;
	const _signInPage = signInPage;
	
	this.enter = () => {
		_parentDom.innerHTML = template;
		let _tiles = document.getElementsByClassName("tile");
		//tiles[0].onclick = () => location.href = "#" + ROUTES.RANKING;
		//tiles[1].onclick = () => location.href = "#" + ROUTES.GAMES;
		_tiles[2].onclick = () => _router.push(signInPage);
		_tiles[3].onclick = () => {
			tokens.delete();
			_router.replace(signInPage);
		};	
	}
	
	this.name = () => name;
};
