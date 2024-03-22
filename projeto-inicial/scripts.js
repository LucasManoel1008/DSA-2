var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
 var email = document.getElementById("nome");
var nome = document.getElementById("saida-de-dados");
var tel = document.getElementById("tel");
var cep = document.getElementById("cep");
var log = document.getElementById("log");
var num = document.getElementById("num");
var comp = document.getElementById("comp");
var bair = document.getElementById("bair");
var city = document.getElementById("city");
var esta = document.getElementById("esta");

function alertar(event){
    if(true){
        //alert("Você clicou no botão!!!" + nome.value);

        const url = `https://viacep.com.br/ws/${cep.value}/json/`;


        fetch(url)
        .then(resposta=>resposta.json())
        .then(dados=>alert(dados.logradouro))

    nome.innerText = "Nome: "
    + email.value+ "\n Email:  "
    +email.value + "\n Telefone:   " 
    + tel.value + "\n CEP:    " 
    + cep.value +  "\n Logradouro: " 
    + log.value + "\n Número: "
    + num.value + "\n Complemento: " 
    + comp.value + "\n Bairro:    " 
    + bair.value + "\n Cidade:    " 
    + city.value + "\n Estado:    " 
    + esta.value;
    }
}
