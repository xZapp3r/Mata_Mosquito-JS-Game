

// Script Game mata mosquito
// Variaveis de ambiente
var altura = 0
var largura = 0
var missClick = 0
var vidasPerdida = 0
var tempo = 15


//Funcao para trabalhar com tamanho da janela no Game
function ajustaTamanho(){ 
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustaTamanho()
// estrutura para contagem regressiva para vitoria
var cronometro  = setInterval( function() {

    tempo -= 1

    if (tempo < 0) {
        // remove intervalos da variavel
        clearInterval(cronometro)
        clearInterval(criaMosca)
        // quando tempo esgotar voce vence
        window.location.href = 'vitoria.html'
    }else {
        //caso continuar acima de 0 coloque o valor dentro do nosso elemento HTML para ciencia do jogador
        document.getElementById("cron").innerHTML = tempo
    }
}, 1000)

function elementoRandomico() {
    if (vidasPerdida >= 3){
        window.location.href = "fim_jogo.html"
    }else {
            //Verificando se ha mosquitos
        if(document.getElementById('mosquito')) {
            // Caso sim tera uma vida perdida
            vidasPerdida += 1 
            // perde vida e remove o mosquito
            document.getElementById('mosquito').remove()
            // altera coracoes vazios e cheios dinamicamente no jogo
            document.getElementById('c'+vidasPerdida).src = "imagens/coracao_vazio.png";
        }        
    }
    


    //Criando valor aleatorio de acordo com altura e largura do body, para posicao do alvo, menos 90 para margem de erro 
    var posX = Math.floor(Math.random() * largura) - 90
    var posY = Math.floor(Math.random() * altura) - 90

    //POrem ainda se ela for 0  ira sair do campo (erro comum) decidimos assim caso seja menor q 0 recebera 0
    posX < 0 ? posX = 0 : posX = posX
    posY < 0 ? posY = 0 : posY = posY

    //console.log(posX, posY) //testes
    //console.log(altura, largura) //testes

    //criar o elemento html e atribui-lo a uma variavel
    var mosquito = document.createElement('img')

    //Acessando atributos do elemento html e adicionando imagem seria igual a adicionar o src a imagem
    mosquito.src = 'imagens/mosca.png'

    //Acessando atributo className e atribuindo a classe ja criada
    mosquito.className = tamanho()

    //Definindo a posicao do elemento
    mosquito.style.left = posX + 'px'
    mosquito.style.top = posY + 'px'

    //Para definir livremente a posicao do elemento precisa estar como position absolute
    mosquito.style.position = 'absolute'

    //criando ID para o nosso elemento ser identificado no document
    mosquito.id = 'mosquito'

    //Remove o mosquito com o click evitando perder a vida antes de sumir
    mosquito.onclick = function () {
        mosquito.remove()
    }

    //adcionar o elemento criado a ser filho do body
    document.body.appendChild(mosquito)    
    //console.log(tamanho()) // teste
}

function tamanho(){

    //Executar mudanca de lados e tamanhos do nosso alvo, retornando na funcao a classe do elemento
    var classe = Math.floor(Math.random() * 3)
    switch(classe) {
        case 0:
            return 'mosquito1'           
        case 1:
            return 'mosquito2 ladoB'
        case 2:
            return 'mosquito3 ladoB ihu'
    }
    console.log(classe)

}
