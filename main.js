const form = document.getElementById('formulario')
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const telefone = document.getElementById('telefone');
let contagem = 0;

let arrayContatos = [];


form.addEventListener('submit', function(e) {   

    
    e.preventDefault();

    adicionaLinha()
    renderizaLinha()
    
    
});

function adicionaLinha() {

let linha = '<tr>'
    linha += `<td>${nome.value}</td>`
    linha += `<td>${sobrenome.value}</td>`
    linha += `<td>${telefone.value}</td>`
    linha += '</tr>'
    arrayContatos += linha
    
nome.value = '';
sobrenome.value = '';
telefone.value = '';


}

function renderizaLinha() {

const corpoTabela = document.querySelector('tbody');
corpoTabela.innerHTML = arrayContatos;

const totalContatos = document.getElementById('contagem');
totalContatos.innerHTML = contagem += 1;

}