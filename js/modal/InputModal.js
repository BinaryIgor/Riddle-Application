export function InputModal(strings) {
	
	const template = 
		`<div class="modal">
			<div class="modal-content">
				<span class="close">&times;</span>
				<h2 id="modalTitleHeader"></h2>
				<input id="modalInput" value="ddd"></input>
				<button id="saveButton">${strings.value("save")}</button>
			</div>
		</div>`;
	const _strings = strings;
	let _modal = {}, _title = {}, _input = {};
	
	this.bind = () => {
		_modal = document.getElementsByClassName("modal")[0];
		_title = document.getElementById("modalTitleHeader");
		_input = document.getElementById("modalInput");
		document.getElementsByClassName("close")[0].onclick = () => _modal.style.display = "none";
		window.onclick = (event) => {
			if (event.target == _modal) {
				_modal.style.display = "none";
			}
		};
	};
	
	this.show = (title, type, value = "") => {
		_modal.innerHTML = title;
		_input.type =  type;
		_input.value = value;
		_modal.style.display = "flex";
	};
	
	this.template = () => template;
};