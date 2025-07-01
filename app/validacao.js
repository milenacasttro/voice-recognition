function verificaSeOChutePossuiUmValorValido (chute){
    const numero = +chute;
    
    if (chuteForInvalido(numero)) {
        console.log('Valor Inválido')
    }

    if (numeroForMaiorOuMenorValorPermitido(numero)) {
        console.log(`Valor Inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor}`)
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}