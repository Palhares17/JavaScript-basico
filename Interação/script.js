const botao = document.querySelector('.botao');
const btn = document.querySelector('.btn');

function mostrar() {
    const texto = document.querySelector('.texto');
    texto.classList.toggle('ativo');
    btn.classList.toggle('ativo');
}

botao.addEventListener('click', mostrar);

function sumir() {
    const texto = document.querySelector('.texto');
    texto.classList.toggle('ativo');
    btn.classList.toggle('ativo');
}

btn.addEventListener('click', sumir);