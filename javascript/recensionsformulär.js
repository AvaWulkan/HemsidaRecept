const elForm = document.querySelector('#formulär');
const elName = document.querySelector('#txtName');
const elRecension = document.querySelector('#txtRecension');
const elOutput = document.querySelector('#output');

function response(event){
    let name = elName.value;
    elOutput.textContent = 'Tack för ditt omdömme ' + name + '! :)';
    event.preventDefault();
}

elForm.addEventListener('submit', response, false);

function validateForm() {
    let name = elName.value;
    if (name == "") {
        alert("Name must be filled out");cx
        return false;
    }
}