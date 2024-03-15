var botao = document.getElementById("nome");
botao.addEventListener("click", alertar, false);
 
function alertar(event){
    if(true){
        alert("Você clicou no botão!!!" + event);
    }
}
