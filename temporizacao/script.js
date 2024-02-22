function acao(){
    document.write("Executando...<br/>");
}

// Executa de tempo em tempo!
//setInterval(acao, 1000);


var timer = setInterval(acao, 1000);

//Se voce passar uma variavel enquanto essa dai de cima executa ele para a funcao acima
// clearInterval(timer);

//Excuta e para
setTimeout(acao, 3000);