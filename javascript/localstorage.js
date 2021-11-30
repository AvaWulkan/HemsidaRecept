const elForm = document.querySelector('#namn');
const elName = document.querySelector('#txtName');

// Store
function saveInput(event){
    let name = elName.value;
    localStorage.setItem('name', name);
    event.preventDefault();
    window.location.reload();
}
elForm.addEventListener('submit', saveInput, false);

// Retrieve
document.querySelector('#output').innerHTML = localStorage.getItem('name');