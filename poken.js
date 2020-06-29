//estou acessando o botãoAdiciona
var botaoAdicionar = document.querySelector("#adicionar-personagem");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    // estou acessando os campos do formulario
    var form = document.querySelector("#form-adiciona");

var nome = form.nome.value;
var peso = form.peso.value;
var altura = form.altura.value;
var genero = form.genero.value;
var categoria = form.categoria.value;
var habilidades = form.habilidades.value; //observação fazer teste com console.log aqui e dpois seguir 

// nesse momento estou criando linhas (as tr)

var personagemTr = document.createElement("tr")

var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var generoTd = document.createElement("td");
var categoriaTd = document.createElement("td");
var habilidadesTd = document.createElement("td");


nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
generoTd.textContent = genero;
categoria.textContent = categoria;
habilidades.textContent = habilidades;


// adicionando filhos a variavel pai com uso do appendChild
personagemTr.appendChild(nomeTd);
personagemTr.appendChild(pesoTd);
personagemTr.appendChild(alturaTd);
personagemTr.appendChild(generoTd);
personagemTr.appendChild(categoriaTd);
personagemTr.appendChild(habilidadesTd);


var tabela = document.querySelector("#tabela-personagens");

tabela.appendChild(personagemTr);

});



