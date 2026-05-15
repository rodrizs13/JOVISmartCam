const nome = prompt("Digite seu nome");

if(!nome || nome.trim()===""){
document.body.innerHTML="";
alert("Acesso cancelado");
}else{

const senha = prompt("Digite qualquer senha");

if(!senha || senha.trim()===""){
document.body.innerHTML="";
alert("Senha inválida");
}else{
alert("Bem-vindo, "+nome+"!");
document.getElementById("site").style.display="block";
}

}

const slides = [

{
img:"imagem.png",
texto:"A IA melhora brilho e nitidez automaticamente."
},

{
img:"legal.png",
texto:"Vídeos estabilizados em tempo real."
},

{
img:"ia.png",
texto:"Reconhecimento inteligente de objetos."
}

];

let atual = 0;

function mostrarSlide(i){

const slide = document.getElementById("slide");

slide.style.opacity = 0;

setTimeout(()=>{

slide.src = slides[i].img;

document.getElementById("texto-slide").innerHTML =
"<span class='destaque'>JOVI AI:</span> " + slides[i].texto;

slide.style.opacity = 1;

},200);

}

function proximoSlide(){

atual++;

if(atual >= slides.length){
atual = 0;
}

mostrarSlide(atual);

}

function slideAnterior(){

atual--;

if(atual < 0){
atual = slides.length - 1;
}

mostrarSlide(atual);

}

document.addEventListener("DOMContentLoaded",()=>{
mostrarSlide(atual);
});

const respostas = {

oi:"Olá! Eu sou a IA da JOVI 👋",

ola:"Oi! Como posso ajudar você?",

camera:"A JOVI Smart Cam usa inteligência artificial avançada.",

câmera:"A JOVI Smart Cam usa inteligência artificial avançada.",

ia:"A IA melhora fotos e vídeos automaticamente.",

bateria:"A bateria foi otimizada para uso prolongado.",

qualidade:"A câmera possui captura avançada com tecnologia ZEISS.",

recursos:"Os recursos incluem SmartScan, estabilização e visão computacional.",

video:"Os vídeos ficam mais suaves graças à estabilização IA.",

foto:"A câmera ajusta iluminação e foco automaticamente.",

gravação:"A IA estabiliza vídeos em tempo real.",

default:"Não entendi 😅 Pergunte sobre IA, câmera, qualidade, vídeo ou recursos."

};

function enviarMensagem(){

const input = document.getElementById("chat-input");

const texto = input.value.trim();

if(texto==="") return;

adicionarMensagem(texto,"user");

input.value="";

const msg = texto.toLowerCase();

let resposta = respostas.default;

for(let chave in respostas){

if(msg.includes(chave)){
resposta = respostas[chave];
break;
}

}

setTimeout(()=>{
adicionarMensagem(resposta,"ia");
},600);

}

function adicionarMensagem(texto,tipo){

const chat = document.getElementById("chat-container");

const box = document.createElement("div");

box.className =
tipo==="user"
? "chat-message user-message"
: "chat-message ia-message";

box.innerHTML = `
<strong>${tipo==="user" ? "VOCÊ" : "IA JOVI"}</strong>
<p>${texto}</p>
`;

chat.appendChild(box);

chat.scrollTop = chat.scrollHeight;

}

document.addEventListener("DOMContentLoaded",()=>{

const input = document.getElementById("chat-input");

input.addEventListener("keypress",e=>{

if(e.key==="Enter"){
enviarMensagem();
}

});

});
