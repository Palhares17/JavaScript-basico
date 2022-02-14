const links = document.querySelectorAll('nav a');

function ativarLink(link) {
    const href = link.href;
    const url = document.location.href;

    if(href === url) {
        link.style.color = 'red';
        link.style.background = 'black';
    }
}

links.forEach(ativarLink);