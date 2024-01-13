const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const target = '1 aug 2024'

function countDown(){
    const dataTarget = new Date(target) // o comando Date faz a contagem do tempo em mili segundos
    const hoje = new Date()
    
    const segundoTotal = (dataTarget-hoje) / 1000 // por isso divido por 1000 para chegar na somatória de segundos

    const finalDias = Math.floor(segundoTotal / 60 / 60 / 24)
    const finalHoras = Math.floor(segundoTotal / 60 / 60) % 24
    const finalMinutos = Math.floor(segundoTotal / 60) % 60
    const finalSegundos = Math.floor(segundoTotal) % 60  //Math.floor serve para pegar o numero inteiro

    dia.innerHTML = finalDias
    hora.innerHTML = formatacao(finalHoras)
    minuto.innerHTML = formatacao(finalMinutos)
    segundo.innerHTML = formatacao(finalSegundos)

}

function formatacao(tempo){
    return tempo <10? `0${tempo}` : tempo // lendo a função de forma pratica
    // se o tempo for menor que 10 vai retornar o 0 concatenado com o tempo;
    //se não, volta o tempo normal
}

countDown()
setInterval(countDown, 1000)// função ja existente para setar um intervalo de tempo
                            //como ja foi falado antes, o js conta segundos em milisegundos
                            //por isso o 1000 