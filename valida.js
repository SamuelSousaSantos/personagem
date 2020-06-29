var titulo = document.querySelector(".titulo");
titulo.textContent = "Sistema Pokén Mon";

var personagens = document.querySelectorAll(".personagem");

for(var i = 0; i < personagens.length; i++){
    var personagem = personagens[i] ;
    
var tdPeso = personagem.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = personagem.querySelector(".info-altura");
var altura = tdAltura.textContent;


}
