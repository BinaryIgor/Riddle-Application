import {ROUTES} from "../constants/constants.js";
import {Router} from "../router/router.js";
import {deleteTokensData} from "../service/session-storage-service.js";

export class MainPageController {
	init() {
		let tiles = document.getElementsByClassName("tile");
		//tiles[0].onclick = () => location.href = "#" + ROUTES.RANKING;
		//tiles[1].onclick = () => location.href = "#" + ROUTES.GAMES;
		tiles[2].onclick = () => Router.getInstance().pushRoute(ROUTES.PROFILE);
		tiles[3].onclick = () => {
			deleteTokensData();
			Router.getInstance().replaceRoute(ROUTES.SIGN_IN);
		};
		
	}
};
