const imagens = document.querySelectorAll("#galeria li img");

function galeriaTroca(event) {
	const principal = document.querySelector(".principal");
	const clicada = event.currentTarget;
	principal.src = clicada.src;
	principal.alt = clicada.alt;
}

function galeriaClick(imagem) {
	imagem.addEventListener("click", galeriaTroca);
}

imagens.forEach(galeriaClick);
