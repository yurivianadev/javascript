var idade = 67
console.log(`Você tem ${idade} anos seu voto é:`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
        console.log('Voto facultativo')
} else {
        console.log('Voto obrigatorio')
}
