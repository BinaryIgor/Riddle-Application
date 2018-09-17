export function Modal {
	
	const template = 
		`<div class="modal">
		<div class="modal-content">
			<span class="close">&times;</span>
			<h2 id="modalTitleHeader"></h2>
			<p id="modalTextParagraph"></p>
		</div>
	</div>`;
	
	let modal = {}, modalTextParagraph = {}, modalTextParagraph ={};
	
	this.init = () => {
		modal = document.getElementsByClassName("modal")[0];
		modalTitleHeader = document.getElementById("modalTitleHeader");
		modalTextParagraph = document.getElementById("modalTextParagraph");
		document.getElementsByClassName("close")[0].onclick = () => modal.style.display = "none";
		window.onclick = (event) => {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		};
	};
	
	this.writeTitle = (title) => {
		modalTitleHeader.innerHTML = title;
	};
	
	this.writeText = (text) => {
		modalTextParagraph.innerHTML = text;
	};
	
	this.showModal = () => {
		modal.style.display = "flex";
	};
	
	this.template = () => template;
	
};