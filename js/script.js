
//ativar links menu
const links = document.querySelectorAll('.header-menu a');

console.log(links);

function ativarLink(item) {
    // if (item.href === window.location.href) {
    //     console.log(item)
    // }
    if (window.location.href.includes(item.href)) {
        item.classList.add('ativo')
    }
}

links.forEach(ativarLink);

//ativar links do orcamento

function ativarParametros(item, index) {
    const elemento = document.getElementById(item)
    if (elemento) {
        elemento.checked = true
    }
    console.log(elemento)
    console.log(item, index)
}

const parametros = new URLSearchParams(location.search);
parametros.forEach(ativarParametros)
console.log(parametros);