

let randomNumber = parseInt(Math.random()*100+1)

//constantes para manipular os elementos html

const submit = document.querySelector('#jogar')
const jogada = document.querySelector('#txtNumero')
const jogadaAnterior = document.querySelector('.vezes')
const jogadasRestantes = document.querySelector('.numChances')
const recomecar = document.querySelector('.resultados')
const avisos = document.querySelector('.avisos')

//criando um paragrafo usando o javaScript
const p = document.createElement('p')

//criando vetor para receber numeros jogados
let numerosJogados = []
//criando um contador para as jogadas
let minhasJogadas = 1
//variavel que permite o usuario jogar
let playGame = true

if(playGame) {
    submit.addEventListener('click',function(e){
        e.preventDefault()

        let tentativa = parseInt(jogada.value) //armazenando o conteúdo da caixa de texto
        validaChances(tentativa) //função que irá validar o conteúdo jogado


    })
}

function validaChances(tentativa){
    if(isNaN(tentativa)){
        alert('Atenção: para jogar, informe um valor numérico entre 1 e 100')
        jogada.value = '' //Limpando o conteúdo da caixa de texto
        jogada.focus() //setando o foco na caixa de texto
    }
    else if(tentativa < 1 || tentativa > 100) {
        alert( 'atenção,favor informar um valor entre 1 e 100')
        jogada.value = ''
        jogada.focus()
    }

    else if(numerosJogados.includes(tentativa)){
        alert( 'Atenção: o número informado já foi jogado')
        jogada.value = ''
        jogada.focus()
    }

else{
    numerosJogados.push(tentativa) //empurrando elemento para o vetor
    if(minhasJogadas === 6 && tentativa !== randomNumber){
        displayTentativas(tentativa) //função
        msg(`Game Over! <br> O número correto era ${randomNumber} `) //função
        fimJogo() // função
    }
        else{
        displayTentativas(tentativa)
        checarTentativas(tentativa)
          }
    }

}

function checarTentativas(tentativa){
    if(tentativa === randomNumber){
        msg('Parabéns, você acertou o número')
        fimJogo()
    }
    else if(tentativa < randomNumber){
        msg('Palpite baixo, tente novamente')
    }
    else if(tentativa > randomNumber){
        msg('Alto demais, tente novamente')
    }
}

function displayTentativas(tentativa){
    jogada.value = '' //limpa a caixa para a próxima jogada
    jogada.focus()
    jogadaAnterior.innerHTML += `${tentativa} `   // vamos inserir uma informação dentro de um elemento html
    minhasJogadas++
    jogadasRestantes.innerHTML = `${ 7 - minhasJogadas}`
}

function msg(texto){
    avisos.innerHTML = `<h1> ${texto} </h1>`

}

function fimJogo(){
    jogada.value = ''
    jogada.setAttribute('disabled','')
    submit.setAttribute('disabled','')
    
    p.classList.add('button')//adicione um estilo para o botão
    p.innerHTML = '<h1 id="iniciarJogada"> Iniciar o Jogo </h1>'
    recomecar.appendChild(p)
    playGame = false
    iniciarJogo()


}

function iniciarJogo(){
    const botaoIniciar = document.querySelector('iniciarJogada')
    botaoIniciar.addEventListener('click', function(){
        randomNumber = parseInt(Math.random()*100+1)
        numeroJogados = []
        minhasJogadas = 1
        jogadasAnteriores.innerHTML= ''
        avisos.innerHTML = ''
        jogadasRestantes.innerHTML = `${ 7 - minhasJogadas}`
        jogada.removeAttribute('disabled','')
        submit.removeAttribute('disabled','')
    })
}