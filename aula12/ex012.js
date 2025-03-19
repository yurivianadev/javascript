var agora = new Date()
var tempo = agora.getHours()
console.log(`Agora são exatamente ${tempo} horas`)
if (tempo > 0 && tempo < 5) {
    console.log('Boa Madrugada')
}
else if (tempo >= 5 && tempo <= 11) {
    console.log(`Bom Dia`)
}
else if (tempo >= 12 && tempo <=17){
    console.log(`Boa Tarde`)
}
else if (tempo > 17 && tempo <= 24){
    console.log(`Boa Noite`)
}
else{
    console.log('Erro')
}