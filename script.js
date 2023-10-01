// Array para armazenar os contatos
let contacts = [];

// Função para adicionar um contato
function addContact() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Verifica se os campos estão preenchidos
    if (name && phone && email) {
        const contact = {
            name: name,
            phone: phone,
            email: email
        };

        contacts.push(contact);
        displayContacts();
        clearForm();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Função para listar todos os contatos
function displayContacts() {
    const contactsList = document.getElementById('contacts');
    contactsList.innerHTML = '';

    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${contact.name}</span>
            <span>${contact.phone}</span>
            <span>${contact.email}</span>
            <button onclick="editContact(${i})">Editar</button>
            <button onclick="deleteContact(${i})">Excluir</button>
        `;
        contactsList.appendChild(listItem);
    }
}

// Função para limpar o formulário
function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
}

// Função para excluir um contato
function deleteContact(index) {
    contacts.splice(index, 1);
    displayContacts();
}

// Função para editar um contato
function editContact(index) {
    const contact = contacts[index];
    document.getElementById('name').value = contact.name;
    document.getElementById('phone').value = contact.phone;
    document.getElementById('email').value = contact.email;
    // Armazenar o índice atual para atualização
    document.getElementById('update-button').setAttribute('data-index', index);
}

// Função para atualizar um contato
function updateContact() {
    const index = document.getElementById('update-button').getAttribute('data-index');
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    if (name && phone && email) {
        const contact = {
            name: name,
            phone: phone,
            email: email
        };

        contacts[index] = contact;
        displayContacts();
        clearForm();
        // Remover o atributo de índice após a atualização
        document.getElementById('update-button').removeAttribute('data-index');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Função para pesquisar contatos
function searchContacts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm) ||
        contact.phone.toLowerCase().includes(searchTerm) ||
        contact.email.toLowerCase().includes(searchTerm)
    );
    displayFilteredContacts(filteredContacts);
}

// Função para exibir contatos filtrados
function displayFilteredContacts(filteredContacts) {
    const contactsList = document.getElementById('contacts');
    contactsList.innerHTML = '';

    for (let i = 0; i < filteredContacts.length; i++) {
        const contact = filteredContacts[i];
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${contact.name}</span>
            <span>${contact.phone}</span>
            <span>${contact.email}</span>
            <button onclick="editContact(${contacts.indexOf(contact)})">Editar</button>
            <button onclick="deleteContact(${contacts.indexOf(contact)})">Excluir</button>
        `;
        contactsList.appendChild(listItem);
    }
}
