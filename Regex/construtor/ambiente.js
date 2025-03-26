var teste = 'abc'
var str = 'Procurando texto abc nesse paragrafo, Abc encontrado'
var regex = new RegExp(teste, 'gi')
console.log(regex.exec(str))
console.log(regex.exec(str))
console.log(regex.exec(str))
