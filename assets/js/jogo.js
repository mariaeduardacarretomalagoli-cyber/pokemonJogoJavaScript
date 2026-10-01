var velocidade = 1
var pontos = 0
var vida = 3
var valorCenario = 0
var posVilao = -153
var posPersonagem = 70
var pulando = false
var pulos = 0


var cenario = document.querySelector('.cenario')
var jogador = document.querySelector('#jogador')
var vilao = document.querySelector('#vilao')

function moverCenario(){
    valorCenario = valorCenario - velocidade
    cenario.style.backgroundPositionX = valorCenario  + 'px'
}
function moveVilao(){
    posVilao = posVilao + velocidade * 5

    vilao.style.right = posVilao + 'px'

    var larguraJogo = cenario.offsetWidth
    if (posVilao > larguraJogo){
        posVilao = -153
        pontos = pontos + 10

        document.querySelector('#valorPontos').innerHTML = pontos

        if (pontos % 50 == 0){
            velocidade = velocidade + 1
        }
    }
}

var contador = 0

function colisao() {
    
    var posJ = jogador.getBoundingClientRect()
    var posV = vilao.getBoundingClientRect()

    if (posV.left < posJ.right && 
        posV.left > posJ.left && 
        posV.top <= posJ.bottom) {

            vida = vida - 1
            posVilao = -153
            pulando = false
            posPersonagem = 70

            if (vida === 2) {
                document.querySelector('#p3').style.display = 'none';
                var dano = document.querySelector('#som')
                dano.play()
            }

            if (vida === 1) {
                document.querySelector('#p2').style.display = 'none';
                var dano = document.querySelector('#som')
                dano.play()
            }
            if (vida === 0) {
                document.querySelector('#p1').style.display = 'none';
                var dano = document.querySelector('#som')
                dano.play()
                window.location.href = "gameover.html"
            }
            salvarRecord()
        }
    }

function cenario2() {
    var cenarios = document.querySelector('#cenarios')

    if (pontos >= 20 && pontos <= 39) {
        cenario.style.backgroundImage = "url('assets/img/cenario2.png')"
        vilao.style.backgroundImage = "url('assets/img/vilao3.png"
        jogador.style.backgroundImage = "url('assets/img/jogador2.png"

    } 
}

function cenario3() {
    var cenarios = document.querySelector('#cenarios')

    if (pontos >= 40) {
        cenario.style.backgroundImage = "url('assets/img/cenario3.png')"
        vilao.style.backgroundImage = "url('assets/img/vilao2.png"
        jogador.style.backgroundImage = "url('assets/img/jogador3.png"

    } 
}



function verificarRecord() {
    var record = localStorage.getItem('#record')

    if (record == null) {
        record = 0
    }
    if (pontos > Number(record)) {
        record=pontos
        localStorage.setItem('#record')
    }
    document.querySelector('#record').innerHTML = record
}
function verificarRecord() {
    var record = localStorage.getItem('#record')

    if (record == null) {
        record = 0
    }
    if (pontos > Number(record)) {
        record=pontos
        localStorage.setItem('#record')
    }
    document.querySelector('#record').innerHTML = record
}

function gameOver() {
    verificarRecord()
}
function gameOver() {
    verificarRecord()
}

function pular(){
    if (pulando === true){
        if(posPersonagem < 300){
            posPersonagem += velocidade + 3
        }else{
            if(contador >= 9){
                pulando = false
                contador = 0
            }else {
                contador += 1
            }
        }
    }else {
        if(posPersonagem > 70){
            posPersonagem -= velocidade + 4
        }else{
            posPersonagem = 70
            pulos = 0
        }
    }

    jogador.style.bottom = posPersonagem + 'px'

}

function musicaTocar() {
    var musica = document.querySelector('#meuSom')
    musica.play()
}

document.addEventListener("keypress", function(event){

    if (event.code === "Space" && posPersonagem === 70) {
        pulando = true    
            
    }
    else if (pontos >=0 && pulos <=2){
        pulando = true
        pulos = pulos + 1
    }

})


// tudo que for feito dentro do setInterval é repetido a cada tempo configurado(aq é 20 milesegundos)

setInterval(function(){
    moverCenario()
    moveVilao()
    pular()
    musicaTocar()
    colisao()
    cenario2()
    cenario3()
    salvarRecord()
    verificarRecord()
    gameOver()
}, 20)




document.addEventListener("keypress", function(event){
    if (event.code === 'Space' && posPersonagem === 70){
        pulando = true
    }

})

// addEventListener - significa que o jv vai ser como uma escuta 
// // fazer com que a tecla do teclado seja 'interativa'