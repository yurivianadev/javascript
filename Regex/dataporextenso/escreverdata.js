var str = "hoje é 25/03/2025 e amanha será 26/03/2025. Meu aniversário é 11/11";
var meses = ['jan',
    'fev',
    'mar',
    'abr',
    'mai',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dez'];

function dataporextenso(str){
    var regex = /(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?/g;
    return str.replace(regex, function(a,b,c,d,e,f){
    var dia = b + ' de ' + meses[parseInt(c-1)];
    dia += (d) ? ' de ' + d : '';
    return dia;
   })
}

str = dataporextenso(str)

console.log(str)