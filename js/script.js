
//ativar links menu -----------------------------------------------------------------
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

//ativar links do orcamento -----------------------------------------------------------------

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

//perguntas frequentes. -----------------------------------------------------------------

function ativarPergunta(event) {
    console.log(event)
    const pergunta = event.currentTarget
    const control = pergunta.getAttribute('aria-controls')
    const resposta = document.getElementById(control)
    // pergunta.setAttribute('aria-expanded', "true")
    resposta.classList.toggle('ativa')// toggle -> add e remove 
    console.log(resposta)
}

function eventosPergunta(item) {
    item.addEventListener('click', ativarPergunta)
    console.log(item)
}

const perguntas = document.querySelectorAll('.perguntas button')
perguntas.forEach(eventosPergunta)

// Galeria de bicicletas -----------------------------------------------------------------

const galeria = document.querySelectorAll('.bicicleta-imagens img')
const galeriaContainer = document.querySelector('.bicicleta-imagens')

function trocarImagem(event) {
    const img = event.currentTarget
    const media = window.matchMedia('(min-width: 800px)').matches
    if (media) galeriaContainer.prepend(img)//remove o elemento e coloca-o na frente
    console.log(galeriaContainer)
}

galeria.forEach((item) => {
    item.addEventListener('click', trocarImagem)
})