var str = 'Hoje é 25/03/2025 e amanhã será 26/03/25. Meu aniversário é 11/11'
var regex = /\d{1,2}/g;

//var teste = str.search(regex); 

var teste1 = str.match(regex);
console.log(teste1)
