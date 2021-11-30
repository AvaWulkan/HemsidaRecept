function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.querySelector('#recensioner');
const url = 'data/data.json';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.recensioner);
        console.log("Visa första i json-objektet: " + data.recensioner[0].namn);
        let recensioner = data.recensioner;

        return recensioner.map(function(recension) {
            let li = createNode('li');
            li.innerHTML = recension.namn + ": "  + recension.recension;
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });