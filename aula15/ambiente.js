let vaga = ['Porshe', 'Mustang','Ferrari']
let num = [1, 29, 13, 59, 22, 12, 54]
num.push(3)
num.sort()
console.log(num)
console.log(num.length)
console.log('----------')

var pos = num.indexOf(54)
if (pos == -1){
    console.log('O valor não existe')
}else{console.log(`O valor 54 está na posição ${pos+1}`)}
/*for (var pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

/*for (let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/