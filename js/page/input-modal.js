export class InputModalController {
	init() {
		this.modal = document.getElementsByClassName("modal")[0];
		this.modalTitleHeader = document.getElementById("modalTitleHeader");
		this.modalInput = document.getElementById("modalInput");
		document.getElementsByClassName("close")[0].onclick = () => this.modal.style.display = "none";
		window.onclick = (event) => {
			if (event.target == this.modal) {
				this.modal.style.display = "none";
			}
		};
	}
	setTitle(title) {
		this.modalTitleHeader.innerHTML = title;
	}
	setInputType(type) {
		this.modalInput.type = type;
	}
	setInputValue(text) {
		this.modalInput.value = text;
	}
	showModal() {
		this.modal.style.display = "flex";
	}
};