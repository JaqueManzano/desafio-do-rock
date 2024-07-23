// script.js

// Array de itens que será usado para gerar a lista
const items = ['96825500', '17400084', '96825550', 'Maracanã'];

// Seleciona o elemento <ul> pelo seu ID
const listElement = document.getElementById('myList');

// Usa forEach para iterar sobre o array de itens
items.forEach((item, index) => {
    // Cria um novo elemento <li>
    const listItem = document.createElement('li');
    
    // Cria um label associado ao checkbox
    const label = document.createElement('label');
    label.textContent = item;
    label.setAttribute('for', `item${index}`);

    // Cria um checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `item${index}`;

    // Adiciona o checkbox e o label ao <li>
    listItem.appendChild(label);

    // Adiciona o <li> à lista
    listElement.appendChild(listItem);
});
