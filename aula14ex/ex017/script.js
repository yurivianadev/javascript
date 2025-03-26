function GerarTabuada(){
    var ntxt = document.getElementById('inumero')
    var resposta = document.getElementById('resposta')
    var r = 0
    resposta.innerHTML=''
    
    
    if(ntxt.value.length > 0)
    {   var n = Number(ntxt.value)
        for (var n ; r <= 10; r++){
            let elemento = document.createElement('option') 
            elemento.text = `${n} X ${r} = ${n * r} `
            elemento.value = `resposta${n}`
            resposta.appendChild(elemento)
        }

    }
    else{alert('Digite um número')}
    
    
    
}