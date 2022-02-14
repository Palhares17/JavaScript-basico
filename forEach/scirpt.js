const array = ['JS', 'HTML', 'CSS', 'NODE.JS', 'PHP'];
const body = document.querySelector('body');

function adicionarBody(item) {
    body.innerHTML += "<li>" + item + "</li>";
}

array.forEach(adicionarBody);
