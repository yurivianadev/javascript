var str = 'O pato chato tem sapato de gato'
var regex = /([gp]|ch)ato/g
var arr 

while (arr = regex.exec(str)){
    var msg = 'Encontrei ' + arr[0] + ' em ' + arr.index + '.'
    msg += ' Proximo começa em ' + regex.lastIndex
    console.log(msg)
}