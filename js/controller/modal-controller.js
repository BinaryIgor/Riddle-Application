export class ModalController {
	init() {
		this.modal = document.getElementsByClassName("modal")[0];
		this.modalTitleHeader = document.getElementById("modalTitleHeader");
		this.modalTextParagraph = document.getElementById("modalTextParagraph");
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
	setText(text) {
		this.modalTextParagraph.innerHTML = text;
	}
	showModal() {
		this.modal.style.display = "flex";
	}
};