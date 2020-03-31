var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [];

function rendertodo() {
	listElement.innerHTML = '';


	for (todo of todos) {

		var todoElement = document.createElement('li');
		var todoText = document.createTextNode(todo);

		var linkElement = document.createElement('a');

		linkElement.setAttribute('href', '#');

		var linkText = document.createTextNode('Excluir');

		linkElement.appendChild(linkText);

		var pos = todos.indexOf(todo);
		linkElement.setAttribute('onclick', 'deletetodo('+pos+')');

		todoElement.appendChild(todoText);
		todoElement.appendChild(linkElement);
		listElement.appendChild(todoElement);
	}
}

rendertodo();

function addtodo() {
	var todoText = inputElement.value;

	todos.push(todoText);
	inputElement.value = '';
	rendertodo();

}

buttonElement.onclick = addtodo

function deletetodo(pos) {
	todos.splice(pos, 1);
	rendertodo();
}

function saveToStorage() {
	localStorage.setItem('list_todos', JSON.stringfy(todos));
}
