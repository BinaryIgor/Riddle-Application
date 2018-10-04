export function Modal() {
	
	const template = 
		`<div class="modal">
		<div class="modal-content">
			<span class="close">&times;</span>
			<h2 id="modalTitleHeader"></h2>
			<p id="modalTextParagraph"></p>
		</div>
	</div>`;
	
	let modal = {}, modalTitle = {}, modalText ={};
	
	this.bind = () => {
		modal = document.getElementsByClassName("modal")[0];
		modalTitle = document.getElementById("modalTitleHeader");
		modalText = document.getElementById("modalTextParagraph");
		document.getElementsByClassName("close")[0].onclick = () => modal.style.display = "none";
		window.onclick = (event) => {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		};
	};
	
	this.show = (title, text) => {
		modalTitle.innerHTML = title;
		modalText.innerHTML = text? text : "";
		modal.style.display = "flex";
	};
	
	this.template = () => template;
	
};