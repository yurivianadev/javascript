let amigo = {nome:'Jose', idade:24, pesoatual: 82.3, pesoantigo:0, sexo:'M', engordar(p=0){
    console.log(`Engordou ${p}Kg`)
    if(p!=0){this.pesoantigo += this.pesoatual}
    this.pesoatual +=  p 
    
}}
amigo.engordar()
if(amigo.pesoantigo == 0){
    console.log(`${amigo.nome} pesa ${amigo.pesoatual}Kg `)
}
else{
    console.log(`${amigo.nome} pesava ${amigo.pesoantigo}Kg e agora pesa ${amigo.pesoatual}Kg`)
}
 