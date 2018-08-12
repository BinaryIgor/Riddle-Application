import {ROUTES} from "../constants/constants.js";

export class MainPageController {
	init() {
		let tiles = document.getElementsByClassName("tile");
		//tiles[0].onclick = () => location.href = "#" + ROUTES.RANKING;
		//tiles[1].onclick = () => location.href = "#" + ROUTES.GAMES;
		tiles[2].onclick = () => location.href = "#" + ROUTES.PROFILE;
	}
};
