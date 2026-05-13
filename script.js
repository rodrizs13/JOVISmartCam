
// ALERT + PROMPT
let nome = prompt("Digite seu nome:");
alert("Bem-vindo, " + nome + "!");

// LOGIN
function login() {
    let u = usuario.value;
    let s = senha.value;

    if(u === "" || s === "") {
        alert("Preencha tudo!");
    } else {
        status.innerText = "Bem-vindo, " + u + "!";
    }
}

// BOTÃO
function clicar() {
    resposta.innerText = "A IA foi ativada!";
}

// SLIDESHOW + TEXTO
let imagens = ["cachhoro.png", "grava.png", "nova.png"];
let textos = [
    "Fotos ilegíveis e dificuldade ao registrar conteúdos.",
    "Caderno digital nítido e ganho de tempo.",
    "IA escolhe automaticamente a melhor imagem."
];

let i = 0;

function proxima() {
    i = (i + 1) % imagens.length;
    slide.src = imagens[i];
    textoSlide.innerText = textos[i];
}

// EVENTO + INICIAL
document.addEventListener("DOMContentLoaded", () => {
    textoSlide.innerText = textos[0];

    resposta.onmouseover = () => resposta.style.color = "yellow";
});
