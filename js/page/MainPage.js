export function MainPage(router, profilePage, strings, tokens) {
	
	const template = `<div class="flex-container-full-screen">
		<div class="tile">${strings.value("ranking")}</div>
		<div class="tile">${strings.value("games")}</div>
		<div class="tile">${strings.value("profile")}</div>
		<div class="tile">${strings.value("signOut")}</div>
	</div>`;
	const name = "main";
	
	const _router = router;
	
	this.enter = () => {
		document.body.innerHTML = template;
		let _tiles = document.getElementsByClassName("tile");
		//tiles[0].onclick = () => location.href = "#" + ROUTES.RANKING;
		//tiles[1].onclick = () => location.href = "#" + ROUTES.GAMES;
		_tiles[2].onclick = () => _router.push(profilePage);
		_tiles[3].onclick = () => {
			tokens.delete();
			_router.replaceWithDefault();
		};	
	}
	
	this.name = () => name;
};
