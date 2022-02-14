const botao = document.querySelector('button');

function somar() {
    const div = document.querySelector('div');
    const valor = Number(div.innerHTML) + 1;
    
    if(valor < 10) {
        div.innerHTML = valor;
    }
    else {
        div.innerHTML = "Não é possível adicionar mais!";
    }
}

botao.addEventListener('click', somar);